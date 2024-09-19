import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Fab, Paper } from '@mui/material';

function Ex() {
    // 가게의 이미지 URL과 별점 데이터를 가정한 배열
    const stores = [
        { id: 1, name: "코리안 치킨 클럽", imgUrl: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg", rating: 5 },
        { id: 2, name: "치킨 마스터", imgUrl: "https://img.freepik.com/free-photo/top-view-table-full-of-delicious-food-composition_23-2149141352.jpg", rating: 2 },
        { id: 3, name: "핫 스파이시 치킨", imgUrl: "https://cdn.stocksnap.io/img-thumbs/280h/strawberry-food_PROXEBKRSP.jpg", rating: 5 },
        { id: 4, name: "프리미엄 치킨", imgUrl: "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png", rating: 2 }
    ];

    return (
        <Container maxWidth="100%" sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', mt:10 }}>
                {/* 왼쪽에 리스트 */}
                <Box sx={{ flex: 1 }}>
                    <List sx={{ width: '100%', maxWidth: 400 }}>
                        {stores.map((store) => (
                          <Paper sx={{mt:2}}>
                            <ListItem
                                key={store.id}
                                disableGutters
                                secondaryAction={
                                <IconButton sx={{mr:2}}>
                                  <NavigationIcon/>
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
                                        borderRadius: 1, // 네모나게
                                        objectFit: 'cover', // 이미지가 잘리지 않도록
                                        marginRight: 2, // 텍스트와 이미지 사이 간격
                                        ml :2
                                    }}
                                />
                                <ListItemText
                                    primary={store.name}
                                    secondary={
                                        // 별점 추가
                                        <Rating name={`rating-${store.id}`} value={store.rating} precision={0.5} readOnly />
                                    }
                                />
                            </ListItem>
                      </Paper>
                        ))}
                    </List>
                </Box>
                {/* 오른쪽에 다른 내용 추가 가능 */}
                <Box sx={{ flex: 1, ml: 2 }}>
                    {/* 여기에 오른쪽에 추가할 내용 */}
                </Box>
            </Box>
        </Container>
    );
}

export default Ex;
