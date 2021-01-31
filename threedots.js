const age= [12,1,4,5,17];
const age2 = [25,14,62];
const age3 = [24,25,60,45];
// const allAges = age.concat(age2).concat(age3);
const allAges = [...age,...age2,5,...age3];
// console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business,minister,sochib);
const takaPoisa=[350,850,900];
const maximum = Math.max(...takaPoisa);
console.log(maximum);