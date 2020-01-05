import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';
import Screens from './screens';

const Navigator = createStackNavigator({
    Login: { screen: Screens.Login },
    Register: { screen: Screens.Register },
    Dashboard: { screen: Screens.Dashboard }
});


export default createAppContainer(Navigator);

export const ScreenNames = {
    Login: 'Login',
    Register: 'Register',
    Dashboard: 'Dashboard'
};

export const navigateToDashboard = (navigation) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: ScreenNames.Dashboard })],
    });
    navigation.dispatch(resetAction);
}