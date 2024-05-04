import React from 'react';
import { Modal, Text, Button, Card } from '@ui-kitten/components';
import { Image, View } from 'react-native';
import styles from './styles';

interface Product {
  name: string;
  image: string;
  quantity: number;
}

interface ShopPurchaseModalProps {
  visible: boolean;
  products: Product[];
  onConfirm: () => void;
  onCancel: () => void;
  total: number;
}

const ShopPurchaseModal: React.FC<ShopPurchaseModalProps> = ({ visible, products, onConfirm, onCancel, total }) => {

  const renderProducts = (): JSX.Element[] => {
    return products.map((product, index) => (
      <View key={index} style={styles.productItem}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productQuantity}>x{product.quantity}</Text>
      </View>
    ));
  };

  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onCancel}>
      <Card disabled={true} style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.modalTitle}>Confirmación de compra</Text>
        </View>
        <View style={styles.productList}>{renderProducts()}</View>
        <Text style={styles.totalPrice}>Total a pagar: ${total}</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} appearance="outline" onPress={onCancel}>
            Cancelar
          </Button>
          <Button style={styles.button} appearance="filled" onPress={onConfirm}>
            Pagar ahora
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default ShopPurchaseModal;
