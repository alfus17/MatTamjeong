import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StoreDetails({ storeId }) {
  const [storeDetails, setStoreDetails] = useState(null);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(`/store/getStoreDetails/${storeId}`);
        setStoreDetails(response.data);
      } catch (error) {
        console.error('Error fetching store details:', error);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (!storeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{storeDetails.store.storeName}</h1>
      <p>{storeDetails.store.storeAddress}</p>
      <h2>Menu</h2>
      <ul>
        {storeDetails.menuList.map((menu, index) => (
          <li key={index}>{menu.menuName} - {menu.price}</li>
        ))}
      </ul>
      <h2>Reviews</h2>
      <ul>
        {storeDetails.reviewList.map((review, index) => (
          <li key={index}>{review.comment} - {review.rating}</li>
        ))}
      </ul>
    </div>
  );
}

export default StoreDetails;
