import React from 'react'
import GradientText from '../src/components/GradientText.jsx'

const Title = ({text}) => {
    return (
            <GradientText
            colors={["#5227FF", "#c80e0e"]}
            className="px-10 text-4xl my-10"
        >
            {text}
        </GradientText>
    )
}

export default Title
