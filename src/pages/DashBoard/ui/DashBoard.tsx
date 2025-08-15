import { FC } from 'react';
import { Board } from '@widgets/Board';

/**
 * Компонент Dashboard - главная доска задач
 * Отображает задачи в трех колонках: "To Do", "In Progress", "Done"
 */
const DashBoard: FC = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full p-5 gap-2 text-(--color-font-secondary)'>
      <Board name='Открыто' taskStatus='todo' />
      <Board name='В работе' taskStatus='inprogress' />
      <Board name='Выполнено' taskStatus='done' />
    </div>
  );
};

export default DashBoard;
