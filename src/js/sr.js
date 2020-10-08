import assignProps from './assignProps';
export default function() {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };
  
  /* Section Title */
  ScrollReveal().reveal('.section-title', 
    assignProps(
      {
        delay:300,distance:'0px', 
        origin:'bottom'
      }, defaultProps)
  );

  /* Hero Section */
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

  ScrollReveal().reveal('.hero-title', 
    assignProps(
      { 
        delay: 500, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );
  
  ScrollReveal().reveal('.hero-cta', 
    assignProps(
      {
        delay: 1000, 
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__image', 
    assignProps(
      {
        delay: 600,
        origin: 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.about-wrapper__info', 
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', 
    assignProps(
      {
        delay: 500,
        origin: window.innerWidth > 768 ? 'left' : 'bottom'
      }, defaultProps)
  );

  ScrollReveal().reveal('.project-wrapper__image', 
    assignProps(
      {
        delay: 1000,
        origin: window.innerWidth > 768 ? 'right' : 'bottom'
      }, defaultProps)
  );

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper', 
    assignProps(
      {
        delay: 800,
        origin: 'bottom'
      }, defaultProps)
  );
}
