import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile!</h2>
        <NavLink to="/index"> Index </NavLink>
      </div>
    )
  }
}

export default Profile