Vue.component('app-question', {
    data: () => {
        return {}
    },
    props: {
        loading: {
            default: false,
        },
        authenticated: {
            default: false,
        },
        texts: {
            type: Object,
            default: window.texts
        },
    },
    methods: {
        emitAction(action) {
            this.$emit(action);
        },
    },
    template: `
        <main class="intro">
            <header class="intro__header">
                <h1 v-for="t in texts.question" v-html="t"></h1>
            </header>
          <div class="intro__form">
            <div class="input">
                <input type="text" @input="emitAction('changeInput')" :placeholder="texts.questionPlaceholder" required />
                <span class="focus"></span>
            </div>
            <button @click="emitAction('finish')" :disabled="!authenticated.userName || loading" class="btn-primary" type="submit">
                <span v-for="t in texts.finishButton" v-html="t"></span>
            </button>
          </div>
        </main>
    `,
});

