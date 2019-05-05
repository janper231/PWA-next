//Assets
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Menu = [
    { title: "Dasboard", component: "index", icon: InboxIcon },
    {
        title: "Basicas", dropdown: "dropdow1", icon: InboxIcon, nodes: [
            { title: "01", component: "mia01", icon: InboxIcon },
            { title: "08", component: "mia08", icon: InboxIcon },
        ]
    },
];
export default Menu