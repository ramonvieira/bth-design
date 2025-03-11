# Loader

## Estrutura

### Bloco

| Elemento | Classe        | Descrição           |
| :------- | :------------ | :------------------ |
| `<div>`  | `.bth-loader` | Container principal |

### Elementos

| Elemento | Classe                   | Descrição |
| :------- | :----------------------- | :-------- |
| `<div>`  | `.bth-loader__indicator` | Indicador |
| `<div>`  | `.bth-loader__message`   | Mensagem  |

### Modificadores

| Elemento | Classe                  | Descrição                                                 |
| :------- | :---------------------- | :-------------------------------------------------------- |
| `<div>`  | `.bth-loader--backdrop` | Acrescenta um plano de fundo                              |
| `<div>`  | `.bth-loader--full`     | Indica que o componente irá compor toda a área disponível |
| `<div>`  | `.bth-loader--dots`     | Estiliza o indicador para a versão dots                   |
| `<div>`  | `.bth-loader--skeleton` | Estiliza o indicador para a versão skeleton               |
| `<div>`  | `.bth-loader--inline`   | Permite que a mensagem fique ao lado do indicador         |
| `<div>`  | `.bth-loader--small`    | Versão pequena do componente                              |
| `<div>`  | `.bth-loader--dark`     | Aplica cores escuras                                      |
| `<div>`  | `.bth-loader--light`    | Aplica cores claras                                       |

## Como usar

### Padrão

```html
<div class="bth-loader bth-loader--dots">
  <div class="bth-loader__indicator"></div>
</div>
```

### Skeleton

```html
<td>
  <div class="bth-loader bth-loader--skeleton">
    <div class="bth-loader__indicator"></div>
  </div>
</td>
```

### Mensagem

```html
<div class="bth-loader bth-loader--dots">
  <div class="bth-loader__indicator"></div>
  <div class="bth-loader__message">
    Carregando informações...
  </div>
</div>
```

### Modal

```html
<!-- /.modal-footer -->
<div class="bth-loader bth-loader--dots bth-loader--backdrop bth-loader--full">
  <div class="bth-loader__indicator"></div>
</div>
```

### Light

```html
<div class="bth-loader bth-loader--dots bth-loader--light">
  <div class="bth-loader__indicator"></div>
</div>
```

### Dark

```html
<div class="bth-loader bth-loader--dots bth-loader--dark">
  <div class="bth-loader__indicator"></div>
</div>
```
