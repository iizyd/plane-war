//定义需要的变量
//移动方向状态的标志
var isLeft = false;
var isRight = false;
var isTop = false;
var isBottom = false;

//绑定键盘监控事件
onKey();


//向外暴露的方法
function herofly() {
    heroMove();
}

//控制移动的方法
function heroMove() {
    if (isLeft == true) {
        $('herofly').style.left = $('herofly').offsetLeft - 7 + 'px';
        if ($('herofly').offsetLeft <= -33) {
            $('herofly').style.left = -33 + 'px';
        }
    }
    if (isRight == true) {
        $('herofly').style.left = $('herofly').offsetLeft + 7 + 'px';
        if ($('herofly').offsetLeft >= 287) {
            $('herofly').style.left = 287 + 'px';
        }
    }
    if (isTop == true) {
        $('herofly').style.top = $('herofly').offsetTop - 7 + 'px';
        if ($('herofly').offsetTop <= 0) {
            $('herofly').style.top = 0;
        }
    }
    if (isBottom == true) {
        $('herofly').style.top = $('herofly').offsetTop + 7 + 'px';
        if ($('herofly').offsetTop >= 486) {
            $('herofly').style.top = '486px';
        }
    }
}

//键盘监控
function onKey() {
    window.onkeydown = function (e) {
        var code = e.keyCode;
        switch (code) {
            case 32:
                clearEnemys();
                break;
            case 37:
                isLeft = true;
                break;
            case 38:
                isTop = true;
                break;
            case 39:
                isRight = true;
                break;
            case 40:
                isBottom = true;
                break;
            default:
                break;
                false
        }
    }

    window.onkeyup = function (e) {
        var code = e.keyCode;
        switch (code) {
            case 37:
                isLeft = false;
                break;
            case 38:
                isTop = false;
                break;
            case 39:
                isRight = false;
                break;
            case 40:
                isBottom = false;
                break;
            default:
                break;
        }
    }
}