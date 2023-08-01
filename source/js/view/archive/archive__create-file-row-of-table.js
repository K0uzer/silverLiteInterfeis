export const archiveCreateFileRowOfTable = (fileName, fileSize, fileCreator, fileDateCrate) => `<tr>
<td><button class="archive__create-new-document-of-table-button-for-delete">Удалить</button></td>
<td>${fileName}</td>
<td>
  <select class="archive__create-new-document-of-input">
    <option value="-">Выбор типа</option>
    <option value="Правовые документы">Правовые документы</option>
    <option value="Учредительные и регистрационные документы">Учредительные и регистрационные документы</option>
    <option value="Заявления">Заявления</option>
    <option value="Акты">Акты</option>
    <option value="Баланс водопотребления и водоотведения">Баланс водопотребления и водоотведения</option>
    <option value="Технический паспорт объекта">Технический паспорт объекта</option>
    <option value="Письма, заявления, жалобы абонентов и ответы на них">Письма, заявления, жалобы абонентов и ответы на них</option>
    <option value="Договор">Договор</option>
    <option value="Служебные записи, рапорты">Служебные записи, рапорты</option>
    <option value="Прочие документы">Прочие документы</option>
    <option value="Проектно-техническая документация">Проектно-техническая документация</option>
    <option value="Акты контрольного обслудования">Акты контрольного обслудования</option>
  </select>
</td>
<td>${fileSize}</td>
<td>${fileCreator}</td>
<td>${fileDateCrate}</td>
</tr>`;
