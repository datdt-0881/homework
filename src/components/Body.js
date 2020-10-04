import React, { useState, useEffect } from 'react';
import List from './List'
import Details from './Details'


function Body() {
  let list = [
    {id: 1, name: 'Shika', email: 'shika@gmail.com'},
    {id: 2, name: 'Aomine', email: 'aomine@gmail.com'},
    {id: 3, name: 'Rin', email: 'rin@gmail.com'},
    {id: 4, name: 'Eren', email: 'eren@gmail.com'},
  ]

  const [user, setUser] = useState({});
  const [userList, setUserList] = useState(list);
  const updateUser = (user) => {
    setUserList(userList.map(el => (el.id === user.id ? user : el)))
  }
  const deleteUser = (deletedUser) => {
    setUserList(userList.filter(user => user.id != deletedUser.id))
  }
  useEffect(() => {
    
  }, [userList]);
  return (
    <div className="row">
      <List userList={userList} showUser={setUser} deleteUser={deleteUser}/>
      <Details updateUser={updateUser} user={user} setUser={setUser}/>
    </div>
  )
}

export default Body;
