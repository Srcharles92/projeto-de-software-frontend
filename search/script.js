document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Captura o valor do título do input
        const title = form.querySelector('input[type="text"]').value;

        try {
            // Envia a requisição GET para o backend
            const response = await fetch(`http://localhost:4000/api/livros?title=${encodeURIComponent(title)}`);

            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                const data = await response.json();

                if (data.length > 0) {
                    // Monta uma mensagem legível para o alerta
                    let message = 'Livros encontrados:\n\n';
                    data.forEach((book, index) => {
                        message += `Livro ${index + 1}:\n`;
                        message += `Título: ${book.title}\n`;
                        message += `Autor: ${book.author}\n\n`;
                    });
                    alert(message);
                }else {
                    alert('Nenhum livro encontrado com esse título.');
                }
            } else {
                alert('Erro ao buscar o livro.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor.');
        }
    });
});
