const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль.');
})

document.querySelector('#Alert').addEventListener('click', () => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK.');
})

document.querySelector('#Promt').addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста.');
})
