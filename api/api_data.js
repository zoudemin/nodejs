define({ "api": [
  {
    "type": "post",
    "url": "/food/upload",
    "title": "上传图片",
    "name": "上传图片",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>图片对象</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "修改",
    "name": "修改",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>类型名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{\n        \"err\": 0,\n        \"state\": 200,\n        \"msg\": {\n            \"n\": 1,\n            \"nModified\": 1,\n            \"ok\": 1\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/selectkw",
    "title": "关键字查询",
    "name": "关键字查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kw",
            "description": "<p>模糊查询关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "    {\n    \"err\": 0,\n    \"state\": 200,\n    \"msg\": [\n        {\n            \"_id\": \"5e78318f8f0b8b414ce65d3f\",\n            \"name\": \"火山飘雪\",\n            \"price\": \"999\",\n            \"desc\": \"超赞\",\n            \"typename\": \"川菜\",\n            \"typeid\": 1,\n            \"img\": \"/public/image/1.png\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/pages",
    "title": "分页list",
    "name": "分页list",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数据条数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{\n        \"err\": 0,\n        \"state\": 200,\n        \"msg\": [\n            {\n                \"_id\": \"5e78318f8f0b8b414ce65d3f\",\n                \"name\": \"火山飘雪\",\n                \"price\": \"999\",\n                \"desc\": \"超赞\",\n                \"typename\": \"川菜\",\n                \"typeid\": 1,\n                \"img\": \"/public/image/1.png\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5e7834a14140273358f5a9da\",\n                \"name\": \"火山飘雪666\",\n                \"price\": \"999\",\n                \"desc\": \"超赞\",\n                \"typename\": \"豫菜\",\n                \"typeid\": 2,\n                \"img\": \"/public/image/1.png\",\n                \"__v\": 0\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除",
    "name": "删除",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>删除id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{err:0,state:200,msg:'删除成功'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/select",
    "title": "查询菜品",
    "name": "查询菜品",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{\n        \"err\": 0,\n        \"state\": 200,\n        \"msg\": [\n            {\n                \"_id\": \"5e78318f8f0b8b414ce65d3f\",\n                \"name\": \"火山飘雪\",\n                \"price\": \"999\",\n                \"desc\": \"超赞\",\n                \"typename\": \"川菜\",\n                \"typeid\": 1,\n                \"img\": \"/public/image/1.png\",\n                \"__v\": 0\n            }\n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/add",
    "title": "添加菜品",
    "name": "添加菜品",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typename",
            "description": "<p>类型名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeid",
            "description": "<p>类型id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{\n        \"err\": 0,\n        \"state\": 200,\n        \"msg\": \"添加成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/request",
    "title": "跨域百度",
    "name": "跨域百度",
    "group": "Request",
    "version": "0.0.0",
    "filename": "router/foodRouter.js",
    "groupTitle": "Request"
  },
  {
    "type": "post",
    "url": "/user/usermailer",
    "title": "发送验证码",
    "name": "发送验证码",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>接口处理结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "接口返回值example:",
          "content": "{\n        \"state\": 200,\n        \"res\": {\n            \"accepted\": [\n                \"1522263113@qq.com\"\n            ],\n            \"rejected\": [],\n            \"envelopeTime\": 398,\n            \"messageTime\": 1482,\n            \"messageSize\": 362,\n            \"response\": \"250 Ok: queued as \",\n            \"envelope\": {\n                \"from\": \"zoudemin@uinnova.com\",\n                \"to\": [\n                    \"1522263113@qq.com\"\n                ]\n            },\n            \"messageId\": \"<6e72dfaf-f55b-1896-e560-338ee6ea6cce@uinnova.com>\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/userLogin.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "name": "用户注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "codes",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>注册结果</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userLogin.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "用户登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "codes",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>请求状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "res",
            "description": "<p>用户数据</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/userLogin.js",
    "groupTitle": "User"
  }
] });
