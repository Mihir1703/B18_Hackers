import React from 'react'
import Schemes from './Schemes'

const Favorable = () => {
    return (
        <>
            <section id="why">
                <div class="container-why">
                    <div class="head-why">
                        <h2>Schemes for you</h2>
                    </div>
                    <div className="Scheme-section">
                        <Schemes/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favorable
