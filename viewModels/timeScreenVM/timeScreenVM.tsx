import { computed, observable } from 'mobx'

export default class timeScreenVM {

  @observable time = moment()
  constructor () {

  }
}