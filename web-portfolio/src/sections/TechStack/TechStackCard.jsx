import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "./TechStackCard.css";

function TechStackCard({ title, skills }) {
    return (
        <Card className="tech-stack-card">
            <CardContent className="tech-stack-card-content">
                <Typography
                    variant="h6"
                    className="tech-stack-card-title"
                >
                    {title}
                </Typography>

                <Box className="tech-stack-skills">
                    {skills.map((skill) => (
                        <Box
                            key={skill}
                            className="tech-stack-skill"
                        >
                            <Typography className="tech-stack-skill-text">
                                {skill}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

export default TechStackCard;