import React from "react";
import { Container, Box, Typography, Grid, Stack, List, ListItem, ListItemIcon, ListItemText, Divider, Chip, Link } from "@mui/material";
import ProgressPage from "../../assets/Images/ProjectScreenshot/ProgressPage.png";
import CheckIcon from "@mui/icons-material/Check";
import featuresData from "./featuresData";
import techStack from "./techStackData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Project() {
    return (
        <Box
            component="section"
            id="projects"
            sx={{
                scrollMarginTop: "90px",
                py: {
                    xs: 8,
                    sm: 10,
                    md: 12,
                    lg: 8,
                },
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h2">
                    Projects
                </Typography>

                <Grid 
                    container 
                    spacing={6}
                    sx={{
                        py: {
                            xs: 4,
                            sm: 4,
                            md: 4,
                            lg: 4,
                        },
                    }}
                >
                    <Grid 
                        size={{ 
                            xs: 12, 
                            lg: 7,
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                borderRadius: 1,
                                overflow: "hidden",
                                boxShadow: 4,
                            }}
                        >
                            <Box
                                component="img"
                                src={ProgressPage}
                                alt="Habit Tracker Progress Dashboard"
                                sx={{
                                    width: "100%",
                                    display: "block",
                                }}
                            />
                        </Box>

                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{ mt: 3, ml: 1, }}
                        >
                            <Link
                                href="https://github.com/razonjericho/Habit-Tracker"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="primary"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.75,
                                    fontWeight: 500,

                                    transition: "0.2s",

                                    "&:hover": {
                                        color: "primary.dark",
                                    },
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1.1rem",
                                        md: "1.4rem",
                                        lg: "1rem",
                                    },
                                }}
                            >
                                <GitHubIcon
                                    sx={{
                                        fontSize: {
                                            md: "2rem",
                                            lg: "1.25rem",
                                        },
                                        mb: 0.5,
                                    }}
                                />
                                GitHub
                            </Link>

                            <Link
                                href="https://habit-tracker-alpha-cyan.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="primary"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.75,
                                    fontWeight: 500,

                                    transition: "0.2s",

                                    "&:hover": {
                                        color: "primary.dark",
                                    },
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1.1rem",
                                        md: "1.4rem",
                                        lg: "1rem",
                                    },
                                }}
                            >
                                <LaunchIcon 
                                    sx={{
                                        fontSize: {
                                            md: "2rem",
                                            lg: "1.25rem",
                                        },
                                    }}
                                />
                                Live Demo
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid 
                        size={{ 
                            xs: 12, 
                            lg: 5,
                        }}
                    >
                        
                            <Typography 
                                variant="h4"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: {
                                        xs: "1.5rem",
                                        md: "2rem",
                                        lg: "1.5rem",
                                    },
                                    pb: {
                                        xs: 2,
                                        sm: 2,
                                        md: 2,
                                        lg: 2,
                                    },
                                }}
                            >
                                Habit Tracker App
                            </Typography>

                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1.1rem",
                                        md: "1.6rem",
                                        lg: "1rem",
                                    },
                                    pb: {
                                        xs: 2,
                                        sm: 2,
                                        md: 2,
                                        lg: 2,
                                    },
                                }}
                            >
                                A full-stack habit tracking application that helps users build
                                daily routines, monitor progress, and visualize consistency
                                through an interactive calendar heatmap.
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1rem",
                                        md: "1.5rem",
                                        lg: "1rem",
                                    },

                                    color: "primary.dark",
                                    
                                    fontWeight: 700,
                                }}
                            >
                                KEY FEATURES
                            </Typography>

                            <List
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {featuresData.map((feature) => (
                                    <ListItem
                                        key={feature}
                                        disablePadding
                                        sx={{
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <ListItemIcon 
                                            sx={{ 
                                                minWidth: 28,
                                                py: {
                                                    xs: 0.75,
                                                    sm: 1,
                                                    md: 1.75,
                                                    lg: 0.75,
                                                },

                                                pr: {
                                                    xs: 0,
                                                    sm: 0,
                                                    md: 1,
                                                    lg: 0,
                                                }
                                            }}
                                        >
                                            <CheckIcon
                                                color="primary"
                                                sx={{
                                                    fontSize: {
                                                        xs: "1rem",
                                                        sm: "1.25rem",
                                                        md: "1.75rem",
                                                        lg: "1.25rem",
                                                    }
                                                }}
                                            />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={feature}
                                            slotProps={{
                                                primary: {
                                                    sx: {
                                                        fontSize: {
                                                            xs: "0.9rem",
                                                            sm: "1.1rem",
                                                            md: "1.6rem",
                                                            lg: "1rem",
                                                        },
                                                    },
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        <Divider
                            sx={{ 
                                mt: 2,
                                mb: 2 
                            }} 
                        />

                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1rem",
                                    md: "1.5rem",
                                    lg: "1rem",
                                },

                                color: "primary.dark",
                                
                                fontWeight: 700,

                                pb: {
                                    xs: 1.5,
                                    lg: 1.5,
                                }
                            }}
                        >
                            TECH STACK
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            sx={{
                               flexWrap:"wrap",
                            }}
                        >
                            {techStack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                        sx={{
                                        px: 1.5,
                                        py: 0.75,

                                        color: "text.secondary",

                                        borderRadius: 1,

                                        bgcolor: "#F6F8FC",

                                        border: "1px solid",
                                        borderColor: "divider",

                                        transition: "all 0.25s ease",

                                        "&:hover": {
                                            borderColor: "primary.main",
                                        },

                                        "& .MuiChip-label": {
                                            fontSize: {
                                                md: "1.15rem",
                                                lg: "0.75rem",
                                            },

                                            px: {
                                                md: 3,
                                                lg: 1.5,
                                            },
                                        }
                                    }}
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container> 
        </Box>
           
    )
}

export default Project;