export default class Failure {
  public message: string;

  constructor(msg: string) {
    this.message = `❌ ${msg}`;
  }
}
