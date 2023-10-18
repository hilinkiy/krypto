const app = {
    data() {
        return {
            placeholder: 'Search',
            navTitle: 'Home',
            d: '1D',
            w: '1W',
            m: '1M',
        }
    },

    methods: {

    },
};

Vue.createApp(app).mount('#nav');

const chart = {
    data() {
        return {
            d: '1D',
            w: '1W',
            m: '1M',
        }
    },

    methods: {

    },
};

Vue.createApp(chart).mount('#chart');