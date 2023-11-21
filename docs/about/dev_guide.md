:::warning
此页内容还需完善
:::

## 静态资源

目前静态资源储存在 `https://static.mayertalk.top/` ，由 [MayerTalkResource](https://github.com/Arkfans/MayerTalkResource)
自动维护  
防盗链开放`127.0.0.1`和`192.168.*`，无需本地部署资源  
如需在开发时更改静态站链接，请编辑 [`src\lib\dev.js`](https://github.com/Arkfans/MayerTalk/blob/main/src/lib/dev.js)

```javascript
const characterHost = null  // 角色列表&头像
const translationHost = null // 翻译文本

export {
    characterHost,
    translationHost
}
```

## 翻译

clone [MayerTalkTranslation](https://github.com/MayerTalk/MayerTalkTranslation)， 启动 [scripts/server.py](https://github.com/MayerTalk/MayerTalkTranslation/blob/main/scripts/server.py)  
将服务器地址填入`translationHost`，编辑[`translation.json`](https://github.com/MayerTalk/MayerTalkTranslation/blob/main/translation.json)即可本地调试翻译

## 别名搜索

别名搜索依靠外部API[(ArkAlias)](https://alias.arkfans.top/)，仅在联网状态可用  
Github: [Arkfans/ArknightsAlias](https://github.com/Arkfans/ArknightsAlias)