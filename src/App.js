import React from 'react'
import { animation } from './anim'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { ParticlesScreen } from './ParticlesInt'
import { Slider } from './slider.js'
import { Card } from './videoCards.js'
import ReactPlayer from 'react-player'
import "./App.scss";
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
//Animar on scroll
class App extends React.Component {
  
  render () {
    return (
      
    <div>   
    <Parallax
    className="info"
    >    
    <div class="black">
        <div style={{
          zIndex:'4',
          position: "relative",
          paddingTop: "56.25%" }}>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=3VdYIIATMu8'
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

  <div>

    <div class="fuentes__titles-multi__center parallax container-fluid" style={{ zIndex:'50'}}>
      <div>
        <h1 className="fuentes__titles-multi__style fuentes__titles-multi__titles">
        Convertirse en ingeniero multimedia</h1>
      </div>
    </div>

    <div class="contenido">
      <div style={{ zIndex:'-1'}}>   
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{ position: 'absolute' }}
          factor={1}>            
              <ParticlesScreen/>
        </ParallaxLayer>
      <div class="" style={{position:'relative', height:'600px'}}>          
        <Slider/>
      </div>

    <div class="videos">
      <div style={{padding:"100px"}}>
        <Card/>
      </div>
    </div>
      </div>

    </div>
  </div>

    </Parallax>
  </div>

    

 
    );
  }
}

export default App;