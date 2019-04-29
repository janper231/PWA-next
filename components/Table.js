import { Component } from "react";
import axios from 'axios'
import MUIDataTable from "mui-datatables";

class Table extends Component {
    state = {
        columns: [],
        data: [],
        title: "Table ",
        options: {
            page: 0,
            count: 100,
            rowsPerPage:10,
            filterType: "dropdown",
            responsive: "scroll",
            onTableChange: (action, tableState) => {
                console.log(action, tableState)
                switch (action) {
                    case "changePage":
                        this.state.options.page = tableState.page
                        this.response()
                        break;
                    case "changeRowsPerPage":
                        this.state.options.page = tableState.page
                        this.state.options.rowsPerPage = tableState.rowsPerPage
                        this.response()
                        break;
                }
            },
        },
        isLoading: false,
    }
    componentDidMount() {
        this.response(this.state.options.page)
    }
    response = async () => {
        let Api = "";
        const { option, url, title } = this.props;
        const { page, rowsPerPage} = this.state.options
        console.log(this.state)
        if (option == "GET") {
            Api = await axios.get(url + page+"/"+rowsPerPage)
        }
        let { data } = await Api.data
        data.items.map(items => {
            if (this.state.columns.length < Object.entries(items).length) {
                Object.entries(items).map(col => {
                    this.setState({ columns: [...this.state.columns, col[0]] })
                })
            }
            let aux = [];
            this.state.columns.map(rows => {
                aux.push(items[rows]);
            })
            this.setState({ data: [...this.state.data, aux] })
        });
        this.setState({ title: title })
    }
    render() {
        return (
            <MUIDataTable
                title={this.state.title}
                data={this.state.data}
                columns={this.state.columns}
                options={this.state.options}
            />
        )
    }
}
export default Table