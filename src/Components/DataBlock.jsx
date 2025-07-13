import { useEffect, useState } from 'react'
import './DataBlock.css'



function DataBlock({title, data}) {
  

  return (
    <>
    <div id="block">
        <h2>{title}:</h2>
        <h3>{data}</h3>
    </div>
      
    </>
  )
}

export default DataBlock