import '../css/main.css';
import { useNavigate } from 'react-router-dom';



function Main () {


    return (
        <>
        <nav className="hot">
        <ul>
            <li><a href="/gang">강남</a></li>
            <li><a href="/hong">홍대입구</a></li>
            <li><a href="/dong">동대문</a></li>
            <li><a href="/sin">신촌</a></li>
            <li><a href="/jong">종로</a></li>
            <li><a href="/gun">건대</a></li>
            <li><a href="/myeong">명동</a></li>
        </ul>
        </nav>
        </>
    )
}
export default Main;