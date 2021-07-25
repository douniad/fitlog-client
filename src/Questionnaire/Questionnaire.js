import React, { Component } from 'react'
import SummaryService from '../Services/Summary-Service'
import './Questionnaire.css'

class Questionnaire extends Component {

    handleSubmit = ev => {
        ev.preventDefault()
        const { duration, area, satisfaction } = ev.target
        const areas = [...area].filter(input => input.checked).map(input => input.value)
        console.log(areas)

        this.setState({ error: null })
        SummaryService.postSummary({
            duration: duration.value,
            area: areas,
            satisfaction: satisfaction.value
        })
        
            .then(summary => {
                duration.value = ''
                area.value = ''
                satisfaction.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (


            <div className="questionnaire">
                <form className="questionnaireform" onSubmit={this.handleSubmit}>
                    <section className="firstquestion">
                        <div className="h2div"><h2 className="h2">How long was your workout?</h2></div>
                        <ul>
                            <li><input className="radio" type="radio" value="≤ 15 minutes" name="duration" /><label>≤ 15 minutes</label></li>
                            <li><input className="radio" type="radio" value="15 - 30 minutes" name="duration" /><label>15 - 30 minutes</label></li>
                            <li><input className="radio" type="radio" value="30 - 45 minutes" name="duration" /><label>30 - 45 minutes</label></li>
                            <li><input className="radio" type="radio" value="≥ 45 minutes" name="duration" /><label>≥ 45 minutes</label></li>
                        </ul>
                    </section>

                    <section className="secondquestion">
                    <div className="h2div"><h2 className="h2">What did you train today?</h2></div>
                        <ul>
                            <li><input className="checkbox" type="checkbox" value="Abdominals" name="area" /><label>Abdominals</label></li>
                            <li><input className="checkbox" type="checkbox" value="Arms" name="area" /><label>Arms</label></li>
                            <li><input className="checkbox" type="checkbox" value="Back" name="area" /><label>Back</label></li>
                            <li><input className="checkbox" type="checkbox" value="Cardio" name="area" /><label>Cardio</label></li>
                            <li><input className="checkbox" type="checkbox" value="Chest" name="area" /><label>Chest</label></li>
                            <li><input className="checkbox" type="checkbox" value="Legs" name="area" /><label>Legs</label></li>
                            <li><input className="checkbox" type="checkbox" value="Shoulders" name="area" /><label>Shoulders</label></li>
                            <li><input className="checkbox" type="checkbox" value="Stretching" name="area" /><label>Stretching</label></li>
                        </ul>

                    </section>

                    <section className="thirdquestion">
                    <div className="h2div"><h2 className="h2">How satisfied are you with your accomplishments?</h2></div>
                        <ul>
                            <li><input className="radio" type="radio" value="Highly" name="satisfaction" /><label>Highly</label></li>
                            <li><input className="radio" type="radio" value="Mildly" name="satisfaction" /><label>Mildly</label></li>
                            <li><input className="radio" type="radio" value="Not particularly" name="satisfaction" /><label>Not particularly</label></li>
                        </ul>

                        <button className="submitquestionnaire">Submit</button>
                    </section>
                </form>
                </div>

           
        )
    }
}

export default Questionnaire