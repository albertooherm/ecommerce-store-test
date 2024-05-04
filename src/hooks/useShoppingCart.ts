import { useCallback, useEffect, useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const useShoppingBag = () => {
  const { products, removeFromCart, clearCart } = useShoppingCart();
  const navigation = useNavigation();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [purchaseAlertVisible, setPurchaseAlertVisible] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState<
    { name: string; image: string; quantity: number; price: number; }[]
  >([]);
  const [totalSelected, setTotalSelected] = useState(0);

  useEffect(() => {
    setTotalSelected(Object.values(quantities).reduce((sum, current) => sum + current, 0));
  }, [quantities]);

  const handleRemoveFromCart = useCallback((productId: string) => {
    removeFromCart(productId);
    const newQuantities = { ...quantities };
    delete newQuantities[productId];
    setQuantities(newQuantities);
  }, [quantities, removeFromCart]);

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    const availableQuantity = products.find(product => product.id === productId)?.quantity || 0;
    setQuantities(prev => ({ ...prev, [productId]: Math.min(Math.max(quantity, 0), availableQuantity) }));
  }, [products]);

  const calculateTotalPrice = useCallback(() => {
    return products.reduce((total, product) => {
      const quantity = quantities[product.id] || 0;
      return total + (product.price * quantity);
    }, 0).toFixed(2);
  }, [products, quantities]);

  const handleBuy = useCallback(() => {
    const purchasedItems = products.filter(product => quantities[product.id] > 0).map(product => ({
      name: product.name,
      image: product.imageUrl,
      quantity: quantities[product.id],
      price: product.price * quantities[product.id],
    }));
    setPurchasedProducts(purchasedItems);
    setPurchaseAlertVisible(true);
  }, [products, quantities]);

  const confirmPurchase = useCallback(() => {
    const totalPurchase = purchasedProducts.reduce((total, item) => total + item.price, 0);
    AsyncStorage.getItem('purchaseHistory').then(history => {
      const newHistory = history ? JSON.parse(history) : [];
      newHistory.push({
        items: purchasedProducts,
        total: totalPurchase.toFixed(2),
        date: new Date().toISOString(),
      });
      AsyncStorage.setItem('purchaseHistory', JSON.stringify(newHistory));
    });
    clearCart();
    setQuantities({});
    setPurchasedProducts([]);
    setPurchaseAlertVisible(false);
    navigation.navigate('Tickets');
  }, [purchasedProducts, clearCart, navigation]);

  return {
    products,
    quantities,
    totalSelected,
    handleRemoveFromCart,
    handleUpdateQuantity,
    calculateTotalPrice,
    purchaseAlertVisible,
    purchasedProducts,
    handleBuy,
    confirmPurchase,
    setPurchaseAlertVisible,
  };
};
