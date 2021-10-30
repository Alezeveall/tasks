import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './screens/Auth';
import TaskList from './screens/TaskList';

import AuthOrApp from './screens/AuthOrApp';
import Menu from './screens/Menu';

const Drawer = createDrawerNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator headerShown="false" initialRouteName="Home">
        <Drawer.Screen name="Home" component={Auth} />
        <Drawer.Screen name="Hoje">
          {props => <TaskList title="Hoje" daysAhead={0} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Amanhã">
          {props => <TaskList title="Amanhã" daysAhead={1} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Semana">
          {props => <TaskList title="Semana" daysAhead={7} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Mês">
          {props => <TaskList title="Mês" daysAhead={30} {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
