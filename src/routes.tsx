import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";


function routes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
export default routes