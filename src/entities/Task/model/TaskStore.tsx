import { makeAutoObservable, runInAction } from 'mobx';
import { Task } from '@entities/Task/types/task';

export type ColumnType = 'todo' | 'inprogress' | 'done';

/**
 * MobX-хранилище для управления задачами
 * Обеспечивает централизованное состояние задач и методы для работы с ними
 */
class TaskStore {
  /** Массив всех задач */
  tasks: Task[] = [];

  constructor() {
    // Автоматическое преобразование полей и методов в наблюдаемые/действия
    makeAutoObservable(this, {}, { autoBind: true });
  }

  /**
   * Сохраняет новый массив задач
   * @param {Task[]} tasks - Массив задач для сохранения
   */
  saveTasks(tasks: Task[]) {
    runInAction(() => {
      this.tasks = tasks;
    });
  }

  /**
   * Находит задачу по ID
   * @param {string} id - Идентификатор задачи
   * @returns {Task | undefined} Найденная задача или undefined
   */
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  /**
   * Получает задачи по статусу
   * @param {ColumnType} status - Статус задач для фильтрации
   * @returns {Task[]} Массив задач с указанным статусом
   */
  getTasksByStatus(status: ColumnType) {
    return this.tasks.filter((task) => task.status === status);
  }

  /**
   * Обновляет статус задачи
   * @param {string} taskId - ID задачи
   * @param {ColumnType} newStatus - Новый статус задачи
   */
  updateTaskStatus(taskId: string, newStatus: ColumnType) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.status = newStatus;
    }
  }

  /**
   * Обновляет список задач для указанной колонки
   * @param {ColumnType} columnType - Тип колонки
   * @param {Task[]} tasks - Новый массив задач для колонки
   */
  updateTasksForColumn(columnType: ColumnType, tasks: Task[]) {
    // Фильтруем задачи, не принадлежащие этой колонке
    const otherTasks = this.tasks.filter((task) => task.status !== columnType);
    this.tasks = [...otherTasks, ...tasks];
  }

  /**
   * Редактирует существующую задачу
   * @param {Task} updatedTask - Обновленные данные задачи
   */
  editTask(updatedTask: Task) {
    runInAction(() => {
      this.tasks = this.tasks.map((task) =>
        task.id === updatedTask.id ? { ...updatedTask } : task,
      );
    });
  }
}

export default new TaskStore();
