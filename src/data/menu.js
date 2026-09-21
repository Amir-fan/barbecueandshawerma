export const menuCategories = [
  { id: "chicken_shawarma", label: "شاورما دجاج", description: "ألذ شاورما دجاج بتتبيلتنا الخاصة." },
  { id: "meat_shawarma", label: "شاورما اللحم", description: "شاورما لحم طازجة ومميزة." },
  { id: "barbecue", label: "مشاوي", description: "مشوية على الفحم حتى الكمال." },
  { id: "grilled_chicken", label: "دجاج شواية", description: "دجاج شواية بتتبيلة شهية." },
  { id: "boneless_chicken", label: "دجاج مسحب", description: "دجاج مسحب مشوي ولذيذ." },
  { id: "rice", label: "رز", description: "أطباق أرز شرقية أصيلة." },
  { id: "sides", label: "مقبلات", description: "الإضافات المثالية لوجبتك." },
  { id: "salads", label: "سلطات", description: "خضار طازجة ومقرمشة." },
  { id: "sauces", label: "صوصات", description: "نكهات إضافية تغني وجبتك." }
];

export const heroCategories = [
  { id: "chicken_shawarma", label: "شاورما دجاج", description: "ألذ شاورما دجاج بتتبيلتنا الخاصة." },
  { id: "meat_shawarma", label: "شاورما اللحم", description: "شاورما لحم طازجة ومميزة." },
  { id: "barbecue", label: "مشاوي", description: "مشوية على الفحم حتى الكمال." },
  { id: "grilled_chicken", label: "دجاج شواية", description: "دجاج شواية بتتبيلة شهية." },
  { id: "boneless_chicken", label: "دجاج مسحب", description: "دجاج مسحب مشوي ولذيذ." },
  { id: "sides", label: "مقبلات", description: "الإضافات المثالية لوجبتك." },
  { id: "salads", label: "سلطات", description: "خضار طازجة ومقرمشة." }
];

import bbsLogo from '../assets/bbs logo white no bg.png';

const IMG = {
  shawarma1: bbsLogo,
  shawarma2: bbsLogo,
  grill1: bbsLogo,
  grill2: bbsLogo,
  chicken: bbsLogo,
  rice1: bbsLogo,
  fries: bbsLogo,
  salad1: bbsLogo,
  salad2: bbsLogo,
  sauce: bbsLogo,
  fatteh: bbsLogo,
  hummus: bbsLogo
};

export const menuItems = [
  // chicken_shawarma
  { id: 1, category: "chicken_shawarma", name: "خرتوشة", description: "", price: 100, image: IMG.shawarma1 },
  { id: 2, category: "chicken_shawarma", name: "صندويشة شاورما", description: "", price: 250, image: IMG.shawarma1 },
  { id: 3, category: "chicken_shawarma", name: "شاورما خبز تنور", description: "", price: 250, image: IMG.shawarma1 },
  { id: 59, category: "chicken_shawarma", name: "كريزي شاورما", description: "", price: 280, image: IMG.shawarma1 },
  { id: 4, category: "chicken_shawarma", name: "كزابلانكا", description: "مزيج بخبز الصاج والسياحي مع شاورما الدجاج، مخلل، بندورة مشوية، بيواز، دبس الرمان، وصوص مميز.", price: 250, image: IMG.shawarma1 },
  { id: 5, category: "chicken_shawarma", name: "شاورما صمون", description: "", price: 250, image: IMG.shawarma1 },
  { id: 6, category: "chicken_shawarma", name: "وجبة شاورما عربي", description: "", price: 500, image: IMG.shawarma1 },
  { id: 7, category: "chicken_shawarma", name: "شاورما ايطالي", description: "بخبز سياحي محمص مع صوصنا الخاص، شاورما دجاج، فلفل ألوان طازج، فطر، ذرة، وجبنة ذائبة.", price: 600, image: IMG.shawarma1 },
  { id: 8, category: "chicken_shawarma", name: "شاورما اكسترا", description: "شاورما دجاج غنية بخبز الصاج، مع الفطر، الذرة، الجبنة الذائبة، والصوص اللذيذ.", price: 600, image: IMG.shawarma1 },
  { id: 9, category: "chicken_shawarma", name: "فتة شاورمة", description: "طبقات من الخبز المقلي والأرز الأبيض مع شاورما الدجاج، مغطاة بصوص الطحينية والمكسرات المحمصة.", price: 400, image: IMG.fatteh },
  { id: 10, category: "chicken_shawarma", name: "شاورما شيك", description: "شاورما دجاج مع بطاطا مقرمشة، بندورة، خس، مخلل، مغطاة بصوص الرانش والباربيكيو.", price: 350, image: IMG.shawarma1 },

  // meat_shawarma
  { id: 11, category: "meat_shawarma", name: "خرتوشة", description: "", price: 200, image: IMG.shawarma2 },
  { id: 12, category: "meat_shawarma", name: "صندويشة شاورما", description: "", price: 400, image: IMG.shawarma2 },
  { id: 13, category: "meat_shawarma", name: "شاورما خبز عراقي", description: "", price: 300, image: IMG.shawarma2 },
  { id: 60, category: "meat_shawarma", name: "كريزي شاورما", description: "", price: 430, image: IMG.shawarma2 },
  { id: 14, category: "meat_shawarma", name: "شاورما خبز تنور", description: "", price: 400, image: IMG.shawarma2 },
  { id: 15, category: "meat_shawarma", name: "شاورما عربي", description: "", price: 700, image: IMG.shawarma2 },
  { id: 16, category: "meat_shawarma", name: "ماريا", description: "شاورما لحم طازجة بخبز سياحي مع البندورة المشوية، البيواز، والصوص الخاص.", price: 800, image: IMG.shawarma2 },
  { id: 17, category: "meat_shawarma", name: "توشكا", description: "شاورما لحم غنية بالجبنة الذائبة والصوص اللذيذ داخل خبز سياحي محمص.", price: 800, image: IMG.shawarma2 },
  { id: 18, category: "meat_shawarma", name: "فتة", description: "فتة شهية من الخبز المقلي والأرز مع شاورما اللحم، مزينة بصوص الطحينية والمكسرات.", price: 600, image: IMG.fatteh },

  // barbecue
  { id: 19, category: "barbecue", name: "كباب دجاج", description: "", price: 1000, image: IMG.grill2 },
  { id: 20, category: "barbecue", name: "كبة عل سيخ", description: "", price: 1000, image: IMG.grill1 },
  { id: 21, category: "barbecue", name: "شيش", description: "", price: 1300, image: IMG.chicken },
  { id: 22, category: "barbecue", name: "شيش فخد", description: "", price: 1300, image: IMG.chicken },
  { id: 23, category: "barbecue", name: "كيليبيك دجاج", description: "", price: 1200, image: IMG.chicken },
  { id: 24, category: "barbecue", name: "جوانح", description: "", price: 1200, image: IMG.chicken },
  { id: 25, category: "barbecue", name: "كبة مشوية", description: "", price: 200, image: IMG.grill1 },
  { id: 26, category: "barbecue", name: "دجاجة كاملة", description: "دجاج مشوي على الأصول يقدم مع خضار مشكلة وصوص المطعم الخاص.", price: 1300, image: IMG.chicken },
  { id: 27, category: "barbecue", name: "وجبة نصف دجاجة", description: "نصف دجاجة مشوية بعناية، تقدم مع خضار مشكلة وصوصنا السري.", price: 650, image: IMG.chicken },

  // grilled_chicken
  { id: 28, category: "grilled_chicken", name: "دجاجة كامل", description: "دجاج مشوي على الأصول يقدم مع خضار مشكلة وصوص المطعم الخاص.", price: 1300, image: IMG.chicken },
  { id: 29, category: "grilled_chicken", name: "نصف دجاجة", description: "نصف دجاجة مشوية بعناية، تقدم مع خضار مشكلة وصوصنا السري.", price: 650, image: IMG.chicken },

  // boneless_chicken
  { id: 30, category: "boneless_chicken", name: "دجاجة كاملة", description: "دجاج مشوي على الأصول يقدم مع خضار مشكلة وصوص المطعم الخاص.", price: 1500, image: IMG.chicken },
  { id: 31, category: "boneless_chicken", name: "نص دجاجة", description: "نصف دجاجة مشوية بعناية، تقدم مع خضار مشكلة وصوصنا السري.", price: 750, image: IMG.chicken },

  // rice
  { id: 32, category: "rice", name: "رز كبسة", description: "", price: 400, image: IMG.rice1 },
  { id: 33, category: "rice", name: "رز ابيض", description: "", price: 400, image: IMG.rice1 },
  { id: 34, category: "rice", name: "رز مندي", description: "", price: 400, image: IMG.rice1 },
  { id: 35, category: "rice", name: "فريكة", description: "", price: 500, image: IMG.rice1 },

  // sides
  { id: 36, category: "sides", name: "بطاطا", description: "", price: 200, image: IMG.fries },
  { id: 37, category: "sides", name: "بطاطا شرحات", description: "", price: 200, image: IMG.fries },
  { id: 38, category: "sides", name: "بومفريت", description: "", price: 200, image: IMG.fries },
  { id: 39, category: "sides", name: "كبة مقلية", description: "", price: 90, image: IMG.fries },
  { id: 40, category: "sides", name: "برك جبنة", description: "", price: 60, image: IMG.fries },
  { id: 41, category: "sides", name: "يالانجي", description: "", price: 200, image: IMG.salad2 },
  { id: 42, category: "sides", name: "متبل", description: "", price: 150, image: IMG.hummus },
  { id: 43, category: "sides", name: "حمص", description: "", price: 150, image: IMG.hummus },
  { id: 44, category: "sides", name: "حمص شاورما لحم", description: "", price: 500, image: IMG.hummus },
  { id: 45, category: "sides", name: "حمص شاورما دجاج", description: "", price: 300, image: IMG.hummus },

  // salads
  { id: 46, category: "salads", name: "سيزار", description: "", price: 400, image: IMG.salad1 },
  { id: 47, category: "salads", name: "فتوش", description: "", price: 350, image: IMG.salad1 },
  { id: 48, category: "salads", name: "تبولة", description: "", price: 350, image: IMG.salad2 },
  { id: 49, category: "salads", name: "بيواز", description: "", price: 100, image: IMG.salad1 },
  { id: 50, category: "salads", name: "سلطة الموسم", description: "", price: 250, image: IMG.salad1 },

  // sauces
  { id: 51, category: "sauces", name: "كريم توم", description: "", price: 75, image: IMG.sauce },
  { id: 52, category: "sauces", name: "دينمايت", description: "", price: 75, image: IMG.sauce },
  { id: 53, category: "sauces", name: "كاري", description: "", price: 75, image: IMG.sauce },
  { id: 54, category: "sauces", name: "كتشب", description: "", price: 75, image: IMG.sauce },
  { id: 55, category: "sauces", name: "باربيكيو", description: "", price: 75, image: IMG.sauce },
  { id: 56, category: "sauces", name: "طرطور", description: "", price: 75, image: IMG.sauce },
  { id: 57, category: "sauces", name: "رانش", description: "", price: 75, image: IMG.sauce },
  { id: 58, category: "sauces", name: "مايونيز", description: "", price: 75, image: IMG.sauce }
];

export const signatureItems = [];
