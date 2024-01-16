import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './component/share/Products';
import { add, remove } from './redux/actions';

export default function App() {
  const products = useSelector( store => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('https://fakestoreapi.com/products');
        let pds = await response.json();
        dispatch(add(pds));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return () => fetchData();
  }, []);
  

  return (
    <div className='container' style={{maxWidth: 500}}>
      <div className='row'>
        {
          products.map(pd => <Products key={pd.id} product={pd}/>)
        }
      </div>
    </div>
  )
}
