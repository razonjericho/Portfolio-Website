import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ProfileImage from "../../assets/Images/Profile/Jericho_Profile.jpg";
import "./About.css";

function About() {
    return (
        <Box
            component="section"
            id="about"
            className="about-section"
        >
            <Container
                maxWidth="lg"
                className="about-container"
            >
                <Typography
                    variant="h2"
                    className="about-title"
                >
                    About Me
                </Typography>

                <Grid
                    container
                    className="about-grid"
                >
                    <Grid
                        size={{
                            xs: 12,
                            lg: 7,
                        }}
                        className="about-text"
                    >
                        <Typography
                            variant="body1"
                            className="about-description"
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
                            className="about-description"
                        >
                            Before pursuing software development professionally, I earned a
                            Bachelor's degree in Psychology. That background strengthened
                            my analytical thinking, communication, and understanding of user
                            behavior skills that help me design applications with both users
                            and developers in mind.
                        </Typography>

                        <Typography
                            variant="body1"
                            className="about-description"
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
                        className="about-image-column"
                    >
                        <Box className="about-image-wrapper">
                            <Box
                                component="img"
                                src={ProfileImage}
                                alt="Jericho Pete Razon"
                                className="about-image"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;