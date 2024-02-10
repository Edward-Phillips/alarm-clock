import { computed, makeAutoObservable, makeObservable, observable, reaction, runInAction } from 'mobx'
import moment  from 'moment'

export default class timeScreenVM {

  @observable currentTime = moment()

  constructor() {
    makeObservable(this);

    reaction(
      () => this.currentTime,
      () => {
        const interval = setInterval(() => {
          // Wrapping the state update in runInAction
          runInAction(() => {
            this.currentTime = moment()
          });
        }, 1000);
        return () => clearInterval(interval); // Cleanup on reaction disposal
      },
      {
        fireImmediately: true,
      }
    );
  }


  @computed get formattedTime () {
    return this.currentTime.format('HH-mm-ss')
  }
}