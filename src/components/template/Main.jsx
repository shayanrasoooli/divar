import {sp} from "../../../utils/Numbers.js"
import styles from "./Main.module.css"

function Main({posts}) {
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
        <div key={post._id}>
          <div className={styles.card}>
            <p>{post.options.title}</p>
            <div className={styles.info}>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`http://localhost:3400/${post.images[0]}`}/>
        </div>
      ))}
    </div>
  )
}

export default Main