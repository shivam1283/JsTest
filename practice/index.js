// const worker = {
//     work: function(value){
//         return value * 2
//     }
// }

// function workerWrapper(func){
//     let map = new Map()

//     return function(x){
//         if (map.has(x)){
//             return map.get(x)
//         }
//         const result = func.call(this,x)
//         map.set(x,result)
//         return result
//     }
// }

function refresh(){
    window.location.reload()
}
// worker.work = workerWrapper(worker.work)

// function f(x) {
//     console.log(x);
//   }

//   let f1 = wrapper(f,1000)
//   f1(2132)

//   function wrapper(funct,delay){

//     return function(){
//         let ar = arguments
//         setTimeout(() => {
//             funct.apply(this,ar)
//         },delay)
//     } 
//   }

// work ={
//     func: function(x){
//         console.log(x)
//     }
// }

// work.func = wrapper(work.func,2000)

// work.func(1)
// work.func(1)
// work.func(1)

//debouncing

// function deb(x){
//     console.log(x)
// }


// function wrapper(f, delay){
//     let coolDown = false

//     return function(){
//         if (coolDown)
//             return
//         f.apply(this, arguments)
//         coolDown = true
//         setTimeout( () => coolDown = false,delay)
//     }

// }

//throttling

// function throttleIt(a){
//     console.log(a)
// }


// function closure(func,ms){
//     let isThorttle = false,
//     lastArgs,
//     lastThis;
//     return function(){
//         if (!isThorttle){
//             func.apply(this, arguments)
//             return
//         }
//         isThorttle = true
//         lastArgs = arguments
//         lastThis = this
//         setTimeout(function(){
//             if (lastThis){
//                 closure.apply(lastThis,lastArgs)
//                 lastArgs=lastThis=null
//                 isThorttle=false
//             }
//         },ms)
//     }
// }

// let user = {
//     name: 'shivam',
//     getName:function(arg){
//         console.log(this.name,arg)
//     }
// }

// let newFunc = user.getName.bind(null,1)
// setTimeout(newFunc,1)

// user = {
//     name: 'sakshi',
//     getName:function(){
//         console.log(this.name)
//     }
// }

// function mul(a,b){
//     return a * b
// }

// let double = mul.bind(null,2)

// console.log(double(4))

// function partial(func,...arg){
//     return function(...ar){
//         return func.apply(this,...ar,...arg)
//     }
// }

// let newUser = {
//     name: 'shivam',
//     print: function(b,c){
//         console.log(this.name,b,c)
//     }
// }

// newUser.printNew = partial(newUser.print, 'sakshi', 'yadav')

// console.dir($)
// const x= 9898101871
// function request(time){
//     if (time > 1000)
//         return
//     console.dir({time})
//     const phone = '7987611760'
//     const url = `https://grofers.com/v2/accounts/`
//     const data = {
//         phone: phone,
//     }
//     $.post(url,data)
//     request(time+1)
// }
// setTimeout(() => request(0),100)

// let y = () => {
//     console.dir(this)
// }
// let x = {
//      z(){
        
//         y()
//     }
// }

//x.z()
function animal(){

}
animal.prototype.type = "animal"

function Rabbit(name){
    this.color = 'white'
    this.name = name
}

Rabbit.prototype.__proto__ = animal.prototype
let rabbit = new Rabbit('jojo')

function f() {
    alert("Hello!");
  }
  
  Function.prototype.defer = function(ms){
    let that = this
    return function(){
        setTimeout( that.apply(...arguments) ,1000)
    }
    setTimeout(this,ms)
  }
  f.prototype.defer = function(time){
    setTimeout(f,time)
  }
  f.defer(1000);

//   class Animal{
//     constructor(...props){
//       this.props = props
//     }
//   }

// class Rabbit extends Animal{
//   constructor(props){
//     super(props)
//   }
// }

// try{
//   let x = 'dasdsa:Dsadsa:das'
//   throw new Error('wqewq')
// } catch(ex){
//   console.error(ex)
// }

function loadScript (src,callback){
  const s = document.createElement('script')
  s.src = src;
  s.onload = () => callback(s)
  document.head.append(s)
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js' ,(script) =>{
  //console.log(_)
  //console.log(script)
})


let promise = new Promise(function(fn,fe){
  fn('21')
})

promise.finally(() => console.log('asd')).then(console.log)

// function delay(ms){
//   return new Promise(function (fn,fs){
//     setTimeout(() => fn(1),ms)
//   })
// }
// delay(1).then((r)=> {
//   console.log(r)
//   throw new Error('fake1')
// }).then( (s) =>{
//   throw new Error('fake2')
// }).then(()=> console.log('dsad')).catch(console.log)


// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404

// async function  loadJson(url){
//     const response = await fetch(url)
//     if (response.status === 200){
//       return response.json()
//     }
//     else{
//       throw new Error (response.status)
//     }
//   }

  // try {
  //   loadJson('no-such-user.json')
  // }
  // catch(ex){
  //   alert(ex)
  // }

  // class HttpError extends Error {
  //   constructor(response) {
  //     super(`${response.status} for ${response.url}`);
  //     this.name = 'HttpError';
  //     this.response = response;
  //   }
  // }
  
// async function loadJson(url) {
    
//     const response = await fetch(url)
//     if (response.status == 200) {
//       return response.json();
//     }
//     throw new HttpError(response);
//   }
  
  // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
//     try {
//       const response = await loadJson(`https://api.github.com/users/${name}`)
//       alert(`Full name: ${response.name}.`);
//       return user;
//     } catch(err){
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     }
    
//   }
  
  demoGithubUser();