import React from 'react'

const Header = () => {
  return (
      <header className="header">
  <div className="header-flex">
    <h2>Events</h2>
    <div className="user-info">
      <div className="avatar"></div>
      <div className="user-data">
        <span className="user-name">Tim Larsson</span>
        <span className="user-role">Admin</span>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
