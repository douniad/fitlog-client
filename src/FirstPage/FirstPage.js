import React, { Component } from 'react'
import { NavLink , } from 'react-router-dom'
import './FirstPage.css'
import FitLogContext from '../FitLogContext'
import TokenService from '../Services/Token-Service'

class FirstPage extends Component {

static contextType = FitLogContext

renderLoggedOutFirstPage() {
    return 
    <div className="loggedout">
        <NavLink className="linknoline" to={'/register'}><button type="button" className="registerbutton">Register</button></NavLink>
        <NavLink className="linknoline" to={'/login'}><button type="button" className="loginbutton">Log In</button></NavLink>
    </div>
    
}

renderLoggedInFirstPage() {
    <div></div>
}

    render() {
        return (

            <div className="firstpage" > 

                <section className="firstsection">
                    <h1>FitLog</h1>
                    <h2>Keep track of your progress, anytime, anywhere.</h2>
                </section>
                <main className="secondsection">
                {TokenService.hasAuthToken()
                        ? this.renderLoggedInFirstPage()
                        : this.renderLoggedOutFirstPage()}
                </main>
            </div>
        )
    }
}

export default FirstPage