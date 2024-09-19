import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Dialog, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Login from '../login/login';
import { AuthContext } from '../login/authContext';

function Header() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = useState(false); // Dialog open/close state
  const [category, setCategory] = useState('store'); // Category state
  const [searchText, setSearchText] = useState(''); // Search text state
  const { user, logout } = useContext(AuthContext);
  const startpage = 1;
  
  // 로그아웃 버튼 비활성화 상태
  const [logoutDisabled, setLogoutDisabled] = useState(true); 

  const navigate = useNavigate(); // useNavigate for page navigation

  // Drawer open/close handler
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Open login dialog handler
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close login dialog handler
  const handleClose = () => {
    setOpen(false);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Search button click handler
  const handleSearch = () => {
    if (searchText) {
      navigate(`/search/${category}/${searchText}/${startpage}`); // Navigate with search parameters
    }
  };

  // Enter key press handler for search
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Search on Enter key press
    }
  };

  // Render drawer list
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['임시1', '임시2', '임시3', '임시4'].map((text, index) => (
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
      <Divider />
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ height: '120px' }}>
      <Grid container alignItems="center">
        {/* Left Section: Logo */}
        <Grid item xs={3} style={{ textAlign: 'left' }}>
          <Box>
            <Link to="/">
              <img
                src="/img/icon.png"
                alt="Logo"
                style={{ cursor: 'pointer', width: '150px', height: '150px' }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Center Section: Search bar with category */}
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="category-select-label">카테고리</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}
              label="카테고리"
            >
              <MenuItem value="store">가게</MenuItem>
              <MenuItem value="menu">메뉴</MenuItem>
              <MenuItem value="location">지역</MenuItem>
            </Select>
          </FormControl>
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
            }}
            placeholder="검색어를 입력해주세요"
            inputProps={{ 'aria-label': 'search' }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress} // Search on Enter key press
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Grid>

        {/* Right Section */}
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            
                <Typography
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: '18px',
                    cursor: logoutDisabled ? 'default' : 'pointer',
                    color: logoutDisabled ? 'gray' : 'black',
                    '&:hover': {
                      color: logoutDisabled ? 'gray' : 'red',
                    },
                  }}
                  onClick={!logoutDisabled ? logout : null} // Disable click if logoutDisabled is true
                >
                  로그아웃
                </Typography>
 
            
              <Typography
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '18px',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'red',
                  },
                }}
                onClick={handleClickOpen} // Open login dialog
              >
                로그인
              </Typography>
                <Button onClick={toggleDrawer('right', true)}>
                  <Avatar alt="Remy Sharp" src="/img/gg.jpg" sx={{ width: '60px', height: '60px' }} />
                </Button>
                <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
                  {list('right')}
                </Drawer>
          </Box>
        </Grid>
      </Grid>

      {/* Login Dialog Component */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ height: '800px' }}>
        <Login onClose={handleClose} />
      </Dialog>
    </Container>
  );
}

export default Header;
