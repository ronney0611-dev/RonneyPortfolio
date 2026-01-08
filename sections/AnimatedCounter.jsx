import {myWork} from "./index.js"
import CountUp from 'react-countup';


const AnimatedCounter = () => {
    return (
        <div className="z-50">
            <div className="z-50 grid grid-cols-2 md:grid-cols-4 mx-4 gap-2">
                {
                    myWork.map((items) => {
                        return (
                            <div key={items.id} className="myWork">
                                <div  className="font-bold text-3xl">
                                    <CountUp end={items.id} duration={30} /> {items.suffix}   
                                </div>
                                <div className="tex text-sm">
                                    {items.label}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AnimatedCounter
