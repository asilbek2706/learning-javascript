// const tugma = 4

// switch(tugma){
//     case 1:
//         console.log("Tugma 1 bosildi");
//         break;
//     case 2:
//         console.log("Tugma 2 bosildi");
//         break;
//     case 4:
//         console.log("Tugma 4 bosildi");
//         break;
//     default:
//         console.log("Bunday tugma mavjud emas");
// }

// const rol = "mehmon"; // Tizimda admin, moderator va foydalanuvchi degan rollar bor

// switch (rol) {
//     case "admin":
//         console.log("Sizda hamma ruxsatlar bor.");
//         break;
//     case "moderator":
//         console.log("Siz faqat izohlarni o'chira olasiz.");
//         break;
//     case "foydalanuvchi":
//         console.log("Siz faqat postlarni o'qiy olasiz.");
//         break;
//     case "mehmon":
//         console.log("Siz tizimga kirish uchun ro'yxatdan o'tishingiz kerak.");
//         break;
//     default:
//         console.log("Tizimga bunday roldagi odam kira olmaydi!");
// }
// const tugma = 'ikkinchi'

// switch(tugma){
//     case 'birinchi':
//         console.log("Tugma 1 bosildi");
//         break;
//     case 'ikkinchi':
//         console.log("Tugma 2 bosildi");
//         break;
//     case 'uchinchi':
//         console.log("Tugma 3 bosildi");
//         break;
//     default:
//         console.log("Bunday tugma mavjud emas");
// }

const oy = "Dekabr";

switch (oy) {
    case "Dekabr":
    case "Yanvar":
    case "Fevral":
        console.log("Qish fasli");
        break;
    case "Mart":
    case "Aprel":
    case "May":
        console.log("Bahor fasli");
        break;
    case "Iyun":
    case "Iyul":
    case "Avgust":
        console.log("Yoz fasli"); // Iyul kelganda break bo'lguncha tushadi va shu yerda to'xtaydi
        break;
    default:
        console.log("Noto'g'ri oy kiritildi");
}