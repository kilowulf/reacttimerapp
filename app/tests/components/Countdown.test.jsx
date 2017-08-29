//third party libraries
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

//testable components
var Countdown = require('Countdown');

//test loading of  countdown component
describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001)
        });
    });
    //test to ensure counter doesnt countdown to negative
    describe('handleSetCountdown', () => {
        it('should never set count less than zero', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001)
        });

        it('should pause countdown on paused status', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');
            //setTimeout function makes process asynchronous, therefore use done.
            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
                done();
            }, 1000);
        });

        it('should stop countdown on stopped status', () => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');
            //setTimeout function makes process asynchronous, therefore use done.
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});