import { computed, makeAutoObservable, observable, runInAction } from 'mobx'
import moment  from 'moment'

export default class timeScreenVM {

  @observable currentTime = moment()
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


  @computed get formattedTime () {
    return this.currentTime.format('HH-mm-ss')
  }
}