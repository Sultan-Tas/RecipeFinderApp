import {Link, Outlet} from "react-router-dom";

function Contacts(){
    return(
        <>
            <div className="container">
                <h1 className="py-3" style={{fontFamily: "Titan One, sans-serif", fontWeight: 100}}>Contact Info</h1>
                <div className="text-start px-5 fs-4">
                    <p><span className="fw-bold">Phone:</span> +7 123 45 67</p>
                    <p><span className="fw-bold">E-mail:</span> sultan.tasmagambetov@narxoz.kz</p>
                    <p><span className="fw-bold">Phone:</span> Working hours:</p>
                    <ul className="ps-5" type="none">
                        <li className="py-1"><span className="fw-bold">Mon:</span> 9:00-16:00</li>
                        <li className="py-1"><span className="fw-bold">Tue:</span> 9:00-16:00</li>
                        <li className="py-1"><span className="fw-bold">Wed:</span> 9:00-16:00</li>
                        <li className="py-1"><span className="fw-bold">Thu:</span> 9:00-16:00</li>
                        <li className="py-1"><span className="fw-bold">Fri:</span> 9:00-16:00</li>
                        <li className="py-1"><span className="fw-bold">Sat:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Sun:</span> Weekend</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contacts