import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'JOIN US NOW  !!!!'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Join us in building a safer nation together! Our anomaly detection\
                 application empowers you to be the eyes and ears of your community, providing real-time alerts \
                 and insights to thwart potential threats. With your vigilance and our cutting-edge technology,\
                  we can stay one step ahead of emergencies like accidents, fires, and criminal activities.\
                   Together, we will foster a culture of safety and resilience, where every user plays a crucial role in protecting our neighborhoods and ensuring a brighter, safer future for all. \
                Join the movement today and be a part of building a safer tomorrow!  '
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Contact
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;