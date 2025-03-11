# Banner

## Estrutura

### Bloco

| Elemento | Classe       | Descrição           |
| :------- | :----------- | :------------------ |
| `<div>`  | `.bf-banner` | Container principal |

### Elementos

| Elemento   | Classe                | Descrição             |
| :--------- | :-------------------- | :-------------------- |
| `<div>`    | `.bf-banner__icon`    | Container do ícone    |
| `<div>`    | `.bf-banner__content` | Container do do texto |
| `<button>` | `.close`              | Botão para remover    |

### Modificadores

| Elemento | Classe                | Descrição                              |
| :------- | :-------------------- | :------------------------------------- |
| `<div>`  | `.bf-banner--info`    | Define o estilo do banner como info    |
| `<div>`  | `.bf-banner--warning` | Define o estilo do banner como warning |
| `<div>`  | `.bf-banner--danger`  | Define o estilo do banner como danger  |
| `<div>`  | `.bf-banner--show`    | Exibe o banner                         |

## Como usar

### Padrão

```html
<div class="bf-banner bf-banner--show bf-banner--info">
  <div class="bf-banner__icon">
    <i class="fa fa-fw fa-exclamation-triangle"></i>
  </div>
  <div class="bf-banner__content">
    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
    <a href="">Mais informações</a>
  </div>
</div>
```
