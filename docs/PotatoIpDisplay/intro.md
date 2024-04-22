---
sidebar_position: 1
description: PotatoIpDisplay 介绍页面
---

# 介绍

[PotatoIpDisplay](https://github.com/dmzz-yyhyy/PotatoIpDisplay) 是一款用于显示玩家 Ip 归属地的 Bukkit 插件。

在玩家加入服务器后，插件会根据配置的模式查询玩家的 IP 归属地信息，支持 Placeholder API。

::: 不适用
本文档不适用于 PotatoIpDisplay-Velocity，目前其开发进度落后，请参考 [这里](https://github.com/dmzz-yyhyy/PotatoIpDisplay/tree/velocity) 。
:::

![papidemo](img/papidemo.png)

## 功能

- 指定查询模式
- Placeholder API 支持
- 内置基本的消息格式化功能（见下图）**（默认关闭）**

![chatdemo](img/chatdemo.png)

## 使用方法 {#installation_bukkit}

1. 将插件放进 `plugins/`
2. 启动服务器
3. 修改配置文件。可参考 [配置文件说明](configuration)。
4. 重启服务器 ~~或重载插件（施工中）~~

## Placeholder 变量 {#placeholders}


| 变量                           | 描述          | 返回内容(`ip2region`) | 返回内容(`pconline`) |
|:-----------------------------|:------------|:------------------|:-----------------|
| `%potatoipdisplay_ip%`       | 玩家的 IP      | `11.45.1.4`       | `11.45.1.4`      |
| `%potatoipdisplay_country%`  | IP 所属国家     | `中国`              | `中国`             |
| `%potatoipdisplay_province%` | IP 所属省份     | `上海`              | `上海市`            |
| `%potatoipdisplay_city%`     | IP 所属城市     | `上海`              | `上海`             |
| `%potatoipdisplay_region%`   | IP 所属区域     | `未知`              | `未知`             |
| `%potatoipdisplay_isp%`      | 运营商信息       | `联通`              | `上海市 联通`         |
| `%potatoipdisplay_fallback%` | fallback 变量 | `上海`              | `上海`             |

## bStats

<a href="https://bstats.org/plugin/bukkit/PotatoIpDisplay/21473">![bStats](https://bstats.org/signatures/bukkit/PotatoIpDisplay.svg)</a>
