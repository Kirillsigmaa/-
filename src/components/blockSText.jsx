import React from 'react'
import "../style/blockSText.css"
import VVV from "../pikchi/V.svg"

const BlockSText = () => {
  return (
    <div class='blockSText-V'>
      <div class='samoe-vazhnoe'>

        <h1>Get in touch</h1>

        <div class='input-V'>
            <div class='input-element'>
                <input type="text" placeholder='First name'/>
            </div>

            <div class='input-element'>
                <input type="text" placeholder='Last name'/>
            </div>

            <div class='input-element'>
                <input type="text" placeholder='Email address'/>
            </div>

            <div class='input-element'>
                <input type="text" placeholder='Phone number'/>
            </div>

            <div class='input-element'>
                <input type="text" placeholder='Company name'/>
            </div>

            <div class='input-spisok'>
                <input type="text" placeholder='Company Size'/>
                {/* <img src={VVV} alt="" /> */}
            </div>

            <div class='input-element'>
                <input type="text" placeholder='Number of bikes'/>
            </div>

            <div class='input-element-BIG'>
                <textarea type="text" placeholder='How can we help'/>
            </div>

            <div class='input-element-button'>
                <button>Send the request</button>
            </div>

        </div>

      </div>
    </div>
  )
}

export default BlockSText
