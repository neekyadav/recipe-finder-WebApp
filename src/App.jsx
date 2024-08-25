import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import FavoritesPage from "./pages/favoritesPage.jsx";
function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
			</Routes>
		</div>
	);
}

export default App;