import "../../assets/css/plugins/animate.min.css";
import "../../assets/css/main.scoped.css";
import RelatedProducts from "../../components/front/products/RelatedProducts";
import ReviewsSection from "../../components/front/reviews/ReviewsSection";
import {useHistory, useParams} from "react-router-dom";
import {useHttpClient} from "../../../shared/hooks/http-hook";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {toast} from "react-toastify";
import {useCart} from "react-use-cart";


const ProductDetails = () => {

    const [loadedProduct, setLoadedProduct] = useState();
    const [carItemCount, setCartItemCount] = useState(1);
    const [loadedReview, setLoadedReview] = useState(false);
    const productId = useParams().productId;
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        addItem,
        updateItemQuantity,
        removeItem,
        getItem,
        cartTotal,
        emptyCart
    } = useCart();

    const token = localStorage.getItem("user_info");
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));
    const history = useHistory();


    const wishlistHandler = (e) => {
        e.preventDefault()
        if (token) {
            const decodedTOKEN = jwt_decode(token, {payload: true});
            const index = wishlist.findIndex(item => item.userId === decodedTOKEN.user_id);
            const index2 = wishlist[index].products.findIndex(product => product.id === productId);
            if (index2 === -1) {

                wishlist[index].products.push(loadedProduct);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));

            }
            history.push('/shop/wishlist');
            toast.success('Item Added to Wishlist!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    const [rating, setrating] = useState({
        star1: 0,
        star2: 0,
        star3: 0,
        star4: 0,
        star5: 0,
        total: 0,
        average: 0
    })
    let star1 = 0, star2 = 0, star3 = 0, star4 = 0, star5 = 0;
    let average, total = 0;
    useEffect(() => {
        console.log("productDetails")
        const fetchProduct = async () => {
            try {

                const responseData = await sendRequest(
                    `http://localhost:3002/api/products/${productId}`
                );

                setLoadedProduct(responseData.product);
                if (responseData.product.reviews.length > 0) {
                    responseData.product.reviews.map(review => {
                        total++;
                        switch (parseInt(review.rating)) {
                            case 1:
                                star1++;
                                break;
                            case 2:
                                star2++;
                                break;
                            case 3:
                                star3++
                                break;
                            case 4:
                                star4++;
                                break;
                            case 5:
                                star5++;
                                break;

                            default:
                            // code block
                        }
                    });


                    average = (5 * star5 + 4 * star4 + 3 * star3 + 2 * star2 + star1) / total;

                    setrating({
                        star1: star1,
                        star2: star2,
                        star3: star3,
                        star4: star4,
                        star5: star5,
                        total: total,
                        average: average.toFixed(1)
                    });
                }

            } catch (e) {
                console.log(e);
            }
        };
        fetchProduct();
    }, [sendRequest, productId, loadedReview]);

    return (
        <div className="container mb-30">
            {!isLoading && loadedProduct &&
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="product-detail accordion-detail">
                            <div className="row mb-50 mt-30">
                                <div
                                    className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                    <div className="detail-gallery">
                                    <span className="zoom-icon"><i
                                        className="fi-rs-search"></i></span>

                                        <div
                                            className="product-image-slider">
                                            <figure
                                                className="border-radius-10">
                                                <img
                                                    src={`http://localhost:3002/${loadedProduct.image}`}
                                                    alt="product image"/>
                                            </figure>
                                        </div>


                                    </div>

                                </div>
                                <div
                                    className="col-md-6 col-sm-12 col-xs-12">
                                    <div
                                        className="detail-info pr-30 pl-30">
                                        <span
                                            className="stock-status out-stock"> Sale Off {loadedReview} </span>
                                        <h2 className="title-detail">{loadedProduct.name}</h2>
                                        <div
                                            className="product-detail-rating">
                                            <div
                                                className="product-rate-cover text-end">
                                                <div
                                                    className="product-rate d-inline-block">
                                                    <div
                                                        className="product-rating"
                                                        style={{width: `${rating.average * 20}%`}}></div>
                                                </div>
                                                <span
                                                    className="font-small ml-5 text-muted"> ({loadedProduct.reviews.length} reviews)</span>
                                            </div>
                                        </div>
                                        <div
                                            className="clearfix product-price-cover">
                                            <div
                                                className="product-price primary-color float-left">
                                            <span
                                                className="current-price text-brand">${loadedProduct.price}</span>
                                                <span>
                                                    <span
                                                        className="save-price font-md color3 ml-15"></span>
                                                    <span
                                                        className="old-price font-md ml-15"></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="short-desc mb-30">
                                            <p className="font-lg">Lorem
                                                ipsum
                                                dolor, sit amet consectetur
                                                adipisicing elit. Aliquam
                                                rem
                                                officia, corrupti reiciendis
                                                minima
                                                nisi modi, quasi, odio minus
                                                dolore
                                                impedit fuga eum
                                                eligendi.</p>
                                        </div>
                                        <div
                                            className="detail-extralink mb-50">
                                            <div
                                                className="detail-qty border radius">
                                                <a href="#"
                                                   onClick={(e) => {
                                                       e.preventDefault()
                                                       if(carItemCount>0)
                                                       setCartItemCount(prevState => prevState - 1);
                                                   }}
                                                   className="qty-down"><i
                                                    className="fi-rs-angle-small-down"></i></a>
                                                <span
                                                    className="qty-val">{carItemCount}</span>
                                                <a href="#"
                                                   onClick={(e) => {
                                                       e.preventDefault()
                                                       if(carItemCount < loadedProduct.quantity)
                                                       setCartItemCount(prevState => prevState + 1);
                                                   }}
                                                   className="qty-up"><i
                                                    className="fi-rs-angle-small-up"></i></a>
                                            </div>
                                            <div
                                                className="product-extra-link2">
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    if (carItemCount <= loadedProduct.quantity) {
                                                        addItem(loadedProduct, carItemCount);
                                                        toast.success('Item Added to Cart!', {
                                                            position: "bottom-right",
                                                            autoClose: 2000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    } else {
                                                        toast.error('insufficient Stock :(', {
                                                            position: "bottom-right",
                                                            autoClose: 2000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            draggable: true,
                                                            progress: undefined,
                                                        });
                                                    }

                                                }}
                                                        className="button button-add-to-cart">
                                                    <i className="fi-rs-shopping-cart"></i>Add
                                                    to cart
                                                </button>
                                                <a aria-label="Add To Wishlist"
                                                   className="action-btn hover-up"
                                                   onClick={wishlistHandler}><i
                                                    className="fi-rs-heart"></i></a>
                                            </div>
                                        </div>
                                        <div className="font-xs">
                                            <ul className="mr-50 float-start">
                                                <li className="mb-5">Type: <span
                                                    className="text-brand">Organic</span>
                                                </li>
                                                <li className="mb-5">MFG:<span
                                                    className="text-brand"> Jun 4.2021</span>
                                                </li>
                                                <li>LIFE: <span
                                                    className="text-brand">70 days</span>
                                                </li>
                                            </ul>
                                            <ul className="float-start">
                                                <li className="mb-5">SKU: <a
                                                    href="#">FWM15VKT</a>
                                                </li>
                                                <li className="mb-5">Tags: <a
                                                    href="#"
                                                    rel="tag">Snack</a>, <a
                                                    href="#"
                                                    rel="tag">Organic</a>, <a
                                                    href="#"
                                                    rel="tag">Brown</a>
                                                </li>
                                                <li>Stock:<span
                                                    className="in-stock text-brand ml-5">8 Items In Stock</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="product-info">
                                <div className="tab-style3">
                                    <ul className="nav nav-tabs text-uppercase">
                                        <li className="nav-item">
                                            <a className="nav-link"
                                               id="Description-tab"
                                               data-bs-toggle="tab"
                                               href="#Description">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"
                                               id="Additional-info-tab"
                                               data-bs-toggle="tab"
                                               href="#Additional-info">Additional
                                                info</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"
                                               id="Vendor-info-tab"
                                               data-bs-toggle="tab"
                                               href="#Vendor-info">Vendor</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active"
                                               id="Reviews-tab"
                                               data-bs-toggle="tab"
                                               href="#Reviews">Reviews
                                                ({loadedProduct.reviews.length})</a>
                                        </li>
                                    </ul>
                                    <div
                                        className="tab-content shop_info_tab entry-main-content">
                                        <div
                                            className="tab-pane fade"
                                            id="Description">
                                            <div className="">
                                                <p>Uninhibited carnally
                                                    hired
                                                    played
                                                    in whimpered dear
                                                    gorilla
                                                    koala
                                                    depending and much yikes
                                                    off
                                                    far
                                                    quetzal goodness and
                                                    from
                                                    for
                                                    grimaced goodness
                                                    unaccountably
                                                    and meadowlark near
                                                    unblushingly
                                                    crucial scallop tightly
                                                    neurotic
                                                    hungrily some and dear
                                                    furiously
                                                    this apart.</p>
                                                <p>Spluttered narrowly yikes
                                                    left
                                                    moth in yikes bowed this
                                                    that
                                                    grizzly much hello on
                                                    spoon-fed
                                                    that alas rethought much
                                                    decently richly and wow
                                                    against
                                                    the frequent fluidly at
                                                    formidable acceptably
                                                    flapped
                                                    besides and much circa
                                                    far
                                                    over
                                                    the bucolically hey
                                                    precarious
                                                    goldfinch mastodon
                                                    goodness
                                                    gnashed a jellyfish and
                                                    one
                                                    however because.</p>
                                                <ul className="product-more-infor mt-30">
                                                    <li>
                                                        <span>Type Of Packing</span> Bottle
                                                    </li>
                                                    <li>
                                                        <span>Color</span> Green,
                                                        Pink, Powder Blue,
                                                        Purple
                                                    </li>
                                                    <li>
                                                        <span>Quantity Per Case</span> 100ml
                                                    </li>
                                                    <li>
                                                        <span>Ethyl Alcohol</span> 70%
                                                    </li>
                                                    <li>
                                                        <span>Piece In One</span> Carton
                                                    </li>
                                                </ul>
                                                <hr className="wp-block-separator is-style-dots"/>
                                                <p>Laconic overheard dear
                                                    woodchuck
                                                    wow this outrageously
                                                    taut
                                                    beaver hey hello far
                                                    meadowlark
                                                    imitatively egregiously
                                                    hugged
                                                    that yikes minimally
                                                    unanimous
                                                    pouted flirtatiously as
                                                    beaver
                                                    beheld above forward
                                                    energetic
                                                    across this jeepers
                                                    beneficently
                                                    cockily less a the
                                                    raucously
                                                    that magic upheld far so
                                                    the
                                                    this where crud then
                                                    below
                                                    after
                                                    jeez enchanting
                                                    drunkenly
                                                    more
                                                    much wow callously
                                                    irrespective
                                                    limpet.</p>
                                                <h4 className="mt-30">Packaging
                                                    &
                                                    Delivery</h4>
                                                <hr className="wp-block-separator is-style-wide"/>
                                                <p>Less lion goodness that
                                                    euphemistically robin
                                                    expeditiously bluebird
                                                    smugly
                                                    scratched far while thus
                                                    cackled
                                                    sheepishly rigid after
                                                    due
                                                    one
                                                    assenting regarding
                                                    censorious
                                                    while occasional or this
                                                    more
                                                    crane went more as this
                                                    less
                                                    much amid overhung
                                                    anathematic
                                                    because much held one
                                                    exuberantly sheep
                                                    goodness
                                                    so
                                                    where rat wry well
                                                    concomitantly.</p>
                                                <p>Scallop or far crud plain
                                                    remarkably far by thus
                                                    far
                                                    iguana lewd precociously
                                                    and
                                                    and
                                                    less rattlesnake
                                                    contrary
                                                    caustic wow this near
                                                    alas
                                                    and
                                                    next and pled the yikes
                                                    articulate about as less
                                                    cackled
                                                    dalmatian in much less
                                                    well
                                                    jeering for the thanks
                                                    blindly
                                                    sentimental whimpered
                                                    less
                                                    across objectively
                                                    fanciful
                                                    grimaced wildly some wow
                                                    and
                                                    rose jeepers outgrew
                                                    lugubrious
                                                    luridly irrationally
                                                    attractively
                                                    dachshund.</p>
                                                <h4 className="mt-30">Suggested
                                                    Use</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Refrigeration not
                                                        necessary.
                                                    </li>
                                                    <li>Stir before
                                                        serving
                                                    </li>
                                                </ul>
                                                <h4 className="mt-30">Other
                                                    Ingredients</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Organic raw pecans,
                                                        organic
                                                        raw cashews.
                                                    </li>
                                                    <li>This butter was
                                                        produced
                                                        using a LTG (Low
                                                        Temperature
                                                        Grinding) process
                                                    </li>
                                                    <li>Made in machinery
                                                        that
                                                        processes tree nuts
                                                        but
                                                        does
                                                        not process peanuts,
                                                        gluten,
                                                        dairy or soy
                                                    </li>
                                                </ul>
                                                <h4 className="mt-30">Warnings</h4>
                                                <ul className="product-more-infor mt-30">
                                                    <li>Oil separation
                                                        occurs
                                                        naturally. May
                                                        contain
                                                        pieces of shell.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="Additional-info">
                                            <table className="font-md">
                                                <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x
                                                            37-45″H(front to
                                                            back
                                                            wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o
                                                        wheels)
                                                    </th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x
                                                            16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-w-wheels">
                                                    <th>Folded (w/ wheels)
                                                    </th>
                                                    <td>
                                                        <p>32.5″L x 24″W x
                                                            18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through
                                                    </th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>Weight (w/o
                                                        wheels)
                                                    </th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>Handle height
                                                        (ground to
                                                        handle)
                                                    </th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide
                                                            track
                                                            slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>Seat back height
                                                    </th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Head room (inside
                                                        canopy)
                                                    </th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red,
                                                            White</p>
                                                    </td>
                                                </tr>
                                                <tr className="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane fade"
                                             id="Vendor-info">
                                            <div
                                                className="vendor-logo d-flex mb-30">
                                                <img
                                                    src="assets/imgs/vendor/vendor-18.svg"
                                                    alt=""/>
                                                <div
                                                    className="vendor-name ml-15">
                                                    <h6>
                                                        <a href="vendor-details-2.html">Noodles
                                                            Co.</a>
                                                    </h6>
                                                    <div
                                                        className="product-rate-cover text-end">
                                                        <div
                                                            className="product-rate d-inline-block">
                                                            <div
                                                                className="product-rating"
                                                                style={{width: "90%"}}></div>
                                                        </div>
                                                        <span
                                                            className="font-small ml-5 text-muted"> (32 reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="contact-infor mb-50">
                                                <li><img
                                                    src="assets/imgs/theme/icons/icon-location.svg"
                                                    alt=""/><strong>Address: </strong>
                                                    <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                                                </li>
                                                <li><img
                                                    src="assets/imgs/theme/icons/icon-contact.svg"
                                                    alt=""/><strong>Contact
                                                    Seller:</strong><span>(+91) - 540-025-553</span>
                                                </li>
                                            </ul>
                                            <div className="d-flex mb-55">
                                                <div className="mr-30">
                                                    <p className="text-brand font-xs">Rating</p>
                                                    <h4 className="mb-0">92%</h4>
                                                </div>
                                                <div className="mr-30">
                                                    <p className="text-brand font-xs">Ship
                                                        on time</p>
                                                    <h4 className="mb-0">100%</h4>
                                                </div>
                                                <div>
                                                    <p className="text-brand font-xs">Chat
                                                        response</p>
                                                    <h4 className="mb-0">89%</h4>
                                                </div>
                                            </div>
                                            <p>Noodles & Company is an
                                                American
                                                fast-casual restaurant that
                                                offers
                                                international and American
                                                noodle
                                                dishes and pasta in addition
                                                to
                                                soups and salads. Noodles &
                                                Company
                                                was founded in 1995 by Aaron
                                                Kennedy
                                                and is headquartered in
                                                Broomfield,
                                                Colorado. The company went
                                                public in
                                                2013 and recorded a $457
                                                million
                                                revenue in 2017.In late
                                                2018,
                                                there
                                                were 460 Noodles & Company
                                                locations
                                                across 29 states and
                                                Washington,
                                                D.C.</p>
                                        </div>
                                        {rating &&
                                            <ReviewsSection
                                                star1={rating.star1}
                                                star2={rating.star2}
                                                star3={rating.star3}
                                                star4={rating.star4}
                                                star5={rating.star5}
                                                average={rating.average}
                                                refresh={setLoadedReview}
                                                total={rating.total}
                                                productId={productId}/>
                                        }
                                    </div>
                                </div>
                            </div>
                            <RelatedProducts/>
                        </div>
                    </div>
                </div>}
        </div>

    );
};

export default ProductDetails;