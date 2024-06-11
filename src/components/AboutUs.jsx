import React from 'react'
import "../style/AboutUs.css"
import stolb from "../pikchi/indusAndStolb.png"
import bike from '../pikchi/Bike.png'
import velW from '../pikchi/AAAWoman.png'
import velikandmen from'../pikchi/velik256.png'
import kidsbakes from '../pikchi/kidsbakes.png'
import strelkaVlevo from "../pikchi/strelkaVlevo.svg"
import strelkaVpravo from "../pikchi/strelkaVpravo.svg"


const AboutUs = () => {
  return (
    <div>
        <div class='AboutUs'>
            <div class='AboutUs-Text'>
                <p>VELORETTI</p>
                <h1>About us</h1>
                <p>Forever Forward.</p>
            </div>

        </div>

        <div class='prosto-velik'>
            <div class="vel"><img src={stolb} alt="" /></div>

            <div class='kusok-TEXTA-and-velik'>
                <h1>Forever forward</h1>
                <p>Our bikes are made to stand the test of time, both aesthetically and practically. Whether you’re after a state-of-the-art electric bike, a classic city bike, or a kids bike for the school run, we want to help make your commute the best part of your day.</p>
            </div>

        </div>

        <div class='PartBike'>
            <div class='PartBike-Text'>
                <a href="">Part of Pon.Bike</a>
                <p>Veloretti was founded in Amsterdam in 2012 with a mission to make clean, timeless bikes that are great quality and delivered to your door at a fair price. We are proud to now be part of Pon.Bike, the world-leading family of bike brands. With this support, we can continue to evolve our designs, take care of our riders, and help keep their bikes on the road.</p>

            </div>
            <img src={bike} alt="" />

        </div>

        <div class='Tolko-Text'>
            <div class='Tolko-Text-Text'>
                <h1>Designed in Amsterdam, handmade in Europe, personal in all cities.</h1>

            </div>
        </div>

        <div class='vrachiNafone'>
            <div class='vrachiNafone-Text'>
                <h1>Made for you</h1>
                <p>Elevate your ride with a bicycle that mirrors your unique style and personality. From an Ace Two electric bike with the latest technology packed into a minimalist design, or a bright yellow Berlin for those who like to ride light and have a craving for nostalgia. Our diverse range of models and colours cater to riders of all kinds.</p>

            </div>
        </div>

        <div class='Exploreourbikes'>
            <h2>Explore our bikes</h2>
            <div class="strelki">
                <button><img src={strelkaVpravo} alt="" /></button>
                <button><img src={strelkaVlevo} alt="" /></button>
            </div>
        </div>

        <div class="bloks">

            <div class='block1'>
                <div class="zagalovovok-and-evro">
                    <h1>Electric Bikes</h1>
                    <a href="">From €3.299</a>
                </div>

                <div class="Electric">
                    <div class='ElectricIvy'><a href="">Electric Ivy Two</a></div>
                    <div class='man-A'><a href="">Electric Ace Two</a></div>

                </div>

                <img class='AAAWoman' src={velW} alt="" />

                <div class='buttonsin'>
                    <button>Buy Now</button>
                    <div class='buttonsin-A'><a href="">Learn more</a></div>
                </div>
                
            </div>

            <div class='block1'>
                <div class="zagalovovok-and-evro">
                    <h1>City Bikes</h1>
                    <a href="">From €399</a>
                </div>

                <div class="Women">
                    <div class='woman-A'><a href="">Women</a></div>
                    <div class='man-A'><a href="">Men</a></div>

                </div>

                <img class='AAAWoman' src={velikandmen} alt="" />

                <div class='buttonsin'>
                    <button>Buy Now</button>
                    <div class='buttonsin-A'><a href="">Learn more</a></div>
                </div>
                
            </div>

            <div class='block1'>
                <div class="zagalovovok-and-evro">
                    <h1>Kids' Bikes</h1>
                    <a href="">From €119</a>
                </div>

                <div class="Women">
                    <div class='age'><a href="">Ages 1,5 to 8</a></div>

                </div>

                <img class='KID' src={kidsbakes} alt="" />

                <div class='buttonsin'>
                    <button>Buy Now</button>
                    <div class='buttonsin-A'><a href="">Learn more</a></div>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default AboutUs
