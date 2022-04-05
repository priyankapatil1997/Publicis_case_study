import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { categoryData } from '../data/categoryData';


const HomePage = () => {


    let navigate = useNavigate();
    const handleClick = (data) => {
        navigate(`/product/${data}`)
    }


    return (
        <Layout>
        <section className="home-main">
            {
                categoryData.length > 0 ? categoryData.map((e, i) => {
                    return (
                        i % 2 == 0 ? <div className="home-row" key={e.id}>
                            <div className="home-col1">
                                <div>
                                    <img src={e.imageUrl} className="image-res" />
                                </div>
                            </div>
                            <div className="home-col2">
                                <div>
                                    <h2>{e.name}</h2>
                                    <p>{e.description}</p>
                                    <button className="button" onClick={() => handleClick(e.id)}>Explore {e.key}</button>
                                </div>
                            </div>

                        </div> :
                            <div className="home-row" key={e.id}>

                                <div className="home-col2">
                                    <div>
                                        <h2>{e.name}</h2>
                                        <p>{e.description}</p>
                                        <button className="button" onClick={() => handleClick(e.id)}>Explore {e.key}</button>
                                    </div>
                                </div>
                                <div className="home-col1">
                                    <div>
                                        <img src={e.imageUrl} className="image-res" />
                                    </div>
                                </div>

                            </div>
                    )
                }) : ""
            }
        </section>
        </Layout>
    )
}

export default HomePage;

