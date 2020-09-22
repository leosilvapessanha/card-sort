Vue.component('app-question', {
    data: () => {
        return {
          message: "",
        }
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
        onChange: {
          type: Function,
        },
    },
    methods: {
        emitAction: function(action){
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
                <input v-model="message" @change="onChange" type="text" :placeholder="texts.questionPlaceholder" required />
                <span class="focus"></span>
            </div>
            <button @click="emitAction('finish')" :disabled="!authenticated.userName || loading" class="btn-primary" type="submit">
                <span v-for="t in texts.finishButton" v-html="t"></span>
            </button>
          </div>
        </main>
    `,
});

