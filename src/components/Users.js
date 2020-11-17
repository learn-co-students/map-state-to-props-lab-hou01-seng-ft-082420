import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    let users = this.props.users.map(user =>  <li>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {users}
        </ul>
          <h3>{this.props.num}</h3>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    num: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
