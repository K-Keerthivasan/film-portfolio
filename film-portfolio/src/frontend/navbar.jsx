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
import { Link } from 'react-router-dom';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContactOverlay from './components/Contact/ContactOverlay.jsx';
import ResumeOverlay from './components/ResumeOverlay.jsx';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null); // Mobile menu state
    const [isContactOpen, setIsContactOpen] = useState(false); // Contact overlay state
    const [isResumeOpen, setIsResumeOpen] = useState(false); // Resume overlay state

    // Mobile menu handlers
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Overlay toggle handlers
    const toggleContactOverlay = () => {
        setIsContactOpen((prev) => !prev);
    };

    const toggleResumeOverlay = () => {
        setIsResumeOpen((prev) => !prev);
    };

    // Menu items (Desktop & Mobile)
    const menuItems = [
        { name: 'Home', icon: <HomeIcon />, link: '/' },
        { name: 'About', icon: <Person2Icon />, link: '/about' },
        { name: 'Gallery', icon: <OndemandVideoIcon />, link: '/gallery' },
        { name: 'Resume', icon: <SummarizeIcon />, action: toggleResumeOverlay },
        /* { name: 'Events', icon: <MovieFilterIcon />, link: '/blogs' },*/
        /* { name: 'Blogs', icon: <TopicIcon />, link: '/blogs' },*/
    ];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(46,28,28,0.1)',
                    backdropFilter: 'blur(5px)',
                    transition: 'background-color 0.3s ease',
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
                        to="/"
                        variant="h5"
                        sx={{
                            fontFamily: 'Dancing Script, cursive',
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            color: '#ff8080',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                textShadow: '0 0 10px #ff8080, 0 0 20px #ff8080',
                            },
                        }}
                    >
                        KK
                    </Typography>

                    {/* Menu and Actions */}
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
                            {menuItems.map((item) => (
                                item.action ? (
                                    <IconButton
                                        key={item.name}
                                        onClick={item.action}
                                        sx={{
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            '&:hover': { color: '#ff8080' },
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
                                ) : (
                                    <Link
                                        to={item.link}
                                        key={item.name}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <IconButton
                                            sx={{
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                '&:hover': { color: '#ff8080' },
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
                                )
                            ))}
                        </Box>

                        {/* Contact Icon */}
                        <IconButton
                            onClick={toggleContactOverlay}
                            sx={{
                                color: '#ffffff',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#ff8080',
                                },
                            }}
                        >
                            <ContactMailIcon />
                        </IconButton>

                        {/* Portfolio Link */}
                        <a
                            href="https://kk-dev-portfolio.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <IconButton
                                sx={{
                                    color: '#b2e1ff',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#00c4ff',
                                    },
                                }}
                            >
                                <CodeOffIcon />
                            </IconButton>
                        </a>
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            onClick={handleMenuClick}
                            sx={{ color: '#ff8080', transition: 'color 0.3s ease' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.name}
                                    onClick={() => {
                                        handleMenuClose();
                                        if (item.action) item.action();
                                    }}
                                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                >
                                    {item.icon}
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Contact Overlay */}
            <ContactOverlay isOpen={isContactOpen} toggleOverlay={toggleContactOverlay} />

            {/* Resume Overlay */}
            <ResumeOverlay isOpen={isResumeOpen} toggleOverlay={toggleResumeOverlay} />
        </>
    );
};

export default Navbar;
