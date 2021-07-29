import React, {Component} from 'react'
import {NavLink,} from 'react-router-dom'
import FitLogContext from '../FitLogContext'
import AuthApiService from '../Services/Auth-Api-Service'
import './Login.css'

export default class Login extends Component {
    static defaultProps = {
      onLoginSuccess: () => {}
    }
  static contextType = FitLogContext
  
    state = { error: null }
  
    handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ error: null })
      const { user_name, password } = ev.target
  
      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then(res => {
          this.context.setUser(user_name.value)
          user_name.value = ''
          password.value = ''
          this.props.history.push('/questionnaire')
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
  
    render() {
      const { error } = this.state
      return (
      
        <div className="logindiv">
        <form
          className='loginform'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error.message}</p>}
          </div>
          <div className='user_name'>
            <label htmlFor='LoginForm__user_name' className="labels">
              Username
            </label>
            <input
              required
              name='user_name'
              id='LoginForm__user_name'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='LoginForm__password' className="labels">
              Password
            </label>
            <input
              required
              className="lastlabel"
              name='password'
              type='password'
              id='LoginForm__password'>
            </input>
          </div>
          <button className="buttonlogin" type='submit'>
            Login
          </button>
        </form>
  <p className="p">Don't have an account yet? <NavLink to={'/register'}>Register</NavLink></p>
        </div>
     
      )
    }
  }