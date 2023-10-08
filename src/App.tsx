import NavBar from './components/NavBar/NavBar.tsx'
import Footer from './components/Footer/Footer.tsx'
import Home from './components/Home/Home.tsx'
import { Routes, Route, Outlet } from 'react-router-dom'

const AppTemplate = () => {
    return (
        <div className="app">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppTemplate />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryName" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
