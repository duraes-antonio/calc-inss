export interface FormatCurrencyProps {
    value: number;
    decimals?: number;
    thousandSep?: string;
    centsSep?: string;
    symbol?: string | null;
}

export const formatCurrency = (props: FormatCurrencyProps) => {
    const defaultProps: Required<FormatCurrencyProps> = {
        value: props.value,
        symbol: props.symbol !== null ? 'R$ ' : '',
        centsSep: props.centsSep ?? ',',
        decimals: props.decimals ?? 2,
        thousandSep: props.thousandSep ?? '.',
    };
    const formated = defaultProps.value
        .toFixed(defaultProps.decimals)
        .replace('.', defaultProps.centsSep)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${defaultProps.thousandSep}`);
    return defaultProps.symbol ? defaultProps.symbol + formated : formated;
};

export const applyPercent = (value: number, percentage: number, decimals = 2) =>
    +((value * percentage) / 100).toFixed(decimals);

export const getPercentage = (fraction: number, total: number, decimals = 2) =>
    +((fraction / total) * 100).toFixed(decimals);
