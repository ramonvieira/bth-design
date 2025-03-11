# Navegação

## Elementos

| Elemento | Classe                     | Descrição                                            |
| :------- | :------------------------- | :--------------------------------------------------- |
| `<ul>`   | `.tab-indicator-container` | Encapsula os indicadores                             |
| `<li>`   | `.tab-indicator`           | Estiliza o item do indicador                         |
| `<li>`   | `.tab-indicator-warning`   | Estiliza o item do indicador com o estado de warning |
| `<li>`   | `.tab-indicator-danger`   | Estiliza o item do indicador com o estado de danger |

## Exemplo

```html
<ul class="nav nav-tabs">
  <li class="active">
    <a href="#home" data-toggle="tab">
      <i class="material-icons">favorite
      </i>
      Home
    </a>
  </li>
  <li class="required">
    <a href="#profile" data-toggle="tab">
      Profile
    </a>
  </li>
  <li>
    <a href="#profile" data-toggle="tab">
      Profile
      <ul class="tab-indicator-container">
        <li class="tab-indicator tab-indicator-warning">
            <i class="material-icons">warning</i>
        </li>
        <li class="tab-indicator tab-indicator-danger">
            <i class="material-icons">warning</i>
        </li>
        <li class="tab-indicator tab-indicator-warning">
            <span class="badge badge-warning">+99</span>
        </li>
      </ul>
    </a>
  </li>
  <li class="disabled">
    <a>Disabled</a>
  </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active in" id="home">
    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth</p>
  </div>
  <div class="tab-pane fade" id="profile">
    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.</p>
  </div>
</div>
```

## Com subabas

```html
<ul class="nav nav-subtabs">
  <li class="active">
    <a href="#home" data-toggle="tab">
      <i class="material-icons">favorite
      </i>
      Home
    </a>
  </li>
  <li class="required">
    <a href="#profile" data-toggle="tab">
      Profile
    </a>
  </li>
  <li>
    <a href="#profile" data-toggle="tab">
      Profile
      <ul class="tab-indicator-container">
        <li class="tab-indicator tab-indicator-warning">
            <i class="material-icons">warning</i>
        </li>
        <li class="tab-indicator tab-indicator-danger">
            <i class="material-icons">warning</i>
        </li>
        <li class="tab-indicator tab-indicator-warning">
            <span class="badge badge-warning">+99</span>
        </li>
      </ul>
    </a>
  </li>
  <li class="disabled">
    <a>Disabled</a>
  </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active in" id="home">
    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth</p>
  </div>
  <div class="tab-pane fade" id="profile">
    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.</p>
  </div>
</div>
```