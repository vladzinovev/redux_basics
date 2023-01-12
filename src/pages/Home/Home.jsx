import {useSelector, useDispatch} from "react-redux";
import {addOneForTest,changeName,getAllPosts} from "../../redux/products";
import {useEffect} from 'react'

const Home=()=>{
    //const products=useSelector(store=>store);//Objects

    //const products=useSelector(store=>store.products);
        //{products:[],filter:{price:{from:0,to:10000}},productsLength:0,test:""}
    
    //const products=useSelector(store=>store.products.products);//[]

    const {test,filter,products,name,posts,status,error}=useSelector(store=>store.products);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts())
    },[])

    return(
        <div>
            <button onClick={()=>dispatch(addOneForTest())}>Plus one for test</button>
            {test}

            <input onChange={(e)=>dispatch(changeName(e.target.value))} type="text"/>
            <h2>Ваше имя:{name}</h2>

            {status=='loading'&& "...Loading"}
            {error.length ? error :''}
            <ul>
                {posts.map((item)=>(
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Home;