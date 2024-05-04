import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../utils/interfaces';
import STRINGS from '../utils/strings';

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ';
      const response = await axios.get('https://eshop-deve.herokuapp.com/api/v2/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error(STRINGS.ERROR_FETCH_PRODUCTS, error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { loading, products, fetchProducts };
};

export default useProducts;
