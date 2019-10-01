//变量声明
//设置游戏的难度
var diff = 300;
var speed = 8;
//向外暴露的方法
function enemys() {
    // creatEnemys();
    enemyMove();
    randCreat();
}


// type: enemy1 enemy2 enemy3
// hp: 血量 100 300 600
// score: 分数  1 3 6
// left: 水平偏移量
// speedY: 纵向偏移速度

// 随机生成敌机
function randCreat() {
    var n = rand(0, diff);
    if (n < 10) {
        var e = null;
        if (n >= 9) {
            creatEnemys('enemy3', 600, 6, rand(0, 320 - 110), rand(4, speed), 10);
        } else if (n >= 6) {
            creatEnemys('enemy2', 300, 3, rand(0, 320 - 46), rand(4, speed), 6);
        } else {
            creatEnemys('enemy1', 100, 1, rand(0, 320 - 38), rand(4, speed), 5);
        }
    }
}

//生成敌机
function creatEnemys(type, hp, score, left, speedY, maxindex) {
    var enemyA = document.createElement('div');
    enemyA.className = 'enemy ' + type;
    enemyA.hp = hp;
    enemyA.score = score;
    enemyA.style.left = left + 'px';
    enemyA.speedY = speedY;
    enemyA.isDelete = false;
    enemyA.isBol = false;
    enemyA.bgIndex = 0;
    enemyA.bgMaxIndex = maxindex;
    $('enemys').appendChild(enemyA);
}

//敌机移动
function enemyMove() {
    var enes = document.getElementsByClassName('enemy');
    for (var i = 0; i < enes.length; i++) {
        if (enes[i].isBol == true) {
            if (enes[i].bgIndex < enes[i].bgMaxIndex) {
                enes[i].bgIndex++;
                enes[i].style.backgroundPosition = -enes[i].bgIndex * enes[i].offsetWidth + 'px 0';
            } else {
                score += enes[i].score;
                $('scoreNum').innerHTML = '分数：' + score;
                enes[i].isDelete = true;
            }

        }
        if (enes[i].offsetTop > 568 || enes[i].isDelete) {
            $('enemys').removeChild(enes[i]);
            i--;
            continue;
        }
        enes[i].style.top = enes[i].offsetTop + enes[i].speedY + 'px';
    }
    // console.log(enes.length);
}

//清屏
function clearEnemys() {
    if (bombCount > 0) {
        bombCount--;
        var enes = document.getElementsByClassName('enemy');
        for (var i = 0; i < enes.length; i++) {
            // $('enemys').removeChild(enes[i]);
            // i--;
            // continue;
            enes[i].isBol = true;
        }
        $('bomb').removeChild($('bomb').children[0]);
    }

}