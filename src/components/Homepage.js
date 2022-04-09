const Homepage = () => {
    return (
        <div style={{ 
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                background: "#93cee3" }}>
            <h1
                style={{
                    display: "flex",
                    color: "white",
                    marginTop: "50px",
                    fontSize: "3rem",
                }}
            >
                A One Stop Shop
            </h1>
            <img
                style={{
                    width: "600px",
                    marginTop: "45px",
                    border: "2px solid black",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sihanoukville_-_Hawaii_beach%2C_beach_house.jpg/1599px-Sihanoukville_-_Hawaii_beach%2C_beach_house.jpg?20190521203607"
                alt="beach shack"
            />
        </div>
    );
};

export default Homepage;