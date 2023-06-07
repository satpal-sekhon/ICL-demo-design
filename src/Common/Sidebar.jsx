
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DoneIcon from '@mui/icons-material/Done';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SellIcon from '@mui/icons-material/Sell';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import styled from '@mui/system/styled';
import { IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const CustomListItemButton = styled(ListItemButton)`
border-radius:'6px';
&:hover {
  background-color: #E8F5FC;
  border-radius:6px;
}
&:hover {
    .sidebar-icone{
      background-color: #1D64D6;
    }
  }
`;

const drawerWidth = 240;

export default function Sidebar(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen);
  };

  const SideIcon = (text) => {
    if (text === 'Dashboard') {
      return <DashboardIcon className='nav-icon' />
    } else if (text === 'Customs') {
      return <DoneIcon className='nav-icon' />
    } else if (text === 'Booking') {
      return <EventNoteIcon className='nav-icon' />
    } else if (text === 'Shipments') {
      return <KeyboardIcon className='nav-icon' />
    } else if (text === 'Tracking') {
      return <PinDropIcon className='nav-icon' />
    } else {
      return <SellIcon className='nav-icon sell-icon-rotate' />
    }
  }


  const drawer = (
    <List className='mt-72'>
      {['Dashboard', 'Shipments', 'Customs', 'Booking', 'Tracking', 'Quotes'].map((text, index) => (
        <ListItem key={text} >
          <CustomListItemButton >
            <ListItemIcon >
              <Box className='sidebar-icone'>{SideIcon(text)}</Box>
            </ListItemIcon>
            <ListItemText className='sidebar-text' primary={text} />
          </CustomListItemButton>
        </ListItem>
      ))}
    </List>


  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className='sidebar-wrapper'  >
      <CssBaseline />
      <AppBar
        className="fixed siderbar-mobile-btn"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: 'block', sm: 'none' } }} className='sidbar-button'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className='sidbar-button-icon'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            mt: '64px',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '72px' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}



