# Grid

## Estrutura

| Elemento                 | Classe                       | Descrição                                                                                       |
| :----------------------- | :--------------              | :---------------------------------------------------------------------------------------------- |
| `<body>`                 | `.bf-main`                   | Principal classe da estrutura, responsável por manter a consistência na segunda camada de grids |
| `<aside>`                | `.bf-menu--vertical`         | Container do menu vertical                                                                      |
| `<section>`              | `.bf-menu--horizontal`       | Container do menu horizontal                                                                    |
| `<section>`              | `.bf-container`              | Container do conteúdo, posiciona o contexto, título e o conteúdo da página                      |
| `<header>`               | `.bf-header`                 | Cabeçalho da página que pode conter contexto, título e breadcrumb.                              |
| `<section>`              | `.bf-content`                | Container da página com o conteúdo da aplicação (listagens, cadastros, dashboards etc)          |

### Modificadores

| Elemento | Classe                 | Descrição                                                |
| :------- | :--------------------- | :------------------------------------------------------- |
| `<div>`  | `.row-flex`            | Altera o display da coluna para flex                     |
| `<div>`  | `.row-nowrap`          | Utilizado junto com `.row-flex`, evita a quebra de linha |
| `<div>`  | `.col-divider-left`    | Acrescenta uma borda divisória a esquerda da coluna      |
| `<div>`  | `.col-divider-right`   | Acrescenta uma borda divisória a direita da coluna       |

## Exemplos

### Estrutura básica da grid

```html
<body class="bf-main">  
  <section class="bf-menu--horizontal"></section>
  <aside class="bf-menu--vertical"></aside>
  <section class="bf-container">
    <header class="bf-header">
      <!-- 
        Container dos elementos bthContext e/ou bthNavigation
       -->
    </header>
    <section class="bf-content">
      <!-- 
        Container geral dos elementos (listagens, dashboards, cadastros em tela...)
       -->
    </section>
  </section>
</body>
```
