const myName = 'sattanan';

let hight = '175';
let isMale = false;
let city = null;
let bigNum = 10n;

console.log(myName, hight, isMale, city, bigNum);


const person = {
    name: 'sattanan',
    hight: 111,
    city: 'bangkok'

};

console.log(person.city);

person.hight = 123;

console.log(person);

person.weight = 30;

console.log(person);


const number = [1, 2, 3, 4, 5];

console.log(number[3]);

number.push(7 ,8 , 9);

console.log(number);

number.pop();

number.unshift(0);

let result = 10 + 2;

console.log(result);


const age = 12;
if (age > 11){

    console.log('age is more then 11');

}



let password = '' ;

if (password === '') {
    console.log('password is repuired')

}else if (password.length >= 8 && password.length <= 12) {

    console.log('password is valid');

} 
else {
    console.log('pasword is invalid');
}

function caculateVat(money, vat) {
 return money * vat /100 ; 

}

const totalVat = caculateVat(100, 7);

console.log (totalVat);

const totalVat10 = caculateVat(100, 10);

console.log (totalVat10);

for (let i =0 ;  i < 10 ; i++) {
    if (i  === 5){
        break;
    }
    console.log(i);
}

function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(321)));


