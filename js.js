// Данные меню
const menuData = {
    categories: [
        {
            id: 'appetizers',
            icon: '🥗',
            name: {
                ru: 'Закуски',
                uz: 'Gazaklar',
                en: 'Appetizers'
            },
            time: {
                ru: '10 мин',
                uz: '10 daqiqa',
                en: '10 min'
            },
            items: [
                { id: 'chicken', icon: '🍗', name: { ru: 'Чикен', uz: 'Chicken', en: 'Chicken' }, description: { ru: '1 порция', uz: '1 porsiya', en: '1 portion' }, price: 50000 },
                { id: 'dolma', icon: '🍇', name: { ru: 'Долма', uz: 'Do\'lma', en: 'Dolma' }, description: { ru: '2 шт', uz: '2 dona', en: '2 pcs' }, price: 15000 },
                { id: 'samsa', icon: '🥟', name: { ru: 'Самса', uz: 'Somsa', en: 'Samsa' }, description: { ru: '1 шт', uz: '1 dona', en: '1 pc' }, price: 15000 },
                { id: 'fried-dumplings', icon: '🥟', name: { ru: 'Пельмень Жареный', uz: 'Qovurilgan chuchvara', en: 'Fried Dumplings' }, description: { ru: '1 шт', uz: '1 dona', en: '1 pc' }, price: 15000 },
                { id: 'manti', icon: '🥟', name: { ru: 'Манты', uz: 'Manti', en: 'Manti' }, description: { ru: '1 шт', uz: '1 dona', en: '1 pc' }, price: 15000 }
            ]
        },
        {
            id: 'soups',
            icon: '🍜',
            name: {
                ru: 'Супы',
                uz: 'Sho\'rvalar',
                en: 'Soups'
            },
            time: {
                ru: '10 мин',
                uz: '10 daqiqa',
                en: '10 min'
            },
            items: [
                { id: 'shurpa', icon: '🍖', name: { ru: 'Шурпа', uz: 'Sho\'rva', en: 'Shurpa' }, price: 50000 },
                { id: 'shchi', icon: '🥬', name: { ru: 'Щи', uz: 'Shchi', en: 'Cabbage Soup' }, price: 30000 },
                { id: 'mastava', icon: '🍚', name: { ru: 'Мастава', uz: 'Mastava', en: 'Mastava' }, price: 30000 },
                { id: 'guja', icon: '🔥', name: { ru: 'Гужа (горячий суп)', uz: 'Guja (issiq sho\'rva)', en: 'Guja (hot soup)' }, price: 30000 }
            ]
        },
        {
            id: 'salads',
            icon: '🥬',
            name: {
                ru: 'Салаты',
                uz: 'Salatlar',
                en: 'Salads'
            },
            time: {
                ru: '10-15 мин',
                uz: '10-15 daqiqa',
                en: '10-15 min'
            },
            items: [
                { id: 'shashlik-salad', icon: '🥗', name: { ru: 'Салат SHASHLIK.UZ', uz: 'SHASHLIK.UZ salati', en: 'SHASHLIK.UZ Salad' }, price: 60000 },
                { id: 'mens-whim', icon: '🥩', name: { ru: 'Мужской каприз', uz: 'Erkaklar injiqligi', en: 'Men\'s Whim' }, price: 60000 },
                { id: 'french-salad', icon: '🇫🇷', name: { ru: 'Французский', uz: 'Fransuzcha', en: 'French' }, price: 40000 },
                { id: 'majnuntol', icon: '🌿', name: { ru: 'Мажнунтол', uz: 'Majnuntol', en: 'Majnuntol' }, price: 50000 },
                { id: 'crispy-eggplant', icon: '🍆', name: { ru: 'Хрустящий баклажан', uz: 'Qarsildoq baqlajon', en: 'Crispy Eggplant' }, price: 50000 },
                { id: 'caesar', icon: '🥬', name: { ru: 'Цезарь', uz: 'Sezar', en: 'Caesar' }, price: 50000 },
                { id: 'olivier', icon: '🥔', name: { ru: 'Оливье', uz: 'Olivye', en: 'Olivier' }, price: 40000 },
                { id: 'smak', icon: '😋', name: { ru: 'Смак', uz: 'Smak', en: 'Smak' }, price: 45000 },
                { id: 'shanghai', icon: '🥢', name: { ru: 'Шанхай', uz: 'Shanxay', en: 'Shanghai' }, price: 60000 },
                { id: 'greek', icon: '🇬🇷', name: { ru: 'Греческий', uz: 'Grekcha', en: 'Greek' }, price: 50000 },
                { id: 'achchik-chuchuk', icon: '🍅', name: { ru: 'Аччик-Чучук (по-Ташкентски)', uz: 'Achchiq-chuchuk (Toshkentcha)', en: 'Achchik-Chuchuk (Tashkent style)' }, price: 35000 },
                { id: 'fresh-salad', icon: '🥗', name: { ru: 'Свежий салат', uz: 'Yangi salat', en: 'Fresh Salad' }, price: 30000 },
                { id: 'eva', icon: '👩', name: { ru: 'Ева', uz: 'Eva', en: 'Eva' }, price: 50000 },
                { id: 'khorovats', icon: '🔥', name: { ru: 'Хоровац', uz: 'Xorovats', en: 'Khorovats' }, price: 40000 },
                { id: 'vinaigrette', icon: '🥕', name: { ru: 'Винегрет', uz: 'Vinegret', en: 'Vinaigrette' }, price: 35000 },
                { id: 'vitamin-salad', icon: '💪', name: { ru: 'Салат "Витамин"', uz: '"Vitamin" salati', en: 'Vitamin Salad' }, price: 40000 },
                { id: 'vegetable-assortment', icon: '🥦', name: { ru: 'Ассорти из овощей', uz: 'Sabzavotlar assortisi', en: 'Vegetable Assortment' }, price: 70000 },
                { id: 'herbs-assortment', icon: '🌿', name: { ru: 'Ассорти из зелени', uz: 'Ko\'katlar assortisi', en: 'Herbs Assortment' }, price: 40000 },
                { id: 'suzma', icon: '🥛', name: { ru: 'Сузьма', uz: 'Suzma', en: 'Suzma' }, price: 15000 },
                { id: 'lemon', icon: '🍋', name: { ru: 'Лимон', uz: 'Limon', en: 'Lemon' }, price: 15000 }
            ]
        },
        {
            id: 'main-dishes',
            icon: '🍖',
            name: {
                ru: 'Второе',
                uz: 'Issiq ovqatlar',
                en: 'Main Dishes'
            },
            time: {
                ru: '20 мин',
                uz: '20 daqiqa',
                en: '20 min'
            },
            items: [
                { id: 'jiz-biz-lamb', icon: '🍖', name: { ru: 'Джиз-Биз (баранина)', uz: 'Jiz-biz (qo\'y go\'shti)', en: 'Jiz-Biz (lamb)' }, description: { ru: '250г + гарнир + соус', uz: '250g + garnir + sous', en: '250g + side + sauce' }, price: 100000 },
                { id: 'jiz-biz-beef', icon: '🥩', name: { ru: 'Джиз-Биз (говядина)', uz: 'Jiz-biz (mol go\'shti)', en: 'Jiz-Biz (beef)' }, description: { ru: '250г + гарнир + соус', uz: '250g + garnir + sous', en: '250g + side + sauce' }, price: 120000 },
                { id: 'chicken-cutlets', icon: '🍗', name: { ru: 'Котлета из курицы', uz: 'Tovuq kotleti', en: 'Chicken Cutlets' }, description: { ru: '4 шт + гарнир + соус', uz: '4 dona + garnir + sous', en: '4 pcs + side + sauce' }, price: 80000 },
                { id: 'beef-cutlets', icon: '🥩', name: { ru: 'Котлета из говядины', uz: 'Mol go\'shti kotleti', en: 'Beef Cutlets' }, description: { ru: '4 шт + гарнир + соус', uz: '4 dona + garnir + sous', en: '4 pcs + side + sauce' }, price: 120000 },
                { id: 'lamb-cutlets', icon: '🍖', name: { ru: 'Котлета из баранины', uz: 'Qo\'y go\'shti kotleti', en: 'Lamb Cutlets' }, description: { ru: '4 шт + гарнир + соус', uz: '4 dona + garnir + sous', en: '4 pcs + side + sauce' }, price: 100000 },
                { id: 'ribeye-steak', icon: '🥩', name: { ru: 'Стейк Рибай', uz: 'Ribay steyk', en: 'Ribeye Steak' }, description: { ru: '500г, сухое вызревание', uz: '500g, quruq yetilish', en: '500g, dry-aged' }, price: 250000 },
                { id: 'tbone-steak', icon: '🥩', name: { ru: 'Стейк Тибон', uz: 'Tibon steyk', en: 'T-bone Steak' }, description: { ru: '500г, сухое вызревание', uz: '500g, quruq yetilish', en: '500g, dry-aged' }, price: 250000 },
                { id: 'set-4', icon: '👥', name: { ru: 'Сет шашлыков на 4 персон', uz: '4 kishilik shashlik seti', en: 'Kebab Set for 4' }, price: 400000 },
                { id: 'set-6', icon: '👥', name: { ru: 'Сет шашлыков на 6 персон', uz: '6 kishilik shashlik seti', en: 'Kebab Set for 6' }, price: 600000 },
                { id: 'set-8', icon: '👥', name: { ru: 'Сет шашлыков на 8 персон', uz: '8 kishilik shashlik seti', en: 'Kebab Set for 8' }, price: 800000 }
            ]
        },
        {
            id: 'shashlik',
            icon: '🍢',
            name: {
                ru: 'Шашлыки',
                uz: 'Shashliklar',
                en: 'Shashlik'
            },
            time: {
                ru: '10-20 мин',
                uz: '10-20 daqiqa',
                en: '10-20 min'
            },
            items: [
                { id: 'ground-beef', icon: '🥩', name: { ru: 'Молотый из говядины', uz: 'Mol go\'shtidan qiyma', en: 'Ground Beef' }, description: { ru: '110г', uz: '110g', en: '110g' }, price: 30000 },
                { id: 'ground-lamb', icon: '🍖', name: { ru: 'Молотый из баранины', uz: 'Qo\'y go\'shtidan qiyma', en: 'Ground Lamb' }, description: { ru: '110г', uz: '110g', en: '110g' }, price: 25000 },
                { id: 'ground-chicken', icon: '🍗', name: { ru: 'Молотый из курицы', uz: 'Tovuqdan qiyma', en: 'Ground Chicken' }, description: { ru: '110г', uz: '110g', en: '110g' }, price: 20000 },
                { id: 'chicken-thigh', icon: '🍗', name: { ru: 'Куриное бедро', uz: 'Tovuq soni', en: 'Chicken Thigh' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 30000 },
                { id: 'chicken-wings', icon: '🍗', name: { ru: 'Куриные крылышки', uz: 'Tovuq qanotlari', en: 'Chicken Wings' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 30000 },
                { id: 'dumba', icon: '🥓', name: { ru: 'Думба', uz: 'Dumba', en: 'Fat Tail' }, description: { ru: '130г', uz: '130g', en: '130g' }, price: 30000 },
                { id: 'liver', icon: '🫁', name: { ru: 'Жигар', uz: 'Jigar', en: 'Liver' }, description: { ru: '130г', uz: '130g', en: '130g' }, price: 25000 },
                { id: 'spicy-sausages', icon: '🌭', name: { ru: 'Колбаски говяжьи острые', uz: 'Achchiq mol go\'shti kolbasalari', en: 'Spicy Beef Sausages' }, description: { ru: '1 шт', uz: '1 dona', en: '1 pc' }, price: 30000 },
                { id: 'beef-sausages', icon: '🌭', name: { ru: 'Колбаски говяжьи', uz: 'Mol go\'shti kolbasalari', en: 'Beef Sausages' }, description: { ru: '1 шт', uz: '1 dona', en: '1 pc' }, price: 30000 },
                { id: 'lamb-chunks', icon: '🍖', name: { ru: 'Кусковой из баранины', uz: 'Qo\'y go\'shti bo\'laklari', en: 'Lamb Chunks' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 35000 },
                { id: 'beef-tenderloin', icon: '🥩', name: { ru: 'Говяжья вырезка', uz: 'Mol go\'shti bo\'laklari', en: 'Beef Tenderloin' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 40000 },
                { id: 'bomb', icon: '💣', name: { ru: 'Бомбочка', uz: 'Bombachka', en: 'Bomb' }, description: { ru: '130г', uz: '130g', en: '130g' }, price: 35000 },
                { id: 'napoleon', icon: '🍰', name: { ru: 'Наполеон', uz: 'Napoleon', en: 'Napoleon' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 35000 },
                { id: 'roll', icon: '🌀', name: { ru: 'Рулет', uz: 'Rulet', en: 'Roll' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 35000 },
                { id: 'lamb-ribs', icon: '🦴', name: { ru: 'Бараньи ребрышки', uz: 'Qo\'y qovurg\'alari', en: 'Lamb Ribs' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 35000 },
                { id: 'lamb-loin', icon: '🍖', name: { ru: 'Баранья корейка', uz: 'Qo\'y koreykasi', en: 'Lamb Loin' }, description: { ru: '110г', uz: '110g', en: '110g' }, price: 45000 },
                { id: 'cutlet-cheese', icon: '🧀', name: { ru: 'Котлета с сыром', uz: 'Pishloqli kotlet', en: 'Cutlet with Cheese' }, description: { ru: '130г', uz: '130g', en: '130g' }, price: 40000 },
                { id: 'trout-shashlik', icon: '🐟', name: { ru: 'Шашлык из форели', uz: 'Forel shashligi', en: 'Trout Shashlik' }, description: { ru: '120г', uz: '120g', en: '120g' }, price: 50000 },
                { id: 'bikin', icon: '🥓', name: { ru: 'Бикин', uz: 'Bikin', en: 'Bikin' }, description: { ru: '180-200г', uz: '180-200g', en: '180-200g' }, price: 50000 },
                { id: 'grilled-potato', icon: '🥔', name: { ru: 'Картофель на гриле', uz: 'Gril kartoshka', en: 'Grilled Potato' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 15000 },
                { id: 'grilled-corn', icon: '🌽', name: { ru: 'Кукуруза на гриле', uz: 'Gril makkajo\'xori', en: 'Grilled Corn' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 20000 },
                { id: 'grilled-tomatoes', icon: '🍅', name: { ru: 'Помидоры на гриле', uz: 'Gril pomidorlar', en: 'Grilled Tomatoes' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 20000 },
                { id: 'grilled-vegetables', icon: '🥬', name: { ru: 'Овощи на гриле', uz: 'Gril sabzavotlar', en: 'Grilled Vegetables' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 25000 },
                { id: 'bone-marrow', icon: '🦴', name: { ru: 'Илик с соусом чимичури', uz: 'Ilik chimichuri sousi bilan', en: 'Bone Marrow with Chimichurri' }, description: { ru: '200г', uz: '200g', en: '200g' }, price: 100000 }
            ]
        },
        {
            id: 'drinks',
            icon: '🥤',
            name: {
                ru: 'Напитки',
                uz: 'Ichimliklar',
                en: 'Drinks'
            },
            time: {
                ru: '5 мин',
                uz: '5 daqiqa',
                en: '5 min'
            },
            items: [
                { id: 'ayran', icon: '🥛', name: { ru: 'Натуральный Айран', uz: 'Tabiiy ayron', en: 'Natural Ayran' }, description: { ru: '1 литр', uz: '1 litr', en: '1 liter' }, price: 25000 },
                { id: 'compote', icon: '🍑', name: { ru: 'Компот из кураги', uz: 'O\'rik kompoti', en: 'Dried Apricot Compote' }, description: { ru: '1 литр (туршак об)', uz: '1 litr (turshak ob)', en: '1 liter (turshak ob)' }, price: 30000 }
            ]
        },
        {
            id: 'sauces',
            icon: '🥫',
            name: {
                ru: 'Соусы',
                uz: 'Souslar',
                en: 'Sauces'
            },
            time: {
                ru: '5 мин',
                uz: '5 daqiqa',
                en: '5 min'
            },
            items: [
                { id: 'tomato-sauce', icon: '🍅', name: { ru: 'Томатный соус', uz: 'Pomidor sousi', en: 'Tomato Sauce' }, price: 5000 },
                { id: 'garlic-sauce', icon: '🧄', name: { ru: 'Чесночный соус', uz: 'Sarimsoq sousi', en: 'Garlic Sauce' }, price: 5000 },
                { id: 'bbq-sauce', icon: '🔥', name: { ru: 'Барбекю соус', uz: 'Barbekyu sousi', en: 'BBQ Sauce' }, price: 5000 },
                { id: 'fresh-tomato-sauce', icon: '🍅', name: { ru: 'Соус из свежего помидора', uz: 'Yangi pomidor sousi', en: 'Fresh Tomato Sauce' }, price: 5000 },
                { id: 'adjika', icon: '🌶️', name: { ru: 'Соус Аджика', uz: 'Adjika sousi', en: 'Adjika Sauce' }, price: 5000 }
            ]
        },
        {
            id: 'sides',
            icon: '🍟',
            name: {
                ru: 'Гарниры',
                uz: 'Garnirlar',
                en: 'Side Dishes'
            },
            time: {
                ru: '10 мин',
                uz: '10 daqiqa',
                en: '10 min'
            },
            items: [
                { id: 'fries', icon: '🍟', name: { ru: 'Картофель фри', uz: 'Kartoshka fri', en: 'French Fries' }, price: 20000 },
                { id: 'country-potatoes', icon: '🥔', name: { ru: 'Картофель по-деревенски', uz: 'Qishloqcha kartoshka', en: 'Country-style Potatoes' }, price: 20000 },
                { id: 'potato-chips', icon: '🥔', name: { ru: 'Картофельные чипсы', uz: 'Kartoshka chipslari', en: 'Potato Chips' }, price: 20000 },
                { id: 'rice-vegetables', icon: '🍚', name: { ru: 'Рис с овощами', uz: 'Sabzavotli guruch', en: 'Rice with Vegetables' }, price: 20000 }
            ]
        },
        {
            id: 'desserts',
            icon: '🍰',
            name: {
                ru: 'Десерты',
                uz: 'Desertlar',
                en: 'Desserts'
            },
            items: [
                { id: 'saber-icecream', icon: '🍦', name: { ru: 'Мороженое SABER', uz: 'SABER muzqaymog\'i', en: 'SABER Ice Cream' }, description: { ru: 'Ассортимент', uz: 'Assorti', en: 'Assortment' }, price: null },
                { id: 'fruit-plate', icon: '🍉', name: { ru: 'Фруктовая тарелка', uz: 'Meva tovoq', en: 'Fruit Plate' }, description: { ru: 'Сезонные фрукты', uz: 'Mavsumiy mevalar', en: 'Seasonal fruits' }, price: 100000 },
                { id: 'desserts-choice', icon: '🍰', name: { ru: 'Десерты на выбор', uz: 'Tanlangan desertlar', en: 'Desserts on Choice' }, price: null }
            ]
        }
    ]
};

// Интерфейс поддерживает языки, которые чаще всего нужны гостям Самарканда.
// Для каждой позиции ниже добавлены понятные названия и состав. Если ресторан
// меняет рецепт, эти тексты можно быстро заменить в одном месте.
const localizedDishNames = {
    chicken: { tg: 'Таоми мурғ', kk: 'Тауық тағамы', ky: 'Тоок эти', zh: '鸡肉小食', tr: 'Tavuk yemeği', ko: '치킨 요리', hi: 'चिकन व्यंजन' },
    dolma: { tg: 'Долма', kk: 'Долма', ky: 'Долма', zh: '葡萄叶包肉', tr: 'Yaprak sarma', ko: '돌마', hi: 'डोलमा' },
    samsa: { tg: 'Самса', kk: 'Самса', ky: 'Самса', zh: '烤包子（萨姆萨）', tr: 'Samsa', ko: '삼사', hi: 'समसा' },
    'fried-dumplings': { tg: 'Манти бирёншуда', kk: 'Қуырылған тұшпара', ky: 'Куурулган чүчпара', zh: '煎饺', tr: 'Kızarmış mantı', ko: '튀긴 만두', hi: 'तले हुए मोमोज़' },
    manti: { tg: 'Манту', kk: 'Манты', ky: 'Манты', zh: '蒸饺（曼提）', tr: 'Mantı', ko: '만티', hi: 'मांती' },
    shurpa: { tg: 'Шӯрбои гӯштӣ', kk: 'Шорпа сорпасы', ky: 'Шорпо', zh: '羊肉蔬菜汤', tr: 'Özbek çorbası', ko: '우즈베크식 수프', hi: 'शुर्पा' },
    shchi: { tg: 'Шӯрбои карам', kk: 'Қырыққабат сорпасы', ky: 'Капуста шорпосу', zh: '俄式卷心菜汤', tr: 'Lahana çorbası', ko: '양배추 수프', hi: 'पत्तागोभी का सूप' },
    mastava: { tg: 'Мастава', kk: 'Мастава', ky: 'Мастава', zh: '马斯塔瓦米汤', tr: 'Mastava çorbası', ko: '마스타바 수프', hi: 'मस्तवा' },
    guja: { tg: 'Гуҷа (шӯрбои гарм)', kk: 'Гужа (ыстық сорпа)', ky: 'Гужа (ысык шорпо)', zh: '古жа热汤', tr: 'Guja sıcak çorbası', ko: '구자 수프', hi: 'गरम गुझा सूप' },
    'shashlik-salad': { tg: 'Хӯриши SHASHLIK.UZ', kk: 'SHASHLIK.UZ салаты', ky: 'SHASHLIK.UZ салаты', zh: 'SHASHLIK.UZ 沙拉', tr: 'SHASHLIK.UZ salatası', ko: 'SHASHLIK.UZ 샐러드', hi: 'SHASHLIK.UZ सलाद' },
    'mens-whim': { tg: 'Хӯриши гӯштӣ', kk: 'Етті салат', ky: 'Эттүү салат', zh: '牛肉奶酪沙拉', tr: 'Etli özel salata', ko: '소고기 치즈 샐러드', hi: 'मांस और चीज़ सलाद' },
    'french-salad': { tg: 'Хӯриши фаронсавӣ', kk: 'Француз салаты', ky: 'Француз салаты', zh: '法式沙拉', tr: 'Fransız salatası', ko: '프렌치 샐러드', hi: 'फ्रेंच सलाद' },
    majnuntol: { tg: 'Мажнунтол', kk: 'Мажнунтол', ky: 'Мажнунтол', zh: '马俊托尔沙拉', tr: 'Majnuntol salatası', ko: '마준톨 샐러드', hi: 'मजुनतोल सलाद' },
    'crispy-eggplant': { tg: 'Бодинҷони қирмиз', kk: 'Қытырлақ баялды', ky: 'Кытырак баклажан', zh: '脆皮茄子', tr: 'Çıtır patlıcan', ko: '바삭한 가지', hi: 'कुरकुरा बैंगन' },
    caesar: { tg: 'Хӯриши Сезар', kk: 'Цезарь салаты', ky: 'Цезарь салаты', zh: '凯撒沙拉', tr: 'Sezar salatası', ko: '시저 샐러드', hi: 'सीज़र सलाद' },
    olivier: { tg: 'Хӯриши Оливйе', kk: 'Оливье салаты', ky: 'Оливье салаты', zh: '俄式土豆沙拉', tr: 'Olivier salatası', ko: '올리비에 샐러드', hi: 'ओलिवियर सलाद' },
    smak: { tg: 'Салати Смак', kk: 'Смак салаты', ky: 'Смак салаты', zh: '斯马克沙拉', tr: 'Smak salatası', ko: '스막 샐러드', hi: 'स्मक सलाद' },
    shanghai: { tg: 'Хӯриши Шанхай', kk: 'Шанхай салаты', ky: 'Шанхай салаты', zh: '上海沙拉', tr: 'Şanghay salatası', ko: '상하이 샐러드', hi: 'शंघाई सलाद' },
    greek: { tg: 'Хӯриши юнонӣ', kk: 'Грек салаты', ky: 'Грек салаты', zh: '希腊沙拉', tr: 'Yunan salatası', ko: '그리스 샐러드', hi: 'ग्रीक सलाद' },
    'achchik-chuchuk': { tg: 'Аччиқ-чучук', kk: 'Аччик-чучук', ky: 'Аччик-чучук', zh: '乌兹别克辣番茄沙拉', tr: 'Acçik-çüçük', ko: '아치치쿠추크', hi: 'अचिक-चुचुक' },
    'fresh-salad': { tg: 'Хӯриши тару тоза', kk: 'Жаңа салат', ky: 'Жаңы салат', zh: '鲜蔬沙拉', tr: 'Taze salata', ko: '신선한 샐러드', hi: 'ताज़ा सलाद' },
    eva: { tg: 'Хӯриши Ева', kk: 'Ева салаты', ky: 'Ева салаты', zh: '伊娃沙拉', tr: 'Eva salatası', ko: '에바 샐러드', hi: 'ईवा सलाद' },
    khorovats: { tg: 'Хороватс', kk: 'Хоровац', ky: 'Хоровац', zh: '烤蔬菜沙拉', tr: 'Horovats', ko: '호로바츠', hi: 'खोरोवात्स' },
    vinaigrette: { tg: 'Винегрет', kk: 'Винегрет', ky: 'Винегрет', zh: '甜菜根沙拉', tr: 'Vinegret', ko: '비네그레트', hi: 'विनैग्रेट' },
    'vitamin-salad': { tg: 'Хӯриши «Витамин»', kk: '«Витамин» салаты', ky: '«Витамин» салаты', zh: '维生素沙拉', tr: 'Vitamin salatası', ko: '비타민 샐러드', hi: 'विटामिन सलाद' },
    'vegetable-assortment': { tg: 'Маҷмӯаи сабзавот', kk: 'Көкөніс ассортиі', ky: 'Жашылча ассортиси', zh: '时令蔬菜拼盘', tr: 'Sebze tabağı', ko: '채소 모둠', hi: 'सब्ज़ियों की प्लेट' },
    'herbs-assortment': { tg: 'Маҷмӯаи кабудӣ', kk: 'Көк шөптер ассортиі', ky: 'Көк чөптөр ассортиси', zh: '香草拼盘', tr: 'Yeşillik tabağı', ko: '허브 모둠', hi: 'हर्ब प्लेट' },
    suzma: { tg: 'Сузма', kk: 'Сүзбе', ky: 'Сүзмө', zh: '浓缩酸奶', tr: 'Süzme yoğurt', ko: '수즈마 요거트', hi: 'सुझ़्मा दही' },
    lemon: { tg: 'Лимӯ', kk: 'Лимон', ky: 'Лимон', zh: '柠檬', tr: 'Limon', ko: '레몬', hi: 'नींबू' },
    'jiz-biz-lamb': { tg: 'Ҷиз-биз (гӯсфанд)', kk: 'Жиз-биз (қой еті)', ky: 'Жиз-биз (кой эти)', zh: '羊肉煎锅', tr: 'Jiz-Biz (kuzu)', ko: '지즈비즈 양고기', hi: 'जिज़-बिज़ (भेड़ का मांस)' },
    'jiz-biz-beef': { tg: 'Ҷиз-биз (гов)', kk: 'Жиз-биз (сиыр еті)', ky: 'Жиз-биз (уй эти)', zh: '牛肉煎锅', tr: 'Jiz-Biz (dana)', ko: '지즈비즈 소고기', hi: 'जिज़-बिज़ (गोमांस)' },
    'chicken-cutlets': { tg: 'Котлети мурғ', kk: 'Тауық котлеті', ky: 'Тоок котлети', zh: '鸡肉饼', tr: 'Tavuk köftesi', ko: '치킨 커틀릿', hi: 'चिकन कटलेट' },
    'beef-cutlets': { tg: 'Котлети гов', kk: 'Сиыр котлеті', ky: 'Уй котлети', zh: '牛肉饼', tr: 'Dana köftesi', ko: '소고기 커틀릿', hi: 'बीफ़ कटलेट' },
    'lamb-cutlets': { tg: 'Котлети гӯсфанд', kk: 'Қой котлеті', ky: 'Кой котлети', zh: '羊肉饼', tr: 'Kuzu köftesi', ko: '양고기 커틀릿', hi: 'भेड़ के मांस का कटलेट' },
    'ribeye-steak': { tg: 'Стейки Рибай', kk: 'Рибай стейкі', ky: 'Рибай стейк', zh: '肉眼牛排', tr: 'Ribeye biftek', ko: '립아이 스테이크', hi: 'रिबआई स्टेक' },
    'tbone-steak': { tg: 'Стейки Ти-бон', kk: 'Ти-бон стейкі', ky: 'Ти-бон стейк', zh: 'T骨牛排', tr: 'T-bone biftek', ko: '티본 스테이크', hi: 'टी-बोन स्टेक' },
    'set-4': { tg: 'Маҷмӯаи шашлик барои 4 нафар', kk: '4 адамға арналған кәуап сеті', ky: '4 кишилик шашлык сети', zh: '4人烤肉套餐', tr: '4 kişilik kebap seti', ko: '4인 케밥 세트', hi: '4 लोगों का कबाब सेट' },
    'set-6': { tg: 'Маҷмӯаи шашлик барои 6 нафар', kk: '6 адамға арналған кәуап сеті', ky: '6 кишилик шашлык сети', zh: '6人烤肉套餐', tr: '6 kişilik kebap seti', ko: '6인 케밥 세트', hi: '6 लोगों का कबाब सेट' },
    'set-8': { tg: 'Маҷмӯаи шашлик барои 8 нафар', kk: '8 адамға арналған кәуап сеті', ky: '8 кишилик шашлык сети', zh: '8人烤肉套餐', tr: '8 kişilik kebap seti', ko: '8인 케밥 세트', hi: '8 लोगों का कबाब सेट' },
    'ground-beef': { tg: 'Люля-кебоби гов', kk: 'Тартылған сиыр кәуабы', ky: 'Уй этинен люля-кебаб', zh: '牛肉碎肉烤串', tr: 'Kıyma kebap', ko: '소고기 다진 케밥', hi: 'कीमा कबाब' },
    'ground-lamb': { tg: 'Люля-кебоби гӯсфанд', kk: 'Тартылған қой кәуабы', ky: 'Кой этинен люля-кебаб', zh: '羊肉碎肉烤串', tr: 'Kuzu kıyma kebabı', ko: '양고기 다진 케밥', hi: 'भेड़ के मांस का कीमा कबाब' },
    'ground-chicken': { tg: 'Люля-кебоби мурғ', kk: 'Тартылған тауық кәуабы', ky: 'Тоок этинен люля-кебаб', zh: '鸡肉碎肉烤串', tr: 'Tavuk kıyma kebabı', ko: '닭고기 다진 케밥', hi: 'चिकन कीमा कबाब' },
    'chicken-thigh': { tg: 'Рони мурғи грилшуда', kk: 'Гриль тауық саны', ky: 'Гриль тооктун саны', zh: '烤鸡腿肉', tr: 'Izgara tavuk budu', ko: '그릴 닭다리살', hi: 'ग्रिल्ड चिकन थाई' },
    'chicken-wings': { tg: 'Болҳои мурғ', kk: 'Тауық қанаттары', ky: 'Тоок канаттары', zh: '烤鸡翅', tr: 'Tavuk kanadı', ko: '치킨 윙', hi: 'चिकन विंग्स' },
    dumba: { tg: 'Думба', kk: 'Құйрық майы', ky: 'Куйрук майы', zh: '羊尾油烤串', tr: 'Kuyruk yağı şiş', ko: '양꼬리 지방 꼬치', hi: 'दुम्बा (भेड़ की पूँछ की चर्बी)' },
    liver: { tg: 'Ҷигар', kk: 'Бауыр кәуабы', ky: 'Боор шашлыгы', zh: '烤肝串', tr: 'Ciğer şiş', ko: '간 꼬치', hi: 'कलेजी कबाब' },
    'spicy-sausages': { tg: 'Ҳасибчаҳои тези гов', kk: 'Ащы сиыр шұжығы', ky: 'Ачуу уй колбасасы', zh: '香辣牛肉肠', tr: 'Acılı dana sosis', ko: '매운 소고기 소시지', hi: 'मसालेदार बीफ़ सॉसेज' },
    'beef-sausages': { tg: 'Ҳасибчаҳои гов', kk: 'Сиыр шұжығы', ky: 'Уй колбасасы', zh: '牛肉肠', tr: 'Dana sosis', ko: '소고기 소시지', hi: 'बीफ़ सॉसेज' },
    'lamb-chunks': { tg: 'Пораҳои гӯсфанд', kk: 'Қой етінің кесектері', ky: 'Кой этинен кесимдер', zh: '羊肉块烤串', tr: 'Kuzu kuşbaşı şiş', ko: '양고기 큐브 꼬치', hi: 'भेड़ के मांस के टुकड़े' },
    'beef-tenderloin': { tg: 'Филе гов', kk: 'Сиыр филе кәуабы', ky: 'Уй филеси', zh: '牛里脊烤串', tr: 'Bonfile şiş', ko: '소 안심 꼬치', hi: 'बीफ़ टेंडरलॉइन' },
    bomb: { tg: 'Бомбача', kk: 'Бомбочка', ky: 'Бомбочка', zh: '芝士肉丸烤串', tr: 'Bombalı köfte', ko: '치즈 미트볼 꼬치', hi: 'बॉम्ब मीटबॉल' },
    napoleon: { tg: 'Наполеон (кебоб)', kk: 'Наполеон кәуабы', ky: 'Наполеон шашлыгы', zh: '拿破仑烤肉串', tr: 'Napolyon kebabı', ko: '나폴레옹 케밥', hi: 'नेपोलियन कबाब' },
    roll: { tg: 'Рулети гӯштӣ', kk: 'Ет рулеті', ky: 'Эт рулети', zh: '肉卷烤串', tr: 'Etli rulo', ko: '고기 롤 꼬치', hi: 'मीट रोल' },
    'lamb-ribs': { tg: 'Қабурғаҳои гӯсфанд', kk: 'Қой қабырғасы', ky: 'Кой кабыргасы', zh: '烤羊肋排', tr: 'Kuzu kaburga', ko: '양갈비', hi: 'भेड़ की पसलियाँ' },
    'lamb-loin': { tg: 'Корейкаи гӯсфанд', kk: 'Қой белдемесі', ky: 'Кой корейкасы', zh: '烤羊里脊', tr: 'Kuzu pirzola', ko: '양 등심', hi: 'भेड़ की लोइन' },
    'cutlet-cheese': { tg: 'Котлет бо панир', kk: 'Ірімшікті котлет', ky: 'Сырдуу котлет', zh: '芝士肉饼', tr: 'Peynirli köfte', ko: '치즈 커틀릿', hi: 'चीज़ कटलेट' },
    'trout-shashlik': { tg: 'Шашлики гулмоҳӣ', kk: 'Бақтақ кәуабы', ky: 'Форель шашлыгы', zh: '鳟鱼烤串', tr: 'Alabalık şiş', ko: '송어 꼬치', hi: 'ट्राउट कबाब' },
    bikin: { tg: 'Бикин', kk: 'Бикин', ky: 'Бикин', zh: '牛肉培根烤串', tr: 'Bikin şiş', ko: '비킨 꼬치', hi: 'बिकिन कबाब' },
    'grilled-potato': { tg: 'Картошкаи грил', kk: 'Гриль картоп', ky: 'Гриль картошкасы', zh: '烤土豆', tr: 'Izgara patates', ko: '그릴 감자', hi: 'ग्रिल्ड आलू' },
    'grilled-corn': { tg: 'Ҷуворимаккаи грил', kk: 'Гриль жүгері', ky: 'Гриль жүгөрү', zh: '烤玉米', tr: 'Izgara mısır', ko: '그릴 옥수수', hi: 'ग्रिल्ड मकई' },
    'grilled-tomatoes': { tg: 'Помидори грил', kk: 'Гриль қызанақ', ky: 'Гриль помидор', zh: '烤番茄', tr: 'Izgara domates', ko: '그릴 토마토', hi: 'ग्रिल्ड टमाटर' },
    'grilled-vegetables': { tg: 'Сабзавоти грил', kk: 'Гриль көкөніс', ky: 'Гриль жашылчалар', zh: '烤时蔬', tr: 'Izgara sebze', ko: '그릴 채소', hi: 'ग्रिल्ड सब्ज़ियाँ' },
    'bone-marrow': { tg: 'Мағзи устухон бо чимичурри', kk: 'Чимичурри қосылған сүйек кемігі', ky: 'Чимичурри соусу менен жилик', zh: '香草酱烤骨髓', tr: 'Chimichurri soslu ilik', ko: '치미추리 골수', hi: 'चिमिचुर्री बोन मैरो' },
    ayran: { tg: 'Айрони табиӣ', kk: 'Табиғи айран', ky: 'Табигый айран', zh: '天然咸酸奶饮', tr: 'Doğal ayran', ko: '천연 아이란', hi: 'प्राकृतिक आयरन' },
    compote: { tg: 'Компоти зардолуи хушк', kk: 'Кептірілген өрік компоты', ky: 'Кургатылган өрүк компоту', zh: '杏干果饮', tr: 'Kuru kayısı hoşafı', ko: '말린 살구 콤포트', hi: 'सूखी खुबानी का कंपोट' },
    'tomato-sauce': { tg: 'Чошнии помидор', kk: 'Томат соусы', ky: 'Помидор соусу', zh: '番茄酱', tr: 'Domates sosu', ko: '토마토 소스', hi: 'टमाटर सॉस' },
    'garlic-sauce': { tg: 'Чошнии сир', kk: 'Сарымсақ соусы', ky: 'Сарымсак соусу', zh: '蒜香酱', tr: 'Sarımsak sosu', ko: '마늘 소스', hi: 'लहसुन सॉस' },
    'bbq-sauce': { tg: 'Чошнии барбекю', kk: 'Барбекю соусы', ky: 'Барбекю соусу', zh: '烧烤酱', tr: 'Barbekü sosu', ko: '바비큐 소스', hi: 'बारबेक्यू सॉस' },
    'fresh-tomato-sauce': { tg: 'Чошнии помидори тару тоза', kk: 'Жаңа қызанақ соусы', ky: 'Жаңы помидор соусу', zh: '鲜番茄酱', tr: 'Taze domates sosu', ko: '생토마토 소스', hi: 'ताज़ा टमाटर सॉस' },
    adjika: { tg: 'Чошнии аджика', kk: 'Аджика соусы', ky: 'Аджика соусу', zh: '阿吉卡辣酱', tr: 'Acı adjika sosu', ko: '아지카 소스', hi: 'अदजिका सॉस' },
    fries: { tg: 'Картошкаи бирён', kk: 'Фри картоп', ky: 'Фри картошка', zh: '薯条', tr: 'Patates kızartması', ko: '감자튀김', hi: 'फ्रेंच फ्राइज़' },
    'country-potatoes': { tg: 'Картошкаи рустикӣ', kk: 'Ауылша картоп', ky: 'Айылча картошка', zh: '乡村风味土豆', tr: 'Elma dilim patates', ko: '웨지 감자', hi: 'कंट्री-स्टाइल आलू' },
    'potato-chips': { tg: 'Чипсҳои картошка', kk: 'Картоп чипсы', ky: 'Картошка чипсы', zh: '薯片', tr: 'Patates cipsi', ko: '감자칩', hi: 'आलू चिप्स' },
    'rice-vegetables': { tg: 'Биринҷ бо сабзавот', kk: 'Көкөністі күріш', ky: 'Жашылчалуу күрүч', zh: '蔬菜炒饭', tr: 'Sebzeli pilav', ko: '채소 밥', hi: 'सब्ज़ियों वाला चावल' },
    'saber-icecream': { tg: 'Яхмоси SABER', kk: 'SABER балмұздағы', ky: 'SABER балмуздагы', zh: 'SABER 冰淇淋', tr: 'SABER dondurma', ko: 'SABER 아이스크림', hi: 'SABER आइसक्रीम' },
    'fruit-plate': { tg: 'Табақи меваҳои мавсимӣ', kk: 'Маусымдық жеміс табағы', ky: 'Мезгилдик мөмө табагы', zh: '时令水果拼盘', tr: 'Mevsim meyveleri tabağı', ko: '제철 과일 플레이트', hi: 'मौसमी फलों की प्लेट' },
    'desserts-choice': { tg: 'Интихоби шириниҳо', kk: 'Десерт таңдау', ky: 'Десерт тандоо', zh: '精选甜点', tr: 'Tatlı seçkisi', ko: '디저트 모둠', hi: 'मिठाइयों का चयन' }
};

const dishIngredients = {
    chicken: ['chicken', 'herbs', 'spices'], dolma: ['grapeLeaves', 'rice', 'beef', 'onions', 'herbs'], samsa: ['dough', 'lamb', 'onions', 'spices'],
    'fried-dumplings': ['dough', 'beef', 'onions', 'spices'], manti: ['dough', 'beef', 'onions'],
    shurpa: ['lamb', 'potato', 'carrot', 'onions', 'tomato', 'herbs'], shchi: ['cabbage', 'potato', 'carrot', 'onions'],
    mastava: ['beef', 'rice', 'carrot', 'onions', 'tomato', 'herbs'], guja: ['wheat', 'chickpeas', 'beans', 'herbs'],
    'shashlik-salad': ['tomato', 'cucumber', 'onions', 'herbs'], 'mens-whim': ['beef', 'cheese', 'egg', 'mayonnaise'],
    'french-salad': ['chicken', 'potato', 'carrot', 'peas', 'mayonnaise'], majnuntol: ['herbs', 'cucumber', 'yogurt'],
    'crispy-eggplant': ['eggplant', 'tomato', 'garlic', 'herbs'], caesar: ['lettuce', 'chicken', 'cheese', 'croutons', 'caesarDressing'],
    olivier: ['potato', 'carrot', 'peas', 'egg', 'pickles', 'mayonnaise'], smak: ['beef', 'cheese', 'egg', 'mayonnaise'],
    shanghai: ['chicken', 'cucumber', 'carrot', 'sesame', 'soySauce'], greek: ['tomato', 'cucumber', 'bellPepper', 'onions', 'oliveOil', 'cheese'],
    'achchik-chuchuk': ['tomato', 'onions', 'chili'], 'fresh-salad': ['tomato', 'cucumber', 'herbs', 'onions'],
    eva: ['chicken', 'mushrooms', 'cheese', 'mayonnaise'], khorovats: ['eggplant', 'tomato', 'bellPepper', 'onions'],
    vinaigrette: ['beet', 'potato', 'carrot', 'pickles', 'peas', 'oil'], 'vitamin-salad': ['cabbage', 'carrot', 'apple', 'herbs', 'oil'],
    'vegetable-assortment': ['tomato', 'cucumber', 'bellPepper', 'onions', 'herbs'], 'herbs-assortment': ['dill', 'parsley', 'cilantro', 'greenOnion'],
    suzma: ['yogurt', 'salt', 'herbs'], lemon: ['lemon'], 'jiz-biz-lamb': ['lamb', 'potato', 'onions', 'herbs', 'spices'],
    'jiz-biz-beef': ['beef', 'potato', 'onions', 'herbs', 'spices'], 'chicken-cutlets': ['chicken', 'onions', 'egg', 'breadcrumbs', 'side'],
    'beef-cutlets': ['beef', 'onions', 'egg', 'breadcrumbs', 'side'], 'lamb-cutlets': ['lamb', 'onions', 'egg', 'breadcrumbs', 'side'],
    'ribeye-steak': ['beef', 'spices', 'side'], 'tbone-steak': ['beef', 'spices', 'side'],
    'set-4': ['lamb', 'beef', 'chicken', 'onions', 'herbs', 'side', 'sauce'], 'set-6': ['lamb', 'beef', 'chicken', 'onions', 'herbs', 'side', 'sauce'],
    'set-8': ['lamb', 'beef', 'chicken', 'onions', 'herbs', 'side', 'sauce'], 'ground-beef': ['beef', 'onions', 'spices'],
    'ground-lamb': ['lamb', 'onions', 'spices'], 'ground-chicken': ['chicken', 'onions', 'spices'], 'chicken-thigh': ['chicken', 'spices'],
    'chicken-wings': ['chicken', 'spices'], dumba: ['fatTail', 'spices'], liver: ['liver', 'onions', 'spices'],
    'spicy-sausages': ['beef', 'chili', 'spices'], 'beef-sausages': ['beef', 'spices'], 'lamb-chunks': ['lamb', 'onions', 'spices'],
    'beef-tenderloin': ['beef', 'onions', 'spices'], bomb: ['beef', 'cheese', 'onions', 'spices'], napoleon: ['beef', 'onions', 'spices'],
    roll: ['beef', 'onions', 'herbs', 'spices'], 'lamb-ribs': ['lamb', 'spices'], 'lamb-loin': ['lamb', 'spices'],
    'cutlet-cheese': ['beef', 'cheese', 'onions', 'spices'], 'trout-shashlik': ['trout', 'lemon', 'herbs', 'spices'],
    bikin: ['beef', 'fatTail', 'onions', 'spices'], 'grilled-potato': ['potato', 'spices'], 'grilled-corn': ['corn', 'butter', 'spices'],
    'grilled-tomatoes': ['tomato', 'herbs', 'spices'], 'grilled-vegetables': ['eggplant', 'bellPepper', 'zucchini', 'onions', 'spices'],
    'bone-marrow': ['boneMarrow', 'herbs', 'garlic', 'oliveOil'], ayran: ['yogurt', 'water', 'salt'], compote: ['apricot', 'water', 'sugar'],
    'tomato-sauce': ['tomato', 'spices'], 'garlic-sauce': ['garlic', 'yogurt', 'herbs'], 'bbq-sauce': ['tomato', 'sugar', 'spices'],
    'fresh-tomato-sauce': ['tomato', 'herbs', 'salt'], adjika: ['tomato', 'bellPepper', 'chili', 'garlic', 'herbs'], fries: ['potato', 'oil', 'salt'],
    'country-potatoes': ['potato', 'herbs', 'spices'], 'potato-chips': ['potato', 'oil', 'salt'], 'rice-vegetables': ['rice', 'carrot', 'peas', 'corn'],
    'saber-icecream': ['milk', 'cream', 'sugar'], 'fruit-plate': ['seasonalFruit'], 'desserts-choice': ['dessert', 'seasonalFruit']
};

const ingredientLabels = {
    uz: { chicken: 'tovuq go\'shti', lamb: 'qo\'y go\'shti', beef: 'mol go\'shti', trout: 'forel', liver: 'jigar', fatTail: 'dumba', onions: 'piyoz', tomato: 'pomidor', cucumber: 'bodring', grapeLeaves: 'uzum bargi', rice: 'guruch', dough: 'xamir', potato: 'kartoshka', eggplant: 'baqlajon', cabbage: 'karam', carrot: 'sabzi', herbs: 'ko\'katlar', lettuce: 'salat bargi', cheese: 'pishloq', yogurt: 'qatiq', garlic: 'sarimsoq', bellPepper: 'bulg\'or qalampiri', corn: 'makkajo\'xori', peas: 'no\'xat', mayonnaise: 'mayonez', lemon: 'limon', oliveOil: 'zaytun moyi', spices: 'ziravorlar', egg: 'tuxum', pickles: 'tuzlangan bodring', sesame: 'kunjut', soySauce: 'soya sousi', croutons: 'qarsildoq non', caesarDressing: 'Sezar sousi', mushrooms: 'qo\'ziqorin', beet: 'lavlagi', apple: 'olma', oil: 'o\'simlik moyi', dill: 'ukrop', parsley: 'petrushka', cilantro: 'kinza', greenOnion: 'ko\'k piyoz', salt: 'tuz', wheat: 'bug\'doy', chickpeas: 'no\'xat', beans: 'loviya', chili: 'achchiq qalampir', breadcrumbs: 'non uvoqlari', side: 'garnir', sauce: 'sous', zucchini: 'kabachki', boneMarrow: 'ilik', butter: 'sariyog\'', water: 'suv', sugar: 'shakar', apricot: 'quritilgan o\'rik', milk: 'sut', cream: 'qaymoq', dessert: 'desert', seasonalFruit: 'mavsumiy mevalar' },
    ru: { chicken: 'курица', lamb: 'баранина', beef: 'говядина', trout: 'форель', liver: 'печень', fatTail: 'курдюк', onions: 'лук', tomato: 'помидор', cucumber: 'огурец', grapeLeaves: 'виноградные листья', rice: 'рис', dough: 'тесто', potato: 'картофель', eggplant: 'баклажан', cabbage: 'капуста', carrot: 'морковь', herbs: 'зелень', lettuce: 'салатные листья', cheese: 'сыр', yogurt: 'сузьма/йогурт', garlic: 'чеснок', bellPepper: 'болгарский перец', corn: 'кукуруза', peas: 'горошек', mayonnaise: 'майонез', lemon: 'лимон', oliveOil: 'оливковое масло', spices: 'специи', egg: 'яйцо', pickles: 'маринованный огурец', sesame: 'кунжут', soySauce: 'соевый соус', croutons: 'сухарики', caesarDressing: 'соус Цезарь', mushrooms: 'грибы', beet: 'свёкла', apple: 'яблоко', oil: 'растительное масло', dill: 'укроп', parsley: 'петрушка', cilantro: 'кинза', greenOnion: 'зелёный лук', salt: 'соль', wheat: 'пшеница', chickpeas: 'нут', beans: 'фасоль', chili: 'острый перец', breadcrumbs: 'панировочные сухари', side: 'гарнир', sauce: 'соус', zucchini: 'кабачок', boneMarrow: 'костный мозг', butter: 'сливочное масло', water: 'вода', sugar: 'сахар', apricot: 'курага', milk: 'молоко', cream: 'сливки', dessert: 'десерт', seasonalFruit: 'сезонные фрукты' },
    tg: { chicken: 'гӯшти мурғ', lamb: 'гӯшти гӯсфанд', beef: 'гӯшти гов', trout: 'гулмоҳӣ', liver: 'ҷигар', fatTail: 'думба', onions: 'пиёз', tomato: 'помидор', cucumber: 'бодиринг', grapeLeaves: 'барги ангур', rice: 'биринҷ', dough: 'хамир', potato: 'картошка', eggplant: 'бодинҷон', cabbage: 'карам', carrot: 'сабзӣ', herbs: 'кабудӣ', lettuce: 'барги салат', cheese: 'панир', yogurt: 'ҷурғот', garlic: 'сир', bellPepper: 'қаламфури булғорӣ', corn: 'ҷуворимакка', peas: 'нахӯд', mayonnaise: 'майонез', lemon: 'лимӯ', oliveOil: 'равғани зайтун', spices: 'ҳанут', egg: 'тухм', pickles: 'бодиринги бодирингӣ', sesame: 'кунҷит', soySauce: 'чошнии соя', croutons: 'нони қирмиз', caesarDressing: 'чошнии Сезар', mushrooms: 'занбӯруғ', beet: 'лаблабу', apple: 'себ', oil: 'равған', dill: 'шибит', parsley: 'петрушка', cilantro: 'кашнич', greenOnion: 'пиёзи сабз', salt: 'намак', wheat: 'гандум', chickpeas: 'нахӯд', beans: 'лӯбиё', chili: 'қаламфури тез', breadcrumbs: 'пораҳои нон', side: 'гарнир', sauce: 'чошнӣ', zucchini: 'кабачок', boneMarrow: 'мағзи устухон', butter: 'равғани маска', water: 'об', sugar: 'шакар', apricot: 'зардолуи хушк', milk: 'шир', cream: 'қаймоқ', dessert: 'ширинӣ', seasonalFruit: 'меваҳои мавсимӣ' },
    kk: { chicken: 'тауық еті', lamb: 'қой еті', beef: 'сиыр еті', trout: 'форель', liver: 'бауыр', fatTail: 'құйрық майы', onions: 'пияз', tomato: 'қызанақ', cucumber: 'қияр', grapeLeaves: 'жүзім жапырағы', rice: 'күріш', dough: 'қамыр', potato: 'картоп', eggplant: 'баялды', cabbage: 'қырыққабат', carrot: 'сәбіз', herbs: 'көк шөп', lettuce: 'салат жапырағы', cheese: 'ірімшік', yogurt: 'қатық', garlic: 'сарымсақ', bellPepper: 'болгар бұрышы', corn: 'жүгері', peas: 'асбұршақ', mayonnaise: 'майонез', lemon: 'лимон', oliveOil: 'зәйтүн майы', spices: 'дәмдеуіштер', egg: 'жұмыртқа', pickles: 'маринадталған қияр', sesame: 'күнжіт', soySauce: 'соя соусы', croutons: 'қытырлақ нан', caesarDressing: 'Цезарь соусы', mushrooms: 'саңырауқұлақ', beet: 'қызылша', apple: 'алма', oil: 'өсімдік майы', dill: 'аскөк', parsley: 'ақжелкен', cilantro: 'кинза', greenOnion: 'көк пияз', salt: 'тұз', wheat: 'бидай', chickpeas: 'ноқат', beans: 'үрме бұршақ', chili: 'ащы бұрыш', breadcrumbs: 'нан үгіндісі', side: 'гарнир', sauce: 'соус', zucchini: 'кәді', boneMarrow: 'сүйек кемігі', butter: 'сары май', water: 'су', sugar: 'қант', apricot: 'кептірілген өрік', milk: 'сүт', cream: 'қаймақ', dessert: 'десерт', seasonalFruit: 'маусымдық жемістер' },
    ky: { chicken: 'тоок эти', lamb: 'кой эти', beef: 'уй эти', trout: 'форель', liver: 'боор', fatTail: 'куйрук майы', onions: 'пияз', tomato: 'помидор', cucumber: 'бадыраң', grapeLeaves: 'жүзүм жалбырагы', rice: 'күрүч', dough: 'камыр', potato: 'картошка', eggplant: 'баклажан', cabbage: 'капуста', carrot: 'сабиз', herbs: 'көк чөп', lettuce: 'салат жалбырагы', cheese: 'сыр', yogurt: 'айран/сүзмө', garlic: 'сарымсак', bellPepper: 'болгар калемпири', corn: 'жүгөрү', peas: 'буурчак', mayonnaise: 'майонез', lemon: 'лимон', oliveOil: 'зайтун майы', spices: 'татымалдар', egg: 'жумуртка', pickles: 'туздалган бадыраң', sesame: 'күнжүт', soySauce: 'соя соусу', croutons: 'катырак нан', caesarDressing: 'Цезарь соусу', mushrooms: 'козу карын', beet: 'кызылча', apple: 'алма', oil: 'өсүмдүк майы', dill: 'укроп', parsley: 'петрушка', cilantro: 'кинза', greenOnion: 'көк пияз', salt: 'туз', wheat: 'буудай', chickpeas: 'нохот', beans: 'буурчак', chili: 'ачуу калемпир', breadcrumbs: 'нан күкүмү', side: 'гарнир', sauce: 'соус', zucchini: 'кабачок', boneMarrow: 'жилик чучугу', butter: 'сары май', water: 'суу', sugar: 'кант', apricot: 'кургатылган өрүк', milk: 'сүт', cream: 'каймак', dessert: 'десерт', seasonalFruit: 'мезгилдик мөмөлөр' },
    en: { chicken: 'chicken', lamb: 'lamb', beef: 'beef', trout: 'trout', liver: 'liver', fatTail: 'lamb fat tail', onions: 'onion', tomato: 'tomato', cucumber: 'cucumber', grapeLeaves: 'grape leaves', rice: 'rice', dough: 'dough', potato: 'potato', eggplant: 'eggplant', cabbage: 'cabbage', carrot: 'carrot', herbs: 'fresh herbs', lettuce: 'lettuce', cheese: 'cheese', yogurt: 'yogurt', garlic: 'garlic', bellPepper: 'bell pepper', corn: 'corn', peas: 'peas', mayonnaise: 'mayonnaise', lemon: 'lemon', oliveOil: 'olive oil', spices: 'spices', egg: 'egg', pickles: 'pickles', sesame: 'sesame', soySauce: 'soy sauce', croutons: 'croutons', caesarDressing: 'Caesar dressing', mushrooms: 'mushrooms', beet: 'beetroot', apple: 'apple', oil: 'vegetable oil', dill: 'dill', parsley: 'parsley', cilantro: 'cilantro', greenOnion: 'green onion', salt: 'salt', wheat: 'wheat', chickpeas: 'chickpeas', beans: 'beans', chili: 'chili pepper', breadcrumbs: 'breadcrumbs', side: 'side dish', sauce: 'sauce', zucchini: 'zucchini', boneMarrow: 'bone marrow', butter: 'butter', water: 'water', sugar: 'sugar', apricot: 'dried apricot', milk: 'milk', cream: 'cream', dessert: 'dessert', seasonalFruit: 'seasonal fruit' },
    zh: { chicken: '鸡肉', lamb: '羊肉', beef: '牛肉', trout: '鳟鱼', liver: '肝', fatTail: '羊尾油', onions: '洋葱', tomato: '番茄', cucumber: '黄瓜', grapeLeaves: '葡萄叶', rice: '米饭', dough: '面团', potato: '土豆', eggplant: '茄子', cabbage: '卷心菜', carrot: '胡萝卜', herbs: '香草', lettuce: '生菜', cheese: '奶酪', yogurt: '酸奶', garlic: '大蒜', bellPepper: '甜椒', corn: '玉米', peas: '豌豆', mayonnaise: '蛋黄酱', lemon: '柠檬', oliveOil: '橄榄油', spices: '香料', egg: '鸡蛋', pickles: '腌黄瓜', sesame: '芝麻', soySauce: '酱油', croutons: '面包丁', caesarDressing: '凯撒酱', mushrooms: '蘑菇', beet: '甜菜', apple: '苹果', oil: '植物油', dill: '莳萝', parsley: '欧芹', cilantro: '香菜', greenOnion: '葱', salt: '盐', wheat: '小麦', chickpeas: '鹰嘴豆', beans: '豆类', chili: '辣椒', breadcrumbs: '面包糠', side: '配菜', sauce: '酱汁', zucchini: '西葫芦', boneMarrow: '骨髓', butter: '黄油', water: '水', sugar: '糖', apricot: '杏干', milk: '牛奶', cream: '奶油', dessert: '甜点', seasonalFruit: '时令水果' },
    tr: { chicken: 'tavuk', lamb: 'kuzu eti', beef: 'dana eti', trout: 'alabalık', liver: 'ciğer', fatTail: 'kuyruk yağı', onions: 'soğan', tomato: 'domates', cucumber: 'salatalık', grapeLeaves: 'üzüm yaprağı', rice: 'pirinç', dough: 'hamur', potato: 'patates', eggplant: 'patlıcan', cabbage: 'lahana', carrot: 'havuç', herbs: 'yeşillik', lettuce: 'marul', cheese: 'peynir', yogurt: 'yoğurt', garlic: 'sarımsak', bellPepper: 'biber', corn: 'mısır', peas: 'bezelye', mayonnaise: 'mayonez', lemon: 'limon', oliveOil: 'zeytinyağı', spices: 'baharat', egg: 'yumurta', pickles: 'turşu', sesame: 'susam', soySauce: 'soya sosu', croutons: 'kıtır ekmek', caesarDressing: 'Sezar sosu', mushrooms: 'mantar', beet: 'pancar', apple: 'elma', oil: 'sıvı yağ', dill: 'dereotu', parsley: 'maydanoz', cilantro: 'kişniş', greenOnion: 'taze soğan', salt: 'tuz', wheat: 'buğday', chickpeas: 'nohut', beans: 'fasulye', chili: 'acı biber', breadcrumbs: 'galeta unu', side: 'garnitür', sauce: 'sos', zucchini: 'kabak', boneMarrow: 'ilik', butter: 'tereyağı', water: 'su', sugar: 'şeker', apricot: 'kuru kayısı', milk: 'süt', cream: 'krema', dessert: 'tatlı', seasonalFruit: 'mevsim meyveleri' },
    ko: { chicken: '닭고기', lamb: '양고기', beef: '소고기', trout: '송어', liver: '간', fatTail: '양꼬리 지방', onions: '양파', tomato: '토마토', cucumber: '오이', grapeLeaves: '포도잎', rice: '쌀', dough: '반죽', potato: '감자', eggplant: '가지', cabbage: '양배추', carrot: '당근', herbs: '허브', lettuce: '상추', cheese: '치즈', yogurt: '요거트', garlic: '마늘', bellPepper: '파프리카', corn: '옥수수', peas: '완두콩', mayonnaise: '마요네즈', lemon: '레몬', oliveOil: '올리브유', spices: '향신료', egg: '달걀', pickles: '피클', sesame: '참깨', soySauce: '간장', croutons: '크루통', caesarDressing: '시저 드레싱', mushrooms: '버섯', beet: '비트', apple: '사과', oil: '식용유', dill: '딜', parsley: '파슬리', cilantro: '고수', greenOnion: '파', salt: '소금', wheat: '밀', chickpeas: '병아리콩', beans: '콩', chili: '고추', breadcrumbs: '빵가루', side: '곁들임', sauce: '소스', zucchini: '애호박', boneMarrow: '골수', butter: '버터', water: '물', sugar: '설탕', apricot: '말린 살구', milk: '우유', cream: '생크림', dessert: '디저트', seasonalFruit: '제철 과일' },
    hi: { chicken: 'चिकन', lamb: 'भेड़ का मांस', beef: 'गोमांस', trout: 'ट्राउट', liver: 'कलेजी', fatTail: 'भेड़ की पूँछ की चर्बी', onions: 'प्याज़', tomato: 'टमाटर', cucumber: 'खीरा', grapeLeaves: 'अंगूर के पत्ते', rice: 'चावल', dough: 'आटा', potato: 'आलू', eggplant: 'बैंगन', cabbage: 'पत्तागोभी', carrot: 'गाजर', herbs: 'हरी जड़ी-बूटियाँ', lettuce: 'सलाद पत्ता', cheese: 'पनीर/चीज़', yogurt: 'दही', garlic: 'लहसुन', bellPepper: 'शिमला मिर्च', corn: 'मकई', peas: 'मटर', mayonnaise: 'मेयोनेज़', lemon: 'नींबू', oliveOil: 'जैतून का तेल', spices: 'मसाले', egg: 'अंडा', pickles: 'अचार', sesame: 'तिल', soySauce: 'सोया सॉस', croutons: 'ब्रेड क्रूटॉन्स', caesarDressing: 'सीज़र ड्रेसिंग', mushrooms: 'मशरूम', beet: 'चुकंदर', apple: 'सेब', oil: 'वनस्पति तेल', dill: 'डिल', parsley: 'अजमोद', cilantro: 'धनिया', greenOnion: 'हरा प्याज़', salt: 'नमक', wheat: 'गेहूँ', chickpeas: 'चना', beans: 'फलियाँ', chili: 'मिर्च', breadcrumbs: 'ब्रेड क्रम्ब्स', side: 'साइड डिश', sauce: 'सॉस', zucchini: 'तोरी', boneMarrow: 'अस्थि मज्जा', butter: 'मक्खन', water: 'पानी', sugar: 'चीनी', apricot: 'सूखी खुबानी', milk: 'दूध', cream: 'क्रीम', dessert: 'मिठाई', seasonalFruit: 'मौसमी फल' }
};

const portionLabels = {
    uz: { g: 'g', liter: 'litr', portion: 'porsiya', pcs: 'dona' }, ru: { g: 'г', liter: 'л', portion: 'порция', pcs: 'шт' },
    tg: { g: 'г', liter: 'литр', portion: 'порсия', pcs: 'дона' }, kk: { g: 'г', liter: 'л', portion: 'порция', pcs: 'дана' },
    ky: { g: 'г', liter: 'л', portion: 'порция', pcs: 'даана' }, en: { g: 'g', liter: 'liter', portion: 'portion', pcs: 'pcs' },
    zh: { g: '克', liter: '升', portion: '份', pcs: '份' }, tr: { g: 'g', liter: 'litre', portion: 'porsiyon', pcs: 'adet' },
    ko: { g: 'g', liter: '리터', portion: '인분', pcs: '개' }, hi: { g: 'ग्राम', liter: 'लीटर', portion: 'परोसना', pcs: 'पीस' }
};

function localizedItemName(item, lang = currentLang) {
    return localizedDishNames[item.id]?.[lang] || localized(item.name, lang);
}

function localizedPortion(item, lang = currentLang) {
    const source = item.description?.en || item.description?.ru || item.description?.uz || '';
    const match = source.match(/(\d+(?:-\d+)?)\s*(g|liter|portion|pcs?|pc)/i);
    if (!match) {
        if (/assortment/i.test(source)) return translations[lang].assortment;
        if (/seasonal/i.test(source)) return translations[lang].seasonalFruit;
        return '';
    }
    const unit = match[2].toLowerCase().startsWith('g') ? 'g' : match[2].toLowerCase().startsWith('liter') ? 'liter' : match[2].toLowerCase().startsWith('portion') ? 'portion' : 'pcs';
    return `${match[1]} ${portionLabels[lang]?.[unit] || portionLabels.en[unit]}`;
}

function getItemDescription(item, lang = currentLang) {
    const labels = ingredientLabels[lang] || ingredientLabels.en;
    const ingredients = (dishIngredients[item.id] || []).map(key => labels[key] || ingredientLabels.en[key] || key);
    const listSeparator = lang === 'zh' ? '、' : ', ';
    const composition = ingredients.length ? `${translations[lang].contains}: ${ingredients.join(listSeparator)}` : '';
    return [localizedPortion(item, lang), composition].filter(Boolean).join(' · ');
}

const translations = {
    uz: { subtitle: 'Premium Gril va Barbekyu', address: 'Toshkent, O\'zbekiston', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'so\'m', byRequest: 'So\'rov bo\'yicha', allCategories: 'Barchasi', cart: 'Savat', emptyCart: 'Savat bo\'sh', total: 'Jami:', serviceNote: 'Xizmat haqi kiritilmagan', clearCart: 'Savatni tozalash', showToWaiter: 'Ofitsiantga ko\'rsatish', table: 'Stol', tableHint: 'QR menyu · tanlovlaringizni savatga qo\'shing', ready: 'Buyurtma ofitsiantga ko\'rsatishga tayyor', share: 'Ulashish', copied: 'Buyurtma nusxalandi', contains: 'Tarkibi', assortment: 'Assorti', seasonalFruit: 'Mavsumiy mevalar' },
    ru: { subtitle: 'Премиум гриль и барбекю', address: 'Ташкент, Узбекистан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'По запросу', allCategories: 'Все', cart: 'Корзина', emptyCart: 'Корзина пуста', total: 'Итого:', serviceNote: 'Сервисный сбор не включён', clearCart: 'Очистить корзину', showToWaiter: 'Показать официанту', table: 'Стол', tableHint: 'QR-меню · добавляйте блюда в корзину', ready: 'Заказ готов к показу официанту', share: 'Поделиться', copied: 'Заказ скопирован', contains: 'Состав', assortment: 'Ассортимент', seasonalFruit: 'Сезонные фрукты' },
    tg: { subtitle: 'Грилл ва барбекю', address: 'Тошканд, Ӯзбекистон', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сӯм', byRequest: 'Бо дархост', allCategories: 'Ҳама', cart: 'Сабад', emptyCart: 'Сабад холӣ аст', total: 'Ҳамагӣ:', serviceNote: 'Ҳаққи хизмат дохил нест', clearCart: 'Холӣ кардани сабад', showToWaiter: 'Ба пешхизмат нишон додан', table: 'Миз', tableHint: 'Менюи QR · таомҳоро ба сабад илова кунед', ready: 'Фармоиш барои пешхизмат омода аст', share: 'Мубодила', copied: 'Фармоиш нусха шуд', contains: 'Таркиб', assortment: 'Маҷмӯа', seasonalFruit: 'Меваҳои мавсимӣ' },
    kk: { subtitle: 'Премиум гриль және барбекю', address: 'Ташкент, Өзбекстан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'Сұраныс бойынша', allCategories: 'Барлығы', cart: 'Себет', emptyCart: 'Себет бос', total: 'Барлығы:', serviceNote: 'Қызмет ақысы кірмеген', clearCart: 'Себетті тазалау', showToWaiter: 'Даяшыға көрсету', table: 'Үстел', tableHint: 'QR мәзір · таңдауыңызды себетке қосыңыз', ready: 'Тапсырыс даяшыға көрсетуге дайын', share: 'Бөлісу', copied: 'Тапсырыс көшірілді', contains: 'Құрамы', assortment: 'Ассорти', seasonalFruit: 'Маусымдық жемістер' },
    ky: { subtitle: 'Премиум гриль жана барбекю', address: 'Ташкент, Өзбекстан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'Суроо боюнча', allCategories: 'Баары', cart: 'Себет', emptyCart: 'Себет бош', total: 'Жалпы:', serviceNote: 'Кызмат акысы кирген эмес', clearCart: 'Себетти тазалоо', showToWaiter: 'Официантка көрсөтүү', table: 'Стол', tableHint: 'QR меню · тандоолорду себетке кошуңуз', ready: 'Буйрутма официантка көрсөтүүгө даяр', share: 'Бөлүшүү', copied: 'Буйрутма көчүрүлдү', contains: 'Курамы', assortment: 'Ассорти', seasonalFruit: 'Мезгилдик мөмөлөр' },
    en: { subtitle: 'Premium Grill & BBQ', address: 'Tashkent, Uzbekistan', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'sum', byRequest: 'On request', allCategories: 'All', cart: 'Basket', emptyCart: 'Your basket is empty', total: 'Total:', serviceNote: 'Service fee not included', clearCart: 'Clear basket', showToWaiter: 'Show to waiter', table: 'Table', tableHint: 'QR menu · add your choices to the basket', ready: 'Order ready to show the waiter', share: 'Share', copied: 'Order copied', contains: 'Contains', assortment: 'Assortment', seasonalFruit: 'Seasonal fruit' },
    zh: { subtitle: '高级烧烤与烤肉', address: '乌兹别克斯坦·塔什干', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: '苏姆', byRequest: '按需提供', allCategories: '全部', cart: '购物篮', emptyCart: '购物篮为空', total: '合计：', serviceNote: '不含服务费', clearCart: '清空购物篮', showToWaiter: '向服务员展示', table: '桌号', tableHint: '二维码菜单 · 将菜品加入购物篮', ready: '订单已准备好，可向服务员展示', share: '分享', copied: '订单已复制', contains: '配料', assortment: '精选', seasonalFruit: '时令水果' },
    tr: { subtitle: 'Premium Izgara ve Barbekü', address: 'Taşkent, Özbekistan', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'sum', byRequest: 'İstek üzerine', allCategories: 'Tümü', cart: 'Sepet', emptyCart: 'Sepet boş', total: 'Toplam:', serviceNote: 'Servis ücreti dahil değildir', clearCart: 'Sepeti temizle', showToWaiter: 'Garsona göster', table: 'Masa', tableHint: 'QR menü · seçimlerinizi sepete ekleyin', ready: 'Sipariş garsona gösterilmeye hazır', share: 'Paylaş', copied: 'Sipariş kopyalandı', contains: 'İçindekiler', assortment: 'Karışık seçki', seasonalFruit: 'Mevsim meyveleri' },
    ko: { subtitle: '프리미엄 그릴 & 바비큐', address: '우즈베키스탄 타슈켄트', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: '숨', byRequest: '문의 필요', allCategories: '전체', cart: '장바구니', emptyCart: '장바구니가 비어 있습니다', total: '합계:', serviceNote: '서비스 요금 별도', clearCart: '장바구니 비우기', showToWaiter: '직원에게 보여주기', table: '테이블', tableHint: 'QR 메뉴 · 메뉴를 장바구니에 담으세요', ready: '직원에게 보여줄 주문이 준비되었습니다', share: '공유', copied: '주문이 복사되었습니다', contains: '재료', assortment: '모둠', seasonalFruit: '제철 과일' },
    hi: { subtitle: 'प्रीमियम ग्रिल और बारबेक्यू', address: 'ताशकंद, उज़्बेकिस्तान', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'सुम', byRequest: 'अनुरोध पर', allCategories: 'सभी', cart: 'कार्ट', emptyCart: 'कार्ट खाली है', total: 'कुल:', serviceNote: 'सेवा शुल्क शामिल नहीं', clearCart: 'कार्ट साफ़ करें', showToWaiter: 'वेटर को दिखाएँ', table: 'टेबल', tableHint: 'QR मेन्यू · पसंदीदा व्यंजन कार्ट में जोड़ें', ready: 'वेटर को दिखाने के लिए ऑर्डर तैयार है', share: 'शेयर', copied: 'ऑर्डर कॉपी हो गया', contains: 'सामग्री', assortment: 'विभिन्न विकल्प', seasonalFruit: 'मौसमी फल' }
};

const categoryImages = {
    appetizers: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=160&q=80',
    soups: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=160&q=80',
    salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=160&q=80',
    'main-dishes': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=160&q=80',
    shashlik: 'https://images.unsplash.com/photo-1529692236671-f1dcf775cd77?auto=format&fit=crop&w=160&q=80',
    drinks: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=160&q=80',
    sauces: 'https://images.unsplash.com/photo-1472476442910-7a43b7e9e6b0?auto=format&fit=crop&w=160&q=80',
    desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=160&q=80'
};

const itemImages = {
    'jiz-biz-lamb': 'https://shashlik.uz/storage/menu-items/6916ff9a212c5052242117-4.jpg',
    'jiz-biz-beef': 'https://shashlik.uz/storage/menu-items/6916fd7491abc444042862-4.jpg',
    'chicken-cutlets': 'https://shashlik.uz/storage/menu-items/6916ffef31f88712289299-4.jpg',
    'beef-tenderloin': 'https://shashlik.uz/storage/menu-items/691700248b907345360107-4.jpg',
    'lamb-loin': 'https://shashlik.uz/storage/menu-items/69170058dfb92667823672-4.jpg',
    'lamb-ribs': 'https://shashlik.uz/storage/menu-items/6917017830b5b959765136-4.jpg',
    samsa: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=240&q=82',
    manti: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=240&q=82',
    chicken: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=240&q=82',
    'ribeye-steak': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=240&q=82',
    'set-4': 'https://images.unsplash.com/photo-1529692236671-f1dcf775cd77?auto=format&fit=crop&w=240&q=82',
    'set-6': 'https://images.unsplash.com/photo-1529692236671-f1dcf775cd77?auto=format&fit=crop&w=240&q=82',
    'set-8': 'https://images.unsplash.com/photo-1529692236671-f1dcf775cd77?auto=format&fit=crop&w=240&q=82',
    'grilled-vegetables': 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=240&q=82',
    ayran: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=240&q=82',
    'fruit-plate': 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=240&q=82'
};

function localized(value, lang = currentLang) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    return value[lang] || value.en || value.ru || value.uz || Object.values(value)[0] || '';
}

function escapeHtml(value = '') {
    return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function getItemImage(item, categoryId = '') {
    return itemImages[item.id] || categoryImages[categoryId] || categoryImages.shashlik;
}

// Состояние приложения
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
let currentLang = translations[requestedLanguage] ? requestedLanguage : (localStorage.getItem('shashlik_lang') || 'uz');
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('shashlik_cart')) || {};
const tableNumber = new URLSearchParams(window.location.search).get('table');

// Форматирование цены
function formatPrice(price, lang) {
    if (price === null) {
        return translations[lang].byRequest;
    }
    return `${price.toLocaleString('ru-RU')} ${translations[lang].currency}`;
}

// Сохранение корзины в localStorage
function saveCart() {
    localStorage.setItem('shashlik_cart', JSON.stringify(cart));
}

function getTableContext() {
    const suffix = tableNumber ? ` · ${translations[currentLang].table} ${tableNumber}` : '';
    return `${translations[currentLang].tableHint}${suffix}`;
}

function updateTableContext() {
    const context = document.getElementById('tableContext');
    if (context) context.textContent = getTableContext();
}

function getOrderText() {
    const lines = Object.entries(cart).map(([itemId, qty]) => {
        const item = findItemById(itemId);
        return item ? `${qty} × ${localizedItemName(item)}` : '';
    }).filter(Boolean);
    const table = tableNumber ? ` · ${translations[currentLang].table} ${tableNumber}` : '';
    return `SHASHLIK.UZ${table}\n${lines.join('\n')}\n${translations[currentLang].total} ${formatPrice(getCartTotal(), currentLang)}`;
}

async function showOrderToWaiter() {
    if (getCartCount() === 0) return;
    const orderText = getOrderText();
    if (navigator.share) {
        try { await navigator.share({ title: translations[currentLang].cart, text: orderText }); } catch (error) { /* user closed share sheet */ }
    } else if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(orderText);
            window.alert(translations[currentLang].copied);
        } catch (error) { window.alert(translations[currentLang].ready); }
    } else {
        window.alert(`${translations[currentLang].ready}\n\n${orderText}`);
    }
}

// Получение количества товаров в корзине
function getCartCount() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

// Получение общей суммы корзины
function getCartTotal() {
    let total = 0;
    for (const [itemId, qty] of Object.entries(cart)) {
        const item = findItemById(itemId);
        if (item && item.price !== null) {
            total += item.price * qty;
        }
    }
    return total;
}

// Поиск блюда по ID
function findItemById(itemId) {
    for (const category of menuData.categories) {
        const item = category.items.find(i => i.id === itemId);
        if (item) return item;
    }
    return null;
}

function findCategoryIdByItemId(itemId) {
    const category = menuData.categories.find(cat => cat.items.some(item => item.id === itemId));
    return category ? category.id : '';
}

// Обновление бейджа корзины
function updateCartBadge() {
    const count = getCartCount();
    const badge = document.getElementById('cartCountBadge');
    badge.textContent = count;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
}

// Добавление в корзину
function addToCart(itemId) {
    cart[itemId] = (cart[itemId] || 0) + 1;
    saveCart();
    updateCartBadge();
}

// Удаление из корзины
function removeFromCart(itemId) {
    if (cart[itemId] > 1) {
        cart[itemId]--;
    } else {
        delete cart[itemId];
    }
    saveCart();
    updateCartBadge();
    renderCartModal();
}

// Полное удаление позиции из корзины
function deleteFromCart(itemId) {
    delete cart[itemId];
    saveCart();
    updateCartBadge();
    renderCartModal();
}

// Очистка корзины
function clearCart() {
    cart = {};
    saveCart();
    updateCartBadge();
    renderCartModal();
}

// Рендеринг корзины в модальном окне
// Рендеринг корзины в модальном окне
function renderCartModal() {
    const body = document.getElementById('cartModalBody');
    const totalAmount = document.getElementById('cartTotalAmount');
    const count = getCartCount();
    
    if (count === 0) {
        body.innerHTML = `<div class="cart-empty">${translations[currentLang].emptyCart}</div>`;
        totalAmount.textContent = `0 ${translations[currentLang].currency}`;
        return;
    }
    
    let html = '';
    for (const [itemId, qty] of Object.entries(cart)) {
        const item = findItemById(itemId);
        if (!item) continue;
        const price = item.price !== null ? item.price : 0;
        const itemTotal = price * qty;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name"><img class="cart-item-image" src="${getItemImage(item, findCategoryIdByItemId(item.id))}" alt="" loading="lazy"> ${escapeHtml(localizedItemName(item))}</div>
                    <div class="cart-item-description">${escapeHtml(getItemDescription(item))}</div>
                    <div class="cart-item-price">${price > 0 ? formatPrice(price, currentLang) : translations[currentLang].byRequest} × ${qty} = ${price > 0 ? formatPrice(itemTotal, currentLang) : '—'}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="removeFromCart('${itemId}')">−</button>
                    <span class="quantity-value">${qty}</span>
                    <button class="quantity-btn" onclick="addToCart('${itemId}'); renderCartModal();">+</button>
                    <button class="quantity-btn" onclick="deleteFromCart('${itemId}')" style="background: #ff4444; color: white; border-color: #ff4444;">🗑</button>
                </div>
            </div>
        `;
    }
    
    body.innerHTML = html;
    totalAmount.textContent = formatPrice(getCartTotal(), currentLang);
}
// Инициализация категорий
function initCategories() {
    const categoryList = document.getElementById('categoryList');
    const allCategories = [
        { id: 'all', icon: '📋', name: translations[currentLang].allCategories }
    ];
    
    const allCats = [...allCategories, ...menuData.categories.map(cat => ({
        id: cat.id,
        icon: cat.icon,
        name: localized(cat.name)
    }))];
    
    categoryList.innerHTML = allCats.map(cat => `
        <button class="category-btn ${cat.id === currentCategory ? 'active' : ''}" 
                data-category="${cat.id}">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            updateActiveCategory();
            renderMenu();
        });
    });
}

// Обновление активной категории
function updateActiveCategory() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

// Рендеринг меню
function renderMenu() {
    const menuContent = document.getElementById('menuContent');
    let html = '';
    
    const categoriesToShow = currentCategory === 'all' 
        ? menuData.categories 
        : menuData.categories.filter(cat => cat.id === currentCategory);
    
    categoriesToShow.forEach(category => {
        html += `
            <section class="menu-section" id="section-${category.id}">
                <div class="section-header">
                    <img class="section-image" src="${categoryImages[category.id] || categoryImages.shashlik}" alt="" loading="lazy">
                    <h2 class="section-title">${localized(category.name)}</h2>
                    ${category.time ? `<span class="section-time">⏱ ${localized(category.time)}</span>` : ''}
                </div>
                <div class="menu-items">
                    ${category.items.map(item => renderMenuItem(item, category.id)).join('')}
                </div>
            </section>
        `;
    });
    
    menuContent.innerHTML = html;
    
    // Добавляем обработчики для кнопок добавления в корзину
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.dataset.itemId;
            addToCart(itemId);
        });
    });
}

// Рендеринг отдельного блюда
function renderMenuItem(item, categoryId) {
    const priceHtml = item.price !== null 
        ? `<div class="item-price">
            <span>${formatPrice(item.price, currentLang)}</span>
            <span class="price-currency"></span>
          </div>`
        : `<div class="item-price" style="color: #808080; font-size: 14px;">
            ${translations[currentLang].byRequest}
          </div>`;
    
    return `
        <div class="menu-item">
            <div class="item-info">
                <div class="item-name">
                    <img class="item-image" src="${getItemImage(item, categoryId)}" alt="${escapeHtml(localizedItemName(item))}" loading="lazy">
                    <span class="item-copy"><span class="item-title">${escapeHtml(localizedItemName(item))}</span>
                    <span class="item-description">${escapeHtml(getItemDescription(item))}</span></span>
                </div>
            </div>
            <div style="display: flex; align-items: center;">
                ${priceHtml}
                <button class="add-to-cart-btn" data-item-id="${item.id}">+</button>
            </div>
        </div>
    `;
}

// Обновление языка
function updateLanguage(lang) {
    if (!translations[lang]) lang = 'uz';
    currentLang = lang;
    localStorage.setItem('shashlik_lang', lang);
    document.documentElement.lang = lang;
    
    document.querySelector('.logo-subtitle').textContent = translations[lang].subtitle;
    
    document.querySelectorAll('.footer-info span').forEach((span, index) => {
        if (index === 0) span.textContent = `📍 ${translations[lang].address}`;
        if (index === 1) span.textContent = `📞 ${translations[lang].phone}`;
        if (index === 2) span.textContent = `🕐 ${translations[lang].hours}`;
    });
    
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) languageSelect.value = lang;
    
    // Обновляем тексты в корзине
    document.querySelector('.cart-modal-title').textContent = translations[lang].cart;
    document.querySelector('.cart-service-note').textContent = translations[lang].serviceNote;
    document.querySelector('.cart-clear-btn').textContent = translations[lang].clearCart;
    document.querySelector('.cart-total > span:first-child').textContent = translations[lang].total;
    document.getElementById('waiterReadyBtn').textContent = translations[lang].showToWaiter;
    updateTableContext();
    
    initCategories();
    renderMenu();
    renderCartModal();
}

// Обработчик выбора языка
document.getElementById('languageSelect').addEventListener('change', (event) => {
    updateLanguage(event.target.value);
});

// Обработчики корзины
document.getElementById('cartFloatBtn').addEventListener('click', () => {
    renderCartModal();
    document.getElementById('cartModalOverlay').classList.add('active');
});

document.getElementById('cartModalClose').addEventListener('click', () => {
    document.getElementById('cartModalOverlay').classList.remove('active');
});

document.getElementById('cartModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('cartModalOverlay').classList.remove('active');
    }
});

document.getElementById('cartClearBtn').addEventListener('click', () => {
    clearCart();
});

document.getElementById('waiterReadyBtn').addEventListener('click', showOrderToWaiter);

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    renderMenu();
    updateCartBadge();
    updateLanguage(currentLang);
    
    // Установка начальных текстов корзины
    updateTableContext();
});
