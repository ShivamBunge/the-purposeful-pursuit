import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        
        <ul>
            <li>About</li>
            <li>Mental Health</li>
            <li>Physical Health</li>
        </ul>
    </div>
  )
}

export default Navbar