import React from 'react'
import ReactDOM from 'react-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { ParticlesScreen } from './ParticlesInt'
import ReactPlayer from 'react-player'

// Little helpers ...
class App extends React.Component {
  render () {
    return (
    	<div style={{
        position: "relative",
        paddingTop: "56.25%" }}>
        <ReactPlayer
          url='https://vimeo.com/243556536'
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
    )
  }
}

export default App;