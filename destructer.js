const person = { id: 14, name: 'Prince', phone: '01794200775', school: "Masjid Mission Academy" };
const { phone } = person;
// console.log(phone);

const complexObject = {
    id: 14,
    info:{
        name: 'Prince',
        phone: '01794200775',
        school: "Masjid Mission Academy"
    }

}

const {school}=complexObject.info;
// console.log(school);
const friendName= ['night','knight','dumpling'];
const [chotoVai,...punk]= friendName;
console.log(chotoVai,punk);

// const students = [
//     {id: 31, name: 'Omor Sani'},
//     {id: 31, name: 'Omor Sani'},
//     {id: 31, name: 'Omor Sani'},
//     {id: 31, name: 'Omor Sani'}
// ]
// let names = [];
// for (let i = 0; i< students.length; i++) {
//   let element = students[i];
//     // names[i] = element.name;
//     element = element.name;
//     names.push(element);
//     }
//     console.log(names);