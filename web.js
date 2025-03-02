let element_button = document.getElementsByTagName('button')[0];
function button_event(){
    alert('welcome to this web.本站点为测试站点，目前有网站导航，正在开发更多功能。');
}
element_button.addEventListener('click',button_event);