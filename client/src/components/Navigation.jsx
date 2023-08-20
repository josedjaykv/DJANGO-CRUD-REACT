import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div>
        <Link to = "/tasks"><h1>Brainlearn</h1></Link>        
        <Link to = "/tasks-create">Create card</Link>
    </div>
  )
}

