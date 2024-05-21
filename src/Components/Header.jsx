import React from 'react'

import logo from '../images/logo.svg'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <div className='text-white'>
<img src={logo} alt=""   className='ps-9 pt-9 w-[130px]'/>


<MenuItem />
    </div>
  )
}

export default Header