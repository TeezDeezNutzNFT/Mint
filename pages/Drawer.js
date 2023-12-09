import React, {useState} from 'react'
import {Drawer, List, IconButton, ListItemButton, ListItemIcon,Typography, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Theme.module.css'
import Image from 'next/image';


const DrawerComp = () => {
const [openDrawer, setOpenDrawer] = useState(false)


  return (
   <React.Fragment>
    <Drawer    PaperProps={{
        sx: {
          marginTop: '15%',
          width: '100%',
          height: '55%',
          color: "#ffff",
          backgroundColor: "#400912",
          fontSize: "90px"
        }
      }}
       open={openDrawer} onClose={()=> setOpenDrawer(false)}
    >
<List>
<ListItemButton onClick={()=> setOpenDrawer(false)} >
    <ListItemIcon > 
      <ListItemText>
<a className={styles.headerbar} href="https://teezdeeznutz.io/#vision"> VISION</a>
<a className={styles.headerbar} href="https://teezdeeznutz.io/#Sneak-Peaks">SNEAK PEEKS</a>
<a className={styles.headerbar} href="https://teezdeeznutz.io/#roadmap">ROADMAP</a>
<a className={styles.headerbar} href="https://teezdeeznutz.io/#team">TEAM</a>
<a className={styles.headerbar} href="https://teezdeeznutz.io/#faq">FAQS</a>
<a className={styles.headerbar} href="https://https://teezdeeznutz.com/">MERCH</a>
      </ListItemText >
    </ListItemIcon>
  </ListItemButton>
</List>
<Typography sx={{marginLeft: '5px'}}> <a  href="https://discord.com/VMPbzz8xeT">  <Image src="/discord.png" alt="discord" width={39} height={39}></Image></a>
     
        <a  href=" https://twitter.com/TeezDeezNutzNFT">  <Image src="/twitter.png" alt="discord" width={39} height={39}></Image></a>
          <a href="https://opensea.io/TeezDeezNutz-NFT-Crew">  <Image src="/opensea.png" alt="discord" width={39} height={39}></Image></a></Typography>
    </Drawer>
    <IconButton sx={{color:'#fff', marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
    <MenuIcon/>
</IconButton>



   </React.Fragment>
  )
}

export default DrawerComp