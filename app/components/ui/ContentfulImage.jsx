import Image from 'next/image'

// const contentfulLoader = ({ src, width, quality }) => {
//     return `${src}?w=${width}&q=${quality || 75}`
// }

const ContentfulImage = props => {
    return <Image {...props} />
}

export default ContentfulImage