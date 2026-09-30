import React from "react";
import { Card, CardContent, Typography, Box, Link, IconButton, Divider } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import "./ContactCard.css";

function ContactCard({ title, icon, description, value, href, type }) {

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
    };

    return (
        <Card className="contact-card">
            <CardContent className="contact-card-content">
                <Box className="contact-card-header">
                    <Box className="contact-card-icon">
                        {React.cloneElement(icon)}
                    </Box>

                    <Typography
                        variant="h5"
                        className="contact-card-title"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        className="contact-card-description"
                    >
                        {description}
                    </Typography>
                </Box>

                <Divider className="contact-card-divider" />

                <Box className="contact-card-value">
                    {type === "copy" ? (
                        <Box className="contact-copy">
                            <Typography
                                variant="body2"
                                className="contact-value-text"
                            >
                                {value}
                            </Typography>

                            <IconButton
                                onClick={handleCopy}
                                className="contact-action-button"
                            >
                                <ContentCopyOutlinedIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <Box className="contact-link-wrapper">
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                className="contact-link"
                            >
                                {value}

                                <IconButton
                                    size="small"
                                    className="contact-action-button"
                                >
                                    <OpenInNewOutlinedIcon />
                                </IconButton>
                            </Link>
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

export default ContactCard;