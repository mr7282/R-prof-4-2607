import React, {Component} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@material-ui/core' 
import MenuIcon from '@material-ui/icons/Menu'
export default class Header extends Component {
    render() {
        return(
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        {this.props.title}
                    </Typography>
                    <ButtonGroup className="button-group" variant="contained">
                        <Button variant="outlined">Чаты</Button>
                        <Button variant="outlined">Новый чат</Button>
                    </ButtonGroup>

                </Toolbar>
            </AppBar>
        )
    }
}