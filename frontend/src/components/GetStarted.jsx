import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/caraccident.jpg';
import imgDetail2 from '../assets/alarms.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Pave the way towards secure enivironment !!!!'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>Our primary aim is to develop an advanced anomaly detection system<br />
                     capable of identifying critical events such as car accidents, robberies, and fires in real-time,<br />
                      ensuring swift and effective responses.<br />
We are focused on leveraging cutting-edge technology to create a proactive anomaly detection<br />
 platform that can detect and alert authorities to emergencies such as car accidents, robberies, <br />
 and fires as they occur.
                   
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Get alarms at right situaions !!!!'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    In scenarios like car accidents or fires, where immediate intervention is crucial, <br /> 
                    the alarm system plays a pivotal role in reducing response times. <br /> 
                    By promptly alerting emergency services and nearby authorities, precious minutes are saved, allowing them to dispatch rescue teams, firefighters, or law enforcement officers to the scene without delay.
                        
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;