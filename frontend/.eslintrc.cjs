module.exports = {
    root: true,
    extends: [
        '@nuxt/eslint-config'
    ],
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'vue/multi-word-component-name': 0,
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 0
    }
}