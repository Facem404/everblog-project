import "./App.css";
import Aside from "./components/aside";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Aside />
			<Footer />
		</div>
	);
}

export default App;
