import React from 'react'
import Task from './Task'
const Column = ({state}) => {
  return (
    <div className='min-h-[20rem] bg-gray-700 text-white w-[33%] max-w-[10rem] rounded-lg me-4 p-2'>
        <p className='mb-3'>{state}</p>
        <Task title={"Todo"}/>
    </div>
  )
}

export default Column