import React from 'react'
import "../style/AnyVopros.css"

const AnyVopros = () => {
  return (
    <div class='AnyVopros-V'>
        <hr />
        <div class='Any-questions'>
            <div class='zagalovok'><h1>Any questions?</h1></div>
            <div class='questions'>
                <button class='button-questions'>
                    <hr />
                    <div class='button-questions-nachinka'>
                        <h2>What about the paperwork?</h2>
                        <h2>+</h2>
                    </div>
                    {/* <hr /> */}
                </button>

                <button class='button-questions'>
                    <hr />
                    <div class='button-questions-nachinka'>
                        <h2>How does it work with an employee who retires early?</h2>
                        <h2>+</h2>
                    </div>
                    {/* <hr /> */}
                </button>

                <button class='button-questions'>
                    <hr />
                    <div class='button-questions-nachinka'>
                        <h2>What does a Veloretti Bike Plan cost for an employer?</h2>
                        <h2>+</h2>
                    </div>
                    {/* <hr /> */}
                </button>

                <button class='button-questions'>
                    <hr />
                    <div class='button-questions-nachinka'>
                        <h2>How is the insurance & maintenance arranged when leasing a Veloretti bike?</h2>
                        <h2>+</h2>
                    </div>
                    <hr />
                </button>

                <button class='button-questions'>
                    {/* <hr /> */}
                    <div class='button-questions-nachinka'>
                        <h2>What are the legal requirements for the Veloretti bicycle plan?</h2>
                        <h2>+</h2>
                    </div>
                    <hr />
                </button>

            </div>
        </div>
    </div>
  )
}

export default AnyVopros