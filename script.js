document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const btn = document.getElementById('btn');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Captura os dados do formulário
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publisher = document.getElementById('publisher').value;
        const pages = document.getElementById('pages').value;
        let year_published = document.getElementById('year_published').value;

        
        year_published = year_published.split("-")[0];
        console.log(year_published);

        // Cria um objeto com os dados
        const bookData = {
            title: title,
            author: author,
            publisher: publisher,
            pages: pages,
            year_published: year_published
        };
        console.log(bookData);

        try {
            // Envia os dados para o backend usando fetch
            const response = await fetch('http://localhost:4000/api/livros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });

            console.log("response:: ", response)

            if (response.ok) {
                const result = await response.json();
                console.log('Livro cadastrado com sucesso:', result);
                alert('Livro cadastrado com sucesso!');
                form.reset(); // Limpa o formulário após o envio
            } else {
                console.error('Erro ao cadastrar livro:', response.statusText);
                alert('Erro ao cadastrar livro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados. Tente novamente.');
        }
    });
});