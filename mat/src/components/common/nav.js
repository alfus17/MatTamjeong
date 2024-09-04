import '../css/nav.css';

function Navba() {
    return (
        <nav className="navbar">
        <ul>
            <li><a href="/"><h4>메인 홈페이지</h4></a></li>
            <li><a href="/Map">지도</a></li>
            <li><a href="/Title">리뷰 게시판</a></li>
            <li><a href="#Cart">Cart</a></li>
        </ul>
    </nav>
    )
}
export default Navba;