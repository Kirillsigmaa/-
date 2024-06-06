import React from 'react'
import "../style/Podval.css"
import fac from "../pikchi/facebook.svg"
import ins from "../pikchi/instagram.svg"
import you from "../pikchi/youtube.svg"
import ing from "../pikchi/in.svg"
import tik from "../pikchi/tikTok.svg"
import ver from "../pikchi/vVerh.png"

const Podval = () => {
  return (
    <div class='L'>
        <div class='text-and-button'>
            <div class='vse-vmeste'>
                <h3>Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your test ride now and we'll see you there.</h3>
                <button>BOOK NOW</button>
            </div>
        </div>

        <div class='footer'>
            <div class='Explorer-About-Help'>
                <div class='Explorer'>
                    <h3>Explorer</h3>
                    <div class='Explorer-a'><a href="">Electric bikes</a></div>
                    <div class='Explorer-a'><a href="">City bikes</a></div>
                    <div class='Explorer-a'><a href="">Kids' bikes</a></div>
                    <div class='Explorer-a'><a href="">Accessories</a></div>

                    <div class='Explorer-a'><a href="">Outlet</a></div>
                    <div class='Explorer-a'><a href="">Business</a></div>
                    <div class='Explorer-a'><a href="">Insurance Electric</a></div>
                    <div class='Explorer-a'><a href="">Size guide</a></div>
                </div>

                <div class='About'>
                    <h3>About</h3>
                    <div class='About-a'><a href="">About us</a></div>
                    <div class='About-a'><a href="">Journal</a></div>
                    <div class='About-a'><a href="">Reviews</a></div>
                    <div class='About-a'><a href="">Press</a></div>

                    <div class='About-a'><a href="">Jobs</a></div>
                </div>

                <div class='Help'>
                    <h3>Help</h3>
                    <div class='Help-a'><a href="">Contact</a></div>
                    <div class='Help-a'><a href="">FAQ</a></div>
                    <div class='Help-a'><a href="">Delivery</a></div>
                    <div class='Help-a'><a href="">Assembly & manuals</a></div>

                    <div class='Help-a'><a href="">Payment options</a></div>
                    <div class='Help-a'><a href="">Privacy policy</a></div>
                    <div class='Help-a'><a href="">Terms & conditions</a></div>
                </div>

            </div>

            <div class='JoinTheRide'>
                <div class='button-vverh'><button><img src={ver} alt="" /></button></div>
                <div class='NoInteract'>
                    <h3>Join the ride.</h3>
                    <h4>Sign up for our newsletter.</h4>

                </div>

                <div class='Interact'>
                    <div class='stroka'>
                        <input type="text" placeholder='Enter your email address here'/>
                        <button>Subscribe</button>
                    </div>
                    <div class='galochka'>
                        <input type="checkbox" name="" id="" />
                        <p>By signing up, I agree to the <a>privacy policy</a> of Veloretti.</p>
                    </div>
                    
                </div>

                <div class='SocSeti'>
                    <button><img src={fac} alt="" /></button>
                    <button><img src={ins} alt="" /></button>
                    <button><img src={you} alt="" /></button>
                    <button><img src={ing} alt="" /></button>
                    <button><img src={tik} alt="" /></button>
                </div>
            </div>




        </div>

    </div>
  )
}

export default Podval
