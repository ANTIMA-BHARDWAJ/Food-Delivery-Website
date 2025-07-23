/**
 * Category Data
 * 
 * Contains all food categories available in the application.
 * Each category includes an ID, name, and corresponding icon component.
 * 
 * Categories include:
 * - All (shows all items)
 * - Coffee
 * - Burger
 * - Pizza
 * - Noodle
 * - Main Course
 * 
 * @author Antima Bhardawaj
 * @version 1.0.0
 */

import { BiFoodMenu } from "react-icons/bi";
import { MdCoffeeMaker } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
export const categories = [
    {
        id: 1,
        name:"Menu",
        Image:<BiFoodMenu className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id: 2,
        name:"Coffee",
        Image:<MdCoffeeMaker className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id: 3,
        name:"Burger",
        Image:<GiHamburger  className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id: 4,
        name:"Pizza",
        Image:<GiFullPizza className="w-[60px] h-[60px] text-green-400" />
    },
    {
        id: 5,
        name:"Noodle",
        Image:<CiBowlNoodles  className="w-[60px] h-[60px] text-green-400"/>
    },
    {
        id: 6,
        name:"Main Course",
        Image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-400"/>
    },

   
]
/**
 * Get category by name
 * @param {string} name - Category name
 * @returns {Object|undefined} Category object or undefined if not found
 */
export const getCategoryByName = (name) => {
    return categories.find(category => category.name.toLowerCase() === name.toLowerCase());
};

/**
 * Get all category names
 * @returns {string[]} Array of category names
 */
export const getCategoryNames = () => {
    return categories.map(category => category.name);
};
