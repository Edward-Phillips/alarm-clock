import { computed, makeAutoObservable, observable, runInAction } from 'mobx'
import moment  from 'moment'

export default class timeScreenVM {

  @observable currentTime = moment()
  @observable alarmTime = moment()
  @observable showTimePicker = false
  @observable alarmEnabled = false
  @observable clickCount = 0
  @observable alarmEnabled = false
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
}