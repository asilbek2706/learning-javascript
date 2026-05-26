// const count = 42;         // Butun son (Integer)
// console.log(typeof count);       // Konsolga 42 ni chiqaradi

// const price = 19.99;      // Haqiqiy son (Float)
// console.log( price);       // Konsolga 19.99 ni chiqaradi
// console.log(parseInt(price)); // Konsolga 19 ni chiqaradi
// console.log(parseFloat(price)); // Konsolga 19.99 ni chiqaradi

// console.log(typeof 12); // Konsolga 0.30000000000000004 ni chiqaradi (Bu JavaScript ning o'ziga xos xususiyati)

// // Maxsus matematik qiymatlar:
// const infinity = 1 / 0;          // Infinity (Cheksizlik)
// console.log(typeof infinity);         // Konsolga Infinity ni chiqaradi

// const negativeInfinity = -1 / 0; // -Infinity (Manfiy cheksizlik)
// console.log(typeof negativeInfinity); // Konsolga -Infinity ni chiqaradi

// =======================================================================================

// const maxSafe = 9007199254740991n;
// console.log(maxSafe + 1n); // Konsolga 9007199254740992n ni chiqaradi

// const hugeNum = BigInt("9007199254740992837482374");

// console.log(typeof hugeNum); // Konsolga "bigint" ni chiqaradi, chunki JavaScript katta sonlarni ham bigint sifatida qabul qiladi, lekin bu aniq natija bermasligi mumkin.

// =======================================================================================

// const single = 'Oddiy matn';
// const double = "Bu ham matn";
// const template = `Qiymat: ${single}`; // Backtick - dinamik qiymat va ko'p qatorli matn uchun
// console.log(single);   // Konsolga "Oddiy matn" ni chiqaradi
// console.log(double);   // Konsolga "Bu ham matn" ni chiqaradi
// console.log(template); // Konsolga "Qiymat: Oddiy matn" ni chiqaradi

// const hello = "jnsjnjsnsjnsncsj
// sjnjsncjsncs
// sjbshbchsbxcs"

// const hello1 = `dkckdcmdkcdkcdc
// sjncjsncscw
// jndjncj
// mndmc`
// console.log(hello1); // Konsolga ko'p qatorli matnni chiqaradi

// =======================================================================================

// const isActive = true;
// console.log(typeof isActive); // Konsolga "boolean" ni chiqaradi
// const hasAccess = false;
// console.log(typeof hasAccess); // Konsolga "boolean" ni chiqaradi

// const a = 5,
//   b = 10,
//   bigA = a < b;
// console.log( bigA); // Konsolga "boolean" ni chiqaradi, chunki a > b ifodasi true yoki false qiymat qaytaradi

// =======================================================================================

// let totalAmount;
// console.log(totalAmount); // undefined

// =======================================================================================

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1 === id2); // false

// =======================================================================================

// let currentUser = null; 
// console.log(typeof currentUser); // null

// =======================================================================================


// // A. Oddiy Obyekt (Plain Object)
// const developer = {
//     fullName: "Asilbek",
//     experience: 4
// };

// console.log(developer); 

// // B. Array (Massiv - indekslangan obyekt)
// const skills = ["React", "TypeScript", "Vite"];
// console.log(skills[2]); // "Vite"

// // C. Function (Callable Object - chaqiriluvchi obyekt)
// const logStatus = function(){
//     return "Working...";
// };

// console.log(logStatus()); // "Working..."

// =============================================================

// Sintaksis
// alert("Xabar matni");

// Misol
// alert("Xush kelibsiz! Saytimizdan foydalanish qoidalariga rioya qiling.");

// =============================================================

// // Sintaksis: prompt("Savol", "Default qiymat");
// let userName = prompt("Ismingizni kiriting:", "Mehmon");
// console.log(`Salom ${userName}`)

// =============================================================

// Misol: O'chirishdan oldin so'rash
let isDelete = confirm("Haqiqatan ham ushbu faylni o'chirmoqchimisiz?");
console.log(isDelete); // true yoki false ni chiqaradi, foydalanuvchi "OK" tugmasini bosgan bo'lsa true, "Cancel" tugmasini bosgan bo'lsa false qaytaradi