const cart = [
  { name: "Futbolka", price: 40 },
  { name: "Shapka", price: 20 },
  { name: "Kurtka", price: 100 },
  { name: "Shlyapa", price: null },
];

function startShopping(username, couponCode, paymentMethod, balance) {
  const customer = username ?? "Mehmon";
  console.log(
    "===================== Xarid Boshlandi ===================================",
  );
  console.log(`Salom, ${customer}! Xush kelibsiz!`);

  let totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    let finalPrice = item.price || 5;
    console.log(`Sizning mahsulotingiz: ${item.name}, narxi: $${finalPrice}`);
    totalAmount += finalPrice;
  }

  console.log(`Jami summa: ${totalAmount}`);

  console.log(
    "====================Coupon tekshirilmoqda...====================",
  );
  if (couponCode === "DISCOUNT10") {
    if (totalAmount > 50) {
      const discount = totalAmount * 0.1;
      totalAmount -= discount;
      console.log("Sizga 10% chegirma berildi!");
      console.log(`Chegirma miqdori: $${discount}`);
    } else {
      console.log("Minimal summa 50$ bo'lishi kerak");
    }
  } else if (couponCode) {
    console.log("Noto'g'ri kupon kodi!");
  } else {
    console.log("Siz kupon kodini kiritmadingiz.");
  }

  console.log(
    "====================Yetkazib beriilmoqda...====================",
  );

  let deliveryFee = totalAmount > 60 ? 0 : 5;
  totalAmount += deliveryFee;
  console.log(`Yetkazib berish narxi: ${deliveryFee === 0 ? "Bepul" : "$5"}`);

  if (!(balance >= totalAmount)) {
    console.log("========= Balans tekshirilmoqda... =================");
    console.log(`Szining balansingiz: $${balance}`);
    console.log("Sizning balansizning yetarli emas...");
    console.log(`Sizga $${totalAmount - balance} qo'shimcha kerak bo'ladi.`);
    return;
  }

  console.log("========= To'lov usuli tekshirilmoqda ==========");

  switch (paymentMethod) {
    case "click":
      console.log("Siz Click orqali to'lovni amalga oshirdingiz.");
      break;
    case "payme":
      console.log("Siz Payme orqali to'lovni amalga oshirdingiz.");
      break;
    case "uzcard":
      console.log("Siz Uzcard orqali to'lovni amalga oshirdingiz.");
      break;
    case "humo":
      console.log("Siz Humo orqali to'lovni amalga oshirdingiz.");
      break;
    case "cash":
      console.log("Siz naqt pul to'lashni tanladingiz!");
      break;
    default:
      console.log(
        "Siz to'lov usulini tanlamadingiz yoki noto'g'ri to'lov usuli tanladingiz.",
      );
  }

  let progress = 0;

  const timer = setInterval(() => {
    progress += 25;
    console.log(`Yuklanmoqda... ${progress}%`);

    if (progress === 100) {
      clearInterval(timer);
      console.log("Xarid muvaffaqiyatli yakunlandi! Rahmat!");
      const remainingBalance = balance - totalAmount;
      console.log(`Sizning balansingiz: $${remainingBalance}`);
    }
  }, 500);

}

startShopping("Asilbek", "DISCOUNT10", "humo", 200);
