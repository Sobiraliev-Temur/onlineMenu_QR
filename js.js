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

// Переводы для интерфейса
const translations = {
    ru: {
        subtitle: 'Премиум Гриль и Барбекю',
        address: 'Ташкент, Узбекистан',
        phone: '(66) 232 00 00',
        hours: '10:00 - 23:00',
        currency: 'сум',
        byRequest: 'По запросу',
        allCategories: 'Все',
        cart: 'Корзина',
        emptyCart: 'Корзина пуста',
        total: 'Итого:',
        serviceNote: '* Процент за обслуживание не включён',
        clearCart: 'Очистить корзину'
    },
    uz: {
        subtitle: 'Premium Gril va Barbekyu',
        address: 'Toshkent, O\'zbekiston',
        phone: '(66) 232 00 00',
        hours: '10:00 - 23:00',
        currency: 'so\'m',
        byRequest: 'So\'rov bo\'yicha',
        allCategories: 'Barchasi',
        cart: 'Savat',
        emptyCart: 'Savat bo\'sh',
        total: 'Jami:',
        serviceNote: '* Xizmat foizi kiritilmagan',
        clearCart: 'Savatni tozalash'
    },
    en: {
        subtitle: 'Premium Grill & BBQ',
        address: 'Tashkent, Uzbekistan',
        phone: '(66) 232 00 00',
        hours: '10:00 - 23:00',
        currency: 'sum',
        byRequest: 'On request',
        allCategories: 'All',
        cart: 'Cart',
        emptyCart: 'Cart is empty',
        total: 'Total:',
        serviceNote: '* Service fee not included',
        clearCart: 'Clear cart'
    }
};

// Состояние приложения
let currentLang = 'ru';
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('shashlik_cart')) || {};

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
                    <div class="cart-item-name">${item.icon} ${item.name[currentLang]}</div>
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
        name: cat.name[currentLang]
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
                    <span class="section-icon">${category.icon}</span>
                    <h2 class="section-title">${category.name[currentLang]}</h2>
                    ${category.time ? `<span class="section-time">⏱ ${category.time[currentLang]}</span>` : ''}
                </div>
                <div class="menu-items">
                    ${category.items.map(item => renderMenuItem(item)).join('')}
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
function renderMenuItem(item) {
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
                    <span class="item-icon">${item.icon || '🍽️'}</span>
                    ${item.name[currentLang]}
                </div>
                ${item.description ? `<div class="item-description">${item.description[currentLang]}</div>` : ''}
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
    currentLang = lang;
    
    document.querySelector('.logo-subtitle').textContent = translations[lang].subtitle;
    
    document.querySelectorAll('.footer-info span').forEach((span, index) => {
        if (index === 0) span.textContent = `📍 ${translations[lang].address}`;
        if (index === 1) span.textContent = `📞 ${translations[lang].phone}`;
        if (index === 2) span.textContent = `🕐 ${translations[lang].hours}`;
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Обновляем тексты в корзине
    document.querySelector('.cart-modal-title').textContent = translations[lang].cart;
    document.querySelector('.cart-service-note').textContent = translations[lang].serviceNote;
    document.querySelector('.cart-clear-btn').textContent = translations[lang].clearCart;
    
    initCategories();
    renderMenu();
    renderCartModal();
}

// Обработчики языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
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

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    renderMenu();
    updateCartBadge();
    
    // Установка начальных текстов корзины
    document.querySelector('.cart-modal-title').textContent = translations[currentLang].cart;
    document.querySelector('.cart-service-note').textContent = translations[currentLang].serviceNote;
    document.querySelector('.cart-clear-btn').textContent = translations[currentLang].clearCart;
});