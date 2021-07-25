import {taxesCurrentYear} from '../shared/consts/taxes';

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
    calculate(income: number, decimals = 2): number {
        return +taxesCurrentYear
            .filter(t => income >= t.minTaxableAmount)
            .reduce((sumTax, t) => {
                const tributable =
                    income <= t.maxTaxableAmount ? income : t.maxTaxableAmount;
                return (
                    sumTax +
                    ((tributable - t.minTaxableAmount) * t.taxPercent) / 100
                );
            }, 0)
            .toFixed(decimals);
    }
}
