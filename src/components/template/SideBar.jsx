import { useQuery } from '@tanstack/react-query'
import {getCategory} from "../../../services/admin"
import Loader from "../module/Loader"
import styles from "./SideBar.module.css"

function SideBar() {
    const {data , isLoading} = useQuery(["get-categories" ], getCategory)
    console.log(data);
  return (
    <div className={styles.sidebar}>
        <h4>دسته ها</h4>
        <ul>
            {
                isLoading ? <Loader /> : (

                    data?.data.map((category) => (
                        <li key={category._id}>
                        <img src={`${category.icon}.svg`}/>
                        <p>{category.name}</p>
                    </li>
                ))
            )
            }
        </ul>
    </div>
  )
}

export default SideBar