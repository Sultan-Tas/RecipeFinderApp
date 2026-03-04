function CurrentDate() {
    const formattedDate = new Date().toLocaleDateString()
    return (
        <>
            <p>Current Date: {formattedDate}</p>
        </>
    );
}

export default CurrentDate;