import React from 'react'
import PageTitle from './PageTitle'

function Header() {
    return (
         
        <header>
            <div className="container-fluid">
               <div className="row">
                    <div className="col-md-6 product">
                         <div className="product_img ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrHLnthCCCmdq8VS4wTLj1gGoGTYDAn3SMH9jdCjnkG2n61ZpU" className="" />
                         </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product_content">
                            <div className="product_details">

                                <PageTitle title="ganesh pure argan oil" subTitle="Skin no.1 / 06" description="use to form up  and boost the radiance of the face. 100% pure and complete from organic farming" />

                                

                                <div className="mill_liters">
                                    <ul className="d-flex">
                                        <li>                                    
                                            <a href="" className="btn">50ml</a>
                                        </li>
                                        <li>
                                            <a href="" className="ml-4 btn">50ml</a>
                                        </li>
                                        <li>
                                            <a href="" className="ml-4 btn">50ml</a>
                                        </li>
                                    </ul>
                                </div>

                                <div  className="vegan_free d-flex">
                                    <p>.Vegan <span> .Cruelty free</span></p>

                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="">-</button>
                                        <button type="button" class="">1</button>
                                        <button type="button" class="">+</button>
                                    </div>
                                </div>
                            
                                <div className="add_bill">
                                    <p><a href="">Add To Card</a><a href="">$89 USD</a></p>
                                </div>

                                <div className="deliver">
                                    <p className="mb-0">Order Before 17:00 to receive monday 23rd of november</p>
                                    <p className="mt-0">delivering to all destination in the European Unicon</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </header>
             
         
    )
}

export default Header;