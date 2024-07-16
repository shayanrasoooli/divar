import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <div>
            <Link to='/'>
                 <img src='../../public/divar.svg' className={styles.logo} />
            </Link>

            <span>
                <img src='../../public/location.svg' />
                <p>تهران</p>
            </span>
        </div>
        <div>
            <Link to='/auth'>
                <span>
                    <img src='../../public/profile.svg'/>
                    <p>دیوار من</p>
                </span>
            </Link>

            <Link to='/dashboard' className={styles.button}>
                ثبت آگهی
            </Link>
        </div>
    </header>
  )
}

export default Header