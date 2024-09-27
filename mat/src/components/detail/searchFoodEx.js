import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Map from '../map/map';

function Ex() {
  const { category, keyword, startpage } = useParams();
  const navigate = useNavigate();  // 수정된 부분
  
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(parseInt(startpage));
  const [totalPage, setTotalPage ] = useState(1);
  console.log("stores : ", stores)
  
  useEffect(() => {
    // Reset to first page but don't clear stores immediately
    setPage(1); 
    fetchStores(1, keyword, true); // Fetch stores for the first page, with an option to reset stores
  }, [category, keyword]);
  
  useEffect(() => {
    if (page > 1) { // Only fetch more stores if page is greater than 1
      fetchStores(page, keyword, false); // Fetch more stores without resetting
    }
  }, [page, keyword]);
  
  const fetchStores = async (page, keyword, reset = false) => {
    const response = await axios.get(`/search/${category}/${keyword}/${page}`)
    setStores((prevStores) => {
      const newStores = response.data?.storeList || [];
      // Reset stores if required, otherwise append new data
      if (reset) {
        return newStores;
      } else {
        const uniqueStores = [...prevStores, ...newStores];
        return uniqueStores;
      }
    });
    setTotalPage(response?.data?.totalPages);
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
              <Paper sx={{ mt: 2 , mr:2 , cursor:'pointer'}} 
                key={store.storeId}  
                onClick={() => handleSearchClick(store.storeId)}>
                <ListItem>
                  <Box
                    component="img"
                    src={store.menuUrl}
                    alt={store.storeName}
                    sx={{
                      width: 150,
                      height: 150,
                      borderRadius: 1,
                      objectFit: 'cover',
                      marginRight: 2,
                      
                    }}
                  />

                  <Box>
                  <Typography sx={{fontSize:'24px'}}>
                      {store.storeName}
                  </Typography>
                  <Typography sx={{mt:7}}>
                    {store.businessHours}
                  </Typography>
                  </Box>
                  
                  <Box sx={{ml:16}}>

                  <Box sx={{display:'flex'}}>
                  <Box sx={{textAlign:'center'}}>
                  <Typography>다이닝</Typography>
                  <Rating name="total-rating" value={parseFloat(store.dcRating)} readOnly precision={0.5} />
                  </Box>
                  <Typography variant="h6" sx={{ml:3,mt:2}}>{store.dcRating.toFixed(1)}</Typography>
                  </Box>
      

                  <Box sx={{display:'flex'}}>
                  <Box sx={{textAlign:'center'}}>
                  <Typography>카카오</Typography>
                  <Rating name="total-rating" value={parseFloat(store.kgRating)} readOnly precision={0.5} />
                  </Box>
                  <Typography variant="h6" sx={{ml:3,mt:2}}>{store.kgRating.toFixed(1)}</Typography>
                  </Box>

                  <Box sx={{display:'flex'}}>
                  <Box sx={{textAlign:'center'}}>
                  <Typography>맛탐정</Typography>
                  <Rating name="total-rating" value={parseFloat(store.matRating)} readOnly precision={0.5} />
                  </Box>
                  <Typography variant="h6" sx={{ml:3,mt:2}}>{store.matRating.toFixed(1)}</Typography>
                  </Box>
                  </Box>
                </ListItem>
              </Paper>
            ))}
          </List>
          {/* 더보기 버튼 */}
          {page < totalPage && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" onClick={loadMore}>더보기</Button>
            </Box>
          )}
        </Box>
        <Box sx={{ flex: 1.8 }}>
          <Map storeData={stores} height="700px" />
        </Box>
      </Box>
    </Container>
  );
}

export default Ex;