import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Button, Fab, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // URL에서 파라미터를 받기 위한 useParams
import axios from 'axios';

function Ex() {
  // URL 파라미터에서 검색어와 카테고리 가져오기
  const { category, keyword, startpage } = useParams();

  console.log("keyword : ", keyword);
  console.log("startpage : ", startpage);
  
  // 가게 데이터와 페이지 번호 상태 관리
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState (parseInt(startpage));
  console.log("page : ", page);
  
  // 페이지나 검색어 변경 시 데이터 불러오기
  useEffect(() => {
    fetchStores(page, keyword);
  }, [page, keyword]);

  // API 호출 함수
  const fetchStores = async (page, keyword) => {
    const response = await axios.get(`/search/${category}/${keyword}/${page}`);
    console.log(response);
    // const data = await response.json();
    setStores((prevStores) => [...prevStores, ...response.data]);  // 기존 데이터에 추가
    console.log(stores);
  };

  // 더보기 버튼 클릭 시 페이지 증가
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth="100%" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'left', mt: 10 }}>
        {/* 왼쪽에 리스트 */}
        <Box sx={{ flex: 1 }}>
          <List sx={{ width: '100%', maxWidth: 400 }}>
            {stores.map((store) => (
              <Paper sx={{ mt: 2 }} key={store.id}>
                <ListItem
                  disableGutters
                  secondaryAction={
                    <IconButton sx={{ mr: 2 }}>
                      <NavigationIcon />
                    </IconButton>
                  }
                >
                  {/* 네모난 이미지 추가 */}
                  <Box
                    component="img"
                    src={store.imgUrl}
                    alt={store.name}
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
                    primary={store.name}
                    secondary={
                      <Rating name={`rating-${store.id}`} value={store.rating} precision={0.5} readOnly />
                    }
                  />
                </ListItem>
              </Paper>
            ))}
          </List>
          <Button onClick={loadMore} variant="contained" sx={{ mt: 2 }}>
            더보기
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Ex;
