import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Dialog, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Login from '../login/login';

function Header() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = useState(false); // 다이얼로그 열기/닫기 상태
  const [category, setCategory] = useState('store'); // 카테고리 상태 관리
  const [searchText, setSearchText] = useState(''); // 검색 텍스트 상태 관리
  const startpage = 1;
 
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  // Drawer 열기/닫기 핸들러
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // 로그인 다이얼로그 열기 핸들러
  const handleClickOpen = () => {
    setOpen(true);
  };

  // 로그인 다이얼로그 닫기 핸들러
  const handleClose = () => {
    setOpen(false);
  };

  // 카테고리 선택 핸들러
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // 검색 버튼 클릭 시 처리할 함수
  const handleSearch = () => {
    if (searchText) {
      navigate(`/search/${category}/${searchText}/${startpage}`); // 검색어와 카테고리로 이동
    }
  };

  // 엔터 키 입력 시 검색 실행
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // 엔터 키로 검색
    }
  };

  // Drawer 내 리스트 항목 렌더링
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
            onKeyPress={handleKeyPress} // 엔터 키 입력 시 검색
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Grid>

        {/* Right Section */}
        <Grid item xs={3}>
          <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
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
                onClick={handleClickOpen}
              >
                로그인
              </Typography>

              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <Avatar alt="Remy Sharp" src="/img/gg.jpg" sx={{ width: '60px', height: '60px' }} />
                  </Button>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </div>
        </Grid>
      </Grid>

      {/* 로그인 Dialog 컴포넌트 */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ height: '800px' }}>
        <Login />
      </Dialog>
    </Container>
  );
}

export default Header;
