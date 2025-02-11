import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import {
    SiUnrealengine,
    SiBlender,
    SiNuke,
    SiDavinciresolve,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiAdobeaudition,
} from 'react-icons/si';



const tools = [

    {icon: <SiUnrealengine/>, name: "Unreal", color: "#adadb6"}, // Black
    {icon: <SiBlender/>, name: "Blender", color: "#ff9350"}, // Black
    {icon: <SiAdobeaudition/>, name: "Adobe DC", color: "#842eff"}, // Black
    {icon: <SiAdobephotoshop/>, name: "Photoshop", color: "#0071ff"}, // Black
    {icon: <SiAdobeillustrator/>, name: "Illustrator", color: "#ff7100"}, // Black
    {icon: <SiAdobeaftereffects/>, name: "After Effects", color: "#842eff"}, // Black
    {icon: <SiNuke/>, name: "Nuke", color: "#ffa12d"}, // Black
    {icon: <SiDavinciresolve/>, name: "Resolve", color: "#a5ff99"}, // Black



];

const SkillsetSection = () => {
    return (
        <Box
            sx={{
                width: "100vw",
                maxWidth: "1200px",
                padding: "40px 20px",
                position: "relative",
                background: "rgba(0, 0, 0, 0.7)", // Darker background with opacity
                backdropFilter: "blur(10px)", // Blurred effect
                borderRadius: "16px",
                marginBottom: { xs: "180px", md: "100px" }, // Extra space below for mobile
                mb: 6,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",

            }}
        >

            {/* Tools Section */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#ff8080",
                    fontWeight: "bold",
                    marginTop:2,
                    marginBottom: 4,
                }}
            >
                Tools <span style={{ color: "#ffb980" }}>I use</span>
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {tools.map((tool, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "120px",
                                border: "1px solid #7ac7fb",
                                borderRadius: "12px",
                                backgroundColor: "#161b22",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "3rem",
                                    color: tool.color, // Use the dynamic color for the icon
                                    marginBottom: 1,
                                }}
                            >
                                {tool.icon}
                            </Box>
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontSize: "1.1rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {tool.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SkillsetSection;
