import { Avatar, Box, Breadcrumbs, Button, Card, CardHeader, Grid, IconButton, Link, Stack, Typography, } from '@mui/material'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { List } from '@mui/icons-material';

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

function Dashboard() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h5" component="h1" gutterBottom>
                            Dashboard
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                        {/* breacrumb */}
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="dashboard">
                                MUI
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card

                    // sx={{
                    //   p: 2,
                    //   display: 'flex',
                    //   flexDirection: 'column',
                    // }}
                    >
                        {/* <CardHeader
              title="Recent Orders"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              sx={{
                padding: 0,
                color: 'text.primary',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
              }}
            /> */}
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    <List />
                                </Avatar>
                            }
                            action={
                                <>
                                    <Stack direction="row" spacing={1}>
                                        <Button size="small" onClick={
                                            () => {
                                                console.log('remove row')
                                            }
                                        }>
                                            Remove a row
                                        </Button>
                                        <Button size="small" onClick={
                                            () => {
                                                console.log('add row')
                                            }
                                        }>
                                            Add a row
                                        </Button>
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Stack>

                                </>
                            }
                            title="Shrimp and Chorizo Paella"
                            // subheader="September 14, 2016"
                            sx={{
                                color: 'text.primary',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                            }}
                        />
                        <Grid item xs={12}
                            sx={{
                                marginTop: 2,
                            }}
                        >

                            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard