import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CountDisplay from '../components/CountDisplay'
import {Paper } from '@mui/material'
// import { Paper, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, HomeIcon, PersonIcon, PostAddIcon, MenuIcon,Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

const kpis = {
  totalUsers: 1500,
  totalPosts: 5000,
  usersActiveLast24Hours: 300,
  postsPublishedLast24Hours: 120
};

function NavigationBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Typography variant='h5' sx={{fontWeight: 'bold' , margin: '15px 0 15px 0', textAlign: 'center'}} >Admin Dashboard</Typography>
      <Divider />
      <List>
        {['Home', 'User listing', 'Post listing'].map((text, index) => (
          <Link to={`${text.split(' ').join('-').toLocaleLowerCase()}`}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === 'Home' ? <HomeIcon /> : text === 'User listing' ? <PersonIcon /> : <  PostAddIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Admin Dashboard</Typography>
          
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation options"
      >
      
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* <CountDisplay n={130} /> */}
        <Box p={3}>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {Object.entries(kpis).map(([key, value]) => (
              <Paper key={key} elevation={3} sx={{ p: 3, flex: '1 1 200px', textAlign: 'center' }}>
                <Typography variant="h6">{key.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                <CountDisplay n={value}/>
                {/* <Typography variant="h4">{value}</Typography> */}
              </Paper>
            ))}
          </Box>
        </Box> 
      </Box>
    </Box>
  );
}

export default NavigationBar;
