import css from "../../styles/Post.module.scss";
import {FC, useState} from "react";

const Post: FC = ({post}) => {
    return(
        <div className={css.post}>
            Single Post
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