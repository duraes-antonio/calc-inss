import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteName} from './src/routes/route-name';
import CalculatorScreen from './src/screens/calculator/calculator-screen';
import FAQScreen from './src/screens/faq-screen';
import ExplanationScreen from './src/screens/explanation-screen';
import BottomTabsNav from './src/shared/components/bottom-tabs-nav';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={RouteName.CALC}
                tabBar={props => <BottomTabsNav {...props} />}>
                <Tab.Screen
                    name={RouteName.CALC}
                    component={CalculatorScreen}
                />
                <Tab.Screen
                    name={RouteName.EXPLANATION}
                    component={ExplanationScreen}
                />
                <Tab.Screen name={RouteName.FAQ} component={FAQScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
