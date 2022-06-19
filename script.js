'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const gameApp = {
        guessGame: {
            name: 'угадалка',
            power: function() {
                gameApp.loading();
                gameApp.confirmAction(this.name);
                
                let count = 0;
                const num = Math.floor(Math.random() * 100 + 1);
    
                alert(`
                    Я случайным образом загадаю число от 1 до 100.
                    Твоя задача его угадать за минимальное количество 
                    попыток.
                    После каждого твоего ввода я буду говорить больше 
                    твоё число или меньше загаданного.
                    Начнём?
                `);
                
                function answer() {
                    const text = +prompt('Попробуй угадать');
                    
                    if (text > 0 && text < 101 && Number.isInteger(text)) {
                        if (num === text) {
                            alert('Угадал!');
                            count++;
                            alert(`Тебе удалось угадать за ${count} попыток`);
                            gameApp.choiceGame();
                        } else if (num < text) {
                            alert('Слишком много');
                            count++;
                            answer();
                        } else if (num > text) {
                            alert('Слишком мало');
                            count++;
                            answer();
                        }
                    } else {
                        gameApp.error();
                        answer();
                    }
                }
                answer();
            }
        },
        countGame: {
            name: 'считалка',
            power: function() {
                gameApp.loading();
                gameApp.confirmAction(this.name);
                
                let count = 5;
    
                function random() {
                    const num = Math.floor(Math.random() * 21);
                    return num;
                } 
                alert(`
                    Я случайным образом буду давать задание по арифметике.
                    Твоя задачь решить 5 примеров.
                    Начинаем?
                `);
                
                for (let i = 0; i < 1; i++) {
                    const num1 = random(),
                          num2 = random();
                    let result = +`${num1}` + (+`${num2}`),
                        answer = prompt(`${num1} + ${num2}`);
    
                    console.log(result);
                    console.log(answer);
    
                    if (result != answer) {
                        count--;
                    }
                    console.log(count);
                    
                    for (let j = 0; j < 2; j++) {
                        const num1 = random(),
                              num2 = random();
    
                        result = +`${num1}` * (+`${num2}`);
                        answer = prompt(`${num1} * ${num2}`);
                        
                        console.log(result);
                        console.log(answer);
                        
                        if (result != answer) {
                            count--;
                        }
                        console.log(count);
    
                        for (let k = 0; k < 1; k++) {
                            const num1 = random(),
                                  num2 = random();
    
                            result = +`${num1}` - (+`${num2}`);
                            answer = prompt(`${num1} - ${num2}`);
                            
                            console.log(result);
                            console.log(answer);
                            
                            if (result != answer) {
                                count--;
                            }
                            console.log(count);
                        }
                    }
                }   
                alert(`Правильных ответов: ${count} из 5`);
                gameApp.choiceGame();
            }
            
        },
        clickGame: {
            name: 'кликалка',
            power: function() {
                gameApp.loading();
                gameApp.confirmAction(this.name);
    
                let count = 0;
                
                alert(`
                    Я случайным образом буду показывать 10 системных окон.
                    Твоя задача как можно скорее прокликать все.
                    При этом в окне confirm нужно нажимать "Отмена".
                    Начинаем?
                `);
           
                function randomWindow() {
                    return Math.ceil(Math.random() * 2);
                }
    
                for (let i = 0; i < 10; i++) {
                    if (randomWindow() % 2 === 0) {
                        const ok = alert('Просто нажми "ок"');
                    } else {
                        const cansel = confirm('Нажми "отмена"');
                        if (cansel == true) {
                            count++;
                            console.log(count);
                        }
                    }
                }   
                
                alert(`Ошибок: ${count}`);
                gameApp.choiceGame();
            }
        },
        start: function() {
            alert('Привет! Добро пожаловать в "Игромат" версии 0.1');
            gameApp.choiceGame();        
        },   
        choiceGame: function() {
            const message = prompt(`
                Выбери игру:
                1 - ${gameApp.guessGame.name};
                2 - ${gameApp.countGame.name};
                3 - ${gameApp.clickGame.name};
                Для выхода введи "выход"
            `).toLowerCase();
    
            if (message == 1 || message == gameApp.guessGame.name) {
                gameApp.guessGame.power();
            } else if (message == 2 || message == gameApp.countGame.name) {
                gameApp.countGame.power();
            } else if (message == 3 || message == gameApp.clickGame.name) {
                gameApp.clickGame.power();
            } else if (message == 'выход') {
                alert('Пока, пока');
            } else {
                gameApp.error();
                gameApp.choiceGame();
            }
        },
        error: function() {
            alert('Неправильный ввод, попробуй еще раз )=');
        },
        loading: function() {
            alert('Игра запускается...');
        },
        confirmAction: function(name) {
            alert(`Игра "${gameApp.bigLetter(name)}"`);
        },
        bigLetter: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    };
    
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', () => {
        gameApp.start();
    });
});




