// let dict ={}
// let nums = [1,2,3,1,1,3]


// for (let i of nums){
//     if (i in dict){
//         dict[i]++
//     } else{
//         dict[i] = 1
//     }
// }
// let result = 0
// Object.values(dict).forEach(item => result +=  (item * (item -1) )/2  )
//  console.log(result)

//REG EX
// ^ - Starts with
// $ - ends with

// [a-z] or [a-zA-Z0-9] - character classes
// []* - 0 or more character
// []+ - 1 or more character
// []{1,4}- length from 1 to 4
// [123] - allows number 1 2 and 3
//  base? - character is optional - allow bas and base
// \d - is [0-9] digits character class
// For example: \d{1,2,3} - length of number is between 1 and 3 \d{2} - length is 2
// \w - [a-zA-Z0-9_] - used for test varaiable names
// \s - space
// \n - next line
// \t - tab

// let reg = /base$/
// let isTrue = reg.test('has base')
// 


//Grouping in Regex
// let reg = /name is ([a-z]*)/

// const name = reg.exec('name is bos')
// // reg.exec finds string parameter that actually fits the  

// console.log(name)


// //Global regex - will search for all the matches

// let regex = /(\w+)\.mp3/g
// let s = 'song.mp3 name.mp3 test.csv name.txt'
// let match = reg.exec(s)

// while(match){
//     console.log(match[1])
//     match = reg.exec(s)
// }
let num = 14
let result = 0
    while(num){
        if (num%2==0 || num == 1){
            result++
        } else {
            result +=2
        }
        num = parseInt(num /2)
    }
console.log(result)