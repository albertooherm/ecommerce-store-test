import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STRINGS from '../utils/strings';
import { Product } from '../utils/interfaces';

type ShoppingCartContextType = {
  products: Product[];
  addToCart: (product: Product, callback: (isAdded: boolean) => void) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// Provee el contexto con los productos actuales en el carrito y las funciones para modificarlo
export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Carga los productos del carrito desde almacenamiento local al iniciar la aplicacion
  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('cart');
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        }
      } catch (e) {
        console.error(STRINGS.ERROR_LOADING_CART);
      }
    };

    loadCart();
  }, []);

  // Guarda el carrito actualizado en el almacenamiento local cada vez que cambia
  useEffect(() => {
    const saveCart = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(products));
      } catch (e) {
        console.error(STRINGS.ERROR_SAVING_CART);
      }
    };

    saveCart();
  }, [products]);

  // Agrega un producto al carrito y notifica si fue agregado con exito
  const addToCart = (product: Product, callback: (isAdded: boolean) => void) => {
    const productExists = products.some(p => p.id === product.id);
    if (!productExists) {
        setProducts(prevProducts => {
          const updatedProducts = [...prevProducts, product];
          AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
          return updatedProducts;
        });
        callback(true);
    } else {
        callback(false);
    }
  };

  // Elimina un producto del carrito basado en su ID
  const removeFromCart = (productId: string) => {
    setProducts(prevProducts => {
      const updatedProducts = prevProducts.filter((product) => product.id !== productId);
      AsyncStorage.setItem('cart', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  // Limpia todos los productos del carrito
  const clearCart = () => {
    setProducts([]);
    AsyncStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <ShoppingCartContext.Provider value={{ products, addToCart, removeFromCart, clearCart  }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carrito de compras
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(STRINGS.ERROR_SHOPPING_CONTEXT);
  }

  return context;
};
