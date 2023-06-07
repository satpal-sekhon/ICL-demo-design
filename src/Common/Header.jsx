import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../image/Logo.png'
import profile from '../image/profile.jpg'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const pages = ['Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar position="fixed"
                sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
                className='navbar-wrapper'
            >
                <Toolbar disableGutters className='navbar-toolbar'>
                    <Box className="navbar-logo">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                fontFamily: 'monospace',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={Logo} alt="Image Description" />
                        </Typography>

                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', fontWeight: '700', fontSize: '16px' }}
                                color='primary'
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }} className="d-flex align-items-center profile-detail">
                        <Tooltip title="Open settings" className='profile-btn'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className=''>
                                <img src={profile} alt="Image Description" className='profile-image' />
                                <Box className="profile-text" sx={{ display: { xs: 'none', md: 'inline-block' } }}>
                                    <Typography variant='body1' className='profile-name' color={'primary'} sx={{ fontSize: '14px', fontWeight: 'bold' }}>john Smith</Typography>
                                    <Typography variant='body1' className='profile-designation' sx={{ fontSize: '11px' }}>Phunk Creative</Typography>
                                </Box>
                            </IconButton>
                        </Tooltip>
                        <Box className="setting-icon">
                            <SettingsIcon className='text-darkblue' />
                        </Box>
                        <Box className="notification-icon">
                            <NotificationsIcon className='text-darkblue' />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
