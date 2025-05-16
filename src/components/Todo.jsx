import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// Импортируем наши async thunks
import {
	fetchTasks,
	addTaskToServer,
	updateTaskOnServer,
	deleteTaskFromServer,
} from '../features/taskApi';
import Spinner from './Spinner';

// === Стили через styled-components ===
const Container = styled.div`
	padding: 20px;
	font-family: Arial, sans-serif;
`;

const Input = styled.input`
	padding: 8px;
	margin-right: 10px;
	width: 250px;
`;

const Button = styled.button`
	padding: 8px 12px;
	margin: 0 5px;
	cursor: pointer;
	border: none;
	background-color: #007bff;
	color: white;
	border-radius: 4px;

	&:hover {
		background-color: #0056b3;
	}
`;

const TaskList = styled.ul`
	list-style-type: none;
	padding-left: 0;
	margin-top: 20px;
`;

const TaskItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
	margin-bottom: 10px;
	background-color: #f9f9f9;
	border: 1px solid #ddd;
	border-radius: 4px;
`;

const EditInput = styled.input`
	margin-right: 10px;
	padding: 5px;
`;

const Notification = styled.div`
	margin-top: 10px;
	padding: 10px;
	border-radius: 4px;
	background-color: ${(props) => (props.error ? '#ffebee' : '#e8f5e9')};
	color: ${(props) => (props.error ? '#c62828' : '#2e7d32')};
`;

// === Компонент Todo ===
const Todo = () => {
	const dispatch = useDispatch();

	// Получаем данные из Redux
	const {
		tasks,
		isLoading,
		error: reduxError,
	} = useSelector((state) => state.tasks);

	// Локальное состояние
	const [filter, setFilter] = useState(() => {
		return localStorage.getItem('taskFilter') || 'all';
	});
	const [editingTaskId, setEditingTaskId] = useState(null);
	const [editText, setEditText] = useState('');
	const [notification, setNotification] = useState(null);

	// React Hook Form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			taskText: '',
		},
	});

	// При монтировании загружаем задачи
	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	// Сохраняем фильтр в localStorage при его изменении
	useEffect(() => {
		localStorage.setItem('taskFilter', filter);
	}, [filter]);

	// Показываем уведомление
	const showNotification = (message, isError = false) => {
		setNotification({ message, error: isError });
		setTimeout(() => setNotification(null), 3000);
	};

	// Фильтрация задач
	const filteredTasks = tasks.filter((task) => {
		if (filter === 'active') return !task.completed;
		if (filter === 'completed') return task.completed;
		return true;
	});

	// === Добавление задачи через форму ===
	const handleAddTask = ({ taskText }) => {
		if (taskText.trim()) {
			dispatch(addTaskToServer({ title: taskText, completed: false }))
				.unwrap()
				.then(() => {
					showNotification('Задача успешно добавлена');
					reset();
				})
				.catch((err) => {
					showNotification(`Ошибка: ${err}`, true);
				});
		}
	};

	// === Удаление задачи ===
	const handleDeleteTask = (id) => {
		dispatch(deleteTaskFromServer(id))
			.unwrap()
			.then(() => {
				showNotification('Задача удалена');
			})
			.catch((err) => {
				showNotification(`Ошибка: ${err}`, true);
			});
	};

	// === Переключение выполнения задачи ===
	const handleToggleTask = (task) => {
		dispatch(
			updateTaskOnServer({
				id: task.id,
				task: { ...task, completed: !task.completed },
			})
		)
			.unwrap()
			.catch((err) => {
				showNotification(`Ошибка: ${err}`, true);
			});
	};

	// === Начать редактирование ===
	const handleStartEdit = (task) => {
		setEditingTaskId(task.id);
		setEditText(task.title || task.text);
	};

	// === Сохранить редактирование ===
	const handleSaveEdit = () => {
		const updatedTask = {
			...tasks.find((t) => t.id === editingTaskId),
			title: editText,
		};
		dispatch(updateTaskOnServer({ id: editingTaskId, task: updatedTask }))
			.unwrap()
			.then(() => {
				showNotification('Задача обновлена');
				setEditingTaskId(null);
			})
			.catch((err) => {
				showNotification(`Ошибка: ${err}`, true);
			});
	};

	return (
		<Container>
			<h1>Список дел (Redux + API)</h1>

			{/* Индикатор загрузки */}
			{isLoading && <Spinner isLoading={isLoading} />}
			{reduxError && <Notification error>{reduxError}</Notification>}

			{/* Уведомления */}
			{notification && (
				<Notification error={notification.error}>
					{notification.message}
				</Notification>
			)}

			{/* Форма добавления задачи через react-hook-form */}
			<form onSubmit={handleSubmit(handleAddTask)}>
				<Input
					type='text'
					placeholder='Новая задача'
					{...register('taskText', { required: 'Введите текст задачи' })}
				/>
				<Button type='submit'>Добавить</Button>
				{errors.taskText && (
					<span style={{ color: 'red' }}>{errors.taskText.message}</span>
				)}
			</form>

			{/* Фильтры */}
			<div style={{ marginTop: '10px' }}>
				<Button onClick={() => setFilter('all')}>Все</Button>
				<Button onClick={() => setFilter('active')}>Активные</Button>
				<Button onClick={() => setFilter('completed')}>Выполненные</Button>
			</div>

			{/* Список задач */}
			<TaskList>
				{filteredTasks.map((task) => (
					<TaskItem key={task.id}>
						{editingTaskId === task.id ? (
							<>
								<EditInput
									value={editText}
									onChange={(e) => setEditText(e.target.value)}
								/>
								<Button onClick={handleSaveEdit}>Сохранить</Button>
							</>
						) : (
							<>
								<span
									style={{
										textDecoration: task.completed ? 'line-through' : 'none',
										cursor: 'pointer',
									}}
									onClick={() => handleToggleTask(task)}
								>
									{task.title || task.text}
								</span>
								<div>
									<Button onClick={() => handleStartEdit(task)}>
										Редактировать
									</Button>
									<Button onClick={() => handleDeleteTask(task.id)}>
										Удалить
									</Button>
								</div>
							</>
						)}
					</TaskItem>
				))}
			</TaskList>
		</Container>
	);
};

export default Todo;
