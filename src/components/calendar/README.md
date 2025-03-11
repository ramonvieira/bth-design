# Comentário

## Estrutura

### Bloco

| Elemento | Classe          | Descrição           |
| :------- | :-------------- | :------------------ |
| `<div>`  | `.bth-calendar` | Container principal |

### Elementos

| Elemento  | Classe                  | Descrição                        |
| :-------- | :---------------------- | :------------------------------- |
| `<div>`   | `.bth-calendar__header` | Container dos controles e título |
| `<span>`  | `.bth-calendar__title`  | Título                           |
| `<table>` | `.bth-calendar__table`  | Tabela                           |
| `<ul>`    | `.bth-calendar__status` | Lista de status                  |

### Modificadores

| Elemento | Classe                 | Descrição                                                            |
| :------- | :--------------------- | :------------------------------------------------------------------- |
| `<div>`  | `.bth-calendar--month` | Indica ao componente que a exibição é de mês                         |
| `<div>`  | `.bth-calendar--year`  | Indica ao componente que a exibição é de ano                         |
| `<td>`   | `.weekend`             | Indica a célula da tabela que o dia corresponde a um final de semana |
| `<td>`   | `.today`               | Indica a célula da tabela que o dia corresponde ao dia atual         |

## Como usar

### Visão de dia

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-calendar">
      <div class="bth-calendar__header">
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-left"></i>
        </button>
        <span class="bth-calendar__title">
          <a href="">Abril</a>
          <a href="">2017</a>
        </span>
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-right"></i>
        </button>
      </div>
      <table class="bth-calendar__table">
        <thead>
          <tr>
            <th>D</th>
            <th>S</th>
            <th>T</th>
            <th>Q</th>
            <th>Q</th>
            <th>S</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">1</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">2</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">3</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">4</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">5</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">6</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">7</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">8</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">9</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">10</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">11</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">12</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">13</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">14</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">15</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">16</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">17</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">18</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">19</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">20</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">21</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">22</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">23</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">24</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">25</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">26</button>
            </td>
            <td>
              <button class="btn btn-primary btn-xs">27</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">28</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">29</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">30</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

### Visão de mês

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-calendar bth-calendar--month">
      <div class="bth-calendar__header">
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-left"></i>
        </button>
        <span class="bth-calendar__title">
          <a href="">2017</a>
        </span>
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-right"></i>
        </button>
      </div>
      <table class="bth-calendar__table">
        <tbody>
          <tr>
            <td>
              <button class="btn btn-xs btn-link">JAN</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">FEV</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">MAR</button>
            </td>
            <td>
              <button class="btn btn-primary btn-xs">ABR</button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-xs btn-link">MAI</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">JUN</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">JUL</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">AGO</button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-xs btn-link">SET</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">OUT</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">NOV</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">DEZ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

### Visão de ano

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-calendar bth-calendar--year">
      <div class="bth-calendar__header">
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-left"></i>
        </button>
        <span class="bth-calendar__title">
          2016 - 2027
        </span>
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-right"></i>
        </button>
      </div>
      <table class="bth-calendar__table">
        <tbody>
          <tr>
            <td>
              <button class="btn btn-primary btn-xs">2016</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2017</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2018</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2019</button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-xs btn-link">2020</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2021</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2022</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2023</button>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn btn-xs btn-link">2024</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2025</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link">2026</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link" disabled>2027</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

### Visão de dia + status

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-calendar">
      <div class="bth-calendar__header">
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-left"></i>
        </button>
        <span class="bth-calendar__title">
          <a href="">Abril</a>
          <a href="">2017</a>
        </span>
        <button class="btn btn-sm btn-link">
          <i class="fa fa-fw fa-angle-right"></i>
        </button>
      </div>
      <table class="bth-calendar__table">
        <thead>
          <tr>
            <th>D</th>
            <th>S</th>
            <th>T</th>
            <th>Q</th>
            <th>Q</th>
            <th>S</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">1</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">2</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">3</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">4</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">5</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">6</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">7</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">8</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">9</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">10</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">11</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">12</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">13</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">14</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">15</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">16</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">17</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">18</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">19</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">20</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__gray--l10">21</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">22</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">23</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">24</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">25</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">26</button>
            </td>
            <td>
              <button class="btn btn-xs btn-link bg__green--l40">27</button>
            </td>
            <td class="today">
              <button class="btn btn-xs btn-link  bg__green--l40">28</button>
            </td>
            <td class="weekend">
              <button class="btn btn-xs btn-link">29</button>
            </td>
          </tr>
          <tr>
            <td class="weekend">
              <button class="btn btn-xs btn-link">30</button>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <ul class="bth-calendar__status">
        <li>
          <i class="fa fa-fw fa-circle tx__green--l40"></i>
          Dia letivo
        </li>
        <li>
          <i class="fa fa-fw fa-circle tx__gray--l10"></i>
          Feriado
        </li>
      </ul>
    </div>
  </div>
</div>
```
