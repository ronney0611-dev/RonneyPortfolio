import { Canvas } from "@react-three/fiber";
import Spline from "@splinetool/react-spline";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";


const BigRobot = ({ scale = 2, rotation = [0, 0, 0] }) => {
  return (
    <div className="BigRobot" style={{
        transform: `
          scale(${scale}) 
          rotateX(${rotation[0]}rad) 
          rotateY(${rotation[1]}rad) 
          rotateZ(${rotation[2]}rad)
        `,
        transformOrigin: 'center',
      }} >
      <Spline scene="https://prod.spline.design/J6XHUfGROP0ianfg/scene.splinecode" />
    </div>

  )
}

export default BigRobot
