import Accordion from 'react-bootstrap/Accordion';
import '../css/manageHistory.css';

function ManagementHistory() {
  return (
    <Accordion alwaysOpen className='ManagementHistoryyy'>

        <Accordion.Item eventKey="0">
            <Accordion.Header>즐겨찾기</Accordion.Header>
            <Accordion.Body>
                AAA
            </Accordion.Body>
        </Accordion.Item>

        <br></br>

        <Accordion.Item eventKey="1">
            <Accordion.Header>좋아요</Accordion.Header>
            <Accordion.Body>
                BBB
            </Accordion.Body>
        </Accordion.Item>

        <br></br>

        <Accordion.Item eventKey="2">
            <Accordion.Header>최근 방문한 음식점</Accordion.Header>
            <Accordion.Body>
                CCC
            </Accordion.Body>
        </Accordion.Item>

    </Accordion>
  );
}

export default ManagementHistory;