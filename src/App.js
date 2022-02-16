import './App.css';
import { NavBar } from './Views/NavBar';
import React from "react";
import './App.css';
class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed%22")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1> {
                items.map((item) => (
                <ol key = { item.id } >
                    Titulo: { item.title },
                    Autor: { item.author },
                    Contenido: { item.content }
                    </ol>
                ))
            }
        </div>
    );
}
}

export default App;
