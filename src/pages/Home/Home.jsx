import {useSelector} from "react-redux";

const Home=()=>{
    //const products=useSelector(store=>store);//Objects

    //const products=useSelector(store=>store.products);
        //{products:[],filter:{price:{from:0,to:10000}},productsLength:0,test:""}
    
    //const products=useSelector(store=>store.products.products);//[]

    const products=useSelector(store=>store.products);

    return(
        <div>
            {products.test}
        </div>
    )
}
export default Home;