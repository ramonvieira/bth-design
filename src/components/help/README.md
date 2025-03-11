# Help

## Estrutura

### Bloco

| Elemento | Classe      | Descrição           |
| :------- | :---------- | :------------------ |
| `<div>`  | `.bth-help` | Container principal |

### Elementos

| Elemento | Classe              | Descrição |
| :------- | :------------------ | :-------- |
| `<div>`  | `.bth-help__header` | Cabeçalho |
| `<div>`  | `.bth-help__body`   | Corpo     |
| `<div>`  | `.bth-help__footer` | Rodapé    |

### Modificadores

| Elemento | Classe                | Descrição                                          |
| :------- | :-------------------- | :------------------------------------------------- |
| `<div>`  | `.bth-help--animated` | Aplica a animação de entrada                       |
| `<div>`  | `.bth-help--modal`    | Indica que o estilo do componente é para uma modal |
| `<div>`  | `.bth-help--right`    | Alinha à direita da modal                          |

## Como usar

### Padrão

```html
<div class="bth-help bth-help--animated bth-help--modal bth-help--right hidden-xs">
    <div class="bth-help__header">
        <!-- Imagem auxiliar -->
        <img width="100%" src="arquivo.gif" alt="">
    </div>
    <div class="bth-help__body">
        <h4>Olá!</h4>
        <p>
        Aqui na configuração de filtros você pode organizá-los da maneira que preferir e ainda exibir apenas os que
        desejar.
        </p>
    </div>
    <div class="bth-help__footer text-right">
        <button class="btn btn-default">Ok, entendi</button>
    </div>
</div>
```
