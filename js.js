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
// Названия блюд сохраняются в оригинале, а при отсутствии отдельного перевода
// используется понятная английская/русская подпись вместе с фотографией.
const translations = {
    uz: { subtitle: 'Premium Gril va Barbekyu', address: 'Toshkent, O\'zbekiston', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'so\'m', byRequest: 'So\'rov bo\'yicha', allCategories: 'Barchasi', cart: 'Savat', emptyCart: 'Savat bo\'sh', total: 'Jami:', serviceNote: 'Xizmat haqi kiritilmagan', clearCart: 'Savatni tozalash', showToWaiter: 'Ofitsiantga ko\'rsatish', table: 'Stol', tableHint: 'QR menyu · tanlovlaringizni savatga qo\'shing', ready: 'Buyurtma ofitsiantga ko\'rsatishga tayyor', share: 'Ulashish', copied: 'Buyurtma nusxalandi' },
    ru: { subtitle: 'Премиум гриль и барбекю', address: 'Ташкент, Узбекистан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'По запросу', allCategories: 'Все', cart: 'Корзина', emptyCart: 'Корзина пуста', total: 'Итого:', serviceNote: 'Сервисный сбор не включён', clearCart: 'Очистить корзину', showToWaiter: 'Показать официанту', table: 'Стол', tableHint: 'QR-меню · добавляйте блюда в корзину', ready: 'Заказ готов к показу официанту', share: 'Поделиться', copied: 'Заказ скопирован' },
    tg: { subtitle: 'Грилл ва барбекю', address: 'Тошканд, Ӯзбекистон', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сӯм', byRequest: 'Бо дархост', allCategories: 'Ҳама', cart: 'Сабад', emptyCart: 'Сабад холӣ аст', total: 'Ҳамагӣ:', serviceNote: 'Ҳаққи хизмат дохил нест', clearCart: 'Холӣ кардани сабад', showToWaiter: 'Ба пешхизмат нишон додан', table: 'Миз', tableHint: 'Менюи QR · таомҳоро ба сабад илова кунед', ready: 'Фармоиш барои пешхизмат омода аст', share: 'Мубодила', copied: 'Фармоиш нусха шуд' },
    kk: { subtitle: 'Премиум гриль және барбекю', address: 'Ташкент, Өзбекстан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'Сұраныс бойынша', allCategories: 'Барлығы', cart: 'Себет', emptyCart: 'Себет бос', total: 'Барлығы:', serviceNote: 'Қызмет ақысы кірмеген', clearCart: 'Себетті тазалау', showToWaiter: 'Даяшыға көрсету', table: 'Үстел', tableHint: 'QR мәзір · таңдауыңызды себетке қосыңыз', ready: 'Тапсырыс даяшыға көрсетуге дайын', share: 'Бөлісу', copied: 'Тапсырыс көшірілді' },
    ky: { subtitle: 'Премиум гриль жана барбекю', address: 'Ташкент, Өзбекстан', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'сум', byRequest: 'Суроо боюнча', allCategories: 'Баары', cart: 'Себет', emptyCart: 'Себет бош', total: 'Жалпы:', serviceNote: 'Кызмат акысы кирген эмес', clearCart: 'Себетти тазалоо', showToWaiter: 'Официантка көрсөтүү', table: 'Стол', tableHint: 'QR меню · тандоолорду себетке кошуңуз', ready: 'Буйрутма официантка көрсөтүүгө даяр', share: 'Бөлүшүү', copied: 'Буйрутма көчүрүлдү' },
    en: { subtitle: 'Premium Grill & BBQ', address: 'Tashkent, Uzbekistan', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'sum', byRequest: 'On request', allCategories: 'All', cart: 'Basket', emptyCart: 'Your basket is empty', total: 'Total:', serviceNote: 'Service fee not included', clearCart: 'Clear basket', showToWaiter: 'Show to waiter', table: 'Table', tableHint: 'QR menu · add your choices to the basket', ready: 'Order ready to show the waiter', share: 'Share', copied: 'Order copied' },
    zh: { subtitle: '高级烧烤与烤肉', address: '乌兹别克斯坦·塔什干', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: '苏姆', byRequest: '按需提供', allCategories: '全部', cart: '购物篮', emptyCart: '购物篮为空', total: '合计：', serviceNote: '不含服务费', clearCart: '清空购物篮', showToWaiter: '向服务员展示', table: '桌号', tableHint: '二维码菜单 · 将菜品加入购物篮', ready: '订单已准备好，可向服务员展示', share: '分享', copied: '订单已复制' },
    tr: { subtitle: 'Premium Izgara ve Barbekü', address: 'Taşkent, Özbekistan', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'sum', byRequest: 'İstek üzerine', allCategories: 'Tümü', cart: 'Sepet', emptyCart: 'Sepet boş', total: 'Toplam:', serviceNote: 'Servis ücreti dahil değildir', clearCart: 'Sepeti temizle', showToWaiter: 'Garsona göster', table: 'Masa', tableHint: 'QR menü · seçimlerinizi sepete ekleyin', ready: 'Sipariş garsona gösterilmeye hazır', share: 'Paylaş', copied: 'Sipariş kopyalandı' },
    ko: { subtitle: '프리미엄 그릴 & 바비큐', address: '우즈베키스탄 타슈켄트', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: '숨', byRequest: '문의 필요', allCategories: '전체', cart: '장바구니', emptyCart: '장바구니가 비어 있습니다', total: '합계:', serviceNote: '서비스 요금 별도', clearCart: '장바구니 비우기', showToWaiter: '직원에게 보여주기', table: '테이블', tableHint: 'QR 메뉴 · 메뉴를 장바구니에 담으세요', ready: '직원에게 보여줄 주문이 준비되었습니다', share: '공유', copied: '주문이 복사되었습니다' },
    hi: { subtitle: 'प्रीमियम ग्रिल और बारबेक्यू', address: 'ताशकंद, उज़्बेकिस्तान', phone: '(66) 232 00 00', hours: '10:00 - 23:00', currency: 'सुम', byRequest: 'अनुरोध पर', allCategories: 'सभी', cart: 'कार्ट', emptyCart: 'कार्ट खाली है', total: 'कुल:', serviceNote: 'सेवा शुल्क शामिल नहीं', clearCart: 'कार्ट साफ़ करें', showToWaiter: 'वेटर को दिखाएँ', table: 'टेबल', tableHint: 'QR मेन्यू · पसंदीदा व्यंजन कार्ट में जोड़ें', ready: 'वेटर को दिखाने के लिए ऑर्डर तैयार है', share: 'शेयर', copied: 'ऑर्डर कॉपी हो गया' }
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
        return item ? `${qty} × ${localized(item.name)}` : '';
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
                    <div class="cart-item-name"><img class="cart-item-image" src="${getItemImage(item, findCategoryIdByItemId(item.id))}" alt="" loading="lazy"> ${localized(item.name)}</div>
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
                    <img class="item-image" src="${getItemImage(item, categoryId)}" alt="${escapeHtml(localized(item.name))}" loading="lazy">
                    <span class="item-copy"><span class="item-title">${localized(item.name)}</span>
                    ${item.description ? `<span class="item-description">${localized(item.description)}</span>` : ''}</span>
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
