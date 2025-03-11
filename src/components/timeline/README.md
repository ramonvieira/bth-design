# Timeline

## Estrutura

### Bloco

| Elemento | Classe          | Descrição           |
| :------- | :-------------- | :------------------ |
| `<div>`  | `.bth-timeline` | Container principal |

### Elementos

| Elemento                        | Classe                 | Descrição                                       |
| :------------------------------ | :--------------------- | :---------------------------------------------- |
| `<div>`                         | `.bth-timeline__nav`   | Container da navegação                          |
| `<ul>`                          | `.bth-timeline__list`  | Compreende os itens da timeline                 |
| `<li>`                          | `.bth-timeline__item`  | Item da lista                                   |
| `<ul>`                          | `.bth-timeline__flags` | Container dos avisos e indicadores de cada item |
| `<button>`, `<a>` ou `<h[1-6]>` | `.bth-timeline__title` | Título do item                                  |

#### Versão Horizontal

| Elemento | Classe                 | Descrição                                       |
| :------- | :--------------------- | :---------------------------------------------- |
| `<ul>`   | `.bth-timeline__flags` | Container dos avisos e indicadores de cada item |

#### Versão Vertical

| Elemento | Classe                 | Descrição                      |
| :------- | :--------------------- | :----------------------------- |
| `<div>`  | `.bth-timeline__desc`  | Descrição complementar do item |
| `<li>`   | `.bth-timeline__month` | Container do mês               |
| `<li>`   | `.bth-timeline__date`  | Container do dia               |
| `<span>` | `.bth-timeline__time`  | Container da hora              |
| `<span>` | `.bth-timeline__icon`  | Container do ícone             |
| `<span>` | `.bth-timeline__img`   | Container da imagem            |

### Modificadores

| Elemento   | Classe                          | Descrição                               |
| :--------- | :------------------------------ | :-------------------------------------- |
| `<div>`    | `.bth-timeline--vertical`       | Alinha os itens um abaixo do outro      |
| `<div>`    | `.bth-timeline--timeless`       | Remove espaçamento da lateral esquerda  |
| `<div>`    | `.bth-timeline--has-icon`       | Acrescenta espaço entre o título e o nó |
| `<button>` | `.bth-timeline__title--action`  | Indica que o título possui uma ação     |
| `<li>`     | `.bth-timeline__item--visited`  | Estado visitado do item                 |
| `<li>`     | `.bth-timeline__item--disabled` | Estado desabilitado do item             |
| `<li>`     | `.bth-timeline__item--active`   | Estado ativo do item                    |

## Como usar

### Padrão

```html
<div class="bth-timeline">
  <div class="bth-timeline__nav">
    <button class="btn btn-sm btn-link">
      <i class="material-icons">keyboard_arrow_left</i>
    </button>
    <a href="#">2018</a>
    <button class="btn btn-sm btn-link">
      <i class="material-icons">keyboard_arrow_right</i>
    </button>
  </div>
  <ul class="bth-timeline__list">
    <li class="bth-timeline__item">
      <button class="bth-timeline__title bth-timeline__title--action">
        Item
      </button>
      <ul class="bth-timeline__flags">
        <li>
          <i class="fa fa-fw fa-exclamation tx__red" title="Atenção"></i>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

### Vertical

```html
<div class="bth-timeline bth-timeline--timeless bth-timeline--vertical">
  <ul class="bth-timeline__list">
    <li class="bth-timeline__item">
      <button class="bth-timeline__title bth-timeline__title--action">
          Item
      </button>
    </li>
  </ul>
</div>
```

### Vertical com descrição

```html
<div class="bth-timeline bth-timeline--timeless bth-timeline--vertical">
  <ul class="bth-timeline__list">
    <li class="bth-timeline__item">
      <a class="bth-timeline__title bth-timeline__title--action">
        Lorem ipsum dolor sit amet.
      </a>
      <div class="bth-timeline__desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolore eligendi eum consectetur consequuntur saepe.
      </div>
    </li>
  </ul>
</div>
```

### Vertical com data e hora

```html
<div class="bth-timeline bth-timeline--vertical">
  <ul class="bth-timeline__list">

    <li class="bth-timeline__month">
      <span class="badge badge-default">Fevereiro/2018</span>
    </li>

    <li class="bth-timeline__date">
      <div>Sáb, 02/05</div>
    </li>

    <li class="bth-timeline__item">
      <span class="bth-timeline__time">
        16:57:07
      </span>
      <a href="" class="bth-timeline__title bth-timeline__title--action">
        Lorem ipsum dolor,
      </a>
      <div class="bth-timeline__desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolore eligendi eum consectetur consequuntur saepe.
      </div>
    </li>
  </ul>
</div>
```


### Vertical com data, hora e ícone

```html
<div class="bth-timeline bth-timeline--vertical bth-timeline--has-icon">
  <ul class="bth-timeline__list">
    <li class="bth-timeline__month">
      <span class="badge badge-default">Fevereiro/2018</span>
    </li>
    <li class="bth-timeline__date">
      <div>Sáb, 02/05</div>
    </li>
    <li class="bth-timeline__item">
      <span class="bth-timeline__icon">
        <i class="material-icons">bug_report</i>
      </span>
      <span class="bth-timeline__time">
        16:57:07
      </span>
      <a href="" class="bth-timeline__title bth-timeline__title--action">
        MECD-204, Melhoria
      </a>
      <div class="bth-timeline__desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dolore eligendi eum consectetur consequuntur saepe.
      </div>
    </li>
  </ul>
</div>
```

### Vertical com conteúdo agrupado

```html
<div class="bth-timeline bth-timeline--vertical">
  <ul class="bth-timeline__list">
    <li class="bth-timeline__item">
      <span class="bth-timeline__time">
        16:57:07
      </span>
      <div class="bth-card bth-card--collapse bth-card--bordered">
        <div class="bth-card__header bth-card__header--opened">
          <h4>
            MECD-204, Melhoria - Desenvolver funcionalidade de mover
          </h4>
        </div>
        <div class="bth-card__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates quisquam iusto mollitia vel eum, illum nobis repellendus
          harum, aut quis. Sapiente reiciendis fugit ipsum tempora quae dolorem omnis quod.
        </div>
      </div>
    </li>
  </ul>
</div>
```
