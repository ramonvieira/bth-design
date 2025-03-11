# Menu de Contexto

## Estrutura

### Bloco

| Elemento | Classe         | Descrição           |
| :------- | :------------- | :------------------ |
| `<div>`  | `.bth-context` | Container principal |

### Elementos

| Elemento | Classe               | Descrição                       |
| :------- | :------------------- | :------------------------------ |
| `<ul>`  | `.bth-context__list` | Container dos items do contexto |

### Modificadores

| Elemento | Classe                | Descrição                       |
| :------- | :-------------------- | :------------------------------ |
| `<div>`  | `.bth-context--fixed` | Fixa o menu de contexto no topo |

## Como usar

### Padrão

```html
<!-- 
<div class="megamenu-container">
  [...]
</div>
-->
<div class="bth-context bth-context--fixed">
  <div class="container container-fluid">

    <!-- Botão opicional para fixar e desafixar -->
    <button class="btn btn-xs btn-link" title="Desafixar o menu">
      <i class="fa fa-fw fa-thumb-tack"></i>
    </button>

    <ul class="bth-context__list">
      <!-- Itens que compõem o contexto -->
      <li>
        <!-- Dropdown ou Select2 -->
      </li>
    </ul>

  </div>
</div>
```
