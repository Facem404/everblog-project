import React from "react";

function Header() {
	return (
		<div className="wrapper">
			<div className="logo-header">
				<img src={require("../images/logo.png")} alt="logo everblog" />
				<h1>EVERBLOG</h1>
			</div>

			<div className="form-container">
				<div class="wrap">
					<div class="search">
						<input
							type="text"
							class="searchTerm"
							placeholder="Buscar..."
						/>
						<button type="submit" class="searchButton">
							<i class="fa fa-search"></i>
						</button>
					</div>
				</div>
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
