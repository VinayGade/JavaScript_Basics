//console.log(outer-container.innerHTML);

/*

console.log(document.getElementsByTagName('h1'))

console.log(document.getElementsById('h1')[0])
*/


let name = 'Vinay'
alert('Welcome to Javascript')    // not used in modern JS...
console.log('Hi ' + name + " This is Javascript ES 6.")
console.warn(" This is Javascript Warning.")

console.error("Fatal... Something went wrong with your JS code !!")

document.write('This is JavaScript Tutorial ...')

const PI = 3.14
let radius = 10
console.log('are of circle = ' + radius * radius * PI)

let a = 10
let b = 20

a += b
b += 5

console.log("a = " + a)
console.log("b = " + b)

b /= 5
a *= 5

console.log("a = " + a)
console.log("b = " + b)

let x = 5
let y = 50

function divide(x, y) {
    return y / x
}

function average(x, y) {
    return (y + x) / 2
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
  
let celsius = toCelsius(77);

console.log(celsius)

var array = [10, 20, 40, 100, 50, 90, 200, 25, 150, 500]

console.log(array[4])
console.log(array[7])
console.log(array[9])

array.sort()

console.log("array elements :")

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// if else ladder

console.log('Enter Age :')

let age = 30       
/*

<= 5 kid

12 - 19  Teen

20 - 30 Young

30- 65 Adult

>= 65 Old

*/

// 25  38  45  60 78
/*
if(age <= 10)
    console.log('Kids love playing')

else if(age >=12 && age <=19)
    console.log('Teens love watching movies / web series / sports.')

else if(age >=20 && age <=30)
    console.log('Young people love shopping/ exercise.')

else if(age >=31 && age <=65)
    console.log('Adults love celebrating events/ spending time together.')
*/

// switch case for age selection

switch(true){
    case (age <= 10):
        console.log('Kids love playing')
        break;
    case (age >=12 && age <=19):
        console.log('Teens love watching movies / web series / sports.')
        break;
    case (age >=20 && age <=30):
        console.log('Young people love shopping/ exercise.')
        break;
    case (age >=31 && age <=65):
        console.log('Adults love celebrating events/ spending time together.')
        break;
    default: 
        console.log('age value is invalid.')
        break;
        // code block
}

var array2 = [true, "Java", 389, 3.14, 100]

console.log("array2 elements :")

console.log(array2[0])
console.log(array2[1])
console.log(array2[3])

console.log("100/10 = " + divide(100, 10))

console.log("average(70, 35) = " + average(70, 35))

const employee = {
    fname: "Vinay",
    lname: 'Gade',
    age: 30,
    designation: "Software Engineer",
    department: "Research and Development",

    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(employee)

console.log('Display Employee properties :')
console.log('full name = ' + employee.fullName)
console.log('designation = ' + employee["designation"])
console.log('department = ' + employee['department'])
console.log('age = ' + employee.age)

var address = undefined
var obj = null

console.log('address =' + address)
console.log('obj =' + obj)

console.log('original array2 = ' + array2)

array2.push(200)
console.log('array2 after push 200:' + array2)

array2.push(500)
console.log('array2 after push 500:' + array2)

array2.shift()
console.log('array2 after shift:' + array2)

array2.unshift()
console.log('array2 after unshift:' + array2)

array2.pop()
console.log('array2 after pop:' + array2)

// Strings in Javascript

let myString = "Welcome to Javascript ES 6 progarmming tutorial, Vinay"

console.log('orignial String = '+myString)

let newString = myString.replace('Vinay', 'Gopal')

console.log('String after replace = '+newString)

myString.concat('Gade')

console.log('MyString after concatination = '+myString)

console.log('index of programming :'+myString.indexOf('progarmming'))
// pidx = myString.lastIndexOf(p)

// console.log('index of p ='+pidx)  // p is not defined

slice = myString.slice(11)
console.log('MyString slice = '+slice)

slice2 = myString.slice(11,27)
console.log('MyString slice 2 = '+slice2)

// DOM Manipulation

let elem = document.getElementsByClassName('container')

console.log(elem)

let button = document.getElementById('click')

button.click()

//document.getElementById('click').click()

let elemClass = document.getElementsByClassName('container')

elemClass[0].style.backgroundColor = '#FAEBD7'

//elemClass[0].style.border = "blue"

elemClass[0].style.border = "2px solid blue"

elemClass[0].classList.add("text-success")

console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innerText)

let buttons = document.getElementsByTagName('button')
console.log(buttons)

let divs = document.getElementsByTagName('div')
console.log(divs)

let container1 = document.querySelector('.container')

let container2 = document.querySelectorAll('.container')

console.log(container1)
console.log(container2)

function clicked(){

    console.log('The button was clicked...')
}

window.onLoad = function(){
    console.lof('The Document was loaded...')
}

container1.addEventListener('click', function(){
    console.log('clicked on container1')
})

container1.addEventListener('onmouseover', function(){
    console.log('Mouse over on container1')
})

container1.addEventListener('mouseout', function(){
    console.log('Mouse out of container1')
})

