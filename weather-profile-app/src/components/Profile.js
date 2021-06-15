import React, { Component } from "react";
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  componentDidMount = async() => {
    const userData = await axios('https://randomuser.me/api');
    this.setState({
      user: userData.data.results[0]
    })
  }

  render() {
    return (
      <>
            <h1>User Profile</h1>
            {this.state.user && (
              <div>
                <img src={this.state.user.picture.medium} alt="User" />
                <p>{this.state.user.email}</p>
              </div>
            )}
      </>
    )
  }
}
  export default Profile;
