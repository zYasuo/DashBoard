// public/js/fetchData.js

/**
 * Busca "ocorrencias" da API e as exibe em formato de cartões.
 */
function fetchOcorrenciasAndDisplay() {
    // Realiza uma chamada à API para obter as "ocorrencias"
    fetch('/api/ocorrencias')
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta da rede não foi satisfatória.');
            }
            return response.json();
        })
        .then(ocorrencias => {
            const ocorrContainer = document.getElementById('ocorrContainer');

            // Itera sobre cada "ocorrencia" e cria um cartão para ela
            ocorrencias.forEach(ocorr => {
                // Cria um cartão
                const card = document.createElement('div');
                card.className = "bg-white rounded overflow-hidden shadow-md p-4";

                // Cria e estiliza o conteúdo para "assunto"
                const assuntoEl = document.createElement('h2');
                assuntoEl.textContent = `Assunto: ${ocorr.assunto}`;
                assuntoEl.className = "text-xl font-bold mb-2";

                // Cria e estiliza o conteúdo para "vlan"
                const vlanEl = document.createElement('p');
                vlanEl.textContent = `VLAN: ${ocorr.vlan}`;
                vlanEl.className = "mb-2";

                // Cria e estiliza o conteúdo para "assinantes"
                const assinantesEl = document.createElement('p');
                assinantesEl.textContent = `Assinantes: ${ocorr.assinantes}`;

                // Adiciona os elementos ao cartão
                card.appendChild(assuntoEl);
                card.appendChild(vlanEl);
                card.appendChild(assinantesEl);

                // Adiciona o cartão ao contêiner
                ocorrContainer.appendChild(card);
            });
        })
        .catch(err => console.error("Erro ao buscar ocorrências:", err));
}

// Chama a função quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", fetchOcorrenciasAndDisplay);




// Chama a função quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", fetchOcorrenciasAndDisplay);
