import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Link } from 'react-router-dom'; // Corrected import for Link
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContactOverlay from './components/Contact/ContactOverlay.jsx'; // Import the ContactOverlay component
import ResumeOverlay from './components/ResumeOverlay.jsx'; // Import ResumeOverlay



const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null); // For the mobile menu
    const [isContactOpen, setIsContactOpen] = useState(false); // For contact overlay visibility
    const [isResumeOpen, setIsResumeOpen] = useState(false); // Resume overlay

    // Mobile menu toggle handlers
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Contact overlay toggle handlers
    const toggleContactOverlay = () => {
        setIsContactOpen((prev) => !prev);
    };


    const toggleResumeOverlay = () => {
        console.log("Toggling Resume Overlay");
        setIsResumeOpen(prev => !prev); // Toggle the state based on the previous state
    };


    const menuItems = [
        { name: 'Home', icon: <HomeIcon />, link: '/' },
        { name: 'About', icon: <Person2Icon />, link: '/about' },
        { name: 'Gallery', icon: <OndemandVideoIcon />, link: '/gallery' },
       /* { name: 'Events', icon: <MovieFilterIcon />, link: '/blogs' },*/
        { name: 'Resume', icon: <SummarizeIcon />, action: toggleResumeOverlay },
       /* { name: 'Blogs', icon: <TopicIcon />, link: '/blogs' },*/
    ];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(46,28,28,0.1)',
                    backdropFilter: 'blur(5px)',
                    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                    '&:hover': {
                        backgroundColor: 'rgba(46,28,28,0.8)',
                    },
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 20px',
                    }}
                >
                    {/* Logo */}
                    <Typography
                        component={Link}
                        href="/"
                        variant="h5"
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            color: '#ff8080',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                textShadow: '0 0 10px #ff8080, 0 0 20px #ff8080', // Semi-transparent white
                            },
                        }}
                    >
                        KK
                    </Typography>

                    {/* Menu and Action Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                        }}
                    >
                        {/* Desktop Menu */}
                        <Box sx={{display: {xs: 'none', md: 'flex'}, gap: '20px'}}>
                            {menuItems.map((item) => (
                                item.link ? (
                                    <Link to={item.link} key={item.name} style={{textDecoration: 'none', color: 'inherit'}}>
                                        <IconButton
                                            sx={{
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                '&:hover': {color: '#ff8080'},
                                            }}
                                        >
                                            {item.icon}
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Poppins, sans-serif',
                                                    fontWeight: 'bold',
                                                    fontSize: '1rem',
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </IconButton>
                                    </Link>
                                ) : (
                                    <IconButton
                                        onClick={item.action}
                                        key={item.name}
                                        sx={{
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            '&:hover': {color: '#ff8080'},
                                        }}
                                    >
                                        {item.icon}
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </IconButton>
                                )
                            ))}

                        </Box>


                        {/* ContactMailIcon */}
                        <IconButton
                            onClick={() => {
                                console.log('Contact icon clicked');
                                toggleContactOverlay();
                            }}
                            sx={{
                                color: '#ffffff',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#ff8080',
                                },
                            }}
                        >
                            <ContactMailIcon/>
                        </IconButton>

                        {/* CodeOffIcon */}
                        <a href="https://kk-dev-portfolio.web.app/" target="_blank" rel="noopener noreferrer"
                           style={{textDecoration: 'none'}}>
                            <IconButton
                                sx={{
                                    color: '#b2e1ff',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#00c4ff',
                                        svg: {
                                            stroke: '#00c4ff',
                                            strokeWidth: 2,
                                            textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000',
                                        },
                                    },
                                    svg: {
                                        stroke: 'none',
                                    },
                                }}
                            >
                                <CodeOffIcon/>
                            </IconButton>
                        </a>


                    </Box>

                    {/* Mobile Menu */}
                    {/* Mobile Menu */}
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            onClick={handleMenuClick}
                            sx={{color: '#ff8080', transition: 'color 0.3s ease'}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.name} onClick={() => {
                                    handleMenuClose(); // Always close the menu regardless of the action
                                    if (item.action) {
                                        item.action(); // Execute the action if present
                                    }
                                }}>
                                    {item.link ? (
                                        <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {item.icon}
                                            {item.name}
                </span>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </AppBar>

            {/* ContactOverlay Component */}
            <ContactOverlay isOpen={isContactOpen} toggleOverlay={toggleContactOverlay} />


            <ResumeOverlay isOpen={isResumeOpen} toggleOverlay={toggleResumeOverlay} />

        </>
    );
};

export default Navbar;
