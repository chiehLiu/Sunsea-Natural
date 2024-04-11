import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { posts } from 'src/_mock/blog';

// import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import ProductHeroLayout from '../ProductHeroLayout';

// ----------------------------------------------------------------------

export default function BlogView() {
  const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        {/* <Typography variant="h4">Sunsea-Natural</Typography> */}

        <ProductHeroLayout
          sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
          }}
        >
          {/* Increase the network loading priority of the background image. */}
          <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
          <Typography color="inherit" align="center" variant="h2" marked="center">
            Sunsea-Natural
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
          </Typography>
          <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover the experience
          </Typography>
        </ProductHeroLayout>

        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button> */}
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
