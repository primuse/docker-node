import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const tableHeading = (<tr id='table-head'>
  <th>ID</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Admin</th>
  <th>Email</th>
  <th>Registered On</th>
</tr>);

const mapUsers = (allUsers) => {
  const userItems = allUsers.map((user, index) => (
    <tr key={index}>
      <td>SD0{user.id}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.isadmin.toString()}</td>
      <td>{user.email}</td>
      <td>{user.registered}</td>
      <td>
        <Link to='/edit_user' className='btn xsm bg-bright-blue white'>
          Edit
          </Link>
      </td>
    </tr>
  ));
  return userItems;
};

export const UserTable = ({ allUsers }) => <div className='dash-cont'>
  <div id='table-info'>
    <a href='#'>All</a>
  </div>
  <div id='table-cont'>
    <table>
      <tbody>
        {tableHeading}
        {mapUsers(allUsers)}
      </tbody>
    </table>
  </div>
</div>;


UserTable.propTypes = {
  allUsers: PropTypes.array,
};
