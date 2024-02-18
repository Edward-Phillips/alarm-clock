import moment from 'moment'
import {timechecker} from '../../helpers/timechecker'
import expect from 'expect'

it('returns false if time different', () =>{
    const currentTime = moment()
    const otherTime = moment().add(5, 'minutes')

    const timecheckResult = timechecker(currentTime, otherTime)

    expect(timecheckResult).toEqual(false)
})