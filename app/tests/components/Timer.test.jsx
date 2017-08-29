var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });
    //test for start
    it('should start timer on started status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        //simulate timer status change to start
        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });
    //test for pause
    it('should pause timer on paused status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        //begin state at 10 seconds
        timer.setState({count: 10});
        //simulate timer status change to start
        timer.handleStatusChange('started');
        //then to pause
        timer.handleStatusChange('paused');
        

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
    });
    //test for stop
    it('should pause timer on paused status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        //begin state at 10 seconds
        timer.setState({count: 10});
        //simulate timer status change to start
        timer.handleStatusChange('started');
        //then to pause
        timer.handleStatusChange('stopped');
        

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1001);
    });
});