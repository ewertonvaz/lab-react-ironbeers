import { Link } from "react-router-dom";

function NavBar() {
    return ( 
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#65C3FE",
            padding: "8px"
        }}
    >
    <Link to="/">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" width="48px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    </Link>
    </div> );
}

export default NavBar;