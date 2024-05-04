import { HomeStackNavigator } from '../navigators/navigators';
import ShoppingProfileScreen from '../screens/ShoppingProfileScreen/ShoppingProfileScreen';
import ShoppingTicketsScreen from '../screens/ShoppingTicketsScreen/ShoppingTicketsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';

interface RouteConfig {
  [key: string]: {
    screen: React.ComponentType<any>;
    icon: string;
    title: string;
  };
}

export const routeConfig: RouteConfig = {
    Home: {
        screen: HomeStackNavigator,
        icon: 'home-outline',
        title: 'Productos',
      },
      Tickets: {
        screen: ShoppingTicketsScreen,
        icon: 'archive-outline',
        title: 'Compras',
      },
      Cart: {
        screen: ShoppingCartScreen,
        icon: 'shopping-cart-outline',
        title: 'Carrito',
      },
      Profile: {
        screen: ShoppingProfileScreen,
        icon: 'person-outline',
        title: 'Perfil',
      },
};
