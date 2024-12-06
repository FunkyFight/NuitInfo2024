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
} from "@/components/ui/drawer";

import { Slider } from "@/components/ui/slider";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { data } from "@/assets/data";

export default function MainApp() {
    const [body_part, set_body_part] = useState ("heart");
    const firby = "https://cdn.idealo.com/folder/Product/204404/0/204404007/s4_produktbild_gross/hasbro-furby-furblets-luv-lee.jpg";
    return <>
      <div className="w-full h-dvh">
        <div className="w-full grid grid-cols-2 h-full">
          {
             body_part == "heart" ? <Wheel img1={data.heart.img1[0]} img2={data.heart.img2[0]} img3={data.heart.img3[0]} img_bodypart={data.heart.img_bodypart[0]}/> : 
             body_part == "default" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
             
             <></>
          }
          <div>
          <Human body_part_setter={set_body_part} />
          </div>
        </div>

        <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bg-cyan-50 max-h-[99%] rounded-t-[500px] overflow-hidden p-0 border-0">
          <div className="justify-items-center p-0">
                {
                body_part == "heart" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
                body_part == "default" ? <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/> : 
                <></>
                }
            
          </div>
          <div className="h-[60%]">
          
              <HeartTitleSlider></HeartTitleSlider>
          <ScrollArea className="h-[80%] w-[100%]">
              <HeartDescription></HeartDescription>
          </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
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
  return (
  <DialogDescription className="w-[90%] justify-self-center z-[50] py-1 my-5 bg-gradient-to-tr">
    <p className="text-justify">
    Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. v Les yeux sont comme les poissons qui vivent dans l'océan.Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. v Les yeux sont comme les poissons qui vivent dans l'océan.Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. v Les yeux sont comme les poissons qui vivent dans l'océan.Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. Les yeux sont comme les poissons qui vivent dans l'océan. v Les yeux sont comme les poissons qui vivent dans l'océan.
    </p>
  </DialogDescription>
  )
}