function searchClick(){

    const list = document.getElementById("clicked").classList;

    if (list.contains('search-result')) {
        list.add("search-result-clicked");
        list.remove("search-result");
    } else {
        list.add("search-result");
        list.remove("search-result-clicked");
    }
}
document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checked');
    });
});