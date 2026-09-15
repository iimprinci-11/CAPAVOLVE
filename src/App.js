import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import SkillDetails from "../pages/SkillDetails";
import Roadmaps from "../pages/Roadmaps";
import FrontendRoadmap from "../pages/FrontendRoadmap";
import TopicLearning from "../pages/TopicLearning";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Resources from "../pages/Resources";
import Practice from "../pages/Practice";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/skills"
                    element={<Skills />}
                />

                <Route
                    path="/skills/:skillName"
                    element={<SkillDetails />}
                />

                <Route
                    path="/roadmaps"
                    element={<Roadmaps />}
                />

                <Route
                    path="/roadmaps/frontend"
                    element={<FrontendRoadmap />}
                />

                <Route
                    path="/learn/:topicName"
                    element={<TopicLearning />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
    path="/dashboard"
    element={<Dashboard />}
/>

        <Route
    path="/resources"
    element={<Resources />}
/>
<Route
    path="/practice"
    element={<Practice />}
/>

<Route
    path="/signup"
    element={<Signup />}
/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;