import React from 'react'

export default function Dashlayout({children}) {
  return (
    <div>
        <h3 style={{backgroundColor:"yellow"}}>This is Dashboard Layout page</h3>
      {children}
    </div>
  )
}
