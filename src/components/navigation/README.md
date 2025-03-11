# Navigation

## Estrutura

### Bloco

| Elemento | Classe            | Descrição           |
| :------- | :---------------- | :------------------ |
| `<div>`  | `.bth-navigation` | Container principal |

### Modificadores

| Elemento | Classe                   | Descrição                |
| :------- | :----------------------- | :----------------------- |
| `<div>`  | `.bth-navigation--fixed` | Fixa a navegação no topo |

## Como usar

### Padrão

```html
<!-- / bth-context -->
<div class="bth-navigation bth-navigation--fixed">
    <div class="container container-fluid">
        <button class="btn btn-sm btn-link">
            <i class="material-icons">arrow_back</i>
        </button>
        <h1>Solicitação de acesso</h1>
        <ol class="breadcrumb">
            <li>Administrando</li>
            <li><a href="">Financeiro</a></li>
            <li class="active">Agências</li>
        </ol>
    </div>
</div>
```
