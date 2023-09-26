import Cartview from './Cartview';
import './Productpge.css'
import img1 from './images/8.jpg';
import {useState} from 'react';
import {productData}  from './data';

import { Link, useNavigate, useParams } from 'react-router-dom';
const { Container } = require("react-bootstrap");

function Productpage() {
    const navigate= useNavigate()

    const [data, setdata] = Array.isArray(productData) ? productData : [];
    console.log(data,"yes im dta");
    const params = useParams();
    console.log(data)

    const mm1 = data.filter((ds)=> ds.id == params.id)

    return (

        <div className="container-fluid bg-white p-0">
            {mm1.map((data)=>{
                return(
                    <>
                    <div className="container-fluid product-2">
                <h1 style={{ color: 'black' }}> Bloggers Mela Delhi</h1>

            </div>
                    <h1 className='text-black'>{data.name}</h1>
                    </>
                )
            })}
            

            <div className='container-fluid product-3 p-0'>
                <div className='product-4 mt-5'>
                    <div className='blog-image'>
                        <img src={img1} className='blog-image-2 '></img>
                    </div>


                </div>
                <div className='container-fluid product5 mt-5' >
                    <div className='p-3 heading11'>
                        <p className='fs-1'style={{color:"#000000",}}>Private Blogger Mela</p>
                    </div>
                    <div className='p-3'>
                    <p className=''style={{textAlign: "justify", color: "black", fontSize: "13px" }}>
                    This book is a collection of poems and quotes that spreads hope. Everyone needs hope in life for it is the only way to achieve peace in today’s world. Life holds a lot of challenges that we must face. We encounter multiple heartbreaks but it can never be enough to break us.
    A Voyage to Peace has won<br className='mx-5'></br> “The Best Poetry Book Award 2020” by author Pages Magazine
    and is also nominated by several other platforms. <br className='mx-5'></br>This book has been a part of a few fests including “World Book Fair, New Delhi”. <br className='mx-5'></br>This book has been a part of a few fests including “World Book Fair, New Delhi”This book is a collection of poems and quotes that spreads hope. Everyone needs hope in life for it is the only way to achieve peace in today’s world. Life holds a lot of challenges that we must face. We encounter multiple heartbreaks but it can never be enough to break us.
    A Voyage to Peace has won<br className='mx-5'></br>                    </p>

                    </div>
                    <div>
<p className="px-3" style={{textAlign: "justify", color: "black", fontSize: "13px" }}>
    Acrivities Perform There<br></br><br></br>
    1.The world is a book and those who do not travel read only one page.<br></br>
    2.The world is a book and those who do not travel read only one page.<br></br>
    3.The world is a book and those who do not travel read only one page.<br></br>
    4.The world is a book and those who do not travel read only one page.<br></br> </p>

                </div>
                <div className='p-3' style={{display:"flex",justifyContent:"start"}}>
               <button className='buttonlook w-auto mt-4' onClick={()=>navigate('/cartview')}>Add To Cart</button>
                </div>

                </div>
 
               



            </div>




        </div>


    )
}
export default Productpage;
{/* <h2 className='' >Private Blogger Mela</h2> 
<p className='bg-warning' style={{color: "black" }}>This book is a collection of poems and quotes that spreads hope. Everyone needs hope in life for it is the only way to achieve peace in today’s world. Life holds a lot of challenges that we must face. We encounter multiple heartbreaks but it can never be enough to break us.
    A Voyage to Peace has won<br></br> “The Best Poetry Book Award 2020” by author Pages Magazine
    and is also nominated by several other platforms. <br></br>This book has been a part of a few fests including “World Book Fair, New Delhi”. <br></br>This book has been a part of a few fests including “World Book Fair, New Delhi”This book is a collection of poems and quotes that spreads hope. Everyone needs hope in life for it is the only way to achieve peace in today’s world. Life holds a lot of challenges that we must face. We encounter multiple heartbreaks but it can never be enough to break us.
    A Voyage to Peace has won<br></br>.</p>
<div>
<p className="px-3" style={{ maxWidth: "80%", textAlign: "justify", color: "black", fontSize: "13px" }}>
    Acrivities Perform There<br></br><br></br>
    1.The world is a book and those who do not travel read only one page.<br></br>
    2.The world is a book and those who do not travel read only one page.<br></br>
    3.The world is a book and those who do not travel read only one page.<br></br>
    4.The world is a book and those who do not travel read only one page.<br></br>

    5.The world is a book and those who do not travel read only one page.<br></br> */}

{/*  */}




