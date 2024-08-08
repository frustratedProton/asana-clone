import { Box, Typography, Divider, Avatar } from '@mui/material';

const PeopleContainer = () => {
    return (
        <Box
            sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
                border: '2px solid',
                borderColor: 'divider',
                maxWidth: 600,
                mx: 'auto',
                minHeight: '300px',
                overflowY: 'auto',
            }}
        >
            <Typography variant="h6" component="div" gutterBottom>
                People
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                {/* Person 1 */}
                <Box
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'background.default',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Avatar
                        sx={{ bgcolor: 'grey.500' }}
                    >
                        A
                    </Avatar>
                    <Typography variant="body1" gutterBottom>
                        <strong>Alex Johnson</strong>
                    </Typography>
                </Box>
                {/* Person 2 */}
                <Box
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'background.default',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Avatar
                        sx={{ bgcolor: 'grey.500' }}
                    >
                        B
                    </Avatar>
                    <Typography variant="body1" gutterBottom>
                        <strong>Beatrice Smith</strong>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default PeopleContainer;
