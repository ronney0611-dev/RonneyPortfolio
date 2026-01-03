import { Canvas } from "@react-three/fiber";
import Spline from "@splinetool/react-spline";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";


const Data = () => {
  return (
    <div className="BigRobot" >
      <Spline scene="https://app.spline.design/community/file/26e2e90d-7001-46bc-a9ad-ba6b9aab2b53" />
    </div>

  )
}

export default Data
