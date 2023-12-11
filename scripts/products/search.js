function search() {
    const url = location.href;
    const pages = url.includes('pages');

    const searchForm = document.getElementById('search');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchValue = event.target.searchValue.value;
        if (searchValue) {
            location.href = pages
                ? `../tuotteet/index.html?search=${searchValue}`
                : `pages/tuotteet/index.html?search=${searchValue}`;
        }
    });
}
