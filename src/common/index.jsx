import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export const Common=()=>{
    const location=useLocation();
    useEffect(()=>{
window.scrollTo({
    top:0
})
    },[location.pathname])
    return null;
}