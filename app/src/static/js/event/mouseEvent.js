// 마우스 오버, 리브 시에 아이콘 확대 축소
function iconOver(btn) {
    btn.addEventListener('mouseenter', (event) => {
        zoomIn(event);
    });
    btn.addEventListener('mouseleave', (event) => {
        zoomOut(event);
    });
}
function zoomIn(event) {
    event.target.style.width = "30px";
    event.target.style.height = "35px";
    event.target.style.transition = "all 0.2s";
}
function zoomOut(event) {
    event.target.style.width = "30px";
    event.target.style.height = "30px";
    event.target.style.transition = "all 0.2s";
}