import React, { useState } from 'react';
import { Box, Typography, Paper, Card, CardContent, CardActions, Button, Grid, TablePagination } from '@mui/material';
// import { Link } from 'react-router-dom'; 

// Dummy data
const usersData = Array.from({ length: 50 }, (_, i) => ({
  user_id: i + 1,
  username: `user${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`
}));

const UsersListingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const paginatedUsers = usersData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <Box p={3}>
      <Box display="flex" gap={2} mb={3}>
        <Paper elevation={3} sx={{ p: 3, flex: '1 1 200px', textAlign: 'center' }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">{usersData.length}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, flex: '1 1 200px', textAlign: 'center' }}>
          <Typography variant="h6">Users Active in the Last 24 Hours</Typography>
          <Typography variant="h4">300</Typography>
        </Paper>
      </Box>
      <Grid container spacing={3}>
        {paginatedUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.user_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.username}</Typography>
                <Typography color="textSecondary">{user.name}</Typography>
                <Typography color="textSecondary">{user.email}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="primary" sx={{ mr: 1 }}>Edit</Button>
                <Button variant="outlined" color="error">Ban</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={usersData.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default UsersListingPage;
