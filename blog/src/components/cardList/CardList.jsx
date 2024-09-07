import React from 'react'
import styles from './cardList.module.css'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card imageUrl="/nature.jpg" altText="Image 1" date="10.01.2023" category="Nature"/>
        <Card imageUrl="/coding.png" altText="Image 2" date="16.02.2023" category="Care"/>
        <Card imageUrl="/fish.jpg" altText="Image 3" date="22.03.2023" category="Depth of the Sea"/>
        <Card imageUrl="/fashion.png" altText="Image 4" date="10.06.2023" category="Young Minds"/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
