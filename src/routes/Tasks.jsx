import { useState, useContext } from 'react';
import { Add, CheckCircle, Delete } from '@mui/icons-material';
import { Box, IconButton, Paper, TextField, Typography, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TasksContext } from '../TasksContext';

const Tasks = () => {
    const { addTask, removeTask, markTaskDone, editTask, filteredTasks } = useContext(TasksContext);
    const [searchText, setSearchText] = useState('');

    const displayedTasks = filteredTasks(searchText);

    const columns = [
        {
            field: 'done',
            headerName: 'Completion',
            width: 120,
            renderCell: (params) => (
                <IconButton
                    color={params.value ? 'success' : 'default'}
                    onClick={() => markTaskDone(params.id)}
                >
                    <CheckCircle />
                </IconButton>
            ),
        },
        { 
            field: 'name', 
            headerName: 'Name', 
            width: 250, 
            editable: true 
        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            width: 160,
            editable: true,
            renderEditCell: (params) => (
                <TextField
                    type="date"
                    value={params.value}
                    onChange={(e) =>
                        params.api.setEditCellValue({
                            id: params.id,
                            field: params.field,
                            value: e.target.value,
                        })
                    }
                    InputLabelProps={{ shrink: true }}
                />
            ),
        },
        {
            field: 'projectName',
            headerName: 'Project Name',
            width: 220,
            editable: true,
        },
        {
            field: 'remove',
            headerName: 'Remove',
            width: 120,
            renderCell: (params) => (
                <IconButton color="error" onClick={() => removeTask(params.id)}>
                    <Delete />
                </IconButton>
            ),
        },
    ];

    return (
        <Box style={{ height: 'calc(100vh - 120px)', width: '100%' }}>
            <Paper
                style={{
                    padding: '16px',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                    borderRadius: '4px',
                    maxWidth: '100%',  
                }}
            >
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color="primary"
                        onClick={addTask}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '16px',
                            backgroundColor: '#1976d2', 
                            color: 'white',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1565c0'} 
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1976d2'}
                    >
                        <Add />
                    </IconButton>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        Add Task
                    </Typography>
                </Box>
                <TextField
                    label="Search"
                    variant="outlined"
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: '300px', maxWidth: '100%' }}
                />
            </Paper>
            <Divider style={{ marginBottom: '16px' }} />
            <Box style={{ height: 'calc(100vh - 180px)', width: '100%', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={displayedTasks}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        processRowUpdate={(params) => {
                            editTask(params.id, params.field, params.value);
                            return params.row;
                        }}
                        style={{ boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden', width: '100%' }}
                    />
                </div>
            </Box>
        </Box>
    );
};

export default Tasks;
