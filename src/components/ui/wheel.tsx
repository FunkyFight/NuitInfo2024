export default function Wheel({ img1, img2, img3, img_bodypart }: { img1: string, img2: string, img3: string, img_bodypart: string }) {
    return  <>
            <div className="w-full h-96 bg-slate-400 relative overflow-hidden">
                <span className="w-[50%] h-full absolute bottom-0 left-0">
                    <img src={img1} alt="" className="object-cover w-full h-full bg-red-500"/>
                </span>
                <span className="w-[50%] h-full absolute bottom-0 right-0">
                    <img src={img3} alt="" className="object-cover w-full h-full bg-blue-500"/>
                </span>
                <span className="w-full h-full absolute bottom-0 left-0" style={{
                    clipPath: 'polygon(10% 0, 90% 0, 50% 100%)'
                    }}>
                    <img src={img2} alt="" className="object-cover w-full h-full bg-green-500" />
                </span>
                <span className="absolute bottom-0 left-[50%] translate-x-[-50%] origin-center"  style={{
                    clipPath: 'ellipse(50% 90% at 50% 100%)'
                    }}>
                    <img src={img_bodypart} alt="" className="object-cover w-72 h-40 bg-pink-500" />
                </span>
            </div>
            
    </>;
}