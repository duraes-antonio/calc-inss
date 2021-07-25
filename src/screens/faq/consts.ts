import {taxesCurrentYear} from '../../shared/consts/taxes';
import {specTaxCalc} from '../calculator/calculator-screen';
import {formatCurrency} from '../../shared/functions/format';

export type Question = {title: string; answer: string};

const maxTaxable = Math.max(...taxesCurrentYear.map(t => t.maxTaxableAmount));
const maxValueTaxes = specTaxCalc.calculate(maxTaxable);

const benefits = [
    'Aposentadoria por tempo de contribuição',
    'Aposentadoria por idade e invalidez',
    'Pensão por morte',
    'Auxílio-doença',
    'Auxílio-acidente',
    'Auxílio-reclusão',
    'Salário maternidade',
    'Salário família',
    'Reabilitação profissional',
];

export const questions: Question[] = [
    {
        title: 'Quanto pago se eu ganhar acima da última faixa?',
        answer: `Você pagará o valor máximo, que é ${formatCurrency({
            value: maxValueTaxes,
        })}. Isto quer dizer que alguém que ganhe ${formatCurrency({
            value: maxTaxable,
        })} pagará o mesmo que quem recebe R$50.000,00.`,
    },
    {
        title: 'E o imposto de renda, como fica?',
        answer: 'O imposto de renda deve ser calculado após descontar os valores de INSS de sua renda.',
    },
    {
        title: 'Por que pago o INSS?',
        answer: `A contruição para o INSS garante o recebimento de um benefício mensal durante a aposentadoria, além de possibilitar que o trabalhador tenha o direito de receber auxílio-doença em caso de afastamento do serviço por motivo de saúde.

Há outros benefícios que o INSS fornece:
${benefits.reduce((prev, curr, i) => `${prev}\n${i + 1}º ${curr}`, '')}`,
    },
];
