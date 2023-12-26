import React from 'react'

const STATUS = 'PLANNED';

const Task = ({title}) => {
  return (
    <div className='bg-white text-black rounded-sm min-h-[5rem] flex flex-col justify-between'>
      <p>{title}</p>
      <div className="flex justify-between">
        <div className=""></div>
        <p className={`text-sm bg-gray-400 p-1 rounded-sm ${STATUS == 'PLANNED'?'bg-green-200':STATUS=="ONGOING"?"bg-pink-400":STATUS == "DONE"?"bg-blue-200":''}`}>{STATUS}</p>
      </div>
      
      </div>
  )
}

export default Task