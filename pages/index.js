import { Component } from 'react'
import Button from '@material-ui/core/Button';
import Msg from '../components/Notistack'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadmsg: false,
            msg: {
                msg: "",
                type: "",
            }
        }
    }
    handleClick = () => {
        this.state.msg.msg="prueba"
        this.state.msg.type="info"
        this.setState({ loadmsg: !this.state.msg.loadmsg })
    };
    render() {
        const { msg, type } = this.state.msg
        return (
            < div >
                <Msg msg={msg} type={type}/>
                <Button onClick={this.handleClick}>Show snackbar</Button>
            </div >
        )
    }
}
export default Index
