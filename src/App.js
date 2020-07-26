import React from "react";
import './App.css';
import  Cart from './car.png'
//import  Obj from './object'

import useWebAnimations from "@wellyshen/use-web-animations";


 const App = () => {
  // Add a pre-defined effect to the target
  const { ref, playState ,getAnimation} = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,55%)' },
    
      { transform: 'translate(600px,55%)' },
    
            ],
          
    timing: {
 
      duration: 1000, // Run for 1000ms
      fill:"forwards",
      iterations: Infinity, 
 
    }
    });

 const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 0.25);
  };
  const jumpToHalf = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate *= 2);
  };


  return (
     <div className='container'>
     {/*      <div id='bird'>      <Obj ></Obj> </div> */}
 
       {/* <div> <img id ="bird" src={Bird} alt=""></img></div>  */}
     
      <div className="target" ref={ref} >
       
    
        <img id='car' src={Cart} alt=''></img> 
      
      </div>
      <button onClick={speedUp}>Slow</button>
      <button onClick={jumpToHalf}>Fast</button>

       
      
     {/*  <button className='buttons' onClick={()=>getAnimation().play()}>Play</button>
      <button className='buttons' onClick={()=>getAnimation().pause()}>Pause</button> */}
{/*       <button onClick={speedUp}>Speed Up</button>
      <button onClick={jumpToHalf}>Jump to Half</button> */}
    </div>
  );
};
export default App;