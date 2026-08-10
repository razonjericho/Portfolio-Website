import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import ExperienceItem from "./ExperienceItem";
import workExperienceData from "./experienceData";


function Experience(props) {

    return (
        <Box
            component="section"
            id="experience"
            sx={{
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

                <Divider 
                    sx={{ 
                        mt: 5,
                        mb: 5 
                    }} 
                />
            </Container>
        </Box>
        
    )
}

export default Experience;