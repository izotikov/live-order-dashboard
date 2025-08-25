import { FC } from 'react';
import { Board } from '@pages/DashBoard';

/**
 * Компонент Dashboard - главная доска задач
 * Отображает задачи в трех колонках: "To Do", "In Progress", "Done"
 */
const DashBoard: FC = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full p-5 gap-14 text-(--color-font-secondary)'>
      <Board name='Открыто' taskStatus='open' />
      <Board name='В работе' taskStatus='in_progress' />
      <Board name='Выполнено' taskStatus='done' />
    </div>
  );
};

export default DashBoard;
