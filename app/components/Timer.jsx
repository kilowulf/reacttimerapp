var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
    // determining starting initial state of page content 
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    //lifecycle method
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                this.handleStart();
                break;
                case 'stopped':
                //updates count attribute
                this.setState({count: 0});
                case 'paused':
                clearInterval(this.timer);
                this.timer = undefined;
                break;
            }
        }
    },
    //lifecycle method
    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    //timer interval
    handleStart: function () {
        this.timer = setInterval(() => {
            //ticks counter +1 every second
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    handleStatusChange: function (newTimerStatus) {
        //sets the new state to value passed to newTimerStatus 
        this.setState({timerStatus: newTimerStatus});
    },
    
    render: function () { 
        var {count, timerStatus} = this.state;
        
        return (
            <div>                        
                <h1 className="page-title">TIMER</h1>            
                    <Clock totalSeconds={count}/>
                    <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>            
            </div>
        )
    }
});


module.exports = Timer; 

