import React from "react";
import techStackData from "./TechStackData.js";
import TechStackCard from "./TechStackCard";
import { Container, Typography, Box, Grid } from "@mui/material";
import "./TechStack.css";

function TechStack() {
    return (
        <Box
            component="section"
            id="skills"
            className="tech-stack-section"
        >
            <Container
                maxWidth="lg"
                className="tech-stack-container"
            >
                <Typography
                    variant="h2"
                    className="tech-stack-title"
                >
                    Tech Stack
                </Typography>

                <Grid
                    container
                    className="tech-stack-grid"
                >
                    {techStackData.map((category) => (
                        <Grid
                            key={category.title}
                            className="tech-stack-grid-item"
                        >
                            <TechStackCard
                                title={category.title}
                                skills={category.skills}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default TechStack;