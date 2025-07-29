import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div >
                <p>© 2023 My Website. All rights reserved.</p>
            </div>
            <div className={styles.socialIcons}>
                <Image src="/1.png" alt="Logo" width={15} height={15} className={styles.icon} />
                <Image src="/2.png" alt="Logo" width={15} height={15} className={styles.icon} />
                <Image src="/3.png" alt="Logo" width={15} height={15} className={styles.icon} />
                <Image src="/4.png" alt="Logo" width={15} height={15} className={styles.icon} />
            </div>
        </div>
    )
}

export default Footer