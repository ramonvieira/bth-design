# Tag

## Estrutura

### Bloco

| Elemento | Classe     | Descrição           |
| :------- | :--------- | :------------------ |
| `<div>`  | `.bth-tag` | Container principal |

### Elementos

| Elemento | Classe            | Descrição                                            |
| :------- | :---------------- | :--------------------------------------------------- |
| `<a>`    | `.bth-tag__close` | Ação de remover/excluir                              |
| `<ul>`   | `.bth-tag__list`  | Container que estrutura uma lista horizontal de tags |
| `<span>` | `.bth-tag__type`  | Estiliza um possível tipo/categoria                  |
| `<small>` | `.bth-tag__more`  | Estiliza o link para mais termos em uma mesma tag   |

### Modificadores

| Elemento          | Classe                           | Descrição                                           |
| :---------------- | :--------------------------------| :-------------------------------------------------- |
| `<a> ou <button>` | `.bth-tag--hover`                | Estiliza o componente quando o mouse está sobre ele |
| `<span>`          | `.bth-tag--show-on-action`       | Estiliza o componente como hover quando o mouse está sobre outro componente |
| `<span>`          | `.bth-tag--start`                | Estilo para filtros (Inicia com)                    |
| `<span>`          | `.bth-tag--strike`               | Estilo para filtros (Exceto)                        |
| `<span>`          | `.bth-tag--end`                  | Estilo para filtros (Termina com)                   |
| `<span>`          | `.bth-tag--exact`                | Estilo para filtros (Exatamente)                    |
| `<span>`          | `.bth-tag--fixed-width`          | Estilo para filtros (Largura fixa)                  |

## Como usar

### Padrão

```html
<ul class="bth-tag__list">
    <li>
    <span class="bth-tag bth-tag--hover">
        <span class="bth-tag__type">Título</span>
        <span class="text-strike">Romances/Ap Cultura</span>
        <a href="" class="bth-tag__close">✕</a>
    </span>
    </li>
    <li>
    <span class="bth-tag bth-tag--hover">
        <span class="bth-tag__type">Título</span>
        Editora Rocco
        <small class="bth-tag__more">
            e mais
            <a href="">
                x itens
            </a>
        </small>
        <a href="" class="bth-tag__close">✕</a>
    </span>
    </li>
</ul>
```
