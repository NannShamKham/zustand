import React from 'react'
import Column from './components/Column'

const App = () => {
  return (
    <div className='bg-gray-500 min-h-[100vh] text-white flex justify-center items-center'>
      <Column state={"PLANNED"}/>
      <Column state={"ONGOING"}/>
      <Column state={"DONE"}/>
    </div>
  )
}

export default App