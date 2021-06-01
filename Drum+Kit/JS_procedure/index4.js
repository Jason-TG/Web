

// alert ("test"); => 테스트 완료

// 모든 버튼태그들이 선택되어 배열로 저장됨
var btns = document.querySelectorAll('button');

// 모든 버튼에 이벤트 달기
/*
btns[0].addEventListener('click', handleClick)
btns[1].addEventListener('click', handleClick)
*/
// 위 방식 대신 반복문 활용
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleClick);
}
// 전체 화면에 키보드 이벤트 달기
document.addEventListener('keypress', handleKey);

function handleKey() {
    alert('키 눌렀음')
    console.log(this); // document로 출력 => 구분할 필요 있음. 
}

function handleClick() {
    //alert('클릭했음');
    // var audio = new Audio('sounds/tom-4.mp3');
    // audio.play();
    // console.log(this.textContent);

    // 7개의 버튼 중 어떤 버튼을 눌렀는지 키값으로 판별
    switch (this.textContent) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play(); break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    }
}







