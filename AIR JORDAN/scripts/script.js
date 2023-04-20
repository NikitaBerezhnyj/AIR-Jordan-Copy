let index = 1;
const logo = document.getElementById("logo");
const user = document.getElementById("user");
const search = document.getElementById("search");
const basket = document.getElementById("basket");

document.querySelector(".them-change").addEventListener('change', (event) => {
    if(event.target.nodeName === 'INPUT') {
        console.log('check');
        document.documentElement.classList.remove('dark', 'light');
        index++;
        if((index % 2) == 0) {
            document.documentElement.classList.add('light');
            document.getElementById("them-name").textContent = "WHITE";
            logo.style.filter = "brightness(0)";
            user.style.filter = "brightness(0)";
            search.style.filter = "brightness(0)";
            basket.style.filter = "brightness(0)";
        }
        else if((index % 2) != 0) {
            document.documentElement.classList.add('dark');
            document.getElementById("them-name").textContent = "Black";
            logo.style.filter = "brightness(1)";
            user.style.filter = "brightness(1)";
            search.style.filter = "brightness(1)";
            basket.style.filter = "brightness(1)";
        }
    }
})