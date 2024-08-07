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
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: 'background.paper',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <List sx={{ pt: 2 }}>
        <ListItem button component={Link} to="/home" sx={{ '&.Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } }}>
          <ListItemIcon sx={{ color: 'text.primary' }}>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/tasks" sx={{ '&.Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } }}>
          <ListItemIcon sx={{ color: 'text.primary' }}>
            <Task />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
      </List>
      <Divider sx={{ mt: 1, borderColor: 'divider' }} />
    </Drawer>
  );
};

export default Sidebar;
