import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Users } from './pages/user';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='*' element={<h1>Not Found 404</h1>}></Route>
                    <Route path='/users' element={<Users/>}></Route>
            
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
