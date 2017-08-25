//third party libraries
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

//testable components
var CountdownForm = require('CountdownForm');
//testing for existance of form
describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    //it statement to test with spy
    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        //uses jquery to grab a DOM node
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        //provide a value for test
        countdownForm.refs.seconds.value = '109';
        //simulate a submit with testutils
        TestUtils.Simulate.submit($el.find('form')[0]);

        //spy test 
        expect(spy).toHaveBeenCalledWith(109);

    });
    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        //uses jquery to grab a DOM node
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        //provide a value for test
        countdownForm.refs.seconds.value = '109b';
        //simulate a submit with testutils
        TestUtils.Simulate.submit($el.find('form')[0]);

        //spy test 
        expect(spy).toNotHaveBeenCalled();
    });
});
