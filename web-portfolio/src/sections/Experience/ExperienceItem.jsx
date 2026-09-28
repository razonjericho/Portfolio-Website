import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "./ExperienceItem.css";

function ExperienceItem({ company, role, period, description, }) {
    return (
        <Box className="experience-item">
            <Divider className="experience-item-divider" />
            <Box className="experience-item-grid">
                <Box className="experience-meta">

                    <Typography
                        variant="h5"
                        className="experience-company"
                    >
                        {company}
                    </Typography>

                    <Typography
                        variant="h6"
                        className="experience-period"
                    >
                        {period}
                    </Typography>

                </Box>

                <Box className="experience-details">

                    <Typography
                        variant="h4"
                        className="experience-role"
                    >
                        {role}
                    </Typography>

                    <Box className="experience-description">
                        {description.map((item) => (
                            <Typography
                                key={item}
                                className="experience-description-item"
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ExperienceItem;