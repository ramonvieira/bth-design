# Padrão

```html
<div class="bth-switch bth-switch-inline">
  <input id="switch_1" type="checkbox">
  <label for="switch_1">Switch</label>
</div>
<div class="bth-switch bth-switch-inline">
  <input id="switch_2" type="checkbox" checked="">
  <label for="switch_2">Switch checked</label>
</div>
```

## Alinhado horizontalmente

```html
<div class="bth-switch bth-switch-inline">
  <input id="switch_4" type="checkbox" checked="">
  <label for="switch_4">Switch inline</label>
</div>
<div class="bth-switch bth-switch-inline">
  <input id="switch_5" type="checkbox" checked="">
  <label for="switch_5">Switch inline</label>
</div>
<div class="bth-switch bth-switch-inline">
  <input id="switch_6" type="checkbox" checked="">
  <label for="switch_6">Switch inline</label>
</div>
```

## Desabilitado

```html
<div class="bth-switch bth-switch-inline">
  <input id="switch_1" type="checkbox" disabled>
  <label for="switch_1">Switch</label>
</div>
<div class="bth-switch bth-switch-inline">
  <input id="switch_2" type="checkbox" checked="" disabled>
  <label for="switch_2">Switch checked</label>
</div>
```

## Estados
| Elemento                              | Classe                    | Descrição                                                                                                 |
| :------------------------------------ | :------------------------ | --------------------------------------------------------------------------------------------------------- |
| `<div class="bth-switch">`            | `.bth-switch-danger`      | Define o switch com a cor vermelho                                                                        |
| `<div class="bth-switch">`            | `.bth-switch-warning`     | Define o switch com a cor amarela                                                                         |