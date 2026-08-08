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

const IMG = {
  shawarma1: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
  shawarma2: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
  grill1: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  grill2: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
  chicken: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80",
  rice1: "https://images.unsplash.com/photo-1572656306390-410321d0ae27?w=800&q=80",
  fries: "https://images.unsplash.com/photo-1574484284058-154a1ce50d75?w=800&q=80",
  salad1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  salad2: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
  sauce: "https://images.unsplash.com/photo-1472476449509-db58cb441864?w=800&q=80",
  fatteh: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=800&q=80"
};

export const menuItems = [
  // chicken_shawarma
  { id: 1, category: "chicken_shawarma", name: "خرتوشة", description: "", price: "١٠٠ ل.س", image: IMG.shawarma1 },
  { id: 2, category: "chicken_shawarma", name: "صندويشة شاورما", description: "", price: "٢٤٠ ل.س", image: IMG.shawarma1 },
  { id: 3, category: "chicken_shawarma", name: "شاورما خبز عراقي", description: "", price: "١٥٠ ل.س", image: IMG.shawarma1 },
  { id: 4, category: "chicken_shawarma", name: "كزابلانكا", description: "", price: "٢٤٠ ل.س", image: IMG.shawarma1 },
  { id: 5, category: "chicken_shawarma", name: "شاورما صمون", description: "", price: "٢٤٠ ل.س", image: IMG.shawarma1 },
  { id: 6, category: "chicken_shawarma", name: "وجبة شاورما عربي", description: "", price: "٥٠٠ ل.س", image: IMG.shawarma1 },
  { id: 7, category: "chicken_shawarma", name: "شاورما اطالي", description: "", price: "٦٠٠ ل.س", image: IMG.shawarma1 },
  { id: 8, category: "chicken_shawarma", name: "شاورما اكسترا", description: "", price: "٦٠٠ ل.س", image: IMG.shawarma1 },
  { id: 9, category: "chicken_shawarma", name: "فتة شاورمة", description: "", price: "٤٠٠ ل.س", image: IMG.fatteh },
  { id: 10, category: "chicken_shawarma", name: "شاورما شيك", description: "", price: "٣٥٠ ل.س", image: IMG.shawarma1 },

  // meat_shawarma
  { id: 11, category: "meat_shawarma", name: "خرتوشة", description: "", price: "٢٠٠ ل.س", image: IMG.shawarma2 },
  { id: 12, category: "meat_shawarma", name: "صندويشة شاورما", description: "", price: "٤٠٠ ل.س", image: IMG.shawarma2 },
  { id: 13, category: "meat_shawarma", name: "شاورما خبز عراقي", description: "", price: "٣٠٠ ل.س", image: IMG.shawarma2 },
  { id: 14, category: "meat_shawarma", name: "شاورما خبز تنور", description: "", price: "٤٠٠ ل.س", image: IMG.shawarma2 },
  { id: 15, category: "meat_shawarma", name: "شاورما عربي", description: "", price: "٧٠٠ ل.س", image: IMG.shawarma2 },
  { id: 16, category: "meat_shawarma", name: "ماريا", description: "", price: "٨٠٠ ل.س", image: IMG.shawarma2 },
  { id: 17, category: "meat_shawarma", name: "توشكا", description: "", price: "٨٠٠ ل.س", image: IMG.shawarma2 },
  { id: 18, category: "meat_shawarma", name: "فتة", description: "", price: "٦٠٠ ل.س", image: IMG.fatteh },

  // barbecue
  { id: 19, category: "barbecue", name: "كباب دجاج", description: "", price: "١٠٠٠ ل.س", image: IMG.grill2 },
  { id: 20, category: "barbecue", name: "كبة عل سيخ", description: "", price: "١٠٠٠ ل.س", image: IMG.grill1 },
  { id: 21, category: "barbecue", name: "شيش", description: "", price: "١٣٠٠ ل.س", image: IMG.chicken },
  { id: 22, category: "barbecue", name: "شيش فخد", description: "", price: "١٣٠٠ ل.س", image: IMG.chicken },
  { id: 23, category: "barbecue", name: "كيليبيك دجاج", description: "", price: "١٢٠٠ ل.س", image: IMG.chicken },
  { id: 24, category: "barbecue", name: "جوانح", description: "", price: "١٢٠٠ ل.س", image: IMG.chicken },
  { id: 25, category: "barbecue", name: "كبة مشوية", description: "", price: "٢٠٠ ل.س", image: IMG.grill1 },
  { id: 26, category: "barbecue", name: "دجاجة كاملة", description: "", price: "١٣٠٠ ل.س", image: IMG.chicken },
  { id: 27, category: "barbecue", name: "وجبة نصف دجاجة", description: "", price: "٦٥٠ ل.س", image: IMG.chicken },

  // grilled_chicken
  { id: 28, category: "grilled_chicken", name: "دجاجة كامل", description: "", price: "١٣٠٠ ل.س", image: IMG.chicken },
  { id: 29, category: "grilled_chicken", name: "نصف دجاجة", description: "", price: "٦٥٠ ل.س", image: IMG.chicken },

  // boneless_chicken
  { id: 30, category: "boneless_chicken", name: "دجاجة كاملة", description: "", price: "١٥٠0 ل.س", image: IMG.chicken },
  { id: 31, category: "boneless_chicken", name: "نص دجاجة", description: "", price: "٧٥٠ ل.س", image: IMG.chicken },

  // rice
  { id: 32, category: "rice", name: "رز كبسة", description: "", price: "٤٠٠ ل.س", image: IMG.rice1 },
  { id: 33, category: "rice", name: "رز ابيض", description: "", price: "٤٠٠ ل.س", image: IMG.rice1 },
  { id: 34, category: "rice", name: "رز مندي", description: "", price: "٤٠٠ ل.س", image: IMG.rice1 },
  { id: 35, category: "rice", name: "فريكة", description: "", price: "٥٠٠ ل.س", image: IMG.rice1 },

  // sides
  { id: 36, category: "sides", name: "بطاطا", description: "", price: "٢٠٠ ل.س", image: IMG.fries },
  { id: 37, category: "sides", name: "بطاطا شرحات", description: "", price: "٢٠٠ ل.س", image: IMG.fries },
  { id: 38, category: "sides", name: "بومفريت", description: "", price: "٢٠٠ ل.س", image: IMG.fries },
  { id: 39, category: "sides", name: "كبة مقلية", description: "", price: "٩٠ ل.س", image: IMG.fries },
  { id: 40, category: "sides", name: "برك جبنة", description: "", price: "٦٠ ل.س", image: IMG.fries },
  { id: 41, category: "sides", name: "يالانجي", description: "", price: "٢٠٠ ل.س", image: IMG.salad2 },
  { id: 42, category: "sides", name: "متبل", description: "", price: "١٥٠ ل.س", image: IMG.hummus },
  { id: 43, category: "sides", name: "حمص", description: "", price: "١٥٠ ل.س", image: IMG.hummus },
  { id: 44, category: "sides", name: "حمص شاورما لحم", description: "", price: "٥٠٠ ل.س", image: IMG.hummus },
  { id: 45, category: "sides", name: "حمص شاورما دجاج", description: "", price: "٣٠٠ ل.س", image: IMG.hummus },

  // salads
  { id: 46, category: "salads", name: "سيزار", description: "", price: "٤٠٠ ل.س", image: IMG.salad1 },
  { id: 47, category: "salads", name: "فتوش", description: "", price: "٣٥٠ ل.س", image: IMG.salad1 },
  { id: 48, category: "salads", name: "تبولة", description: "", price: "٣٥٠ ل.س", image: IMG.salad2 },
  { id: 49, category: "salads", name: "بيواز", description: "", price: "١٠٠ ل.س", image: IMG.salad1 },
  { id: 50, category: "salads", name: "سلطة الموسم", description: "", price: "٢٥٠ ل.س", image: IMG.salad1 },

  // sauces
  { id: 51, category: "sauces", name: "كريم توم", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 52, category: "sauces", name: "دينمايت", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 53, category: "sauces", name: "كاري", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 54, category: "sauces", name: "كتشب", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 55, category: "sauces", name: "باربيكيو", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 56, category: "sauces", name: "طرطور", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 57, category: "sauces", name: "رانش", description: "", price: "٧٥ ل.س", image: IMG.sauce },
  { id: 58, category: "sauces", name: "مايونيز", description: "", price: "٧٥ ل.س", image: IMG.sauce }
];

export const signatureItems = [];
