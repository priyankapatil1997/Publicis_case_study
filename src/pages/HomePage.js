import React from 'react';
import Layout from '../components/Layout';
import { productData } from '../data/productData';
import SideBar from './SideBar';

function HomePage() {
    return (
        <Layout>
            <SideBar />
           
                <div className="cards">
                {productData.map((product, i) => {
                return (
                    <div className="card">
                        <h3 className="product-name">{product.name}</h3>
                        <div className='container'>
                            <img src={product.imageURL} />
                        </div>
                        <div className="details">
                            <p className="product-details">{product.description}
                            </p>
                        </div>
                        <div className="button-container">
                            <h4>`MRP RS ${product.price}`</h4>
                            <button className="card-button">Buy Now</button>
                        </div>
                    </div>
                           )
                        })}
                </div>

         
        </Layout>

    );
}

export default HomePage;
