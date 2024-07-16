let Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour > openHour && hour < closeHour;
    return (
        <footer className = "footer">
            {
                // Conditional rendering
                isOpen && <div className = "order">
                    <span>We're Open</span>
                    <button className = "btn">Order</button>
                </div> 
            }
        </footer>
    )
}

export default Footer;