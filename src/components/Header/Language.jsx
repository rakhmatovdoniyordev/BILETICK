import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { languages } from "../../static";
import ru from "../../assets/RU.png";
import uz from "../../assets/uzbek.webp";
import { useDispatch, useSelector } from "react-redux";
import Mode from "../Mode/Mode";
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Language = ({ func, bool }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user?.email) {
        const nameParts = user.email;
        if (nameParts.length >= 2) {
          setName(nameParts[0][0]);
        }
      } else {
        setName("");
      }
    });

    return () => unsubscribe();
  }, []);
  const user = auth.currentUser;

  const handleLogout = () => {
    dispatch(logout())
    navigate("/auth");
  }

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dark = useSelector((state) => state.isDarkMode.isDarkMode);

  const [selectedLanguage, setSelectedLanguage] = useState("Uz");

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "uz";
    if (storedLang.startsWith("ru")) {
      setSelectedLanguage("Ру");
    } else {
      setSelectedLanguage("Uz");
    }
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("i18nextLng", lang.code);
    setIsOpen(false);
  };

  const flags = {
    uz: uz,
    ru: ru,
  };

  return (
    <div className="relative flex items-center gap-3 z-50 max-[430px]:gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors max-[990px]:hidden"
      >
        <img
          src={flags[i18n.language.split("-")[0]]}
          alt="Language Flag"
          className="w-5 h-5 rounded-full object-contain"
        />
        <span
          className={`${dark ? "text-black" : "text-white-person"} font-aeonik`}
        >
          {selectedLanguage}
        </span>
        <MdKeyboardArrowDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          } ${dark ? "text-black" : "text-white-person"}`}
        />
      </button>
      <Mode />
      <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 50, height: 50 }}>{name.toUpperCase()}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user?.email}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout} style={{ color: "red" }}>
          <ListItemIcon>
            <Logout fontSize="small" color="error"/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
      <div className="hidden max-[990px]:block">
        <button className="border p-1 rounded-lg" onClick={() => func(!bool)}>
          {bool ? (
            <IoIosClose
              className={`${
                dark ? "text-black" : "text-white-person"
              } text-4xl`}
            />
          ) : (
            <LuMenu
              className={`${
                dark ? "text-black" : "text-white-person"
              } text-4xl`}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute top-full ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } mt-2 border border-gray-700 rounded-md py-1 min-w-[100px]`}
        >
          {languages.map((lang, inx) => (
            <button
              key={inx}
              className="w-full px-4 py-2 text-left"
              onClick={() => handleLanguageChange(lang)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Language);
