import React, { Component } from 'react'
import './App.css'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'
import FitLogContext from '../FitLogContext'
import SummaryBoard from '../SummaryBoard/SummaryBoard'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Login from '../Login/Login'
import Register from '../Register/Register'
import TokenService from '../Services/Token-Service'
import AuthApiService from '../Services/Auth-Api-Service'
import IdleService from '../Services/Idle-Service'
import config from '../config'
import Summary from '../Summary/Summary'
import Questionnaire from '../Questionnaire/Questionnaire'
import FirstPage from '../FirstPage/FirstPage'
import GettingStarted from '../GettingStarted/GettingStarted'


const { v4: uuidv4 } = require('uuid')

class App extends Component {

    state = {
        summaries: [],
        user: TokenService.getAuthToken()
    }

    componentDidMount() {


        /* if a user is logged in */
        if (TokenService.hasAuthToken()) {

            /*
              Tell the token service to read the JWT, looking at the exp value
              and queue a timeout just before the token expires
            */
            TokenService.queueCallbackBeforeExpiry(() => {
                /* the timoue will call this callback just before the token expires */
                AuthApiService.postRefreshToken()
            })
        }
    }

    logoutFromIdle = () => {
        /* remove the token from localStorage */
        TokenService.clearAuthToken()
        /* remove any queued calls to the refresh endpoint */
        TokenService.clearCallbackBeforeExpiry()
        /* remove the timeouts that auto logout when idle */
        IdleService.unRegisterIdleResets()
        /*
          react won't know the token has been removed from local storage,
          so we need to tell React to rerender
        */
        this.forceUpdate()
    }

    addSummary = (e) => {
        e.preventDefault()
        console.log('hi summary')
        const duration = e.target.duration.value
        const area = e.target.area.value
        const satisfaction = e.target.satisfaction.value
        const date = new Date()
        const summary = { duration, area, satisfaction, date, id: uuidv4() }
        fetch(config.API_ENDPOINT + '/summaries', {
            method: 'post',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(summary)

                .then(res => res.json())
                .then(res => {
                    this.setState({
                        summaries: this.set.state.summaries.concat(res)
                    })
                })
        })
    }

    setSummaries = summaries => {
        this.setState({
            summaries
        })
    }

    setUser = user => {
        this.setState({
            user
        })
    }

    render() {
        const value = {
            summaries: this.state.summaries,
            user: this.state.user,
            addSummary: this.addSummary,
            setUser: this.setUser
        }


        return (

            <FitLogContext.Provider value={value}>


                <div className="maincontainer">
<Header/>
                    <main>
                        <Route exact path={'/'} component={FirstPage} />
                        <PublicOnlyRoute path={'/login'} component={Login} />
                        <PublicOnlyRoute path={'/register'} component={Register} />
                        <PrivateRoute path={'/summaries'} component={Summary} />
                        <PrivateRoute path={'/questionnaire'} component={Questionnaire} />
                        <PrivateRoute path={'/summaryboard'} component={SummaryBoard}/>
                        <PublicOnlyRoute path={'/gettingstarted'} component={GettingStarted}/>
                    

                    </main>
                </div>



            </FitLogContext.Provider>
        )

    }


}

export default App;
