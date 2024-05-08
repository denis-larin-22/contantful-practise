import PostList from '../components/posts/PostList';

const Posts = () => {


    return (
        <section className='section'>
            <div className='container'>
                <h2 className="text-2xl text-gray-600 mb-10">All posts:</h2>
                <PostList />
            </div>
        </section>
    )
}

export default Posts