import css from "../../styles/Post.module.scss";
import {FC, useState} from "react";

const Post: FC = ({post}) => {
    console.log(post);
    return(
        <div className={css.post}>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
            {/*<MyHead keywords="next-js-keywords" title={"User " + user.name} />*/}
            {/*<Navbar />*/}
            {/*<h1>User with id: {user.id}</h1>*/}
            {/*<p>name: <b>{user.name}</b></p>*/}
            {/*<p>nickname: <b>{user.username}</b></p>*/}
            {/*<p>phone: <b>{user.phone}</b></p>*/}
            {/*<p>website: <b>{user.website}</b></p>*/}
        </div>
    );
};

export default Post;

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post     = await response.json();

    return {
        props: {post},
    }
}