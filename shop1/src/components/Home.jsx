import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Caros from './Caros'
function Home(){
    const [product,setProduct]=useState([])
    const [add,setAdd]=useState(false)
    const [currentProduct,setCurrentProduct]=useState(null)
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/').then(response=>setProduct(response.data))
        .catch(error => console.log(error))
    },[])
    const view_p=(products)=>{
        setAdd(true)
        setCurrentProduct(products)
    }
    return(
        <>
        <Caros/>
        <div className='container mt-3'>
            <div className='row' id='a1'>
                {product.map(pro=>(
                    <div className='col-lg-3 col-md-4 col sm-6' key={pro.id}>
                        <div className='card' onClick={()=>view_p(pro)}>
                            <img className='card-img-top img-fluid' src={pro.image} alt='p_image'></img>
                            <div className='card-body'>
                                <h4 className='card-title'>{pro.p_name}</h4>
                                <h6 className='card-text'>{pro.price}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Home