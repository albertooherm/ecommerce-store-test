import React from 'react';
import { View } from 'react-native';
import { Icon, Input, Layout } from '@ui-kitten/components';
import styles from './styles';

interface ShopSearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const ShopSearchBar: React.FC<ShopSearchBarProps> = ({ onSearch }) => {
  return (
    <Layout style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Input
          placeholder="Buscar productos..."
          // eslint-disable-next-line react/no-unstable-nested-components
          accessoryLeft={(props) => <Icon {...props} name="search-outline" />}
          onChangeText={onSearch}
          returnKeyType="search"
        />
      </View>
    </Layout>
  );
};

export default ShopSearchBar;
