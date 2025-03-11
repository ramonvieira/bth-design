# SidePanel

## Estrutura

| Elemento                 | Classe                         | Descrição                                                                                       |
| :----------------------- | :--------------                | :---------------------------------------------------------------------------------------------- |
| `<div>`                  | `.bf-sidepanel`                | Principal classe da estrutura                                                                   |
| `<div>`                  | `.bf-profile`                  | Container das informações de perfil                                                             |
| `<div>`                  | `.bf-profile__thumb`           | Imagem do perfil                                                                                |
| `<span>`                 | `.bf-profile__name`            | Nome do perfil                                                                                  |
| `<span>`                 | `.bf-profile__username`        | Usuário do perfil                                                                               |
| `<a>`                    | `.bf-profile__context`         | Informações de contexto                                                                         |
| `<ul>`                   | `.bf-profile__context__list`   | Lista com os itens do contexto                                                                  |
| `<ul>`                   | `.bf-profile__actions`         | Lista com as ações vinculadas ao perfil                                                         |

### Modificadores

| Elemento | Classe                     | Descrição                                                |
| :------- | :---------------------     | :------------------------------------------------------- |
| `<div>`  | `.bf-sidepanel__account`   | Indica que o panel lateral possui informações da conta   |


## Exemplos

### Estrutura básica do SidePanel

```html
<div class="bf-sidepanel">

</div>
```

### Estrutura do SidePanel Account

```html
<div class="bf-sidepanel bf-sidepanel__account">
    <div class="bf-profile"> 
        <div class="bf-profile__thumb">
                <img src="" class="bf-avatar">
        </div>
        <span class="bf-profile__name"></span>
        <span class="bf-profile__username"></span>
    </div>
    <a class="bf-profile__context">         
        <i class="fa fa-university fa-fw"></i>
        <ul class="bf-profile__context__list">    
            <li>
                <span></span>
            </li>
        </ul>
    </a>
    <ul class="bf-profile__actions">
        <li>
            <a>
                <i class=""></i>
                <span></span>
            </a>
        </li>
    </ul>

</div>
```
