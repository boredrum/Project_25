                                        //EXCERCISE 1
// let arr =[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
// ];
// let ArraySum = 0;
// let ArrayLength = arr.length -1;
// let sum = function(ArrLength){              //через if
//     if (ArrLength < 0){
//         return ArraySum;
//     }
//     ArraySum += arr[ArrLength--];
//     sum(ArrLength);
//     return ArraySum
// }
// console.log(sum(ArrayLength));

// let sum = function(ArrLength){              //через ?
//     return ArrLength < 0 ? ArraySum : (ArraySum += arr[ArrLength], sum(--ArrLength));
// }
// console.log(sum(ArrayLength));


                                        //EXCERCISE 2
// let count = 0;

// let deepCount = function(arr){              // if else
//     for (let elem of arr){
//         count++;
//         if (Array.isArray(elem)){
//             deepCount(elem);
//         };
//     }
//     return count;
// }

// let deepCount = function(arr){              // тернарний оператор ?
//     for (let elem of arr){
//         count++;
//         Array.isArray(elem) ? deepCount(elem) : count;
//     }
//     return count;
// }

// console.log(deepCount([]));     // 0
// count = 0;
// console.log(deepCount([1, 2, 3]));      // 3
// count = 0;
// console.log(deepCount(["x", "y", ["z"]]));      // 4
// count = 0;
// console.log(deepCount([1, 2, [3, 4, [5]]]));        // 7
// count = 0;
// console.log(deepCount([[[[]]]]));     // 3


                                        //EXCERCISE 3
// let employees = {
//     development : {
//         backend : [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500},],
//         frontend : [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700},],
//     },
//     sales : {
//         marketing : {
//             internet_marketers : [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300},],
//             promotion : [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700},],
//         },
//         sellers : [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100},],
//     },
//     designer : [{name: 'Kate', salary: 1800},],
// };
// let sumTotalSalary = function (){
//     let sum = 0;
//     return sumSalary = function(obj){
//         for (let key in obj){
//             if (Array.isArray(obj[key])){
//                 obj[key].forEach(employee => sum += employee.salary);
//             }else{
//                 sumSalary(obj[key]);
//             };
//         };
//         return sum;
//     };
// };
// sumTotalSalary();
// console.log(sumTotalSalary()(employees));
// console.log(sum); //test


                                        //EXCERCISE 4
// let arr1 = [
//     2,
//     15,
//     7,
//     3,
// ];
// let arr2 = [
//     9,
//     3,
//     17,
//     12,
//     4,
//     8,
// ];
// let arr3 = [
//     6,
//     11,
//     16,
//     15,
//     11,
// ];
// let totalArr = [...arr1, ...arr2, ...arr3];
// console.log(totalArr);

// // let totalArrMax = Math.max.apply(null, totalArr);           // method 1
// // console.log(totalArrMax);

// // let totalArrMax = Math.max(...totalArr);        // method 2
// // console.log(totalArrMax);

// console.log(Math.max(...arr1, ...arr2, ...arr3));           // method 3