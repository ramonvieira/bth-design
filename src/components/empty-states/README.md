# Estados vazios / Ilustrações do sistema

## Estrutura

### Bloco

| Elemento | Classe         | Descrição           |
| :------- | :------------- | :------------------ |
| `<div>`  | `.bth-empty` | Container principal |

### Modificadores

| Elemento | Classe                | Descrição                       |
| :------- | :-------------------- | :------------------------------ |
| `<div>`  | `.bth-empty--404` | Página não encontrada |
| `<div>`  | `.bth-empty--user-expired` | Sessão expirada |
| `<div>`  | `.bth-empty--filter` | Nenhum filtro/pesquisa aplicado(a) |
| `<div>`  | `.bth-empty--indicators` | Não há indicadores |
| `<div>`  | `.bth-empty--notification` | Não há notificações |
| `<div>`  | `.bth-empty--offline` | Usuário não possui conexão com a internet |
| `<div>`  | `.bth-empty--online` | Usuário esta conectado a internet |
| `<div>`  | `.bth-empty--records` | Nenhum resultado encontrado |
| `<div>`  | `.bth-empty--list` | Lista vazia |

## Como usar

### 404

```html
<div class="bth-empty bth-empty--404">
  <h3>Ops! Ocorreu um erro.</h3>
  <p>
    A página que você tentou acessar não foi encontrada.
  </p>
</div>
```

### Sessão expirada

```html
<div class="bth-empty bth-empty--user-expired">
  <h4>Sua sessão expirou, faça o login para continuar no sistema</h4>
</div>
```

### Nenhum filtro/pesquisa aplicado(a)

```html
<div class="bth-empty bth-empty--filter">
  <h3>Faça uma
    <a href="">pesquisa</a> ou utilize os filtros para mostrar os resultados.</h3>
</div>
```

### Não há indicadores

```html
<div class="bth-empty bth-empty--indicators">
  <h3>Ainda não há indicadores por aqui</h3>
</div>
```

### Não há notificações

```html
<div class="bth-empty bth-empty--notification">
  <h4>Não há notificações por aqui</h4>
</div>
```

### Usuário não possui conexão com a internet

```html
<div class="bth-empty bth-empty--offline">
  <h4>Você está offline</h4>
  <h5>Isso pode prejucar as suas atividades no sistema</h5>
</div>
```

### Usuário esta conectado a internet

```html
<div class="bth-empty bth-empty--online">
  <h4>Sua conexão está estável</h4>
</div>
```

### Nenhum resultado encontrado

```html
<div class="bth-empty bth-empty--records">
  <h3>Nenhum resultado encontrado para sua pesquisa</h3>
  <p>
    - Tente utilizar uma combinação diferente de filtros
    <br /> - Revise a ortografia dos termos digitados
  </p>
</div>
```

### Lista vazia

```html
<div class="bth-empty bth-empty--list">
  <h3>Ainda não há funcionários por aqui.
    <a href="">Adicionar</a>
  </h3>
</div>
```