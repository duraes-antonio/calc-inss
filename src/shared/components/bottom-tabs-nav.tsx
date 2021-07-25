import React, {memo} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {StyleSheet, View} from 'react-native';
import {RouteName} from '../../routes/route-name';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../consts/style';

function getColorIcon(iconRoute: RouteName, currentRoute: RouteName): string {
    return currentRoute === iconRoute ? colors.yellow : colors.icon;
}

function BottomTabsNav(props: BottomTabBarProps) {
    const {state, navigation} = props;
    const route: RouteName = state.routes.find((r, i) => i === state.index)
        ?.name as RouteName;
    const onPress = (r: RouteName) => navigation.navigate(r);
    const config = {
        size: 24,
        style: {
            paddingTop: 18,
            paddingBottom: 13,
            paddingHorizontal: 20,
        },
    };
    const styles = StyleSheet.create({
        bar: {
            backgroundColor: 'white',
            borderRadius: 15,
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignSelf: 'center',
            justifyContent: 'space-between',
            elevation: 7,
            shadowColor: 'rgba(0,0,0,.3)',
            position: 'absolute',
            bottom: 21,
        },
    });
    return (
        <View style={styles.bar}>
            <IconMaterialCommunity
                {...config}
                onPress={() => onPress(RouteName.CALC)}
                name={'calculator'}
                color={getColorIcon(RouteName.CALC, route)}
            />
            <IconMaterialCommunity
                {...config}
                onPress={() => onPress(RouteName.EXPLANATION)}
                name={'brightness-percent'}
                color={getColorIcon(RouteName.EXPLANATION, route)}
            />
            <IconAntDesign
                {...config}
                onPress={() => onPress(RouteName.FAQ)}
                name={'questioncircle'}
                color={getColorIcon(RouteName.FAQ, route)}
            />
        </View>
    );
}

export default memo(BottomTabsNav);
