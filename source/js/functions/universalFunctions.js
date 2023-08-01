import {
  createNewRowInTableForDocuments,
  getInformationsForTable
} from './archive/functionsForWorkWithDocument.js';

//                         //
//  ФУНКЦИИ УНИВЕРСАЛЬНЫЕ  //
//                         //

// ФУНКЦИЯ ДЛЯ ОПРЕДЕЛЕНИЯ ВРЕМЕНИ //
export const getCurrentTime = (item) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  item.value = `${formattedDate} ${formattedTime}`;
  item.disabled = 'true';
};

// ФУНКЦИЯ ДЛЯ ОТЧИСТКИ СЛУШАТЕЛЕЙ СОБЫТИЙ //
export const clearOfEventListenersList = (typeEvent, elementOfListening, functionElementOfListening) => {
  elementOfListening.removeEventListener(typeEvent, functionElementOfListening);
};

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ДОРОЖКИ В ТАБЛИЦЕ //
export function createRow(talbe, array, getHtmlCode) {
  for (let i = 0; i < array.length; i++) {
    talbe.innerHTML += getHtmlCode();
  }
};

// ФУНКЦИЯ ДЛЯ НАЛОЖЕНИЯ ТРЕБУЕМОГО СТИЛЯ НА ЭЛЕМЕНТ //
export function applyInvisabilityOnElement(item, property, meaning) {
  item.style = `${property}: ${meaning}`;
}

// ФУНЦИЯ ДЛЯ ЗАПОЛНЕНИЯ КОЛИЧЕСТВОМ ТРЕБУЕМЫХ ДОРОЖЕК В ТАБЛИЦУ К ЧИСЛУ ЭЛЕМЕНТОВ СФОРМИРОВАННОГО МАССИВА //
export function fillInInformations(array) {
  for (let i = 0; array.length > i; i++) {
    createNewRowInTableForDocuments(array[i].id, i);
  };
  getInformationsForTable(array);
};

// ФУНКЦИЯ ДЛЯ ОТКЛЮЧЕНИЯ И ВЫКЛЮЧЕНИЯ КНОПКИ //
export function getButtonDisableOrEnable(button, type) {
  button.disabled = `${type}`;
};
