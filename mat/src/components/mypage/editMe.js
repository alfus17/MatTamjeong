// 닉네임, 아이디, 비밀번호, 이메일 등을 변경하는 페이지

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/editMe.css';

function EditMe() {
  return (
    <div className='EditMeee'>
        
        <h3>내 정보 수정하기</h3>

        <br></br>

        <InputGroup className='EditMeeeA'>
            <Form.Control
            placeholder="이름"
            />
            <Button variant="outline-secondary" id="button-addon2">
            수정
            </Button>
        </InputGroup>
        
            <br></br>

        <InputGroup className='EditMeeeA'>
            <Form.Control
            placeholder="이메일"
            type='email'
            />
            <Button variant="outline-secondary" id="button-addon2">
            수정
            </Button>
        </InputGroup>
        
        <br></br>

        <InputGroup className='EditMeeeA'>
            <Form.Control
            placeholder="비밀번호"
            type='password'
            />
            <Button variant="outline-secondary" id="button-addon2">
            수정
            </Button>
        </InputGroup>
    </div>
  );
}

export default EditMe;