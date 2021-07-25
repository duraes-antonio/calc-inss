import styled from 'styled-components/native';
import {colors, FontRoboto} from '../../shared/consts/style';

const fontSize = 14;

export const ExampleContainer = styled.View`
    min-width: 100%;
`;

export const RegularText = styled.Text`
    font-size: ${fontSize}px;
    color: ${colors.label};
    font-family: ${FontRoboto.REGULAR};
`;

export const BoldText = styled(RegularText)`
    font-family: ${FontRoboto.BOLD};
`;

export const LineText = styled.View`
    flex-direction: row;
`;

export const ResultTitle = styled(RegularText)`
    font-family: ${FontRoboto.MEDIUM};
    font-size: ${fontSize + 2}px;
`;

export const ResultValue = styled(ResultTitle)`
    color: ${colors.green};
    font-size: ${fontSize + 4}px;
`;

export const ResultsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
`;

export const ResultContainer = styled.View`
    align-items: center;
`;
