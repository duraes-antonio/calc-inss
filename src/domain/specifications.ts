import {Tax} from './tax';

export interface TaxesSocialSecurityForCLT {
    /***
     * Cálcula o valor de tributação para previdência sob uma renda;
     * @param income Valor da renda a ser tributado
     * @returns Valor absoluto dos tributos
     */
    calculate(income: number): number;
}

export class TaxesSocialSecurityForCLT202101
    implements TaxesSocialSecurityForCLT
{
    readonly #taxesPipeline: Tax[] = [
        new Tax(7.5, 0, 1100),
        new Tax(9, 1100.01, 2203.48),
        new Tax(12, 2203.49, 3305.22),
        new Tax(14, 3305.23, 6433.57),
    ];

    calculate(income: number): number {
        return this.#taxesPipeline
            .filter(t => income >= t.minTaxableAmount)
            .reduce((sumTax, t) => {
                const tributable =
                    income <= t.maxTaxableAmount ? income : t.maxTaxableAmount;
                return (
                    sumTax +
                    ((tributable - t.minTaxableAmount) * t.taxPercent) / 100
                );
            }, 0);
    }
}
