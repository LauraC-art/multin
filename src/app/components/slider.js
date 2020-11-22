import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import '../styles/slider.scss'

//Importar las imágenes del slider
const sliderImgs=[
  "https://images.squarespace-cdn.com/content/v1/5573469fe4b0061829d437e6/1591788934201-ADOTONZ8UD7CQZCUHEHW/ke17ZwdGBToddI8pDm48kKP_KVSAdTUiEPG-QFeKFvoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc5nwarqhdqyUZwNxvWn3srOVfYUURxpKccnDh6CXfu1-WvN7AJ0bIJ4Sd4Dpeg0fE/realidad-virtual.jpg?format=1500w",
  "https://www.digitalschool.ca/wp-content/uploads/2018/06/3d-modeling-engineering-design-technology-1.jpg",
  "https://www.surveycto.com/wp-content/uploads/2018/04/ai-and-dev.jpg"
]
//

const pages = [
  
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000',
    background: 'url('+sliderImgs[0]+') no-repeat',
    filter: 'hue-rotate(-45deg)' }}></animated.div>,
  
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000',
    background: 'url('+sliderImgs[1]+') no-repeat',
    filter: 'hue-rotate(-15deg)' }}></animated.div>,
  
  ({ style }) => <animated.div style={{ ...style, height:'20%', boxShadow: 'inset 0 0 50px #000000',
    background: 'url('+sliderImgs[2]+') no-repeat'
 }}></animated.div>
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
