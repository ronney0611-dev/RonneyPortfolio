import { Canvas } from "@react-three/fiber"
import DevRomm from "../sections/DevRomm.jsx"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Robot from "../sections/Robot.jsx"
import BigRobot from '../sections/BigRobot'
import Particles from "../sections/Particals-snow.jsx"
import AnimatedCounter from "../sections/AnimatedCounter.jsx"


const Hero = () => {

    return (
        <section >
            <div className="flex h-dvh text-white items-center pt-20 ">
                <div className=" w-1/3 h-full pt-16">
                    <div className="mx-4 y-4" >
                        <h1 className="mt-10 mb-5 text-3xl font-bold my-4 "> Hi, I’m Ronney-Dev,
                            <span className="roles-container">
                                <span className="role"> Frontend </span>
                                <span className="role"> Backend</span>

                                <span className="role"> Fullstack</span>
                            </span>Developer
                        </h1>   
                        <p className="my-4 font-bold text-l">i'll bring your ideas to life with real projects that make an impact.</p>
                    </div>
                    <div className=" mx-4 text-sm m-4">
                        <p>My name is <span className="text-red-600">Mohammed Benhamada</span> based in algeria with a passion for code </p>
                    </div>
                    <div>
                        <button className="border-none rounded px-16 py-3 mx-4 my-2 bg-white text-black text-sm font-medium">
                            See My Work
                        </button>
                    </div>
                </div>

                <div className=" z-0 w-2/3 h-screen  relative">
                    <Canvas>
                        <Particles count={500} />
                    </Canvas>
                    <div className=" w-full absolute top-0 right-0" >
                        <Robot scale={1.3} />
                    </div>

                </div>

            </div>

            

        </section>
    )
}

export default Hero
