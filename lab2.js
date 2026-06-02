'use strict';

const output = document.querySelector('#output');

function print(title, value) {
    const block = document.createElement('section');
    block.className = 'result';

    const heading = document.createElement('h2');
    heading.textContent = title;

    const pre = document.createElement('pre');
    pre.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);

    block.append(heading, pre);
    output.append(block);

    console.log(title, value);
}

// Завдання 2. Демонстрація camelize(str).
const camelizeExamples = [
    'background-color',
    'list-style-image',
    '-webkit-transition',
    'border-left-width',
    'font-size'
];

const camelizeResults = camelizeExamples.map((item) => `${item} -> ${camelize(item)}`);
print('Завдання 2. Функція camelize(str)', camelizeResults.join('\n'));

// Завдання 7. Демонстрація випадкового сортування через sort().
const arr = [1, 2, 3, 4, 5];
const shuffledByComparator = arr.slice();
shuffledByComparator.sort(randomSortComparator);

print('Завдання 7. Випадкове сортування через arr.sort(функція)', {
    original: arr,
    shuffled: shuffledByComparator
});

// Додаткова демонстрація функції-обгортки randomSort(arr), яка не змінює початковий масив.
const secondArray = [10, 20, 30, 40, 50, 60];
const shuffledCopy = randomSort(secondArray);

print('Додатково. randomSort(arr) повертає перемішану копію', {
    original: secondArray,
    shuffledCopy
});
