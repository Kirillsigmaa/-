import React from 'react'
import '../style/Cities.css'

import VV from '../pikchi/VelorettiNaVelike.png'
import TS from '../pikchi/tozheSamoe.png'

const Cities = () => {
  return (
    <div>
        <div class='CityBikes'>
            <div class='AboutUs-Text'>
                <p>VELORETTI</p>
                <h1>City Bikes</h1>
                <p>Forever Forward.</p>
            </div>

        </div>

        <div class='ForeverForward'>
            <div class='ForeverForward-zagalovok'>
                <h1>Forever Forward.</h1>
            </div>

            <div class='ForeverForward-Cards'>
                <div class='ForeverForward-Cards-img'>
                    <div><img src={VV} alt="" /></div>
                    <div><img src={TS} alt="" /></div>
                    
                </div>

                <div class='ForeverForward-Headings'>
                    <div class='Headings'>
                        <p>Our women's bicycles are for everyone who likes to combine style with performance. In this range, available are the Café Racer and the Robyn, both frames with a lower tube, making it easy to step through.</p>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cities