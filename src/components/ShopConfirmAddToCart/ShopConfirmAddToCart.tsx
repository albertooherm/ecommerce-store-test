import React from 'react';
import { Modal, Text, Button, Card, Layout } from '@ui-kitten/components';
import styles from './styles';


interface Product {
  name: string;
}

interface ShopConfirmAddToCartProps {
  visible: boolean;
  onNavigateToCart: () => void;
  onContinueShopping: () => void;
  product: Product;
}

const ShopConfirmAddToCart: React.FC<ShopConfirmAddToCartProps> = ({ visible, onNavigateToCart, onContinueShopping, product }) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onContinueShopping}>
      <Card disabled={true} style={styles.modalContainer}>
        <Text style={styles.modalTitle}>¡Producto Agregado!</Text>
        <Text style={styles.modalContent}>El producto "{product.name}" ha sido agregado a tu carrito.</Text>
        <Layout style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onNavigateToCart}>
            Ir al carrito
          </Button>
          <Button style={styles.secondaryButton} onPress={onContinueShopping}>
            Seguir comprando
          </Button>
        </Layout>
      </Card>
    </Modal>
  );
};

export default ShopConfirmAddToCart;
