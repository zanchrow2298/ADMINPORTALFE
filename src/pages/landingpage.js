
import { useNavigate } from 'react-router-dom'

export default function Landingpage() {

    const navigate = useNavigate();

    const clickme = () => {
        navigate('/sidenav')
    }

    return (
        <div style={{ textAlign: 'center', padding: "50vh 0" }}>
            <p onClick={clickme}>Welcome!</p>

        </div >

    )
}