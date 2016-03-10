export class HelloController {
  constructor($interval, helloService) {
    this.name = helloService.getViewerName();
    this.$interval = $interval;
  }
}
