import axios from 'axios'
import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'







export default class UserManagement extends Component {


  constructor(props) {
    super(props)

    this.state = {
      users: [],
      selectedUser: null,
    }
  }


  fetchUsers = async () => {
    try {
      const { data } = await axios.get("https://62bb0738573ca8f832912e50.mockapi.io/reactbuoi7")
      this.setState({ users: data })
    }
    catch (err) {
      console.log(err)
    }
  }

  fetchUserDetail = async (userId) => {
    document.querySelector('.btn.btn-success').disabled = true




    try {
      const { data } = await axios.get(`https://62bb0738573ca8f832912e50.mockapi.io/reactbuoi7/${userId}`)
      this.setState({ selectedUser: data })

    }
    catch (err) {
      console.log(err)
    }

  }




  componentDidMount = () => {
    this.fetchUsers()
  }


  render() {
    const { users, selectedUser } = this.state
    return (


      <div>
        <div className="container">

          <div className="card mb-5">
            <div className="card-header bg-dark text-white">
              <strong>Form đăng ký </strong>
            </div>
            <div className="card-body">
              <UserForm onSuccess={this.fetchUsers} user={selectedUser} />
            </div>
          </div>

        </div>
        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>Danh sách người dùng </strong>
          </div>
          <div className="card-body">
            <UserList users={users} onDeleteSuccess={this.fetchUsers} onSelectUser={this.fetchUserDetail} />
          </div>
        </div>
      </div >
    )
  }
}
