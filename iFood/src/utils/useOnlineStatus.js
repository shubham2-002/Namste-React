import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,SetOnlineStatus] =useState(true)

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            SetOnlineStatus(false)
        })
        window.addEventListener("online",()=>{
            SetOnlineStatus(true)
        })
    },[])
    //boolean status
    return onlineStatus
}
export default useOnlineStatus