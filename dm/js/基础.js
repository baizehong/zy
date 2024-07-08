

zfc = "字符串";
jh = "集合";
总 = {};
总计 = {};
class 识别 {
  设备 = function (self = "") {};
  网址参数 = function () {
    let 参数sz = {
      ":": {},
      "/": {},
      "?": {},
      "#": {},
    };
    let 参数sz1 = {};
    // 二分 分割
    参数sz1["?"] = decodeURIComponent(window.location.href).split("?");
    // 头 :
    参数sz1[":"] = 参数sz1["?"][0].split(":");
    参数sz[":"] = 参数sz1[":"][0];
    // 地址 /
    参数sz["/"] = 参数sz1["?"][0].split(参数sz[":"] + ":/")[1].split("/");
    if (1 in 参数sz1["?"]) {
      参数sz1["#"] = 参数sz1["?"][1].split("#");
      参数sz1["?"] = 参数sz1["#"][0].split("&");
      for (let i = 0; i < 参数sz1["?"].length; i++) {
        参数sz1["ls"] = 参数sz1["?"][i].split("=");
        参数sz["?"][参数sz1["ls"][0]] = 参数sz1["ls"][1];
      }
      if (1 in 参数sz1["#"]) {
        参数sz["#"] = 参数sz1["#"][1];
      } else {
        参数sz["#"] = {};
      }
    } else {
      参数sz["?"] = {};
    }
    // console.log(参数sz1)
    // console.log('参数sz')
    // console.log(参数sz)
    return 参数sz;
  };
  地址 = function (查找地址) {
    let 返回地址wb = "";
    for (let i in 总计["常量"]["地址"]) {
      if (查找地址 == i) {
        返回地址wb = "/zy" + 总计["常量"]["地址"][i]["夹"];
        //
        break;
      } else {
        for (let ii in 总计["常量"]["地址"][i]) {
          if (查找地址 == ii) {
            返回地址wb =
              "/zy" +
              总计["常量"]["地址"][i]["夹"] +
              总计["常量"]["地址"][i][ii];
            // break
          }
        }
      }
    }
    if (返回地址wb == "") {
      返回地址wb = "没有设定";
      日志(返回地址wb);
    } else {
      返回地址wb = 返回地址wb.slice(1);
    }
    return 返回地址wb;
  };
}

class 输出 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }


  日志 = function (日志内容 = "") {
    // console.log(typeof(日志内容))
    // if (typeof (日志内容) == 'object') {
    //   日志内容 = 集合.转(日志内容, zfc);
    // } else {
    //   日志内容 = 日志内容 + ''
    // }
    // console.log(日志内容)
    console.log(时间.文本(时间.数组()));
    console.log(日志内容);
    内存=window.performance.memory;
    内存["上下文内可用堆的最大体积"]=内存.jsHeapSizeLimit
    内存["已分配的堆体积"]=内存.totalJSHeapSize
    内存["已分配的堆体积"]=内存.totalJSHeapSize
    内存["已分配的堆体积"]=内存.totalJSHeapSize
    {
      jsHeapSizeLimit: 4294705152; // 上下文内可用堆的最大体积，以字节计算。
      totalJSHeapSize: 82412148; // 已分配的堆体积，以字节计算。
      usedJSHeapSize: 73731436; // 当前 JS 堆活跃段（segment）的体积，以字节计算。
    }
    console.log(内存)
    // .encode(sys.getfilesystemencoding())
    return 日志内容;
  };

  输出 = function ($内容 = "") {
    时间wb = 时间.文本(时间.数组());
    if (时间wb in 调试输出) {
      if (通用.类型(调试输出[时间wb]) != "对象") {
        调试输出[时间wb] = {};
      }
    } else {
      调试输出[时间wb] = {};
    }
    // console.log($内容)
    调试输出[时间wb][集合.个数(调试输出[时间wb])] = $内容;
  }; // 输出，结束

  输出1 = function ($内容 = 调试输出) {
    ls名 = "调试输出js";
    if (!id(ls名)) {
      ls名 = "调试输出js";
    }
    id(ls名).innerHTML +=
      "<pre>" +
      时间.文本(时间.数组()) +
      " " +
      JSON.stringify($内容, null, 2) +
      "</pre>";
    console.log($内容);
  };
  返回值 = function (内容) {
    return 输出0;
  };
  // 状态 = function (文本) {
  //   状态栏 = id("状态栏");
  //   状态栏.innerHTML = 文本;
  //   return "";
  // };
}
class 时间 {
  数组 = function (间 = "") {
    if (间 == "") {
      间 = new Date();
    }
    let 时间数组 = {
      间: 间,
      年: 间.getFullYear(),
      月: 间.getMonth() + 1,
      日: 间.getDate(),
      时: 间.getHours(),
      分: 间.getMinutes(),
      秒: 间.getSeconds(),
    };
    return 时间数组;
  };
  距离 = function (时间2 = 时间.数组(), 时间1 = 时间.数组()) {
    let 时间数组 = {
      年: 时间2["年"] - 时间1["年"],
      月: 时间2["月"] - 时间1["月"],
      日: 时间2["日"] - 时间1["日"],
      时: 时间2["时"] - 时间1["时"],
      分: 时间2["分"] - 时间1["分"],
      秒: 时间2["秒"] - 时间1["秒"],
    };
    let 时间数组keys = Object.keys(时间数组);
    let 比较 = "等";
    for (let i = 0; i < 时间数组keys.length; i++) {
      if (时间数组[时间数组keys[i]] > 0) {
        比较 = "大";
        i = 时间数组keys.length;
      } else if (时间数组[时间数组keys[i]] < 0) {
        比较 = "小";
        i = 时间数组keys.length;
      }
    }
    时间数组["比较"] = 比较;
    // delete 比较;
    return 时间数组;
  };
  文本 = function (时间1 = this.数组()) {
    return (
      时间1["年"] +
      "-" +
      时间1["月"] +
      "-" +
      时间1["日"] +
      " " +
      时间1["时"] +
      ":" +
      时间1["分"] +
      ":" +
      时间1["秒"]
    );
  };
}

class 通用 {
  类型 = function (原) {
    let 全部类型 = {
      number: "数字",
      string: "字符串",
      bool: "布尔",
      undefined: "未定义",
      symbol: "转化值",
      // 'bigint': '数字',
      null: "null",
      array: "数组",
      object: "对象",
      date: "date",
      function: "函数",
    };
    let 全部类型键 = 集合.取键(全部类型);
    let 类型i = 0;
    while (
      Object.prototype.toString
        .call(原)
        .toLowerCase()
        .indexOf(全部类型键[类型i]) == -1
    ) {
      类型i++;
    }
    return 全部类型[全部类型键[类型i]];
  };
}
class 字符 {
  补0 = function (值, 位数) {
    值 = "" + 值;
    while (字符.长度(值) < 位数) {
      值 = "0" + 值;
    }
    return 值;
  };
  长度 = function (原) {
    if (通用.类型(原) == "字符串") {
      // 字符串
    } // 字符串，结束
    else {
      return 通用.类型(原);
    }
    return 原.length;
  }; // 输出，结束
  找 = function ($字符 = " ", $查找文字, $开始文字 = 0) {
    return $字符.indexOf($查找文字, $开始文字);
  };
  取 = function ($文本 = " ", $开始文字 = 0, $结尾文字 = "空") {
    if ($结尾文字 == "空") {
      $结尾文字 = 字符.长度($文本) - 1;
    }
    $初i = $开始文字;
    if (typeof $开始文字 != "number") {
      $初i = 字符.找($文本, $开始文字) + 字符.长度($开始文字);
    }
    $终i = $结尾文字;
    if ($结尾文字 == "空") {
      $终i = 字符.长度($文本);
    }
    if (typeof $结尾文字 != "number") {
      $终i = 字符.找($文本, $结尾文字, $初i);
    }
    if ($终i == -1) {
      $终i = 字符.长度($文本);
    }

    $文本 = $字符.substring($初i, $终i);
    return $文本;
  };
  换 = function (原, 找, 换, 找1 = "g") {
    找11 = {
      g: "全局",
      i: "不区分大小写",
    };
    re = new RegExp(找, 找1);
    return 原.replace(re, 换);
  };
}
class 集合 {
  新 = function () {
    let ls = {};
    return ls;
  };

  有 = function (集合, 名) {
    return Object.prototype.hasOwnProperty.call(集合, 名);
  };

  合并 = function (集合1, 集合2) {
    return Object.assign(集合1, 集合2);
  };

  取键 = function (对象) {
    if (typeof 对象 == "string") {
      对象 = JSON.parse(对象);
    }
    return Object.keys(对象);
  };

  个数 = function (原) {
    if (通用.类型(原) == "数组") {
      // 数组
    } // 数组，结束
    else if (通用.类型(原) == "对象") {
      // 提取键名数组
      原 = this.取键(原);
    } // 提取键名数组，结束
    else {
      return 通用.类型(原);
    }
    return 原.length;
  }; // 输出，结束

  集 = function (集合, 阶梯sz) {
    let 原jh = 集合;
    let 添加jh = 原jh;
    let 阶梯i = 0;
    while (阶梯i < this.长度(阶梯sz) - 1) {
      let 添加jh转 = {};
      if (添加jh.阶梯sz[阶梯i] == undefined) {
        添加jh.阶梯sz[阶梯i] = {};
      }
      添加jh转 = 添加jh.阶梯sz[阶梯i];
      添加jh = 添加jh转;
      阶梯i++;
    }
    return 添加jh;
  };

  加 = function (jh1, 阶梯数组, 要添加内容) {
    let 原对象 = jh1;
    let 集合添加对象 = 原对象;
    if (typeof 阶梯数组 == "object") {
      let 阶梯i = 0;
      while (阶梯i < 阶梯数组.length - 1) {
        let 集合添加中转对象 = {};
        if (typeof 集合添加对象[阶梯数组[阶梯i]] != "object") {
          集合添加对象[阶梯数组[阶梯i]] = {};
        }
        集合添加中转对象 = 集合添加对象[阶梯数组[阶梯i]];
        集合添加对象 = 集合添加中转对象;
        阶梯i++;
      }
      集合添加对象[阶梯数组[阶梯i]] = 要添加内容;
    } else {
      原对象 = Object.assign(原对象, 要添加内容);
    }
    // $调试输出[$时间sz.秒].jh加 = ''
    return 原对象;
  };

  取 = function (原对象, 阶梯数组) {
    // 原对象 = this.集合;
    let 集合添加对象 = 原对象;
    if (typeof 阶梯数组 == "object") {
      let 阶梯数组k = Object.keys(阶梯数组);
      let 阶梯i = 0;
      while (阶梯i < 阶梯数组k.length) {
        集合添加对象 = 集合添加对象[阶梯数组[阶梯i]];
        if (集合添加对象 == undefined) {
          集合添加对象 = {};
        }
        阶梯i++;
      }
    }
    return 集合添加对象;
  };

  转 = function (集合, 目标格式 = "zfc") {
    let 输入 = 集合;
    let 格式 = typeof 输入;
    if (目标格式 == "zfc") {
      目标格式 = "字符串";
    }
    if (目标格式 == "字") {
      目标格式 = "字符串";
    }
    if (目标格式 == "字符串") {
      目标格式 = "string";
    } else {
      目标格式 = "object";
    }
    // 输出(目标格式);
    let 目标 = "";
    if (格式 != 目标格式) {
      if (格式 == "string") {
        if (字符.找(输入, "{") === 0) {
          目标 = JSON.parse(输入);
        } else {
          目标 = {};
        }
      } else if (格式 == "object") {
        输入 = Object.assign({}, 输入);
        目标 = JSON.stringify(输入, null, 2);
      } else {
        目标 = 格式;
      }
    } else {
      目标 = 输入;
    }
    return 目标;
  };

  找 = function (数组, 目标) {
    let 组i = 0;
    let 查找 = "无";
    while (组i < 数组.length) {
      if (数组[组i] == 目标) {
        查找 = 组i;
      }
      组i++;
    }
    return 查找;
  };

  序 = function (对象) {
    let 数组的键 = this.取键(对象);
    let 新数组的键 = this.新();
    let 键长 = 0;
    let 数组的键计数 = 0;
    while (数组的键计数 < this.个数(数组的键)) {
      if (
        键长 < this.个数(数组的键[数组的键计数]) &&
        数组的键[0] != 数组的键[数组的键计数]
      ) {
        新数组的键.splice(0, 0, 数组的键[数组的键计数]);
      }
      数组的键计数++;
    }
    数组的键 = 新数组的键;
    数组的键计数 = 0;
    while (数组的键计数 < this.个数(数组的键)) {
      新数组[数组的键[数组的键计数]] = 数组[数组的键[数组的键计数]];
      数组的键计数++;
    }
    let 数组 = 新数组;
    return 数组;
  };

  去重 = function ($数组) {
    if (typeof $数组 == "object") {
      if (Array.isArray($数组)) {
        arr = arr.sort();
        arrry = [arr[0]];
        for (i = 1; i < arr.length; i++) {
          if (arr[i] !== arr[i - 1]) {
            if (arr[i].charAt(0) == "h") {
              arrry.push(arr[i]);
            }
          }
        }
      }
    }
    return arrry;
  };
}

class 界面 {
  基函数 = function (
    $宽 = 总计["总名"]["节点"]["总"]["位置"]["左"] +
      总计["总名"]["节点"]["总"]["位置"]["右"],
    $高 = 总计["总名"]["节点"]["总"]["位置"]["上"] +
      总计["总名"]["节点"]["总"]["位置"]["下"]
  ) {
    //总计['变量']['基']础比例
    总计["变量"]["基"] =
      Math.round(
        Math.min(window["innerHeight"] / $高, window["innerWidth"] / $宽) *
          10000
      ) / 10000;
    return 总计;
  };
  块 = function (对象) {
    // 日志('界面.块 开始-==-=-=-=-=-=-=-=-=-');
    {
      /*
              
              块({
                  '父名':'',
                  '本名':'',
                  '类型':'',
                  '内容':''
              });
              
            */
    }

    // 日志(对象);
    if ("属性" in 对象) {
      对象 = 集合.加(对象, "", 对象.属性);
      delete 对象.属性;
    }
    对象.id = 对象.本名;
    let 临时名 = 对象.id;
    // 对象.value = 对象.内容;
    // 日志(对象.本名);
    // 日志()

    let 临时块 = id(临时名);
    if (临时块 == undefined) {
      临时块 = document.createElement(对象.类型);
      临时块.id = 临时名;
      if (id(对象.父名) == undefined) {
        if (集合.找(总计["总名"]["数组"], 临时名) == "无") {
          总计["总名"]["数组"].push(临时名);
        }
      }
      id(对象.父名).appendChild(临时块);
    }
    临时块 = id(临时名);
    临时块.style["background-color"] = "#ccf1d5";
    临时块.style.border = " 1px #017010 solid ";
    临时块.style.overflow = "auto";

    // 对象 = 总计['总名'][临时名];
    if ("内容" in 对象) {
      // 用途
      if (字符.长度(对象.内容) > 0) {
        // 用途
        临时块.innerHTML = 对象.内容;
      }
    } else {
      // 用途
      对象.内容 = "";
    }

    let 对象键 = 集合.取键(对象);
    let 对象i = 0;
    while (对象i < 对象键.length) {
      // 循环，对象，写入读取
      if (对象[对象键[对象i]] == "获取") {
        对象 = 集合.加(对象, "", 临时块.getAttribute(对象键[对象i]));
      } else if (对象[对象键[对象i]] == "删除") {
        临时块.removeAttribute(对象键[对象i]);
        delete 对象[对象键[对象i]];
      } else {
        if (对象键[对象i] == "style") {
          // style，开始
          let style = {
            本: 对象["style"],
            key: 集合.取键(对象["style"]),
            i: 0,
          };
          while (style.i < 集合.个数(style.key)) {
            临时块["style"][style.key[style.i]] =
              对象["style"][style.key[style.i]];
            style.i++;
          }
        } // style，结束
        else {
          临时块.setAttribute(对象键[对象i], 对象[对象键[对象i]]);
        }
      }
      对象i = 对象i + 1;
    } // 循环，写入，对象，结束
    if (临时块.字号 > 0) {
      调试输出[时间wb]["jm块"][临时名] = 临时块.字号;
    } else {
      临时块.字号 = 总计["常量"].默认字号;
    }
    临时块.style["font-size"] =
      临时块.字号 * 总计["变量"]["基"] * 总计["变量"].设备字倍 + "px";
    对象 = this.位置输出(对象);
    return 对象;
  }; // 块，结束
  显示 = function (临时名) {
    if (id(临时名)) {
      id(临时名).innerHTML = "";
    }
    总计["总名"]["数组"] = 集合.取键(总计["总名"]["节点"]);
    let 块i = 0;
    while (块i < 总计["总名"]["数组"].length) {
      let 显示名 = 总计["总名"]["数组"][块i];
      let 显示对象 = 总计["总名"]["节点"][显示名];

      // 日志(临时名);
      // 日志(显示对象);
      if (!id(显示名) || 显示名 == 临时名) {
        // if ('父名' in 显示对象.) { // 无父名 ，开始
        // } // 无父名 ，结束
        显示对象 = this.块(显示对象);
      }

      if (显示对象.类型 == "选项") {
        总计 = 交互.选项块(显示名);
        显示对象["类型"] = "div";
        总计["总名"]["数组"] = 集合.取键(总计["总名"]);
      }
      if (显示对象.类型 == "textarea") {
        if (id(显示名).value.length > 0) {
          if (id(显示名).value.length > 200) {
            显示对象.内容 = "";
          } else {
            显示对象.内容 = id(显示名).value;
          }
        } else {
          id(显示名).value = 显示对象.内容;
        }
        if (id("选项块：" + 显示对象.父名) != undefined) {
          交互.选项("选项块：" + 显示对象.父名, 显示对象.内容);
        }
      }

      // if (!id(显示名)) {
      //   delete 总计['总名']['节点'][显示名];
      // }

      if (块i == 总计["总名"]["数组"].length) {
        日志(
          总计["总名"]["数组"][块i] +
            " 最后 " +
            块i +
            " 。总数： " +
            总计["总名"]["数组"].length
        );
      }
      块i++;
    }
    总计["总名"]["数组"] = 集合.取键(总计["总名"]["节点"]);
    return 总计;
  };

  选项块 = function (块名) {
    总计["总名"][块名].类型 = "div";
    // 输出(" 块名: "+块名);
    总计["总名"]["写入：" + 块名] = {
      父名: 块名,
      本名: "写入：" + 块名,
      位置: {
        上: 总计["总名"][块名]["位置"]["上"],
        下: 总计["总名"][块名]["位置"]["下"],
        左: 总计["总名"][块名]["位置"]["左"],
        右: 总计["总名"][块名]["位置"]["右"] - 5,
      },
      内容: 块名,
      类型: "textarea",
    };
    // 输出(" 块名: 32321");
    // 输出(总计['总名']['写入：' + 块名]);
    选项块对象 = {
      父名: 块名,
      本名: "选项块：" + 块名,
      类型: "select",
      属性: {
        onclick: ' 交互.选中("' + 块名 + '"); ',
        onchange: ' 交互.选中("' + 块名 + '"); ',
      },
      位置: {
        上: 总计["总名"][块名]["位置"]["上"],
        下: 总计["总名"][块名]["位置"]["下"],
        左:
          总计["总名"][块名]["位置"]["左"] +
          总计["总名"][块名]["位置"]["右"] -
          5,
        右: 5,
      },
    };
    // 输出(" 块名: 66");
    if (集合.找(总计["变量"].块对象, 块名) == "有") {
      选项块对象.属性 = {
        onclick: ' 交互.选中("' + 块名 + '"); ',
        onchange: ' 交互.选中("' + 块名 + '"); ',
      };
    }
    // 输出("bug 21 ");
    总计["总名"]["选项块：" + 块名] = 选项块对象;

    // 输出(总计['总名']['选项块：'+块名]);
    // 输出(" 块名1: "+块名);
    return 总计;
  };

  位置获取 = function (对象) {
    let 临时块 = id(对象.id);
    对象 = 集合.加(对象, ["位置", "上"], 临时块.clientTop / 总计["变量"]["基"]);
    对象 = 集合.加(
      对象,
      ["位置", "下"],
      临时块.clientHeight / 总计["变量"]["基"]
    );
    对象 = 集合.加(
      对象,
      ["位置", "左"],
      临时块.clientLeft / 总计["变量"]["基"]
    );
    对象 = 集合.加(
      对象,
      ["位置", "右"],
      临时块.clientWidth / 总计["变量"]["基"]
    );
    return 对象;
  };
  位置输出 = function (对象) {
    if (!id(对象.id)) {
      return 输出("没有块");
    }
    let 临时块 = id(对象.id);
    if (!对象["位置"] || 集合.取键(对象.位置).length < 4) {
      对象 = 界面.位置获取(对象);
    }
    临时块.style.position = "fixed";
    临时块.style.top = 对象["位置"]["上"] * 总计["变量"]["基"] + "px";
    临时块.style.height = 对象["位置"]["下"] * 总计["变量"]["基"] + "px";
    临时块.style.left = 对象["位置"]["左"] * 总计["变量"]["基"] + "px";
    临时块.style.width = 对象["位置"]["右"] * 总计["变量"]["基"] + "px";
    // 日志("left:" + 临时块.style.left + ';top:' + 临时块.style.top + ';width:' + 临时块.style.width + ';height:' + 临时块.style.height + ')');
    return 对象;
  };
  全屏 = function (开关, de = document.documentElement) {
    if (开关 == "开") {
      if (de.requestFullscreen) {
        de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
      } else {
        全屏(开关, (de = document));
      }
    } else {
      if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
      } else {
        全屏(开关, document);
      }
    }
  };

  备选项 = function (选项块名, 数组) {
    id("选项块：" + 选项块名).innerHTML = "";

    // 界面.单个选项('选项块：' + 选项块名, '空')
    let 选i = 0;
    while (选i < 集合.个数(数组)) {
      this.单个选项("选项块：" + 选项块名, 数组[选i]);
      选i++;
    }

    return 返回值;
  };
  单个选项 = function (临时名, 值名) {
    let 临时块 = id(临时名);

    if (临时块.options.length < 1) {
      // 至少一个选项
      临时块.innerHTML += "<option >空</option>";
    } // 至少一个选项，结束
    let 返回值 = 临时块.selectedIndex;
    if (值名 == "值") {
      return 返回值;
    }
    if (值名 > 1 && 临时块.options.length - 1 < 值名) {
      // 不超取
      临时块.innerHTML += "<option >超过选取</option>";
      return "超过选取";
    } // 不超取，结束
    返回值 = 临时块.options[返回值].text;
    if (值名 == "名") {
      return 返回值;
    }
    let 选项i = 0;
    while (选项i < 临时块.options.length) {
      if (临时块.options[选项i].innerHTML == 值名) {
        值名 = 选项i;
      }
      选项i++;
    }
    if (typeof 值名 == "string") {
      临时块.innerHTML += "<option >" + 值名 + "</option>";
      值名 = 临时块.options.length - 1;
    }
    return 返回值;
  };
}

class 交互 {
  显示块 = function (临时名) {
    let 临时块 = id(临时名);
    if (临时块 == undefined) {
      $调试输出.临时名 = 临时名;
    }
    if (临时块.style.display == "none") {
      // 显示
      临时块.style.display = "inline";
    } else {
      // 隐藏
      临时块.style.display = "none";
    }
    return 临时块.style.display;
  };
  选中 = function (块名) {
    return id("选项块：" + 块名).options[id("选项块：" + 块名).selectedIndex]
      .text;
  };
  监听 = function (节点, 函数 = function () {}, 方式 = "click", 阶段 = false) {
    let ls1 = "没开始";
    // var e = event ? event || window.event;
    if (节点.addEventListener) {
      // W3C标准
      ls1 = "W3C标准";
      节点.addEventListener(方式, 函数, 阶段);
      return true;
    } else if (节点.attachEvent) {
      ls1 = "IE";
      //IE
      return 节点.attachEvent("on" + 方式, 函数); //IE5+
    } else {
      ls1 = "DOM事件";
      节点["on" + 方式] = 函数; //DOM事件
    }
    // 日志(ls1);
  };
  可移动 = function (块jh) {
    let 移动块 = id(块jh["本名"]);
    this.监听(移动块, function (event) {}, "mousedown", true);

    // 鼠标
    this.监听(
      移动块,
      function (event) {
        日志(块jh["本名"]);
        日志("鼠标");
        var event = event || window.event; //兼容IE浏览器
        //  鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
        // 获取 初始 坐标
        var 初横 = event.clientX - 移动块.offsetLeft;
        var 初纵 = event.clientY - 移动块.offsetTop;
        //修复低版本ie bug    获取 鼠标 事件
        if (typeof 移动块.setCapture !== "undefined") {
          移动块.setCapture();
        }
        document["onmousemove"] = function (event) {
          var 结横 = event.clientX - 初横;
          var 结纵 = event.clientY - 初纵;
          // 移动 写出
          移动块.style.left = 移动(结横) + "px";
          移动块.style.top = 移动(结纵, "左") + "px";
        };
        document["onmouseup"] = function (event) {
          this.onmousemove = null;
          this.onmouseup = null;
          //修复低版本ie bug    释放 鼠标 事件
          if (typeof 移动块.releaseCapture != "undefined") {
            移动块.releaseCapture();
          }
        };
      },
      "mousedown",
      true
    );

    // 触摸
    this.监听(
      移动块,
      function (event) {
        日志(块jh["本名"]);
        日志("触摸");
        var event = event || window.event; //兼容IE浏览器
        // 获取手指初始坐标    IE9以前不兼容pageX/Y。
        var 初横 = event.targetTouches[0].clientX - 移动块.offsetLeft;
        var 初纵 = event.targetTouches[0].clientY - 移动块.offsetTop;
        移动块["ontouchmove"] = function (event) {
          // 计算手指的移动距离：手指移动之后的坐标 减去 手指初始的坐标
          var 结横 = event.targetTouches[0].clientX - 初横;
          var 结纵 = event.targetTouches[0].clientY - 初纵;

          移动块.style.position = "fixed";
          // 移动 写出
          移动块.style.left = 移动(结横) + "px";
          移动块.style.top = 移动(结纵, "左") + "px";

          event.preventDefault(); // 阻止屏幕滚动的默认行为
          //输出(临时名+" 触摸，2 " +JSON.stringify(总计.本名 ,null,2) );
          临时名 = 移动块.id;
          位置获取(临时名);
        };
      },
      "touchstart",
      true
    );

    移动 = function (结束 = 0, 横纵 = "右") {
      if (横纵 == "右") {
        宽高 = window["innerWidth"];
      } else {
        宽高 = window["innerHeight"];
      }
      // Width
      // Height
      // 移动 范围
      if (结束 < 0) {
        结束 = 0;
      } else if (结束 > 宽高 - 块jh["位置"][横纵]) {
        结束 = 宽高 - 块jh["位置"][横纵];
      }
      return 结束;
    };
  };

  位置栏预备 = function () {
    let 块名 = "位置栏";
    界面.备选项(块名, ["减"]);
    // $调试输出 = 集合.个数(['加', '减', '']) + ' '
  };
  位置栏返回 = function () {
    let 块名 = "位置栏";
    let 位置dg = id("写入：" + 块名);
    let 位置对象 = 集合.转(位置dg.value, "集合");
    if (this.选中(块名) == "减") {
      let 位置对象1 = {};
      位置i = 0;
      while (位置i < 集合.个数(位置对象) - 1) {
        位置对象1[位置i] = 位置对象[位置i];
        位置i++;
      }
      位置对象 = 位置对象1;
    }
    位置dg.value = JSON.stringify(位置对象, true);
    this.总计修改预备();
  };
  总计修改预备 = function () {
    let 块名 = "修改，总计";
    let 位置dg = id("写入：位置栏");
    if (位置dg.value == "undefined" || 位置dg.value == "") {
      // 用途
      位置dg.value = "{}";
    }
    let 位置对象 = 集合.转(位置dg.value, "对象");
    let 位置对象1 = 集合.取(总计, 位置对象);
    界面.备选项("修改，总计", 集合.取键(位置对象1));

    let 修改内容dg = id("写入：" + 块名);
    修改内容dg.value = 集合.转(位置对象1, "zfc");

    return 位置对象;
  };
  总计修改返回 = function () {
    let 块名 = "修改，总计";
    let 总计修改返回dx = {};
    总计修改返回dx["选中文本"] = this.选中(块名);
    总计修改返回dx["位置对象"] = this.总计修改预备(块名);
    // $调试输出.总计修改返回dx["位置对象"]1 = 总计修改返回dx["位置对象"]

    总计修改返回dx["位置个数"] = 集合.个数(总计修改返回dx["位置对象"]);
    if (
      通用.类型(总计修改返回dx["位置对象"][总计修改返回dx["位置个数"]]) !=
      "未定义"
    ) {
      // 用途
      总计修改返回dx["位置个数"] = 集合.个数(总计修改返回dx["位置对象"]) + 1;
    } // 用途，结束
    总计修改返回dx["位置对象"][总计修改返回dx["位置个数"]] =
      总计修改返回dx["选中文本"];

    // $调试输出.块名 = 块名
    id("写入：位置栏").value = JSON.stringify(总计修改返回dx["位置对象"], true);
    id("写入：" + 块名).value = 集合.转(
      集合.取(总计, 总计修改返回dx["位置对象"]),
      "zfc"
    );

    return 总计修改返回dx["位置对象"];
  };
  设置按钮单击 = function () {
    id("调试输出按钮").style.display = this.显示块("设置页");
    id("调试输出js").style.display = "none";
    id("写入：修改，总计").value = JSON.stringify(总计, null, 2);

    // 界面.异步()
  };
  调试输出按钮单击 = function () {
    this.显示块("调试输出js");
    if (id("调试输出1js").innerHTML.length > 20) {
      // 调试显示，开始
      id("调试输出js").innerHTML =
        id("调试输出1js").innerHTML + id("调试输出js").innerHTML;
      // id('调试输出1js').innerHTML = '';
    } // 调试显示，结束
    // 日志();
  };
  修改确定选中 = function () {
    if (
      总计 !=
      集合.加(
        总计,
        集合.转(id("写入：位置栏").value, "jh"),
        集合.转(id("写入：修改，总计").value, "jh")
      )
    ) {
      if (总计["变量"]["当前模式"] != document.title) {
        // 用途
        /* 获取文件路径（文件地址） Test/index.html */
        window.location.href =
          window.location.pathname + "?当前模式=" + 总计["变量"]["当前模式"];
      } // 用途，结束
      总计 = 使用.加载(总计);
    }
    // 刷新
    this.设置按钮单击();
    return 总计;
  }; // 修改块，结束
}

class 请求 {
  aj对象 = function () {
    // AJAX对象
    let AJAX对象 = "";
    if (window.XMLHttpRequest) {
      //  IE7+; Firefox; Chrome; Opera; Safari 浏览器执行代码
      AJAX对象 = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // IE6; IE5 浏览器执行代码
      AJAX对象 = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
      alert("浏览器的版本过低");
    }
    return AJAX对象;
  };
  接收 = function () {
    let 返回 = {};
    // console.log(aj对象.responseText);
    try {
      返回 = JSON.parse(
        aj对象.responseText.replace('<meta charset="utf-8"></meta>', "")
      );
    } catch (err) {
      console.log("aj对象.responseText");
      console.log(aj对象.responseText);
      console.log(err);
      返回 = {
        方式内容: "返回值不正确",
      };
      返回["位置"] = ["返回"];
      return 返回;
      // catchCode - 捕获错误的代码块
    } finally {
      // finallyCode - 无论 try / catch 结果如何都会执行的代码块
    }
    // console.log(集合.转(返回['位置']));
    // 日志(返回);
    总计 = 集合.加(总计, 返回["位置"], 返回["方式内容"]);

    if (Object.keys(总计["缓存"]["紧急"]).length > 0) {
      // console.log("Object.keys(总计['缓存']['紧急']).length")
      // console.log(Object.keys(总计['缓存']['紧急']).length)
      // console.log(集合.转(总计['缓存']['紧急']["0"]));
      this.发送(总计["缓存"]["紧急"]["0"]);
    } else if (Object.keys(总计["缓存"]["后台"]).length > 0) {
      // console.log("Object.keys(总计['缓存']['后台']).length")
      // console.log(Object.keys(总计['缓存']['后台']).length)
      // console.log(集合.转(总计['缓存']['紧急']["0"]));
      this.发送(总计["缓存"]["后台"]["0"]);
    } else {
      // console.log("Object.keys(总计['缓存']");
      // console.log(集合.转(总计['缓存']));
    }
  };
  发送 = function (aj修改内容) {
    // console.log(JSON.stringify(aj修改内容, true))
    let wb长度 = 70;
    // let 交互文件 = '函数.php?jiaohu=';
    // 地址=/zy/思路/软件/代码/php/底层函数.php&
    let 缓存地址 = 地址("设置") + "/";
    缓存地址 = "";
    let aj修改内容wb = "";
    // 判断
    if (Object.prototype.hasOwnProperty.call(aj修改内容, "紧后") == false) {
      // 紧急 ，开始
      aj修改内容["紧后"] = "紧急";
    }
    // console.log(JSON.stringify(aj修改内容, true))
    // 添加
    if (aj修改内容 != 总计["缓存"][aj修改内容["紧后"]]["0"]) {
      总计["缓存"][aj修改内容["紧后"]][
        Object.keys(总计["缓存"][aj修改内容["紧后"]]).length + ""
      ] = aj修改内容;
      aj修改内容 = 总计["缓存"][aj修改内容["紧后"]]["0"];
    }
    aj修改内容wb = JSON.stringify(aj修改内容, true);
    // console.log(aj修改内容wb)
    if (wb长度 + 130 <= 字符.长度(aj修改内容wb)) {
      console.log(字符.长度(aj修改内容wb));
      console.log("请求 发送 清空");
      总计["缓存"][aj修改内容["紧后"]][0] = {
        位置: ["返回"],
        类: "本地",
        名: "写",
        内容: {
          地址: 缓存地址 + aj修改内容["紧后"] + "缓存.json",
          内容: "",
        },
        紧后: aj修改内容["紧后"],
      };
      // console.log(字符.长度(JSON.stringify(总计['缓存'][aj修改内容['紧后']][Object.keys(总计['缓存'][aj修改内容['紧后']]).length - 1], true)));
      // console.log('请求 发送 分发')
      let 内容i = 字符.长度(aj修改内容wb) / wb长度;
      let 发送i = 0;
      // console.log(内容i)
      while (发送i < 内容i) {
        总计["缓存"][aj修改内容["紧后"]][
          Object.keys(总计["缓存"][aj修改内容["紧后"]]).length + ""
        ] = {
          位置: ["返回"],
          类: "本地",
          名: "写",
          内容: {
            方式: "加",
            地址: 缓存地址 + aj修改内容["紧后"] + "缓存.json",
            内容: aj修改内容wb.slice(wb长度 * 发送i, wb长度 * (发送i + 1)),
          },
          紧后: aj修改内容["紧后"],
        };
        // console.log(字符.长度(JSON.stringify(总计['缓存'][aj修改内容['紧后']][Object.keys(总计['缓存'][aj修改内容['紧后']]).length - 1], true)));
        // console.log('发送i');
        // console.log(发送i);
        发送i++;
      }
      总计["缓存"][aj修改内容["紧后"]][
        Object.keys(总计["缓存"][aj修改内容["紧后"]]).length + ""
      ] = {
        类: "缓存",
        紧后: aj修改内容["紧后"],
      };
      aj修改内容 = 总计["缓存"][aj修改内容["紧后"]]["0"];
    }
    aj修改内容wb = JSON.stringify(aj修改内容, true);
    if (Object.keys(总计["缓存"][aj修改内容["紧后"]]).length == 1) {
      总计["缓存"][aj修改内容["紧后"]] = {};
    } else {
      let aj修改内容1 = {};
      for (
        let i = Object.keys(总计["缓存"][aj修改内容["紧后"]]).length - 1;
        i > 0;
        i--
      ) {
        aj修改内容1[i - 1 + ""] = 总计["缓存"][aj修改内容["紧后"]][i + ""];
      }
      总计["缓存"][aj修改内容["紧后"]] = aj修改内容1;
    }
    let 紧后方式 = false; // 紧急
    if (aj修改内容["紧后"] != "紧急") {
      紧后方式 = true; // 后台
    }
    // console.log(aj修改内容wb)
    aj对象.open("POST", aj修改内容wb, 紧后方式);
    aj对象.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    aj对象.send();
  };
}
class 文件 {
  读 = function (地址, 紧后 = "紧急") {
    // 日志(地址);
    请求.发送({
      位置: ["返回"],
      类: "本地",
      名: "读",
      内容: {
        地址: 地址,
      },
      紧后: 紧后,
    });
    // 日志(地址);
    return 总计.返回;
  };
  写 = function (地址, 内容, 方式, 紧后 = "紧急") {
    // 日志(地址);
    请求.发送({
      位置: ["返回"],
      类: "本地",
      名: "写",
      内容: {
        地址: 地址,
        方式: 方式,
        内容: 内容,
      },
      紧后: 紧后,
    });
    // 日志(地址);
    return 总计.返回;
  };
}
class 可逆 {}
class 不可逆 {}
class 数据库 {}
class 网络 {
  访问局域网 = function () {
    for (let i = 1; i <= 255; i++) {
      let ip = "192.168.1." + i;

      let img = new Image();

      img.src = "http://" + ip; // 尝试连接到主机

      img.onload = function () {
        console.log("Host found: " + ip);

        // 可以在这里将数据提交到网站
      };

      img.onerror = function () {
        console.log("No host at: " + ip);
      };
    }
  };
}
识别 = new 识别();
输出 = new 输出();
时间 = new 时间();
通用 = new 通用();
字符 = new 字符();
集合 = new 集合();
界面 = new 界面();
交互 = new 交互();
请求 = new 请求();
文件 = new 文件();

window.onerror = function (
  errorMessage,
  scriptURI,
  lineNumber,
  columnNumber,
  errorObj
) {
  // 错误报告
  时间wb = 时间.文本(时间.数组());
  调试输出["错误"] = {};
  调试输出["错误"][时间wb] = {};
  调试输出["错误"][时间wb]["错误信息: "] = errorMessage;
  调试输出["错误"][时间wb]["错误信息: "] = errorMessage;
  调试输出["错误"][时间wb]["出错文件: "] = decodeURI(scriptURI);
  调试输出["错误"][时间wb]["出错行号: "] = lineNumber;
  调试输出["错误"][时间wb]["出错列号: "] = columnNumber;
  调试输出["错误"][时间wb]["错误详情: "] = errorObj;
  // 调试输出['错误'][时间wb]["总计 "] = 总计;
  // 日志();
  调试输出 = {};
  return;
};
// AJAX应用
aj对象 = 请求.aj对象();
aj对象.onreadystatechange = function () {
  if (aj对象.readyState == 4 && aj对象.status == 200) {
    return 请求.接收();
  } else {
    // 日志({'aj对象':[aj对象.readyState,aj对象.status]});
  }
};

id = function (文本) {
  return document.getElementById(文本);
};
日志 = 输出.日志;
地址 = 识别.地址;

// // 开始
// // window.onload = function () {
// // 界面.块()
// script对象 = document.createElement("script");
// script对象.type = "text/javascript";
// script对象.src = 'zj/代码/js/开始.js';
// document.body.appendChild(script对象);
// // }

打底 = {};
打底.一一一一一打底 = function () {};

打底.总名 = function (方式 = "输出", 同异步 = "同") {
  if (方式 != "输出") {
    块i = 0;
    while (块i < $jh.个数(总计["总名数组"])) {
      $wj.修改(
        {
          位置: ["总名", 总计["总名数组"][块i]],
          类: "本地",
          名: "读",
          内容: {
            地址:
              总计1["变量"].存储地址 +
              "/设置/基础/块/" +
              总计["总名数组"][块i] +
              ".json",
          },
        },
        同异步
      );
      块i++;
    }
    // console.log(总计)
  }
  // 读取 分批 总计
  if (!总计.总名) {
    // 输出总计json
    请求.发送({
      位置: "",
      类: "本地",
      名: "默认输出",
      内容: {
        地址:
          总计1["变量"].存储地址 +
          "/设置/基础/模式/" +
          document.title +
          ".json",
      },
    });
  }
  return 总计;
};
打底.所有模式 = function (总计) {
  请求.发送({
    位置: ["返回", "所有模式"],
    类: "本地",
    名: "夹",
    内容: {
      地址:
        总计["常量"]["地址"]["根目录"] +
        总计["常量"]["地址"]["设置夹"] +
        "/基础/模式",
    },
    紧后: "后台",
  });
  if (集合.个数(总计.返回.所有模式.文件和文件夹) > 0) {
    总计["常量"].所有模式 = 总计.返回.所有模式.文件和文件夹;
    总计.返回 = "";
  }
  模式i = 0;
  while (模式i < 集合.个数(总计["常量"].所有模式)) {
    总计["常量"].所有模式[模式i] = 文本.取(
      总计["常量"].所有模式[模式i],
      0,
      ".json"
    );
    模式i++;
  }
  return 总计;
};
打底.异步 = function () {
  setTimeout(function () {
    // 总计 = 打底.所有模式(总计);// 异步
  }, 100);
};

使用 = {};
使用.一一一一一使用 = function () {};
使用.总计 = function () {
  // console.log(识别.网址参数());
  if (!("当前模式" in 识别.网址参数()["?"])) {
    // 模式存在 ，开始
    /* 获取文件路径（文件地址） Test/index.html */
    window.location.href =
      window.location.origin + window.location.pathname + "?当前模式=默认";
    // return
  }
  document.title = 识别.网址参数()["?"]["当前模式"];

  总计 = {
    常量: {
      地址: {
        根目录: "zy",
        设置夹: "/zj/存储/设置",
      },
    },
    缓存: {
      紧急: {},
      后台: {},
    },
  };
  请求.发送({
    位置: "",
    类: "本地",
    名: "总计读",
    内容: '"' + document.title + '"',
  });
  // 总计['常量']['地址']['根目录'] = '';
  // 总计['常量']['地址']['地址'] = '';
  // console.log(总计);
  if (集合.有(总计, "变量") == false) {
    总计["变量"] = {};
    日志("总计读不正常");
  }
  总计["变量"]["当前模式"] = document.title;
  return 总计;
};

使用.加载 = function () {
  总计 = 使用.总计();
  总计 = 界面.基函数();
  总计 = 界面.显示("总");
  交互.设置按钮单击();
  // 交互.移动(总计['总名']['节点']['设置按钮']);
  交互.位置栏预备();
  交互.总计修改预备();
  return 总计;
};

调试输出 = {};
总计 = 使用.加载();
// 调试.输出(总计['总名']['节点']['设置按钮']);

// id("调试输出js").innerHTML = ''

// id("写入：位置栏").innerHTML ='{"0":"小说","1":"输入"}'
// id("写入：修改，总计").innerHTML ='{"网址": "3421"}'
// 交互.修改块确定选中()
// 交互.设置按钮单击()
// 交互.调试输出按钮单击()

window.onload = function () {
  // console.log(总计);
  // setTimeout(function () {
  // jsi = 0
  // while (jsi < 集合.个数(总计['变量']['js地址'])) {
  for (let jsi in 总计["变量"]["js地址"]) {
    // console.log( 'zj/代码/js/' + 总计['变量']['js地址'][jsi] + ".js");
    scriptdx = document.createElement("script");
    scriptdx.id = 总计["变量"]["js地址"][jsi];
    scriptdx.type = "text/javascript";
    scriptdx.src = "zy/zj/代码/js/" + 总计["变量"]["js地址"][jsi] + ".js";
    document.body.appendChild(scriptdx);
    // 日志(2000 * jsi);
    // jsi++
  }
  // 精简
  // 总计.返回 = ''
  // delete jsi
  // delete 总计['总名']
  // delete 总计['变量']['所有模式']

  // }, 2000);
  // 日志('window.onload');
};
// console.log(Object.keys(window));
// 日志();
