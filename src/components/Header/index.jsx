
import "./style.scss";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const index = () => {
    return (
        <header>
            <div className="container">
                <HeaderTop/>
                <Navbar/>
            </div>
        </header>
    );
};

export default index;