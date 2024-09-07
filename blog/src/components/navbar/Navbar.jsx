import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram (1).png" alt="instagram" width={24} height={24}/>
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
      </div>
      <div className={styles.logo}>BlogIt</div>
      <div className={styles.links}>
      <ThemeToggle/>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/comment" className={styles.link}>View</Link>
        <Link href="/write" className={styles.link}>Add Blog</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar
