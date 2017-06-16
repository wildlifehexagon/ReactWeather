var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this for The Complete React Web App Developer Course. Will be customized soon.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the JavaScript framework used
        </li>
        <li>
          <a href="http://www.openweathermap.org">OpenWeatherMap</a> - this is the weather API
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
