'use strict';

/**
 * Лабораторна робота №8. Робота з масивами.
 * Варіант 7: завдання 2 та 7.
 */

/**
 * Перетворює рядок виду "my-short-string" у "myShortString".
 * Дефіси видаляються, а слова після дефісів починаються з великої літери.
 *
 * @param {string} str рядок у kebab-case
 * @returns {string} рядок у camelCase / PascalCase для початкового дефіса
 */
function camelize(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str
        .split('-')
        .map((word, index) => {
            if (index === 0) {
                return word;
            }

            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

/**
 * Компаратор для випадкового сортування через Array.prototype.sort().
 *
 * @returns {number} випадкове число у діапазоні [-0.5; 0.5)
 */
function randomSortComparator() {
    return Math.random() - 0.5;
}

/**
 * Повертає новий масив, елементи якого перемішані у випадковому порядку.
 * Початковий масив не змінюється.
 *
 * @param {Array} arr початковий масив
 * @returns {Array} перемішана копія масиву
 */
function randomSort(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.slice().sort(randomSortComparator);
}

// Доступність функцій у браузері при підключенні через <script>.
window.camelize = camelize;
window.randomSortComparator = randomSortComparator;
window.randomSort = randomSort;
