import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


export const metadata = {
    title: "Ashan's Contact",
    description: "This is the Contact page of Ashan's Portfolio",
};
const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt="Contact Us"
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        type="text" placeholder='Name' className={styles.input} />
                    <input
                        type="email" placeholder='Email' className={styles.input} />
                    <textarea
                        placeholder='Message' className={styles.textArea} cols="30" rows="10"></textarea>

                    <Button url="#" text="Send" />
                </form>

            </div>
        </div>
    )
}

export default Contact