import React from "react";

class HelloWorld extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

React.render(
    <HelloWorld></HelloWorld>,
    document.body
);

