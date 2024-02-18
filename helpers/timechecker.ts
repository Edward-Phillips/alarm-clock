export const timechecker = (currentTime: moment.Moment, otherTime: moment.Moment) => {
    const sameTime = currentTime.isSame(otherTime)

    return sameTime
}