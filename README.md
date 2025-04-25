# Sistema de Controle de Estacionamento

Este é um sistema de controle de estacionamento simples e funcional, desenvolvido para ajudar a gerenciar as vagas de estacionamento em um condomínio. O sistema permite o cadastro de vagas, a listagem das vagas cadastradas e a remoção de vagas. O sistema utiliza apenas HTML, CSS e JavaScript puro, sem o uso de frameworks, com foco na prática de desenvolvimento front-end.

## Funcionalidades

### 1. Cadastro de Vaga

O sistema permite cadastrar uma vaga de estacionamento com as seguintes informações:
	•	Placa do veículo
	•	Nome do proprietário
	•	Número do apartamento
	•	Bloco do apartamento
	•	Modelo do veículo
	•	Cor do veículo
	•	Número da vaga de estacionamento

Ao cadastrar uma vaga, o sistema verifica se a placa já está cadastrada, impedindo duplicidade. Além disso, valida o comprimento da placa, garantindo que ela siga o formato correto de 7 caracteres.

### 2. Listagem de Vagas

Na página de listagem, todas as vagas cadastradas são exibidas em uma interface de grid responsivo, com dois cards por linha em telas grandes e um card por linha em dispositivos móveis. Cada card exibe informações detalhadas sobre a vaga, como a placa, nome do proprietário, apartamento, modelo do veículo e cor do veículo.

### 3. Remoção de Vagas

O sistema oferece a funcionalidade de remover uma vaga cadastrada. Para garantir que a remoção seja intencional, um alerta de confirmação é exibido antes de excluir a vaga. Após a remoção, a lista de vagas é atualizada automaticamente.

### 4. Responsividade

O layout do sistema é totalmente responsivo, adaptando-se para telas grandes e pequenas. Isso garante uma boa experiência de usuário em dispositivos móveis, com campos de entrada bem organizados e a exibição de informações de forma clara.

## Tecnologias Utilizadas
	•	HTML5 para estruturar as páginas.
	•	CSS3 para o design e layout responsivo, utilizando Flexbox e Grid.
	•	JavaScript para a lógica de interação, manipulação de dados e persistência utilizando localStorage.
