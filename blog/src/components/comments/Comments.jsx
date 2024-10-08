import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
            <textarea placeholder='write a comment...' className={styles.input}></textarea>
            <button className={styles.button}>Send</button>
        </div>
      ) : (<Link href="/login"> Login to write a comment </Link>)}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/david.jpg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>David Beckham</span>
                    <span className={styles.date}>01.01.2023</span>
                </div>
            </div>
            <p className={styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/alan.jpg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Alan Walker</span>
                    <span className={styles.date}>06.02.2023</span>
                </div>
            </div>
            <p className={styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/harry.jpg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Harry Styles</span>
                    <span className={styles.date}>25.02.2023</span>
                </div>
            </div>
            <p className={styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.Lorem ipsum dolor sit.</p>
        </div>

        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/vikram.jpg" alt='' width={50} height={50} className={styles.image}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>Vikram Seth</span>
                    <span className={styles.date}>08.05.2023</span>
                </div>
            </div>
            <p className={styles.desc}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis.Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
