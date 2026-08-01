export const menuCategories = [
  { id: "shawarma", label: "شاورما", description: "شاورما طازجة بتتبيلة مثالية." },
  { id: "barbecue", label: "مشاوي", description: "مشوية على الفحم حتى الكمال." },
  { id: "burgers", label: "برغر", description: "شرائح برغر مشوية على اللهب." },
  { id: "meals", label: "وجبات", description: "حصص كريمة ترضي الجميع." },
  { id: "sides", label: "مقبلات", description: "الإضافات المثالية لوجبتك." },
  { id: "salads", label: "سلطات", description: "خضار طازجة ومقرمشة." }
];

// Reusable high-quality image IDs to ensure everything has a beautiful picture
const IMG = {
  shawarma1: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
  shawarma2: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
  grill1: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  grill2: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
  burger1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  burger2: "https://images.unsplash.com/photo-1550547660-d14547887572?w=800&q=80",
  hummus: "https://images.unsplash.com/photo-1585238332058-f583e52e4f7a?w=800&q=80",
  fries: "https://images.unsplash.com/photo-1574484284058-154a1ce50d75?w=800&q=80",
  salad1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  salad2: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
  rice1: "https://images.unsplash.com/photo-1572656306390-410321d0ae27?w=800&q=80",
  chicken: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80",
  chickenBurger: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=800&q=80",
  fatteh: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=800&q=80",
  tashreeb: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
};

export const menuItems = [
  // Shawarma
  { id: 1, category: "shawarma", name: "شاورما دجاج", description: "شاورما دجاج طازجة مع كريم الثوم والمخلل.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma1, tag: "الأكثر مبيعاً" },
  { id: 2, category: "shawarma", name: "شاورما لحم", description: "شاورما لحم طرية مع الطحينة والبقدونس والبصل.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma2 },
  { id: 3, category: "shawarma", name: "خرتوشة", description: "شاورما بخبز الخرتوشة المميز.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma1 },
  { id: 4, category: "shawarma", name: "شاورما خبز عراقي", description: "شاورما ملفوفة بالخبز العراقي الأصيل.", price: "٠٠,٠٠٠ ل.س", image: IMG.grill1, tag: "مميز" },
  { id: 5, category: "shawarma", name: "شاورما تنور", description: "شاورما دجاج بخبز التنور الساخن.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma1 },
  { id: 6, category: "shawarma", name: "سندويشة عربي", description: "وجبة شاورما عربي مقطعة تقدم مع البطاطا والثوم.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma2 },
  { id: 7, category: "shawarma", name: "ماريا", description: "شاورما ماريا بخبز محمص على الجريل.", price: "٠٠,٠٠٠ ل.س", image: IMG.shawarma1 },
  { id: 8, category: "shawarma", name: "فتة شاورما", description: "خبز محمص، أرز، شاورما، وصوص اللبن بالثوم.", price: "٠٠,٠٠٠ ل.س", image: IMG.fatteh },
  { id: 9, category: "shawarma", name: "تشريب عراقي", description: "تشريب عراقي أصيل مشبع بنكهة المرق والشاورما.", price: "٠٠,٠٠٠ ل.س", image: IMG.tashreeb },
  
  // Barbecue
  { id: 10, category: "barbecue", name: "منئل مشاوي", description: "تشكيلة من أفضل اللحوم المشوية على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.grill1, tag: "اختيار الشيف" },
  { id: 11, category: "barbecue", name: "كباب دجاج", description: "أسياخ كباب الدجاج المتبلة والمشوية على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.grill2 },
  { id: 12, category: "barbecue", name: "كبة عالسيخ", description: "كبة مشوية بأسياخ على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.grill1 },
  { id: 13, category: "barbecue", name: "كبة مشوية", description: "أقراص الكبة المحشية باللحم والجوز والمشوية.", price: "٠٠,٠٠٠ ل.س", image: IMG.grill1, tag: "مميز" },
  { id: 14, category: "barbecue", name: "شيش طاوق", description: "مكعبات صدر الدجاج المتبلة على الأسياخ.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },
  { id: 15, category: "barbecue", name: "شيش فخد", description: "شيش فخد الدجاج الطري بتتبيلتنا الخاصة.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },
  { id: 16, category: "barbecue", name: "جوانح", description: "جوانح دجاج مشوية على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },
  { id: 17, category: "barbecue", name: "كلابنك دجاج", description: "نصف دجاجة مسحبة ومشوية على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },

  // Burgers
  { id: 20, category: "burgers", name: "برغر لحم مزدوج", description: "شريحتان من اللحم المشوي مع الجبنة والخس.", price: "٠٠,٠٠٠ ل.س", image: IMG.burger1, tag: "الأكثر مبيعاً" },
  { id: 21, category: "burgers", name: "برغر دجاج", description: "صدر دجاج مشوي مع الخس والطماطم والمايونيز.", price: "٠٠,٠٠٠ ل.س", image: IMG.chickenBurger },

  // Meals
  { id: 30, category: "meals", name: "دجاج شواية", description: "دجاج شواية بتتبيلة شهية يقدم مع المقبلات.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },
  { id: 31, category: "meals", name: "دجاج كامل مشوي", description: "دجاجة كاملة مشوية على الفحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken, tag: "للعائلة" },
  { id: 32, category: "meals", name: "نص دجاج", description: "نصف دجاجة مشوية على الفحم مع بطاطا وثوم.", price: "٠٠,٠٠٠ ل.س", image: IMG.chicken },
  { id: 33, category: "meals", name: "مناسف", description: "منسف أرز تقليدي مع اللحم أو الدجاج.", price: "٠٠,٠٠٠ ل.س", image: IMG.rice1 },
  { id: 34, category: "meals", name: "رز كبسة", description: "أرز الكبسة المتبل يقدم مع اللحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.rice1 },
  { id: 35, category: "meals", name: "رز أبيض", description: "صحن أرز أبيض مطبوخ بعناية.", price: "٠٠,٠٠٠ ل.س", image: IMG.rice1 },
  { id: 36, category: "meals", name: "رز مندي", description: "أرز المندي المدخن بالبهارات الأصيلة.", price: "٠٠,٠٠٠ ل.س", image: IMG.rice1 },
  { id: 37, category: "meals", name: "فريكة", description: "فريكة مطبوخة مع اللحم أو الدجاج والمكسرات.", price: "٠٠,٠٠٠ ل.س", image: IMG.rice1 },

  // Sides
  { id: 40, category: "sides", name: "بوم فريت (بطاطا مقلية)", description: "بطاطا مقلية ذهبية ومقرمشة.", price: "٠٠,٠٠٠ ل.س", image: IMG.fries },
  { id: 41, category: "sides", name: "حمص", description: "حمص ناعم ومهروس مع الطحينة وزيت الزيتون.", price: "٠٠,٠٠٠ ل.س", image: IMG.hummus },
  { id: 42, category: "sides", name: "حمص شاورما دجاج", description: "صحن حمص مغطى بشرائح شاورما الدجاج.", price: "٠٠,٠٠٠ ل.س", image: IMG.hummus, tag: "مميز" },
  { id: 43, category: "sides", name: "حمص شاورما لحم", description: "صحن حمص مغطى بشرائح شاورما اللحم.", price: "٠٠,٠٠٠ ل.س", image: IMG.hummus },
  { id: 44, category: "sides", name: "متبل", description: "باذنجان مشوي ومهروس مع الطحينة واللبن.", price: "٠٠,٠٠٠ ل.س", image: IMG.hummus },
  { id: 45, category: "sides", name: "برك جبنة", description: "لفائف مقرمشة محشوة بالجبنة.", price: "٠٠,٠٠٠ ل.س", image: IMG.fries },
  { id: 46, category: "sides", name: "يالنجي", description: "ورق عنب محشي بالأرز والليمون ودبس الرمان.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad2 },

  // Salads
  { id: 50, category: "salads", name: "فتوش", description: "تشكيلة خضار طازجة مع الخبز المحمص ودبس الرمان.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad1 },
  { id: 51, category: "salads", name: "تبولة", description: "بقدونس مفروم ناعم مع البندورة والبرغل والليمون.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad2 },
  { id: 52, category: "salads", name: "بيواظ", description: "بقدونس وبصل مع السماق لتقديمه مع المشاوي.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad1 },
  { id: 53, category: "salads", name: "سلطة خضرا", description: "سلطة خضار طازجة.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad1 },
  { id: 54, category: "salads", name: "سلطة الموسم", description: "خضار موسمية بتتبيلة الليمون والزيت.", price: "٠٠,٠٠٠ ل.س", image: IMG.salad1 }
];

export const signatureItems = menuItems.filter(item => item.tag);
