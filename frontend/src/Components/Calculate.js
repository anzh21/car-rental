import { Card, Container, Grid, Typography } from "@mui/material";
import React from "react";


function Calculate(props){
    console.log("propss", props);
    return(
        <div>
            <Container>
                <Grid container>
                    <Grid item lg={2} />
                    <Grid item lg={8}>
                        <Card>
                            <Grid container>
                            <Grid item lg={4}>
                                <Typography>
                                    Car Type: Sedan
                                </Typography>
                            </Grid>
                            <Grid item lg={8}>
                                <Typography>
                                    Price : 500 (Regular Fee) for first 3 days
                                </Typography>
                            </Grid> 
                            </Grid>
                            <Grid item lg={10}>
                                <Typography>
                                    Total Cost for 8 days is Rs 3000
                                </Typography>
                                <Typography>
                                    Total - 500 x 1 + 500 x 5 = 3000
                                </Typography>
                            </Grid> 
                        </Card> 
                    </Grid>
                    <Grid item lg={2} />
                </Grid>
            </Container>
        </div>
    );
}
export default Calculate;