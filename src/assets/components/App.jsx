import { useState } from 'react'
import '@styles/App.css'
import Formulario from '@components/Formulario'
import Resultado from '@components/Resultado'

function App() {
  return (
    <>
      <div className='bg-celeste h-full lg:h-screen'>
        <div className='w-full lg:max-w-[1300px] mx-auto py-10 px-5'>
          <div className='relative lg:fixed inset-0 flex flex-col items-center justify-center'>
              <div className="bg-white rounded-2xl py-7 px-10 shadow-xl shadow-[#01454b]/15 s:w-full lg:w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="col-auto py-5">
                    <Formulario/>
                  </div>
                  {<div className="col-auto bg-azul rounded-2xl">
                    <Resultado/>
                  </div>}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
