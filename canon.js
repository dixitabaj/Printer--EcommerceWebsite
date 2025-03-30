var item=[{
    id:1,
    price:9000,
    sold:900
},
{id:2,
price:10000,
sold:10}
]
function popular(){
    return itrm.sold>90;
}
function filterItems() {
    var popularCheckbox = document.getElementById('popularCheckbox');
    var itemsContainer = document.getElementById('itemsContainer');
    
    // Filter items based on the checkbox state
    var filteredItems = items.filter(function(item) {
      return popularCheckbox.checked ? item.sold > 90 : true;
    });

    // Display filtered items
    itemsContainer.innerHTML = ''; // Clear previous items
    filteredItems.forEach(function (item) {
      itemsContainer.innerHTML += `<p>ID: ${item.id}, Price: $${item.price}, Sold: ${item.sold}</p>`;
    });
  }

  // Initially display all items
  filterItems();


