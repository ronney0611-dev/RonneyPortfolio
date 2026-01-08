import { Canvas } from "@react-three/fiber"
import DevRomm from "../sections/DevRomm.jsx"
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Robot from "../sections/Robot.jsx"
import BigRobot from '../sections/BigRobot'
import Particles from "../sections/Particals-snow.jsx"
import AnimatedCounter from "../sections/AnimatedCounter.jsx"
import TextType from "@/components/TextType.jsx"
TextType
import React from "react";
import BorderAnimationButton from "@/components/nurui/border-button";


const Hero = () => {

    return (
        <section className=" lg:mx-20 mx-6  my-10 relative" >


            <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  ">
                <div className=" text-white my-10 flex flex-col ">
                    <div className=" r " >
                        <h1 className="mt-10 mb-5 text-3xl font-bold my-4 "> Hi, I’m Ronney-Dev, I'm a
                            <h1> <TextType className=" text-red-600"
                                text={["UI & UX Designer", "Frontend Developer", "Backend Developer", "FullStack Developer"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            /> </h1>
                        </h1>
                        <p className="my-4 font-bold text-l">i'll bring your ideas to life with real projects that make an impact.</p>
                    </div>
                    <div className=" text-sm my-4">
                        <p>My name is <span className="text-red-600">Mohammed Benhamada</span> based in algeria with a passion for code </p>
                    </div>
                    <div className="my-10" onClick={() => {
                        const section = document.getElementById('contact')
                        if (section) {
                            const yOffset = -100; // adjust if you have a fixed navbar
                            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" }); // smooth scroll
                        }
                    }}>
                        <BorderAnimationButton text="Contact me" />
                    </div>
                </div>

                <section className="relative h-screen overflow-hidden ">
                    <Canvas className="absolute inset-0">
                        <Particles count={500} />
                    </Canvas>
                    <div className=" absolute top-0 right-0 left-0">
                        <Robot
                            scale={1.5}
                        />
                    </div>

                </section>

            </div>
            <AnimatedCounter />
        </section >
    )
}

export default Hero
