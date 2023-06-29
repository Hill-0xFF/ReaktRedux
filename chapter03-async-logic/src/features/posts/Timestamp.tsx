import { parseISO, formatDistanceToNow } from 'date-fns'

type TimePostedProps = {
  timestamp: string,
}

const TimePosted = ({ timestamp }: TimePostedProps) => {
  let timePassed = '';
  if(timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timePassed = `Posted ${timePeriod} ago.`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timePassed}</i>
    </span>
  )
}

export default TimePosted;