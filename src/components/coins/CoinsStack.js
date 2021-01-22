import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';

const Stack = createStackNavigator();
import CoinDetailsScreen from './CoinDetailsScreen';


const CoinsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="DSM-54"  
            component={CoinsScreen}
            />

            <Stack.Screen 
            name="CoinDetailsScreen"  
            component={CoinDetailsScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;