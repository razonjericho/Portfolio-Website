import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ProfileImage from "../../assets/Images/Profile/Jericho_Profile.jpg";

function About() {
    return (
        <Box
            component="section"
            id="about"
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
                    About Me
                </Typography>

                <Grid
                    container
                    spacing={{
                        xs: 6,
                        md: 8,
                    }}
                    sx={{
                        alignItems:"flex-start",
                    }}
                >
                    <Grid
                        size={{
                            xs: 12,
                            lg: 7,
                        }}
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                sm: 520,
                                md: 720,
                                lg: "100%",
                            },
                            mx: "auto",

                            order: {
                                xs: 2,
                                lg: 1,
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                mb: 4,

                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.1rem",
                                    md: "1.6rem",
                                    lg: "1rem",
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            I'm an aspiring full-stack developer based in Cebu City, 
                            Philippines, who enjoys building responsive, user-focused 
                            web applications with clean interfaces and reliable backend 
                            systems. I'm passionate about writing maintainable code and 
                            creating software that is intuitive, scalable, and solves 
                            real problems.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                mb: 4,

                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.1rem",
                                    md: "1.6rem",
                                    lg: "1rem",
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            Before pursuing software development professionally, I earned a 
                            Bachelor's degree in Psychology. That background strengthened 
                            my analytical thinking, communication, and understanding of user 
                            behavior skills that help me design applications with both users 
                            and developers in mind.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",

                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.1rem",
                                    md: "1.6rem",
                                    lg: "1rem",
                                },

                                lineHeight: 1.8,
                            }}
                        >
                            I'm continuously improving my skills by building projects that reflect 
                            best practices in performance, usability, and clean architecture while 
                            expanding my knowledge of React, Node.js, Express, PostgreSQL, REST APIs, 
                            and modern web development.
                        </Typography>
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            lg: 5,
                        }}
                        sx={{
                            order: {
                                xs: 1,
                                lg: 2,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",

                                mt: {
                                    lg: -6,
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={ProfileImage}
                                alt="Jericho Pete Razon"
                                sx={{
                                    width: {
                                        xs: 250,
                                        sm: 320,
                                        md: 360,
                                        lg: 360,
                                    },

                                    aspectRatio: "1",
                                    objectFit: "cover",
                                    borderRadius: "50%",

                                    boxShadow:
                                        "0 10px 30px rgba(0,0,0,0.15)",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;