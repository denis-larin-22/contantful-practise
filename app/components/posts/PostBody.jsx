import RichText from '../RichText'

const PostBody = ({ post }) => {
    const { content } = post.items[0].fields

    return (
        <div className='mx-auto prose'>
            {/* {content ? 'Ok' : 'Not ok'} */}
            <RichText content={content} />
        </div>
    )
}

export default PostBody