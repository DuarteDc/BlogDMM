import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from '../screens/Post/PostScreen';

const Stack= createStackNavigator();

export const PostStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Productos" component={PostScreen} />
        </Stack.Navigator>
    );
}