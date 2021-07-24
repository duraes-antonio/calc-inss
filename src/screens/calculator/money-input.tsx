import React, {memo, useCallback, useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export interface MoneyValueInputProps {
    value: number;
    readonly?: boolean;
    onChangeInput?: (value: number) => void;
}

function MoneyValueInput(props: MoneyValueInputProps) {
    const [value, setValue] = useState(props.value.toFixed(2));
    const onInput = useCallback(
        (text: string) => {
            const textValue = text.replace('.', '').replace(/[^0-9,]/g, '');
            setValue(textValue);
            props.onChangeInput?.(+textValue.replace(',', '.') ?? 0);
        },
        [props.onChangeInput],
    );

    useEffect(() => {
        onInput(props.value.toFixed(2).replace('.', ','));
    }, [onInput, props.value]);

    return (
        <TextInput
            editable={!props.readonly}
            keyboardType={'numeric'}
            onChangeText={onInput}
            style={[styles.value]}
            value={value}
        />
    );
}

export default memo(MoneyValueInput);
