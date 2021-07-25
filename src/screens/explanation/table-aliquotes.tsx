import React, {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import {colors, FontRoboto} from '../../shared/consts/style';
import {taxesCurrentYear} from '../../shared/consts/taxes';
import {formatCurrency} from '../../shared/functions/format';
import {Tax} from '../../domain/tax';

const startPadding = 16;

const styleText = StyleSheet.create({
    baseText: {
        color: colors.commomText,
        marginHorizontal: startPadding,
        marginTop: 4,
        marginVertical: 6,
        fontSize: 14,
        fontFamily: FontRoboto.REGULAR,
    },
});

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        overflow: 'hidden',
        height: 200,
    },
    border: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
    },
    head: {
        backgroundColor: colors.green,
    },
    headText: {
        ...styleText.baseText,
        color: 'white',
        fontFamily: FontRoboto.MEDIUM,
    },
    bodyText: {...styleText.baseText},
});

const formatSalaryRange = (t: Tax) =>
    (t.minTaxableAmount
        ? `de ${formatCurrency({value: t.minTaxableAmount, symbol: null})} `
        : '') +
    `até ${formatCurrency({value: t.maxTaxableAmount, symbol: null})}`;

const state = {
    tableHead: ['Faixa salarial (R$)', 'Aliquota (taxa)'],
    tableData: taxesCurrentYear.map(t => [
        formatSalaryRange(t),
        `${t.taxPercent}%`.replace('.', ','),
    ]),
};

function TableAliquotes(props: {style: ViewStyle}) {
    return (
        <View style={[styles.container, props.style]}>
            <Table borderStyle={styles.border}>
                <Row
                    data={state.tableHead}
                    style={styles.head}
                    textStyle={styles.headText}
                />
                <Rows data={state.tableData} textStyle={styles.bodyText} />
            </Table>
        </View>
    );
}

export default memo(TableAliquotes);
