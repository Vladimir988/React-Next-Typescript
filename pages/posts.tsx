import {FC} from 'react';
import Link from "next/link";
import css from "../styles/Posts.module.scss";

const Posts: FC = ({posts}) => {
    return (
        <main style={{margin: '10px'}}>
            <h1>Posts:</h1>
            <br/>
            <ul style={{listStyleType: 'none'}}>
                {posts.map(post =>
                    <Link className={css.postItem} href={`/posts/${post.id}`} key={post.id}>
                        <div className={css.postContent}>
                            <p><b>{post.id}. {post.title}</b></p>
                            <p>{post.body}</p>
                        </div>
                        <div className={css.postBtns}>
                            <button>Open</button>
                            <button>Delete</button>
                        </div>
                    </Link>
                )}
            </ul>
        </main>
    );
};

export default Posts;

export async function getStaticProps() {
    const url      = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const posts    = await response.json();

    return {
        props: {posts},
    }
}