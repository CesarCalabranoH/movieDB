searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;;
});
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});
arrowBtn.addEventListener('click', () => {
    history.back();
    // location.hash = '#home'; este esra el que tenia antes pero el problema con este es que me devolvia siempre al home, lo que hacia es que si queria usar el buscador de peliculas me devolvia siempre al home
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});

    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if(location.hash.startsWith('#search=')) {
        searchPage();
    } else if(location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if(location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    // Este es para que cada de ves que se cambie de location, el scroll este arriba
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; // Este sirve para otros navegadores
}

function homePage(){
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}
function categoriesPage(){
    console.log('Categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
}
function movieDetailsPage(){
    console.log('Movie!!');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
}
function searchPage(){
    console.log('Search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // Este de abajo me sirve para separar un string y separarlo por lo que deseo 
    // si el string es search=thor => [search, thor]
    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);
}
function trendsPage(){
    console.log('Trends!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Tendencias';
    getTrendingMovies();
}