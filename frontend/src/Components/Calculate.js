import { Card, Container, Grid, TextField, Typography, Button } from "@mui/material";
import React, {useState } from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";

var aaa;
function Calculate(props){
    const[days, setDays] = useState('');
    const [name, setName] = useState('');
    const [total, setTotal]=useState('');
    let history=useHistory();

    const baseurl="http://localhost:8000";
    // const Booking=()=>{
    //     console.log(`${baseurl}/${props.location?.state?.data?._id}`, "url")
    //     axios({
    //       method: 'PUT',
    //       url:`${baseurl}/${props.location?.state?.data?._id}`,
    //       data: {
    //         status: "Booked"
    //         // date: moment(new Date).format('D[/]MM[/]YYYY, h:mm:ss a'),
    //   },
    //     }).then((res) => {
    //         if (res.data.success == true) {
    //           history.push("/reciept")
    //         }
            
    //         console.log("res", res)
        
    //       }).catch((err) => console.log("err", err))
      
    //   };

      function calc(){
        if(props.location?.state?.data?.cartype=== "SUV"){

            // window.totalPrice=(days * props.location?.state?.data?.carprice)
            return (days * props.location?.state?.data?.carprice)
            
                 
          }
          else if(props.location?.state?.data?.cartype=== "Sedan" && days<= 3){
            // window.totalPrice=(1 * props.location?.state?.data?.carprice)
              return (1 * props.location?.state?.data?.carprice)
          }
          else if(props.location?.state?.data?.cartype=== "Sedan" && days> 3){
            // window.totalPrice=(days * props.location?.state?.data?.carprice - 1000)
              return days * props.location?.state?.data?.carprice - 1000
          }
          else if(props.location?.state?.data?.cartype==="Hatchback" && days<= 5){
            // window.totalPrice=(1 * props.location?.state?.data?.carprice)
            return 1 * props.location?.state?.data?.carprice 
        }
        else if(props.location?.state?.data?.cartype=== "Hatchback" && days> 5){
            // window.totalPrice=(days * props.location?.state?.data?.carprice - 2000)
            return days * props.location?.state?.data?.carprice - 2000
        }
      }
      
    //   global.location
     console.log("total", total)
     
      

    console.log("propss", props);
    return(
        <div>
            <Container>
                <Grid container>
                    <Grid item lg={2} />
                    <Grid item lg={8}>
                        <Card style={{margin: 15}}>
                            <TextField 
                            variant="standard" 
                            id="standard-number"
                            label="No. of days to Rent"
                            style={{margin: 10}}
                            type="number"
                            defaultValue="1"
                            onChange={(e) => setDays(e.target.value)}
                            />
                            <TextField 
                            variant="standard" 
                            id="standard-text"
                            label="Enter Name"
                            style={{margin: 10}}
                            onChange={(e) => setName(e.target.value)}
                            />

                        </Card>
                        <Card style={{padding:15}}>
                            <Grid container>
                            <Grid item lg={4}>
                                <Typography gutterBottom >
                                    Car Name & Type: {props.location?.state?.data?.carname}-{props.location?.state?.data?.cartype}  
                                </Typography>
                            </Grid>
                            <br/>
                            <Grid item lg={8}>
                                <Typography gutterBottom>
                                    Price : {props.location?.state?.data?.carprice}
                                </Typography>
                            </Grid> 
                            </Grid>
                            <Grid item lg={10}>
                                <Typography gutterBottom>
                                    Total Cost for {days} days is Rs {calc()}
                                    
                                    
                                </Typography>
                                <Typography>
                                    {/* Total - 500 x 1 + 500 x 5 = 3000 */}
                                </Typography>
                            </Grid> 
                            <Link
                            to={{
                                pathname:'/reciept/'+ props.location?.state?.data?._id,
                                state:{
                                    data: props.location?.state?.data,
                                    name: name,
                                    days: days,
                                     total: calc(),
                                }
                            }
                                
                            }>
                            <Button
                            // onClick={Booking}
                            aria-label="book" 
                            variant="outlined" 
                            >
                               Confirm Booking
                            </Button>
                            </Link>
                        </Card> 
                    </Grid>
                    <Grid item lg={2} />
                </Grid>
            </Container>
        </div>
    );
}
export default Calculate;