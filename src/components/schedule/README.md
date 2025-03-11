# Agenda

## Estrutura

### Bloco

| Elemento | Classe          | Descrição           |
| :------- | :-------------- | :------------------ |
| `<div>`  | `.bth-schedule` | Container principal |

### Elementos

| Elemento | Classe                            | Descrição                                                                                                  |
| :------- | :-------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `<ul>`   | `.bth-schedule__header`           | Cabeçalho do calendário                                                                                    |
| `<li>`   | `.bth-schedule__corner`           | Item que compõe a extremidada superior direita para visualizações que possuem a barra lateral com horários |
| `<li>`   | `.bth-schedule__day-week`         | Container dos dias da semana                                                                               |
| `<ul>`   | `.bth-schedule__events`           | Container de todos os eventos                                                                              |
| `<li>`   | `.bth-schedule__event`            | Container individual do evento                                                                             |
| `<ul>`   | `.bth-schedule__legend`           | Container da barra lateral com os horários                                                                 |
| `<ul>`   | `.bth-schedule__week`             | Container da semana                                                                                        |
| `<li>`   | `.bth-schedule__day`              | Container do dia da semana                                                                                 |
| `<ul>`   | `.bth-schedule__hours`            | Container das horas para visualização do tipo semana                                                       |
| `<li>`   | `.bth-schedule__hour`             | Container da hora para visualização do tipo semana                                                         |
| `<li>`   | `.bth-schedule__current-time`     | Item indicador do horário atual em relação ao dia da semana                                                |
| `<ul>`   | `.bth-schedule__details`          | Container da lista com detalhes do evento                                                                  |
| `<div>`  | `.bth-schedule__popover-header`   | Cabeçalho do popover                                                                                       |
| `<div>`  | `.bth-schedule__popover-day-week` | Container do dia da semana                                                                                 |
| `<div>`  | `.bth-schedule__popover-day`      | Container do dia                                                                                           |

### Modificadores

| Elemento | Classe                                     | Descrição                                                                                                                               |
| :------- | :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `<div>`  | `.bth-schedule--week`                      | Visualização de semana                                                                                                                  |
| `<div>`  | `.bth-schedule--month`                     | Visualização de mês                                                                                                                     |
| `<div>`  | `.bth-schedule--year`                      | Visualização de ano                                                                                                                     |
| `<div>`  | `.bth-schedule--list`                      | Visualização de lista                                                                                                                   |
| `<li>`   | `.bth-schedule__event--focus`              | Indica que o foco esta no elemento                                                                                                      |
| `<li>`   | `.bth-schedule__event--arrow-left`         | Indica que a extremidade esquerda do evento possui continuidade na página anterior e que a posição dessa extremidade não é um dia ativo |
| `<li>`   | `.bth-schedule__event--arrow-right`        | Indica que a extremidade direita do evento possui continuidade na página anterior e que a posição dessa extremidade não é um dia ativo  |
| `<li>`   | `.bth-schedule__event--arrow-left-active`  | Indica que a extremidade esquerda do evento possui continuidade na página anterior e que a posição dessa extremidade é um dia ativo     |
| `<li>`   | `.bth-schedule__event--arrow-right-active` | Indica que a extremidade direita do evento possui continuidade na página anterior e que a posição dessa extremidade é um dia ativo      |
| `<li>`   | `.bth-schedule__event--span-[2-7]`         | Extende a abrangência horizontal do evendo respeitando o valor indicado no final da classe `--span-[2-7]`                               |
| `<li>`   | `.bth-schedule__event--offset-[1-7]`       | Move o evento verticalmente respeitando o valor indicado no final da classe `--offset-[1-7]`                                            |
| `<li>`   | `.bth-schedule__event--more`               | Indica que o evento trata-se de um link/botão de mais eventos                                                                           |
| `<li>`   | `.bth-schedule__event--add`                | Utilizado na visualização de lista, formata o evento para se tornar um botão de adição                                                  |
| `<li>`   | `.bth-schedule__day--active`               | Indica que se trata de um dia ativo                                                                                                     |
| `<li>`   | `.bth-schedule__day--weekend`              | Indica que é um final de semana                                                                                                         |
| `<li>`   | `.bth-schedule__day-week--active`          | Indica que é um dia da semana ativo                                                                                                     |
| `<li>`   | `.bth-schedule__day-week--past`            | Indica que é um dia da semana passado                                                                                                   |
| `<div>`  | `.bth-schedule__desc`                      | Container que contém o valor do dia, utilizado na visualização de mês                                                                   |

## Como usar

### Visualização de dia

```html
<div class="bth-schedule bth-schedule--week">
  <ul class="bth-schedule__header">
    <li class="bth-schedule__corner"></li>
    <li class="bth-schedule__day-week" ng-repeat="key in ['ter']">
      <span>{{key}}</span>
      <h3>02</h3>
      <ul class="bth-schedule__events" ng-show="daysWeek[key].events.length">
        <li class="bth-schedule__event" tabindex="1" ng-focus="setFocus(event, true)" ng-blur="setFocus(event, false)" ng-style="getEventStylePosition(hour, event, $parent.$index, 1, true)"
          ng-class="[event.isFocus ? 'bth-schedule__event--focus' : '']" ng-repeat="event in daysWeek[key].events">
          <a href="" class="label" ng-class="event.class" bf-popover="'popover.html'"
            bf-popover-size="med-popover" data-placement="top">
            <i ng-class="event.icon"></i>
            {{event.desc}}
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="bth-schedule__container">

    <ul class="bth-schedule__legend">
      <li ng-repeat="hour in hours">
        <span>{{hour + ':00'}}</span>
      </li>
    </ul>

    <ul class="bth-schedule__week">
      <li class="bth-schedule__day" ng-repeat="day in week.days | limitTo:1:2 track by $index">
        <ul class="bth-schedule__hours">
          <li class="bth-schedule__current-time" ng-style="getStyleCurrentTimeRelative()"></li>
          <li class="bth-schedule__hour" ng-repeat="hour in hours">
            <ul class="bth-schedule__events" ng-show="day.events[hour].length">
              <li class="bth-schedule__event" tabindex="1" ng-focus="setFocus(event, true)" ng-blur="setFocus(event, false)"
                ng-class="[event.isFocus ? 'bth-schedule__event--focus' : '']" ng-repeat="event in day.events[hour]">
                <a href="" class="label" ng-class="event.class" bf-popover="'popover.html'"
                  bf-popover-size="med-popover" data-placement="top">
                  <i ng-class="event.icon"></i>
                  {{event.desc}}
                  <span ng-show="!isDuracaoMaiorQueUmaHora(hour, event)">, 09:00</span>
                  <ul class="bth-schedule__details" ng-show="isDuracaoMaiorQueUmaHora(hour, event)">
                    <li>05:00 - 06:00</li>
                    <li>Sala 3</li>
                  </ul>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

### Visualização de semana

```html
<div class="bth-schedule bth-schedule--week">
  <ul class="bth-schedule__header">
    <li class="bth-schedule__corner"></li>
    <li class="bth-schedule__day-week" ng-class="{'bth-schedule__day-week--active': value.active, 'bth-schedule__day-week--past': value.past}"
      ng-repeat="(key, value) in daysWeek">
      <span>{{key}}</span>
      <h3>02</h3>
      <ul class="bth-schedule__events" ng-show="daysWeek[key].events.length">
        <li class="bth-schedule__event bth-schedule__event--arrow-left-active bth-schedule__event--arrow-right" tabindex="1" ng-focus="setFocus(event, true)"
          ng-blur="setFocus(event, false)" ng-style="getEventStylePosition(hour, event, $index, 2, true)" ng-class="['bth-schedule__event--span-' + event.range, event.isFocus ? 'bth-schedule__event--focus' : '']"
          ng-repeat="event in daysWeek[key].events">
          <a href="" class="label" ng-class="event.class" bf-popover="'popover.html'"
            bf-popover-size="med-popover" data-placement="top">
            <i ng-class="event.icon"></i>
            {{event.desc}}
            <span ng-show="!isDurationMoreThanOneHour(hour, event)">, 09:00</span>
            <ul class="bth-schedule__details" ng-show="isDurationMoreThanOneHour(hour, event)">
              <li>05:00 - 06:00</li>
              <li>Sala 3</li>
            </ul>
          </a>
        </li>
        <li class="bth-schedule__event bth-schedule__event--more">
          <a href="" bf-popover="'popover.html'" bf-popover-size="med-popover"
            data-placement="bottom">
            Mais 7
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="bth-schedule__container">

    <ul class="bth-schedule__legend">
      <li ng-repeat="hour in hours">
        <span>{{hour + ':00'}}</span>
      </li>
    </ul>

    <ul class="bth-schedule__week">
      <li class="bth-schedule__day" ng-class="{'bth-schedule__day--active': day.active, 'bth-schedule__day--past': day.past}" ng-repeat="day in week.days track by $index">
        <ul class="bth-schedule__hours">
          <li class="bth-schedule__current-time" ng-style="getStyleCurrentTimeRelative()"></li>
          <li class="bth-schedule__hour" ng-repeat="hour in hours">
            <ul class="bth-schedule__events" ng-show="day.events[hour].length">
              <li class="bth-schedule__event" tabindex="1" ng-focus="setFocus(event, true)" ng-blur="setFocus(event, false)"
                ng-class="['bth-schedule__event--span-' + event.range, event.isFocus ? 'bth-schedule__event--focus' : '']"
                ng-repeat="event in day.events[hour]">
                <a href="" class="label" ng-class="event.class" bf-popover="'popover.html'"
                  bf-popover-size="med-popover" data-placement="top">
                  <i ng-class="event.icon"></i>
                  {{event.desc}}
                  <span ng-show="!isDuracaoMaiorQueUmaHora(hour, event)">, 09:00</span>
                  <ul class="bth-schedule__details" ng-show="isDuracaoMaiorQueUmaHora(hour, event)">
                    <li>05:00 - 06:00</li>
                    <li>Sala 3</li>
                  </ul>
                </a>
              </li>
              <li class="bth-schedule__event bth-schedule__event--more">
                <a href="" bf-popover="'popover.html'" bf-popover-size="med-popover"
                  data-placement="bottom" class="label label-primary">
                  + 7
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

### Visualização de mês

```html
<div class="bth-schedule bth-schedule--month">
  <ul class="bth-schedule__header">
    <li class="bth-schedule__day-week" ng-repeat="dayWeek in ['dom','seg','ter','qua','qui','sex','sab']">
      <span>{{dayWeek}}</span>
    </li>
  </ul>
  <ul class="bth-schedule__week" ng-repeat="week in month.weeks">
    <li class="bth-schedule__day" ng-class="{'bth-schedule__day--active': day.active, 'bth-schedule__day--weekend': day.weekend}" ng-repeat="day in week.days">
      <div class="bth-schedule__desc">
        <span>{{day.desc}}</span>
      </div>
      <ul class="bth-schedule__events" ng-show="day.events.length">
        <li class="bth-schedule__event" ng-class="['bth-schedule__event--span-' + event.range, 'bth-schedule__event--offset-' + event.offset]"
          ng-repeat="event in day.events | limitTo:2">
          <a href="" class="label" ng-class="event.class">
            <i ng-class="event.icon"></i>
            {{event.desc}}
          </a>
        </li>
        <li class="bth-schedule__event bth-schedule__event--more">
          <a href="" bf-popover="'popover.html'" bf-popover-size="med-popover"
            data-placement="bottom">
            Mais 7
          </a>
        </li>
      </ul>
    </li>
</div>
```

### Visualização de ano

```html
<div class="bth-schedule bth-schedule--year">
  <!-- Componente de calendário -->
</div>
```

### Visualização de lista

```html
<div class="bth-schedule bth-schedule--list">
  <ul class="bth-schedule__header">
    <li class="bth-schedule__day-week" ng-class="{'bth-schedule__day-week--active': value.active, 'bth-schedule__day-week--past': value.past}"
      ng-repeat="(key, value) in daysWeek">
      <span>{{key}}</span>
      <h3>02</h3>
    </li>
  </ul>
  <div class="bth-schedule__container">
    <ul class="bth-schedule__week">
      <li class="bth-schedule__day" ng-class="{'bth-schedule__day--active': day.active, 'bth-schedule__day--past': day.past}" ui-sortable="configSortable"
        ng-model="day.events['02']" ng-repeat="day in week.days track by $index">
        <div class="bth-card bth-card--small bth-card--bordered" ng-repeat="event in day.events['02']">
          <div class="bth-card__header">
            <div class="row row-flex bottom">
              <div class="col-md-7">
                <h5>
                  <i class="fa fa-fw fa-circle tx__red"></i>
                  PCDE-304
                </h5>
              </div>
              <div class="col-md-5 text-right">
                <small class="tx__gray--d20">2h40m</small>
              </div>
            </div>
          </div>
          <div class="bth-card__body tx__gray--d10">
            Codificação de protótipo:
            <div class="ellipsis">Desenvolver as interfaces</div>
          </div>
        </div>
        <div class="bth-schedule__event bth-schedule__event--add text-center">
          <i class="material-icons">add</i>
        </div>
      </li>
    </ul>
  </div>
</div>
```

### Cabeçalho do popover

````html
<div class="bth-schedule__popover-header">
  <div class="bth-schedule__popover-day-week">
    ter
  </div>
  <div class="bth-schedule__popover-day">
    04
  </div>
</div>
```