import Accordion from 'react-bootstrap/Accordion';
import '../css/manageHistory.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManagementHistory() {

    const [userInfo, setUserInfo] = useState({
        userAddress: '', // 기본값으로 빈 문자열
        // 필요한 다른 필드도 여기에 추가
    });
    
    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
        try {
            // 백엔드 API에서 사용자 정보 가져오기
            const response = await axios.get(`/getuserInfo/${2}`); // ID를 적절히 변경
            setUserInfo(response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };
    
    // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
    useEffect(() => {
        fetchUserInfo();
    }, []);
    
    return (
        <div className='ManagementHistoryyy'>
            <Accordion alwaysOpen className='AccordionItem'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>즐겨찾기</Accordion.Header>
                    <Accordion.Body>
                        {userInfo.bookmarkId || '정보 없음'}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            &emsp;&emsp;

            <Accordion alwaysOpen className='AccordionItem'>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>내가 작성한 리뷰</Accordion.Header>
                    <Accordion.Body>
                        {userInfo.reviewId || '정보 없음'}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default ManagementHistory;
