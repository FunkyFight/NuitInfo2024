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

import { Slider } from "@/components/ui/slider"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const firby = "https://cdn.idealo.com/folder/Product/204404/0/204404007/s4_produktbild_gross/hasbro-furby-furblets-luv-lee.jpg";









export default function MainApp() {
    const [slider_value, set_slider_value] = useState<number | undefined>(0);
    const [body_part, set_body_part] = useState("heart");

    const organsFunctions = [
      {
        "name": "heart", 
        "titleSlider": <HeartTitleSlider SVS={set_slider_value}/>,
        "description": <HeartDescription/>,
        "wheel": <Wheel img1={firby} img2={firby} img3={firby} img_bodypart={firby}/>
      }
    ]

    let organs = organsFunctions.find(val => val.name == body_part)
    console.log(slider_value)

    return <>
      <div className="w-full h-dvh">
        <div className="w-full grid grid-cols-2">
          {
             organs?.wheel
          }
          <div>
          <Human body_part_setter={set_body_part}/>
          </div>
        </div>

        <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bg-cyan-50 max-h-[99%] rounded-t-[500px] overflow-hidden p-0 border-0">
          <div className="justify-items-center p-0">
                {
                  organs?.wheel
                }
            
          </div>
          <div className="h-[60%]">
          
              {organs?.titleSlider}
          <ScrollArea className="h-[80%] w-[100%]">
              {organs?.description}
          </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
    </>;
  }

function HeartTitleSlider({ SVS }: { SVS: CallableFunction }) {
  return (<DialogTitle className="align-middle">
    <p className="text-4xl text-center py-3">Coeur</p>
    <HeartSlider SliderValueSetter={SVS}></HeartSlider>
  </DialogTitle>)
}

function HeartSlider({ SliderValueSetter }: { SliderValueSetter: CallableFunction }) {
  return (<div className="w-[60%] justify-self-center z-[50] py-1 my-2 bg-gradient-to-tr">
  <Slider onValueChange={(val) => SliderValueSetter(val[0])} defaultValue={[0]} max={2} step={1} className="z-[60]"></Slider>
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