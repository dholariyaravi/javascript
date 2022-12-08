let name = 'ravi';
console.log(name);

let ra = 38;
ra +=  45;
console.log(ra);

const data= [10,23,4,5,76,567,67];
data .push (56);
console.log((  data));

let new1 = ('ravi','rajan','mailan');
console.log(new1 .length);

let ra1 = 'ravi' +'hdhd';
ra2 = 'rajan'+" milan" ;
console.log( typeof ra1 + ra2 );

const age =19;
// const ravi = 56;
const derver = false; 

if (age!=19){
    console.log('age is difed 18')
}
 else if(age!==40){
    console.log('age is 18+++')
}
else {
    console.log('age is not difed')
}


if ( typeof ravi !== "undefined"){
    console.log('ravi is defined');
}
else{
    console.log('ravi is not defined');
}

if(derver || age >18){
    console.log('you can drive');
}
else {
    console.log('you can not drive');
}
console.log(age==18? 'age is 19':'age is not 19');

switch (age) {
    case 19:
      console.log('yoy are a 19'); 
        break;

        case 33:
      console.log('yoy are a 33'); 
        break;

        case 44:
      console.log('yoy are a 44'); 
        break;

    default:
        console.log('you are not age');
        break;
}



