Por que você está recebendo este documento?

A Análise da aplicação é necessária pois assim como as linguagens temos que nos comunicar com outras entidades que podem se expressar de forma diferente. 
Este documento relata a análise de requisitos, o que a aplicação deve ou não conter e o que ela precisa para realmente ser entregue ao cliente. 
Com este relátorio podemos desenvolver uma aplicação que terá a maior porcentagem de aceitação pelo cliente. As necessidades do mesmo devem sim ser desenvolvidas pois sem elas não há aplicação. 
Podemos identidicar falhas de produção e aumentar a taxa de entrega até mesmo antes do prazo exigido. 

===== Análise de componentes ===== 

O Projeto deve ser desenvolvido em HTML, CSS, JS, VUE, utilizando AXIOS, VUEX e API de localizades do IBGE. 

Data final solicitada para entrega:  30/11/22
Data prevista para entrega: 29/11/22 

A aplicação deve receber commit no Github e encaminhado o link via e-mail 

O design da aplicação não foi classificado como prioridade. Caso fosse, a especificação do usuário seria implementada na sessão Requisitos do usuário


	*** Requisitos do Produtos ***

 *** REQUISITOS DO USUÁRIO: ***

FUNCIONAIS 

1.0 = O usuário deve ser capaz de pesquisar todos os Estados do Brasil e após isto ,

1.1 = receber todas as Cidades que correspondem ao Estado selecionado.

1.2 = Ele receberá uma mensagem de Boas vindas à Cidade selecionada 

1.3 = O cliente não deve receber informações sem a reação de clicar nas caixas seletoras 

		*** Design ***

Não classificada como necessário


 *** NÃO FUNCIONAIS ***

	 *** REQUISITOS DE SISTEMAS:  *** 

 *** REQUISITOS FUNCIONAIS ***

1.0 = popule um Combobox com todas as unidades da federação;

1.1 = Quando o usuário selecionar uma unidade da federação, 
popule outro combobox com a lista de Cidades

1.2 = Quando o usuário selecionar uma cidade, exiba em uma caixa de diálogo “Seja Bem Vindo a: {nome da cidade}”

1.3 = Utilizando a API do Governo de UFs (API de localidades 

1.4 = (ibge.gov.br))

1.5 = Crie dois componentes distintos para organizar seu projeto;

1.6 = Utilize a biblioteca AXIOS paras fazer as chamadas as API’s;

1.7 = Utilize o VUEX para gerenciar o estado da aplicação 

		*** Design Frontend ***

Não classificada como necessário

Background-image: 

url(https://aerospaceamerica.aiaa.org/wp-content/uploads/2022/09/Flight-Path_0000_iStock-1085287936-1200x675.jpg); e CSS

Globo: Planeta em rotação 

Utilizado background-image: url(https://tecterra.com.br/wp-content/uploads/2018/10/mapa-3d.jpg); e CSS




 *** NÃO FUNCIONAIS ***
 

   ===== Especificação de requisitos Não funcionais ===== 

	*** Requisitos do Produtos ***

=== Requisitos do Produtos ===

 O usuário não deve receber na caixa de seleção de Cidades, TODAS as Cidades do Brasil e sim, somente as Cidades correspondentes do Estado (UF) Selecionado.

=== Requisitos de Eficiência ===

0.9 = O usuário deve ser capaz de receber a resposta dentro de no máximo 2 segundos

1.0 = A caixa de seleção não deve conter Estados e Cidades de outros páises, somente do Brasil

=== Requisitos de confiabilidade ===

-- Não deve estar vinculado à HTTP e sim à HTTPS com selo 
-- Não pode haver mais de 0,01% ao Ano de inoperabilidade do sistema 
-- Taxa de ocorrência de falhas 1% ao mês 
-- 


=== Requisitos de portabilidade ===

- A aplicação deve ter acesso facil a Windows, Linux, Android, Iphone. 
- Não deve funcionar para Xbox, ps4 e outros games. 

=== Requisitos de facilidade de uso ===

- O design não deve conter anúncios e informações irrelevantes, somente o conteúdo direto ao ponto 
-- A aplicação deve ser testada e treinada

=== Requisitos de desempenho ===

-- A aplicação deve ter um tempo de resposta em milisegundos

=== Requisitos de espaço ===

A aplicação não deve passar de 1GB

	*** Requisitos Organizacionais ***

=== Requisitos Organizacionais ===

-- O sistema deve ser implementado em Cloud, tendo preferência para Google Cloud, AWS ou Azure

=== Requisitos de Entrega ===

Data final solicitada para entrega:  30/11/22

=== Requisitos implementação ===

A aplicação deve receber commit no Github e encaminhado o link via e-mail 

=== Requisitos de Padrões ===

O Projeto deve ser desenvolvido em HTML, CSS, JS, VUE, utilizando AXIOS, VUEX e API de localizades do IBGE. Ferramenta VS CODE

	*** Requisitos Externos ***

=== Requisitos de interoperabilidade ===

-- NÃO ACEITA API QUE NÃO FOR DO IBGE com informações Legais 

=== Requisitos Éticos ===

- O usuário deve ser independente, outros usuários não poderão ter acesso ao que ele está vendo

- Não conter conteúdo explícito
	
=== Requisitos Legais ===

- Em caso de dados gravados por erro, não disponibilizar dados do usuário. GPD

=== Requisitos de Privacidade ===

- Não solicitar localização do usuário

- A localização do usuário não deve ser exibida 

=== Requisitos de segurança ===

- Não registrar dados do usuário


=== ALTERAÇÕES NOS REQUISITOS === 

A aplicação apresenta um desing; e também as caixas de seleção, porém na versão 1.0 ela não possuirá interação de Estados com as Cidades ( Acompanhe mais no tópico Solicitações pendêntes)


 *** DESENVOLVIMENTO E INTEGRAÇÃO *** 

Incrementos : 

Versão 0.1 

1.0 = Design do TODO
2.0 = Seletor de UFs
3.0 = Seletor de Cidade
---------------------------
Versão 1.0

1.0 = Design do TODO
2.0 = Seletor de UFs
3.0 = Seletor de Cidade
4.0 = caixa de diálogo “Seja Bem Vindo a: {nome da cidade}

---------------------------

Versão 1.1

1.0 = Design do TODO
2.0 = Seletor de UFs
3.0 = Seletor de Cidade
4.0 = caixa de diálogo “Seja Bem Vindo a: {nome da cidade}
5.0 = Interação entre a caixa de seleção de UFs e Cidades

---------------------------

Dependências; importações; codes internos necessários: 

NODE.JS - utilização do npm
VUE - Codificação
Vuex
Axios - Importação da API
Gihub - Exportação de conteúdo

{ Códigos principais :

vue create 
npm run build

A aplicação foi estruturada no VSCode utilizando prompt vue create {nome do arquivo(Chapeu__seletor)} para instalação de dependências. 

      		  ==== VALIDAÇÃO  ==== 

	 *** Solicitações pendêntes: ***

Serão desenvolvidas na próxima versão 1.1


 *** O que não pode ser entregue na versão 1.0 da aplicação  *** 

Vamos desenvolver juntos? 

Obs: Devido minhas limitações de aprendizado houve requisitos que não puderam ser atendidos na primeira entrega deste projeto.
Mas o desenvolvimento é assim, certo? Vamos consertar isto. 

Após muita pesquisa não pude desenvolver os itens da listagem abaixo, mas eu gostaria que você desse uma olhada no código fonte e me ajudasse a entender como eu poderia implementar no meu código. (Quando puder, é claro)
Isto é importante para mim, gosto de entregar um projeto sabendo que os problemas que o código apresentou foram resolvidos. 


1. Quando o usuário selecionar uma unidade da federação, popule outro combobox com a lista de Cidades: 

O combobox com a listagem de Unidades e outro com as Cidades foi implementado, porém a interação entre os combobox não foi possível via Vue, como eu poderia fazer esta interação via Vuex? 

PESQUISA PARA ANDAMENTO - 

Até o momento, a versão 1.0 entrega a necessidade do usuário?

() 1. SIM  
() 2. NÃO
() 3. MAIS OU MENOS
() 4. TOTALMENTE 

Por gentileza, especifíque sua resposta: 

-----
		===VERIFICAÇÃO DE SISTEMA===


Até o momento, as funcionalidades da versão 1.0 estão definidas corretamente?

() 1. SIM  
() 2. NÃO
() 3. MAIS OU MENOS
() 4. TOTALMENTE 

Por gentileza, especifíque sua resposta: 
	

	==== TESTE ==== 

Ainda sobre a minha limitação, não foi possível implementar o serviço na nuvem para teste. Está havendo um erro referente ao Axios, porém já foi reinstalado o mesmo na aplicação. Ainda não foi encontrado solução para isto.

A aplicação foi implementada no Github, onde você consegue visualizar e baixar o código da aplicação. 

Observei que o Github não sobe a pasta node_modules, que após um teste confirmo que a aplicação não funciona sem ela. 
Esta pasta é contém muitos arquivos, onde os Devs orientão a coloca-la no ignore-git. Talvez seja o motivo que o GitHub não abra a aplicação na web. Eu utilizo um site grátis (netlify) para donwload do site, onde consigo hospedar os meus sites testes. Porém, ele também não permite subir a aplicação constando erro axios. 

Poderia me ajudar? 



	==== EVOLUÇÃO ==== 


	



