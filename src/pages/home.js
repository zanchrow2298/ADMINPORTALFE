import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap';
import Sidenav from './sidenav'
import { Home } from "@mui/icons-material";



export default function Hometab() {

    const navigate = useNavigate();

    return (
        <Sidenav>
           <Home style={{fontsize:"200"}}/>
        </Sidenav>

    )
}