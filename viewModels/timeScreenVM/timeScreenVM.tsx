import { computed, makeAutoObservable, observable, runInAction } from 'mobx'
import moment  from 'moment'
import { timechecker } from '../../helpers/timechecker'

export default class timeScreenVM {

  @observable currentTime = moment()
  @observable alarmTime = moment()
  @observable showTimePicker = false
  @observable alarmEnabled = false
  @observable clickCount = 0
  interval: NodeJS.Timeout

  constructor() {
    makeAutoObservable(this);
  
    this.interval = setInterval(() => {
      runInAction(() => {
        this.currentTime = moment();
      });
    }, 1000);
  }
  
  dispose() {
    clearInterval(this.interval);
  }

  incrementClickCount = () => {
    this.clickCount ++ 
  }

  toggleTimePicker = () => {
    this.showTimePicker = !this.showTimePicker
  }

  @computed get alarmDate () {
    return this.alarmTime.toDate()
  }


  setAlarmTime = (alarmDate: Date) => {
    this.alarmTime = moment(alarmDate)
  }

  @computed get formattedTime () {
    return this.currentTime.format('HH-mm-ss')
  }

  toggleAlarmEnabled() {
    this.alarmEnabled = !this.alarmEnabled
  }

  @computed get alarmTriggered (){
    const timesMatch = timechecker(this.currentTime, this.alarmTime)
    return timesMatch && this.alarmEnabled
  }
}