import Human from "@/components/ui/human";

export default function MainApp() {
    return <>
      <div className="container">
        <h1 className="text-3xl font-bold underline">
          Choisissez une partie du corps humain pour observer les parallèles pouvant être fait avec l'ocean.
        </h1>
        
      </div>
      <Human />
    </>;
  }