import React from 'react'
import styles from '../styles/Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Twitter from '@material-ui/icons/Twitter';
export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.column}>
                <div className={styles.title}>
                    Socials
                    <div className={styles.row}>
                        <InstagramIcon />Instagram
                    </div>
                    <div className={styles.row}>
                        <FacebookIcon />Facebook
                    </div>
                    <div className={styles.row}>
                        <TwitterIcon />Twitter
                    </div>
                </div>

            </div>
            
        </div>
    )
}
