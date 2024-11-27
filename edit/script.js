document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publisher = document.getElementById('publisher').value;
        const pages = document.getElementById('pages').value;
        let year_published = document.getElementById('year_published').value;

        
        const bookId = prompt("Digite o ID do livro a ser editado:");

        year_published = year_published.split("-")[0]; 
        console.log(year_published);

        
        const bookData = {
            title,
            author,
            publisher,
            pages,
            year_published
        };
        console.log("Dados para envio:", bookData);

        try {
            const response = await fetch(`http://localhost:4000/api/livros/${bookId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            });

            
            if (response.ok) {
                const result = await response.json();
                console.log('Livro atualizado com sucesso:', result);
                alert('Livro atualizado com sucesso!');
                form.reset(); 
            } else {
                console.error('Erro ao atualizar livro:', response.statusText);
                alert('Erro ao atualizar livro. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Erro ao enviar dados. Tente novamente.');
        }
    });
});
