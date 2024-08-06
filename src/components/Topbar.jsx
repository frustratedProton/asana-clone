import { useState } from 'react';
import { AppBar, Toolbar, IconButton, TextField, Button, Menu, MenuItem, Avatar, Divider, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const TopBar = () => {
  const [createMenuAnchorEl, setCreateMenuAnchorEl] = useState(null);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
  const createMenuOpen = Boolean(createMenuAnchorEl);
  const accountMenuOpen = Boolean(accountMenuAnchorEl);

  const handleCreateMenuClick = (event) => {
    setCreateMenuAnchorEl(event.currentTarget);
  };

  const handleCreateMenuClose = () => {
    setCreateMenuAnchorEl(null);
  };

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 'none', height: 60 }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>

          <Button
            aria-controls="create-menu"
            aria-haspopup="true"
            onClick={handleCreateMenuClick}
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 0.5,
              minWidth: 'auto',
              mx: 1,
              height: 'auto',
            }}
          >
            <AddIcon
              sx={{
                mr: 1,
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '50%',
                p: 0.5,
                fontSize: '1.2rem',
              }}
            />
            Create
          </Button>

          <Menu
            id="create-menu"
            anchorEl={createMenuAnchorEl}
            open={createMenuOpen}
            onClose={handleCreateMenuClose}
            sx={{ mt: '45px' }}
          >
            <MenuItem onClick={handleCreateMenuClose}>Task</MenuItem>
            <MenuItem onClick={handleCreateMenuClose}>Project</MenuItem>
          </Menu>
        </div>

        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <TextField 
            placeholder='Search my workspace'
            variant='outlined'
            sx={{ 
              maxWidth: 600, 
              width: '100%',
              borderRadius: '50px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
              },
              '& .MuiInputBase-input': {
                padding: '8px 14px',
                fontSize: '0.875rem',
              },
            }}
            InputProps={{ startAdornment: <SearchIcon /> }}
          />
        </div>

        <IconButton
          color='inherit'
          onClick={handleAccountMenuClick}
          aria-controls={accountMenuOpen ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={accountMenuOpen ? 'true' : undefined}
        >
          <AccountCircle />
        </IconButton>

        <Menu
          id="account-menu"
          anchorEl={accountMenuAnchorEl}
          open={accountMenuOpen}
          onClose={handleAccountMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleAccountMenuClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleAccountMenuClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleAccountMenuClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleAccountMenuClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleAccountMenuClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
