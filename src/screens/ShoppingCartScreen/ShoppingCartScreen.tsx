import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Divider, Icon, Button } from '@ui-kitten/components';
import ShopPurchaseModal from '../../components/ShopPurchaseModal/ShopPurchaseModal';
import styles from './styles';
import { useShoppingBag } from '../../hooks/useShoppingCart';

const ShoppingCartScreen = () => {
  const {
    products,
    quantities,
    handleRemoveFromCart,
    handleUpdateQuantity,
    calculateTotalPrice,
    purchaseAlertVisible,
    purchasedProducts,
    handleBuy,
    totalSelected,
    setPurchaseAlertVisible,
    confirmPurchase,
  } = useShoppingBag();

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>El carrito está vacío.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>Precio: ${product.price}</Text>
            <Text style={styles.productPrice}>Peso: {product.dimensions.weight} KG</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                onPress={() =>
                  handleUpdateQuantity(
                    product.id,
                    quantities[product.id] ? quantities[product.id] - 1 : 0
                  )
                }
                disabled={quantities[product.id] === 0}
              >
                <Icon name="minus-circle-outline" width={24} height={24} fill="grey" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities[product.id] || 0}</Text>
              <TouchableOpacity
                onPress={() =>
                  handleUpdateQuantity(product.id, (quantities[product.id] || 0) + 1)
                }
                disabled={quantities[product.id] === product.quantity}
              >
                <Icon name="plus-circle-outline" width={24} height={24} fill="grey" />
              </TouchableOpacity>
              <Text style={styles.availableQuantity}>Stock: {product.quantity}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleRemoveFromCart(product.id)}>
          <Icon name="trash-outline" width={24} height={24} fill="grey" />
          </TouchableOpacity>
        </View>
      ))}
      <Divider style={{ marginVertical: 16 }} />
      <Text style={styles.totalText}>Total: ${calculateTotalPrice()}</Text>
      <Button appearance="filled" onPress={handleBuy} disabled={totalSelected === 0}>
      Proceder al pago
      </Button>
      <ShopPurchaseModal
        visible={purchaseAlertVisible}
        products={purchasedProducts}
        total={calculateTotalPrice()}
        onConfirm={confirmPurchase}
        onCancel={() => {
          setPurchaseAlertVisible(false);
        }}
      />
    </ScrollView>
  );
};

export default ShoppingCartScreen;
