// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    modules: [
        '@nuxtjs/svg-sprite',
        '@nuxtjs/device',
        '@pinia/nuxt'
    ],
    // svg-sprite-plugin
    svgSprite: {
        input: '~/assets/icons/svg',
        output: '~/assets/icons/sprite'
    },
    // tailwind
    css: ['~/assets/tailwindStyles/main.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_variables.scss" as *;'
                }
            }
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
})
