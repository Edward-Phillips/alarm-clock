import moment from 'moment'
import {timechecker} from '../../helpers/timechecker'

const currentTimeString = '2024-02-18 12:00:00'

it('returns false if time different', () =>{
    const currentTime = moment(currentTimeString)
    const otherTime = moment(currentTimeString).add(5, 'minutes')

    const timecheckResult = timechecker(currentTime, otherTime)

    expect(timecheckResult).toEqual(false)
})

it('return true is time is in same minute', () =>{
    const currentTime = moment(currentTimeString)
    const closeTime = moment(currentTimeString).add(45, 'seconds')

    const timecheckResult = timechecker(currentTime, closeTime)

    expect(timecheckResult).toEqual(true)
})