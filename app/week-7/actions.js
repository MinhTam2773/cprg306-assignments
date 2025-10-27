'use server'
let sortBy = 'name'

export const addItem = async (item, items) => {
    items = [...items, item];

    return sort(items, sortBy);
}

export const sort = async (items, sort) => {
    sortBy = sort;
    if (sortBy === 'group') {
        const groupedObj = items.reduce((acc, item) => {
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
        return items.toSorted((a, b) =>
            sortBy === 'name'
                ? a.name.localeCompare(b.name)
                : a.category.localeCompare(b.category)
        )
    }
}