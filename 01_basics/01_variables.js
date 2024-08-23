/* 
    6 types of variables
    1. numbers -----------------> 1234567890
    2. string ------------------> "waqar hussain"
    3. Boolean -----------------> 'true' OR 'false'
    4. object ------------------> const x = {userName: 'xyz', userEmail: 'xyz@gmail.com', userPassword: '12345'}
    5. arry object -------------> const x = ["xyz", "xyz@gmail.com", "12345"]
    6. Date Object -------------> const date = new Date ("23/08/2024");

 */













/* 

6 types of variales
1. Numbers -------------> 123456
2. String  -------------> "waqar hussain"
3. Boolean -------------> true 0R false
4. Object  -------------> const person = {firstName:"waqar", lastName:"hussain"};
5. Array Object --------> const cars = ["toyota", "Honda", "Suzuki"];
6. Date Object ---------> const date = new Date("2024/07/25");

*/

let length = 16;
let weight = 7.5;

let color = "red";
let lastName = "hussain";

let x = true;
let y = false;

const Person = { firstName: "waqar", lastName: "hussain" };

const citiesName = ["Karachi", "Lahore", "Islamabad"];

const date = new Date("2024/07/25");

function Practice() {
    if (length > 16) {
        console.log(color + lastName);
    } else {
        console.log("error 404")
    }
}

console.log(Practice());
















// const accountId = 123;
// let accountEmail = "waqar@gmail.com";
// var accountPassword = "12345";
// accountCity = "Madeji";
// let accountState;


// accountEmail = "ujjan@gmail.com"
// accountPassword = "1111"
// accountCity = "karachi"
// // accountId = 2; not allowed
// //console.log(accountId);

// /*
// prefer not to use var
// because of issue in block scope and functional scope
// */

// console.table([accountId, accountEmail, accountPassword, accountCity ,accountState]);