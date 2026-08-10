import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const contactData = [
    {
        title: "Email",
        icon: <EmailOutlinedIcon />,
        description: "The best way to reach me",
        value: "razonjericho11@gmail.com",
        action: "Copy",
        type: "copy"
    },
    {
        title: "LinkedIn",
        icon: <LinkedInIcon />,
        description: "Let's connect professionally",
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/jericho-pete-razon-6a78a8290/",
        type: "link",
    },
    {
        title: "GitHub",
        icon: <GitHubIcon />,
        description: "Check out my projects and code",
        value: "GitHub",
        href: "https://github.com/razonjericho",
        type: "link",
    },
    {
        title: "Resume",
        icon: <DescriptionOutlinedIcon />,
        description: "View my resume",
        value: "View Resume",
        href: "/JerichoRazonResume.pdf",
        type: "link",
    },
];

export default contactData;