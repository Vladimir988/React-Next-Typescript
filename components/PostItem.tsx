import css from "../styles/Posts.module.scss";
import Link from "next/link";
import {PostsInterface} from "../interfaces/interfaces";

export default function PostItem ({post}: PostsInterface) {
    return (
        <div className={css.postItem}>
            <div className={css.postContent}>
                <p><b>{post.id}. {post.title}</b></p>
                <p>{post.body}</p>
            </div>
            <div className={css.postBtns}>
                <Link className={css.openLink} href={`/posts/${post.id}`}>Open →</Link>
            </div>
        </div>
    );
};