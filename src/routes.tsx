import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./components/Chat"
import LoginModal from "./components/LoginModal"
import UserPage from "./components/UserPage"

function routes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat-test" element={<Chat/>}/>
            <Route path="/login" element={<LoginModal/>}/>
            <Route path="/:id" element={<UserPage/>}/>
        </Routes>
    )
}
export default routes