import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import TextField from '@material-ui/core/TextField';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from "@material-ui/core/styles";
import moment from 'moment'
import './style.css';

const styles = {
    input: {
        color: "white"
    },
    formText: {
        color: 'white',
    },
    formLabelFocused: {
    }
};


class CalenderUI extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    onNotificationClick = () => {
        alert('onNotificationClick')
    }

    timeChange = (event) => {
        const { value } = event.target;
        if (Number(value) && value.length <= 5) {
            this.setState({ time: moment(value, 'HH').format('HH:mm') })
        } else alert('Please enter number in given format')
    }

    render() {
        const { classes } = this.props;
        const { time } = this.state;
        return (
            <div className="Container">
                <div className="topDiv">
                    <TextField
                        style={{ float: 'left', backgroundColor: '#282c34', borderRadius: '4px' }}
                        id="filled-secondary"
                        label={time === '' && "00:00"}
                        size="small"
                        value={time}
                        type="text"
                        maxLength={4}
                        // color="secondary"
                        variant="filled"
                        onChange={this.timeChange}
                        InputLabelProps={{
                            className: classes.input
                        }}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    <div className="calendarIconDiv">
                        <DateRangeIcon fontSize="large" style={{ alignSelf: 'center' }} />
                    </div>
                </div>
                <div className="bottomDiv">
                    <Button variant="contained" size="large" style={{ backgroundColor: 'green', width: '200px', color: 'white' }}>
                        Set Date
                    </Button>
                    <div className="cancelIconDiv">
                        <CloseIcon fontSize="large" style={{ alignSelf: 'center', float: 'right', backgroundColor: 'red' }} />
                    </div>
                </div>
                {/* <div style={{ position: "absolute", bottom: 20, alignSelf: 'center', display: 'flex', padding: '10px', paddingBottom: '20px', justifyContent: 'space-between' }}>
                    <Button variant="contained" size="large" style={{ backgroundColor: 'green', width: '200px', color: 'white' }}>
                        Set Date
                    </Button>
                    <CloseIcon style={{ alignSelf: 'center', backgroundColor: 'red', padding: '10px', borderRadius: '4px', float: 'right', display: 'flex' }} />
                </div> */}
            </div>
        );
    }
}

export default withStyles(styles)(CalenderUI);
