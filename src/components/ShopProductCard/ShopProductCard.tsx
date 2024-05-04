import React, { useState } from 'react';
import { Image } from 'react-native';
import { Card, Text, Button, Icon } from '@ui-kitten/components';
import { IconProps } from '@ui-kitten/components';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import ShopCartModal from '../ShopCartModal/ShopCartModal';
import { Product } from '../../utils/interfaces';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface CardProps {
  product: Product;
  onPress: () => void;
}

const renderCartIcon = (props: IconProps) => (
  <Icon {...props} name="shopping-cart" />
);

const ShopProductCard: React.FC<CardProps> = ({ product, onPress }) => {
  const { addToCart } = useShoppingCart();
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    addToCart(product, (isAdded) => {
      if (!isAdded) {
        setShowModal(true);
      }
    });
  };

  return (
    <Card style={styles.cardContainer} onPress={onPress}>
      <Image
        style={styles.image}
        source={{ uri: product.imageUrl }}
        resizeMode="cover"
      />
      <Text category="h6" style={styles.productName}>{product.name}</Text>
      <Text category="s1" style={styles.price}>${product.price}</Text>
      <Button
        style={styles.button}
        accessoryLeft={renderCartIcon}
        onPress={handleAddToCart}
      >
        Agregar al carrito
      </Button>
      <ShopCartModal
        visible={showModal}
        onNavigateToCart={() => {
          navigation.navigate('Mi carrito');
          setShowModal(false);
        }}
        onDismiss={() => setShowModal(false)}
        product={product}
      />
    </Card>
  );
};

export default ShopProductCard;
