import React, { useState, useEffect } from "react";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    // Update cursor position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
                pointerEvents: "none", // Prevent blocking interactions
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                color: isClicked ? "#ff6666" : "#80ceff", // Color changes on click
                transition: "transform 0.1s ease, color 0.1s ease",
            }}
        >
            {isClicked ? (
                <GpsFixedIcon fontSize="large" />
            ) : (
                <GpsNotFixedIcon fontSize="large" />
            )}
        </div>
    );
};

export default CustomCursor;
