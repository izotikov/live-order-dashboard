import { FC } from 'react';
import { DoneBoard, ToDoBoard, InProgressBoard } from '@pages/DashBoard';

/**
 * Компонент Dashboard - главная доска задач
 * Отображает задачи в трех колонках: "To Do", "In Progress", "Done"
 */
const DashBoard: FC = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full p-5 gap-2 '>
      <ToDoBoard name='Открыто' />
      <InProgressBoard name='В работе' />
      <DoneBoard name='Выполнено' />
    </div>
  );
};

export default DashBoard;
