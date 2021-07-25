import React, { Component } from 'react'
import Summary from '../Summary/Summary'
import PropTypes from 'prop-types'

class SummaryBoard extends Component {
    render() {
        return (

            <section className="summariesboard">
                <ul className="summaries-list">
                    {this.props.summaries.map(summary =>
                        <li className="summary" key={summary.id}>
                            <Summary
                                history={this.props.history}
                                id={summary.id}
                                date={summary.date} 
                                area={summary.area}
                                duration={summary.duration}
                                satisfaction={summary.satisfaction}
                                />
                        </li>
                    )}

                </ul>

            </section>
        )
    }
}


export default SummaryBoard

SummaryBoard.propTypes = {
    summaries: PropTypes.array
}