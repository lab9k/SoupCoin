var waves = {
    init: function () {
        this.c = document.querySelector('canvas');
        this.ctx = this.c.getContext('2d');
        this.simplex = new SimplexNoise();
        this.events();
        this.reset();
        this.loop();
    },
    reset: function () {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.cx = this.w / 2;
        this.cy = this.h / 2;
        this.c.width = this.w;
        this.c.height = this.h;

        this.count = Math.floor(this.w / 50);
        this.xoff = 0;
        this.xinc = 0.05;
        this.yoff = 0;
        this.yinc = 0.003;
        this.goff = 0;
        this.ginc = 0.003;
        this.y = this.h * 0.66;
        this.length = this.w + 10;
        this.amp = 40;
    },
    events: function () {
        window.addEventListener('resize', this.reset.bind(this));
    },
    wave: function () {
        this.ctx.beginPath();
        var sway = this.simplex.noise2D(this.goff, 0) * this.amp;
        for (var i = 0; i <= this.count; i++) {
            this.xoff += this.xinc;
            var x = this.cx - this.length / 2 + (this.length / this.count) * i;
            var y = this.y + this.simplex.noise2D(this.xoff, this.yoff) * this.amp + sway;
            this.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
        }
        this.ctx.lineTo(this.w, this.h);
        this.ctx.lineTo(0, this.h);
        this.ctx.closePath();
        this.ctx.fillStyle = 'hsla(210,90%,50%,0.2)';
        this.ctx.fill();
    },
    loop: function () {
        requestAnimationFrame(this.loop.bind(this));
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.xoff = 0;
        this.wave();
        this.wave();
        this.wave();
        this.wave();
        this.yoff += this.yinc;
        this.goff += this.ginc;
    }
};

var scrollFade = {
    init: function () {
        this.events();
    },
    events: function () {
        window.addEventListener("scroll", this.calcop.bind(this));
    },
    calcop: function () {
        $(".title").css("opacity", 1 - $(window).scrollTop() / 500);
    }
};

window.onload = function () {
    waves.init();
    scrollFade.init();
};
