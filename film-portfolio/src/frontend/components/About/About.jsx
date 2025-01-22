import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "../../../assets/Icon_3.svg";
import ExperienceSection from "./ExperienceSection.jsx";
import SoftwareSkills from "./SoftwareSkills.jsx";
import SkillsSection from "./SkillsSection.jsx";

const About = () => {
    return (
        <Box
            sx={{

                width: "100vw", // Full width of the viewport
                height: "100vh", // Full height of the viewport
                overflowY: "auto", // Enable scrolling for overflow content

                color: "#ffffff",
                background: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
                backdropFilter: "blur(10px)", // Blurred effect
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

            }}
        >
            {/* About Me Section */}
            <Box
                sx={{
                    width: "100%",
                    marginTop: "50px",
                    maxWidth: "1200px", // Limit the content width
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 4,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: "center", md: "left" },
                        pr: { md: 4 },
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, color: "#ffb980" }}>
                       About <span style={{ color: "#ff8080" }}>Me</span>
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 2 }}>
                        Hi Everyone, I am <span style={{ color: "#ffb980", fontWeight:"bold" }}>Keerthivasan</span>, and I have a deep passion for filmmaking, editing, and visual effects.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 2 }}>
                        I love immersing myself in the creative process of crafting films—be it editing, adding stunning VFX, or compositing to bring scenes to life.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 2 }}>
                        Watching movies inspires me, and I enjoy exploring different styles and techniques to enhance my own creations.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.2rem", mb: 4 }}>
                        Apart from filmmaking, I also enjoy:
                    </Typography>
                    <ul>
                        <li>🎥 Experimenting with new editing techniques</li>
                        <li>🎬 Analyzing iconic movie scenes</li>
                        <li>🍿 Binge-watching films from around the world</li>
                    </ul>

                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    <img
                        src={image1}
                        style={{ maxWidth: "100%", height: "auto" }}
                        alt="About Me"
                    />
                </Box>
            </Box>

            <ExperienceSection/>
            <SkillsSection/>
            <SoftwareSkills/>
         </Box>
    );
};

export default About;
