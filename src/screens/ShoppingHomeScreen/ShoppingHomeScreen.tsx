import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, View, ActivityIndicator, SafeAreaView } from 'react-native';
import { Divider, useTheme } from '@ui-kitten/components';
import useProducts from '../../hooks/useProducts';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ShopHeader from '../../components/ShopHeader/ShopHeader';
import ShopSearchBar from '../../components/ShopSearchBar/ShopSearchBar';
import ShopProductCard from '../../components/ShopProductCard/ShopProductCard';
import { Product } from '../../utils/interfaces';
import styles from './styles';

type HomeScreenNavigationProp = NavigationProp<{
  'Mi carrito': undefined;
  'Detalle de producto': { productId: string };
}>;

const HomeScreen: React.FC = () => {
  const { loading, products, fetchProducts } = useProducts();
  const theme = useTheme();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCartPress = () => {
    navigation.navigate('Mi carrito');
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredProducts = searchTerm.length > 0
    ? products.filter(product => product.name.toLowerCase().includes(searchTerm))
    : products;

  const renderProductItem = ({ item }: { item: Product }) => (
    <ShopProductCard
      product={item}
      onPress={() => navigation.navigate('Detalle de producto', { productId: item.id })}
    />
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={theme['color-primary-default']} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ShopHeader
        address="Monterrey, Nuevo Leon"
        cartCount={products.length}
        onCartPress={onCartPress}
      />
      <ShopSearchBar onSearch={handleSearch} />
      <FlatList<Product>
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <Divider />}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme['color-primary-default']]}
          />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
