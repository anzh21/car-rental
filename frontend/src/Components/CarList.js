import React, {useState, useEffect} from "react";
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
import axios from "axios";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllCar} from "../Redux/Action/CarListAction";


const useStyles = makeStyles({
    grid: {
      padding: "1em",
    },
  });


function CarList() {
  
    const classes = useStyles();
    const [data, setData]=useState("");
    const CarList = useSelector(state =>state?.carReducer?.products?.data);
    // const car  = CarList;


  console.log("cartlist" , CarList)

    const dispatch=useDispatch();

    // const getAllCar=()=>{
    //   axios({
    //     method: 'GET',
    //     url:"http://localhost:8000/car"
    //   }).then((res)=>{
    //     console.log("res", res);
    //     setData(res.data.data);
    //   }).catch((err) => console.log("err", err));
    // };

    useEffect(()=>{
      // getAllCar();
      dispatch(getAllCar(CarList));
    }, [])

    return(
    <Container maxWidth="lg">
        <Grid container>
          {
            CarList ? CarList.filter(booked => booked.status !== "Booked" ).map((data, key)=>{
              console.log("Data Fetched", data);
              return(
                <Grid item lg={3} className={classes.grid}>
                  <Card >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={data.carImg}
                        alt="green iguana"
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h6" component="div" align="justify">
                          {data.carname} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Car Type: {data.cartype}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardContent>
                      <Stack spacing={1}>
                          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                      </Stack>
                    </CardContent>
                    
                    <CardActions>
                      <span style={{marginRight:"1.5em"}}>{data.carprice}</span>
                      <Link to={{
                        pathname: "/calc/" + data._id,
                        state:{
                          data:data
                      }
                      }}>
                        <Button
                        // onClick={data={data}}
                        aria-label="car rent" 
                        variant="outlined" 
                        startIcon={<CarRental />}>
                          Rent a Car
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
              </Grid>
              );
            }) : ""
          }
        </Grid>
        
    {/* <Grid item lg={3} className={classes.grid}>
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
    </Grid> */}
    
    {/* <Grid container>
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
    </Grid> */}
    </Container>
    )
    
}

export default CarList