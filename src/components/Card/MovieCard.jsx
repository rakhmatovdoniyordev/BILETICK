import { GiCrown } from 'react-icons/gi'
import { useSelector } from 'react-redux';

export default function MovieCard() {
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  return (
    <section className='mt-12'>
      <div className="container">
        <div>
          <h2 className='text-[30px] font-medium'>Cinematica</h2>
          <p className='text-[16px] font-medium'>7, Улица Алмазар​, Шайхантахурский район</p>
        </div>
        <div className={`grid grid-cols-5 gap-5 pb-10 border-b ${Mode ? "border-b-[#a3a3a3]" : "border-b-[#2D2D2D]"} max-[1310px]:grid-cols-4 max-[990px]:grid-cols-3 max-[720px]:gap-3 max-[650px]:grid-cols-2 max-[470px]:grid-cols-1 max-[470px]:gap-1`}>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 1</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>11:45</span>
                    <div className="flex items-center gap-2">
                      <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                      <GiCrown className="text-red-600 text-2xl" />
                    </div>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>3D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>100 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 1</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>13:00</span>
                    <div className="flex items-center gap-2">
                      <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                      <GiCrown className="text-red-600 text-2xl" />
                    </div>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>75 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 4</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>16:25</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>3D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>65 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 2 – Премьер</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>19:30</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>65 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 3 – Премьер</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>21:00</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>75 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 5</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>22:30</span>
                    <div className="flex items-center gap-2">
                      <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                      <GiCrown className="text-red-600 text-2xl" />
                    </div>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>75 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 5</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>23:45</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>80 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 5</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>00:20</span>
                    <div className="flex items-center gap-2">
                      <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                      <GiCrown className="text-red-600 text-2xl" />
                    </div>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>100 000 сум</span>
              </div>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-[30px] font-medium'>Magic Cinema</h2>
          <p className='text-[16px] font-medium'>174/12, Улица Бабура, Чиланзарский район</p>
        </div>
        <div className='grid grid-cols-5 gap-5 max-[1310px]:grid-cols-4 max-[990px]:grid-cols-3 max-[720px]:gap-3 max-[650px]:grid-cols-2 max-[470px]:grid-cols-1 max-[470px]:gap-1'>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
                <div className="p-4 pb-6">
                    <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 1</div>
                    <div className="flex justify-between items-center">
                      <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>11:45</span>
                      <div className="flex items-center gap-2">
                        <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                        <GiCrown className="text-red-600 text-2xl" />
                      </div>
                    </div>
                </div>
                <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                    <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>3D</span>
                    <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>100 000 сум</span>
                </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 1</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>13:00</span>
                    <div className="flex items-center gap-2">
                      <span className={`${Mode ? "text-black" : "text-white"} text-xl`}>VIP</span>
                      <GiCrown className="text-red-600 text-2xl" />
                    </div>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>75 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 4</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>16:25</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>3D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>65 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 2 – Премьер</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>19:30</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>65 000 сум</span>
              </div>
          </div>
          <div className={`${Mode ? "bg-slate-100" : "bg-zinc-900"} cursor-pointer rounded-2xl overflow-hidden mt-10 max-[990px]:mt-8 max-[720px]:mt-6 max-[470px]:mt-3`}>
              <div className="p-4 pb-6">
                  <div className={`${Mode ? "text-gray-950" : "text-gray-500"} text-lg mb-2`}>Зал № 3 – Премьер</div>
                  <div className="flex justify-between items-center">
                    <span className={`${Mode ? "text-black" : "text-white"} text-4xl font-medium`}>21:00</span>
                  </div>
              </div>
              <div className={`${Mode ? "bg-zinc-400" : "bg-zinc-800"} p-4 flex justify-between items-center`}>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>2D</span>
                  <span className={`${Mode ? "text-slate-900" : "text-slate-200"} text-xl`}>75 000 сум</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}