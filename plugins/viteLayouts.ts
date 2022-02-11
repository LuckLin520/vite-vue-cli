import Layouts from 'vite-plugin-vue-layouts'

export default () =>
    Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default'
    })