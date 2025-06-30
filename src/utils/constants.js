/**
 * Application Constants
 * 
 * Central location for all application-wide constants and configuration values.
 * This helps maintain consistency and makes it easy to update values across the app.
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

// Application Information
export const APP_CONFIG = {
    NAME: 'Food Delivery Website',
    VERSION: '1.0.0',
    DESCRIPTION: 'Order delicious food online with fast delivery',
    CONTACT_EMAIL: 'support@fooddelivery.com',
    CONTACT_PHONE: '+1-234-567-8900'
};

// Food Categories
export const FOOD_CATEGORIES = {
    ALL: 'All',
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    SNACK: 'snack',
    BEVERAGE: 'beverage'
};

// Food Types
export const FOOD_TYPES = {
    VEG: 'veg',
    NON_VEG: 'non-veg',
    ALL: 'all'
};

// UI Constants
export const UI_CONSTANTS = {
    COLORS: {
        PRIMARY: 'green-400',
        PRIMARY_HOVER: 'green-500',
        PRIMARY_FOCUS: 'green-300',
        BACKGROUND: 'slate-200',
        TEXT_PRIMARY: 'gray-800',
        TEXT_SECONDARY: 'gray-600',
        TEXT_LIGHT: 'gray-400'
    },
    BREAKPOINTS: {
        SM: '640px',
        MD: '768px',
        LG: '1024px',
        XL: '1280px'
    },
    CARD: {
        WIDTH: '300px',
        HEIGHT: '400px',
        IMAGE_HEIGHT: '50%'
    }
};

// Animation Durations
export const ANIMATIONS = {
    FAST: '200ms',
    NORMAL: '300ms',
    SLOW: '500ms'
};

// Local Storage Keys
export const STORAGE_KEYS = {
    CART: 'food_delivery_cart',
    USER_PREFERENCES: 'food_delivery_preferences',
    RECENT_SEARCHES: 'food_delivery_recent_searches'
};

// API Endpoints (for future implementation)
export const API_ENDPOINTS = {
    BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
    FOOD_ITEMS: '/api/food-items',
    CATEGORIES: '/api/categories',
    CART: '/api/cart',
    ORDERS: '/api/orders',
    USER: '/api/user'
};

// Error Messages
export const ERROR_MESSAGES = {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    NOT_FOUND: 'Item not found.',
    INVALID_INPUT: 'Please enter valid information.',
    IMAGE_LOAD_ERROR: 'Failed to load image.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
    ITEM_ADDED: 'Item added to cart successfully!',
    ITEM_REMOVED: 'Item removed from cart.',
    ORDER_PLACED: 'Order placed successfully!',
    PROFILE_UPDATED: 'Profile updated successfully.'
};

// Validation Rules
export const VALIDATION = {
    MIN_SEARCH_LENGTH: 2,
    MAX_SEARCH_LENGTH: 50,
    MIN_PASSWORD_LENGTH: 8,
    MAX_NAME_LENGTH: 50,
    PHONE_PATTERN: /^[+]?[\d\s\-\(\)]{10,}$/,
    EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

// Default Values
export const DEFAULTS = {
    CART_COUNT: 0,
    FOOD_QUANTITY: 1,
    SEARCH_PLACEHOLDER: 'Search for delicious food...',
    NO_RESULTS_MESSAGE: 'No items found for this category.',
    CURRENCY_SYMBOL: '₹'
}; 