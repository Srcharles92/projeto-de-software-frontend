window.onload = () => {

    // Captura os dados do formulário
    const form = document.getElementById("form");

    function cadastrarLivro(event) {

        event.preventDefault();

        // Captura os dados do formulário
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const published = document.getElementById('published').value;
        const qtPages = document.getElementById('qt_pages').value;
        const yearPublished = document.getElementById('year_published').value;



        // Cria um objeto com os dados
        const bookData = {
            title: title,
            author: author,
            published: published,
            qtPages: qtPages,
            yearPublished: yearPublished
        };
        console.log("BookData:: ", bookData);

        // Envia os dados para o backend usando fetch
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        }).then(res => {
            return res.json()
        }).then((data) => {
            console.log("RESPOSTA:: ", data);
            alert('Livro cadastrado com sucesso!');
        }).catch(error => {
            console.error('Erro ao cadastrar livro:', error);
            alert('Erro ao cadastrar livro. Tente novamente.');
        })


    }
    form.addEventListener("submit", cadastrarLivro);
}