import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.scss'
import campus from './IMG/slider/2.jpg'
//Importar las imágenes del slider
const sliderImgs=[
  "https://images.squarespace-cdn.com/content/v1/5573469fe4b0061829d437e6/1591788934201-ADOTONZ8UD7CQZCUHEHW/ke17ZwdGBToddI8pDm48kKP_KVSAdTUiEPG-QFeKFvoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc5nwarqhdqyUZwNxvWn3srOVfYUURxpKccnDh6CXfu1-WvN7AJ0bIJ4Sd4Dpeg0fE/realidad-virtual.jpg?format=1500w",
  "https://images.ctfassets.net/u0haasspfa6q/2Nj6jD99cwLXvSpQjxSMcU/ef8b6eda675f5596518b52ba1facafcb/3d-modeling-software-on-2-computer-screens-on-a-desk-with-a-male-3d-modeling-artist",
  campus
]
//

const pages = [
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000', background: 'url('+sliderImgs[0]+') no-repeat' }}></animated.div>,
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000', background: 'url('+sliderImgs[1]+') no-repeat' }}></animated.div>,
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000', background: 'url('+sliderImgs[2]+') no-repeat' }}></animated.div>
];

export const Slider = () => {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0},
      enter: { opacity: 1},
      leave: { opacity: 0 },
    })
    return (
        
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    )
}
