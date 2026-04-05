function AboutTeam(){
    return(
        <>
            <div className="d-flex flex-row p-5">
                <img className="me-5 rounded"
                     src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/250px-Walter_White_S5B.png"
                     alt=""
                    style={{width:"auto", height: "300px", objectFit: 'cover'}}/>
                <div className="text-start">
                    <p className="fs-3 fw-bold text-decoration-underline">Wälter Weiss</p>
                    <p className="fs-4 ps-5">Our head chef who personally test every single recipe and ensures they are
                        safe to for consumption and up to standards. He is a highly-skilled professional who can be
                        trusted in the matters of quality. Some even mention that he "always delivers"</p>
                </div>
            </div>
            <div className="d-flex flex-row p-5">
                <img className="me-5 rounded"
                     src="https://drive.google.com/thumbnail?id=1GDPNrQFI8QfLift9PYvRN0PKxOLbx1BJ"
                     alt=""
                     style={{width:"auto", height: "300px", objectFit: 'cover'}}/>
                <div className="text-start">
                    <p className="fs-3 fw-bold text-decoration-underline">Tasmagambetov Sultan</p>
                    <p className="fs-4 ps-5">Website's main engineer. His skills are moderate for
                        the student's level, but he dreams of developing this website into an application
                        that he will be proud of. To be frank, he is the sole creator, there is no "Wälter
                        Weiss" and no recipe is being checked for the quality, but I doubt anyone will even
                        reach this section</p>
                </div>
            </div>
        </>
    )
}

export default AboutTeam;