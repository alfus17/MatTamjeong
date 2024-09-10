import '../css/aboutMe.css';

import Table from 'react-bootstrap/Table';

function AboutMe() {
  return (
    <Table striped className='aboutMeeee'>
      <tbody>
        <h2>내 정보</h2>
        <tr>
          <td className="head">이름</td>
          <td className="body">어그래</td>
        </tr>
        <tr>
          <td className="head">생년월일</td>
          <td className="body">2024-09-10</td>
        </tr>
        <tr>
          <td className="head">이메일</td>
          <td className="body">asd@asd.com</td>
        </tr>
        <tr>
          <td className="head">가입일</td>
          <td className="body">2024-09-09</td>
        </tr>
      </tbody>
    </Table>
  );
}


export default AboutMe;