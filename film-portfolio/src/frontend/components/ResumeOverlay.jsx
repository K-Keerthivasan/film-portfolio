import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon
import resumePdf from "../../assets/resume.pdf"; // Adjust the path

const ResumeOverlay = ({ isOpen, toggleOverlay }) => {
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        setIsDownloaded(true);
        // Simulate file download
        const link = document.createElement("a");
        link.href = resumePdf;
        link.download = "My_Resume.pdf";
        link.click();
    };

    if (!isOpen) return null;

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker overlay for better contrast
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1200,
                animation: "fadeIn 0.5s", // Smooth fade-in animation
            }}
        >
            <Box
                sx={{
                    width: "90%",
                    maxWidth: "700px",
                    backgroundColor: "#2b2b40", // Subtle dark color for the modal
                    borderRadius: "12px",
                    padding: "30px",
                    textAlign: "center",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.5)", // Enhanced shadow for depth
                    animation: "pop 0.3s ease", // Pop animation for the modal
                    position: "relative", // For positioning the close button
                }}
            >
                {/* Close Button */}
                <IconButton
                    onClick={toggleOverlay}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        color: "#ff6666",
                        fontSize: "1.5rem",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "rotate(90deg)", // Rotate animation on hover
                            color: "#ff3333",
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        color: "#7ac7fb",
                        mb: 3,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px", // Added letter spacing
                        fontSize: "1.8rem",
                    }}
                >
                    Check Out My Resume!
                </Typography>

                {/* Resume Preview */}
                <Box
                    sx={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        overflow: "hidden",
                        height: "500px", // Increased height for better readability
                        marginBottom: "20px",
                        backgroundColor: "#1c1c2e", // Background for iframe
                    }}
                >
                    <iframe
                        src={resumePdf}
                        title="Resume Preview"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none",
                            borderRadius: "8px", // Smooth corners for iframe
                        }}
                    ></iframe>
                </Box>

                {/* Download Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownload}
                    sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: "#007BFF", // Vibrant blue color
                        "&:hover": {
                            backgroundColor: "#0056b3",
                        },
                        transition: "transform 0.3s ease",
                        "&:active": {
                            transform: "scale(0.9)", // Shrink effect on click
                        },
                    }}
                >
                    Download Resume
                </Button>

                {isDownloaded && (
                    <Typography
                        sx={{
                            color: "#7ac7fb",
                            fontSize: "1rem",
                            marginTop: "10px",
                        }}
                    >
                        Thank you for downloading!
                    </Typography>
                )}
            </Box>

            {/* Animations */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    
                    @keyframes pop {
                        0% {
                            transform: scale(0.8);
                        }
                        80% {
                            transform: scale(1.05);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                `}
            </style>
        </Box>
    );
};

export default ResumeOverlay;
