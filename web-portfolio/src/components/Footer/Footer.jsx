import React from "react";
import { Container, Box, Typography } from "@mui/material";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            className="footer"
        >
            <Container
                maxWidth="lg"
                className="footer-container"
            >
                {/* Desktop & Tablet */}
                <Typography className="footer-text footer-text-desktop">
                    Designed and developed by{" "}
                    <Typography
                        component="span"
                        className="footer-name"
                    >
                        Jericho Razon
                    </Typography>
                    {" "}· © {currentYear}
                </Typography>

                {/* Mobile */}
                <Typography className="footer-text footer-text-mobile">
                    Designed and developed
                    <br />
                    by{" "}
                    <Typography
                        component="span"
                        className="footer-name"
                    >
                        Jericho Razon
                    </Typography>
                    {" "}· © {currentYear}
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;