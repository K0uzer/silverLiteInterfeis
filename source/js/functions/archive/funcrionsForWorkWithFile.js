// ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ЗАГРУЖЕННОМ ФАЙЛЕ В INPUT //
export function getInfoFromFileInInput() {
  const inputInWindowCreateDocument = document.querySelector('.archive__create-new-document-of-input-file');
  const fileList = inputInWindowCreateDocument.files;
  console.log(fileList);
  if(fileList !== undefined) {
    const file = fileList[0];
    console.log('Имя файла: ' + file.name);
    console.log('Тип файла: ' + file.type);
    console.log('Размер файла: ' + file.size + ' байт');
    console.log('Последнее изменение: ' + file.lastModifiedDate);
  }
};
