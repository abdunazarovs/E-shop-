
import "./style.scss";


import SingleCard from "../UI/Cards/SingleCard";
import { useEffect, useState } from "react";
import productAPI from "../../service/products";

const index = () => {

    const [product, setProduct] = useState([]);


    function getProducts() {
        productAPI
          .getProduct()
          .then((response) => {
            if (response.status === 200) {
              setProduct(response.data.splice(5));
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
    }

    useEffect(() => {
        getProducts();
    }, [])



return (
    <section className="py-5">
        <div className="container">
            <div>
                <h2 className="font-semibold mb-5 text-[24px] tracking-[-0.2px]">Recommended items</h2>
                <div className="grid grid-cols-5 gap-5">
                    {
                        product.map((item) => {
                            return <SingleCard key={item.id} case={item}/>
                        })
                    }
                    
                </div>
            </div>
        </div>
    </section>
);
};

export default index;