import { Box, Typography } from "@mui/material";
import React from "react";

// Data for the skills, organized by categories
const skillCategories = [
    {
        category: "Visual Effects & 3D Modeling",
        skills: [
            "Unreal Level Design",
            "Blender Modeling and Rendering",
            "Advanced Compositing with Nuke",
            "Cinematic Lighting Techniques"
        ],
    },
    {
        category: "Software & Tools",
        skills: [
            "Adobe After Effects for motion graphics",
            "Adobe Premiere Pro for video editing",
            "DaVinci Resolve for color grading",
            "Substance Painter for texture creation"
        ],
    },
    {
        category: "Programming & Scripting",
        skills: [
            "Python for automation scripts",
            "Shader programming with GLSL",
            "Scripting in Unreal Engine with Blueprints",
            "JavaScript and React for web development"
        ],
    },
    // Additional categories and skills can be added here
];

const SkillsSection = () => {
    return (
        <div>
            <Box
                sx={{
                    width: "100vw",
                    maxWidth: "1200px",
                    padding: "40px 20px",
                    position: "relative",
                    background: "rgba(0, 0, 0, 0.7)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    mb: 6,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
                }}
            >
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
                    Skills
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    {skillCategories.map((category, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: "20px",
                                backgroundColor: "rgba(64,78,100,0.2)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold", color: "#ff8080", mb: 1 }}
                            >
                                {category.category}
                            </Typography>

                            <Box component="ul" sx={{ paddingLeft: 2, marginTop: 1 }}>
                                {category.skills.map((skill, idx) => (
                                    <Typography
                                        component="li"
                                        key={idx}
                                        sx={{
                                            fontSize: "1rem",
                                            lineHeight: 1.5,
                                            "&::marker": {
                                                color: "#ffffff",
                                            },
                                        }}
                                    >
                                        {skill}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    );
};

export default SkillsSection;
