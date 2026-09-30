import React, { useState } from "react";
import { AppBar, Toolbar, Stack, Container, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";

function Header() {
    const navItems = [
        {
            label: "About",
            id: "about",
        },
        {
            label: "Skills",
            id: "skills",
        },
        {
            label: "Projects",
            id: "projects",
        },
        {
            label: "Contact",
            id: "contact",
        },
    ];

    const [openDrawer, setOpenDrawer] = useState(false);

    function toggleDrawer(isOpen) {
        setOpenDrawer(isOpen);
    }

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Box>
            <AppBar
                position="fixed"
                elevation={1}
                className="header-app-bar"
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        className="header-toolbar"
                    >
                        <Typography
                            variant="h5"
                            component="h1"
                            onClick={() => scrollToSection("home")}
                            className="header-logo"
                        >
                            Pete
                        </Typography>

                        <Box className="header-desktop-nav">
                            <Stack
                                direction="row"
                                className="header-nav"
                            >
                                {navItems.map((item) => (
                                    <Button
                                        key={item.id}
                                        color="inherit"
                                        onClick={() => scrollToSection(item.id)}
                                        className="header-nav-button"
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Stack>
                        </Box>

                        <Box className="header-mobile-menu">
                            <IconButton
                                onClick={(e) => {
                                    e.currentTarget.blur();
                                    toggleDrawer(true);
                                }}
                                className="header-menu-button"
                            >
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => toggleDrawer(false)}
            >
                <Box className="header-drawer">
                    <Box className="header-drawer-header">
                        <Typography
                            variant="h6"
                            onClick={() => {
                                scrollToSection("home");
                                setOpenDrawer(false);
                            }}
                            className="header-drawer-logo"
                        >
                            Pete
                        </Typography>
                    </Box>

                    <Divider />

                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.id}
                                disablePadding
                            >
                                <ListItemButton
                                    onClick={() => {
                                        toggleDrawer(false);
                                        scrollToSection(item.id);
                                    }}
                                    className="header-drawer-item"
                                >
                                    <ListItemText
                                        primary={item.label}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Header;