export class Tax {
    constructor(
        readonly taxPercent: number,
        readonly minTaxableAmount: number,
        readonly maxTaxableAmount: number,
    ) {}
}
