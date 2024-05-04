import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Layout, Button } from '@ui-kitten/components';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import styles from './styles';

interface ShopHeaderProps {
  address: string;
  cartCount: number;
  onCartPress: () => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ address, onCartPress }) => {
  const { products } = useShoppingCart();

  const renderBadge = () => (
    products.length > 0 && (
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>{products.length}</Text>
      </View>
    )
  );

  return (
    <Layout style={styles.headerContainer}>
      <View style={styles.addressContainer}>
        <View style={styles.addressTextContainer}>
          <Text style={styles.deliveryLabel}>Dirección de entrega</Text>
          <View style={styles.positionIcon}>
            <Text style={styles.addressText}>{address}</Text>
            <Icon name="chevron-down" style={styles.locationIcon} fill="#8F9BB3" />
          </View>
        </View>
      </View>

      <View style={styles.iconsContainer}>
        <View style={styles.iconButtonContainer}>
          <Button
            appearance="ghost"
            // eslint-disable-next-line react/no-unstable-nested-components
            accessoryLeft={(props) => <Icon {...props} name="shopping-cart-outline" fill="#8F9BB3"/>}
            onPress={onCartPress}
            style={styles.iconButton}
          />
          {renderBadge()}
        </View>
      </View>
    </Layout>
  );
};

export default ShopHeader;
