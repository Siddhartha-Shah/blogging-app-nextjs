import React from 'react'
import style from './page.module.css'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
        src="https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?cs=srgb&dl=pexels-ricky-esquivel-1926988.jpg&fm=jpg&_gl=1*1w7pgna*_ga*MzU4MDEzNTUzLjE2ODczNDY5NDQ.*_ga_8JE65Q40S6*MTY4NzUxNTk2MC4zLjEuMTY4NzUxNTk5MS4wLjAuMA.."
        fill={true}
        className={style.img}
        />
        <div className={style.imageText}>
          <h1 className={style.imageTitle}>Digital Story Teller</h1>
          <h2 className={style.imageDesc}>Handicraft award winning</h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.item}>
          <h1>Who are we?</h1>
          <p className={style.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a 
           type specimen book. It has survived not only five centuries, but also the
           <br/>
           <br/>
            leap into electronic typesetting, remaining essentially unchanged. It was
           popularised in the 1960s with the release of Letraset sheets containing Lorem 
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
           including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={style.item}></div>
        <div className={style.title}>What we do?</div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a 
           type specimen book. It has survived not only five centuries, but also the
           <br/>
           <br/>
           - Dynamic Website fast and handy mobile
        </p>
        <Button url="/contact" text="Contact"/>
      </div>
    </div>
  )
}

export default About