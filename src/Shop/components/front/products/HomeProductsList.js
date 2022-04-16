import HomeProductItem from "./HomeProductItem";
import React from "react";

const HomeProductsList = () => {
    return (
        <>
            <div
                className="section-title style-2 wow animate__animated animate__fadeIn">
                <h3>Popular Products</h3>
                <ul className="nav nav-tabs links" id="myTab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active"
                                id="nav-tab-one"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-one"
                                type="button"
                                role="tab" aria-controls="tab-one"
                                aria-selected="true">All
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-two"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-two"
                                type="button"
                                role="tab" aria-controls="tab-two"
                                aria-selected="false">Milks &
                            Dairies
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-three"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-three"
                                type="button" role="tab"
                                aria-controls="tab-three"
                                aria-selected="false">Coffes & Teas
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-four"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-four"
                                type="button"
                                role="tab" aria-controls="tab-four"
                                aria-selected="false">Pet Foods
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-five"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-five"
                                type="button"
                                role="tab" aria-controls="tab-five"
                                aria-selected="false">Meats
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-six"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-six"
                                type="button"
                                role="tab" aria-controls="tab-six"
                                aria-selected="false">Vegetables
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link"
                                id="nav-tab-seven"
                                data-bs-toggle="tab"
                                data-bs-target="#tab-seven"
                                type="button" role="tab"
                                aria-controls="tab-seven"
                                aria-selected="false">Fruits
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active"
                     id="tab-one"
                     role="tabpanel" aria-labelledby="tab-one">
                    {/* products tab 2*/}
                    {/*<div className="tab-pane fade" id="tab-two"*/}
                    {/*     role="tabpanel"*/}
                    {/*     aria-labelledby="tab-two">*/}
                    <div className="row product-grid-4">
                        <HomeProductItem/>

                    </div>

                </div>
            </div>
        </>
    );

};

export default HomeProductsList;