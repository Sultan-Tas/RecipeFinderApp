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
                        <li className="py-1"><span className="fw-bold">Mon:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Tue:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Wed:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Thu:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Fri:</span> Weekend</li>
                        <li className="py-1"><span className="fw-bold">Sat:</span> 9:60-9:63</li>
                        <li className="py-1"><span className="fw-bold">Sun:</span> Weekend</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contacts