// const user = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     'full name': "Asilbek Karomatov"
// };

// const name = user
// console.log(name)

// Object.freeze(name)
// name.age = 40
// delete name['full name']
// console.log(name)
// user.name = 'Asilbek'
// console.log(user.name)
// console.log(user['name'])
// console.log(user["full name"])

// delete user["full name"]

// console.log(user)

// const objName = {}
// const objName2 = new Object()

// console.log(objName)
// console.log(objName2)

// console.log(`Sizning yoshingiz: ${user.age}`);

const profile = {
    username: "asil_dev",
    status: "active"
};

Object.seal(profile);

profile.status = "inactive"; // Qiymat muvaffaqiyatli o'zgaradi!
profile.role = "admin";      // Yangi kalit qo'shilmaydi
delete profile.username;     // O'chirilmaydi

console.log(profile); // { username: "asil_dev", status: "inactive" }


//Object.freeze() -> Muzlatib qoyadi
// Object.seal() -> Muhrlab qoyadi
