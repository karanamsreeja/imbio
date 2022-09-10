import React from 'react';
import { hrmsTheme } from '../common/style/hrmsTheme';
import { ThemeProvider } from '@mui/material/styles';
import "../common/style/footer.css";
import {Grid,Button, Box } from "@mui/material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import img from "../common/images/logo.svg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <ThemeProvider theme={hrmsTheme}> 
    <div className='footer'>
    <Grid container spacing={2}>
        <Grid xl={3.5} md={3.5} sm={6} xs={12}>
            <img src={img} alt="" />
        <div style={{display:'flex',justifyContent:'center'}} className="mt10">
                <div className="white-border"><InstagramIcon/></div>
                <div className="white-border"><FacebookIcon/></div>
                <div className="white-border"><TwitterIcon/></div>
                <div className="white-border"><LinkedInIcon/></div>
            </div></Grid>
        <Grid xl={2.5} md={3} sm={6} xs={12} style={{twxtAlign:'center'}}>
            <div style={{display:'flex',justifyContent: "center"}}>
            <div className="ph-bg"><PhoneInTalkIcon/></div>
            <div className="left-align">Have a question? <br/>
            <span className="b"> +91 8939434445 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
         
            
            </div>
            <div style={{display:'flex',justifyContent: "center"}} className="mt10">
            <div className="ph-bg"><MailOutlineIcon/></div>
            <div className="left-align">Contact us at<br/>
            <span className="b"> better@iombio.com</span>
            </div>
          
            </div>
            
        </Grid>
        <Grid xl={2.5} md={2.5} sm={6} xs={12}>
            <div className="b"><a href="">Careers</a></div>
            <div className="b"><a href="">Press</a></div>
            <div className="b"><a href="">Blog</a></div>
            <div className="b"><a href="">FAQ</a></div>
          
        </Grid>
        <Grid xl={2.5} md={2.5} sm={6} xs={12}>
        <div className="b"><a href="">Contact</a></div>
        <div className="b"><a href="">Privacy policy</a></div>
            <div className="b"><a href="">Sitemap</a></div>
            <div className="b"><a href="">Terms of Use</a></div>
            
        </Grid>
        </Grid>
    </div>
    <div className="post-footer "> <span style={{margin:'auto 0'}}>Copyrights © IOM 2022, All Rights Reserved</span></div>
    </ThemeProvider>
  )
}

export default Footer;