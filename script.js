document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const btn = document.getElementById('btn');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

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

        try {
            // Envia os dados para o backend usando fetch
            const response = await fetch('http://localhost:4000/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });

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
