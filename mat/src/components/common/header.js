import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Dialog, Select, MenuItem, FormControl, InputLabel, ButtonBase, NativeSelect, Card, Tabs, Tab } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Login from '../login/login';
import { AuthContext, IsLoginContext, useIsLoginState } from '../login/authContext';

function Header() {

  // 로그인 상태 체크
  const isLogin = useIsLoginState();
  console.log("로그인 상태 : ", isLogin);

  // 로그인 업데이트 함수 가져오기
  const { setIsLogin } = useContext(IsLoginContext);
  // 로그아웃 처리 코드 
  const logoutHandler = async() =>{
    // 로컬 스토리지 클린
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('token')
    setIsLogin(false);
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
  // const { user, logout } = useContext(AuthContext);
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
      <List sx={{mt:12}}>
          <Typography sx={{textAlign:'center' , cursor:'pointer' , fontSize:'25px'}} >
              <Link to="/mypageMain/aboutMe" style={{textDecoration:'none'}}>마이페이지</Link>
          </Typography>

          <Typography sx={{textAlign:'center' , cursor:'pointer' , fontSize:'25px' ,mt : 6}} >
              <Link to="/mypageMain" style={{textDecoration:'none'}}>마이페이지</Link>
          </Typography>

          <Typography sx={{textAlign:'center' , cursor:'pointer' , fontSize:'25px' ,mt : 6}} >
              <Link to="/mypageMain" style={{textDecoration:'none'}}>마이페이지</Link>
          </Typography>

          <Typography sx={{textAlign:'center' , cursor:'pointer' , fontSize:'25px' ,mt : 6}} >
              <Link to="/mypageMain" style={{textDecoration:'none'}}>마이페이지</Link>
          </Typography>

          {isLogin ? <Button sx={{display:'flex' , margin:'0 auto' , mt : 30 , fontSize:'20px'}}>로그아웃</Button> : null}
      </List>
      <Divider />
    </Box>
  );

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    
    // 
    switch (newValue) {
      case 'one':
        navigate('/map'); // Replace with your actual route
        break;
      case 'two':
        navigate('/'); // Replace with your actual route
        break;
      case 'three':
        navigate('/list'); // Replace with your actual route
        break;
      default:
        break;
    } 
  };
  
  
  

  return (
    <Container maxWidth="lg" sx={{ mt:6 }}>
      <Grid container alignItems="center">
        {/* Left Section: Logo */}
        <Grid item xs={3} style={{ textAlign: 'left' }}>
          <Box sx={{display:'flex'}}>
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="Logo"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </Box>
        </Grid>

        {/* Center Section: Search bar with category */}
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{width:'100%' , borderRadius:6 , paddingLeft:3 ,backgroundColor:'#FFF8E8', display:''}}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 ,color:'#674636'}}>
          <InputLabel id="demo-simple-select-standard-label" sx={{color:'#674636'}}>카테고리</InputLabel>
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
              ml:4,
              flex: 1,
              mt:3,
              width:'325px',
              fontSize:'17px'
            }}
            placeholder="검색어를 입력해주세요"
            inputProps={{ 'aria-label': 'search' }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress} // Search on Enter key press
          />
          <IconButton type="button" sx={{  }} aria-label="search" onClick={handleSearch}>
            <SearchIcon sx={{width:'35px',height:'35px' ,mb:1,color:'#674636'}}/>
          </IconButton>
        </Paper>
        </Grid>

        {/* Right Section */}
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            
                {isLogin ?<Typography
                  component="h2"
                  gutterBottom
                  sx={{
                    fontSize: '18px',
                    cursor: !logoutDisabled ? 'default' : 'pointer',
                    color: !logoutDisabled ? 'gray' : 'black',
                    '&:hover': {
                      color: !logoutDisabled ? 'gray' : 'red',
                    },
                  }}
                  onClick={logoutHandler} // Disable click if logoutDisabled is true
                >
                  로그아웃
                </Typography>:null}
 
            
              { !isLogin ? <Typography
                component="h2"
                gutterBottom
                sx={{
                  fontSize: '20px',
                  cursor: 'pointer',
                  color:'#674636',
                  '&:hover': {
                    color: 'red',
                  
                  },
                }}
                onClick={handleClickOpen} // Open login dialog
              >
                Login
              </Typography>:null}
                <Button onClick={toggleDrawer('right', true)}>
                  <Avatar alt="Remy Sharp" src="/img/gg.jpg" sx={{ width: '60px', height: '60px' }} />
                </Button>
                <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}>
                  {list('right')}
                </Drawer>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' , display:'flex', justifyContent:'center' , mt:4}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="지도로 보기" sx={{ mr: 20 }} onClick={{}}/>
        <Tab value="two" label="맛집 추천"  sx={{ mr: 20 }} />
        <Tab value="three" label="리스트로 보기"  />
      </Tabs>
    </Box>
      {/* Login Dialog Component */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ height: '800px' }}>
        <Login onClose={handleClose} />
      </Dialog>
    </Container>
  );
}

export default Header;