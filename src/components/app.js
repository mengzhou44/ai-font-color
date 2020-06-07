import React, { useState } from 'react'

import { SketchPicker } from 'react-color'

export function App() {
    const [backColor, setBackColor] = useState('#805757')
    const [fontColor, setFontColor] = useState('#ffffff')
    return (
        <div>
            <div
                className="content"
                style={{
                    backgroundColor: backColor,
                }}
            >
                <h1
                    style={{
                        color: fontColor,
                    }}
                >
                    Hello World
                </h1>
            </div>

            <SketchPicker
                color={backColor}
                onChangeComplete={(color) => {
                    setBackColor(color.hex)
                    setFontColor(getFontColor(color.rgb))
                }}
            ></SketchPicker>
        </div>
    )
}

const brain = require('brain.js')
const network = new brain.NeuralNetwork()
network.train([
    {
        input: { r: 0.62, g: 0.72, b: 0.88 },
        output: { light: false },
    },
    { input: { r: 0.1,  g: 0.84, b: 0.72 }, output: { light: false } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { light: true } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: false } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { light: true } },
    { input: { r: 1, g: 0.99, b: 0 }, output: { light: false } },
    { input: { r: 1, g: 0.42, b: 0.52 }, output: { light: true } },
])

function getFontColor({ r, g, b }) {
   
   let input ={
      r: r/255,
      g: g/255,
      b: b/255
  }
    let result = network.run(input)
 
    if (result.light > 0.5) {
        return '#FFFFFF'
    }
    return '#000000'
}
