import RichText from "@/app/components/RichText";
import ContentfulImage from "@/app/components/ui/ContentfulImage";
import DateComponent from "@/app/components/ui/DateComponent";
import { client } from "@/app/lib/contentful/client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const post = await client.getEntries({
        content_type: 'tBlogPost',
        'fields.slug': slug
    });


    // console.log('HEREEEE', post.items[0].fields);


    if (!post.items.length) {
        redirect(`/posts`)
    }

    const { title, coverImage, content, date, author } = post.items[0].fields;

    return (
        <section className='section'>
            <div className='container'>
                <article className='prose mx-auto'>
                    <div>
                        <h2>{title}</h2>
                        <div className='h-fit flex items-center gap-5'>
                            <Image
                                src={`https:${author.fields.avatar.fields.file.url}`}
                                width={50}
                                height={50}
                                alt={author.fields.name}
                                className='rounded-full'
                            />
                            <DateComponent dateString={date} className='text-sm text-gray-400' />
                        </div>
                        <div className='mb-8 md:mb-16 sm:mx-0'>
                            <ContentfulImage
                                alt={`Cover Image for ${title}`}
                                src={`https:${coverImage.fields.file.url}`}
                                width={coverImage.fields.file.details.image.width}
                                height={coverImage.fields.file.details.image.height}
                            />
                        </div>

                        <RichText content={content} />
                    </div>


                </article>
            </div >
        </section >
    )
}