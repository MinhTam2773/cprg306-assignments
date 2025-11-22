'use server'
import { revalidatePath } from 'next/cache';
import itemList from './items.json'

let sortBy = 'name'
let items = itemList;
let meals = null;
let name;

export const getList = async () => {
    return sort(items, sortBy);
}

export const setSortBy = async (newSortBy) => {
    sortBy = newSortBy;
    revalidatePath('/week-8');
    return sortBy;
}

export const addItem = async (item) => {
    items = [...items, item];
    revalidatePath('/week-8');
}

export const sort = async (list, sort) => {
    sortBy = sort;
    if (sortBy === 'group') {
        const groupedObj = list.reduce((acc, item) => {
            (acc[item.category] ||= []).push(item);
            return acc;
        }, {});

        // Convert object to array of groups
        const groupedArray = Object.entries(groupedObj).map(([category, items]) => ({
            category,
            items,
        }));

        return groupedArray;
    } else {
        return list.toSorted((a, b) =>
            sortBy === 'name'
                ? a.name.localeCompare(b.name)
                : a.category.localeCompare(b.category)
        )
    }
}

export const searchMealsByName = async (itemName) => {
    try {
        name = itemName;
        const cleaned = encodeURIComponent(removeInvalidChars(name));

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cleaned}`);
        let data = await res.json();

        if (!data.meals) {
              ;
            data = await res.json();
        }

        meals = data.meals || [];
        revalidatePath('/week-8');
    } catch (e) {
           ;
    }
}

const removeInvalidChars = (name) => {
    name = name.split(',')[0] || name
    name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim()
    return name;
}
export const getIngredients = async (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        let ingredientName = meal[`strIngredient${i}`]?.trim();
        let ingredientMeasure = meal[`strMeasure${i}`]?.trim();

        if (ingredientName && ingredientMeasure) {
            ingredients.push(`${ingredientName} (${ingredientMeasure})`)
        }
    }
    return ingredients;
}

export const getMeals = async () => {
    return meals;
}
export const getName = async () => {
    return name;
}