import React from 'react'
import "./Nav.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Nav() {
  return (
    <div>
      <header className="header" id="header">
	<nav className="links">
        <p href='/'><h1>BlackBox</h1></p>
		<p href="/">Home</p>
		<p href="/">Profile</p>
		<p href="/">Shopping</p>
		<p href="/">Contact</p>
		<p href="/">About</p>
		<span className="line"></span>
        <div className="frontiers"><button>Sign in</button><AccountCircleIcon/>
        </div>
	</nav>
</header>


    </div>
  )
}
