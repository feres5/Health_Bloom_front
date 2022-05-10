import "../../../../assets/css/plugins/animate.min.css";
import "../../../../assets/css/main.scoped.css";
import {useRef, useState} from "react";
const CategoriesFilter = props => {

    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);
    const fifth = useRef(null);


    const firstHandler = (e) => {


            props.onClick(() => {
                return props.items.filter((product) => {
                    return product.category.includes(first.current.innerText);
                });
            })

    }
    const secondHandler = (e) => {
        props.onClick(() => {
            return props.items.filter((product) => {
                return product.category.includes(second.current.innerText);
            });
        })
    }
    const thirdHandler = (e) => {
        props.onClick(() => {
            return props.items.filter((product) => {
                return product.category.includes(third.current.innerText);
            });
        })
    }
    const fourthHandler = (e) => {
        props.onClick(() => {
            return props.items.filter((product) => {
                return product.category.includes(fourth.current.innerText);
            });
        })
    }
    const fifthHandler = (e) => {
        props.onClick(() => {
            return props.items.filter((product) => {
                return product.category.includes(fifth.current.innerText);
            });
        })
    }

    return (
        <div className="sidebar-widget widget-category-2 mb-30">
            <h5 className="section-title style-1 mb-30">Category</h5>
            <ul>
                <li>
                    <a onClick={event => event.preventDefault()} href="shop-grid-right.html" > <img
                        src="assets/imgs/theme/icons/category-1.svg"
                        alt=""/><span value="test" ref={first} onClick={firstHandler}>Pharmacy</span></a><span
                    className="count">30</span>
                </li>
                <li>
                    <a onClick={event => event.preventDefault()} href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-2.svg"
                        alt=""/><span ref={second} onClick={secondHandler}>Health & Nutrition</span></a><span
                    className="count">35</span>
                </li>
                <li>
                    <a onClick={event => event.preventDefault()} href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-3.svg"
                        alt=""/><span ref={third} onClick={thirdHandler}>Home Essentials</span></a><span
                    className="count">42</span>
                </li>
                <li>
                    <a onClick={event => event.preventDefault()} href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-4.svg"
                        alt=""/><span ref={fourth} onClick={fourthHandler}>Health Condition</span></a><span
                    className="count">68</span>
                </li>
                <li>
                    <a onClick={event => event.preventDefault()} href="shop-grid-right.html"> <img
                        src="assets/imgs/theme/icons/category-5.svg"
                        alt=""/><span ref={fifth} onClick={fifthHandler}>Ayurveda</span></a><span
                    className="count">87</span>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesFilter;