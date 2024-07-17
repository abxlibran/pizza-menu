let Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour > openHour && hour < closeHour;
    // We can also use multiple returns for conditional rendering
    // This will simply ignore the other return completly, that's normally not a good thing
    if (!isOpen){
        return(
            <p>We're not open yet</p>
        )
    }
    return (
        <footer className = "footer">
            {
                // Conditional rendering
                isOpen ? <div className = "order">
                    <p>We're Open</p>
                    <button className = "btn">Order</button>
                </div> 
            : <span>We're not open yet</span> } 
        </footer>
    )
}

export default Footer;