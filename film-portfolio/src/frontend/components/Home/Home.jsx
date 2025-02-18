 import ReactPlayer from "react-player/vimeo";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw",
                 color: "#fff",
                overflowY: "auto",
                cursor: "none",
                background: "rgba(0, 0, 0, 0.8)", // Dark background with opacity
                backdropFilter: "blur(10px)", // Blurred effect


            }}
        >
            {/* Custom Cursor */}
            <div
                style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "transparent", // Ensure it's not the red dot
                    borderRadius: "50%",
                    padding: "20px 20px 20px",
                    pointerEvents: "none",
                    marginTop:"50px",
                }}
                id="custom-cursor"
            ></div>

            {/* Video Container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%", // Full width to avoid alignment issues
                    height: "100%", // Full height to ensure glow covers edges
                    position: "relative",
                    marginTop: "160px",
                    animation: "fadeIn 1.5s ease-in-out", // Fade-in animation
                    background: "rgba(0, 0, 0, 0.8)", // Background matching the overall design
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9", // Maintain video aspect ratio
                        boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.8)", // Subtle and balanced outer glow
                        overflow: "hidden", // Prevent any overflow issues
                        borderRadius: "10px", // Optional for rounded edges
                    }}
                >
                    <ReactPlayer
                        url="https://vimeo.com/1055439402/a2364db79e"
                        playing
                        muted
                        loop
                        width="100%"
                        height="100%"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            animation: "fadeIn 1.5s ease-in-out", // Fade-in animation
                            pointerEvents: "none", // Disable pointer events
                        }}
                        controls={false}
                    />

                </Box>
            </Box>


            {/* Caption and Text Section */}
            <Box
                sx={{
                    width: "80%",
                    textAlign: "center",
                    marginTop: 4,
                }}
            >
             {/*   <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    Caption: A Beautiful Scene
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 10}}>
                    This video showcases an incredible moment captured on film. It’s a perfect example of how visuals can inspire and captivate.
                </Typography>*/}
            </Box>
        </Box>
    );
};

export default Home;
