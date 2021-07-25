import React, {memo} from 'react';
import {taxesCurrentYear} from '../../shared/consts/taxes';
import {Tax} from '../../domain/tax';
import {
    applyPercent,
    formatCurrency,
    getPercentage,
} from '../../shared/functions/format';
import {
    BoldText,
    ExampleContainer,
    LineText,
    RegularText,
    ResultContainer,
    ResultsContainer,
    ResultTitle,
    ResultValue,
} from './styles';
import {specTaxCalc} from '../calculator/calculator-screen';
import {ViewStyle} from 'react-native';

const formatTaxLine = (
    taxPercent: number,
    result: number,
    max: number,
    min?: number,
) => {
    const resultFormated = formatCurrency({value: result});
    const taxFormated = `${taxPercent}%`.replace('.', ',');
    const symbol = null;
    const maxFormated = formatCurrency({value: max, symbol});
    const calcBase = min
        ? `(${maxFormated} - ${formatCurrency({
              value: min,
              symbol,
          })})`
        : maxFormated;
    return calcBase + ` x ${taxFormated} = ${resultFormated}`;
};

const formatDiscountTax = (t: Tax, income: number) => {
    const maxTaxable = Math.min(income, t.maxTaxableAmount);
    return formatTaxLine(
        t.taxPercent,
        applyPercent(maxTaxable - t.minTaxableAmount, t.taxPercent),
        maxTaxable,
        t.minTaxableAmount > 0 ? t.minTaxableAmount : undefined,
    );
};

function ExampleSteps(props: {income: number; style: ViewStyle}) {
    const applicableTaxes = taxesCurrentYear.filter(
        t => props.income >= t.minTaxableAmount,
    );
    const sumTaxes = specTaxCalc.calculate(props.income);
    return (
        <ExampleContainer style={props.style}>
            {applicableTaxes.map((t, i) => (
                <LineText key={i.toString()}>
                    <BoldText>{i + 1}ª faixa: </BoldText>
                    <RegularText>
                        {formatDiscountTax(t, props.income)}
                    </RegularText>
                </LineText>
            ))}
            <ResultsContainer>
                <ResultContainer>
                    <ResultTitle>Total a recolher</ResultTitle>
                    <ResultValue>
                        {formatCurrency({value: sumTaxes})}
                    </ResultValue>
                </ResultContainer>
                <ResultContainer>
                    <ResultTitle>Alíquota efetiva</ResultTitle>
                    <ResultValue>
                        {getPercentage(sumTaxes, props.income)}%
                    </ResultValue>
                </ResultContainer>
            </ResultsContainer>
        </ExampleContainer>
    );
}

export default memo(ExampleSteps);
