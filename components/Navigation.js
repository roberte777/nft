import React, {useEffect, useState} from 'react'
import styles from '../styles/Navigation.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export default function Navigation() {
    const [color, setColor] = useState(styles.navbartransparent)
    useEffect(() => {
        var listener = document.addEventListener("scroll", e=> {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 80) {
                if (color !="black") {
                    setColor(styles.navbarblack)
                }
            } else  if (scrolled < 80) {
                if(color !="transparent") {
                    setColor(styles.navbartransparent)
                }
            }
        })
        return (document.removeEventListener("scroll", listener))
    },[])

    
    return (
       
            <Navbar className={color} style={{zIndex:100}}collapseOnSelect expand="md" variant="dark" fixed="top">
                <Navbar.Brand href="#home">LaunchNFT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={styles.collapse}>
                    <Nav className="mr-auto">
                      
                    </Nav>
                    <Nav>
                        <Nav.Link href="#features">Athletes</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Buy NFTs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    )
}
