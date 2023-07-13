import React from 'react'
import './Header.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div>
    <div className='headersection'>
    <div className='container'>
    <div className='row'>
           <div className='col-5'>
                <div className='head-name'>
                    <h3><a href='#'>Magicbricks</a></h3>
                    <a href='#' className='headerfix d-block'>Chennai<KeyboardArrowDownIcon /></a>
                </div>
           </div>
           <div className='col-6'>
               <div className='row1'>
                <div className='header d-block'>
                        <a href='#' className='headerfix'><span>MB Prime</span><KeyboardArrowDownIcon /></a>
                        <a href='#' className='headerfix'><span>Login</span><KeyboardArrowDownIcon /></a>
                </div>     
                    <div className='postbox'>
                       <button><a href='#'>Post Property<span className='freebox'>FREE</span></a></button>
                    </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header