import {Box, Typography} from "@mui/material";
import React from "react";

const ExperienceSection= ()=> {
    return(
        <div>
            {/* Experience Section */}
            <Box
                sx={{
                    width: "100vw",
                    maxWidth: "1200px",
                    padding: "40px 20px",
                    position: "relative",
                    background: "rgba(0, 0, 0, 0.7)", // Darker background with opacity
                    backdropFilter: "blur(10px)", // Blurred effect
                    borderRadius: "16px",
                     mb: 6,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
                }}
            >

                {/* Blurred Background */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
                        backdropFilter: "blur(10px)", // Blurred effect
                        borderRadius: "12px",
                        zIndex: -1, // Push the background behind the content

                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#ffb980",
                        mb: 4,
                        textTransform: "uppercase",
                    }}
                >
                    Work Experience
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >


                    {/* Single Experience */}
                    <Box
                        sx={{
                            padding: "20px",
                            backgroundColor: "rgba(64,78,100,0.2)", // Semi-transparent background
                            backdropFilter: "blur(10px)", // Add blur effect
                            borderRadius: "12px", // Add rounded corners
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#ff8080",
                                mb: 1,
                            }}
                        >
                            Freelance VFX Artist & Video Editor
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "1rem",
                                color: "#ffb980",
                                mb: 1,
                            }}
                        >
                            Self-Employed | Jan 2020 - Dec 2022
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.8,
                                fontSize: "1rem",
                            }}
                        >
                            Worked on a variety of freelance projects, delivering high-quality visual effects, video editing, and compositing services for clients in different industries.
                        </Typography>

                        {/* Bullet Points */}
                        <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#ffffff", // Set bullet color here
                                    },
                                }}
                            >
                                Designed and composited cinematic VFX shots using After Effects and Nuke
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#ffffff", // Set bullet color here
                                    },
                                }}
                            >
                                Edited promotional videos, short films, and YouTube content with Adobe Premiere Pro
                            </Typography>
                            <Typography
                                component="li"
                                sx={{
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    "&::marker": {
                                        color: "#ffffff", // Set bullet color here
                                    },
                                }}
                            >
                                Collaborated with clients to transform creative visions into compelling visuals
                            </Typography>
                        </Box>
                    </Box>





                </Box>
            </Box>
        </div>
    )

}

export default ExperienceSection;