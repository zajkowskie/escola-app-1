import React from 'react';
// import slide1 from '../../img/home__slide-1.png'
// import slide2 from '../../img/home__slide-2.png'

function Slider() {
    return (
        <div className="slider">
            <div className="slider-container">
                <input id="slide-dot-1" type="radio" name="slides" checked/>
                <div className="slide slide-1">
                    <div className="slide__mask"></div>
                    <h1 className="slide__text">Let’s turn your idea <br/> into digital product</h1>
                    <button className="button button--yellow">Know more</button>
                </div>
                <input id="slide-dot-2" type="radio" name="slides"/>
                <div className="slide slide-2">
                    <div className="slide__mask"></div>
                    <p className="slide__text">We create digital products for<br/>  companies and startups</p>
                    <button className="button button--yellow">Know more</button>
                </div>
                <div className="menu">
                    <label for="slide-dot-1"></label>
                    <label for="slide-dot-2"></label>
                </div>
            </div>
        </div>
    );
  }
  
  export default Slider;