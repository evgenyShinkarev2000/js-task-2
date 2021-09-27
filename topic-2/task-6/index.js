/**
 * Задача 6 - Третье измерение
 * Круги кругами, а интересно какой объем у цилиндра.
 * Только вот тут хотелось бы ещё и точность вычислений настроить.
 * Реализуйте логику константы miniMathLibExtended
 * Константа должна содержать функцию volume
 * Подсмотрите в задачу 4
 *
 * Реализуйте функцию, которая возвращает модифицированный volume из miniMathLibExtended
 * в которую передается значение Пи, необходимое для расчетов
 * */
const miniMathLibExtended = {
    pi: 3.14,
    volume: function(r, h){
        if (typeof(r) != "number" || typeof(h) != "number"){
            throw new Error();
        }
        if (r < 0 || h < 0){
            throw new Error("r, h < 0");
        }

        return this.pi * r ** 2 * h;
    }
}

function cylinderVolumeAccurate(pi){

    return miniMathLibExtended.volume.bind({pi:pi});
}

console.log(cylinderVolumeAccurate(3)(6, 12).toFixed(2));

module.exports.miniMathLibExtended = miniMathLibExtended;
module.exports.cylinderVolumeAccurate = cylinderVolumeAccurate;