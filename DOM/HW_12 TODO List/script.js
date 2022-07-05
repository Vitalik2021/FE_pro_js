(() => {
    const buttonEl = document.getElementById("btn-el");
    const inputEL = document.getElementById("input-el");
    const listEl = document.getElementById("list-item");

    const actionBlock = document.getElementById("action-block");
    const bntCheckAll = document.getElementById("btn-checked-all");
    const bntDeletedAll = document.getElementById("btn-deleted-all");

    const deleteAll = () => {
        Array.from(listEl.children).forEach(e => e.remove());
        actionBlock.classList.add('hidden');
    }


    const checkAll = () => {
        Array.from(listEl.children).forEach(e => {
            e.classList.add('checked');
            e.children[0].checked = true;

        })
    };


    const addItem = () => {
        const value = inputEL.value;
        if (!value.trim()) return;

        if (listEl.childElementCount === 0) {
            actionBlock.classList.remove('hidden');
        }
        const liElement = document.createElement('li');
        inputEL.value = '';


        const spanElement = document.createElement('span');
        spanElement.innerText = value;


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check';
        checkbox.addEventListener('change', ev => {
            ev.target.parentElement.classList.toggle('checked');
        })


        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        deleteBtn.addEventListener('click', ev => {
            ev.target.parentElement.remove();
            if (listEl.childElementCount === 0) {
                actionBlock.classList.add('hidden');
            }
        });

        liElement.append(checkbox, spanElement, deleteBtn);
        listEl.append(liElement);
    };
    buttonEl.addEventListener('click', addItem);
    bntCheckAll.addEventListener('click', checkAll)
    bntDeletedAll.addEventListener('click', deleteAll);
})();


