import React from 'react'
import styles from '../style'

function Header() {
  return (
    <div className='w-full flex py-6 justify-between items-center'>
         <h1 className={`${styles.heading1} text-[#0693e3]`}>Equator Scraper List</h1> 
    </div>
  )
}

export default Header