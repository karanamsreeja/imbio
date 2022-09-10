import React from 'react';
import "../common/style/home.css";
import {Grid,Button, Box } from "@mui/material"
import { AiOutlinePlayCircle } from "react-icons/ai";
import img1 from "../common/images/home/metabolism.png";
import img2 from "../common/images/home/mental-efficiency.png";
import img3 from "../common/images/home/well-being.png";
import img4 from "../common/images/home/systemic-wellness.png";
import img5 from "../common/images/home/sleep-efficacy.png";
import { hrmsTheme } from '../common/style/hrmsTheme';
import { ThemeProvider } from '@mui/material/styles';
import iom from "../common/images/home/iom.png";
import iom2 from "../common/images/home/iom2.jpg";
import iom3 from "../common/images/home/iom3.jpg";
import customer from "../common/images/home/customer.png";

function Home() {
  return (
    <ThemeProvider theme={hrmsTheme}> 
    <div className="home">
      <div className="section1">
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <h6 className="main-headding"> EMPOWER YOUR MICROBIOME</h6>
        <h5 className="sub-headding">MAKE YOUR BACTERIA WORK FOR YOU</h5>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button variant="contained" className="home-btn text-trans" color='primary' sx={{m:2}} style={{color:'#fff'}}>Get Started</Button>
        <Button variant="outlined" className="home-btn text-trans" style={{color:'rgb(6, 34, 92)',borderColor:'rgb(6, 34, 92)'}} sx={{m:2}}> <AiOutlinePlayCircle className="mr10"/> Watch Video</Button>
      </div>
        </Grid>
        
        </Grid>
       
      </div>
      <div className='section' style={{backgroundColor:'#E3B14A'}}>
        <div className='system'>Your System and It’s Bacteria</div>
        <p className='b' style={{    lineHeight: "25px",    color:"rgb(37, 70, 138)"}}>You are not you, alone! There are trillions of bacteria in your gut, on and around you. The constant synergy between the bacteria within your gut and your system defines your wellness,
         mood, and health. There are 5 core areas for the impact of the bacteria on your system.</p>
         <div className='home-cards-flex'>
          
         <Box className="home-cards" sx={{ p: 2,m :2, boxShadow : 3, backgroundColor:'#fff',borderRadius:'10px' }}>
     <img src={img1} alt=""/>
     <h3 className="blue">Better Metabolism</h3>
     <p>The many chemical processes that occur in a person to sustain life.</p>
    </Box>
    <Box className="home-cards" sx={{ p: 2,m :2, boxShadow : 3, backgroundColor:'#fff',borderRadius:'10px' }}>
     <img src={img2} alt=""/>
     <h3 className="blue">Better Metabolism</h3>
     <p>The many chemical processes that occur in a person to sustain life.</p>
    </Box>
    <Box className="home-cards" sx={{ p: 2,m :2, boxShadow : 3, backgroundColor:'#fff',borderRadius:'10px' }}>
     <img src={img3} alt=""/>
     <h3 className="blue">Better Metabolism</h3>
     <p>The many chemical processes that occur in a person to sustain life.</p>
    </Box>
  
    <Box className="home-cards" sx={{ p: 2,m :2, boxShadow : 3, backgroundColor:'#fff',borderRadius:'10px' }}>
     <img src={img4} alt=""/>
     <h3 className="blue">Better Metabolism</h3>
     <p>The      many chemical processes that occur in a person to sustain life.</p>
    </Box>
    <Box className="home-cards" sx={{ p: 2,m :2, boxShadow : 3, backgroundColor:'#fff',borderRadius:'10px' }}>
     <img src={img5} alt=""/>
     <h3 className="blue">Better Metabolism</h3>
     <p>The many chemical processes that occur in a person to sustain life.</p>
    </Box>
         </div>
      </div>
      <div className='section' style={{backgroundColor:'#fff'}}>
        <div className='system'>The iom Journey</div>
        <p className='b journey' >iom helps you discover your relationship with your microbiome. Our AI 
        powered exploration and inference process enables you to recruit your bacteria to enhance your health!.</p>
      </div>
      <div className='section' style={{backgroundColor:'#E8EBF2'}}>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} sm={12} xs={12} className="left-align">
          <p className="orange">STEP 1</p>
          <h2 className='blue'>Embark</h2>
          <p className=" f16">An easy home test initiates your journey. iom analyzes your stool sample for bacterial fingerprints. Your unique gut microbiome, and its composition
             defines how you are being affected by the food you eat, your lifestyle, your environment and more.</p>
        <Button variant="contained" color="primary" className="home-btn" style={{color:'#fff'}}>Book an iom Journey</Button>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12} style={{textAlign:'center'}}><img src={iom} alt="" style={{}} className="img-resp"/></Grid>
        </Grid>
        <Grid container spacing={2} className="mt15">
        <Grid item xl={6} md={6} sm={12} xs={12} style={{textAlign:'center'}}><img src={iom2} alt="" style={{}} className="img-resp"/></Grid>
       
        <Grid item xl={6} md={6} sm={12} xs={12} className="left-align">
          <p className="orange">STEP 2</p>
          <h2 className='blue'>Discover</h2>
          <p className=" f16">The iom report highlights your gut bacterial diversity, gut scores, and microbiome snapshot. Detailed insights and intricate connections help us arrive at personalized, flexible
           food and lifestyle recommendations crafted for a healthier alliance between you and your bacteria.</p>
        <Button variant="contained" color="primary" className="home-btn" style={{color:'#fff'}}>View Sample Report</Button>
        </Grid>
        </Grid>
        <Grid container spacing={2} className="mt15">
        <Grid item xl={6} md={6} sm={12} xs={12} className="left-align">
          <p className="orange">STEP 3</p>
          <h2 className='blue'>Navigate</h2>
          <p className=" f16">iom’s panel of doctors, nutritionists, and other healthcare specialists constantly support you in your health expedition. These professionals guide and mentor you consistently
           for the next 3 months, enabling you to see those changes you sought and transition to wellness.</p>
        <Button variant="contained" color="primary" className="home-btn" style={{color:'#fff'}}>Meet Our Specialist</Button>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12} style={{textAlign:'center'}}><img src={iom3} alt="" style={{}} className="img-resp"/></Grid>
        </Grid>
        </div>
        <div className='section' style={{backgroundColor:'#06225C'}}>
          <h6 className="system" style={{color:"#fff",margin:'0px'}}>Our Customer Corner</h6>
          <h6 className="sub-headding" style={{color:"#fff",letterSpacing:'0px',margin:'10px 0px'}}>iom’s Health Journey has impacted 
          the lives of our users! Hear it from them on their personal health journey.</h6>
       <div className="customer-corner">
      <img src={customer} alt="" className="customer-img img-resp"/>
      <div  className="b white corner-text">
      “ I always want to do what is best for my body and mind. Over the years, I learned what works for 
      my system. Yet, Iom's report was able to give me clear insight into the inner workings of my system. The best part for me was
       that the report reflected what I had found out through many trials and errors, in one simple test! 
       The team has been vey helpful in guiding me throughout. I am quite happy with the results and would
        definitely do it again! “<br/>
-     Venkat M.
      </div>
       </div>
        
        </div>
        
    </div>
    
    </ThemeProvider>
  )
}

export default Home;