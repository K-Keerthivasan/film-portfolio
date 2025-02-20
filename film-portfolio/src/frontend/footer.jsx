import { Box, Typography, IconButton, Link } from '@mui/material';
import { Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(46,28,28,0.1)',

                color: '#ffffff',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 40px',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backdropFilter: 'blur(5px)',
                transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                '&:hover': {
                    backgroundColor: 'rgba(46,28,28,0.8)',
                },
            }}
        >
            {/* Left Section */}
            <Typography
                variant="body2"
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    marginBottom: { xs: '10px', md: '0' },
                }}
            >
                Designed and Developed by KK
            </Typography>

            {/* Center Section */}
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    marginBottom: { xs: '10px', md: '0' },
                }}
            >
                Copyright © 2025 KK
            </Typography>

            {/* Right Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                <IconButton
                    component={Link}
                    href="https://www.youtube.com/@JKR-Film"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#ff8080' } }}
                >
                    <YouTube />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://x.com/_Keerthivasan_K"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#ff8080' } }}
                >
                    <Twitter />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://www.linkedin.com/in/keerthivasan-k/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#ff8080' } }}
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://www.instagram.com/kkvasan_/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: '#ffffff', '&:hover': { color: '#ff8080' } }}
                >
                    <Instagram />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
