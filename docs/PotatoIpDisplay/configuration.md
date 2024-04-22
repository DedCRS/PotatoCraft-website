---
sidebar_position: 2
description: 本文提供 PotatoIpDisplay 配置文件说明
---

# 配置文件

`options.mode:` 默认值 `"ip2region"`。查询模式。
  - `"ip2region"`：【推荐！】使用 [Ip2region](https://github.com/lionsoul2014/ip2region) 查询（本地数据库）
  - `"pconline"`：使用 [太平洋网络IP地址查询Web接口](http://whois.pconline.com.cn/) 查询（在线接口）
  
:::info
建议使用 `ip2region` ，因为这是基于本地的，并且不受网络因素影响。<br/>
此外，插件会在加载时**自动保存**内置的 `ip2region.xdb` 至插件目录，如果遇到问题，请 [手动下载](https://github.com/lionsoul2014/ip2region/tree/master/data) 。
:::

`options.xdb-buffer:` 默认值 `"vindex"`。xdb 缓存模式。
  -  `"none"`: 完全基于文件，不进行缓存。
  - `"vindex"`: 额外占用固定的 512 KB 内存，缓存 VectorIndex 数据。
  - `"cbuff"`: 额外占用文件大小的内存，缓存整个 ip2region.xdb。

缓存有助于减少磁盘 I/O 操作，并在一定程度上提升查询速度。

> 即使是完全基于 xdb 文件的查询，单次查询响应时间在十微秒级别。
*（来自 ip2region README [[src]](https://github.com/lionsoul2014/ip2region#3%E6%9E%81%E9%80%9F%E6%9F%A5%E8%AF%A2%E5%93%8D%E5%BA%94)）*

:::tip
自 `1.2` 版本起，PotatoIpDisplay 现在支持 PAPI 了。[变量列表](intro#placeholders)

如果你想使用本插件内置的格式化功能，请将设置 `messages.player-chat.enabled` 为 `true`。
:::

## config.yml
```
# PotatoIpDisplay-bukkit 配置文件
# 一款用于显示玩家 IP 归属地的 Minecraft 插件
# 详情：[https://github.com/dmzz-yyhyy/PotatoIpDisplay]

# 请勿修改！
config-version: 1

# 常规设置
options:
  # 查询模式: "pconline"（在线 API）或 "ip2region"（本地）
  # "ip2region" 模式为本地查询，插件会自动保存内置的文件至对应路径。
  # 也可以从 [https://github.com/lionsoul2014/ip2region/tree/master/data] 下载
  mode: "ip2region"
  
  # 缓存模式：只有模式设置为 ip2region 时生效，用于加速查询。
  # "none": 完全基于文件，不进行缓存。
  # "vindex": 额外占用固定的 512 KB 内存，缓存 VectorIndex 数据。
  # "cbuff": 额外占用文件大小的内存，缓存整个 ip2region.xdb。
  xdb-buffer: "vindex"
  
  # 开启 bStats 统计
  allow-bstats: true

# 消息设置
messages:
  player-chat:
    # 是否接管玩家消息事件。
    # 与其他消息格式化插件冲突。
    enabled: false
    # 消息格式
    string: "§7[§b%ipAttr%§7] §f%playerName% §7>> §f%msg%"

  player-login:
    # 是否在玩家登录后发送一条消息显示 IP 归属地。
    enabled: true
    # 消息格式
    string: "§7[§6PotatoIpDisplay§7] §e您当前IP归属地 §7[§b%ipAttr%§7]"

# Placeholder API 设置
papi:
  # 启用 PAPI 支持。需要安装 Placeholder API。
  enabled: false
  # 可用变量：
  # [https://github.com/dmzz-yyhyy/PotatoIpDisplay#placeholder-api]

```
要加载默认配置文件，将其重命名为`config.yml.bak`，即可在下次加载时生成。