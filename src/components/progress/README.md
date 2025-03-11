## Barra de progresso

### Progresso indeterminado

```html
<!-- 
  Barra de progresso com tempo indeterminado, utilizar a classe .bth-progress--indeterminate

  Exemplo:
-->
<div class="bth-progress bth-progress--indeterminate">
  <div class="bth-progress__bar"></div>
</div>
```

### Progresso determinado

Para alterar o tamanho da barra de progresso, insira o atributo `style="width: {{tamanho}}%"` na tag com a classe `.bth-progress__bar`.

```html
<!--
  Barra de progresso com variações de cores, optar por um dos seguintes tipos:
    .bth-progress--danger
    .bth-progress--warning
    .bth-progress--info
    .bth-progress--primary

  Exemplo:
-->
<div class="bth-progress bth-progress--danger">
  <div class="bth-progress__percent">
    30%
  </div>
  <div class="bth-progress__bar" style="width: 30%"></div>
  <div class="bth-progress__description">
    <span class="bth-progress__description-left">
      Início às 08:34
    </span>
    <span class="bth-progress__description-right">
      10 min restantes
    </span>
  </div>
</div>
```