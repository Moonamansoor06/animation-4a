import React from "react";
import Bird from "./bird.gif"
import './object.css'



import useWebAnimations from "@wellyshen/use-web-animations";
import { renderIntoDocument } from "react-dom/test-utils";

export default function Obj(){
 
  // Add a pre-defined effect to the target
  const { ref, playState ,getAnimation} = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0)' },
    
      { transform: 'translate(600px,0)' },
    
            ],
          
    timing: {
 
      duration: 1000, // Run for 1000ms
      fill:"forwards",
      iterations: Infinity, 
 
    }
      
    });
    return(
        <div ref={ref}>
                <img src={Bird} alt=""></img>
        </div>
        )
    }
