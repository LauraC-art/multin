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
   <div >
<div class="parallax container-fluid"></div>

<div class="container-fluid" style={{ height:'1000px'}}>
<div class="row">
<div class="col-sm-1 container-fluid columizq ">
<aside class="sidebar ">
    <nav class="nav  sticky-top">
      <ul>
        <li class="nav-item">
      <a  href="#section1">Section 1</a>
       </li>
        <li class="nav-item">
      <a  href="#section2">Section 2</a>
    </li>
        <li class="nav-item">
      <a  href="#section3">Section 3</a>
    </li>
        
      </ul>
    </nav>
  </aside>
</div>
 <div class="col-sm-11">
   
<div id="section1" class="container-fluid bg-success" style={{ height:'400px'}} >
  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section2" class="container-fluid bg-warning" style={{ height:'400px'}} >
  <h1>Section 2</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section3" class="container-fluid bg-secondary" style={{ height:'400px'}} >
  
<div id="demo" class="carousel slide" data-ride="carousel">

  
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
 
  <div class="carousel-inner">
    <div class="carousel-item active car1">
      <img src="la.jpg" alt="Los Angeles" width="1100" height="500"></img>
    </div>
    <div class="carousel-item">
      <img src="chicago.jpg" alt="Chicago" width="1100" height="500"></img>
    </div>
    <div class="carousel-item">
      <img src="ny.jpg" alt="New York" width="1100" height="500"></img>
    </div>
  </div>
  

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

</div>
<div id="section41" class="container-fluid bg-danger" >
  <h1>Section 4 Submenu 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section42" class="container-fluid bg-info" >
  <h1>Section 4 Submenu 2</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
</div>
</div>
</div>
</div>

    );
  }
}

export default App;