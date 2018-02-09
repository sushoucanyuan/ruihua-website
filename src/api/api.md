
## getCitys

- 参数：无

- 返回字段：placeid, name

- 说明：获取所有城市

## getHouse

- 参数：planid

- 返回字段：city, title, rmb, type, area ...

- 说明：获取一个房子全部信息

## getHouses

- 参数：num, [index], [type], [sortway], [placeid]

- 返回字段：planid, picurl, city, title, rmb, type, area ...

- 说明：获取{num}个房子。index 默认 0；type：0时间1价格，默认时间；sortway：0正1倒，默认正；placeid 默认全部地区

## getHousesPage

- 参数：[placeid]

- 返回字段：一个数

- 说明：获取房子页数

## getHotHouses

- 参数：num, [placeid]

- 返回字段：planid, picurl, city, title, rmb, type, area ...

- 说明：获取{num}个推荐房子，placeid 默认全部地区

## getHouseInfo

- 参数：num

- 返回字段：id, title, publishAt

- 说明：获取{num}条房产资讯

