import timeScreenVM from '../../viewModels/timeScreenVM/timeScreenVM'
import {observable} from 'mobx'

const timescreen = new timeScreenVM()

it('returns false if no alarm set', () => {

    expect(timescreen.alarmEnabled).toEqual(false)

    timescreen.dispose()

})

it('can toggle alarm status on', () => {
    expect(timescreen.toggleAlarmEnabled().alarmEnabled).toEqual(true)

    timescreen.dispose()
})