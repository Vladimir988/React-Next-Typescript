import css from "../../styles/Post.module.scss";
import PageHead from "../../components/PageHead";
import {PostInterface} from "../../interfaces/interfaces";
import {satisfies} from "next/dist/lib/semver-noop";
import Link from "next/link";

export default function Post({post}: PostInterface) {
    return(
        <div className={css.post}>
            <PageHead keywords={`Single post - ${post.body.id}`} title={post.body.title.charAt(0).toUpperCase() + post.body.title.slice(1, 20)}/>
            <Link className={css.back} href='/posts'>← Back</Link>
            <h1>{post.body.id}. {post.body.title}</h1>
            <p>{post.body.body}</p>
            <h2>Comments:</h2>
            {post.comments.map(comment =>
                <div className={css.commentWrap} key={comment.id}>
                    <p>name: <b>{comment.name}</b></p>
                    <p>email: <b>{comment.email}</b></p><br/>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
    );
}

export const getServerSideProps = (async ({params}) => {
    const body  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);

    const post: { body: any; comments: any } = {
        body: await body.json(),
        comments: await comments.json(),
    };

    return { props: {post} }
}) satisfies getServerSideProps<{ posts: PostInterface }>