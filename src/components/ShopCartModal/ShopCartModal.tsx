import React from 'react';
import { Modal, Text, Button, Card } from '@ui-kitten/components';
import { View } from 'react-native';
import styles from './styles';

interface Product {
  name: string;
}

interface ShopCartModalProps {
  visible: boolean;
  onNavigateToCart: () => void;
  onDismiss: () => void;
  product: Product;
}

const ShopCartModal: React.FC<ShopCartModalProps> = ({ visible, onNavigateToCart, onDismiss, product }) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onDismiss}>
      <Card disabled={true} style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Producto ya en el carrito</Text>
        <Text style={styles.modalContent}>El producto "{product.name}" ya está en tu carrito.</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onNavigateToCart}>
            Ir al carrito
          </Button>
          <Button style={styles.button} appearance="outline" onPress={onDismiss}>
            Seguir comprando
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default ShopCartModal;
