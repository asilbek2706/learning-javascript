// let number = '1234567890';
// console.log(typeof number);

// let strNumber = Number(number)
// console.log(typeof strNumber);

// let plusNumber = +number
// console.log(typeof plusNumber);

// let str = undefined ?? null ?? undefined ?? undefined
// console.log(str);

// let bool = Boolean(str)
// console.log( bool);

/**
 * 1. || operatori - bu operator birinchi true qiymatni qaytaradi, agar barcha qiymatlar false bo'lsa, oxirgi qiymatni qaytaradi.
 * 2. && operatori - bu operator birinchi false qiymatni qaytaradi, agar barcha qiymatlar true bo'lsa, oxirgi qiymatni qaytaradi.
 * 3. ?? operatori - bu operator birinchi null yoki undefined qiymatni qaytaradi, agar barcha qiymatlar null yoki undefined bo'lsa, oxirgi qiymatni qaytaradi.
 */

// let number = undefined
// console.log(+number);

// let number1 = null
// console.log(Number(number1));

// let a = 5

// console.log(a)
// a++
// console.log(a)
// console.log(++a)
// console.log(a)
// console.log(++a)

/**
 * 5
 * 6
 * 6
 * 7
 * 
 * 5
 * 6
 * 7
 * 7
 * 8
 */

// const yosh = 20;
// const haydovchilikGuvohnomasi = true;
// const mast = false;
// // VA (&&) misol: Ikkala shart ham bajarilishi shart
// const mashinaHaydayOladimi = (yosh >= 18) && haydovchilikGuvohnomasi;
// console.log(mashinaHaydayOladimi); // true
// // YOKI (||) misol: Kamida bittasi to'g'ri bo'lsa yetarli
// const chegirmaOladi = (yosh > 60) || !haydovchilikGuvohnomasi;
// console.log(chegirmaOladi); // false (Chunki ikkala shart ham bajarilmadi)
// // EMAS (!) misol
// console.log(!mast); // true (mast emas)

let ball = 30;
// if-else ko'rinishi o'rniga:
let natija = (ball >= 60) ? "Imtihondan o'tdi" : "Yiqildi ❌";
console.log(natija); // "Yiqildi ❌"