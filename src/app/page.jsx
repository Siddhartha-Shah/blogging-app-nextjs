import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.items}>
        <h1 className={styles.title}>Better Design For your digital products</h1>
        <p className={styles.desc}>Turning Your Idea into Reality. We bring together the teams from the global tech industry</p>
        <button className={styles.button}>See our works</button>
      </div>

      <div className={styles.items}>
      <Image src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" width={500} height={500}/>
      </div>

    </div>
    )
} 
