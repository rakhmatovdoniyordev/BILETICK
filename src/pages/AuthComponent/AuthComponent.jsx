import { useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth"
import { auth, googleProvider, githubProvider } from "../../firebase"
import { Eye, EyeOff, Mail, Lock, Github } from 'lucide-react'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function AuthComponent() {
  const navigate = useNavigate()
  const [isSignIn, setIsSignIn] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")


  async function handleAuth(e) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (isSignIn) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem("token", await userCredential.user.getIdToken())
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        localStorage.setItem("token", await userCredential.user.getIdToken())
      }


      navigate("/")
      toast('Xush kelibsiz! Siz tizimga muvaffaqiyatli kirdingiz',
        {
          icon: '🙌🏻',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            border: '1px solid #C61F1F',
          },
        }
      );
    } catch (error) {
      console.error("Xatolik yuz berdi:", error)
      setError(
        error.code === "auth/invalid-credential"
          ? "Email yoki parol noto'g'ri"
          : error.code === "auth/email-already-in-use"
            ? "Bu email allaqachon ro'yxatdan o'tgan"
            : "Xatolik yuz berdi. Qaytadan urinib ko'ring."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSignUpWithProvider = async (provider) => {
    try {
      setLoading(true)
      setError("")

      const result = await signInWithPopup(auth, provider)
      localStorage.setItem("token", await result.user.getIdToken())

      navigate("/")
      toast('Xush kelibsiz! Siz tizimga muvaffaqiyatli kirdingiz',
        {
          icon: '🙌🏻',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            border: '1px solid #C61F1F',
          },
        }
      );
    } catch (error) {
      console.error("Auth xatolik:", error.message)
      setError("Ijtimoiy tarmoq orqali kirishda xatolik yuz berdi")
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-black/95 px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-red-600/20 bg-black/80 text-white shadow">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-bold text-white">{isSignIn ? "Kirish" : "Ro'yxatdan o'tish"}</h3>
          <p className="text-sm text-gray-400">
            {isSignIn
              ? "Hisobingizga kirish uchun ma'lumotlaringizni kiriting"
              : "Yangi hisob yaratish uchun ma'lumotlaringizni kiriting"}
          </p>
        </div>
        <div className="p-6 pt-0">
          {error && (
            <div className="mb-4 rounded-md bg-red-500/20 p-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-gray-700 bg-gray-900/60 px-3 py-1 pl-10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-300">
                Parol
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="on"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-gray-700 bg-gray-900/60 px-3 py-1 pl-10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {isSignIn && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-sm text-red-500 hover:text-red-400"
                >
                  Parolni unutdingizmi?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isSignIn ? "Kirish..." : "Ro'yxatdan o'tish..."}
                </>
              ) : (
                isSignIn ? "Kirish" : "Ro'yxatdan o'tish"
              )}
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="h-[1px] flex-1 bg-gray-800"></div>
            <span className="mx-2 text-xs text-gray-500">YOKI</span>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
              onClick={() => handleSignUpWithProvider(googleProvider)}
              disabled={loading}
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google orqali {isSignIn ? "kirish" : "ro'yxatdan o'tish"}
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
              onClick={() => handleSignUpWithProvider(githubProvider)}
              disabled={loading}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub orqali {isSignIn ? "kirish" : "ro'yxatdan o'tish"}
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 border-t border-gray-800 p-6 pt-4">
          <div className="text-center text-sm text-gray-400">
            {isSignIn ? (
              <>
                Hisobingiz yo'qmi?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignIn(false)}
                  className="text-red-500 hover:text-red-400"
                >
                  Ro'yxatdan o'tish
                </button>
              </>
            ) : (
              <>
                Hisobingiz bormi?{" "}
                <button
                  type="button"
                  onClick={() => setIsSignIn(true)}
                  className="text-red-500 hover:text-red-400"
                >
                  Kirish
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
