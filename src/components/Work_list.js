import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Mic from '../assets/images/mic.svg'
import File from '../assets/images/file.svg'
import Robot from '../assets/images/robot.svg'
import Dart from '../assets/images/dart.svg'

export default function Work_list() {
    return (
        <List sx={{ width: '100%', bgcolor: 'transparent' }}>
            <ListItem className='work_card' sx={{mb: 1}}>
                <ListItemAvatar>
                    <h6 className='text_secondary secondary_heading'>
                        1
                    </h6>
                </ListItemAvatar>
                <ListItemText sx={{margin:'0px'}}>
                <p className="text_primary main_description" style={{margin: 'auto'}}>
                    <span className='text_secondary'>Upload </span>a file or record your pitch using the built-in voice recording feature
                </p>
                </ListItemText>
                <ListItemAvatar sx={{textAlign: 'right'}}>
                    <img src={Mic} />
                </ListItemAvatar>
            </ListItem>
            <ListItem className='work_card' sx={{mb: 1}}>
                <ListItemAvatar>
                    <h6 className='text_secondary secondary_heading'>
                        2
                    </h6>
                </ListItemAvatar>
                <ListItemText sx={{margin:'0px'}}>
                <p className="text_primary main_description" style={{margin: 'auto'}}>
                    <span className='text_secondary'>Convert </span>your voice recording to text format
                </p>
                </ListItemText>
                <ListItemAvatar sx={{textAlign: 'right'}}>
                    <img src={File} />
                </ListItemAvatar>
            </ListItem>
            <ListItem className='work_card' sx={{mb: 1}}>
                <ListItemAvatar>
                    <h6 className='text_secondary secondary_heading'>
                        3
                    </h6>
                </ListItemAvatar>
                <ListItemText sx={{margin:'0px'}}>
                <p className="text_primary main_description" style={{margin: 'auto'}}>
                    <span className='text_secondary'>AI analyzes </span>and grades your pitch across multiple factors
                </p>
                </ListItemText>
                <ListItemAvatar sx={{textAlign: 'right'}}>
                    <img src={Robot} />
                </ListItemAvatar>
            </ListItem>
            <ListItem className='work_card' sx={{mb: 1}}>
                <ListItemAvatar>
                    <h6 className='text_secondary secondary_heading'>
                        4
                    </h6>
                </ListItemAvatar>
                <ListItemText sx={{margin:'0px'}}>
                <p className="text_primary main_description" style={{margin: 'auto'}}>
                    Get detailed <span className='text_secondary'>feedback and scores </span> for every factor
                </p>
                </ListItemText>
                <ListItemAvatar sx={{textAlign: 'right'}}>
                    <img src={Dart} />
                </ListItemAvatar>
            </ListItem>
        </List>
    )
}
