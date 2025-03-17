# **TravelMaster ✈📱 **

O **TravelMaster** é um aplicativo de viagens desenvolvido como uma extensão de um desafio proposto pela **DevEx Soluções**. Inicialmente, o desafio consistia em criar uma página de login, mas decidi expandir a ideia para construir uma interface completa de um aplicativo de viagens, com funcionalidades como pesquisa de destinos, previsão do tempo, e muito mais.

O projeto está em constante desenvolvimento, e novas funcionalidades estão sendo implementadas, como a mudança de tema (Dark Mode) e a integração de mais APIs para enriquecer a experiência do usuário.

---

## **Funcionalidades Atuais**

### **1. Página de Login**
- Interface de login com validação de e-mail e senha.
- Redirecionamento para a página inicial após o login bem-sucedido.

### **2. Página de Cadastro**
- Formulário de cadastro com campos para nome, e-mail, senha, confirmação de senha e telefone.
- Validação de senha para garantir que as senhas coincidam.

### **3. Página Inicial**
- Pesquisa de destinos turísticos utilizando a API da **Unsplash**.
- Exibição de imagens e descrições dos destinos encontrados.
- Integração com a API da **OpenWeatherMap** para mostrar a previsão do tempo no destino pesquisado.

### **4. Header Dinâmico**
- Botões de Login e Cadastro são substituídos por uma imagem de usuário e uma mensagem de "Bem-vindo" após o login.
- Ícone de usuário que abre um **Sidebar** com opções como Perfil, Configurações, Ajuda e Logout.

### **5. Dark Mode**
- Botão para alternar entre os temas claro e escuro.


---

## **Tecnologias Utilizadas**

- **Next.js**: Framework React para construção de aplicações web modernas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **CSS Modules**: Para estilização modularizada e evitando conflitos de classes.
- **Context API**: Para gerenciamento de estado global (como o tema escuro/claro).
- **APIs Externas**:
  - **Unsplash**: Para buscar imagens de destinos turísticos.
  - **OpenWeatherMap**: Para obter a previsão do tempo nos destinos pesquisados.

---

## **Próximas Funcionalidades**

O projeto está em desenvolvimento ativo, e as seguintes funcionalidades estão planejadas:

### **1. Integração de Mais APIs**
- **Skyscanner**: Para buscar voos e preços.
- **Amadeus**: Para buscar hotéis e atividades turísticas.

### **2. Melhorias no Dark Mode**
- Aplicar o tema escuro em todos os componentes de forma consistente.
- Adicionar transições suaves ao alternar entre temas.

### **3. Páginas Adicionais**
- **Perfil do Usuário**: Onde o usuário pode editar suas informações.
- **Configurações**: Para personalizar a experiência no aplicativo.
- **Ajuda**: Página com FAQs e suporte ao usuário.

### **4. Internacionalização**
- Adicionar suporte a múltiplos idiomas.

### **5. Responsividade**
- Garantir que o aplicativo funcione bem em dispositivos móveis e tablets.

### **6. Sidebar** (Constru
- Menu lateral que exibe opções relacionadas ao TravelMaster.
- Acessível ao clicar no ícone de usuário no Header.


---

## **Como Executar o Projeto**

### **Pré-requisitos**
- Node.js instalado (versão 14 ou superior).
- Yarn ou npm instalado.

### **Passos para Executar**

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/Formulario-Login.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd travelmaster
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione as chaves das APIs:

   ```env
   UNSPLASH_API_KEY=sua_chave_unsplash
   OPENWEATHER_API_KEY=sua_chave_openweather
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

6. Acesse o aplicativo no navegador:

   ```
   http://localhost:3000
   ```


---

## **Contribuição**

Contribuições são bem-vindas! Se você quiser contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## **Contato**

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Nome**: [Maria Evellyn]
- **E-mail**: [evesilva.contato@gmail.com]
- **GitHub**: [seu-usuario](https://github.com/EveeSilvaa)


**TravelMaster** é um projeto em constante evolução, e estou animada para ver até onde ele pode chegar! 🚀


