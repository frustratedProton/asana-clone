import { useContext } from 'react';
import { Container, Typography, Box, Card, CardContent, IconButton, Divider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { TasksContext } from '../TasksContext';

const Home = () => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDate();
    const month = now.getMonth();
    const weekday = now.getDay();

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const weekdayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const getTimePeriod = (hours) => {
        if (hours >= 5 && hours < 12) return 'morning';
        if (hours >= 12 && hours < 17) return 'afternoon';
        if (hours >= 17 && hours < 21) return 'evening';
        return 'night';
    };

    const timePeriod = getTimePeriod(hours);
    const monthName = monthNames[month];
    const weekdayName = weekdayNames[weekday];

    const { tasks } = useContext(TasksContext);
    const recentTasks = tasks.slice(-5).reverse(); 

    return (
        <Container sx={{ mt: 4, maxWidth: 'md' }}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, mb: 4 }}>
                <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="user"
                            sx={{ mr: 2, fontSize: '4rem', color: 'primary.main' }}
                        >
                            <AccountCircle fontSize="inherit" />
                        </IconButton>
                        <Box>
                            <Typography variant="h5" component="div" gutterBottom>
                                Home | Good {timePeriod}, Guest
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Today is {weekdayName}, {monthName} {day}.
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
            <Box>
                <Typography variant="h6" component="div" gutterBottom>
                    Recent Tasks
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box>
                    {recentTasks.length > 0 ? (
                        recentTasks.map(task => (
                            <Box key={task.id} sx={{ mb: 1, p: 1, borderRadius: 1, bgcolor: 'background.paper', boxShadow: 1 }}>
                                <Typography variant="body1">
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
        </Container>
    );
};

export default Home;
