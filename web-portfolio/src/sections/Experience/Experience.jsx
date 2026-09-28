import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import ExperienceItem from "./ExperienceItem";
import workExperienceData from "./ExperienceData.js";
import "./Experience.css";

function Experience() {
    return (
        <Box
            component="section"
            id="experience"
            className="experience-section"
        >
            <Container
                maxWidth="lg"
                className="experience-container"
            >
                <Typography
                    variant="h2"
                    className="experience-title"
                >
                    Work Experience
                </Typography>

                {workExperienceData.map((job) => (
                    <ExperienceItem
                        key={job.company}
                        company={job.company}
                        role={job.role}
                        period={job.period}
                        type={job.type}
                        description={job.description}
                    />
                ))}

                <Divider className="experience-divider" />
            </Container>
        </Box>
    );
}

export default Experience;