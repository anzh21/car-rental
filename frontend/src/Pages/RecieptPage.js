import React from "react";
import { Card, Container, Grid, Typography, CardContent, CardActions, Button } from "@mui/material";


function RecieptPage() {
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
                                    Customer Name: XYZ
                            </Typography>
                            </Grid>
                            <Grid container>
                                <Typography 
                                color="text.secondary">
                                    Date: 20/09/2021
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
                                    Toyota Innova (SUV) 2 Days 2000 Rs.
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