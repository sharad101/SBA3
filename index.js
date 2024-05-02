document.addEventListener('DOMContentLoaded', function() {
    const itemsList = document.getElementById('itemsList');
    const addItemForm = document.getElementById('addItemForm');
    const itemInput = document.getElementById('itemInput');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newItemText = itemInput.value.trim();
        if (newItemText) {
            const newItem = createListItem(newItemText);
            itemsList.appendChild(newItem);
            itemInput.value = '';
        }
    });

    function createListItem(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', function() {
            listItem.remove();
        });

        listItem.appendChild(deleteBtn);
        return listItem;
    }

    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.parentElement.remove();
        });
    });

    itemsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    console.log('Document URL:', document.URL);
    console.log('Window width:', window.innerWidth);
});
