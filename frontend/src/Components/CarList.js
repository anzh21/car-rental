import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { CarRental, Favorite } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    grid: {
      padding: "1em",
    },
  });


function CarList() {
    const classes = useStyles();

    return(
    //     <div class="container-fluid ">
    // <div class="row">
    //     <div className="col-md-3">
    //         </div>
    //         <div className="col-md-9">
    //         <div className="row">
    //     <div class="col-md-4 col-sm-6">
    //         <div class="product-grid">
    //             <div class="product-image">
    //                 <a href="#">
    //                     <img class="pic-1" src="https://i.postimg.cc/pdvcSwBL/1.jpg"/>
    //                 </a>
    //                 <span class="product-discount-label">-20%</span>
    //             </div>
    //             <div class="product-content text-left">
    //                 <h3 class="title">
    //                     <a href="#">Men's Blazer</a>
    //                 </h3>
    //                 <div class="price">$16.00
    //                     <span>$20.00</span>
    //                 </div>
    //                 <div className="product-rating">
    //                     {/* <Rate allowHalf defaultValue={3.5} /> */}
    //                     <span className="ant-rate-text">(23 Reviews)</span>
    //                 </div>
    //             </div>
    //             <ul class="social">
    //                 <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
    //                 <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
    //                 <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
    //                 <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="col-md-4 col-sm-6">
    //         <div class="product-grid">
    //             <div class="product-image">
    //                 <a href="#">
    //                     <img class="pic-1" src="https://i.postimg.cc/KzBzYgMN/2.jpg"/>
    //                 </a>
    //             </div>
    //             <div class="product-content text-left">
    //                 <h3 class="title">
    //                     <a href="#">Women's Top</a>
    //                 </h3>
    //                 <div class="price">$17.50</div>
    //                 <div className="product-rating">
    //                     {/* <Rate allowHalf defaultValue={4.5} /> */}
    //                     <span className="ant-rate-text">(2 Reviews)</span>
    //                 </div>
    //             </div>
    //             <ul class="social">
    //                 <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
    //                 <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
    //                 <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
    //                 <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
    //             </ul>
    //         </div>
    //     </div><div class="col-md-4 col-sm-6">
    //         <div class="product-grid">
    //             <div class="product-image">
    //                 <a href="#">
    //                     <img class="pic-1" src="https://i.postimg.cc/jjLVv0qn/3.jpg"/>
    //                 </a>
    //             </div>
    //             <div class="product-content text-left">
    //                 <h3 class="title">
    //                     <a href="#">Women's Top</a>
    //                 </h3>
    //                 <div class="price">$17.50</div>
    //                 <div className="product-rating">
    //                     {/* <Rate allowHalf defaultValue={3} /> */}
    //                     <span className="ant-rate-text">(20 Reviews)</span>
    //                 </div>
    //             </div>
    //             <ul class="social">
    //                 <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
    //                 <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
    //                 <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
    //                 <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="col-md-4 col-sm-6">
    //         <div class="product-grid">
    //             <div class="product-image">
    //                 <a href="#">
    //                     <img class="pic-1" src="https://i.postimg.cc/6qHysxRJ/4.jpg"/>
    //                 </a>
    //             </div>
    //             <div class="product-content text-left">
    //                 <h3 class="title">
    //                     <a href="#">Women's Top</a>
    //                 </h3>
    //                 <div class="price">$17.50</div>
    //                 <div className="product-rating">
    //                     {/* <Rate allowHalf defaultValue={3.5} /> */}
    //                     <span className="ant-rate-text">(9 Reviews)</span>
    //                 </div>
    //             </div>
    //             <ul class="social">
    //                 <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
    //                 <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
    //                 <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
    //                 <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="col-md-4 col-sm-6">
    //         <div class="product-grid">
    //             <div class="product-image">
    //                 <a href="#">
    //                     <img class="pic-1" src="https://i.postimg.cc/6qHysxRJ/4.jpg"/>
    //                 </a>
    //             </div>
    //             <div class="product-content text-left">
    //                 <h3 class="title">
    //                     <a href="#">Women's Top</a>
    //                 </h3>
    //                 <div class="price">$17.50</div>
    //                 <div className="product-rating">
    //                     {/* <Rate allowHalf defaultValue={2.5} /> */}
    //                     <span className="ant-rate-text">(11 Reviews)</span>
    //                 </div>
    //             </div>
    //             <ul class="social">
    //                 <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
    //                 <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
    //                 <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
    //                 <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>
    // </div>
    // </div>  
    // </div>
    <Container maxWidth="lg">
        <Grid container>
        <Grid item lg={3} className={classes.grid}>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Sedan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
      </CardContent>
      
      <CardActions>
        <span style={{marginRight:"1.5em"}}>INR 100</span>
        <Button aria-label="car rent" variant="outlined" startIcon={<CarRental />}>
           Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: SUV
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined" startIcon={<CarRental />}>
           Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Hatchback
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined" startIcon={<CarRental />}>
           Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Sedan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined">
          <CarRental /> Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Grid container>
        <Grid item lg={3} className={classes.grid}>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Sedan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined">
          <CarRental /> Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: SUV
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined">
          <CarRental />   Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Hatchback
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined">
          <CarRental />   Rent a Car
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3} className={classes.grid}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="justify">
            Lizard <span style={{marginLeft:"1.2em"}}>INR 100</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Car Type: Sedan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <Button aria-label="car rent" variant="outlined">
          <CarRental />
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
    )
    
}

export default CarList