import React, {useState} from 'react'
import { AppBar, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import DrawerComp from './Drawer';
import Image from 'next/image';
import styles from '../styles/Theme.module.css'

const Header = () => {
    const [value, setValue] = useState ();
    const theme = useTheme ();
    console.log(theme);
const isMatch = useMediaQuery(theme.breakpoints.down('md'));
console.log(isMatch);
  return (
   <React.Fragment>
    <AppBar sx={{background: 'transparent', paddingRight: '16px'}}>
      <Toolbar >
          {
            isMatch  ? (
              <>
             
        <DrawerComp/>
              </>
              
            ) : (

              <>
        <Tabs sx={{marginRight: '10px', color: "#ef7604"}}  indicatorColor="#ef7604">
                {
                <a className={styles.headerbar} href="https://teezdeeznutz.io/#vision"> VISION</a>
               
                }
        </Tabs>
      
        <Tabs sx={{marginLeft: '5px', color: "#ef7604"}}  indicatorColor="#ef7604">
                {
                 <a className={styles.headerbar} href="https://teezdeeznutz.io/#roadmap">ROADMAP</a>
                }
        </Tabs>
        <Tabs sx={{marginLeft: '10px', color: "#ef7604"}}  indicatorColor="#ef7604">
                {
                 <a className={styles.headerbar} href="https://teezdeeznutz.io/#team">TEAM</a>
                
                }
        </Tabs>
        <Tabs sx={{marginRight: '10px', color: "#ef7604"}}  indicatorColor="#ef7604">
                {
                  <a className={styles.headerbar} href="https://teezdeeznutz.io/#faq">FAQS</a>
                
                }
        </Tabs>
        <Tabs sx={{marginRight: 'auto', color: "#ef7604"}}  indicatorColor="#ef7604">
                {
                 <a className={styles.headerbar} href="https://https://teezdeeznutz.com/">MERCH</a>
                
                }
        </Tabs>

             <Typography sx={{marginLeft: '5px'}}> <a  href="https://discord.gg/teezdeeznutznft/">  <Image src="/discord.png" alt="discord" width={39} height={39}></Image></a>
      </Typography>
         <Typography>  <a  href=" https://twitter.com/TeezDeezNutzNFT">  <Image src="/twitter.png" alt="discord" width={39} height={39}></Image></a></Typography>
         <Typography>  <a href="https://opensea.io/TeezDeezNutz-NFT">  <Image src="/opensea.png" alt="discord" width={39} height={39}></Image></a></Typography>
              </>
            )
   }
       
      </Toolbar>
   
     
    </AppBar>
    </React.Fragment>
  )
}

export default Header