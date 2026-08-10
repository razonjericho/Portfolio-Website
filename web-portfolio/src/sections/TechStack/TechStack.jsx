import React from 'react';
import techStackData from "./TechStackData.js";
import TechStackCard from './TechStackCard';
import { Container, Typography, Box, Grid } from "@mui/material";

function TechStack(props) {
    return (
        <Box
            component="section"
            id="skills"
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

                <Typography
                    variant="h2"
                    sx={{
                        fontSize: {
                            xs: "2.8rem",
                            sm: "3.5rem",
                            md: "4.5rem",
                            lg: "2.5rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1.1,

                        pt: {
                            xs: 8,
                            md: 12,
                            lg: 2,
                        },

                        mb: {
                            xs: 5,
                            lg: 6,
                        },
                    }}
                >
                    Tech Stack
                </Typography>

                <Grid
                    container
                    spacing={3}
                    sx={{
                       alignItems:"stretch" 
                    }}
                >
                        {techStackData.map((category) => (
                            <Grid
                                key={category.title}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                }}
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
    )
}

export default TechStack;