import React, { useState, useEffect } from 'react';

function Details(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  // const [user, setUser] = useState(props.user);

  useEffect(() => {
    setName(props.user.name);
    setEmail(props.user.email);
  }, [props.user]);

  const update = () => {
    props.updateUser({
      id: props.user.id,
      name: name,
      email: email
    });
    props.setUser({});
  }

  const cancel = () => {
    props.setUser({});
  }

  return (
    <div className="col-6">
      {props.user.hasOwnProperty('id') && (
        <>
          <p>Details</p>
          <p>Name: {name}</p><input type="text" value={name || ""} onChange={(e) => setName(e.target.value)} />
          <p>Email: {email}</p><input type="text" value={email || ""} onChange={(e) => setEmail(e.target.value)} />

          <div>
            <button onClick={() => update()}>Save</button>
            <button onClick={() => cancel() }>Cancel</button>
          </div>
        </>
      )}
      
    </div>
  )
}

export default Details;
