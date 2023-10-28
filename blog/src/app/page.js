import CategoryList from "@/components/categoryList/CategoryList"
import Featured from "@/components/featured/Featured"
import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"
import styles from "./page.module.css"
// import Link from "next/link"

export default function Home(){
  return(
    <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
  </div>
  )
}