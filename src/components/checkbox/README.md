# Chekbox

| Elemento                              | Classe                    | Descrição                                                                                                           |
| :------------------------------------ | :------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| `<div class="bth-checkbox">`          | `.bth-checkbox-success`   | Define o checkbox com a cor verde                                                                                   |
| `<div class="bth-checkbox">`          | `.bth-checkbox-danger`    | Define o checkbox com a cor vermelha                                                                                |
| `<div class="bth-checkbox">`          | `.bth-checkbox-warning`   | Define o checkbox com a cor amarela                                                                                 |
| `<div class="bth-checkbox">`          | `.bth-checkbox-inline`    | Permite criar uma sequência de checkbox horizontalmente                                                             |


## Padrão
```html
<div class="bth-checkbox">
    <input id="chbox" type="checkbox">
    <label for="chbox">
        Checkbox
    </label>
</div>
```

## Desabilitado
```html
<div class="bth-checkbox bth-checkbox-inline">
    <input id="chbox" type="checkbox" disabled="">
    <label for="chbox">
    Checkbox
    </label>
</div>
```