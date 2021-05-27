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

document.querySelector("#create-btn").onclick = e => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const body = {
        title
        , author
        , isbn
    };

    fetch("/books", {
        body: JSON.stringify(body)
        , method: 'POST'
        , headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(res => console.log(res))
}