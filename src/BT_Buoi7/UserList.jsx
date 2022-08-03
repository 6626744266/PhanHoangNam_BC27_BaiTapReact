import React, { Component } from 'react'
import axios from 'axios'

export default class UserList extends Component {

  handleDelete = async (productId) => {
    try {
      await axios.delete(`https://62bb0738573ca8f832912e50.mockapi.io/reactbuoi7/${productId}`)
      this.props.onDeleteSuccess();
    }
    catch (err) {
      console.log(err)
    }

  }



  render() {
    const { users } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.taiKhoan}

                </td>
                <td>{user.hoTen}</td>
                <td>{user.matKhau}</td>
                <td>{user.email}</td>
                <td>{user.soDT}</td>
                <td>{user.loaiND}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={() => this.props.onSelectUser(user.id)}>Chỉnh sửa</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(user.id)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  }
}
