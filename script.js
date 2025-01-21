
const themeToggle = document.getElementById("theme-toggle");

localStorage.getItem('theme') && document.documentElement.classList.add("dark")




const handleThemeToggle = ()=> {
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')) {
        localStorage.setItem("theme", "dark")
        themeToggle.innerHTML = "Light mode"
    }else {
        localStorage.removeItem("theme")
        themeToggle.innerHTML = "Dark mode"
    }
}

themeToggle.addEventListener("click", handleThemeToggle)

