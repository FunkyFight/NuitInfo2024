import Human from "@/components/ui/human";
import Wheel from "@/components/ui/wheel";

import { useState, useEffect } from "react";
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
    const [slider_value, set_slider_value] = useState<number>(0);
    const [body_part, set_body_part] = useState("heart");

    const [islg, set_islg] = useState(
      window.matchMedia("(min-width: 1024px)").matches
    )

    useEffect(() => {
      window
      .matchMedia("(min-width: 1024px)")
      .addEventListener('change', e => set_islg( e.matches ));
    }, []);
  

    const organsFunctions = [
      {
        "name": "heart", 
        "titleSlider": <TitleSlider SVS={set_slider_value}/>,
        "description": <Description BodyPart={body_part} SliderValue={slider_value}/>,
        "wheel": <Wheel img1={data.heart.img1[slider_value]} img2={data.heart.img2[slider_value]} img3={data.heart.img3[slider_value]} img_bodypart={data.heart.img_bodypart[slider_value]}/>
      }
    ]

    let organs = organsFunctions.find(val => val.name == body_part)

    return <>
      <div className="w-full h-dvh">
        <div className="w-full grid lg:grid-cols-2 h-[95%]">
          <div className="lg:block hidden flex-col justify-center bg-white">
            {
             organs?.wheel
            }
          </div>
          <div>
          <Human body_part_setter={(value: any) => {
            set_body_part(value);
            if (!islg) {
              document.getElementById("drawer-trigger")?.click();
            }
          }} />
          </div>
        </div>

        <Drawer>
        <DrawerTrigger id= "drawer-trigger" className="hidden">Open</DrawerTrigger>
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

function TitleSlider({ SVS }: { SVS: CallableFunction }) {
  return (<DialogTitle className="align-middle">
    <p className="text-4xl text-center py-3">Coeur</p>
    <OSlider SliderValueSetter={SVS}></OSlider>
  </DialogTitle>)
}

function OSlider({ SliderValueSetter }: { SliderValueSetter: CallableFunction }) {
  return (<div className="w-[60%] justify-self-center z-[50] py-1 my-2 bg-gradient-to-tr">
  <Slider onValueChange={(val) => SliderValueSetter(val[0])} defaultValue={[0]} max={2} step={1} className="z-[60]"></Slider>
  </div>)
}

function Description({ BodyPart, SliderValue }: { BodyPart: string, SliderValue: number}) {
  let part: string = BodyPart;
  let organDesc = data[BodyPart as keyof typeof data].description[SliderValue]
  return (
  <DialogDescription className="w-[90%] justify-self-center z-[50] py-1 my-5 bg-gradient-to-tr">
    <p className="text-justify">
      { organDesc }
    </p>
  </DialogDescription>
  )
}