import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingHomeScreen from '../screens/ShoppingHomeScreen/ShoppingHomeScreen';
import ShoppingProductDetailScreen from '../screens/ShoppingProductDetailScreen/ShoppingProductDetailScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="ShopHomeStack">
      <HomeStack.Screen name="Productos" component={ShoppingHomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Detalle de producto" component={ShoppingProductDetailScreen} options={{ headerShown: true }} />
      <HomeStack.Screen name="Mi carrito" component={ShoppingCartScreen} options={{ headerShown: true }} />
    </HomeStack.Navigator>
  );
};
