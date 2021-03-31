import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from '../screens/Post/PostScreen';

const Stack= createStackNavigator();

export const PostStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}