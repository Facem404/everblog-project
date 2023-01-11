import React from "react";

function Header() {
	return (
		<div className="wrapper">
			<div className="logo-header">
				<img src={require("../images/logo.png")} alt="logo everblog" />
				<h1>FOTOLOG</h1>
			</div>

			<div className="form-container">
				<form action="">
					<label htmlFor="search-user">
						<input
							type="search"
							name="search-user"
							id="search-user"
						/>
					</label>

					<button type="submit" id="boton">
						🔎
					</button>
				</form>
			</div>

			<div className="user-log">
				<a href="#test" id="test">
					Registrarse
				</a>
				<a href="#test2" id="test2">
					Iniciar Sesión
				</a>
			</div>
		</div>
	);
}

export default Header;
