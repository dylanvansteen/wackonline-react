import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { TextField } from 'material-ui';

const styles = theme => ({
    root: {
        background: 'grey',
        width: '100%',
        height: '100%'
    },
    grid: {
        width: '100%'
    },
    item: {
        padding: 0
    },
    login: {
        marginTop: '250px',
        height: '240px',
        width: '300px'
    }
});
function Login(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="center" direction="row" className={classes.grid}>
                <Card raised className={classes.login}>
                    <CardHeader title="Login" />
                    <CardContent>
                        <TextField fullWidth label="Username" required type="text" />
                        <TextField fullWidth label="password" required type="password" />
                    </CardContent>
                    <CardActions>
                        <Button> Login </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
