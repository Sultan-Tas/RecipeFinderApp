function MainContent() {
    const currentDate = new Date().toLocaleDateString();
    return(
        <main>
            <p className="fs-5">Welcome to your personal</p>
            <h1>Recipe Finder!</h1>
            <p>As the project will develop, there will be new features <br/>that will make your life easier!</p>
            <p className="fs-4 m-5">Today is {currentDate} <br/> What is your cooking plan?</p>
        </main>
    );
}

export default MainContent;