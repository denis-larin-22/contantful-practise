import Link from 'next/link'
import Avatar from '../ui/Avatar'
import DateComponent from '../ui/DateComponent'
import Image from 'next/image'

const PostCard = ({ post }: any) => {
    const { title, slug, excerpt, coverImage, author, date } = post.fields


    return (
        <li className='rounded-md overflow-hidden shadow-md hover:scale-105 duration-150'>
            <Link href={`/posts/${slug}`} aria-label={title} className='h-full flex flex-col justify-between'>
                <div className="">
                    <div className='mb-2'>
                        <Image
                            alt={`Cover Image for ${title}`}
                            src={`https:${coverImage.fields.file.url}`}
                            width={coverImage.fields.file.details.image.width}
                            height={coverImage.fields.file.details.image.height}
                            className='h-60 object-cover'
                        />
                    </div>
                    <div className="p-4">
                        <h3 className='text-xl mb-5 pb-5 border-b-2 border-gray-200'>{title}</h3>
                        <p className='text-sm text-gray-500 mb-4'>{excerpt}</p>
                    </div>
                </div>
                <div className='text-sm p-4 mb-4 text-gray-400 flex items-center justify-between'>
                    <Image
                        src={`https:${author.fields.avatar.fields.file.url}`}
                        width={50}
                        height={50}
                        alt={author.fields.name}
                        className='rounded-full'
                    />
                    <p className="">{author.fields.name}</p>
                    <DateComponent dateString={date} />
                </div>
            </Link>
        </li>
    )
}

export default PostCard