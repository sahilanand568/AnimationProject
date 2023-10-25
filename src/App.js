import {useState, useEffect} from "react";
import './App.css';
import Rlogos from "./assets/Vector 234.jpg";
// import bgGround from "./assets/Background.png";


import RLogoWhite from "./assets/VectorWhite 234.png";
import ImageReshuffle from "./Components/ImageReshuffle";
import LaptopComp from './Components/LaptopComp';


function App() {
   

 const [flag,setFlag]=useState(true)  
 // True implies ImageReshuffle is present
 
 useEffect(()=>{

  const intervals=setInterval(()=>{
    setFlag(!flag);
  } ,5600)
 return ()=>{
  clearInterval(intervals);
 }
 } ,[flag])

  return (
    <div className="App" style={{ position: 'relative' }}>
      <div className='top_Box' style={{ position: 'absolute', top: 0, left: 0, width: "100%" }}>
        <div className='headBox'>
          <div className='box box1'></div>
          <div className='box box2'></div>
        </div>
        <div className='midSectionBox'>
          <div className='section1'>
            <img src={Rlogos} alt="logo" className='Rlogo' />
            <span>entainance</span>
            <div className='boxR' style={{ position: "absolute", top: "24px", left: "22px" }}></div>
            <div className='boxR ' style={{ position: "absolute", top: "40px", left: "22px" }} ></div>
          </div>
          <div style={{position:"relative"}}>
            <img src={RLogoWhite} alt="logo" className='RlogoWhite' style={{width: "10.02px",height: "11.25px",
 position: "absolute", top:34, left:100,zIndex:1}} />
            <div className='boxWhiteR' style={{ position: "absolute", top: "39.5px", left: "104px" }}></div>
            <div className='boxWhiteR ' style={{ position: "absolute", top: "42px", left: "104px" }} ></div>
            <svg width="100" height="100" style={{ position: "absolute" , top:-10, left:55 }}>
              <circle cx="50" cy="50" r="9"
                stroke="#FF4F4F" stroke-width="4" fill="#FF4F4F" />
            </svg>
            </div>
          <div className='section2'>
            <h2>360 RENTAL</h2>
            <h1>SOLUTION</h1>
          </div>
          <div className='section3'>
            <p>SWIPE</p>
            <p>TAP</p>
            <p>RENT</p>
          </div>
        </div>
      </div>
     {(flag) ? <ImageReshuffle/> : <LaptopComp/>}
      
      
      
    </div>
  );
}

export default App;


// style={{ transform: `translateX(${positions.right}px)`}}
// style={{ transform: `translateX(${positions.center}px)`}}
// style={{ transform: `translateX(${positions.left}px)`}}