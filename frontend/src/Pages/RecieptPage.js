import React, {useEffect} from "react";
import { Card, Container, Grid, Typography, CardContent, } from "@mui/material";
import axios from "axios";
// import {useHistory } from "react-router-dom";


function RecieptPage(props) {
    // let history = useHistory();
        var showdate = new Date();
        var displayDate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();

        const baseurl="http://localhost:8000";
        const Booking=()=>{
            console.log(`${baseurl}/${props.location?.state?.data?._id}`, "url")
            axios({
            method: 'PUT',
            url:`${baseurl}/${props.location?.state?.data?._id}`,
            data: {
                status: "Booked"
                // date: moment(new Date).format('D[/]MM[/]YYYY, h:mm:ss a'),
        },
            }).then((res) => {
                console.log("res", res)
            
            }).catch((err) => console.log("err", err))
        
        };
        useEffect(()=>{
            Booking();
        },[])

    


    console.log("props from reciept", props);
    return (
        <Container>
            <Grid container>
                <Grid item lg={2} />
                <Grid item lg={8}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography 
                            variant="h5" 
                            color="text.secondary" 
                            gutterBottom>
                                Reciept
                            </Typography>
                            <Grid container>
                                <Typography 
                                component="div">
                                    Customer Name: {props.location?.state?.name}
                            </Typography>
                            </Grid>
                            <Grid container>
                                <Typography 
                                color="text.secondary">
                                    Date: {displayDate}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography 
                                variant="h5" 
                                color="text.secondary" 
                                gutterBottom>
                                    Rental Info
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Typography 
                                variant="h6" 
                                color="text.secondary" 
                                gutterBottom>
                                    {/* Toyota Innova (SUV) 2 Days 2000 Rs. */}
                                    {props.location?.state?.data?.carname} ({props.location?.state?.data?.cartype}) {props.location?.state?.days} days {props.location?.state?.total}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={2} />
            </Grid>
        </Container>
    )
}
export default RecieptPage;