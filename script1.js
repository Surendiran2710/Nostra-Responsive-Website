

//offer bar
var offer = document.getElementById("offer")

document.getElementById("offer-close").addEventListener("click", function () {
    offer.style.display = "none"
})



//Selecting Sidenavbar, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})


//filter-ckeckbox, Search-box


document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});
document.getElementById('search-box').addEventListener('input', filterProducts);

function filterProducts() {
    const selectedFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
    const searchQuery = document.getElementById('search-box').value.toLowerCase();

    document.querySelectorAll('.product-item').forEach(item => {
        const itemTags = item.getAttribute('data-tags').split(' ');
        const itemName = item.getAttribute('data-name').toLowerCase();
        const itemPrice = item.getAttribute('data-price');

        // Check if the item matches any selected filters or search query
        const matchesFilters = selectedFilters.length === 0 || selectedFilters.some(filter => itemTags.includes(filter));
        const matchesSearch = itemName.includes(searchQuery) || itemPrice.includes(searchQuery);

        item.style.display = matchesFilters && matchesSearch ? 'block' : 'none';
    });
}

