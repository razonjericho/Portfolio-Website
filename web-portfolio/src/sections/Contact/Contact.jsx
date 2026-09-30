import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactData from "./ContactData.jsx";
import ContactCard from "./ContactCard.jsx";
import "./Contact.css";

function Contact() {
    return (
        <Box
            component="section"
            id="contact"
            className="contact-section"
        >
            <Container
                maxWidth="lg"
                className="contact-container"
            >
                <Typography
                    className="contact-label"
                >
                    CONTACT
                </Typography>

                <Typography
                    variant="h2"
                    className="contact-title"
                >
                    Get in Touch
                </Typography>

                <Typography
                    variant="body1"
                    className="contact-description"
                >
                    I'm currently looking for junior full-stack opportunities.
                    Feel free to reach out or connect with me through the links below.
                </Typography>

                <Box className="contact-location">
                    <LocationOnOutlinedIcon className="contact-location-icon" />

                    <Typography
                        variant="body2"
                        className="contact-location-text"
                    >
                        Cebu, Philippines
                    </Typography>

                    <Typography
                        className="contact-location-divider"
                    >
                        |
                    </Typography>

                    <Typography
                        variant="body2"
                        className="contact-location-text"
                    >
                        Open to Remote Opportunities
                    </Typography>
                </Box>

                <Grid
                    container
                    className="contact-grid"
                >
                    {ContactData.map((item) => (
                        <Grid
                            key={item.title}
                            className="contact-grid-item"
                        >
                            <ContactCard
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                                value={item.value}
                                href={item.href}
                                type={item.type}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;