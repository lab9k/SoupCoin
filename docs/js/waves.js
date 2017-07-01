const waves = {
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

        this.brokjes = [];
        for (let i = 0; i < 10; i++) {
            this.brokjes.push(new SoepBrok(this.c.getAttribute("height"), this.c.getAttribute("width")));
        }
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

        this.ctx.fillStyle = 'hsla(34,96%,59%,0.2)';
        this.ctx.fill();

        this.ctx.closePath();
        this.ctx.beginPath();

        for (let i = 0; i < this.brokjes.length; i++) {
            this.ctx.rect(this.brokjes[i].x, this.brokjes[i].y, 15, 15);
            this.ctx.fillStyle = '#752f16';
            this.ctx.fill();
        }
        this.ctx.closePath();
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
        for (let i = 0; i < this.brokjes.length; i++) {
            this.brokjes[i].update();
        }
    }
};

function SoepBrok(maxY, screenwidth) {
    this.x = Math.random() * screenwidth;
    this.y = 0;
    this.vy = Math.random() * 10;
    this.maxY = maxY;
    this.acceleration = 9.81;
    this.maxX = screenwidth;
    this.update = function () {
        this.vy += this.acceleration / 60;
        this.y += this.vy;
        if (this.y > this.maxY) {
            this.y = 0;
            this.x = Math.random() * this.maxX;
            this.vy = Math.random() * 10;
        }
    };
}

window.onload = function () {
    waves.init();
};
