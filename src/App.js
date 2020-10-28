import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { ParticlesScreen } from './ParticlesInt'
import ReactPlayer from 'react-player'
import "./App.scss";

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
class App extends React.Component {
  render () {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        
        <div>
          <div style={{
            position: "relative",
            paddingTop: "56.25%" }}>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=UaTcNdy8v_g'
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"}}
              playing
              width='100%'
              height='100%'
            />
          </div>
        </div>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#805E73' }}/> 
        
        <ParallaxLayer offset={0.3} speed={0.3} factor={3}>
          <img className="Container__images" src="https://brandemia.org/sites/default/files/sites/default/files/grupo_imagen_logo.jpg"/>
          <div className="Container__images">
            <div className="Typos__titles">
              <h1> Convertirse en ingeniero en multimedia </h1>
            </div>
          </div>
        </ParallaxLayer> 
        
        <ParallaxLayer offset={0} speed={0} factor={3}
        style={{ backgroundImage: url('stars', true),
        backgroundSize: 'cover' }} />

        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ position: 'relative' }}>
            <ParticlesScreen/>
        </ParallaxLayer>

      </Parallax>
    )
  }
}

export default App;