import React from 'react'
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div className="text-secondaryColor font-semibold text-xl ml-12 mt-4 space-y-4">
      <TypeAnimation
        sequence={[
          ">> HELLO WORLD !!!", // Types 'One'
          4000, 
        ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
      />
      <TypeAnimation
        sequence={[
          ">> LEARN !!!", // Types 'One'
          4000, 
        ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
      />
      <TypeAnimation
        sequence={[
          ">> GROW !!", // Types 'One'
          4000, 
        ]}
        wrapper="div"
        cursor={false}
        repeat={Infinity}
      />
    </div>
  )
}

export default TextAnimation
