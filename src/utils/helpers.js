/**
 * Helper Utilities
 * 
 * Collection of utility functions used throughout the application.
 * These functions provide common functionality like formatting, validation, etc.
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import { DEFAULTS, VALIDATION } from './constants.js';

/**
 * Format price with currency symbol
 * @param {number} price - Price value
 * @param {string} currency - Currency symbol (default: ₹)
 * @returns {string} Formatted price string
 */
export const formatPrice = (price, currency = DEFAULTS.CURRENCY_SYMBOL) => {
    if (typeof price !== 'number' || isNaN(price)) {
        return `${currency}0`;
    }
    return `${currency}${price.toLocaleString()}`;
};

/**
 * Capitalize first letter of each word
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 */
export const capitalizeWords = (str) => {
    if (!str) return '';
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

/**
 * Generate unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
    return VALIDATION.EMAIL_PATTERN.test(email);
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
export const isValidPhone = (phone) => {
    return VALIDATION.PHONE_PATTERN.test(phone);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 50) => {
    if (!text || text.length <= length) return text;
    return text.substr(0, length).trim() + '...';
};

/**
 * Get food type display info
 * @param {string} type - Food type (veg/non-veg)
 * @returns {Object} Display information for food type
 */
export const getFoodTypeInfo = (type) => {
    const typeMap = {
        veg: {
            label: 'Vegetarian',
            color: 'text-green-500',
            bgColor: 'bg-green-50',
            emoji: '🌱'
        },
        'non-veg': {
            label: 'Non-Vegetarian',
            color: 'text-red-500',
            bgColor: 'bg-red-50',
            emoji: '🍖'
        }
    };
    
    return typeMap[type] || typeMap.veg;
};

/**
 * Filter array by search term
 * @param {Array} items - Array to filter
 * @param {string} searchTerm - Search term
 * @param {string[]} searchFields - Fields to search in
 * @returns {Array} Filtered items
 */
export const filterBySearch = (items, searchTerm, searchFields = ['name']) => {
    if (!searchTerm || searchTerm.length < VALIDATION.MIN_SEARCH_LENGTH) {
        return items;
    }
    
    const term = searchTerm.toLowerCase();
    return items.filter(item => 
        searchFields.some(field => 
            item[field]?.toLowerCase().includes(term)
        )
    );
};

/**
 * Sort array by specified field
 * @param {Array} items - Array to sort
 * @param {string} field - Field to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted items
 */
export const sortItems = (items, field, order = 'asc') => {
    return [...items].sort((a, b) => {
        const aVal = a[field];
        const bVal = b[field];
        
        if (typeof aVal === 'string') {
            return order === 'asc' 
                ? aVal.localeCompare(bVal)
                : bVal.localeCompare(aVal);
        }
        
        return order === 'asc' 
            ? aVal - bVal 
            : bVal - aVal;
    });
};

/**
 * Get item from local storage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Stored value or default
 */
export const getFromStorage = (key, defaultValue = null) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
    }
};

/**
 * Save item to local storage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} True if successful
 */
export const saveToStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
};

/**
 * Remove item from local storage
 * @param {string} key - Storage key
 * @returns {boolean} True if successful
 */
export const removeFromStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from localStorage:', error);
        return false;
    }
};

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobile = () => {
    return window.innerWidth <= 768;
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - Element ID to scroll to
 * @param {number} offset - Offset from top (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} True if successful
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    }
}; 