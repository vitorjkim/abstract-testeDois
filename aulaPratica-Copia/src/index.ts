import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionario";

const a1 = new Assalariado(`palhaço`, `453672910442`, 1999);

a1.setNome(`Silos Malafaio`);
a1.setCpf(`0909846144`);
a1.setSalario(2599);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salario: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`)

const c1 = new Comissionado(`Slipknot`, '5462824942', 49092048,0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`0909846144`);
c1.setTotalVendas(2599);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Comissão: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas}`);
console.log(`Vencimento: ${c1.vencimento()}`)