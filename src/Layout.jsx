import React from 'react'

function Layout({children}) {
  return (
    <div
    className=' w-full bg-primary h-screen  flex justify-center '
    >{children}</div>
  )
}

export default Layout