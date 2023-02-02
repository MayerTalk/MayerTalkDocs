<script setup>
    import {ref, onMounted} from 'vue'

    const {src} = defineProps(['src']);
    const video = ref(null);

    onMounted(() => {
        try {
            const obs = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    video.value.src = '/docs' + video.value.dataset.src;
                    video.value.load();
                    obs.unobserve(entries[0].target)
                }
            });
            obs.observe(video.value)
        } catch (e) {
            video.value.src = '/docs' + video.value.dataset.src;
            video.value.load();
        }
    })
</script>

<template>
    <video ref="video" style="width: 100%" :data-src="src" muted playsinline loop autoplay/>
</template>