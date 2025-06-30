/**
 * Food Items Data
 * 
 * Contains all food items available in the application.
 * Each food item includes complete information like name, category, type, price, etc.
 * 
 * Data Structure:
 * - id: Unique identifier
 * - food_name: Display name of the food item
 * - food_category: Category (breakfast, lunch, dinner, snack)
 * - food_type: Type (veg, non-veg)
 * - food_quantity: Default quantity
 * - food_image: Image URL/path
 * - price: Price in rupees
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

/**
 * Array of all food items available in the application
 * @type {Array<Object>}
 */
export const food_items = [
    {
        id: 1,
        food_name: "Fluffy Pancakes",
        "food-category": "breakfast",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/101/300/200",
        price: 299,
        description: "Delicious fluffy pancakes served with maple syrup and butter"
    },
    {
        id: 2,
        food_name: "Cheese Omelette",
        "food-category": "breakfast",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/102/300/200",
        price: 199,
        description: "Fresh eggs cooked to perfection with melted cheese"
    },
    {
        id: 3,
        food_name: "Veg Burger",
        "food-category": "lunch",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/103/300/200",
        price: 149,
        description: "Crispy vegetable patty with fresh lettuce and tomatoes"
    },
    {
        id: 4,
        food_name: "Chicken Biryani",
        "food-category": "dinner",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/104/300/200",
        price: 399,
        description: "Aromatic basmati rice with tender chicken and spices"
    },
    {
        id: 5,
        food_name: "Grilled Sandwich",
        "food-category": "snack",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/105/300/200",
        price: 99,
        description: "Crispy grilled sandwich with vegetables and cheese"
    },
    {
        id: 6,
        food_name: "Caesar Salad",
        "food-category": "lunch",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/106/300/200",
        price: 249,
        description: "Fresh romaine lettuce with Caesar dressing and croutons"
    },
    {
        id: 8,
        food_name: "Stuffed Paratha",
        "food-category": "breakfast",
        food_type: "veg",
        food_quantity: 2,
        food_image: "https://picsum.photos/id/107/300/200",
        price: 129,
        description: "Traditional Indian bread stuffed with vegetables"
    },
    {
        id: 9,
        food_name: "Fish Curry",
        "food-category": "dinner",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/108/300/200",
        price: 349,
        description: "Fresh fish cooked in aromatic curry sauce"
    },
    {
        id: 10,
        food_name: "Steamed Momos",
        "food-category": "snack",
        food_type: "veg",
        food_quantity: 6,
        food_image: "https://picsum.photos/id/109/300/200",
        price: 89,
        description: "Delicious steamed dumplings with vegetables"
    },
    {
        id: 11,
        food_name: "Egg Curry",
        "food-category": "lunch",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/110/300/200",
        price: 199,
        description: "Boiled eggs in spicy curry gravy"
    },
    {
        id: 12,
        food_name: "Chole Bhature",
        "food-category": "lunch",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/111/300/200",
        price: 179,
        description: "Spicy chickpeas with fried bread"
    },
    {
        id: 13,
        food_name: "Crispy Dosa",
        "food-category": "breakfast",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/112/300/200",
        price: 119,
        description: "South Indian crepe served with chutney and sambar"
    },
    {
        id: 14,
        food_name: "Fresh Sushi",
        "food-category": "lunch",
        food_type: "non-veg",
        food_quantity: 8,
        food_image: "https://picsum.photos/id/113/300/200",
        price: 599,
        description: "Fresh sushi rolls with salmon and vegetables"
    },
    {
        id: 15,
        food_name: "French Fries",
        "food-category": "snack",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/114/300/200",
        price: 79,
        description: "Crispy golden fries with seasoning"
    },
    {
        id: 16,
        food_name: "Margherita Pizza",
        "food-category": "dinner",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/115/300/200",
        price: 299,
        description: "Classic pizza with tomato sauce and mozzarella cheese"
    },
    {
        id: 17,
        food_name: "Mocha Coffee",
        "food-category": "beverage",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/116/300/200",
        price: 149,
        description: "Rich coffee with chocolate and steamed milk"
    },
    {
        id: 18,
        food_name: "Hakka Noodles",
        "food-category": "dinner",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/117/300/200",
        price: 139,
        description: "Stir-fried noodles with vegetables and sauces"
    },
    {
        id: 19,
        food_name: "Paneer Pizza",
        "food-category": "dinner",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/118/300/200",
        price: 349,
        description: "Pizza topped with cottage cheese and vegetables"
    },
    {
        id: 20,
        food_name: "Chicken Burger",
        "food-category": "lunch",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/119/300/200",
        price: 229,
        description: "Juicy chicken patty with fresh vegetables"
    },
    {
        id: 21,
        food_name: "Caffe Latte",
        "food-category": "beverage",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/120/300/200",
        price: 129,
        description: "Smooth coffee with steamed milk foam"
    },
    {
        id: 22,
        food_name: "Pepperoni Pizza",
        "food-category": "dinner",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/121/300/200",
        price: 379,
        description: "Pizza with pepperoni and mozzarella cheese"
    },
    {
        id: 23,
        food_name: "Schezwan Noodles",
        "food-category": "dinner",
        food_type: "veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/122/300/200",
        price: 159,
        description: "Spicy noodles with schezwan sauce and vegetables"
    },
    {
        id: 24,
        food_name: "Chicken Noodles",
        "food-category": "dinner",
        food_type: "non-veg",
        food_quantity: 1,
        food_image: "https://picsum.photos/id/123/300/200",
        price: 189,
        description: "Noodles with tender chicken pieces and vegetables"
    }
];


/**
 * Get food items by category
 * @param {string} category - Food category to filter by
 * @returns {Array<Object>} Filtered array of food items
 */
export const getFoodItemsByCategory = (category) => {
    if (!category || category.toLowerCase() === 'all') {
        return food_items;
    }
    return food_items.filter(item => item["food-category"].toLowerCase() === category.toLowerCase());
};

/**
 * Get food items by type (veg/non-veg)
 * @param {string} type - Food type to filter by
 * @returns {Array<Object>} Filtered array of food items
 */
export const getFoodItemsByType = (type) => {
    if (!type || type.toLowerCase() === 'all') {
        return food_items;
    }
    return food_items.filter(item => item.food_type.toLowerCase() === type.toLowerCase());
};

/**
 * Get food item by ID
 * @param {number} id - Food item ID
 * @returns {Object|undefined} Food item object or undefined if not found
 */
export const getFoodItemById = (id) => {
    return food_items.find(item => item.id === id);
};

/**
 * Search food items by name
 * @param {string} searchTerm - Term to search for
 * @returns {Array<Object>} Array of matching food items
 */
export const searchFoodItems = (searchTerm) => {
    if (!searchTerm) {
        return food_items;
    }
    return food_items.filter(item =>
        item.food_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
};