import {format, addDays, formatDistance, compareAsc, compareDesc, isValid, parse} from 'date-fns';
//import { es, pt } from 'date-fns/locale/index';

//Formatação de data -> Consultar a documentação para outros patterns
let today = new Date();
console.log(today);

let todayFormat = format(today, 'dd.MM.yyyy');
console.log(todayFormat);

let todayFormat2 = format(today, 'PPPP');
console.log(todayFormat2);

/*
let todayFormatEspanha = format(today, 'PPPP', {locale: es});
console.log(todayFormatEspanha);
let todayFormatPortugues = format(today, 'PPPP', {locale: pt});
console.log(todayFormatPortugues);
*/

//OPERAÇÕES COM DATAS
let todaySummed = addDays(today, 3);
let todaySummed2 = addDays(todaySummed, 3);

console.log("Dia de hoje: " + today)
console.log("Dia de hoje + 3 dias: " + todaySummed)
console.log("Dia de hoje + 6 dias: " + todaySummed2)

//Formatando 
let todaySummedFormat = format(todaySummed, 'dd.MM.yyyy');
let todaySummed2Format = format(todaySummed2, 'dd.MM.yyyy');
console.log("-----------")
console.log("Dia de hoje: " + todayFormat)
console.log("Dia de hoje + 3 dias: " + todaySummedFormat)
console.log("Dia de hoje + 6 dias: " + todaySummed2Format)

//Diferença entre datas, distancia entre datas
let endDate = new Date(2022, 12, 31);
let difBetweendates = formatDistance(today, endDate);
console.log(`Faltam ${difBetweendates} até o Reveillon`)


//ORDENAÇÃO DE DATAS
let d1 = new Date('2001-01-01')
let d2 = new Date('2005-01-01')
let d3 = new Date('2010-01-01')

let dates = [d1, d2, d3]

let sortASCDates = dates.sort(compareAsc)
console.log("----Ascendente----")
console.log(sortASCDates)
let sortDESDates = dates.sort(compareDesc)
console.log("----Descendente----")
console.log(sortDESDates)

//VALIDAÇÃO DE DATA
console.log("----VALIDAÇÃO DE DATA----")
let invalidDateFalse = parse('06-06-2022', 'dd.MM.yyyy', new Date());
console.log(isValid(invalidDateFalse))
let invalidDateTrue = parse('06-07-2022', 'dd.MM.yyyy', new Date());
console.log(isValid(invalidDateTrue))