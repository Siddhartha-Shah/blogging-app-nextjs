import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
    <div>@2023SidhuLal all rights reserved</div>
    <div className={styles.social}>
    <Image src="/1.jpg" alt="" width={15} height={15} className={styles.link}/>
    <Image src="/2.jpg" alt="" width={15} height={15} className={styles.link}/>
    <Image src="/3.jpg" alt="" width={15} height={15} className={styles.link}/>
    <Image src="/4.png" alt="" width={15} height={15} className={styles.link}/>
    </div>
    </div>
  )
}

export default Footer