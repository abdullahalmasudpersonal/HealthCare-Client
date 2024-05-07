import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const SideBer = () => {
    const drawer = (
        <div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Box>
            <Stack sx={{
                py: 1,
                mt: 1,
            }}
                direction='row' justifyContent="center" alignItems='center'
                gap={1}
                component={Link}
                href='/'
            >
                <Image width={40} height={40} src={assets.svgs.logo} alt="logo" />
                <Typography>
                    PH Health Care
                </Typography>
            </Stack>
            {drawer}
        </Box>
    );
};

export default SideBer;