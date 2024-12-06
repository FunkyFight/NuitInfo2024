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
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
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
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bg-cyan-50 h-[99%] rounded-t-[500px] overflow-hidden p-0 border-0">
          <div className="justify-items-center p-0">
                {
                body_part == "heart" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
                body_part == "default" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
                <></>
                }
            
          </div>
          <div>
              <HeartTitleSlider></HeartTitleSlider>
              <HeartDescription></HeartDescription>
          
          </div>
        </DrawerContent>
      </Drawer>
    </>;
  }

function HeartTitleSlider() {
  return (<DialogTitle className="align-middle">
    <p className="text-4xl text-center py-3">Coeur</p>
    <HeartSlider></HeartSlider>
  </DialogTitle>)
}

function HeartSlider() {
  return (<div className="w-[60%] justify-self-center z-[50] py-1 my-2 bg-gradient-to-tr">
  <Slider defaultValue={[0]} max={2} step={1} className="z-[60]"></Slider>
  </div>)
}

function HeartDescription() {
  return (<DialogDescription className="w-[90%] justify-self-center z-[50] py-1 my-5 bg-gradient-to-tr">
    <p className="text-justify">
      Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. v Les yeux sont comme les poissons qui vivent dans l'océan.
    </p>
  </DialogDescription>)
}