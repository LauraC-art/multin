import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
//links de los vídeos en las tarjetas:

const videos={
  lqNecesitas:"https://www.youtube.com/watch?v=nF9EAQRgAbA",
  futuro:"https://www.youtube.com/watch?v=OLstu58Vevg",
  clHaras:"https://www.umng.edu.co/programas/pregrados/ingenieria-multimedia"
}

export const Card = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], x1y1s1: [0, 0, 1], x2y2s2: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <div class="container-fluid">
        <div class="row">
          <div class="col-sm" style={{
            display: 'grid',
            justifyContent: 'center',
            padding:'20px'}}>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center'}}
            ><a class="url-links" href={videos.lqNecesitas}><h1>Lo que necesitas</h1></a>
            </animated.div>
          </div>

          <div class="col-sm" style={{
            display: 'grid',
            justifyContent: 'center',
            padding:'20px'}}>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ x1y1s1: calc(x, y) })}
            onMouseLeave={() => set({ x1y1s1: [0, 0, 1] })}
            style={{ transform: props.x1y1s1.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center'
            }}
            >
              <a class="url-links" href={videos.futuro}>
                <h1>En el futuro</h1></a>
            </animated.div>
          </div>

          <div class="col-sm" style={{
            display: 'grid',
            justifyContent: 'center',
            padding:'20px'}}>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ x2y2s2: calc(x, y) })}
            onMouseLeave={() => set({ x2y2s2: [0, 0, 1] })}
            style={{ transform: props.x2y2s2.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center'
            }}
            >
              <a class="url-links" href={videos.clHaras}>
                <h1>¿Cómo lograrlo?</h1></a>
            </animated.div>
          </div>
      </div>        
    </div>
  )
}