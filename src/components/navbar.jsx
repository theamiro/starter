import React, {Component} from "react"
class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<a className="navbar-brand" href="https://">
						Navbar
					</a>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link active" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Documentation
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								Help
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar
