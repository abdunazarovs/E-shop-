
import "./style.scss";
import Intro from "../Intro";
import Offers from "../Offers";

import OrderForm from "../OrderForm";

import RecommendItems from "../RecommendItems";
import Subscribe from "../Subscribe";

const index = () => {
    return (
        <main>
            <Intro/>
            <Offers/>
            <OrderForm/>
            <RecommendItems/>
            <Subscribe/>
        </main>
    );
};

export default index;