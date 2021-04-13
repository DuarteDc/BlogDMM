import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InfoScreen from '../screens/Info/InfoScreen';

const Stack=createStackNavigator();

export const InfoStack=()=>{
    return(
        <Stack.Navigator>
                <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
    )
}   