import './App.css'
import MUI from "./views/MUI";
import {Routes, Route, Link} from "react-router-dom";
import Mantine from "./views/Mantine";

function App() {

    return (
        <div className="App">
            <div className="main">
                <div>
                    <h3>MUI</h3>
                    <Routes>
                        <Route path="/" element={<MUI/>}/>
                        <Route path="mantine" element={<Mantine/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default App
