import {db} from '../../../backend/firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import {Grid, Card, CardContent, Typography, Box} from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import {useEffect, useState} from "react";

const FilmSectionTypes = [
    {title: "My Films", collection: "films"},
    {title: "Previsualization Projects", collection: "previzProjects"},
    {title: "Simple VFX and Editing Projects", collection: "vfxEditingProjects"},
    {title: "Older Projects", collection: "olderProjects"},
];

const FilmsSection = () => {
    const [projects, setProjects] = useState({});
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = {};
                for (const section of FilmSectionTypes) {
                    const snapshot = await getDocs(collection(db, section.collection));
                    allProjects[section.collection] = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                }
                console.log('Fetched Projects:', allProjects);
                setProjects(allProjects);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError('Failed to fetch projects. ' + err.message);
            }
        };

        fetchProjects();
    }, []);

    if (error) {
        return <Typography color="error" sx={{
            mt: 2,
            textAlign: 'center'
        }}>
            Error loading projects: {error}
        </Typography>;
    }

    return (
        <Box sx={{
            flexGrow: 1,
            py: 5,
            padding: "80px",
            overflowY: "auto",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            color: "#ff8080",
            height: "100vh",
            width: "100vw"
        }}>
            {FilmSectionTypes.map(section => (
                <Box key={section.title}
                     sx={{marginTop: "20px"}}
                >
                    <Typography variant="h4" gutterBottom component="div" sx={{
                        textAlign: 'center',
                        fontWeight: "bold",
                        mb: 3,
                        padding: "10px 10px",
                        color: "#ffffff"
                    }}>
                        {section.title}
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {projects[section.collection]?.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
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
                                        boxShadow: "0 4px 20px rgba(122, 199, 251, 0.5)"
                                    }
                                }}>
                                    <Box onMouseEnter={() => setHoveredProjectId(project.id)}
                                         onMouseLeave={() => setHoveredProjectId(null)}
                                         style={{position: "relative", pointerEvents: "auto"}}>
                                        <ReactPlayer
                                            url={project.videoUrl}
                                            playing={hoveredProjectId === project.id}
                                            muted
                                            width="100%"
                                            height="200px"
                                            controls
                                            style={{
                                                borderRadius: "15px 15px 0 0",
                                                overflow: "hidden",
                                                pointerEvents: hoveredProjectId === project.id ? "auto" : "none"  // Allow pointer events only when the video is being hovered
                                            }}
                                            onMouseEnter={() => setHoveredProjectId(project.id)}
                                            onMouseLeave={() => setHoveredProjectId(null)}
                                        />

                                    </Box>
                                    <CardContent sx={{textAlign: "center", padding: "16px"}}>
                                        <Typography variant="body2"
                                                    color="#ffffff" sx={{
                                            fontSize: "16px",
                                            lineHeight: "1.5"
                                        }}>{project.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default FilmsSection;
