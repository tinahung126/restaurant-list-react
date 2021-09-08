import './App.css'
import React from 'react'
import Card from './Components/Card'
function App () {
  return (
    <div className='App'>
      <h1 className='text-center mt-5 mb-5'>餐廳列表</h1>
      <div className='row mb-5'>
        <div className=' col-11 mx-auto'>
          <div className=' row'>
            <Card />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
