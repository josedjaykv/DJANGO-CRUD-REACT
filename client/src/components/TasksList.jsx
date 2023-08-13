import { useEffect } from "react"

export function TasksList() {
    useEffect(() => {
        console.log("Pagina cargada")
    }, []);
    return <div>TasksList</div>  
}
