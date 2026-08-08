import React from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

function Hero() {
    return (
        <Box
            component="section"
            id="home"
            sx={{
                scrollMarginTop: "90px",
                py: {
                    xs: 8,
                    sm: 10,
                    md: 12,
                    lg: 20,
                },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        maxWidth: {
                            xs: "100%",
                            md: 720,
                            lg: 760,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                sm: "1.5rem",
                                md: "2.2rem",
                                lg: "1.5rem",
                            },
                            color:"primary.main",
                            fontWeight: 600,
                        }}
                        gutterBottom
                    >
                        Hi, I'm
                    </Typography>

                    <Typography
                        variant="h1"
                        sx={{
                            mb: 2,

                            fontSize: {
                                xs: "2.8rem",
                                sm: "3.5rem",
                                md: "4.5rem",
                                lg: "3rem",
                            },

                            fontWeight: 700,

                            lineHeight: 1.1,
                        }}
                    >
                        Jericho Pete Razon
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            color: "primary.main",
                            mb: 3,

                            fontWeight: 600,

                            fontSize: {
                                xs: "1.2rem",
                                sm: "1.8rem",
                                md: "2.2rem",
                                lg: "1.8rem",
                            },
                        }}
                    >
                        Full-Stack Developer
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color:"text.secondary",
                            maxWidth: 600,

                            mb: 4,

                            fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                                md: "1.6rem",
                                lg: "1.1rem",
                            },

                            lineHeight: 1.8,
                        }}
                    >
                        I build responsive full-stack web applications with a strong focus 
                        on clean user experiences, scalable backend architecture, and maintainable 
                        code. I enjoy turning ideas into practical solutions that are intuitive, 
                        reliable, and built with attention to detail.
                    </Typography>

                    <Typography
                        sx={{
                            mb: 4,
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1.1rem",
                                md: "1.4rem",
                                lg: "1.2rem",
                            },

                            fontWeight: 600,

                            color: "primary.main",
                        }}
                    >
                        Always learning. Always improving. Always building.
                    </Typography>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={2}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                px: {
                                    xs: 3,
                                    sm: 4,
                                    md: 4.5,
                                    lg: 5,
                                },

                                py: {
                                    xs: 1.3,
                                    sm: 1.5,
                                    md: 1.6,
                                    lg: 1.7,
                                },

                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                    md: "1.05rem",
                                    lg: "1.05rem",
                                },

                                minWidth: {
                                    xs: 140,
                                    sm: 170,
                                    md: 190,
                                    lg: 200,
                                },
                            }}
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                px: {
                                    xs: 3,
                                    sm: 4,
                                    md: 4.5,
                                    lg: 5,
                                },

                                py: {
                                    xs: 1.3,
                                    sm: 1.5,
                                    md: 1.6,
                                    lg: 1.7,
                                },

                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                    md: "1.05rem",
                                    lg: "1.05rem",
                                },

                                minWidth: {
                                    xs: 140,
                                    sm: 170,
                                    md: 190,
                                    lg: 200,
                                },
                            }}
                        >
                            Contact Me
                        </Button>
                    </Stack>
                </Box>  
            </Container>
        </Box>
    );
}

export default Hero;