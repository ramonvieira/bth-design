# bth-design (base)

Repositório centralizador dos componentes css da versão 4 do bth-design.

## Como usar

| Método | Instrução |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **yarn**  | `yarn add --save bth-design@latest`                                                                            |
| **bower*** | `bower install bth-design --save`                     |
| **npm**   | `npm install --save bth-design@latest`                                                                              |

\* Bower necessita configuração local

### Observações
 - O _CSS_ deve ser inserido antes dos estilos específicos da aplicação.
 - O _JS_ deve vir após o base front-end disponibilizado pelo P&D.

```html
<head>
[...]
	<link rel="stylesheet" href="[caminho_do_projeto]/dist/bth-design.css" />
	<link rel="stylesheet" href="sys.css" />
[...]
</head>
<body>
[...]
  <!-- Estrutura da aplicação -->
  <!-- Base Front-end -->
	<script src="[caminho_do_projeto]/dist/bth-design.js"></script>
  <!-- Demais js da aplicação -->
</body>
```

<br>
<br>

## Como colaborar

Se você tem interesse em contribuir com o `bth-design` (base), sugerimos seguir o guia de [Boas práticas](https://gitlab.services.betha.cloud/design/documentacao/boas-praticas)

------

### Baixando o projeto

```shell
git clone https://gitlab.services.betha.cloud/design/framework/bth-design.git
```
### Ações dentro do projeto

Baixando repositórios
```shell
npm install
```

Compilando localmente
```shell
npm run build
```

Compilando para test
```shell
npm run build:test
```

Compilando para produção
```shell
npm run build:prod
```

Compilando apenas `bth-design.js / bth-design.css`
```shell
npm run build-global
```

Compilando apenas os componentes
```shell
npm run build-components
```

Executando o linter
```shell
npm run lint
```

<br>
<br>

# Changelog

### 4.0.5

> Correções e ajustes. 

* fix: issue #97

### 4.0.4

> Correções e ajustes. 

* fix: issue #96

### 4.0.3

> Correções e ajustes. 

* fix: issues #91, #92, #93 e #95

### 4.0.2

> Correções e ajustes. 

* fix: issues #86 e #87

### 4.0.1

> Correções e ajustes. 

* fix: issues #83, #84 e #85

### 4.0.0

> Correções e ajustes. 

* fix: ajustes gerais na paleta de cores e tags dos nomes dos produtos
* fix: visual dos cards da visão geral
* fix: visual do componente `bth-switch`
* fix: visual do componente `wizard`
* feat: adicionado arquivo JS com os tokens de cores


### 4.0.0-alpha3

> Correções. 

* fix: apontamento assets do cdn do ambiente de test


### 4.0.0-alpha2

> Correções e ajustes. 

* fix: bordas do select2
* fix: radius da modal
* fix: cor do estado [info] da tabela
* fix: logo da Betha do rodapé
* fix: visual dos cards do componente `products`


### 4.0.0-alpha1

> Adequações visuais conforme o novo reposicionamento da marca da Betha (Rebranding). 

* feat: adequação das cores das áreas e do theme
* feat: adequação visual do Menu e dos utilitários
* feat: adicionado arredondamento (radius)
* feat: novo visual dos cards da visão geral
* feat: novo visual da tag da marca do produto
