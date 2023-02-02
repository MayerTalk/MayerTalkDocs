import DefaultTheme from 'vitepress/theme'
import './custom.css'
import VideoGif from '../components/VideoGif.vue'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.component('VideoGif', VideoGif);
        DefaultTheme.enhanceApp(ctx)
    }
}
