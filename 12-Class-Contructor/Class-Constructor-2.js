class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.timer = setInterval(this.render.bind(this), 1000);
      
      // with arrow function
      // this.timer = setInterval(() => this.render(), 1000);
    }
}
  
var clock = new Clock({ template: 'h:m:s' });
clock.start();  