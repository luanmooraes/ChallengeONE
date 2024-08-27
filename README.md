# Decodificador de Texto

Este projeto é uma aplicação web simples que permite aos usuários criptografar e descriptografar textos utilizando a codificação Base64. A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript, e possui uma interface intuitiva e moderna.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Exemplos de Uso](#exemplos-de-uso)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Funcionalidades

- **Criptografia de Texto:** Permite criptografar textos usando a codificação Base64. Apenas letras minúsculas e espaços são permitidos.
- **Descriptografia de Texto:** Permite descriptografar textos que foram criptografados anteriormente usando Base64.
- **Cópia para a Área de Transferência:** Após a criptografia, o texto criptografado pode ser copiado para a área de transferência com um clique.
- **Exibição de Resultados:** O resultado da criptografia ou descriptografia é exibido na interface do usuário.
- **Validação de Entrada:** Gera mensagens de erro para entradas inválidas, como o uso de letras maiúsculas ou caracteres especiais.

## Tecnologias Utilizadas

- **HTML:** Utilizado para a estrutura da página e elementos semânticos.
- **CSS:** Utilizado para estilização da interface e layout responsivo.
- **JavaScript:** Utilizado para implementar as funcionalidades de criptografia, descriptografia e interação com o usuário.

## Estrutura do Projeto

```
DecodificadorTexto/
│
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Arquivo CSS para estilização
├── index.js            # Arquivo JavaScript com as funcionalidades
└── README.md           # Documentação do projeto
```

## Instalação

Não é necessário instalar nenhuma dependência para rodar este projeto. Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador moderno.

1. Clone este repositório:

   ```bash
   git clone https://github.com/luanmooraes/ChallengeONE.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd decodificador-texto
   ```

3. Abra o arquivo `index.html` no seu navegador:

   ```bash
   open index.html
   ```

## Como Usar

1. **Criptografar Texto:**
   - Digite o texto que deseja criptografar no campo "Criptografar Texto".
   - Clique no botão "Criptografar".
   - O texto criptografado será exibido no campo "Texto Criptografado" e no campo "Descriptografar Texto".

2. **Descriptografar Texto:**
   - Digite ou cole o texto criptografado no campo "Descriptografar Texto".
   - Clique no botão "Descriptografar".
   - O texto original será exibido no campo "Criptografar Texto".

3. **Copiar Texto Criptografado:**
   - Após criptografar um texto, clique no botão "Copiar" para copiar o texto criptografado para a área de transferência.

## Exemplos de Uso

- **Entrada:** "ola mundo"
- **Saída Criptografada:** "b2xhIG11bmRv"
- **Saída Descriptografada:** "ola mundo"

## Contribuindo

Contribuições são bem-vindas! Se você tem alguma ideia para melhorar este projeto, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

Para contribuir:

1. Faça um _fork_ do projeto.
2. Crie uma nova _branch_ com a sua funcionalidade/correção: `git checkout -b minha-feature`.
3. Faça o _commit_ das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça um _push_ para a _branch_: `git push origin minha-feature`.
5. Abra um _pull request_.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
