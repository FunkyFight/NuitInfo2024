import Human from "@/components/ui/human";
import Wheel from "@/components/ui/wheel";

import { useState } from "react";

export default function MainApp() {
    const [body_part, set_body_part] = useState("heart");
    const firby = "https://cdn.idealo.com/folder/Product/204404/0/204404007/s4_produktbild_gross/hasbro-furby-furblets-luv-lee.jpg";
    return <>
      <div className="w-full">
        <div className="w-full grid grid-cols-2">
          {
             body_part == "heart" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
             body_part == "default" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
             
             <></>
          }
          <div>
          <Human />
          </div>
        </div>
        
      </div>
      
      
      
    </>;
  }