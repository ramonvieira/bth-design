# Alert

## Estrutura

### Bloco

| Elemento | Classe   | Descrição           |
| :------- | :------- | :------------------ |
| `<div>`  | `.alert` | Container principal |

### Elementos

| Elemento   | Classe        | Descrição          |
| :--------- | :------------ | :----------------- |
| `<a>`      | `.alert-link` | Links              |
| `<button>` | `.close`      | Botão para remover |

### Modificadores

| Elemento | Classe               | Descrição                                             |
| :------- | :------------------- | :---------------------------------------------------- |
| `<div>`  | `.fade`              | Acrescenta um efeito de fade na remoção do componente |
| `<div>`  | `.alert-icon`        | Insere o ícone correspondente ao estado do alert      |
| `<div>`  | `.alert-dismissible` | Indica que o componente pode ser removido             |
| `<div>`  | `.alert-danger`      | Estilização                                           |
| `<div>`  | `.alert-success`     | Estilização                                           |
| `<div>`  | `.alert-info`        | Estilização                                           |
| `<div>`  | `.alert-warning`     | Estilização                                           |

## Como usar

### Padrão

```html
<div class="alert alert-info">
  Lorem ipsum dolor sit amet consectetur adipisicing.
</div>
```

### Padrão com ícone

```html
<div class="alert alert-icon alert-info">
  Lorem ipsum dolor sit amet consectetur adipisicing.
</div>
```

### Padrão com outro estilo

```html
<div class="alert alert-danger">
  Lorem ipsum dolor sit amet consectetur adipisicing.
</div>
```

## Com link

```html
<div class="alert alert-info">
  Lorem ipsum dolor sit amet consectetur adipisicing.
  <a href="" class="alert-link">link</a>
</div>
```

## Com botão para remover

```html
<div class="alert alert-info alert-dismissible">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  Lorem ipsum dolor sit amet consectetur adipisicing.
</div>
```
