import React from 'react'
import {useState,useEffect} from "react";
import "../App.css";
import Frame from "../assets/Frame 416.png";
import VLine from "../assets/Vector 729.png";
import curvedbg from "../assets/Vector 727.png";
import Image1 from "../assets/iPhone 13 Pro.png";
import Image2 from "../assets/iPhone 13 Pro (1).png";
import Image3 from "../assets/iPhone 13 Pro (2).png";
import FrameMobiles from "../assets/Frame 417.png";


const ImageReshuffle = () => {

    const [animate, setAnimate] = useState(false);

    const classnames=["animate-left","animate-center","animate-right"];
    const[currentIndex,setCurrentIndex]=useState(0);
    const[topPos,setTopPos]=useState(280);

    useEffect(() => {
        
        setTopPos(200);
        handleLoad();
    
        const interval = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex+3) % 3);
        setAnimate(false); 
        setTopPos(280);
        setTimeout(() => {
          setAnimate(true);
          setTopPos(200)
        }, 1000); 
      }, 2000);
       
      const timeout1=setTimeout(() => {
        document.querySelector(".selectedItem").style.top=530;
    document.querySelector(".selectedItem").style.left=530;
      }, 6000);
    
      return ()=>{
        clearInterval(interval);
        clearTimeout(timeout1);

      }
      }, []);

    
      
  function handleLoad(){
    document.querySelector(".selectedItem").style.top=0;
    document.querySelector(".selectedItem").style.left=0;
   }


  return (
    <>
     <div style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100vh" }}>
        <div className='section4' style={{ position: 'relative' }}>
          <img src={Frame} alt="frame" style={{ position: 'absolute', top: -60, left: 40, weight: "100%" }} />
        </div>
        <div>
          {/* <img src={curvedbg} alt="curved Background" className='top_layer' style={{ position: 'absolute', top: -5, left: 60, width: "88%" }} /> */}
        </div>
        <div>
          <img src={VLine} alt="Vector729" style={{ position: 'absolute', top: -50, left: 25, width: "65%" }} />
        </div>
      </div>
    <div className='imageReshuffle'>
    <img src={Image2} alt="image2" className={`item ${animate ? `${classnames[(currentIndex + 2) % 3]}` : ''}`}  />
    <img src={Image1} alt="image1"  className={`item selectedItem ${animate ? `${classnames[(currentIndex + 1) % 3]}` : ''}`} />
    <img src={Image3} alt="image3" className={`item ${animate ? `${classnames[currentIndex]}` : ''}`} />
</div>
<div style={{position:"relative"}}>
 <img src={FrameMobiles} alt="mobile frames" className="mobileFrame" style={{top:`${topPos}px`,left:650}}/>
</div>
</>
  )
}

export default ImageReshuffle