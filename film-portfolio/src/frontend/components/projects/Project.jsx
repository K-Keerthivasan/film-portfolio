import React, { useState, useEffect } from 'react';
import { db } from '../../../backend/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { Grid, Card, CardContent,CardMedia ,Typography, Box } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

const FilmsSection = () => {
    const [films, setFilms] = useState([]); // State to store fetched films
    const [hoveredFilmId, setHoveredFilmId] = useState(null); // Track hovered card
    const [error, setError] = useState(null); // Track errors

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'films')); // Fetch 'films' collection
                const filmsList = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log('Fetched Films:', filmsList); // Debugging: Log fetched data
                setFilms(filmsList); // Update state with fetched data
            } catch (err) {
                console.error("Error fetching films:", err.message); // Debugging: Log errors
                setError('Failed to fetch films. ' + err.message);
            }
        };

        fetchFilms(); // Call the async fetch function
    }, []); // Empty dependency array ensures this runs only once

    if (error) {
        return (
            <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
                Error loading films: {error}
            </Typography>
        );
    }

    return (
        <Box sx={{
            flexGrow: 1,
            py: 5,
            padding: "80px",
            overflowY: "auto", // Ensuring this element can scroll if its content overflows the viewport height
            width:"100vw",
            height:"100vw",
            color: "#ff8080",
            background: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
            backdropFilter: "blur(10px)", // Blurred effect

        }}>
            <Typography variant="h4" gutterBottom component="div" sx={{
                textAlign: 'center',
                fontWeight: "bold",
                mb: 3,
                padding: "10px 10px",
                color: "#ffffff"
            }}>
                My Films
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {films.map((film) => (
                    <Grid item xs={12} sm={6} md={4} key={film.id}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            background: "rgba(0, 0, 0, 0.7)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "15px",
                            boxShadow: "0 10px 10px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)",
                            },
                        }}>


                            <div
                                onMouseEnter={() => setHoveredFilmId(film.id)} // Detect hover
                                onMouseLeave={() => setHoveredFilmId(null)}   // Detect hover exit
                                style={{
                                    position: "relative",
                                    pointerEvents: "auto", // Enable pointer events for the wrapper
                                }}
                            >
                                <ReactPlayer
                                    url={film.videoUrl}
                                    playing={hoveredFilmId === film.id}
                                    muted
                                    width="100%"
                                    height="200px"
                                    controls
                                    style={{
                                        borderRadius: "15px 15px 0 0",
                                        overflow: "hidden",
                                        pointerEvents: "none", // Prevent ReactPlayer from interfering
                                    }}
                                />
                            </div>

                            <CardContent sx={{textAlign: "center", padding: "16px"}}>
                                <Typography
                                    variant="body2"
                                    color="#c1e4ff"
                                    sx={{fontSize: "16px", lineHeight: "1.5"}}
                                >
                                    {film.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default FilmsSection;
