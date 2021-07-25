import styled from 'styled-components/native';
import {colors, FontRoboto} from '../../shared/consts/style';
import {StyleSheet} from 'react-native';
import {styles} from '../calculator/styles';

const borderRadius = 20;

export const questionStyles = StyleSheet.create({
    pageTitle: {
        ...styles.sectionTitle,
        alignSelf: 'center',
        marginBottom: 24,
    },
});

export const CollapsibleHeader = styled.TouchableOpacity`
    background-color: ${colors.collapsibleHeader};
    padding: 9px 12px;
    border-radius: ${borderRadius}px;
    border-bottom-left-radius: ${props => (props?.open ? 0 : borderRadius)}px;
    border-bottom-right-radius: ${props => (props?.open ? 0 : borderRadius)}px;
`;
export const CollapsibleBody = styled.TouchableOpacity`
    background-color: ${colors.collapsibleBody};
    padding: 11px 12px;
    border-bottom-left-radius: ${borderRadius}px;
    border-bottom-right-radius: ${borderRadius}px;
`;
export const CollapsibleHeaderText = styled.Text`
    color: ${colors.label};
    font-family: ${FontRoboto.MEDIUM};
    font-size: 14px;
`;
export const CollapsibleBodyText = styled.Text`
    color: ${colors.label};
    font-family: ${FontRoboto.REGULAR};
    font-size: 13px;
    line-height: 18px;
`;
