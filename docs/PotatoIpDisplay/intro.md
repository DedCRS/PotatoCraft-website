---
sidebar_position: 1
description: PotatoIpDisplay 介绍页面
---

# 介绍

[PotatoIpDisplay](https://github.com/dmzz-yyhyy/PotatoIpDisplay) 是一款用于显示玩家 IP 归属地的 Bukkit 插件。

在玩家加入服务器后，插件会根据配置的模式查询玩家的 IP 归属地信息，支持 Placeholder API。

## 特性

### 高效率
- `ip2region` 可以提供微秒级别的查询响应时间，且支持数据库内存缓存
- 异步的查询
- 基于 IP 的结果缓存，极速响应

### 多种查询模式
- `ip2region` - [lionsoul2014/ip2region](https://github.com/lionsoul2014/ip2region) 本地查询
- `pconline` - [太平洋网络IP地址查询Web接口](http://whois.pconline.com.cn/) 在线查询
- `ip-api` - [IP-API.com IP Geolocation API](https://ip-api.com/) 在线查询

:::warning 不适用
本文档不适用于 PotatoIpDisplay-Velocity，目前其开发进度落后，请参考 [这里](https://github.com/dmzz-yyhyy/PotatoIpDisplay/tree/velocity) 。
:::

## 功能

- 指定查询模式
- Placeholder API 支持
- 内置基本的消息格式化功能（见下图）**（默认关闭）**

![chatdemo](img/chatdemo.png)

## 使用方法 {#installation_bukkit}

1. 将插件放进 `plugins/`
2. 启动服务器
3. 修改配置文件，可参考 [配置文件说明](configuration)
4. 重启服务器（推荐）或 [重载插件](commands#list)
## Placeholder 变量 {#placeholders}

:::note 不适用
本文档不适用于 PotatoIpDisplay-Velocity，目前其开发进度落后，请参考 [这里](https://github.com/dmzz-yyhyy/PotatoIpDisplay/tree/velocity) 。
:::



## bStats

<a href="https://bstats.org/plugin/bukkit/PotatoIpDisplay/21473">![bStats](https://bstats.org/signatures/bukkit/PotatoIpDisplay.svg)</a>
