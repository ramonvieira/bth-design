## Forma básica

```html
<div class="row">
  <div class="col-md-2">
    <label>Label</label>
    <input class="form-control" placeholder="Placeholder">
  </div>
</div>
```

## Tamanhos

| Elemento                             | Classe                    | Descrição                                                                                                       |
| :----------------------------------- | :------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `<input class="form-control">`       | `.input-sm`               | Tamanho grande                                                                                                  |
| `<input class="form-control">`       | `-`                       | Tamanha padrão                                                                                                  |
| `<input class="form-control">`       | `.input-lg`               | Tamanho pequeno                                                                                                 |

## Obrigatoriedade

```html
<div class="row">
  <div class="col-md-2">
    <label class="required">Label</label>
    <span class="required-icon" title="Este campo é obrigatório">*</span>
    <input class="form-control" bf-required="" ng-model="nomeDoInput" placeholder="Obrigatório">
  </div>
</div>
```

## Inconsistências

```html
<div class="row">
  <div class="col-md-6 has-error has-feedback">
    <label class="col-md-6 control-label" for="inputError">Label</label>
    <input class="form-control" id="inputError" placeholder="Inconsistência">
    <i class="material-icons form-control-feedback">warning
    </i>
  </div>
</div>
```

## Ícones informativos

```html
<div class="row">
  <div class="col-md-2">
    <label>Label</label>
    <span class="tip" title="Texto de ajuda"></span>
    <input class="form-control">
  </div>
</div> 
```

## Addon

```html
<div class="row">
  <div class="col-md-2">
    <label>Label</label>
    <div class="input-group">
      <span class="input-group-addon">R$</span>
      <input class="form-control" placeholder="Input + addon">
    </div>
  </div>
</div>
```

## Text area
### Padrão
```html
<div class="row">
  <div class="col-md-2">
    <textarea class="form-control" rows="3"></textarea>
  </div>
</div>
```

### Com contador
```html
<div class="bth-comment__input">
  <textarea class="form-control"></textarea>
  <div class="bth-comment__counter">500/500
  </div>
</div>
```

### Com contador danger
```html
<div class="bth-comment__input">
  <textarea class="form-control"></textarea>
  <div class="bth-comment__counter bth-comment__counter--danger">500/500
  </div>
</div>
```

## Spinner
```html
<div class="row">
  <div class="col-md-2">
    <span class="ui-spinner input-group">
      <input id="spinner" class="form-control ui-spinner-input" type="text" name="value" autocomplete="off" role="spinbutton">
      <a class="ui-spinner-button ui-spinner-up" tabindex="-1">
        <span class="icon-sort-up"></span>
      </a>
      <a class="ui-spinner-button ui-spinner-down" tabindex="-1">
        <span class="icon-sort-down"></span>
      </a>
    </span>
  </div>
</div>
```