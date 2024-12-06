import Human from "@/components/ui/human";
import Wheel from "@/components/ui/wheel";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
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
          <Human body_part_setter={set_body_part}/>
          </div>
        </div>
      </div>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bg-cyan-50 h-[90%] rounded-t-[500px] overflow-hidden p-0 border-0">
          <div >
            <DrawerHeader className="justify-items-center p-0">
                {
                body_part == "heart" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
                body_part == "default" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 

                <></>
                }
                <DrawerTitle >PARTIE DU CORPS</DrawerTitle>
            </DrawerHeader>
                <DrawerFooter>
                  <DrawerDescription className="text-center">
                    <p>
                      Les yeux sont comme les poissons qui vivent dans l'océan. 
                    </p>
                  </DrawerDescription>
                </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>;
  }