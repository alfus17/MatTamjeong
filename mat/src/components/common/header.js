import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Grid, Box, InputBase, IconButton, Paper, Divider, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar, Dialog } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Login from '../login/login';




function Header() { 

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const [open, setOpen] = useState(false); // Dialog open state


      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[ '임시1', '임시1','임시1', '임시1'].map((text, index) => (
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

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Container maxWidth="lg" sx={{height:'120px'}}>
            <Grid container alignItems="center">
                {/* Left Section: Logo */}
                <Grid item xs={3} style={{ textAlign: 'left' }}>
                    <Box>
                        <Link to="/">
                            <img 
                                src={"/img/icon.png"} 
                                alt="Logo" 
                                style={{ cursor: 'pointer', width:"150px", height:"150px" }}
                                 
                            />
                        </Link>
                    </Box>
                </Grid>
                
                {/* Center Section: Search bar */}
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>                   
                        <InputBase
                            sx={{ 
                              ml: 2,
                              flex: 1 

                              }}
                            placeholder="지역명 및 음식점명, 메뉴로 검색해주세요"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>                  
                </Grid>

                {/* Right Section: Empty Grid or additional content */}
                <Grid item xs={3}>
                
                <div>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"flex-end"
                }}>
                
                
                <Typography component="h2" gutterBottom sx={{
                    fontSize:'18px',
                    cursor:'pointer',
                    fontFamily:'bord',
                    '&:hover': {
                      color : 'red'
                  },
                }}
                onClick={handleClickOpen}
                >
                  
                    로그인
                </Typography>

                    {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                         <Button onClick={toggleDrawer(anchor, true)}><Avatar alt="Remy Sharp" src="/img/gg.jpg" sx={{
                            width:'60px', height:'60px'
                         }}/></Button>
                    <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
          >
                            {list(anchor)}
                    </Drawer>
                     </React.Fragment>
      ))}         </Box>
                </div>
                </Grid>
            </Grid>


         {/* Dialog 컴포넌트 */}
         <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{height:'800px'}} >
            <Login />
         </Dialog>
        </Container>
    );
}

export default Header;
