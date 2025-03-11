# Totalizador / Powernumber

## Estrutura

### Bloco

| Elemento | Classe             | Descrição           |
| :------- | :----------------- | :------------------ |
| `<div>`  | `.bth-powernumber` | Container principal |

### Elementos

| Elemento | Classe                    | Descrição              |
| :------- | :------------------------ | :--------------------- |
| `<div>`  | `.bth-powernumber__icon`  | Container do ícone     |
| `<span>` | `.bth-powernumber__value` | Container do valor     |
| `<div>`  | `.bth-powernumber__desc`  | Container da descrição |

### Modificadores

| Elemento | Classe                       | Descrição                                                   |
| :------- | :--------------------------- | :---------------------------------------------------------- |
| `<div>`  | `.bth-powernumber--small`    | Altera as dimensões do componente para small                |
| `<div>`  | `.bth-powernumber--inline`   | Indica ao componente que ficará na mesma linha da descrição |
| `<div>`  | `.bth-powernumber--has-icon` | Alinha a esquerda e acrescenta espaço para o ícone          |

## Como usar

### Padrão

```html
<div class="bth-powernumber bth-powernumber--has-icon">
  <div class="bth-powernumber__icon tx__green" title="Título do ícone">
    <i class="material-icons">trending_up</i>
  </div>
  <span class="bth-powernumber__value">
    R$ 1.000,00
  </span>
</div>
```

### Padrão (Small)

```html
<div class="bth-powernumber bth-powernumber--small bth-powernumber--has-icon">
  <div class="bth-powernumber__icon tx__green" title="Título do ícone">
    <i class="material-icons">trending_up</i>
  </div>
  <span class="bth-powernumber__value">
    R$ 1.000,00
  </span>
</div>
```

### Ícone

```html
<div class="bth-powernumber bth-powernumber--has-icon">
  <div class="bth-powernumber__icon tx__red" title="Título do ícone">
    <i class="material-icons">trending_down</i>
  </div>
  <span class="bth-powernumber__value">
    R$ 1.000,00
  </span>
</div>
```

### Ícone + Descrição

```html
<div class="bth-powernumber bth-powernumber--has-icon">
  <div class="bth-powernumber__icon tx__green" title="Título do ícone">
    <i class="material-icons">trending_up</i>
  </div>
  <span class="bth-powernumber__value">
    R$ 1.000,00
  </span>
  <div class="bth-powernumber__desc">
    Lorem ipsum dolor sit amet
  </div>
</div>
```

### Inline

```html
<div class="bth-powernumber bth-powernumber--inline">
  Total:
  <span class="bth-powernumber__value">R$ 3.000.000,00</span>
  <button class="btn btn-add btn-sm btn-primary"></button>
</div>
```

### Inline + Botão (Small)

```html
<div class="bth-powernumber bth-powernumber--small bth-powernumber--inline">
  Total:
  <span class="bth-powernumber__value">R$ 3.000.000,00</span>
  <button class="btn btn-add btn-xs btn-primary" bf-popover-size="popover-xl" data-placement="left" bf-popover="'mais-detalhes.html'"></button>
</div>
```

### Duplo Inline

```html
<div class="bth-powernumber bth-powernumber--inline">
  Saldo positivo:
  <span class="bth-powernumber__value tx__green">R$ 3.000.000,00</span>
</div>
<div class="bth-powernumber bth-powernumber--inline">
  Total devido:
  <span class="bth-powernumber__value tx__red">R$ 3.000.000,00</span>
</div>
```
