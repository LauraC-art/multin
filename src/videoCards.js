import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const word = <animated.div style={{ background: 'lightpink' }}>Ajkahskajshdkajsh</animated.div>

export const Card = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <div>
        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans),padding:'50px'}}
        />
            <div style={{padding:'50px'}}>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans), padding:'50px'}}
            />
            </div>
        </div>

        <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans)}}
        />
        </div>
    </div>
  )
}