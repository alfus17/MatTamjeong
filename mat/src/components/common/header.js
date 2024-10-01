import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Dialog, Select, MenuItem, FormControl, InputLabel, } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { AuthContext, IsLoginContext, useIsLoginState } from '../login/authContext';
import Login from '../login/login';

function Header() {
  const profileImg = sessionStorage.getItem("profile");
  const id = sessionStorage.getItem("id");
  
  const isLogin = useIsLoginState();
  console.log("로그인 상태 : ", isLogin);

  const { setIsLogin } = useContext(IsLoginContext);
  const navigate = useNavigate(); // useNavigate for page navigation
  
  const logoutHandler = async () => {
    // 로컬 스토리지 클린
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('profile');
    setIsLogin(false);
    
    navigate('/'); // 로그아웃 버튼 누르면 main.js로 이동
  }

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const [open, setOpen] = useState(false); // Dialog open/close state
  const [category, setCategory] = useState('store'); // Category state
  const [searchText, setSearchText] = useState(''); // Search text state

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
      navigate(`/search/${category}/${searchText}`); // Navigate with search parameters
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography sx={{ textAlign: 'center', cursor: 'pointer', fontSize: '25px', mt: 10, color: '#FF7D29' }}>
          <Link to="/mypageMain/aboutMe" style={{ textDecoration: 'none', color: 'inherit' }}>내 프로필</Link>
        </Typography>
        <Typography sx={{ textAlign: 'center', cursor: 'pointer', fontSize: '25px', mt: 6, color: '#FF7D29' }}>
          <Link to="/mypageMain/passwordConfirm" style={{ textDecoration: 'none', color: 'inherit' }}>정보수정</Link>
        </Typography>
        <Typography sx={{ textAlign: 'center', cursor: 'pointer', fontSize: '25px', mt: 6, color: '#FF7D29' }}>
          <Link to="/mypageMain/myreview" style={{ textDecoration: 'none', color: 'inherit' }}>내가 쓴 리뷰</Link>
        </Typography>
        {isLogin ? <Button sx={{ display: 'flex', margin: '0 auto', mt: 30, fontSize: '20px' }} onClick={logoutHandler}>로그아웃</Button> : null}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Grid container alignItems="center">
        {/* Left Section: Logo */}
        <Grid item xs={3} style={{ textAlign: 'left' }}>
          <Box sx={{ display: 'flex' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography 
                sx={{ 
                  fontSize: '25px', 
                  fontWeight: 'bold',
                  color: '#1E2A5E',
                  fontFamily: 'Noto Sans KR, sans-serif',
                  '&:hover': {
                    color: '#f50057',
                    transition: 'color 0.3s ease',
                  },
                }}
              >
                맛탐정
              </Typography>
            </Link>
          </Box>
        </Grid>

        {/* Center Section: Search bar with category */}
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Paper sx={{ width: '100%', borderRadius: 6, paddingLeft: 3, backgroundColor: '#f7f7f7' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: '#FF7D29' }}>
              <InputLabel id="demo-simple-select-standard-label" sx={{ color: '#FF7D29' }}>카테고리</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
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
                ml: 4,
                flex: 1,
                mt: 3,
                width: '325px',
                fontSize: '17px'
              }}
              placeholder="검색어를 입력해주세요"
              inputProps={{ 'aria-label': 'search' }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <IconButton type="button" aria-label="search" onClick={handleSearch}>
              <SearchIcon sx={{ width: '35px', height: '35px', mb: 1, color: '#FF7D29' }} />
            </IconButton>
          </Paper>
        </Grid>

        {/* Right Section */}
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {isLogin ? (
              <>
                <Typography>{sessionStorage.getItem("id")}</Typography>
                <Button onClick={toggleDrawer('right', true)}>
                  <Avatar alt="Remy Sharp" src={profileImg !== undefined ? profileImg : "/img/gg.jpg"} sx={{ width: '60px', height: '60px' }} />
                </Button>
                <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
                  {list('right')}
                </Drawer>
              </>
            ) : null}
            {!isLogin ? (
              <Typography
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '25px',
                  cursor: 'pointer',
                  color: '#FF7D29',
                  '&:hover': {
                    color: 'red',
                  },
                }}
                onClick={handleClickOpen} // Open login dialog
              >
                Login
              </Typography>
            ) : null}
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
