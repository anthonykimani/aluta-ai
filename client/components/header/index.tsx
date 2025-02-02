import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Avatar } from '../ui/avatar'

const Header = () => {
  return (
    <nav className='flex justify-between items-center w-full'>
        <SidebarTrigger />

        <div>
          <Avatar />
        </div>
    </nav>
  )
}

export default Header