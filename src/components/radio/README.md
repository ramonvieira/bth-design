## Padrão
```html
<div class="bth-radio">
  <input id="radio1" value="1" type="radio" name="modulo1">
  <label for="radio1">
    Radio
  </label>
</div> 
```

## Radio alinhado
```html
<div class="bth-radio bth-radio-inline">
  <input id="radio2" value="1" type="radio" name="modulo2" checked="">
  <label for="radio2">
    Radio 1
  </label>
</div>
<div class="bth-radio bth-radio-inline">
  <input id="radio3" value="1" type="radio" name="modulo2">
  <label for="radio3">
    Radio 2
  </label>
</div>
<div class="bth-radio bth-radio-inline">
  <input id="radio4" value="1" type="radio" name="modulo2">
  <label for="radio4">
    Radio 3
  </label>
</div>
```

## Desabilitado
```html
<div class="bth-radio bth-radio-inline">
  <input id="radio10" value="1" type="radio" disabled="">
  <label for="radio10">
    Radio 1
  </label>
</div>
<div class="bth-radio bth-radio-inline radio-success">
  <input id="radio11" value="1" type="radio" checked="" disabled="">
  <label for="radio11">
    Radio 2
  </label>
</div>
<div class="bth-radio bth-radio-inline radio-primary">
  <input id="radio12" value="1" type="radio" checked="" disabled="">
  <label for="radio12">
    Radio 3
  </label>
</div>
<div class="bth-radio bth-radio-inline radio-danger">
  <input id="radio13" value="1" type="radio" checked="" disabled="">
  <label for="radio13">
    Radio 4
  </label>
</div>
<div class="bth-radio bth-radio-inline radio-warning">
  <input id="radio14" value="1" type="radio" checked="" disabled="">
  <label for="radio14">
    Radio 5
  </label>
</div>
```

## Estados
| Elemento                              | Classe                    | Descrição                                                                                                 |
| :------------------------------------ | :------------------------ | --------------------------------------------------------------------------------------------------------- |
| `<div class="bth-radio">`             | `.radio-success`   | Define o radio com a cor verde                                                                                   |
| `<div class="bth-radio">`             | `.radio-danger`    | Define o radio com a cor vermelha                                                                                |
| `<div class="bth-radio">`             | `.radio-warning`   | Define o radio com a cor amarela                                                                                 |