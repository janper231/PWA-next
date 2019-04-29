import { Component } from "react";
import Table from "../components/Table"
class Mia08 extends Component {
    state = {
        url:"/prueba/All/",
        option: "GET",
        title:"Mia08",
    }
    render() {
        return (
            <Table url={this.state.url} option={this.state.option} title={this.state.title}/>
        )
    }
}
export default Mia08