import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	IconButton,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import HomeTaskContainer from '../components/HomeTaskContainer';
import ProjectContainer from '../components/ProjectContainer';
import PeopleContainer from '../components/PeopleContainer';

const Home = () => {
	const now = new Date();
	const hours = now.getHours();
	const day = now.getDate();
	const month = now.getMonth();
	const weekday = now.getDay();

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const weekdayNames = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
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
			<HomeTaskContainer />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: 4,
					mt: 4,
				}}
			>
				<Box sx={{ flex: 1, mr: 2 }}>
					<ProjectContainer />
				</Box>
				<Box sx={{ flex: 1, ml: 2 }}>
					<PeopleContainer />
				</Box>
			</Box>
		</Container>
	);
};

export default Home;
