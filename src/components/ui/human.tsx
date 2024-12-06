import corps from "@/assets/corps.png";

export default function Human() {
    return <div className="h-dvh">
        <h1 className="text-3xl font-bold underline">
            Choisissez une partie du corps humain pour observer les parallèles pouvant être fait avec l'ocean.
          </h1>
        <img src={corps} alt="Le corps humain" useMap="#corpsmap" style={{
            scale: "50%",
            translate: "0 -25%",
        }}/>
        <map name="corpsmap">
          <area shape="circle" coords="525,450,100" href="/home" className="cursor-pointer" onClick={() => {console.log("coeur")}} alt="coeur" />
        </map>
    </div>;    
}