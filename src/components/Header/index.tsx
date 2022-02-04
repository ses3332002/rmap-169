import React from 'react'
import NavBar from 'components/NavBar'
import AdminBar from 'components/AdminBar'

function Header(): React.ReactElement {
  return (
    <header>
      <AdminBar />
      <NavBar />
    </header>
  )
}

export default Header
