export const protocolsOfPrint = () => `
  <section class="protocols-of-print">
    <div class="protocols-of-print__content-of-protocols">
      <span class="protocols-of-print__preview">Протоколы печати по документу</span>
      <span class="protocols-of-print__preview">(НОМЕР ДОКУМЕНТА)</span>
      <button class="protocols-of-print__button-close">Закрыть</button>
    </div>
    <div class="protocols-of-print__content-of-protocols">
      <input type="datetime-local" class="protocols-of-print__input-of-filter-protocols" placeholder="Период С">
      <input type="datetime-local" class="protocols-of-print__input-of-filter-protocols" placeholder="Период По">
      <input type="text" class="protocols-of-print__input-of-filter-protocols" placeholder="Комментарий">
    </div>
    <div class="protocols-of-print__content-of-protocols">
      <table class="protocols-of-print__table">
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>Пользователь</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody class="protocols-of-print__table-body">
          <tr>
            <td>13.08.2018 15:04</td>
            <td>Манохива И.А./Специалист договорного отдела</td>
            <td>распечатано вложение "scan0.tiff" (заявление)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
`;
