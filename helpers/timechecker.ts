export const timechecker = (currentTime: moment.Moment, otherTime: moment.Moment) => {
    const sameTime = currentTime.isSame(otherTime, 'minute')

    return sameTime
}