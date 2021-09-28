/**
 * Задача 2
 * Допишите функцию, разбивающую массив на группы по размеру
 * Если массив не может быть разделен равномерно, последней частью
 * будут оставшиеся элементы. Порядок элементов внутри группы важен.
 * 
 * arrayStripped(['a', 'b', 'c', 'd'], 2)) => [['a', 'b'], ['c', 'd']]
 * arrayStripped([1, 'b', 5, 0, 'c'], 2)) => [[1, 'b'], [5, 0], ['c']]
 * 
 * Если разбивать на группы нечего, выведите пустой массив.
 * 
 * @param {*} array массив на вход
 * @param {*} size из скольких элементов состоит группа
 * @returns массив разбитый на группы
*/
const arrayStripped = (array, size) => {

    if(array === null || size === null || typeof(size) != "number"){
        throw new Error("error");
    }
    if(!Array.isArray(array)){
        return new Array();
    }

    const groupCount = Math.floor(array.length / size);
    const remainder = array.length % size;
    const slicedArray = [];

    for(let i = 0; i < groupCount; i++){
        slicedArray.push(array.slice(i * size, (i + 1) * size));
    }
    if (remainder != 0){
        slicedArray.push(array.slice(groupCount * size, groupCount * size + remainder));
    }

    return slicedArray
}


module.exports.arrayStripped = arrayStripped;
