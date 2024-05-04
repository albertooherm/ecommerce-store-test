import React from 'react';
import { ScrollView, View, Text, Image, ActivityIndicator, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Layout, Card } from '@ui-kitten/components';
import useProductDetails from '../../hooks/useProductDetails';
import styles from './styles';

const ProductDetailScreen: React.FC = () => {
  const route = useRoute<any>();
  const { productId } = route.params;
  const { loading, productDetails } = useProductDetails(productId);

  if (loading) {
    return <View style={styles.centered}><ActivityIndicator size="large" color="#3366FF" /></View>;
  }

  if (!productDetails) {
    return <View style={styles.centered}><Text>No data available.</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: productDetails.imageUrl }} style={styles.image} resizeMode="cover" />
      <Layout style={styles.detailsContainer}>
        <Text style={styles.title}>{productDetails.name}</Text>
        <Text style={styles.price}>${productDetails.price} MXN</Text>
        <Text style={styles.details}>Descripción: {productDetails.description}</Text>
        <Text style={styles.details}>Peso: {productDetails.dimensions.weight} {productDetails.units.weight}</Text>
        <Text style={styles.details}>SKU: {productDetails.sku}</Text>
        <Text style={styles.details}>Disponibles: {productDetails.quantity}</Text>
        <FlatList
          data={productDetails.variants}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.variantCard}>
              <Text style={styles.variantText}>Variante: {item.name}</Text>
              <Text style={styles.variantText}>Precio: ${item.price}</Text>
              <Text style={styles.variantText}>Disponibles: {item.inventory.quantity}</Text>
            </Card>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.variantList}
        />
      </Layout>
    </ScrollView>
  );
};

export default ProductDetailScreen;
