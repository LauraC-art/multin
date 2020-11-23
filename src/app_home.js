import React from 'react'
//Los componentes kul
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { ParticlesScreen } from './app/components/ParticlesInt'
import { Slider } from './app/components/slider.js'
import { Card } from './app/components/videoCards.js'
import ReactPlayer from 'react-player'
//Estilos
import "./App.scss"
//Página de carga
import { LoadPage } from './app/pages/loadingPage.js'

const vidBienvenida="https://www.youtube.com/watch?v=-zKE04TVxGk";

const redes = {
  webOfi:"https://www.umng.edu.co/programas/pregrados/ingenieria-multimedia",
  facebook: "https://www.facebook.com/lamilitar",
  twitter: "https://twitter.com/lamilitar",
  instagram: "https://www.instagram.com/unimilitar/",
  youtube: "https://www.youtube.com/user/militarnuevagranada",
  linkedin: "https://co.linkedin.com/school/universidad-militar-nueva-granada/"
};

class AppHome extends React.Component {
  //Página de carga   
  constructor(props) {
    super(props)
    this.state = { 
      loading: true,
    }
  }
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 3500); 
  }

  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 3500;
    }
  }
  //Página principal

  render () {
    if (this.state.loading){
      return (
        <div>
          <LoadPage/>
        </div>
      )
    } else{
    //
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
            url={vidBienvenida}
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

    <div class="fuentes__titles-multi__center parallax container-fluid" style={{ height:'auto'}}>
      <div>
        <h1 className="fuentes__titles-multi__style fuentes__titles-multi__titles">
        Estudiar ingeniería en multimedia</h1>
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
        <div style={{zIndex:'7',position:'relative', height:'600px'}}>          
          <Slider/>
        </div>

        <div class="videos" style={{position:'relative',zIndex:'50'}}>
          <div style={{padding:"80px"}}>
            <Card/>
          </div>
        </div>
      </div>
      
      <div
      style={{padding: '0px 0px 25px 25px',          
      display: 'flex',
      justifyContent: 'center'
      }}>
        <div id="redessociales">
          <a class="smedia facebook" href={redes.facebook}>Uno</a>
          <a class="smedia twitter" href={redes.twitter}>Dos</a>
          <a class="smedia instagram" href={redes.instagram}>Tres</a>
          <a class="smedia youtube" href={redes.youtube}>Cuatro</a>
        </div>
      </div>
    
    </div>
  </div>
    </Parallax>
  </div> 
    );
    }
  }
}

export default AppHome;