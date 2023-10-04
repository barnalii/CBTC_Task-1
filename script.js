let navlist = document.querySelector('.navlist');

document.querySelector('#menu-icon').onclick = () => {
    navlist.classList.toggle('active');
    // Remove the 'active' class from searchForm
    navlist.classList.remove('active');
}


