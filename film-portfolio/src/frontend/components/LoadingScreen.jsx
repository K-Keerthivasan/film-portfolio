import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const LoadingScreen = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); // Start fade-out
            setTimeout(() => {
                if (onFinish) onFinish(); // Call onFinish after fade-out is complete
            }, 500); // Match the fade-out duration
        }, 2000); // Loading duration (adjust as needed)

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#2e1c1c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1500,
                color: "#ffffff",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0, // Fade-out effect
                transition: "opacity 0.5s ease-in-out", // Smooth fade-out
            }}
        >
            {/* Custom Yin-Yang Spinner */}
            <Box
                sx={{
                    position: "relative",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "conic-gradient(#80ceff 0% 50%, #ff6666 50% 100%)",
                    animation: "rotate 1.5s linear infinite",
                }}
            >
                {/* Inner Circle */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#1c1c2e",
                        borderRadius: "50%",
                    }}
                ></Box>

                {/* Top Dot */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "10px",
                        height: "10px",
                        top: "20%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#ff8080",
                        borderRadius: "50%",
                    }}
                ></Box>

                {/* Bottom Dot */}
                <Box
                    sx={{
                        position: "absolute",
                        width: "10px",
                        height: "10px",
                        bottom: "20%",
                        left: "50%",
                        transform: "translate(-50%, 50%)",
                        backgroundColor: "#ff0000",
                        borderRadius: "50%",
                    }}
                ></Box>
            </Box>

            {/* Loading Text */}
            <Typography
                variant="h6"
                sx={{
                    fontFamily: "Poppins, sans-serif",
                    marginTop: 2,
                    color: "#ffffff",
                }}
            >
                Loading, please wait...
            </Typography>

            {/* Add Custom Animation Keyframes */}
            <style>
                {`
                    @keyframes rotate {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default LoadingScreen;
