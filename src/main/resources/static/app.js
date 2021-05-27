document.querySelector("#loadBooks").onclick = () => {
    fetch("/books")
        .then(res => res.json())
        .then(res => {
            let body = '';
            res.forEach(b => {
                body += `
            <tr>
                <td>${b.title}</td>
                <td>${b.author}</td>
                <td>${b.isbn}</td>
                <td>
                    <button class="btn-edit" data-id="${b.id}">Edit</button>
                    <button class="btn-delete" data-id="${b.id}">Delete</button>
                </td>
            </tr>`;
            });

            document.querySelector("#main-tbody").innerHTML = body;
        })
}