import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./components/Chat"
import LoginModal from "./components/LoginModal"

function routes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat-test" element={<Chat/>}/>
            <Route path="/login" element={<LoginModal/>}/>
        </Routes>
    )
}
export default routes