import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = ({imageUrl, altText, date, category}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={altText} fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.detail}>
        <span className={styles.date}>{date} </span>
        <span className={styles.category}>{category}</span>
      </div>
      <Link href="/"><h1 className={styles.head}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1></Link>
      
      <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa debitis...</p>
      <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
