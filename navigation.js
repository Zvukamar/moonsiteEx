import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screens from './screens';

const Navigator = createStackNavigator({
    Login: { screen: Screens.Login }
});

export default createAppContainer(Navigator);