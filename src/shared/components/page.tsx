import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import BackgroundGreenSvg from '../../../assets/vectors/background-green.svg';
import BackgroundYellowSvg from '../../../assets/vectors/background-yellow.svg';
import {AdMobBanner, setTestDeviceIDAsync} from 'expo-ads-admob';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        height,
    },
    left: {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: [{scaleX: -1}, {scaleY: -1}],
        color: 'red',
    },
    right: {
        position: 'absolute',
        right: 0,
        bottom: -20,
    },
    containerCenter: {
        paddingHorizontal: 24,
    },
});

function Page(props: {children: React.ReactNode}) {
    useEffect(() => {
        (async () => await setTestDeviceIDAsync('EMULATOR'))();
    }, []);
    return (
        <>
            <AdMobBanner
                bannerSize="smartBannerLandscape"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds={true}
                onDidFailToReceiveAdWithError={e => console.log(e)}
            />
            <View style={styles.page}>
                <BackgroundYellowSvg style={styles.left} />
                <BackgroundGreenSvg style={styles.right} />
                <ScrollView style={{height, marginVertical: 80}}>
                    <View style={styles.containerCenter}>{props.children}</View>
                </ScrollView>
            </View>
        </>
    );
}

export default memo(Page);
