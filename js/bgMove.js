//控制背景移动的方法
function bgMove() {
    $('bg').style.top = $('bg').offsetTop + 3 + 'px';
    if ($('bg').offsetTop >= 0) {
        $('bg').style.top = '-568px';
    }
}