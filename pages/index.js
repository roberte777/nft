import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {motion}  from "framer-motion"
import Button from 'react-bootstrap/Button'
import ScrollDown from '../components/ScrollDown'
import Slider from 'react-slick';
import Footer from '../components/Footer';


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 1
    }
  },
};

const athletes = ['/lebron.jpg','/messi.jpg','/football.jpg', '/stadium.jpg']


export default function Home() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(()=> {
    const heightOutput = document.querySelector('#height')
    


  },[])

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current,next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
        }
      },
      
    ]
  };
  

  return (
    <div className={styles.container}>
      <Head>
        <title>LaunchNFT Connect With Your Sports Heroes</title>
        <meta name="description" content="We are a start-up whose mission is to help collegiate athletes profit off their name, image, and likeness through the production, publication, and selling of NFTs." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" 
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
        <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


      </Head>
      <h1 className={styles.toppage}>
        <div className={styles.herobg}>
          {/* <Image src='/mainBgImg.jpg' layout="fill" objectFit="cover" className={styles.img}/> */}
        </div>
        <div className={styles.topmaincontent}>
          <div className={styles.landingcatcher}>
            <div className={styles.landingtext}>
              <div className={styles.textcontainer}>
                <motion.div animate="visible" initial="hidden" transition={{}} variants={container} >
                  <h1>
                    <span className={styles.bigwords1}>
                      <span>LaunchNFT </span> <br />
                      {/* <span style={{width:'100%'}}>WITH YOUR </span> */}
                    </span>
                  </h1>
                </motion.div>                
                <div className={styles.topbottomtext}>
                  <div className={styles.smalltext}>
                    The Future of Fanhood is Here
                  </div>
                </div>

              </div>
              
            </div>
          </div>
          <div>
          </div>
          
          <ScrollDown />
        </div>
      </h1>
      <div style={{height: '100%'}} className={styles.featuredAthletes}>
        <div className={styles.featuredTextContainer}>
          <div className={styles.featuredText}>An ever-growing list of athletes to collect and inspire</div>
        </div>
        <div className={styles.carouselContainer}>
          <div  className={styles.featuredcarousel} >
            <Slider {...settings} >
              {athletes.map((img, idx) => (
                
                <div className={idx == imageIndex ? (styles.activeSlide): styles.slide} key={img} alt={img} loading="eager" style={{position: 'relative', minHeight: '100%'}}>
                  <Image layout={'fill'} src={img} alt={img} />
                </div>)
              )}
            
            </Slider>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitleContainer}>
          <div className={styles.aboutUsTitle}>
            About Us
          </div>
        </div>
        <div className={styles.aboutUsText}>
        We are a start-up whose mission is to help collegiate athletes profit off their name, image, and likeness through the production, publication, and selling of NFTs. 
        We believe that we can play a big role in bringing power back to the players by giving them the opportunity to grow their personal brand and then profiting off it.
        </div>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUsTitleContainer}>
          <div className={styles.aboutUsTitle}>
            Our Product:
          </div>
        </div>
        <div className={styles.aboutUsText}>
        We work closely with the athletes that we represent to make sure that the NFTs that we produce are true to who they are. 
        This authenticity helps create a relationship between fans and athlete like we have never seen before. 
        When you buy an NFT, you are buying part of your favorite athlete’s history and investing in their future.
        </div>
      </div>
      <div className={styles.businessInquiries}>
        <div className={styles.businessInquiriesTitleContainer}>
          <div className={styles.businessInquiriesTitle}>
            Business Inquiries
          </div>
        </div>
        <div className={styles.businessInquiriesText}>
          Reach out to the team by emailing us!
        <div>
          Cade@LaunchNFT.net
        </div>
        </div>
      </div>
      <div>

      </div>
      <Footer />
    </div>
        
      

  )
}
