import { Box, Typography, Divider, IconButton } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderIcon from '@mui/icons-material/Folder';

const ProjectContainer = () => {
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
                Projects
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'primary.light',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        height: '80px',
                        width: '100%',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                        '&:hover': {
                            bgcolor: 'primary.main',
                            boxShadow: 2,
                        },
                    }}
                >
                    <IconButton sx={{ color: 'primary.contrastText', fontSize: 24 }}>
                        <CreateNewFolderIcon />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'background.default',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        height: '80px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <FolderIcon sx={{ fontSize: 24, color: 'grey.500' }} />
                    <Typography variant="body2" gutterBottom>
                        <strong>Project 1</strong>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'background.default',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        height: '80px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <FolderIcon sx={{ fontSize: 24, color: 'grey.500' }} />
                    <Typography variant="body2" gutterBottom>
                        <strong>Project 2</strong>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: 'background.default',
                        boxShadow: 1,
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        height: '80px',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    <FolderIcon sx={{ fontSize: 24, color: 'grey.500' }} />
                    <Typography variant="body2" gutterBottom>
                        <strong>Project 3</strong>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectContainer;
