import React, {memo, useMemo, useState} from 'react';
import {ScrollView, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Aliquot, AliquotTitle, AliquotValue, styles} from './styles';
import {colors} from '../../shared/consts/style';
import {TaxesSocialSecurityForCLT202101} from '../../domain/specifications';
import MoneyValueInput, {MoneyValueInputProps} from './money-input';

const texts = {
    revenue: 'Qual sua renda?',
    tax: 'INSS total',
    aliquot: 'Aliquota efetiva',
};

interface MoneyValueProps extends MoneyValueInputProps {
    title: string;
    unit?: string;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
}

export const specTaxCalc = new TaxesSocialSecurityForCLT202101();

function MoneyValue(props: MoneyValueProps) {
    const unit = props.unit ?? 'R$';

    const Input = useMemo(
        () => (
            <MoneyValueInput
                value={props.value}
                onChangeInput={props.onChangeInput}
            />
        ),
        [props.value],
    );
    return (
        <View style={[styles.sectionMoneyValue, props.containerStyle]}>
            <Text style={[styles.sectionTitle, props.titleStyle]}>
                {props.title}
            </Text>
            <View style={styles.moneyValue}>
                <Text style={styles.unit}>{unit}</Text>
                {Input}
                <Text style={[styles.unit, {alignSelf: 'flex-end'}]}>/mês</Text>
            </View>
        </View>
    );
}

function CalculatorScreen() {
    const aliquot = 8.78888;
    const [taxValue, setTaxValue] = useState(0);
    console.log('RELOAD');
    return (
        <ScrollView style={styles.page}>
            <MoneyValue
                title={texts.revenue}
                value={3000}
                onChangeInput={v => setTaxValue(specTaxCalc.calculate(v))}
            />
            <MoneyValue
                readonly
                title={texts.tax}
                titleStyle={{color: colors.blue}}
                value={taxValue}
                containerStyle={{marginVertical: 32}}
            />
            <Aliquot>
                <AliquotTitle>{texts.aliquot}</AliquotTitle>
                <AliquotValue>
                    {aliquot.toFixed(2).replace('.', ',')}%
                </AliquotValue>
            </Aliquot>
        </ScrollView>
    );
}

export default memo(CalculatorScreen);
