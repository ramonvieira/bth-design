# Wizard

## Estrutura

### Bloco

| Elemento | Classe        | Descrição           |
| :------- | :------------ | :------------------ |
| `<ol>`   | `.bth-wizard` | Container principal |

### Elementos

| Elemento   | Classe               | Descrição               |
| :--------- | :------------------- | :---------------------- |
| `<li>`     | `.bth-wizard__item`  | Item da lista de etapas |
| `<button>` | `.bth-wizard__title` | Título da etapa         |
| `<i>`      | `.bth-wizard__icon`  | Ìcone opcional          |

### Modificadores

| Elemento   | Classe                        | Descrição                                         |
| :--------- | :---------------------------- | :------------------------------------------------ |
| `<ol>`     | `.bth-wizard--vertical`       | Alinha os itens um abaixo do outro                |
| `<ol>`     | `.bth-wizard--has-icon`           | Indica que os itens possuem ícones personalizados |
| `<button>` | `.bth-wizard__title--action`  | Indica que o título possui uma ação               |
| `<li>`     | `.bth-wizard__item--visited`  | Estado visitado do item                           |
| `<li>`     | `.bth-wizard__item--disabled` | Estado desabilitado do item                       |
| `<li>`     | `.bth-wizard__item--active`   | Estado ativo do item                              |
| `<li>`     | `.bth-wizard__item--danger`   | Estado com erro do item                           |
| `<li>`     | `.bth-wizard__item--checked`  | Estado checado do item                            |

## Como usar

### Padrão

```html
<ol class="bth-wizard">
  <li class="bth-wizard__item">
    <button class="bth-wizard__title bth-wizard__title--action">
      Item
    </button>
  </li>
</ol>
```

### Vertical

```html
<ol class="bth-wizard bth-wizard--vertical">
  <li class="bth-wizard__item">
    <button class="bth-wizard__title bth-wizard__title--action">
      Item
    </button>
  </li>
</ol>
```

### Item com erro

```html
<ol class="bth-wizard">
  <li class="bth-wizard__item">
    <button class="bth-wizard__title bth-wizard__title--action">
      Item
    </button>
  </li>
  <li class="bth-wizard__item bth-wizard__item--danger">
    <button class="bth-wizard__title bth-wizard__title--action">
      Item com erro
    </button>
  </li>
</ol>
```

### Item checado

```html
<ol class="bth-wizard">
  <li class="bth-wizard__item">
    <button class="bth-wizard__title bth-wizard__title--action">
      Item
    </button>
  </li>
  <li class="bth-wizard__item bth-wizard__item--checked">
    <button class="bth-wizard__title bth-wizard__title--action">
      Checado
    </button>
  </li>
</ol>
```

### Item com ícone

```html
<ol class="bth-wizard bth-wizard--has-icon">
  <li class="bth-wizard__item">
    <i class="material-icons bth-wizard__icon">accessibility</i>
    <button class="bth-wizard__title bth-wizard__title--action">
      Item
    </button>
  </li>
  <li class="bth-wizard__item bth-wizard__item--checked">
    <i class="fa fa-car bth-wizard__icon"></i>
    <button class="bth-wizard__title bth-wizard__title--action">
      Checado
    </button>
  </li>
</ol>
```
