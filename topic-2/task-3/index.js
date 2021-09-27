/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    let stack = new Array();
    let openCloseDict = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let symbol of [...group]) {
        if (symbol in openCloseDict){
            stack.push(symbol);
        } else if (stack.length == 0 || openCloseDict[stack.pop()] != symbol) {
            return false;
        }
    }

    return stack.length == 0 ? true : false;
}

module.exports.isGroup = isGroup;