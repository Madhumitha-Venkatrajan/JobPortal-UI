import React, { useEffect, useState } from 'react'

const UseBodyScrollLock = () => {

const bodyStyle = document.body.style
const [isLocked,setLocked] = useState (
  bodyStyle.overflowY === 'hidden'
)

useEffect(()=>{
bodyStyle.overflowY = isLocked? 'hidden': 'auto'
},[isLocked,bodyStyle])

}

export default UseBodyScrollLock
