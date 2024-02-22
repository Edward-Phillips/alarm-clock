import timeScreenVM from '../../viewModels/timeScreenVM/timeScreenVM'
import {observable} from 'mobx'


it('returns false if no alarm set', () => {

    const timescreen = new timeScreenVM()

    expect(timescreen.alarmEnabled).toEqual(false)

    timescreen.dispose()

})