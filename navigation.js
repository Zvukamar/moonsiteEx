import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StackActions, NavigationActions } from 'react-navigation';
import Screens from './screens';

const Navigator = createStackNavigator({
    Login: { screen: Screens.Login },
    Register: { screen: Screens.Register },
    Dashboard: { screen: Screens.Dashboard },
    UploadPost: { screen: Screens.UploadPost, navigationOptions: { title: 'New Post' } }
});


export default createAppContainer(Navigator);

export const ScreenNames = {
    Login: 'Login',
    Register: 'Register',
    Dashboard: 'Dashboard',
    UploadPost: 'UploadPost'
};

export const navigateToDashboard = (navigation) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: ScreenNames.Dashboard })],
    });
    navigation.dispatch(resetAction);
}

export const navigateTo = (navigation, screenName, params) => {
    navigation.navigate(screenName, params);
}