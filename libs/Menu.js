//Assets
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Menu = [
    {title:"Dasboard",component:"index",icon:InboxIcon},
    {title:"Basicas",dropdown:"dropdow1",icon:InboxIcon,nodes:[
        {title:"01",component:"mia01",icon:InboxIcon},
        {title:"08",component:"mia08",icon:InboxIcon},
        {title:"16",component:"mia16",icon:InboxIcon},
        {title:"29",component:"mia29",icon:InboxIcon},
        {title:"14",component:"mia14",icon:InboxIcon},
        {title:"06",component:"mia06",icon:InboxIcon},
    ]},
    {title:"Configuracion",dropdown:"dropdow1",icon:InboxIcon,nodes:[
        {title:"09",component:"mia09",icon:InboxIcon},
        {title:"10",component:"mia10",icon:InboxIcon},
        {title:"20",component:"mia20",icon:InboxIcon},
        {title:"19",component:"mia19",icon:InboxIcon},
        {title:"12",component:"mia12",icon:InboxIcon},
    ]}
];
export default Menu