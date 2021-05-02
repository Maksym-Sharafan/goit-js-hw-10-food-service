export function changeThemsByClickAndRelodePage() {

    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };

    const body = document.querySelector('body');
    const themeSwitchToggle = document.getElementById('theme-switch-toggle');


    themeSwitchToggle.addEventListener('click', hendlerChengeThema);

    function hendlerChengeThema() {
        if (themeSwitchToggle.checked === true) {
            body.classList.replace(Theme.LIGHT, Theme.DARK)

            localStorage.removeItem('theme', Theme.LIGHT);
            localStorage.setItem('theme', Theme.DARK);
        } else if (themeSwitchToggle.checked === false) {
            body.classList.replace(Theme.DARK, Theme.LIGHT)

            localStorage.removeItem('theme', Theme.DARK);
            localStorage.setItem('theme', Theme.LIGHT);
        }    
    };

    function changeThemaBasedOnLocalStorage() {
        if (body.classList.contains(Theme.LIGHT || Theme.DARK) === false) {
            body.classList.add(Theme.LIGHT);
        }

        if (localStorage.getItem('theme')) {
            body.classList.add(localStorage.getItem('theme'));        
        }
        
        if (body.classList.contains(Theme.DARK)) {
            themeSwitchToggle.checked =true;
        }
    };
    changeThemaBasedOnLocalStorage();
}