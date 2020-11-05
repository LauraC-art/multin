import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {ParticlesScreen} from './ParticlesInt'
import ReactPlayer from 'react-player'
import Overlay from 'react-image-overlay'
import "./App.scss"

// Little helpers ...
/*asdasd*/
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const a=["https://www.itconsultors.com/images/blog/Realidad-virtual-con-gafas.jpg","https://upload.wikimedia.org/wikipedia/commons/e/ef/UMNG_Campus_Nueva_Granada_-_Acceso_Principal.jpg"];
class App extends React.Component {
  render () {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={3}>

        {/*Página 2: Scroll horizontal*/}
      <div>
        <ParallaxLayer offset={0.5} speed={-0.3}
        factor={1}
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          
          <div className="Container__images">      
            <img className="img-fluid"
            src={a[0]}
            style={{opacity:"0.7"}}/>
            <div className="container Container__text">
              <h1 className="Typos__titles" style={{zIndex:"5"}}>
                    Convertirse en <b>ingeniero en multimedia</b>
              </h1>
            </div>
          </div>                           
        </ParallaxLayer>
        </div>

        {/*Página 3: Scroll horizontal*/}
        <div>
        <ParallaxLayer offset={2} speed={3}
        factor={1}
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>

        <div>
            <div style={{
              padding: '25px'
            }}>

              <ReactPlayer
                url='https://www.youtube.com/watch?v=3VdYIIATMu8'
                style={{
                  position: "absolute"
                }}
                width='50%'
              />
            </div>
          </div>
                                 
        </ParallaxLayer>
        </div>
        
        {/*Página 1: Vídeo*/}
        <ParallaxLayer
          offset={0}
          speed={3}
          factor={1}>              
          <div>
            <div style={{
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
        </ParallaxLayer>        

        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ position: 'absolute', zIndex:'-5' }}
          factor={1}>            
              <ParticlesScreen/>
        </ParallaxLayer>

      </Parallax>
    )
  }
}

export default App;