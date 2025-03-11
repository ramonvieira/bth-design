# Card

## Estrutura

### Bloco

| Elemento | Classe      | Descrição           |
| :------- | :---------- | :------------------ |
| `<div>`  | `.bth-card` | Container principal |

### Elementos

| Elemento | Classe               | Descrição                                    |
| :------- | :------------------- | :------------------------------------------- |
| `<div>`  | `.bth-card__header`  | Cabeçalho                                    |
| `<div>`  | `.bth-card__body`    | Corpo                                        |
| `<div>`  | `.bth-card__footer`  | Rodapé                                       |
| `<hr>`   | `.bth-card__divider` | Divisor horizontal                           |
| `<div>`  | `.bth-card__mark`    | Container do checkbox ou radio geral do card |

### Modificadores

| Elemento | Classe                            | Descrição                                                        |
| :------- | :-------------------------------- | :--------------------------------------------------------------- |
| `<div>`  | `.bth-card--active`               | Quando clicável, indica que o card esta ativo                    |
| `<div>`  | `.bth-card--clickable`            | Indica que o card é clicável                                     |
| `<div>`  | `.bth-card--success`              | Quando clicável, aplica estilo de success ao card                |
| `<div>`  | `.bth-card--danger`               | Quando clicável, aplica estilo de danger ao card                 |
| `<div>`  | `.bth-card--warning`              | Quando clicável, aplica estilo de warning ao card                |
| `<div>`  | `.bth-card--bordered`             | Acrescenta uma borda na extremidade do componente                |
| `<div>`  | `.bth-card--filled`               | Preenche o fundo do componente                                   |
| `<div>`  | `.bth-card--fluid`                | Atribui ao body a altura total do card                           |
| `<div>`  | `.bth-card--full`                 | Altura e largura são definidas como 100%                         |
| `<div>`  | `.bth-card--full-x`               | Largura é definida como 100%                                     |
| `<div>`  | `.bth-card--full-y`               | Altura é definida como 100%                                      |
| `<div>`  | `.bth-card__body--max-[100-1000]` | Altura máxima do conteúdo                                        |
| `<div>`  | `.bth-card__body--scroll`         | Acrescenta rolagem vertical ao corpo                             |
| `<div>`  | `.bth-card__body--filter`         | Indica ao corpo do card que o seu conteúdo trata-se de um filtro |

## Como usar

### Card padrão

```html
<div class="bth-card">
  <div class="bth-card__header">
    <h4>Título</h4>
  </div>
  <div class="bth-card__body">Conteúdo</div>
  <div class="bth-card__footer">Footer</div>
</div>
```

### Com borda

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__header">
    <h4>Título</h4>
  </div>
  <div class="bth-card__body">Conteúdo</div>
  <div class="bth-card__footer">Footer</div>
</div>
```

### Com preenchimento

```html
<div class="bth-card bth-card--filled">
  <div class="bth-card__body">
    <h4>Título</h4>
  </div>
</div>
```

### Com radio

```html
<div class="bth-card bth-card--clickable">
  <div class="bth-card__body">
    <div class="bth-card__mark">
      <div class="bth-radio">
        <input id="radio2" value="Pessoa física" type="radio" name="modulo2" ng-model="tipoSelecionado" />
        <label for="radio2"></label>
      </div>
    </div>
    <h4>Título</h4>
  </div>
</div>
```

### Com radio + ativo

```html
<div class="bth-card bth-card--clickable bth-card--active">
  <div class="bth-card__body">
    <div class="bth-card__mark">
      <div class="bth-radio">
        <input id="radio2" value="Pessoa física" type="radio" name="modulo2" ng-model="tipoSelecionado" checked/>
        <label for="radio2"></label>
      </div>
    </div>
    <h4>Título</h4>
  </div>
</div>
```
