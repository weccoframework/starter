import * as wecco from "@weccoframework/core"

// Model defines the "model" of the application. It is a simple counter implemented
// as a class with a "business" method to update the counter.
class Model {
    constructor(public readonly count: number) {}

    inc() {
        return new Model(this.count + 1)
    }
}

// Message defines the messages that are send to the updater. In this very
// simple application, it is a simple string.
type Message = "inc"

// update implements the "update" part of the app. It applies the given message
// to the given model and returns a model instance to render.
function update(model: Model, _: Message): Model {
    return model.inc()
}

// view implements the apps view by rendering the given model. It uses the
// wecco.html tag for a template string.
function view (model: Model, context: wecco.AppContext<Message>) {
    return wecco.html`<p>
        <button class="btn btn-primary" @click=${() => context.emit("inc")}>
            You clicked me ${model.count} times
        </button>
    </p>`
}

// Bootstrap the application once the DOM is ready.
document.addEventListener("DOMContentLoaded", () => {
    wecco.app(() => new Model(0), update, view, "#app")
})