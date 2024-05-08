import { client } from "@/app/lib/contentful/client"
import PostCard from "./PostCard";

export default async function PostList() {
    // const result = await client.getEntries({ content_type: 'post' });
    // const list = result.items;
    const content = await client.getEntries({ content_type: 'tBlogPost' });
    const postList = content.items;

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
            {postList.map((post: any) => {
                return (
                    <PostCard key={post.fields.slug} post={post} />
                )
            })}
        </ul>
    )
}