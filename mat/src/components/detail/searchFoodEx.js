import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Map from '../map/map';

function Ex() {
  const { category, keyword, startpage } = useParams();
  const navigate = useNavigate();  // 수정된 부분
  
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(parseInt(startpage));

  useEffect(() => {
    // Reset stores and fetch new data when keyword or category changes
    setStores([]); // Clear existing stores
    setPage(1); // Reset page to 1
    fetchStores(1, keyword); // Fetch stores for the first page
  }, [category, keyword]);

  useEffect(() => {
    if (page > 1) { // Only fetch more stores if page is greater than 1
      fetchStores(page, keyword);
    }
  }, [page, keyword]);

  const fetchStores = async (page, keyword) => {
    const response = await axios.get(`/search/${category}/${keyword}/${page}`);
    setStores((prevStores) => [...prevStores, ...response.data]); // Add new data to existing stores
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearchClick = (storeId) => {
    // 클릭 시 해당 가게 ID로 StoreDetails 페이지로 이동
    navigate(`/store/${storeId}`);
  };

  return (
    <Container maxWidth="100%" sx={{ mt: 2 , backgroundColor:'#F7EED3', height:'700px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <Box sx={{ flex: 1, height: '100%', overflowY: 'auto' }}>
          <List sx={{ width: '100%' }}>
            {stores.map((store) => (
              <Paper sx={{ mt: 2 , mr:2}} key={store.id}>
                <ListItem
                  disableGutters
                  secondaryAction={
                    <IconButton sx={{ mr: 2 }}>
                      <NavigationIcon />
                    </IconButton>
                  }
                >
                  <Box
                    component="img"
                    src={store.menuUrl}
                    alt={store.storeName}
                    onClick={() => handleSearchClick(stores.storeId)}
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: 1,
                      objectFit: 'cover',
                      marginRight: 2,
                      ml: 2,
                    }}
                  />
                  <ListItemText
                    primary={store.storeName}
                    secondary={<Rating name={`rating-${store.id}`} value={store.rating} precision={0.5} readOnly />}
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
          <Button onClick={loadMore} variant="contained" sx={{ mt: 2 }}>
            더보기
          </Button>
        </Box>

        <Box sx={{ flex: 2 }}>
          <Map storeData={stores} height="700px" />
        </Box>
      </Box>
    </Container>
  );
}

export default Ex;
