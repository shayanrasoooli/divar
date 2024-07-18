import React from 'react'
import SideBar from '../components/template/SideBar'
import Main from '../components/template/Main'

const style = {display : "flex"}
function HomePage() {
  return (
    <div style={style}>
      <SideBar/>
      <Main />
    </div>
  )
}

export default HomePage