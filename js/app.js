
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1,2,3,4,6,710,34013,13];
  console.log(`Min value: ${Math.min(...array)}`)

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
  const argsNum = [...arguments];
  const total = argsNum.reduce((total, curr) => {
    return total * curr
  });
  console.log(total)
}

multiply(100,200,83902,1230) // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}

const {price, count} = product; 

function totalPrice(item) {
  return price * count;
}

console.log(totalPrice())

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.

const myObj = {
  items: [],
  setItems(newItems) {
    Array.isArray(newItems) === true ? this.items = newItems : console.log('Не массивное значение')
  },
  sum() {
  return this.items.reduce((total, curr) => total + curr)
  },
  maxValue(){
    return Math.max(...this.items);
  }
}

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
    'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
    'Планирование времени поможет вам не опоздать на встречу.',
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
  ]
  
const obj = {
    predictions: [],
        setPredictions(arr) {
          this.predictions = predictsArr1; 
        },
        showPrediction() {
          const randomPhrase = obj.takeNumber();
          const predictions = this.predictions[randomPhrase];
          console.log(`Случайная фраза: ${predictions}`);
          console.log(this.takeNumber())
        },
        takeNumber() {
          const num = Math.floor(Math.random() * this.predictions.length);
          return num
        },
}
const predictions = obj;
predictions.setPredictions(predictsArr1);
predictions.showPrediction();
predictions.takeNumber();

