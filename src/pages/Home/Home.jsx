import {useSelector, useDispatch} from "react-redux";
import {addOneForTest,changeName} from "../../redux/products";

const Home=()=>{
    //const products=useSelector(store=>store);//Objects

    //const products=useSelector(store=>store.products);
        //{products:[],filter:{price:{from:0,to:10000}},productsLength:0,test:""}
    
    //const products=useSelector(store=>store.products.products);//[]

    const {test,filter,products,name}=useSelector(store=>store.products);
    const dispatch=useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(addOneForTest())}>Plus one for test</button>
            {test}

            <input onChange={(e)=>dispatch(changeName(e.target.value))} type="text"/>
            <h2>Ваше имя:{name}</h2>
        </div>
    )
}
export default Home;