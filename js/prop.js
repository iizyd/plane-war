//变量
var propDiff = 900;
// var propSpeedY = 7;

// 向外暴露的方法
function prop() {
    randCreatProp();
    propMove();
}

//随机创建奖励

function randCreatProp() {
    var n = rand(0, propDiff);
    if (n < 7) {
        if (n == 6) {
            creatProp('prop1', rand(3, 6), rand(0, 320 - 39),1);
        } else if (n >= 3) {
            creatProp('prop2', rand(3, 6), rand(0, 320 - 39),2);
        } else {
            creatProp('prop3', rand(3, 6), rand(0, 320 - 39),3);
        }
    }
}

//创建奖励
//propType:1 密集子弹  2 双排子弹  3 炸弹
function creatProp(type, speedY, left,propType) {
    var p = document.createElement('div');
    p.className = 'props ' + type;
    p.speedY = speedY;
    p.left = left;
    p.propType = propType;
    p.isDelete = false;
    $('prop').appendChild(p);
}

//奖励的移动
function propMove() {
    var ps = document.getElementsByClassName('props');
    for (var i = 0; i < ps.length; i++) {
        if (ps[i].offsetTop > 568 || ps[i].isDelete) {
            $('prop').removeChild(ps[i]);
            i--;
            continue;
        }
        ps[i].style.top = ps[i].offsetTop + ps[i].speedY + 'px';
        ps[i].style.left = ps[i].left + 'px';
    }
}