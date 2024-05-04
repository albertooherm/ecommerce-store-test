import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, Icon, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { routeConfig } from './src/routes/routes';
import { ShoppingCartProvider } from './src/context/ShoppingCartContext';

const Tab = createBottomTabNavigator();

const createTabIcon = (iconName: string) => ({ color, size }: { color: string; size: number }) => (
  <Icon name={iconName} fill={color} style={{ width: size, height: size }} />
);

const App: React.FC = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <ShoppingCartProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => (
                createTabIcon(routeConfig[route.name].icon)({ color, size })
              ),
              tabBarShowLabel: true,
              headerShown: false,
              tabBarActiveTintColor: '#3366ff',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            {Object.entries(routeConfig).map(([name, { screen, title }]) => (
              <Tab.Screen
                key={name}
                name={name}
                component={screen}
                options={{ title }}
              />
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </ShoppingCartProvider>
    </ApplicationProvider>
  );
};

export default App;
