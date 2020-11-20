import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.scss'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}><img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"/></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

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
