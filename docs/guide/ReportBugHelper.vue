<script setup>
import { nextTick, onMounted } from 'vue'
import Requests from '@/lib/request'

let copy

onMounted(() => {
    import('@/lib/clipboard').then(module => {
        console.log(module)
        copy = module.clipboardCopy
    })
})

const emit = defineEmits(['upload'])

const request = new Requests({
    host: 'https://www.mayertalk.top/'
})

function getItem (key) {
    return JSON.parse(localStorage.getItem(key))
}

function getData () {
    return JSON.stringify({
        config: getItem('data.config'),
        settings: getItem('data.settings'),
        chats: getItem('data.chats'),
        chars: getItem('data.chars'),
        images: []
    })
}

const ErrorMessage = {
    422: '数据文件过大',
    400: '请求参数错误',
    429: '每十分钟内仅能上传一次数据'
}

function upload () {
    request.post({
        url: 'upload_debug_data',
        data: {
            data: getData()
        },
        error (data) {
            alert(ErrorMessage[data.response?.status] || '请求失败')
        },
        success (data) {
            if (data.data.code === 200) {
                emit('upload')
                copy(data.data.id)
                alert('已复制ID: ' + data.data.id)
                nextTick(() => {
                    document.querySelector('#report-bar > div > pre > code > span:nth-child(1) > span').innerText = data.data.id
                })
            } else {
                alert(data.data.message)
            }
        }
    })
}
</script>

<template>
    <div class="custom-button" @click="upload">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""
             style="width: 20px; height: 20px">
            <path fill="white"
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4
              38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4
              38.4 0 1 0-54.272-54.336L456.192 600.384z"></path>
        </svg>
    </div>
</template>

<style scoped>
.custom-button {
    width: 100px;
    height: 30px;
    box-shadow: dimgray 0 1px 5px 2px;
    background: rgb(0, 191, 255);
    transition: background-color ease 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-button:hover {
    background-color: rgb(0, 169, 230);
}
</style>
