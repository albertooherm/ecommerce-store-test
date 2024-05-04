import { useState, useEffect } from 'react';
import axios from 'axios';
import STRINGS from '../utils/strings';
import { Product } from '../utils/interfaces';

const useProductDetails = (productId: string) => {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ';
        const response = await axios.get(`https://eshop-deve.herokuapp.com/api/v2/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductDetails(response.data.product);
        setLoading(false);
      } catch (error) {
        console.error(STRINGS.ERROR_FETCH_PRODUCTS_DETAIL, error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return { loading, productDetails };
};

export default useProductDetails;
