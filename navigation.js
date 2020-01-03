import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screens from './screens';

const Navigator = createStackNavigator({
    LoginScreen: { screen: Screens.Login },
    RegisterScreen: { screen: Screens.Register }
});


export default createAppContainer(Navigator);

export const ScreenNames = {
    LoginScreen: 'LoginScreen',
    RegisterScreen: 'RegisterScreen'
};