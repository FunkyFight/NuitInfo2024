export default function Human() {
    return <>
        <img src="corps.png" alt="Le corps humain" useMap="#corps_map" />
        <map name="corps_map">
          <area shape="circle" coords="0,0,15" onClick={() => {console.log("coeur")}} alt="coeur" />
        </map>
    </>;    
}