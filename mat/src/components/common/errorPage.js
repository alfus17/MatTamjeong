import React from 'react';
import { Container, Box, Typography } from '@mui/material';

export function ErrorPage() {
    return (
        <Container disableGutters maxWidth={false} sx={{ width: '100%' }}>
            <Box sx={{
                width: '100%',
                height: '700px',
                backgroundImage: 'url(img/7171197.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative', // 오버레이 위치 설정을 위한 상대적 위치
                mt: 3
            }}>
                {/* 반투명 오버레이 */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 검정색 반투명
                    zIndex: 1, // 텍스트 위로 오버레이
                }}></Box>

                {/* 텍스트 */}
                <Box sx={{
                    position: 'relative',
                    zIndex: 2, // 오버레이 위에 텍스트
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    color: '#fff' // 텍스트 색상 흰색으로 변경
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: '60px',
                            fontFamily: 'Do Hyeon',
                        }}>
                            404
                        </Typography>
                        <Typography sx={{
                            fontSize: '30px',
                            fontFamily: 'Do Hyeon',
                        }}>
                            OPPS! ERROR PAGE!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
