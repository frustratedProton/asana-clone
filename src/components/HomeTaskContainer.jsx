import { useContext } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { TasksContext } from '../TasksContext';

const HomeTaskContainer = () => {
	const { tasks } = useContext(TasksContext);
	const recentTasks = tasks.slice(-5).reverse();

	return (
		<Box
			sx={{
				p: 3,
				borderRadius: 2,
				boxShadow: 3,
				bgcolor: 'background.paper',
				border: '2px solid',
				borderColor: 'divider',
				maxWidth: 1200,
				mx: 'auto',
				minHeight: '300px',
				overflowY: 'auto',
			}}
		>
			<Typography variant="h6" component="div" gutterBottom>
				Recent Tasks
			</Typography>
			<Divider sx={{ mb: 2 }} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				{recentTasks.length > 0 ? (
					recentTasks.map((task) => (
						<Box
							key={task.id}
							sx={{
								p: 2,
								borderRadius: 1,
								bgcolor: 'background.default',
								boxShadow: 1,
								border: '1px solid',
								borderColor: 'divider',
								transition: 'all 0.3s ease',
								'&:hover': {
									boxShadow: 2,
									bgcolor: 'background.paper',
								},
							}}
						>
							<Typography variant="body1" gutterBottom>
								<strong>{task.name}</strong>
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Due Date: {task.dueDate}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Project: {task.projectName}
							</Typography>
						</Box>
					))
				) : (
					<Typography>No recent tasks</Typography>
				)}
			</Box>
		</Box>
	);
};

export default HomeTaskContainer;
