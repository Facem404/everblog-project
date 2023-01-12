import "./App.css";
import Aside from "./components/aside";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import AsideDos from "./components/asidedos";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="max-wrapper">
				<Aside />
				<Body />
				<AsideDos />
			</div>
			<Footer />
		</div>
	);
}

export default App;
