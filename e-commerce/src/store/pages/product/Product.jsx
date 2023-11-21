import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { trialProduct } from '../../action/users';
import "./product.css";
const Product = () => {

    const [apiData, setapiData] = useState()
    useEffect(()=>{
        getProduct();
    },[])
    const dispatch=useDispatch()
    const getProduct = async()=>{
        const getResponce=await dispatch(trialProduct())
        console.log("getResponce",getResponce);
        const allProduct=(getResponce.payload.data).map((val,key)=>{
            // return <div key={key}>
            //     <p>{val.key}</p>
            //     <div><img src={val.image} alt="" /></div>
            // </div>
          return <div key={key} class="col-md-6 col-sm-6  col-lg-3 border border-dark rounded ">
            <div class="product-single-card">
                <div class="product-top-area">
                    <div class="product-discount">
                      10%
                    </div>

                    <div class="product-img p-0">
                        <div class="first-view">
                            <img class="img-fluid" src={val.image} alt="no" />
                        </div>
                        <div class="hover-view">
                            <img src={val.image} alt="no" />
                        </div>
                    </div>
                    <div class="sideicons">
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="sideicons-btn">
                            <i class="fa-solid fa-shuffle"></i>
                        </button>
                    </div>
                </div>
                <div key={key} class="product-info">
                    <h6 class="product-category"><a href="#">{val.title}</a></h6>
                    <h6 class="product-title text-truncate"><a href="#">{val.description}</a></h6>
                    <div class="d-flex align-items-center">
                        <div class="review-star me-1">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <span class="review-count">{val.rating.count}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center py-2">
                        <div >
                        original price:
                          <span className='text-danger'>150000</span>
                        </div>
                        <div >
                           offer price : <span className='text-success'>{val.price}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        })
        setapiData(allProduct)
        console.log(allProduct);
        }
        // console.log(apiData);
    return (
        
        <div>
            <section>
                <div class="">
                    <div class="row g-4 my-5 mx-5">
                        {/* <div class="col-md-6 col-sm-6  col-lg-3 border border-dark rounded ">
                            <div class="product-single-card">
                                <div class="product-top-area">
                                    <div class="product-discount">
                                      10%
                                    </div>

                                    <div class="product-img p-0">
                                        <div class="first-view">
                                            <img class="img-fluid" src="https://rukminim2.flixcart.com/image/1080/1080/xif0q/shirt/n/b/j/xl-wmsh004542-wrangler-original-imagn9h36ssh9hxg.jpeg?q=70" alt="no" />
                                        </div>
                                        <div class="hover-view">
                                            <img src="https://rukminim2.flixcart.com/image/1080/1080/xif0q/shirt/n/b/j/xl-wmsh004542-wrangler-original-imagn9h36ssh9hxg.jpeg?q=70" alt="no" />
                                        </div>
                                    </div>
                                    <div class="sideicons">
                                        <button class="sideicons-btn">
                                            <i class="fa-solid fa-cart-plus"></i>
                                        </button>
                                        <button class="sideicons-btn">
                                            <i class="fa-solid fa-eye"></i>
                                        </button>
                                        <button class="sideicons-btn">
                                            <i class="fa-solid fa-heart"></i>
                                        </button>
                                        <button class="sideicons-btn">
                                            <i class="fa-solid fa-shuffle"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-info">
                                    <h6 class="product-category"><a href="#">Gaming</a></h6>
                                    <h6 class="product-title text-truncate"><a href="#">VR Glass For Ultimate Gaming</a></h6>
                                    <div class="d-flex align-items-center">
                                        <div class="review-star me-1">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star-half-stroke"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </div>
                                        <span class="review-count">(13)</span>
                                    </div>
                                    <div class="d-flex flex-wrap align-items-center py-2">
                                        <div >
                                        original price:
                                          <span className='text-danger'>150000</span>
                                        </div>
                                        <div >
                                           offer price : <span className='text-success'> 10,0000</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {apiData}
                    </div>
                </div>
            </section>
        </div>
    );
    }

export default Product;