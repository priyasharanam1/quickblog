import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.container}>
       <div className={styles.items}>

<Link href="/" className={styles.item}>
  {withImage && (<div className={styles.imageContainer}>
    <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
  </div>)}
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.travel}`}>
      Travel
    </span>
    <h3 className={styles.posttitle}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
    <div className={styles.detail}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>

<Link href="/" className={styles.item}>
  {withImage && (<div className={styles.imageContainer}>
    <Image src="/nature.jpg" alt="" fill className={styles.image}></Image>
  </div>)}
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.culture}`}>
      Culture
    </span>
    <h3 className={styles.posttitle}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
    <div className={styles.detail}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>

<Link href="/" className={styles.item}>
  {withImage && (<div className={styles.imageContainer}>
    <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
  </div>)}
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.fashion}`}>
      Fashion
    </span>
    <h3 className={styles.posttitle}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
    <div className={styles.detail}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>

<Link href="/" className={styles.item}>
  {withImage && (<div className={styles.imageContainer}>
    <Image src="/fish.jpg" alt="" fill className={styles.image}></Image>
  </div>)}
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.coding}`}>
      Coding
    </span>
    <h3 className={styles.posttitle}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
    <div className={styles.detail}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>

<Link href="/" className={styles.item}>
  {withImage && (<div className={styles.imageContainer}>
    <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
  </div>)}
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.style}`}>
      Style
    </span>
    <h3 className={styles.posttitle}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h3>
    <div className={styles.detail}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>

</div>
    </div>
  )
}

export default MenuPosts
