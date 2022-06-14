import {useRouter} from 'next/router';

function BlogPostsPage(){
    const router = useRouter();
    console.log('---------------');
    console.log(router.query)
    console.log('---------------');
    
    return <div>
        <h1>The Blog posts</h1>
    </div>
}

export default BlogPostsPage;