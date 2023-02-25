import * as wecco from "@weccoframework/core"

class Model {
    constructor(public readonly count: number) {}

    inc() {
        return new Model(this.count + 1)
    }
}

type Message = "inc"

function update(model: Model, message: Message): Model {
    return model.inc()
}

function view (model: Model, context: wecco.AppContext<Message>) {
    return wecco.html`<p>
        <button class="btn btn-primary" @click=${() => context.emit("inc")}>
            You clicked me ${model.count} times
        </button>
    </p>`
}

document.addEventListener("DOMContentLoaded", () => {
    wecco.app(() => new Model(0), update, view, "#app")
})