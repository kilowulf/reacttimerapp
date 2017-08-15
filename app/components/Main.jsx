

var React = require('react');
var Nav = require('Nav');







var Main = (props) => {
    return (
            <div>                
                <div>
                <Nav/>
                    <p>Main.jsx Rendered</p>
                        {props.children}
                </div>
                    <footer className="">CodeIQ <span>&#169;</span> 2017</footer>
            </div>                
        );
}

module.exports = Main;