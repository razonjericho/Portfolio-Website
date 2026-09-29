import React from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Chip,
    Link,
} from "@mui/material";

import ProgressPage from "../../assets/Images/ProjectScreenshot/ProgressPage.png";
import CheckIcon from "@mui/icons-material/Check";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import featuresData from "./featuresData";
import techStack from "./techStackData";
import "./Project.css";

function Project() {
    return (
        <Box
            component="section"
            id="projects"
            className="project-section"
        >
            <Container
                maxWidth="lg"
                className="project-container"
            >
                <Typography
                    variant="h2"
                    className="project-title"
                >
                    Projects
                </Typography>

                <Grid
                    container
                    className="project-grid"
                >
                    {/* Project Image */}
                    <Grid
                        className="project-image-column"
                    >
                        <Box className="project-image-wrapper">
                            <Box
                                component="img"
                                src={ProgressPage}
                                alt="Habit Tracker Progress Dashboard"
                                className="project-image"
                            />
                        </Box>

                        <Stack className="project-links">
                            <Link
                                href="https://github.com/razonjericho/Habit-Tracker"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="primary"
                                className="project-link"
                            >
                                <GitHubIcon className="project-link-icon" />
                                GitHub
                            </Link>

                            <Link
                                href="https://habit-tracker-alpha-cyan.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="primary"
                                className="project-link"
                            >
                                <LaunchIcon className="project-link-icon" />
                                Live Demo
                            </Link>
                        </Stack>
                    </Grid>

                    {/* Project Details */}
                    <Grid
                        className="project-details-column"
                    >
                        <Typography
                            variant="h4"
                            className="project-name"
                        >
                            Habit Tracker App
                        </Typography>

                        <Typography
                            className="project-description"
                        >
                            A full-stack habit tracking application that helps users build
                            daily routines, monitor progress, and visualize consistency
                            through an interactive calendar heatmap.
                        </Typography>

                        <Typography
                            variant="h4"
                            className="project-subtitle"
                        >
                            KEY FEATURES
                        </Typography>

                        <List className="project-feature-list">
                            {featuresData.map((feature) => (
                                <ListItem
                                    key={feature}
                                    disablePadding
                                    className="project-feature-item"
                                >
                                    <ListItemIcon className="project-feature-icon">
                                        <CheckIcon />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={feature}
                                        slotProps={{
                                            primary: {
                                                className: "project-feature-text",
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Divider className="project-divider" />

                        <Typography
                            variant="h4"
                            className="project-subtitle project-tech-title"
                        >
                            TECH STACK
                        </Typography>

                        <Stack className="project-tech-stack">
                            {techStack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    className="project-tech-chip"
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Project;