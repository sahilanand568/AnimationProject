import React,{useEffect} from 'react'
import "../App.css";
import Frame from "../assets/Frame 416.png";
import VLine from "../assets/Vector 729.png";
import Mac from "../assets/MacBook Pro 16.png";

const LaptopComp = () => {

 useEffect(()=>{
  
    const timeouts=setTimeout(()=>{
    
    },1000)

    return ()=>{
        clearTimeout(timeouts)
    }
 },[])

  return (
    <>
   
 <div className="macBook" style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100vh" }}>
    <div style={{ position: 'relative' }}>
        <img src={Mac} alt="MacBook"  style={{ position: 'absolute', top: 60, left: 250, width: "80%", zIndex:12 }}/>
    </div>
        <div className='section4' style={{ position: 'relative' }}>
          <img src={Frame} alt="frame" style={{ position: 'absolute', top: -60, left: 200, width: "100%"}} />
        </div>
        <div>
          {/* <img src={curvedbg} alt="curved Background" className='top_layer' style={{ position: 'absolute', top: -5, left: 60, width: "88%" }} /> */}
        </div>
        <div>
          <img src={VLine} alt="Vector729" style={{ position: 'absolute', top: -50, left: 200, width: "65%", transition: "all 1s" }} />
        </div>
      </div>

    </>
  )
}

export default LaptopComp