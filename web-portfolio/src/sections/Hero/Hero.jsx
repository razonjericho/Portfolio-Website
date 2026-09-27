import React from "react";
import { Container, Box, Typography, Button, Stack } from "@mui/material";
import "./Hero.css";

function Hero() {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Box
            component="section"
            id="home"
            className="hero-section"
        >
            <Container
                maxWidth="lg"
                className="hero-container"
            >
                <Box className="hero-content">
                    <Typography
                        className="hero-greeting"
                        gutterBottom
                    >
                        Hi, I'm
                    </Typography>

                    <Typography
                        variant="h1"
                        className="hero-title"
                    >
                        Jericho Pete Razon
                    </Typography>

                    <Typography
                        variant="h4"
                        className="hero-subtitle"
                    >
                        Full-Stack Developer
                    </Typography>

                    <Typography
                        variant="body1"
                        className="hero-description"
                    >
                        I build responsive full-stack web applications with a strong focus
                        on clean user experiences, scalable backend architecture, and maintainable
                        code. I enjoy turning ideas into practical solutions that are intuitive,
                        reliable, and built with attention to detail.
                    </Typography>

                    <Typography className="hero-tagline">
                        Always learning. Always improving. Always building.
                    </Typography>

                    <Stack
                        className="hero-actions"
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={2}
                    >
                        <Button
                            variant="contained"
                            onClick={() => scrollToSection("projects")}
                            className="hero-button hero-primary-button"
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => scrollToSection("contact")}
                            className="hero-button hero-secondary-button"
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