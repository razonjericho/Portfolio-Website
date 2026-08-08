import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactData from "./ContactData.jsx";
import ContactCard from "./ContactCard.jsx";

function Contact(props) {
    return(
        <Box
            component="section"
            id="contact"
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
                    sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        letterSpacing: 2,
                        textAlign: "center",
                        display: "block",
                        mb: 1,
                    }}
                > 
                    CONTACT
                </Typography>
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                > 
                    Get in Touch 
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        color:"text.secondary",
                        maxWidth: {
                            sm: 650,
                            md: 800,
                            lg: 650,
                        },
                        mx: "auto",
                        mb: 6,
                        fontSize: {
                            xs: "0.9rem",
                            sm: "1.1rem",
                            md: "1.6rem",
                            lg: "1rem",
                        },
                    }}
                >
                    I'm currently looking for junior full-stack opportunities.
                    Feel free to reach out or connect with me through the links below.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        mt: 3,
                        mb: 5,
                        flexWrap: "wrap",
                    }}
                >
                    <LocationOnOutlinedIcon
                        sx={{
                            color: "primary.main",
                            fontSize: {
                                xs: "1.2rem",
                                sm: "1.3rem",
                                md: "1.6rem",
                                lg: "1.2rem",
                            },
                        }}
                    />

                    <Typography
                        variant="body2"
                        sx={{
                           color:"text.secondary",
                           fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.4rem",
                                lg: "0.9rem",
                            },
                        }}
                    >
                        Cebu, Philippines
                    </Typography>

                    <Typography
                        sx={{
                           color:"text.secondary",
                           fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.4rem",
                                lg: "0.9rem",
                            },
                        }}
                    >
                        |
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                           color:"text.secondary",
                           fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.4rem",
                                lg: "0.9rem",
                            },
                        }}
                    >
                        Open to Remote Opportunities
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        alignItems:"stretch"
                    }}    
                >
                    {ContactData.map((item) => (
                        <Grid
                            key={item.title}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 6,
                                lg: 3,
                            }}
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
        
    )
}

export default Contact;