import {StyleSheet} from 'react-native';
import {colors, FontRoboto} from '../../shared/consts/style';
import styled from 'styled-components/native';

const titleFontSize = 36;

export const styles = StyleSheet.create({
    sectionMoneyValue: {
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: FontRoboto.MEDIUM,
        color: colors.label,
        marginBottom: 12,
    },
    moneyValue: {flexDirection: 'row'},
    unit: {
        fontSize: 18,
        fontFamily: FontRoboto.REGULAR,
        color: colors.icon,
        lineHeight: titleFontSize,
    },
    value: {
        fontSize: titleFontSize,
        fontFamily: FontRoboto.BOLD,
        color: colors.commomText,
        paddingHorizontal: 10,
        lineHeight: titleFontSize,
    },
});

export const AliquotTitle = styled.Text`
    color: ${colors.label};
    font-family: ${FontRoboto.MEDIUM};
    font-size: 18px;
`;

export const AliquotValue = styled.Text`
    color: ${colors.green};
    font-family: ${FontRoboto.BOLD};
    font-size: 24px;
`;

export const Aliquot = styled.View`
    align-items: center;
`;
