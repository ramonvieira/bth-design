# Filtrar por

| Elemento | Classe         | Descrição                                  |
| :------- | :------------- | :----------------------------------------- |
| `<ul>`   | `.filtrar-por` | Classe principal que estiliza o componente |
| `<li>`   | `.active`      | Indica o item que esta selecionado         |

## Exemplo

```html
<ul class="filtrar-por">
  <li ng-class="{'active': filter == 0}" ng-init="filter = 0">
    <a href="" data-ng-click="filter = 0">
      Todos
    </a>
  </li>
  <li ng-class="{'active': filter == 2}">
    <a href="" data-ng-click="filter = 2">
      Alguns
    </a>
  </li>
</ul>
```

## Com contador de registros

```html
<ul class="filtrar-por">
  [...]
  <li ng-class="{'active': filter == 3}">
      <a href="" class=" dropdown-toggle" data-ng-click="filter = 3">
        Descrição do filtro
        <small class="text-muted">(150)</small>
      </a>
  </li>
  [...]
</ul>
```

## Com contador de seleção

```html
<ul class="filtrar-por">
  [...]
  <li ng-class="{'active': filter == 3}">
      <a href="" class=" dropdown-toggle" data-ng-click="filter = 3">
        Descrição do filtro
        <span class="badge">3</span>
      </a>
  </li>
  [...]
</ul>
```

## Com totalizador monetário

```html
<ul class="filtrar-por">
  [...]
  <li ng-class="{'active': filter == 3}">
      <a href="" class=" dropdown-toggle" data-ng-click="filter = 3">
        Descrição do filtro
        <small class="tx__blue--d10">(R$ 1.900,00)</small>
      </a>
  </li>
  [...]
</ul>
```

## Com ícone

```html
<ul class="filtrar-por">
  [...]
  <li ng-class="{'active': filter == 3}">
      <a href="" class=" dropdown-toggle" data-ng-click="filter = 3">
        <i class="fa fa-fw fa-pause tx__yellow"></i>
        Descrição do filtro
      </a>
  </li>
  [...]
</ul>
```

## Com dropdown

```html
<ul class="filtrar-por">
  [...]

  <li ng-class="{'active': filter == 4}">
    <div class="btn-group">
      <a href="" class=" dropdown-toggle" data-ng-click="filter = 3">
        Descrição do filtro
        <span class="badge">3</span>
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="dropdownAltura">
        <li class="dropdown-header">Título</li>
        <li>
          <a href="" data-value="col1">
            <div class="bth-radio">
              <input id="radio1" type="radio" name="radioIsVisible" ng-model="radioIsVisible">
              <label for="radio1">Número</label>
            </div>
          </a>
        </li>
        <li>
          <a href="" data-value="col2">
            <div class="bth-radio">
              <input id="radio2" type="radio" name="radioIsVisible" ng-model="radioIsVisible">
              <label for="radio2">Tipo</label>
            </div>
          </a>
        </li>
        <li>
          <a href="" data-value="col3">
            <div class="bth-radio">
              <input id="radio3" type="radio" name="radioIsVisible" ng-model="radioIsVisible">
              <label for="radio3">Ementa</label>
            </div>
          </a>
        </li>
        <li>
          <a href="" data-value="col4">
            <div class="bth-radio">
              <input id="radio4" type="radio" name="radioIsVisible" ng-model="radioIsVisible">
              <label for="radio4">Publicação</label>
            </div>
          </a>
        </li>
        <li>
          <a href="" data-value="col5">
            <div class="bth-radio">
              <input id="radio5" type="radio" name="radioIsVisible" ng-model="radioIsVisible">
              <label for="radio5">A vigorar</label>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </li>
  [...]
</ul>
```
