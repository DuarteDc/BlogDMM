/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack} from '../MyBlog/src/navigator/stacks/HomeStack';
import {CategoriesStack} from '../MyBlog/src/navigator/stacks/CategoriesStack';
import {PostStack} from '../MyBlog/src/navigator/stacks/PostStack';
import {InfoStack} from '../MyBlog/src/navigator/stacks/InfoStack';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={HomeStack}
           options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#F32A64'} size={35} />
            ),
          }}
          />
          <Tab.Screen name="Categorias" component={CategoriesStack} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="new-box" color={'#F32A64'} size={35} />
              ),
            }}
          />
          <Tab.Screen name="Post" component={PostStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={35} />
                ),
              }}
          />
            <Tab.Screen name="Info" component={InfoStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="information" color={'#F32A64'} size={35} />
                ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
  
}
 

 

  