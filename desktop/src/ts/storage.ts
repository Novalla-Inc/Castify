const addItem = (itemName: string, itemData: object) => {
    localStorage.setItem(itemName, JSON.stringify(itemData));
};

const getItem = (itemName: string ) => {
    return localStorage.getItem(itemName);
};

const clearStorage = () => {
    localStorage.clear();
};

export { getItem, addItem, clearStorage };