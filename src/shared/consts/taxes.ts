import {Tax} from '../../domain/tax';

export const taxesPipeline202101: Tax[] = [
    new Tax(7.5, 0, 1100),
    new Tax(9, 1100.01, 2203.48),
    new Tax(12, 2203.49, 3305.22),
    new Tax(14, 3305.23, 6433.57),
];

export const taxesCurrentYear = taxesPipeline202101;
