import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@ui-kitten/components';
import styles from './styles';

type PurchaseItem = {
  name: string;
  quantity: number;
  price: number;
};

type Purchase = {
  date: string;
  items: PurchaseItem[];
  total: string;
};

const ShoppingTicketsScreen = () => {
  const [history, setHistory] = useState<Purchase[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setRefreshing(true);
    const data = await AsyncStorage.getItem('purchaseHistory');
    const historyData = data ? JSON.parse(data) : [];
    setHistory(historyData);
    setRefreshing(false);
  };

  const handleDelete = async (date: string) => {
    const newHistory = history.filter(item => item.date !== date);
    await AsyncStorage.setItem('purchaseHistory', JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  const renderEmptyComponent = () => (
    <View style={styles.centered}>
      <Text>No tienes tickets de compra guardados.</Text>
    </View>
  );

  return (
    <FlatList
      data={history}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.dateText}>Fecha de compra: {new Date(item.date).toLocaleDateString()}</Text>
          {item.items.map((subItem, idx) => (
            <Text key={idx} style={styles.itemText}>
              {subItem.name} - {subItem.quantity} x ${subItem.price.toFixed(2)}
            </Text>
          ))}
          <Text style={styles.totalText}>Total: ${item.total}</Text>
          <Button style={styles.deleteButton} onPress={() => handleDelete(item.date)}>
            Eliminar
          </Button>
        </View>
      )}
      refreshing={refreshing}
      onRefresh={loadHistory}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
};

export default ShoppingTicketsScreen;
