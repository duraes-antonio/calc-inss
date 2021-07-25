import React, {memo} from 'react';
import Page from '../../shared/components/page';
import styled from 'styled-components/native';
import {colors, FontRoboto} from '../../shared/consts/style';
import ExampleSteps from './example-steps';
import {formatCurrency} from '../../shared/functions/format';
import TableAliquotes from './table-aliquotes';

const SectionTitle = styled.Text`
    font-size: 20px;
    color: ${colors.label};
    font-family: ${FontRoboto.MEDIUM};
    text-align: center;
`;

const SectionDescription = styled.Text`
    font-size: 15px;
    color: ${colors.label};
    font-family: ${FontRoboto.REGULAR};
    line-height: 18px;
    min-width: 100%;
    margin-top: 16px;
`;

const income = 2500;

const texts = {
    pageTitle: 'Como o cálculo é feito?',
    exampleTitle: `Exemplo prático (${formatCurrency({value: income})})`,
    introduction:
        'O cálculo é realizado aplicando desconto de acordo com a faixa (ver tabela abaixo) que o salário pertence.',
    calcDescription: `Como o salário de R$${income} se enquadra na 3ª faixa, o cálculo de tributo termina nessa faixa. Se ultrapassasse o limite de R$3.305,22, também descontaria a 4ª faixa (última).`,
};

function ExplanationScreen() {
    return (
        <Page>
            <SectionTitle>{texts.pageTitle}</SectionTitle>
            <SectionDescription>{texts.introduction}</SectionDescription>
            <TableAliquotes style={{marginTop: 16, marginBottom: 26}} />

            <SectionTitle>{texts.exampleTitle}</SectionTitle>
            <ExampleSteps income={income} style={{marginTop: 16}} />
            <SectionDescription>{texts.calcDescription}</SectionDescription>
        </Page>
    );
}

export default memo(ExplanationScreen);
