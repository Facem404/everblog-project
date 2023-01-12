import React from "react";

function Aside() {
	return (
		<div className="aside-wrap">
			<div className="item-1 item">
				<div>
					<img src={require("../images/test.jpg")} alt="" srcset="" />
					<a href="#.">
						<h2>Foto 1</h2>
					</a>
				</div>
			</div>
			<div className="item-2 item">
				<div>
					<img src={require("../images/test.jpg")} alt="" srcset="" />
					<a href="#.">
						<h2>Foto 2</h2>
					</a>
				</div>
			</div>
			<div className="item-3 item">
				<div>
					<img src={require("../images/test.jpg")} alt="" srcset="" />
					<a href="#.">
						<h2>Foto 3</h2>
					</a>
				</div>
			</div>
			<div className="item-4 item">
				<div>
					<img src={require("../images/test.jpg")} alt="" srcset="" />
					<a href="#.">
						<h2>Foto 4</h2>
					</a>
				</div>
			</div>
			<div className="item-5 item">
				<div>
					<img src={require("../images/test.jpg")} alt="" srcset="" />
					<a href="#.">
						<h2>Foto 5</h2>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Aside;
