import React, {Component} from 'react'
import './GettingStarted.css'
import {NavLink} from 'react-router-dom'

class GettingStarted extends Component {
    render() {
        return(

            <div className="guide">
               <span> <h1> FitLog - A Guide</h1>

                FitLog was created to log and track your progress by focusing on things other than calories.

                To get started, create an account, answer the questions in the questionnaire and start tracking your progress.
                

                Happy logging! </span>

                <NavLink className="linknoline" to={'/'}><button type="button" className="goback">Go Back</button></NavLink>


            </div>

        )
    }
}

export default GettingStarted