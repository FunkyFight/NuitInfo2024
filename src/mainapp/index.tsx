import Human from "@/components/ui/human";
import Wheel from "@/components/ui/wheel";

import { useState } from "react";

export default function MainApp() {
    const [body_part, set_body_part] = useState("heart");
    return <>
      <div className="w-full">
        <div className="w-full grid grid-cols-2">
          {
             body_part == "heart" ? <Wheel img1="" img2="" img3="" img_bodypart=""/> : <></>
          }
          <div>
          <h1 className="text-3xl font-bold underline">
            Choisissez une partie du corps humain pour observer les parallèles pouvant être fait avec l'ocean.
          </h1>
          <Human />
          </div>
        </div>
        
      </div>
      
      
      
    </>;
  }