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

    const Input = useMemo(() => <MoneyValueInput {...props} />, [props.value]);
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
    const [taxValue, setTaxValue] = useState(0);
    const [aliquot, setAliquot] = useState(0);
    const initialIncome = 3000;
    return (
        <ScrollView style={styles.page}>
            <MoneyValue
                title={texts.revenue}
                value={initialIncome}
                onChangeInput={v => {
                    setTaxValue(specTaxCalc.calculate(v));
                    setAliquot((specTaxCalc.calculate(v) / v) * 100);
                }}
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
