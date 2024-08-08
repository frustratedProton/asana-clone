import { Box, Typography, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

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
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                }}
            >
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
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <PersonIcon sx={{ color: 'grey.500' }} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'grey.300',
                            height: '24px',
                            borderRadius: 1,
                            opacity: 0.6,
                        }}
                    />
                </Box>
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
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <PersonIcon sx={{ color: 'grey.500' }} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'grey.300',
                            height: '24px',
                            borderRadius: 1,
                            opacity: 0.6,
                        }}
                    />
                </Box>
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
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <PersonIcon sx={{ color: 'grey.500' }} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'grey.300',
                            height: '24px',
                            borderRadius: 1,
                            opacity: 0.6,
                        }}
                    />
                </Box>
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
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <PersonIcon sx={{ color: 'grey.500' }} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            bgcolor: 'grey.300',
                            height: '24px',
                            borderRadius: 1,
                            opacity: 0.6,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PeopleContainer;
