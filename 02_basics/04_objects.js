const tinderUser = new Object();
//console.log(tinderUser); //singleton oject are created using constructor

tinderUser.id="123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        FirstName : "Rajat",
        LastName : "Gupta",
        Title : {
            titletype : "Mr"
        }
    }
}
//console.log(regularUser.fullName?.Title.titletype) //? check if there is a fullname present

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    2:'a',
    3:'c'
}

//wrong implementation to combine const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj2,obj1);//first argument is the target store all the values

const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(obj2);

//data from database comes in form of array of objects
const users = [
    {
        id:1,
        name:"dmdmd"
    },
    {

    }
]
users[1].name;

console.log(Object.keys(tinderUser)); // return an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]