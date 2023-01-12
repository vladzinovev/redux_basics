import {useSelector, useDispatch} from "react-redux";
import {addOneForTest} from "../../redux/products";

const Home=()=>{
    //const products=useSelector(store=>store);//Objects

    //const products=useSelector(store=>store.products);
        //{products:[],filter:{price:{from:0,to:10000}},productsLength:0,test:""}
    
    //const products=useSelector(store=>store.products.products);//[]

    const {test,filter,products}=useSelector(store=>store.products);
    const dispatch=useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(addOneForTest())}>Plus one for test</button>
            {test}
        </div>
    )
}
export default Home;