import React, { useState, useEffect } from 'react';
import moment from 'moment'
function Header() {
  const [accessTime, setAccessTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setAccessTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row">
      <div className="col-6">
        Header
      </div>
      <div className="col-6">
        <p>Time {moment(accessTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
      </div>
    </div>
  )
}

export default Header;
