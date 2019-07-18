# 服务

## TMS
`tms`是切片服务的一种规则，但不是`OGC`的标准。它是`OSGeo`提出的切片规则，切片源点是左下角。`geoserver`的`tms`服务就是按照这个标准来的。
::: warning  
MapboxGL 在加载`tms`服务时，需要注意的一个地方是`source`里面的`scheme`属性。它是定义了服务切片规则，有两个值可选 **`xyz`** 和 **`tms`**，默认是 **`xyz`**。
其中 **`xyz`** 代表常用的切片规则，即`OGC`标准，切片源点在左上角。**`tms`** 是代表的按照`OSGeo`提出切片规则。
:::
加载示例：(geoserver)
```js
"{source-id}": {
  "type": "vector",
  "tiles": [
    "http://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@pbf/{z}/{x}/{y}.pbf"
  ],
  "scheme": "tms" //此处修改为 tms
},
 ```

<ClientOnly>
  <code-view name="tms"/>
</ClientOnly>


## WMTS

## WFS
 
