import { Home, Task } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          height: 'calc(100% - 60px)',
          boxSizing: 'border-box',
          position: 'fixed',
          top: 60, 
          left: 0,
        },
      }}
    >
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon><Task /></ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
