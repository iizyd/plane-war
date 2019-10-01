//公共变量
//子弹的速度
var bulletSpeedY = 8;
//创建子弹的中间变量
var bulletCountNum = 5;
var bulletCount = bulletCountNum;

//双排子弹
var isDouble = false;

//向外暴露的函数
function bullet() {
    creatBulletTime();
    bulletMove();
}

//创建子弹
function creatBullet(left, top) {
    if (isDouble) {
        var b1 = document.createElement('div');
        b1.className = 'bullet';
        b1.style.left = left - 22 + 'px';
        b1.style.top = top + 30 + 'px';
        b1.hurt = 100;
        b1.isDelete = false;
        $('bullets').appendChild(b1);

        var b2 = document.createElement('div');
        b2.className = 'bullet';
        b2.style.left = left + 21 + 'px';
        b2.style.top = top + 30 + 'px';
        b2.hurt = 100;
        b2.isDelete = false;
        $('bullets').appendChild(b2);
    } else {
        var b = document.createElement('div');
        b.className = 'bullet';
        b.style.left = left + 'px';
        b.style.top = top + 'px';
        b.hurt = 100;
        b.isDelete = false;
        $('bullets').appendChild(b);
    }

}

//间隔创建子弹
function creatBulletTime() {
    //子弹创建间隔计数值
    bulletCount--;
    if (bulletCount <= 0) {
        //根据hero飞机当前的位置来创建 中间的位置
        var heroNowLocalX = $('herofly').offsetLeft + 30;
        var heroNowLocalY = $('herofly').offsetTop - 6;
        creatBullet(heroNowLocalX, heroNowLocalY);
        bulletCount = bulletCountNum;
    }

}

//子弹移动
function bulletMove() {
    var bs = document.getElementsByClassName('bullet');

    for (var i = 0; i < bs.length; i++) {
        if (bs[i].offsetTop <= 0 || bs[i].isDelete) {
            $('bullets').removeChild(bs[i]);
            i--;
            continue;

        }
        bs[i].style.top = bs[i].offsetTop - bulletSpeedY + 'px';
    }
}