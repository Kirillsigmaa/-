import React from 'react'
import logo from '../pikchi/logo.png'
import Gal from '../pikchi/galka.svg'
import '../style/header.css'
import UKflag from '../pikchi/EN.png'
import User from '../pikchi/user.png'
import Kor from '../pikchi/korzinka.svg'









function Header() {
  return (
    <>
      <div class="head">

        <div class='vse'>
          <div class='head-logo'><img src={logo} alt="" /></div>

          <div class='head-List'>

            <div class='ListP1'>
              <button>ELECTRIC</button>
              <div class='galochka'><img src={Gal} alt="" /></div>
            </div>

            <div class='ListP1'>
              <button>CITY</button>
              <div class='galochka'><img src={Gal} alt="" /></div>
            </div>

            <div class='ListP1'>
              <button>KIDS</button>
              <div class='galochka'><img src={Gal} alt="" /></div>
            </div>

            <div class='ListP1'>
              <button>ACCESSORIES</button>
            </div>

            <div class='ListP1'>
              <button>STORES</button>
            </div>

            <div class='ListP1'>
              <button>LEASING</button>
              <div class='galochka'><img src={Gal} alt="" /></div>
            </div>

          </div>



        </div>



        <div class='head-vse-ostalnoe'>
          <div class='znachki'>
            <div>EN<img src={UKflag} alt="" /></div>
            <div><img src={User} alt="" /></div>
            <div><img src={Kor} alt="" /></div>
          </div>

        </div>

      </div>
      
    </>
  )
}

export default Header