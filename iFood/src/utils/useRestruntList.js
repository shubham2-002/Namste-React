import { useState ,useEffect} from "react"
import { RESTRAU_LIST } from "./constant"

const useRestruntList=()=>{

    const [NewreList,setNewreList] = useState();
    const [filterRestraunt,SetfilterRestraunt]= useState();

    const fetchData = async()=>{
        const data = await fetch(RESTRAU_LIST)

        const JSdata = await data.json();
        
        setNewreList(JSdata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        SetfilterRestraunt(JSdata?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {NewreList,filterRestraunt};
}
export default useRestruntList
// const fetchData = async () => {
//     const data = await fetch(RESTRAU_LIST)
//     const json = await data.json()

//     // console.log(json)
//     setNewreList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     SetfilterRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])