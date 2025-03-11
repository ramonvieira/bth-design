# Comentário

## Estrutura

### Bloco

| Elemento | Classe         | Descrição           |
| :------- | :------------- | :------------------ |
| `<div>`  | `.bth-comment` | Container principal |

### Elementos

| Elemento            | Classe                    | Descrição                              |
| :------------------ | :------------------------ | :------------------------------------- |
| `<div>`             | `.bth-comment__actions`   | Container dos botões de ação           |
| `<div>`             | `.bth-comment__attach`    | Container dos anexos                   |
| `<div>`             | `.bth-comment__container` | Container do textarea, botões e anexos |
| `<form>` ou `<div>` | `.bth-comment__content`   | Container do comentário                |
| `<div>`             | `.bth-comment__counter`   | Contador do textarea                   |
| `<div>`             | `.bth-comment__input`     | Container do textarea e botões         |
| `<div>`             | `.bth-comment__main`      | Container da thumb e comentário        |
| `<div>`             | `.bth-comment__reply`     | Container das respostas                |
| `<div>`             | `.bth-comment__thumb`     | Container para avatar do usuário       |
| `<div>`             | `.bth-comment__user`      | Avatar do usuário                      |

### Modificadores

| Elemento | Classe                           | Descrição                                       |
| :------- | :------------------------------- | :---------------------------------------------- |
| `<div>`  | `.bth-comment__input--recording` | Indica ao input que esta ocorrendo uma gravação |
| `<div>`  | `.bth-comment__counter--danger`  | Indica ao contador que há um erro               |

## Como usar

### Caixa de texto individual

```html
<div class="bth-comment__input">
  <textarea class="form-control"></textarea>
  <div class="bth-comment__counter">500/500</div>
</div>
```

### Caixa de texto do topo

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-comment">
      <div class="bth-comment__main">
        <div class="bth-comment__thumb">
          <img src="photo.jpg" alt="" />
        </div>
        <div class="bth-comment__container">
          <form class="bth-comment__content">
            <div class="bth-comment__input input-group" ng-class="{'bth-comment__input--recording': isRecording}">
              <textarea class="form-control" ng-model="comment.text" placeholder="Compartilhe sua opinião"></textarea>
              <div class="input-group-btn">
                <button class="btn btn-link" si-speech="text" si-speech-processing="isRecording" si-speech-supported="isSupported" ng-show="isSupported">
                  <i class="fa fa-fw fa-stop" ng-show="isRecording"></i>
                  <i class="fa fa-fw fa-microphone" ng-show="!isRecording"></i>
                </button>
                <button class="btn btn-link" ng-show="!isRecording">
                  <i class="fa fa-fw fa-paperclip"></i>
                </button>
              </div>
            </div>
            <button class="btn btn-sm btn-primary" type="submit" ng-click="comment = addComment(comments, comment)" ng-disabled="isRecording || !comment.text.length">
              Comentar
              <small>(CTRL + ENTER)</small>
            </button>
          </form>
          <div class="bth-comment__attach" ng-init="comment.attachments = []" ng-show="comment.attachments.length">
            <ul class="bth-attach-items bth-attach-items--condensed bth-attach-items--grid">
              <li class="bth-attach-item" ng-repeat="attachment in comment.attachments">
                <div class="bth-attach-item__view" ng-click="vm.openImage(attachment.file.thumb.uri)" ng-if="attachment.file.thumb.type == 'image'">
                  <a href="" title="Visualizar" class="bth-attach-item__view-trigger">Visualizar</a>
                </div>
                <div class="bth-attach-item__thumb">
                  <span class="bth-attach-item__thumb-icon" data-message-error="{{attachment.file.error.message}}" ng-if="attachment.file.thumb.type == 'icon'"
                    ng-class="attachment.file.thumb.color">
                    <i class="fa fa-fw" ng-class="attachment.file.thumb.icon"></i>
                  </span>
                  <span class="bth-attach-item__thumb-image" ng-if="attachment.file.thumb.type == 'image'" ng-style="{'background-image': 'url(' + attachment.file.thumb.uri + ')'}">
                    <i class="fa fa-fw fa-image"></i>
                  </span>
                  <span class="bth-attach-thumb-overlay" ng-if="attachment.file.thumb.type == 'image'">
                    <a href="" class="bth-attach-thumb-overlay__action" ng-click="vm.openImage(attachment.file.thumb.uri)" title="Visualizar">
                      <i class="fa fa-fw fa-eye"></i>
                    </a>
                  </span>
                </div>
                <div class="bth-attach-item__footer">
                  <div class="bth-attach-item__name">
                    <span class="bth-attach-item__description">{{attachment.file.name}}</span>
                    <span class="bth-attach-item__extension">{{attachment.file.extension}}</span>
                  </div>
                  <span class="bth-attach-item__actions">
                    <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Baixar">
                      <i class="fa fa-fw fa-download"></i>
                    </button>
                    <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Excluir" ng-click="vm.removeFile($flow, $index)"
                      ng-class="{'link-disabled': disabled}">
                      <i class="fa fa-fw fa-trash-o"></i>
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Estrutura das respostas

```html
<div class="bth-card bth-card--bordered">
  <div class="bth-card__body">
    <div class="bth-comment">
      <div class="bth-comment__main">
        <div class="bth-comment__thumb">
          <img ng-src="{{c.author.src}}" alt="">
        </div>
        <div class="bth-comment__container">
          <div class="bth-comment__user">
            <strong>{{c.author.name}}</strong> -
            <small class="text-muted">há 5 minutos</small>
          </div>
          <div class="bth-comment__content">
            <div ng-show="!c.editing">
              {{c.text}}
            </div>
            <div ng-show="c.editing">
              <div class="bth-comment__input input-group" ng-class="{'bth-comment__input--recording': c.recording}">
                <textarea class="form-control" ng-model="c.text" placeholder="Compartilhe sua opinião"></textarea>
                <div class="input-group-btn">
                  <button class="btn btn-link" si-speech="c.text" si-speech-processing="c.recording" si-speech-supported="isSupported" ng-show="isSupported">
                    <i class="fa fa-fw fa-stop" ng-show="c.recording"></i>
                    <i class="fa fa-fw fa-microphone" ng-show="!c.recording"></i>
                  </button>
                  <button class="btn btn-link" ng-show="!c.recording">
                    <i class="fa fa-fw fa-paperclip"></i>
                  </button>
                </div>
              </div>
              <button class="btn btn-sm btn-primary" ng-click="toggleEdit(c)" ng-disabled="c.recording">
                Comentar
                <small>(CTRL + ENTER)</small>
              </button>
              <button class="btn btn-sm btn-default" ng-click="toggleEdit(c)" ng-disabled="c.recording">
                Cancelar
              </button>
            </div>
          </div>
          <div class="bth-comment__actions" ng-show="!c.editing">
            <button class="btn btn-sm btn-link">
              <i class="fa fa-fw fa-thumbs-up"></i>CURTIR</button>
            <button class="btn btn-sm btn-link" ng-click="answer.collapse = !answer.collapse">
              <i class="fa fa-fw fa-reply"></i>RESPONDER</button>
            <button class="btn btn-sm btn-link" ng-click="toggleEdit(c)">
              <i class="fa fa-fw fa-pencil"></i>EDITAR</button>
            <button class="btn btn-sm btn-link" ng-click="removeComment(comments, $index)">
              <i class="fa fa-fw fa-trash-o"></i>EXCLUIR</button>
          </div>
          <div class="bth-comment__attach" ng-init="c.attachments = []" ng-show="c.attachments.length">
            <!-- Lista de itens do componente de anexos -->
            <ul class="bth-attach-items bth-attach-items--condensed bth-attach-items--grid">
              <li class="bth-attach-item" ng-repeat="attachment in c.attachments">
                <div class="bth-attach-item__view" ng-click="vm.openImage(attachment.file.thumb.uri)" ng-if="attachment.file.thumb.type == 'image'">
                  <a href="" title="Visualizar" class="bth-attach-item__view-trigger">Visualizar</a>
                </div>
                <div class="bth-attach-item__thumb">
                  <span class="bth-attach-item__thumb-icon" data-message-error="{{attachment.file.error.message}}" ng-if="attachment.file.thumb.type == 'icon'"
                    ng-class="attachment.file.thumb.color">
                    <i class="fa fa-fw" ng-class="attachment.file.thumb.icon"></i>
                  </span>
                  <span class="bth-attach-item__thumb-image" ng-if="attachment.file.thumb.type == 'image'" ng-style="{'background-image': 'url(' + attachment.file.thumb.uri + ')'}">
                    <i class="fa fa-fw fa-image"></i>
                  </span>
                  <span class="bth-attach-thumb-overlay" ng-if="attachment.file.thumb.type == 'image'">
                    <a href="" class="bth-attach-thumb-overlay__action" ng-click="vm.openImage(attachment.file.thumb.uri)" title="Visualizar">
                      <i class="fa fa-fw fa-eye"></i>
                    </a>
                  </span>
                </div>
                <div class="bth-attach-item__footer">
                  <div class="bth-attach-item__name">
                    <span class="bth-attach-item__description">{{attachment.file.name}}</span>
                    <span class="bth-attach-item__extension">{{attachment.file.extension}}</span>
                  </div>
                  <span class="bth-attach-item__actions">
                    <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Baixar">
                      <i class="fa fa-fw fa-download"></i>
                    </button>
                    <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Excluir" ng-click="vm.removeFile($flow, $index)"
                      ng-class="{'link-disabled': disabled}">
                      <i class="fa fa-fw fa-trash-o"></i>
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bth-comment__reply">
        <div class="bth-card bth-card--filled" ng-repeat="a in c.answers" ng-if="c.answers.length">
          <div class="bth-card__body">
            <div class="bth-comment">
              <div class="bth-comment__main">
                <div class="bth-comment__thumb">
                  <img ng-src="{{a.author.src}}" alt="">
                </div>
                <div class="bth-comment__container">
                  <div class="bth-comment__user">
                    <strong>{{a.author.name}}</strong>
                    <small class="text-muted"> - há 5 minutos</small>
                  </div>
                  <div class="bth-comment__content">
                    <div ng-show="!a.editing">
                      {{a.text}}
                    </div>
                    <div ng-show="a.editing">
                      <div class="bth-comment__input input-group" ng-class="{'bth-comment__input--recording': a.recording}">
                        <textarea class="form-control" ng-model="a.text" placeholder="Compartilhe sua opinião"></textarea>
                        <div class="input-group-btn">
                          <button class="btn btn-link" si-speech="a.text" si-speech-processing="a.recording" si-speech-supported="isSupported" ng-show="isSupported">
                            <i class="fa fa-fw fa-stop" ng-show="a.recording"></i>
                            <i class="fa fa-fw fa-microphone" ng-show="!a.recording"></i>
                          </button>
                          <button class="btn btn-link" ng-show="!a.recording">
                            <i class="fa fa-fw fa-paperclip"></i>
                          </button>
                        </div>
                      </div>
                      <button class="btn btn-sm btn-primary" ng-click="toggleEdit(a)" ng-disabled="a.recording">
                        Comentar
                        <small>(CTRL + ENTER)</small>
                      </button>
                      <button class="btn btn-sm btn-default" ng-click="toggleEdit(a)" ng-disabled="a.recording">
                        Cancelar
                      </button>
                    </div>
                  </div>
                  <div class="bth-comment__actions" ng-show="!a.editing">
                    <button class="btn btn-sm btn-link" data-placement="top" bf-popover="'/tributos-core/cadastros/creditos-tributarios/thumbs-popover.html'">
                      <i class="fa fa-fw fa-thumbs-up"></i>{{a.likes.length}} pessoas curtiram</button>
                    <button class="btn btn-sm btn-link" ng-click="answer.collapse = !answer.collapse">
                      <i class="fa fa-fw fa-reply"></i>RESPONDER</button>
                    <button class="btn btn-sm btn-link" ng-click="toggleEdit(a)">
                      <i class="fa fa-fw fa-pencil"></i>EDITAR</button>
                    <button class="btn btn-sm btn-link" ng-click="removeComment(c.answers, $index)">
                      <i class="fa fa-fw fa-trash-o"></i>EXCLUIR</button>
                  </div>
                  <div class="bth-comment__attach" ng-init="a.attachments = []" ng-show="a.attachments.length">
                    <!-- Lista de itens do componente de anexos -->
                    <ul class="bth-attach-items bth-attach-items--condensed bth-attach-items--grid">
                      <li class="bth-attach-item" ng-repeat="attachment in a.attachments">
                        <div class="bth-attach-item__view" ng-click="vm.openImage(attachment.file.thumb.uri)" ng-if="attachment.file.thumb.type == 'image'">
                          <a href="" title="Visualizar" class="bth-attach-item__view-trigger">Visualizar</a>
                        </div>
                        <div class="bth-attach-item__thumb">
                          <span class="bth-attach-item__thumb-icon" data-message-error="{{attachment.file.error.message}}" ng-if="attachment.file.thumb.type == 'icon'"
                            ng-class="attachment.file.thumb.color">
                            <i class="fa fa-fw" ng-class="attachment.file.thumb.icon"></i>
                          </span>
                          <span class="bth-attach-item__thumb-image" ng-if="attachment.file.thumb.type == 'image'" ng-style="{'background-image': 'url(' + attachment.file.thumb.uri + ')'}">
                            <i class="fa fa-fw fa-image"></i>
                          </span>
                          <span class="bth-attach-thumb-overlay" ng-if="attachment.file.thumb.type == 'image'">
                            <a href="" class="bth-attach-thumb-overlay__action" ng-click="vm.openImage(attachment.file.thumb.uri)" title="Visualizar">
                              <i class="fa fa-fw fa-eye"></i>
                            </a>
                          </span>
                        </div>
                        <div class="bth-attach-item__footer">
                          <div class="bth-attach-item__name">
                            <span class="bth-attach-item__description">{{attachment.file.name}}</span>
                            <span class="bth-attach-item__extension">{{attachment.file.extension}}</span>
                          </div>
                          <span class="bth-attach-item__actions">
                            <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Baixar">
                              <i class="fa fa-fw fa-download"></i>
                            </button>
                            <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Excluir" ng-click="vm.removeFile($flow, $index)"
                              ng-class="{'link-disabled': disabled}">
                              <i class="fa fa-fw fa-trash-o"></i>
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bth-card bth-card--filled" uib-collapse="!answer.collapse" ng-init="answer = {}">
          <div class="bth-card__body">
            <div class="bth-comment">
              <div class="bth-comment__main">
                <div class="bth-comment__thumb">
                  <img src="photo.jpg" alt="">
                </div>
                <div class="bth-comment__container">
                  <div class="bth-comment__content">
                    <div class="bth-comment__input input-group" ng-class="{'bth-comment__input--recording': recording}">
                      <textarea id="inpComment" class="form-control" ng-model="answer.text" placeholder="Compartilhe sua opinião"></textarea>
                      <div class="input-group-btn">
                        <button class="btn btn-link" si-speech="answer.text" si-speech-processing="recording" si-speech-supported="isSupported" ng-show="isSupported">
                          <i class="fa fa-fw fa-stop" ng-show="recording"></i>
                          <i class="fa fa-fw fa-microphone" ng-show="!recording"></i>
                        </button>
                        <button class="btn btn-link" ng-show="!recording">
                          <i class="fa fa-fw fa-paperclip"></i>
                        </button>
                      </div>
                    </div>
                    <button class="btn btn-sm btn-primary" ng-click="answer = addComment(c.answers, answer);answer.collapse = !answer.collapse" ng-disabled="recording">
                      Comentar
                      <small>(CTRL + ENTER)</small>
                    </button>
                    <button class="btn btn-sm btn-default" ng-click="answer.collapse = !answer.collapse" ng-disabled="recording">
                      Cancelar
                    </button>
                  </div>
                  <div class="bth-comment__attach" ng-init="answer.attachments = []" ng-show="answer.attachments.length">
                    <!-- Lista de itens do componente de anexos -->
                    <ul class="bth-attach-items bth-attach-items--condensed bth-attach-items--grid">
                      <li class="bth-attach-item" ng-repeat="attachment in answer.attachments">
                        <div class="bth-attach-item__view" ng-click="vm.openImage(attachment.file.thumb.uri)" ng-if="attachment.file.thumb.type == 'image'">
                          <a href="" title="Visualizar" class="bth-attach-item__view-trigger">Visualizar</a>
                        </div>
                        <div class="bth-attach-item__thumb">
                          <span class="bth-attach-item__thumb-icon" data-message-error="{{attachment.file.error.message}}" ng-if="attachment.file.thumb.type == 'icon'"
                            ng-class="attachment.file.thumb.color">
                            <i class="fa fa-fw" ng-class="attachment.file.thumb.icon"></i>
                          </span>
                          <span class="bth-attach-item__thumb-image" ng-if="attachment.file.thumb.type == 'image'" ng-style="{'background-image': 'url(' + attachment.file.thumb.uri + ')'}">
                            <i class="fa fa-fw fa-image"></i>
                          </span>
                          <span class="bth-attach-thumb-overlay" ng-if="attachment.file.thumb.type == 'image'">
                            <a href="" class="bth-attach-thumb-overlay__action" ng-click="vm.openImage(attachment.file.thumb.uri)" title="Visualizar">
                              <i class="fa fa-fw fa-eye"></i>
                            </a>
                          </span>
                        </div>
                        <div class="bth-attach-item__footer">
                          <div class="bth-attach-item__name">
                            <span class="bth-attach-item__description">{{attachment.file.name}}</span>
                            <span class="bth-attach-item__extension">{{attachment.file.extension}}</span>
                          </div>
                          <span class="bth-attach-item__actions">
                            <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Baixar">
                              <i class="fa fa-fw fa-download"></i>
                            </button>
                            <button class="btn btn-link btn-xs bth-attach-item__actions-item" title="Excluir" ng-click="vm.removeFile($flow, $index)"
                              ng-class="{'link-disabled': disabled}">
                              <i class="fa fa-fw fa-trash-o"></i>
                            </button>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
