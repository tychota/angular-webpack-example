export class HelloController {
  constructor($interval) {
    this.greetings = 'Hello Angular';
    this.$interval = $interval;
  }
}
