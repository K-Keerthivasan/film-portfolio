// Lib imports
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

// Pages import
import './App.css';
import Home from './frontend/components/Home/Home.jsx';
import About from './frontend/components/About/About.jsx';
import NavBar from './frontend/Navbar.jsx';
import BackgroundImage from "./assets/background.svg";
import Footer from "./frontend/Footer.jsx";
import LoadingScreen from "./frontend/components/LoadingScreen";
import ProjectsSection from "./frontend/components/projects/FilmsSection.jsx";
import CustomCursor from "./frontend/components/MouseCursor.jsx";

import React, { useState, useEffect } from "react";
import UnderConstruction from "./frontend/components/UnderConstruction.jsx";
import FilmsSection from "./frontend/components/projects/FilmsSection.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            // Simulate a delay (e.g., for data fetching)
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Adjust the delay time as needed
            return () => clearTimeout(timer);
        } else {
            // Disable loading for other pages
            setIsLoading(false);
        }
    }, [location.pathname]);

    return (
        <div>
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Loading Screen only for Homepage */}
            {isLoading && location.pathname === "/" ? (
                <LoadingScreen />
            ) : (
                <div
                    className="app-background"
                    style={{
                        backgroundImage: `url(${BackgroundImage})`,
                    }}
                >
                    <div className="app-container">
                        {/* Navbar */}
                        <NavBar />

                        {/* Routes */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/gallery" element={<FilmsSection/>} />
                            <Route path="/unknown" element={<UnderConstruction />} />
                        </Routes>

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}
