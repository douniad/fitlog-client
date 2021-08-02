import React, { Component } from 'react'
import FitLogContext from '../FitLogContext'
import config from '../config.js'
import TokenService from '../Services/Token-Service'
import './Summary.css'

class Summary extends Component {

    static contextType = FitLogContext
    state = {
        summaries: [],
    }

    componentDidMount() {
        fetch(config.API_ENDPOINT + '/summaries', {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => res.json())
            .then((summaries = []) => {
                if (summaries.error) {
                    return
                }
                this.setState({ summaries })
            })

    }

    render() {
        return (
            <div className="displaysummaries">
                {this.state.summaries.map(summary => (
                    <ul className="differentsummaries">
                        <li className="summarydate">{summary.date_created}</li>
                        <li className="summaryduration">{summary.duration} </li>
                        <li className="summary.area">{summary.area.map(a => <p>{a}</p>)}</li>
                        <li className="summarysatisfaction">{summary.satisfaction}</li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default Summary