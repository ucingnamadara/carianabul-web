import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";
import Explore from "./views/Explore/Explore";
import Notification from "./views/Notification/Notification";
import Message from "./views/Message/Message";

function RouterFunction() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="/login" element={<Auth/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/notification" element={<Notification/>}/>
                        <Route path="/message" element={<Message/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default RouterFunction