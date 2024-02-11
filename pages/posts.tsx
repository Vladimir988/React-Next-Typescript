import PageHead from "../components/PageHead";
import {PostsInterface} from "../interfaces/interfaces";
import {satisfies} from "next/dist/lib/semver-noop";
import PostItem from "../components/PostItem";

export default function Posts({posts}: PostsInterface[]) {
    const title = 'Posts';
    return (
        <main style={{margin: '10px'}}>
            <PageHead keywords="posts-page-keywords" title={title}/>
            <h1>{title}:</h1><br/>
            <ul style={{listStyleType: 'none'}}>
                {posts.map(post =>
                    <PostItem post={post} key={post.id}/>
                )}
            </ul>
        </main>
    );
}

export const getStaticProps = (async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostsInterface = await res.json();

    return { props: {posts} }
}) satisfies getStaticProps<{ posts: PostsInterface }>