import {observable, action, makeObservable} from 'mobx';

export class RouterStore {
  @observable location = null;

  history = null;

  constructor() {
    makeObservable(this);
  }

  @action
  _updateLocation(newState) {
    this.location = newState;
  }

  /*
   * History methods
   */
  @action.bound push = (location, state) => {
    this.history.push(location, state);
  };

  @action.bound replace = (location, state) => {
    this.history.replace(location, state);
  };

  @action.bound go = (iState) => {
    this.history.go(iState);
  };

  @action.bound back = () => {
    this.history.back();
  };

  @action.bound forward = () => {
    this.history.forward();
  };
};
