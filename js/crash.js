//变量
//碰撞的状态
// var isDe = false;
//密集子弹的定时器
var mijiTimer = null;
var mijiTime = 8;

//双排子弹
var doubleTimer = null;
var doubleTime = 8;

//炸弹个数
var bombCount = 0;
//向外暴露的方法
function crash() {
    //子弹
    var bs = document.getElementsByClassName('bullet');
    //奖励
    var ps = document.getElementsByClassName('props');
    //敌机
    var es = document.getElementsByClassName('enemy');
    //hero
    var hero = $('herofly');


    for (var i = 0; i < es.length; i++) {
        //子弹和敌机
        for (var j = 0; j < bs.length; j++) {
            if (isCrash(es[i], bs[j])) {

                //血量减
                es[i].hp -= bs[i].hurt;
                //子弹消失
                bs[j].isDelete = true;
                if (es[i].hp <= 0) {
                    // es[i].isDelete = true;
                    es[i].isBol = true;
                }

            }
        }

        //敌机和hero
        if (isCrash(es[i], hero)) {
            // console.log('游戏结束');
            clearInterval(allTimer);
            allTimer = null;
            $('gameover-top').innerHTML = '你的分数为：' + score;
            $('gameover').className = 'gameover show';
        }
    }

    //奖励和hero
    for (var i = 0; i < ps.length; i++) {
        if (isCrash(ps[i], hero)) {
            if (ps[i].propType == 3) {
                clearInterval(mijiTimer);
                bulletCountNum = 3;
                mijiTime = 8;
                mijiTimer = setInterval(function () {
                    mijiTime--;
                    if (mijiTime <= 0) {
                        mijiTime = 8;
                        //控制子弹产生的间隔
                        bulletCountNum = 5;
                    }
                }, 1000)
            }

            if (ps[i].propType == 2) {
                clearInterval(doubleTimer);
                isDouble = true;
                doubleTime = 8;
                doubleTimer = setInterval(function () {
                    doubleTime--;
                    if (doubleTime <= 0) {
                        doubleTime = 8;
                        //控制子弹产生的间隔
                        isDouble = false;
                    }
                }, 1000)
            }

            if (ps[i].propType == 1) {
                if (bombCount < 3) {
                    bombCount++;
                    var bb = document.createElement('div');
                    bb.className = 'bombs';
                    $('bomb').appendChild(bb);
                }
            }
            ps[i].isDelete = true;
        }
    }
}

//碰撞检测
function isCrash(a, b) {
    var al = a.offsetLeft;
    var at = a.offsetTop;
    var ar = a.offsetLeft + a.offsetWidth;
    var ab = a.offsetTop + a.offsetHeight;

    var bl = b.offsetLeft;
    var bt = b.offsetTop;
    var br = b.offsetLeft + b.offsetWidth;
    var bb = b.offsetTop + b.offsetHeight;

    if (al > br || at > bb || ar < bl || ab < bt) {
        return false;
    } else {
        return true;
    }
}