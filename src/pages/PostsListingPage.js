import React, { useState } from 'react';
import { Box, Typography, Paper, Card, CardContent, CardActions, Button, Grid, TablePagination } from '@mui/material';

// Dummy data
const postsData = Array.from({ length: 50 }, (_, i) => ({
  post_id: i + 1,
  caption: `Post Caption ${i + 1}`,
  // media_url: `http://example.com/media${i + 1}`
  media_url: "https://images.pexels.com/photos/280204/pexels-photo-280204.jpeg"
}));

const PostsListingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const paginatedPosts = postsData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <Box p={3}>
      <Box display="flex" gap={2} mb={3}>
        <Paper elevation={3} sx={{ p: 3, flex: '1 1 200px', textAlign: 'center' }}>
          <Typography variant="h6">Total Posts</Typography>
          <Typography variant="h4">{postsData.length}</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, flex: '1 1 200px', textAlign: 'center' }}>
          <Typography variant="h6">Posts Published in the Last 24 Hours</Typography>
          <Typography variant="h4">120</Typography>
        </Paper>
      </Box>
      <Grid container spacing={3}>
        {paginatedPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.post_id}>
            <Card>
              <CardContent>
                <Typography variant="body1">{post.caption}</Typography>
                <img src={post.media_url} alt={post.caption} style={{ width: '100%', height: 'auto' }} />
              </CardContent>
              <CardActions>
                <Button variant="outlined" color="error" sx={{ mr: 1 }}>Delete</Button>
                <Button variant="outlined" color="warning">Hide</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={postsData.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default PostsListingPage;
