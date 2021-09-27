// Задача 1
// Напишите функцию, удаляющую наименьший элемент в массиве. Не изменяйте исходный массив
// Если есть несколько элементов с одинаковым значением, удалите один с меньшим индексом.
// Если вы получили пустой массив, верните пустой массив.

/**
 * 
 * @param {*} numbers массив
 * @returns массив с удаленным элементом
 */
function removeSmallest(numbers) {
    if (!Array.isArray(numbers) || numbers.length == 0){
        return new Array();
    }

    let min = Math.min(...numbers);
    let indexMin = numbers.indexOf(min);
    let result = numbers.slice();
    result.splice(indexMin, 1);

    return result;
}

module.exports.removeSmallest = removeSmallest;


