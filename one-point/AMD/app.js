define(function () {
    function loadScriptArr(src, callback) {
        src.forEach((el) => {

            const check = checkReplay(el);

            if (check) {
                const script = document.createElement('script');
                script.src = el;
                // Три раза обработался callback
                script.onload = callback;
                document.head.insertAdjacentElement('beforeend', script);
            }
        });
    }

    /**
     * Функция на проверку повторяемости (если надо добавить какой-то script c src, то
     * используй для проверки)
     * @param {string} replay передаваемый src для проверки 
     * @returns {boolean} возврат true, если повторений нет, false - есть повторения
     */
    function checkReplay(replay) {
        // Выделяем все теги script в head
        const scriptArr = document.head.getElementsByTagName('script');

        let check = true;

        for (let i = 0; i < scriptArr.length; i++) {
            if (scriptArr[i].attributes[0].nodeValue == replay) {
                check = false;
                break;
            }
        }
        return check;
    }
    return {
        loadScriptArr
    };
});