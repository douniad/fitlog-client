import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FirstPage.css'

class FirstPage extends Component {
    render() {
        return (

            <div className="firstpage" > 

                <section className="firstsection">
                    <h1>FitLog</h1>
                    <h2>Keep track of your progress, anytime, anywhere.</h2>
                </section>
                <main className="secondsection">
                    <NavLink className="linknoline" to={'/register'}><button type="button" className="registerbutton">Register</button></NavLink>
                    <NavLink className="linknoline" to={'/login'}><button type="button" className="loginbutton">Log In</button></NavLink>
                </main>
            </div>
        )
    }
}

export default FirstPage