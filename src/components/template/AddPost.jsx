import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../../services/admin"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import styles from "./addPost.module.css"

function AddPost() {
  const [form , setForm] = useState({
    title: "" , 
    content : "" ,
    category : "" ,
    city : "" ,
    amount : null ,
    images: null
  })
  const {data } = useQuery(["get-categories"] , getCategory)

  const addHandler = event => {
    event.preventDefault();
    console.log(form);
  }

  const changeHandler = event => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({...form ,  [name] : event.target.value })
    }else{
        setForm({...form , [name] : event.target.files[0]})
    }
  }


  return (
    <div>
      <form className={styles.form}  onChange={changeHandler}>
      <h3>ثبت آگهی</h3>
      <label htmlFor="title">عنوان :</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات :</label>
      <textarea name="contetn" id="content" />
      <label htmlFor="amount">قیمت :</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر :</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="city">دسته بندی :</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="file">عکس :</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
    </div>
  )
}

export default AddPost