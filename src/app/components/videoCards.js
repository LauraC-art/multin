import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../styles/videos.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

//links de los vídeos en las tarjetas:
//Aquí los vídeos ya están completos
const videos={
  lqNecesitas:"https://www.youtube.com/watch?v=kYPqkkOvfLI&feature=youtu.be",
  futuro:"https://www.youtube.com/watch?v=9HmM8Ya0Ac0&feature=youtu.be",
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
            class="cardV uno"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center',
            boxShadow: 'inset 100px 150px 100px 100px rgba(0, 0, 0, 0.9)'
            }}
            ><a class="url-links" href={videos.lqNecesitas}><h1>Lo que necesitas</h1></a>
            </animated.div>
          </div>

          <div class="col-sm" style={{
            display: 'grid',
            justifyContent: 'center',
            padding:'20px'}}>
            <animated.div
            class="cardV dos"
            onMouseMove={({ clientX: x, clientY: y }) => set({ x1y1s1: calc(x, y) })}
            onMouseLeave={() => set({ x1y1s1: [0, 0, 1] })}
            style={{ transform: props.x1y1s1.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center',
            boxShadow: 'inset 100px 150px 100px 100px rgba(0, 0, 0, 0.9)'
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
            class="cardV tres"
            onMouseMove={({ clientX: x, clientY: y }) => set({ x2y2s2: calc(x, y) })}
            onMouseLeave={() => set({ x2y2s2: [0, 0, 1] })}
            style={{ transform: props.x2y2s2.interpolate(trans), display:'flex', justifyContent:'center', alignItems:'center',
            boxShadow: 'inset 100px 150px 100px 100px rgba(0, 0, 0, 0.9)'
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