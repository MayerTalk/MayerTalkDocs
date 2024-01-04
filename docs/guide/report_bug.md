---
title: bug反馈
---

<script setup>
import { ref } from 'vue'
import ReportBugHelper from './ReportBugHelper.vue'

const showReportId = ref(false)
const error = ref(false)
</script>

:::tip
请按照如下步骤操作
:::

## 1.检查浏览器版本是否最新

老版本浏览器可能不支持新特性，导致编辑器无法正常工作

## 2.上传数据协助bug修复(可选)

上传的数据仅用于debug，不会上传图片

<ClientOnly>
<ReportBugHelper @upload="showReportId=true" @error="error=true"></ReportBugHelper>
</ClientOnly>

<div v-if="showReportId && error">
ID: {{ recordId }} 
</div>

<div v-if="showReportId" id="report-bar">

```text
{{ recordId }}
```

</div>

## 3.多次操作，查看bug是否稳定出现

- 如是，请尽可能简洁地概括步骤，这对开发者了解bug有很大帮助。

## 4.截图或录制视频

图像可以帮助开发者更加直观地了解bug

## 5.填写反馈问卷

[问卷链接](https://wj.qq.com/s2/11537223/aa61/)