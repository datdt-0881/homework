import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function List(props) {
  const [itemHover, setItemHover] = useState(false);

  return (
    <div className="col-6">
      <p>List</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map(user => <Item key={user.id} showUser={props.showUser} deleteUser={props.deleteUser} user={user} />)}
        </tbody>
      </Table>
    </div>
  )
}

function Item(props) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <tr onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} >
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{mouseEnter ? <EditButton showUser={props.showUser} user={props.user}/> : ''}</td>
      <td>{mouseEnter ? <DeleteButton deleteUser={props.deleteUser} user={props.user}/> : ''}</td>
    </tr>
  )
}

function EditButton(props) {
  
  return (
    <button onClick={()=> props.showUser(props.user)}>
      Edit
    </button>
  )
}

function DeleteButton(props) {
  return (
    <button onClick={() => props.deleteUser(props.user)}>
      Delete
    </button>
  )
}

export default List;
