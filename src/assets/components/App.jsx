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
              <div className="bg-white rounded-2xl rounded-br-4xl shadow-xl shadow-[#01454b]/15 s:w-full lg:w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="col-auto py-12 px-5 lg:px-0 lg:ps-10">
                    <Formulario/>
                  </div>
                  {<div className="col-auto bg-azul rounded-0 lg:rounded-bl-[6rem] lg:rounded-tr-4xl lg:rounded-br-4xl">
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
