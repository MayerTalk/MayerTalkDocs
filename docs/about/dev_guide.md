:::warning
此页内容还需完善
:::

## 静态资源

目前静态资源都储存在 `https://static.mayertalk.top/` ，由 [MayerTalkResource](https://github.com/Arkfans/MayerTalkResource) 自动维护  
防盗链开放了`127.0.0.1`和`192.168.*`，对于大多数开发者，无需关心资源问题  
如需更改静态站链接，它在 [`src\lib\constance.js#L3`](https://github.com/Arkfans/MayerTalk/blob/main/src/lib/constance.js#L3)

## 别名搜索

别名搜索依靠外部API[(ArkAlias)](https://alias.arkfans.top/)，仅在联网状态可用  
Github: [Arkfans/ArknightsAlias](https://github.com/Arkfans/ArknightsAlias)