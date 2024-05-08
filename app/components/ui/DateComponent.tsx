import { formatDate } from "../../lib/utils"

const DateComponent = ({ dateString, options, ...rest }: any) => {
    return (
        <time dateTime={dateString} {...rest}>
            {formatDate(dateString, options)}
        </time>
    )
}

export default DateComponent