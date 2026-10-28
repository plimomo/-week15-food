// JavaScript = เก็บข้อมูลอาหาร และเปลี่ยนข้อมูลเมื่อกดปุ่ม
// แก้ชื่อ คำอธิบาย ราคา และตำแหน่งรูปของแต่ละเมนูได้ในรายการนี้
const foods = [
  {
    name: "ข้าวไข่ดาว",
    description: "ข้าวสวยร้อน ๆ เสิร์ฟพร้อมไข่ดาวสองฟอง ขอบกรอบ ไข่แดงนุ่ม อิ่มง่ายในทุกวัน",
    price: 40,
    image: "images/fried-egg-rice.svg",
    category: "อิ่มง่าย"
  },
  {
    name: "ก๋วยเตี๋ยวหมู",
    description: "เส้นนุ่มในน้ำซุปหอม ๆ พร้อมหมูและผัก อิ่มสบายท้องสำหรับมื้อกลางวัน",
    price: 50,
    image: "images/noodles.svg",
    category: "ซุปร้อน ๆ"
  },
  {
    name: "พิซซ่า",
    description: "พิซซ่าชีสหอม ๆ แป้งนุ่มขอบกรอบ พร้อมซอสมะเขือเทศและเปปเปอโรนี",
    price: 129,
    image: "images/pizza.svg",
    category: "ชีสเต็มคำ"
  },
  {
    name: "เบอร์เกอร์เนื้อ",
    description: "ขนมปังงาเนื้อนุ่ม ประกบเนื้อย่าง ชีส มะเขือเทศ และผักสด เต็มคำทุกชั้น",
    price: 89,
    image: "images/burger.svg",
    category: "มื้อจัดเต็ม"
  },
  {
    name: "ซูชิแซลมอน",
    description: "ข้าวปั้นปรุงรสพอดีคำ วางหน้าด้วยแซลมอน เสิร์ฟคู่ขิงดองและวาซาบิ",
    price: 99,
    image: "images/sushi.svg",
    category: "พอดีคำ"
  }
];

// เริ่มต้นที่เมนูแรก ตรงกับการ์ดที่เขียนไว้ใน index.html
let currentIndex = 0;

// ค้นหาตำแหน่งใน HTML ที่เราจะเปลี่ยนข้อมูล
const foodImage = document.getElementById("food-image");
const foodName = document.getElementById("food-name");
const foodDescription = document.getElementById("food-description");
const foodPrice = document.getElementById("food-price");
const foodCategory = document.getElementById("food-category");
const menuIndex = document.getElementById("menu-index");
const randomButton = document.getElementById("random-button");
const randomStatus = document.getElementById("random-status");

// แสดงข้อมูลทั้งหมดจากเมนูเดียวกัน เพื่อให้รูป ชื่อ คำอธิบาย และราคาตรงกัน
function showFood(index) {
  const food = foods[index];
  foodImage.src = food.image;
  foodImage.alt = "ภาพประกอบ" + food.name;
  foodName.textContent = food.name;
  foodDescription.textContent = food.description;
  foodPrice.textContent = food.price;
  foodCategory.textContent = food.category;
  menuIndex.textContent = String(index + 1).padStart(2, "0") + " / " + String(foods.length).padStart(2, "0");
}

// สุ่มจากเมนูอื่น เพื่อให้ทุกครั้งที่กดได้เมนูที่ต่างจากเดิม
function randomFood() {
  if (foods.length < 2) return;
  const otherIndexes = foods.map((food, index) => index).filter(index => index !== currentIndex);
  const randomPosition = Math.floor(Math.random() * otherIndexes.length);
  currentIndex = otherIndexes[randomPosition];
  showFood(currentIndex);
  randomStatus.textContent = "สุ่มได้ " + foods[currentIndex].name + " ราคา " + foods[currentIndex].price + " บาท";
}

// เมื่อคลิกปุ่ม ให้ทำงานในฟังก์ชัน randomFood
randomButton.addEventListener("click", randomFood);
showFood(currentIndex);
