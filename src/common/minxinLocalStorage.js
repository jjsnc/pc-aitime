export default {
    data() {
        return {
            language: 'zh'
        }
    },
    created: function () {
        this.language = localStorage.getItem("language");
    }
}

