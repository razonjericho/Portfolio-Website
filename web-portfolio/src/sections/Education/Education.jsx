import React from "react";
import { Container, Divider, Box, Typography } from "@mui/material";
import "./Education.css";

function Education() {
    return (
        <Box
            component="section"
            id="education"
            className="education-section"
        >
            <Container
                maxWidth="lg"
                className="education-container"
            >
                <Typography
                    variant="h2"
                    className="education-title"
                >
                    Education
                </Typography>

                <Divider className="education-divider" />

                <Box className="education-content">

                    <Box className="education-accent" />

                    <Box className="education-details">
                        <Typography
                            variant="h5"
                            className="education-degree"
                        >
                            Bachelor of Science in Psychology
                        </Typography>

                        <Typography
                            variant="body1"
                            className="education-school"
                        >
                            University of San Carlos - Talamban Campus
                        </Typography>

                        <Typography
                            variant="body2"
                            className="education-location"
                        >
                            Cebu City, Philippines • 2020 – 2024
                        </Typography>
                    </Box>
                </Box>

                <Divider className="education-divider" />
            </Container>
        </Box>
    );
}

export default Education;