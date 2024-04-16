import React, { Component } from "react";
import Form from "./form";

class Main extends Component {
    constructor(){
        super()
        this.state = {acceso: "Esperando acceso a", contenido: "Contenido bloquedo"}
    }

    componentDidMount() {
        console.log("El componente se ha montado")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        if(prevState.contenido === this.state.contenido) {
            this.setState({ contenido: "Tienes acceso a todo el contenido" })
        }
    }

    render(){
        
        return (
            <main>
                <Form name="Serapio" age="30"/>
                <h3>{this.state.acceso} Pelis on line</h3>
                <button onClick={() => this.setState({acceso: "Bienvenido a "})}>Acceder</button>
                <em> {this.state.contenido}</em>
            </main>
        )
    }
}

export default Main