import React from 'react'
import "../style/HeroSection.css"
import indus from '../pikchi/indusNaVelike.png'
import bike from '../pikchi/Bike.png'
import zhop from '../pikchi/ZhopaSVelikom.png'
import bef from '../pikchi/before.png'

function HeroSection() {
  return (
    <div>

        <div class='classniy-velik'>
            <div class='TEXT'>
                <h5>VELORETTI BUSINESS</h5>
                <h1>Bike Lease Plan For Employees.</h1>
            </div>
        </div>


        <div class='classniy-indus'>
            <div class="ind"><img src={indus} alt="" /></div>

            <div class='kusok-TEXTA'>
                <h1>Bike plans for employees.</h1>
                <p>Veloretti Electrics benefit both the environment and the health of your employees. Oh, and they look good too. Cost-free for the employer and outside of the WKR.</p>
                <h6>Discover more</h6>
            </div>

        </div>



        <div class='velik-snezhok'>
            <div class='velik-snezhok-text'>
                <h1>Service, maintenance and insurance</h1>
                <p>The lease includes an all-in service package. Throughout the entire 36 months, you are fully insured against damage, theft and maintenance. In addition, you always have access to roadside assistance.</p>
            </div>
        </div>



        <div class='prosto-velik'>
            <div class="vel"><img src={bike} alt="" /></div>

            <div class='kusok-TEXTA-and-velik'>
                <h1>Free of charge for employers</h1>
                <p>The bike plan is totally independent of the WKR and is free for you as an employer. The employee pays the lease costs and you, as the employer, decide whether you want to contribute to the costs.</p>
                <h6>Cost example</h6>
            </div>

        </div>



        <div class='opat-velik-skolko-mozhno'>
            <div class='Spisok'>
                <div class='Spisok-zagalovok'> <h1>How it works</h1> </div>

                <div class='Sam-spisok'>

                    <div class='element-spiska'>
                        <div class='element-spiska-zagalovok'>

                            <div class="before"><img src={bef} alt="" /></div>
                            <h2>Register your company</h2>

                        </div>
                        <p>Fill in our registration form with your company details. After your registration, our leasing partner will do a credit check. You will hear whether your application has been approved within 24 hours.</p>

                    </div>




                    <div class='element-spiska'>
                        <div class='element-spiska-zagalovok'>

                            <div class="before"><img src={bef} alt="" /></div>
                            <h2>Determine the requirements</h2>

                        </div>
                        <p>You get acces to the digital platform. Set the requirements for your employees and share the registration link.</p>

                    </div>





                    <div class='element-spiska'>
                        <div class='element-spiska-zagalovok'>

                            <div class="before"><img src={bef} alt="" /></div>
                            <h2>Ride your bike!</h2>

                        </div>
                        <p>Let's go! Your employees can choose their bikes and they'll be delivered straight to their homes.</p>

                    </div>






                    <div class='element-spiska'>
                        <div class='element-spiska-zagalovok'>

                            <div class="before"><img src={bef} alt="" /></div>
                            <h2>Administration</h2>

                        </div>
                        <p>Everything in one place. The digital platform gives you an easy overview of all the information for your payroll.</p>

                    </div>

                </div>

            </div>

            <div class="zhooop"><img src={zhop} alt="" /></div>

        </div>





    </div>
  )
}

export default HeroSection
