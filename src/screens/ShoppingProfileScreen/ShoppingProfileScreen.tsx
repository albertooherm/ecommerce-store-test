import React from 'react';
import { Layout, Text, Avatar, ListItem, Icon, Divider, Toggle, Button, useTheme } from '@ui-kitten/components';
import { SectionList, View, SectionListData } from 'react-native';

interface ListItemData {
  name: string;
  icon: string;
}

interface SectionData {
  title: string;
  name: string;
  data: ListItemData[];
}


const ShoppingProfileScreen: React.FC = () => {
  const theme = useTheme();

  const renderIcon = (name: string) => (
    <Icon name={name} style={{ width: 22, height: 22, tintColor: theme['color-primary-500'] }} />
  );

  const renderItemAccessory = (item: ListItemData) => {
    if (item.name === 'Modo Oscuro') {
      return <Toggle checked={true} onChange={() => {}} />;
    } else {
      return <Icon name="chevron-right" style={{ width: 22, height: 22, tintColor: theme['color-primary-500'] }} />;
    }
  };

  const sections: SectionListData<SectionData>[] = [
    { title: 'General', data: [
      { name: 'Mis Pedidos', icon: 'shopping-cart-outline' },
      { name: 'Cupones', icon: 'gift-outline' },
    ]},
    { title: 'Configuración de Cuenta', data: [
      { name: 'Direcciones', icon: 'map-outline' },
      { name: 'Métodos de Pago', icon: 'credit-card-outline' },
    ]},
    { title: 'Configuración de Aplicación', data: [
      { name: 'Modo Oscuro', icon: 'moon-outline' },
      { name: 'Idioma', icon: 'globe-2-outline' },
      { name: 'Notificaciones', icon: 'bell-outline' },
    ]},
    { title: 'Soporte', data: [
      { name: 'Centro de Ayuda', icon: 'question-mark-circle-outline' },
      { name: 'Seguridad', icon: 'shield-outline' },
    ]},
  ];

  return (
    <Layout style={{ flex: 1, backgroundColor: theme['background-basic-color-1'] }}>
      <Layout style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingHorizontal: 16 }}>
        <Avatar
          size="giant"
          source={{ uri: 'https://images.pexels.com/photos/66216/pexels-photo-66216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
        />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text category="h5">Alberto Hermosillo</Text>
          <Text category="s1">+52 8100149837</Text>
        </View>
        <Button appearance="ghost" size="small" accessoryLeft={() => renderIcon('edit-2-outline')}>
          Editar
        </Button>
      </Layout>
      <Divider />
      <SectionList<SectionData>
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            accessoryLeft={() => renderIcon(item.icon)}
            accessoryRight={() => renderItemAccessory(item)}
            onPress={() => console.log('Item clicked:', item.name)}
            style={{ borderBottomWidth: 1, borderBottomColor: theme['border-basic-color-4'] }}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ paddingVertical: 10, backgroundColor: theme['background-basic-color-2'] }}>
            <Text category="s1" style={{ marginLeft: 16, fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Layout>
  );
};

export default ShoppingProfileScreen;
