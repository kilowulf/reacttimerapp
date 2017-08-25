

var React = require('react');
var Nav = require('Nav');







var Main = (props) => {
    return (
            <div> 
            <Nav/>               
                <div className="row">                
                    <div className="column small-centered medium-6 large-4">
                    {props.children}
                    </div>                        
                </div>
                    <footer className="">CodeIQ <span>&#169;</span> 2017</footer>
            </div>                
        );
}

module.exports = Main;