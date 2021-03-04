const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
];
var newarray= new Array();
for(let i=0;i<countries.length;i++){

newarray[i]=[countries[i],countries[i].substring(0,3),countries[i].length];


}
console.log(newarray)