---
sidebar_position: 4
---

# 命令列表

完整的命令列表与命令用法。

> 要以管理员身份运行命令，请使用`/resadmin`而不是`/res`。

## 一般命令

- `/res ? [页码]` - 显示帮助，输入数字进入指定的页面

## 选择命令

- `/res select [x y z]` - 选择一个要保护的长方体区域，使用选择工具(默认为木斧)或者指定X、Y、Z轴与你所站的中心点的距离 (如 "10 5 10" 将选择一个 `21长 * 11高 * 21宽` 的区域)
- `/res select chunk` - 选择整个区块
- `/res select auto [玩家名]` - 开启自动选择工具
- `/res select expand [数值]` - 向着面对的方向扩展选区
- `/res select size` - 显示选择区域的大小
- `/res select shift [数值]` - 向着面对的方向移动选区

## 创建命令

- `/res area [add/remove/replace] [区域名称]` - 向领地添加或删除区域。这些可以与同一领地的区域重叠。
- `/res create [领地名称]` - 创建一个领地
- `/res remove [领地名称]` - 删除一个领地
- `/res removeall` - 删除所有的领地
- `/res subzone [子区名称]` - 在你的领地中创建一个子区域。你必须是业主才能这样做。
- `/res auto (领地名称) (radius)` - 在你周围创建最大允许的领地
- `/res confirm` - 确认移除一个领地

## 信息命令

- `/res area list [领地名称]` - 列出领地内的区域
- `/res show` - 显示你当前所处的领地范围
- `/res area listall [领地名称]` - 列出领地的区域及其坐标
- `/res current` - 显示你目前所处的领地
- `/res info` - 获得一个领地的信息，离开后可以查看你所在的领地的信息
- `/res list [玩家ID]` - 列出你自己或玩家的领地
- `/res listall` - 列出所有的领地
- `/res listallhidden` - 列出所有隐藏的居住地
- `/res listhidden` - 列出隐藏的居住地
- `/res limits` - 列出所有重要的限制
- `/res sublist [领地名称] [页面]` - 列出当前领地的所有子区
- `/res version` - 列出插件的版本信息