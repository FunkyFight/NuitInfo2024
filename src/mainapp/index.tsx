import Human from "@/components/ui/human";
import Wheel from "@/components/ui/wheel";

export default function MainApp() {
    return <>
      <div className="container">
        <h1 className="text-3xl font-bold underline">
          Choisissez une partie du corps humain pour observer les parallèles pouvant être fait avec l'ocean.
        </h1>
        
      </div>
      <Human />
      <Wheel img1="" img2="" img3="" img_bodypart=""/>
      
    </>;
  }