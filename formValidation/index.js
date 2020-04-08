
// console.log('safsa')

// let number1 = 1;
// let _number2 = 2
// let $number3 = 3;


// let name, 
//     admin;
// name = 'John';
// admin = name;
// const bigInt = 21214214154523142131232312312312212312n;
// let str = 'rqwq';
// let str2 = 'fsfsas';
// let str3 = `aff saffs ${str}`

// let a  = String(12)
// let b = Number('131232')
// console.log('6'/'2')
// //3


// // + operator works as string concatenation 

// console.log('1'+2)//12
// console.log('2'+ 2+2)//24
// //unary + converts an operand to numberd

// func()

// function func(){
//     console.log('da')
// }

// let obj, method;

// obj = {
//   go: function() { console.log(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)();

// for ( var i = 0 ; i < 2 ; i++){
//   setTimeout( () => console.log(i))
// }

function refreshPage(){
  window.location.reload()
}
 
let i = 12;

// if (true){
//   const x = () => {
//     console.log(i)
//   }
// }

// let f = () => { 
//   let i = 12;
//   let j = 12;
//   return () => {
//     console.log(i)
//   }
// }
// console.dir(f())
// f()()
// console.dir(x)
// x()

// for ( let i  =0 ; i  < 3 ; i++ ){
//   const x = () => {
//     console.log(i)
//   }
//   x()
// }

// var counter = (
//   function(){
//     function doMath(change){
//       counter += change
//     }
//     var counter = 0;
//     return {
//       increment: function()  {
//         doMath(1)
//       },
//       decrement: function(){
//         doMath(-1)
//       },
//       value: function() {
//         return counter
//       }
//     }
//   }
// )()

// counter.increment()
// counter.decrement()
// counter.decrement()
// console.dir(counter)

function face() {
  // this = {
  //   sda: 2,
  //   ass: 'asdsa'
  // }
  console.log(this)
}

// const obj = JSON.parse('{"trulia":[10,6,3,9,11,5], "trivago":[4,12,30,22,10,7], "agoda":[20,34,50,12,40,70]}' )

// for (let i in obj ){
//   var array = obj[i]
//   var maxProfit = -1
//   for ( let j in obj[i]){
//     for ( let k  = 0 ; k < obj[i].length; k++){
//       if (obj[i][k] - obj[i][j] > maxProfit){
//         maxProfit = obj[i][k] - obj[i][j]
//       }
//     }
//   }
// }
// const s ='[1,2,3,4,5]'

// const x = JSON.parse(s)

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const mean = x.reduce(reducer) / x.length
// const reducer2 = (accumulator, currentValue) => accumulator + (mean - currentValue) * (mean - currentValue);

// const standardDev = Math.sqrt(x.reduce(reducer2) / x.length)

// function runPromiseInSequence(arr, input) {
//   return arr.reduce(
//     (promiseChain, currentFunction) => (
//       promiseChain.then(currentFunction)
//     )
//     ,
//     Promise.resolve(input)
//   )
// }

// // promise function 1
// function p1(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 5)
//   })
// }

// // promise function 2
// function p2(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 2)
//   })
// }

// // function 3  - will be wrapped in a resolved promise by .then()
// function f3(a) {
//  return a * 3
// }

// // promise function 4
// function p4(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 4)
//   })
// }

// const promiseArr = [p1, p2, f3, p4]
// runPromiseInSequence(promiseArr, 10)
//   .then(console.log)   // 1200


// function checkSpam(str){
//   if (str && (~str.toUpperCase().indexOf('XXX') || ~str.toUpperCase().indexOf()))
//     return true
//   return false
// }
// xyz()

// function truncate(str,len){
//   if (str > len)
//     return str.subStr(0,len) + '...'
// }


// function find (a,b){
//   let ans
//     let root1 = Math.floor(Math.sqrt(a))
//     let root2 = Math.floor(Math.sqrt(b))
//     ans = root2 - root1
//     if (root1 * (root1 + 1 ) >= a ){
//       ans++
//     } 
//     if (root2 * (root2 + 1) > b){
//        ans--
//     }

//   return ans
// }

// console.log(find(3,29))
// console.log(find(3,21))

// function maxno(A){
        

//   function compare(a,b){
//       return a-b;
//   }

//   var temp = JSON.parse(JSON.stringify(A));
//   temp = temp.sort(compare);

//   // console.log(A);
//   var sum1 = 0;
//   var sum2 = 0;
//   var chunk = 0;

//   for (var i = 0; i < A.length; i++) {
//       sum1 += A[i];
//       sum2 += temp[i];

//       if (sum1 === sum2) {
//           chunk++;
//       }
//   }
//   return chunk;

// }
// console.log(maxno([2,4,1,6,5,9,7]))
// console.log(maxno([4,3,2,6,1]))
// console.log(maxno([2,1,6,4,3,7]))

// let user = {
//   age: 12,
//   por: 'jamm',
//   sayHi(){
//     console.log(this.age)
//   }
// }

// user.sayHi()

// let arr = [5, 3, 8, 1];

// function filteredRange(arr ,start, end){
//   return arr.filter( (item) => item >= start && item <= end )
// }

// let obj = {
//   from:1,
//   dsa:12,
//   er:3,
//   w:32,
//   to:32
// }

// obj[Symbol.iterator] = function(){
//   debugger
//   return{
//     current: this.from,
//     last: this.to,
//     next(){
//       if (this.current <= this.last){
//         return { value: this.current++ , done: false}
//       }
//       else 
//       return {done: true}
//     }
//   }
// }

// for ( let i of obj)
//   console.log(i)

// let m1 = new Map([['cucumber',1],['bread',2],['onion',3]])

// m1.set('cucumber',4)
// console.log(m1.get('cucumber')) //4
// console.log(m1.size)
// m1.delete('bread')
// let m2 = new Map (Object.entries(obj))

// function x({height=12,width=44,obj=54}){
//   console.log({height,width,obj})
// }

// x()

// function counter(){
//   let count = 0;
//   return function makeCounter(){
//     return count++
//   }
// }

// let x = counter()
// console.dir(counter)
// console.log(x())


//closure
// function outer(){
//   var inner
//   let y = 0
//   inner = () => {
//     debugger
//   }
//   return inner
// }
// let x = outer()
// console.dir(x)
// console.dir(x())

//Hoisting

// function x({ y=1 }){
//   console.log(y)
//   var y = 12

// }

// x()

// function x(){
//   console.log(12)
// }

// function makeCounter(){
  
//   counter.count = 0
//   counter.set = (value) => {
//     counter.count = value
//   }
//   counter.decrease = () =>{
//     return counter.count --
//   }
//   return function counter (){
//     counter.count++
//   }
// }

// function sum(v){
//   let count = v
//   let f = (value) => {
//     count += value
//     return f
//   }
//   f.toString = () => {
//     return count
//   }
//   return f
// }


// sum(1)

let f = (value) => {
  console.log({value})
  if (value === 2000){
    return
  }
  timer = setTimeout(f,200,value + 1)
  
}

timer = setTimeout(f,2000,100)

