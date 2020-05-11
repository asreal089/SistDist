# SistDist

Repositorio para trabalhos de Sistemas Distribuidos

# Trabalho parte 1: Consumo de rest API:

Essa parte do trabalho consite em realizar consultas em APIs rest.
Para isso foi escolhido a API reqres.in

# Modo de uso:

O projeto é feito em Nodejs então para iniciar o projeto é necessário rodar o comando:

```
npm install
```

Apos isso é possível executar as consultas do proprio diretorio do projeto com os comando:

```
node restconsume/get.js
node restconsume/post.js
node restconsume/put.js
node restconsume/delete.js
```

A requisição delete é feita na api: https://jsonplaceholder.typicode.com/posts/1

# Trabalho parte 2: Consumo de API SOAP:

Essa parte do trabalho constitui consulta da api encontrada no link:
http://www.dneonline.com/calculator.asmx?WSDL

# Modo de uso:

O comando usado para carregar dependências, no caso a biblioteca "soap".

```
npm install
```

Executar consultas:

```
node soapconsume/consultaSoap.js
```
