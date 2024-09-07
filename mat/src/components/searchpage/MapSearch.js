
import { useState } from 'react';
import Map from './../map/map';
import '../css/mapsearch.css';




function MapSerach(){
    const [storeDetails , setStoreDetails] = useState()


    return(
        <div className='mapSearch-main'>
            {/* 네이버 지도 */}
            
            <div className='map-section'>
                <Map width="45%" height="500px"/>
                <div className='content'>
                    {/* 상세 정보 */}
                    <div className='details-section'>
                        <p>1</p>
                    </div>

                    {/* 메뉴 */}
                    <div className='store_menu'>
                        <p>12321</p>
                    </div>

                    {/* 상세 정보 */}
                    <div className='reviews'>
                        1
                    </div>
                </div>
            </div>

           

          
     


        </div>
    )
}

export default  MapSerach;