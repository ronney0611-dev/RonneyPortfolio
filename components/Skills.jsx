import { Canvas } from '@react-three/fiber'
import BigRobot from '../sections/BigRobot.jsx'
import ReactLogo from '../sections/ReactLogo.jsx'
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import ThreeJs from '../sections/Js-transformed.jsx'
import Git from '../sections/Git-svg-transformed.jsx'
import GitHub from '../sections/Untitled.jsx'
import NodeJs from '../sections/Node-transformed.jsx'
import Data from '../sections/Data.jsx'

const Skills = () => {
    return (
        <section className='flex flex-col'>
            <div className='flex flex-col'>
                <div className='flex justify-center  font-semibold text-xl text-white '>
                </div>
            </div>
            <div className='flex flex-row gap-2'>
                {/*leftside */}
                <div className='flex-1 flex-col'>
                    <div>
                        <Canvas>
                            <Float>
                                <Git
                                    scale={0.05}
                                    rotation={[0, -0.5, 0.1]}
                                />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                            </Float>
                        </Canvas>
                    </div>
                    <div>
                        <Canvas>
                             <Float>
                                <ThreeJs
                                    scale={0.06}
                                    rotation={[0, -0.2, 0]}
                                />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 100 ]} intensity={6} />
                            </Float>
                            
                        </Canvas>
                    </div>
                    <div>
                        <Canvas>
                            <Float>
                                <NodeJs
                                    scale={5}
                                    position={[0, 0, 0]}
                                    rotation={[0.1, 4.3, 0.1]}
                                />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                            </Float>
                        </Canvas>
                    </div>
                </div>
                {/*middelside */}
                <div className='flex-3'>
                    <BigRobot scale={1.5} />
                    
                </div>
                {/*rightside */}
                <div className='flex-1 flex-col'>

                    <div className='flex flex-col gap-5 items-center mb-5'>
                        <Canvas>
                            <Float>
                                <ReactLogo
                                    scale={0.8}
                                    position={[0, 0, 0]}
                                    rotation={[0, -0.3, 0.1]}
                                />
                                <ambientLight intensity={1} />
                                <directionalLight position={[10, 10, 10]} intensity={-3} />
                            </Float>
                           
                        </Canvas>
                        
                    </div>
                    <div className='flex flex-col gap-5 items-center mb-5'>

                        <Canvas>
                            <Float>
                                <GitHub
                                    scale={0.05}
                                    rotation={[0.1, 2, 0.1]}
                                />
                                <ambientLight intensity={100} />
                                <directionalLight position={[10, 0, 0]} intensity={800} />
                            </Float>
                        </Canvas>
                            
                    </div>

                    <div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
