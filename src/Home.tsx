import { useEffect } from "react"

const fishes = [
  {
    src: "/img/water/clown_fish.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  },
  {
    src: "/img/water/poisson_blue_yell.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  },
  {
    src: "/img/water/poisson_green_blue.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  },
  {
    src: "/img/water/poisson_purple_orange.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  },
];

const dechets = [
  {
    src: "/img/water/Poubelle.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  },
  {
    src: "/img/water/Can.webp",
    className: "wateritem h-32 absolute z-0 left-[95%] overflow-hidden duration-[3500ms] transition-all ease-out"
  }
]

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function App() {
  
  useEffect(() => {
    setTimeout(() => onLoad(), 500) 
  }, [])

  return (
    <div id="container" className="flex align-middle justify-center flex-col gap-y-5 bg-[url('./assets/WaterBg.webp')] w-screen h-screen overflow-hidden">
      
      <h1 id="title" className="z-10 mt-16 opacity-0 duration-1000 transition-all ease-in-out text-4xl text-center font-bold text-black p-2">Votre corps n'est pas si différent de nos océans.</h1>
      <a id="button" onClick={ohYeahButton} className="z-10 mt-16 opacity-0 duration-1000 transition-all ease-in-out text-center text-black hover:text-amber-700 text-2xl cursor-pointer">Ah bon ?</a>
    </div>
  )
}

function newWaterEntity() {

  const fishData = fishes[getRandomInt(0, fishes.length)];

  let waterEntity = document.createElement("img");
  waterEntity.src = fishData.src;
  waterEntity.className = fishData.className;
  
  waterEntity.style.position = "absolute";
  waterEntity.style.top = getRandomInt(0, (window.innerHeight * 80) / 100) + "px";

  const container = document.getElementById("container");
  if (container) {
    container.appendChild(waterEntity);

    setTimeout(() => {
      waterEntity.style.left = "-30%"
      waterEntity.style.opacity = "100"
      console.log(window.innerWidth)
      setTimeout(() => {
        waterEntity.remove()
        newWaterEntity()
      }, 2000)
    }, 0)
  }
}


function newDechetEntity() {

  const fishData = dechets[getRandomInt(0, dechets.length)];

  let dechetEntity = document.createElement("img");
  dechetEntity.src = fishData.src;
  dechetEntity.className = fishData.className;
  
  dechetEntity.style.position = "absolute";
  dechetEntity.style.top = getRandomInt(0, (window.innerHeight * 80) / 100) + "px";

  const container = document.getElementById("container");
  if (container) {
    container.appendChild(dechetEntity);

    setTimeout(() => {
      dechetEntity.style.left = "-30%"
      dechetEntity.style.opacity = "100"
      dechetEntity.style.rotate = "360deg"
      console.log(window.innerWidth)
      setTimeout(() => {
        dechetEntity.remove()
        newDechetEntity()
      }, 2000)
    }, 0)
  }
}

function ohYeahButton() {
  window.location.href = "./main"
}

function onLoad() {
  
  document.getElementById("title")!.style.opacity = "100";
  document.getElementById("title")!.style.marginTop = "0px";
  setTimeout(() => {
    document.getElementById("button")!.style.marginTop = "0px";
    document.getElementById("button")!.style.opacity = "100"
  }, 1500)


  newWaterEntity();
  setTimeout(() => newWaterEntity(), 200)
  setTimeout(() => newWaterEntity(), 400)
  setTimeout(() => newWaterEntity(), 600)
  setTimeout(() => newWaterEntity(), 800)
  setTimeout(() => newWaterEntity(), 1000)
  setTimeout(() => newWaterEntity(), 1200)
  setTimeout(() => newWaterEntity(), 1400)
  setTimeout(() => newDechetEntity(), 50)
  setTimeout(() => newDechetEntity(), 200)
  setTimeout(() => newDechetEntity(), 450)
  
}

export default App
