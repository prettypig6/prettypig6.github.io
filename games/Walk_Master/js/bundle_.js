! function() {
    "use strict";
    var e, t;
    ! function(e) {
        e[e.BaiduSDK = 0] = "BaiduSDK", e[e.DummySDK = 1] = "DummySDK", e[e.OPPOSDK = 2] = "OPPOSDK",
            e[e.ToutiaoSDK = 3] = "ToutiaoSDK", e[e.MeizuSDK = 4] = "MeizuSDK", e[e.VivoSDK = 5] = "VivoSDK",
            e[e.QQSDK = 6] = "QQSDK", e[e.WxSDK = 7] = "WxSDK";
    }(e || (e = {})),
    function(e) {
        e[e.Debug = 0] = "Debug", e[e.Internal = 1] = "Internal", e[e.Public = 2] = "Public",
            e[e.Shipping = 3] = "Shipping";
    }(t || (t = {}));
    class i {
        static GetAdRuleUrl() {
            var t = "";
            return this.kPlatformSDK == e.ToutiaoSDK ? t = ".tt" : this.kPlatformSDK == e.VivoSDK ? t = ".vivo" : this.kPlatformSDK == e.BaiduSDK ? t = ".baidu" : this.kPlatformSDK == e.OPPOSDK && (t = ".oppo"),
                `${this.kAdRuleUrlRoot}/adconfig_${this.kVersion}${t}.json`;
        }
    }
    i.kProductType = t.Shipping, i.kPlatformSDK = e.WxSDK, i.kVersion = "1.0.0", i.kGameName = "StompKicks",
        i.kShootName = "SK", i.kAdRuleUrlRoot = ""; //"https://download1.zhangchi.art/StompKicks", 
    i.kSaveVersion = 2, i.kSongConfig = !0;
    var a, n, o = Laya.ClassUtils.regClass;

    function RandomArray(e) {
        return e[RandomIndex(e.length)];
    }

    function RandomIndex(e) {
        return Math.round(Math.random() / (1 / e) - .5);
    }

    function Clamp(e, t, i) {
        return e < t ? t : e > i ? i : e;
    }

    function Remap01Unclamped(e, t, i) {
        return (e - t) / (i - t);
    }

    function Remap(e, t, i, a, n) {
        return function(e, t, i, a, n) {
            return Remap01Unclamped(e, t, i) * (n - a) + a;
        }(Clamp(e, t, i), t, i, a, n);
    }

    function ShowTips(e) {
        s.Instance.ShowTips(e);
    }! function(e) {
        ! function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 640,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1136,
                    centerY: 0,
                    centerX: 0,
                    bottom: 0
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "ui/Mask.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        sizeGrid: "15,12,17,14"
                    },
                    compId: 2,
                    child: [{
                        type: "Label",
                        props: {
                            var: "txtTipsText",
                            text: "精彩广告",
                            strokeColor: "#000000",
                            stroke: 4,
                            right: 0,
                            left: 0,
                            fontSize: 68,
                            color: "#ffffff",
                            centerY: 0,
                            align: "center"
                        },
                        compId: 81
                    }, {
                        type: "Button",
                        props: {
                            width: 200,
                            var: "btnClose",
                            top: 12,
                            right: 12,
                            labelStrokeColor: "#000000",
                            labelStroke: 3,
                            labelSize: 45,
                            labelColors: "#FFFFFF",
                            label: "关闭广告",
                            height: 64
                        },
                        compId: 84
                    }, {
                        type: "Box",
                        props: {
                            var: "boxCloseAdPanel",
                            top: 181,
                            right: 0,
                            left: 0,
                            height: 256
                        },
                        compId: 85,
                        child: [{
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "ui/Board.png",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 86
                        }, {
                            type: "Label",
                            props: {
                                y: 54,
                                text: "只有观看完整广告才能获得奖励",
                                strokeColor: "#000000",
                                stroke: 4,
                                right: 0,
                                left: 0,
                                fontSize: 42,
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 88
                        }, {
                            type: "Button",
                            props: {
                                width: 128,
                                var: "btnContinueAd",
                                left: 128,
                                labelStrokeColor: "#000000",
                                labelSize: 26,
                                labelColors: "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                                label: "继续观看",
                                height: 45,
                                bottom: 26
                            },
                            compId: 89
                        }, {
                            type: "Button",
                            props: {
                                width: 128,
                                var: "btnCloseAd",
                                right: 128,
                                labelStrokeColor: "#000000",
                                labelSize: 26,
                                labelColors: "#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
                                label: "关闭广告",
                                height: 45,
                                bottom: 26
                            },
                            compId: 91
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 10,
                            width: 157,
                            var: "btnAdCompleted",
                            top: 12,
                            labelStrokeColor: "#000000",
                            labelStroke: 3,
                            labelSize: 45,
                            labelColors: "#FFFFFF",
                            label: "看完了",
                            height: 64,
                            centerX: 0
                        },
                        compId: 92
                    }]
                }],
                loadList: ["ui/Mask.png", "ui/Board.png"],
                loadList3D: []
            }, e.FakeAdUI = t, o("ui.core.FakeAdUI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                    "loadList": ["loading_ui/GradientBg6.png", "loading_ui/Loading.png", "loading_ui/mainUI_3.png"],
                    "compId": 1,
                    "loadList3D": [],
                    "child": [{
                        "compId": 2,
                        "child": [{
                            "compId": 16,
                            "source": "src/Core/AutoImageSize.ts",
                            "searchKey": "Script,AutoImageSize",
                            "type": "Script",
                            "props": {
                                "runtime": "Core/AutoImageSize.ts",
                                "enabled": true
                            }
                        }],
                        "type": "Image",
                        "props": {
                            "right": 0,
                            "bottom": 0,
                            "top": 0,
                            "sizeGrid": "1,1,1,1",
                            "skin": "loading_ui/GradientBg6.png",
                            "left": 0
                        }
                    }, {
                        "compId": 3,
                        "child": [{
                            "compId": 4,
                            "type": "Label",
                            "props": {
                                "color": "#ffffff",
                                "text": "46%",
                                "anchorX": 0.5,
                                "anchorY": 0.5,
                                "fontSize": 42,
                                "centerX": 0,
                                "centerY": 0,
                                "var": "textProgress",
                                "font": "SimSun"
                            }
                        }],
                        "type": "ProgressBar",
                        "props": {
                            "visible": false,
                            "bottom": 109,
                            "value": 0,
                            "height": 68,
                            "width": 594,
                            "anchorX": 0.5,
                            "centerX": 0,
                            "skin": "loading_ui/Loading.png",
                            "var": "progProgress",
                            "anchorY": 0.5
                        }
                    }, {
                        "compId": 6,
                        "type": "Image",
                        "props": {
                            "top": 200,
                            "scaleX": 0.9,
                            "scaleY": 0.9,
                            "anchorX": 0.5,
                            "anchorY": 0.5,
                            "visible": false,
                            "centerX": 0
                        }
                    }, {
                        "compId": 8,
                        "type": "Label",
                        "props": {
                            "right": 0,
                            "visible": false,
                            "color": "#ffffff",
                            "text": "\u5065\u5eb7\u5fe0\u544a\\n\u62b5\u5236\u4e0d\u826f\u6e38\u620f\uff0c\u62d2\u7edd\u76d7\u7248\u6e38\u620f\u3002\u6ce8\u610f\u81ea\u6211\u4fdd\u62a4\uff0c\u8c28\u9632\u4e0a\u5f53\u53d7\u9a97\u3002\\n\u9002\u5ea6\u6e38\u620f\u76ca\u8111\uff0c\u6c89\u8ff7\u6e38\u620f\u4f24\u8eab\u3002\u5408\u7406\u5b89\u6392\u65f6\u95f4\uff0c\u4eab\u53d7\u5065\u5eb7\u751f\u6d3b\u3002",
                            "align": "center",
                            "bottom": 65,
                            "height": 75,
                            "width": 641,
                            "wordWrap": true,
                            "leading": 5,
                            "fontSize": 20,
                            "left": -1
                        }
                    }, {
                        "compId": 14,
                        "type": "Label",
                        "props": {
                            "right": 0,
                            "bottom": 43,
                            "color": "#ffffff",
                            "text": "\u8f6f\u8457\u767b\u8bb0\u53f7\uff1a2019SR0646131",
                            "align": "center",
                            "height": 20,
                            "visible": false,
                            "fontSize": 18,
                            "left": 0
                        }
                    }, {
                        "compId": 15,
                        "type": "Label",
                        "props": {
                            "right": 0,
                            "bottom": 18,
                            "color": "#ffffff",
                            "text": "\u8457\u4f5c\u6743\u4eba\uff1a\u91d1\u842a\u54f2\u4fe1\uff08\u6df1\u5733\uff09\u79d1\u6280\u6709\u9650\u516c\u53f8",
                            "align": "center",
                            "height": 20,
                            "visible": false,
                            "fontSize": 18,
                            "left": 0
                        }
                    }, {
                        "compId": 22,
                        "child": [{
                            "compId": 20,
                            "type": "Sprite",
                            "props": {
                                "texture": "loading_ui/mainUI_3.png",
                                "height": 68,
                                "width": 114,
                                "y": 40.79072825470291,
                                "x": 11.808075881976606,
                                "rotation": 10
                            }
                        }, {
                            "compId": 21,
                            "type": "Sprite",
                            "props": {
                                "texture": "loading_ui/mainUI_3.png",
                                "height": 68,
                                "width": 114,
                                "y": 74.79072825470291,
                                "x": 125.8080758819766,
                                "rotation": -41
                            }
                        }],
                        "type": "Box",
                        "props": {
                            "centerX": 0,
                            "centerY": 0
                        }
                    }, {
                        "compId": 23,
                        "child": [{
                            "compId": 5,
                            "type": "Label",
                            "props": {
                                "right": 0,
                                "color": "#ffffff",
                                "text": "\u6b63\u5728\u52a0\u8f7d\u4e2d0%",
                                "align": "center",
                                "anchorX": 0.5,
                                "anchorY": 0.5,
                                "fontSize": 36,
                                "var": "textProgressText",
                                "left": 0
                            }
                        }, {
                            "compId": 19,
                            "type": "Label",
                            "props": {
                                "right": 0,
                                "bold": true,
                                "color": "#27599a",
                                "text": "___________________",
                                "align": "center",
                                "height": 44,
                                "visible": true,
                                "fontSize": 24,
                                "y": 0,
                                "left": 0
                            }
                        }],
                        "type": "Box",
                        "props": {
                            "width": 629,
                            "centerY": -56,
                            "centerX": 0,
                            "height": 36
                        }
                    }],
                    "type": "View",
                    "props": {
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "pivotY": 0.5,
                        "pivotX": 0.5,
                        "left": 0
                    }
                },


                e.LoadingUI = i, o("ui.core.LoadingUI", i);

            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 640,
                    right: 0,
                    left: 0,
                    height: 90,
                    bottom: 0
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {
                        var: "imgBannerAd",
                        top: 0,
                        skin: "ui/Board.png",
                        sizeGrid: "10,10,10,10",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 3
                }, {
                    type: "Button",
                    props: {
                        width: 40,
                        var: "btnBannerClose",
                        top: 0,
                        left: 0,
                        labelSize: 22,
                        labelColors: "#ffffff,#ffffff,#ffffff,#ffffff",
                        label: "X",
                        height: 41
                    },
                    compId: 2
                }, {
                    type: "Label",
                    props: {
                        width: 265,
                        var: "textBannerTitle",
                        top: 15,
                        text: "label",
                        mouseThrough: !0,
                        left: 114,
                        height: 32,
                        color: "#ffffff"
                    },
                    compId: 4
                }, {
                    type: "Label",
                    props: {
                        width: 241,
                        var: "textBannerDesc",
                        text: "label",
                        mouseThrough: !0,
                        left: 112,
                        height: 29,
                        color: "#ffffff",
                        bottom: 6
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        width: 64,
                        var: "imgBannerIcon",
                        mouseThrough: !0,
                        left: 40,
                        height: 64,
                        centerY: 0
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 3,
                        var: "imgBannerAdFlags",
                        right: 0,
                        height: 19
                    },
                    compId: 7
                }, {
                    type: "Button",
                    props: {
                        width: 111,
                        var: "btnBannerAdClick",
                        skin: "comp/button.png",
                        right: 42,
                        label: "label",
                        height: 33,
                        centerY: 2
                    },
                    compId: 8
                }],
                loadList: ["ui/Board.png", "comp/button.png"],
                loadList3D: []
            }, e.NativeBannerAdUI = a, o("ui.core.NativeBannerAdUI", a);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 640,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1136,
                    bottom: 0
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "ui/Board.png",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 10
                }, {
                    type: "Image",
                    props: {
                        width: 613,
                        height: 340,
                        centerY: -73,
                        centerX: 0
                    },
                    compId: 9,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            var: "imgBannerAd",
                            top: 0,
                            skin: "ui/Board.png",
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        compId: 3
                    }, {
                        type: "Button",
                        props: {
                            y: 0,
                            x: 587,
                            width: 32,
                            var: "btnBannerClose",
                            top: 0,
                            stateNum: 1,
                            skin: "ui/Board.png",
                            sizeGrid: "10,10,10,10",
                            right: 0,
                            labelSize: 30,
                            labelColors: "#ffffff,#ffffff,#ffffff,#ffffff",
                            label: "X",
                            height: 32
                        },
                        compId: 2
                    }, {
                        type: "Label",
                        props: {
                            width: 265,
                            var: "textBannerTitle",
                            top: 267,
                            text: "label",
                            mouseThrough: !0,
                            left: 115,
                            height: 32,
                            color: "#ffffff"
                        },
                        compId: 4
                    }, {
                        type: "Label",
                        props: {
                            width: 241,
                            var: "textBannerDesc",
                            text: "label",
                            mouseThrough: !0,
                            left: 116,
                            height: 37,
                            color: "#ffffff",
                            bottom: 7
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 266,
                            x: 40,
                            width: 64,
                            var: "imgBannerIcon",
                            mouseThrough: !0,
                            left: 40,
                            height: 64,
                            centerY: 128
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            y: 4,
                            x: 8,
                            var: "imgBannerAdFlags",
                            left: 8,
                            height: 19
                        },
                        compId: 7
                    }, {
                        type: "Button",
                        props: {
                            y: 274,
                            x: 456,
                            width: 111,
                            var: "btnBannerAdClick",
                            skin: "comp/button.png",
                            right: 46,
                            label: "label",
                            height: 33
                        },
                        compId: 8
                    }]
                }],
                loadList: ["ui/Board.png", "comp/button.png"],
                loadList3D: []
            }, e.NativeInsertAdUI = n, o("ui.core.NativeInsertAdUI", n);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 456,
                    height: 52,
                    centerY: 0,
                    centerX: 0
                },
                compId: 1,
                child: [{
                    type: "Image",
                    props: {
                        top: -4,
                        skin: "ui/Board.png",
                        right: -8,
                        left: -8,
                        bottom: -4,
                        alpha: 1
                    },
                    compId: 2
                }, {
                    type: "Label",
                    props: {
                        y: 0,
                        wordWrap: !0,
                        var: "txtTips",
                        valign: "middle",
                        text: "只有观看了广告，才能获得奖励",
                        strokeColor: "#000000",
                        stroke: 6,
                        right: 0,
                        padding: "4,4,0,4",
                        left: 0,
                        fontSize: 36,
                        color: "#d4d1d1",
                        align: "center"
                    },
                    compId: 3
                }],
                loadList: ["ui/Board.png"],
                loadList3D: []
            }, e.TipsUI = s, o("ui.core.TipsUI", s);


        }(e.core || (e.core = {}));
    }(a || (a = {})),
    function(e) {
        class t extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(t.uiView);
            }
        }
        t.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 95,
            "selecteID": 209,
            "searchKey": "View",
            "props": {
                "width": 640,
                "top": 0,
                "right": 0,
                "left": 0,
                "height": 1136,
                "bottom": 0
            },
            "nodeParent": -1,
            "maxID": 213,
            "loadList3D": [],
            "loadList": [
                "ui/liveBg.png",
                "ui/mainUi_7.png",
                "ui/btnGetLive.png",
                "ui/btn01.png",
                "ui/btnMore1.png",
                "ui/btnSkin.png",
                "ui/ui_lan2.png",
                "ui/ui_game_top_bar_1_3.png",
                "ui/ui_game_top_bar_1_4.png",
                "ui/ui_game_top_bar_1_2.png",
                "ui/ui_game_top_bar_1_1.png",
                "ui/watermelon.png",
                "ui/mainUI_1.png",
                "ui/mainUI_3.png",
                "ui/hand.png",
                "ui/mainUI_2.png",
                "ui/Mask.png",
                "ui/logo.png",
                "dev/black.png",
                "ui/ui_jgg.png",
                "ui/c4cbcbd2f280944efa1e97bc8f55d7c.png",
                "ui/tb_cnaw.png",
                "ui/ui_2.png",
                "ui/ui_lan.png",
                "ui/btn_fh.png",
                "ui/ui_lv.png",
                "ui/ui_hong.png",
                "ui/rmtj.png",
                "ui/hyzw.png"
            ],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [{
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,TouchArea",
                    "props": {
                        "var": "TouchArea",
                        "top": -2,
                        "right": 0,
                        "mouseEnabled": true,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 2,
                    "label": "TouchArea",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 210,
                    "child": [],
                    "$HIDDEN": false
                },
                {
                    "x": 15,
                    "type": "Box",
                    "searchKey": "Box,boxMain",
                    "props": {
                        "var": "boxMain",
                        "top": 0,
                        "right": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "nodeParent": 2,
                    "label": "boxMain",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 208,
                    "child": [{
                            "type": "Image",
                            "searchKey": "Image,physicPower",
                            "props": {
                                "width": 143,
                                "var": "physicPower",
                                "top": 91,
                                "skin": "ui/liveBg.png",
                                "sizeGrid": "0,25,0,37",
                                "left": 35
                            },
                            "nodeParent": 208,
                            "label": "physicPower",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 199,
                            "child": [{
                                    "type": "Image",
                                    "searchKey": "Image",
                                    "props": {
                                        "y": -3,
                                        "width": 48,
                                        "skin": "ui/mainUi_7.png",
                                        "left": -26,
                                        "height": 44
                                    },
                                    "nodeParent": 199,
                                    "label": "Image",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 200,
                                    "child": []
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label,lab_physicPower",
                                    "props": {
                                        "y": 4,
                                        "width": 79,
                                        "var": "lab_physicPower",
                                        "valign": "middle",
                                        "text": "12",
                                        "height": 36,
                                        "fontSize": 32,
                                        "color": "#ffffff",
                                        "centerX": 0,
                                        "align": "center"
                                    },
                                    "nodeParent": 199,
                                    "label": "lab_physicPower",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 201,
                                    "child": []
                                },
                                {
                                    "type": "Label",
                                    "searchKey": "Label,lab_RecoverTime",
                                    "props": {
                                        "y": 19,
                                        "width": 79,
                                        "var": "lab_RecoverTime",
                                        "valign": "middle",
                                        "text": "10:00",
                                        "strokeColor": "#1e1e1e",
                                        "stroke": 2,
                                        "height": 28,
                                        "fontSize": 18,
                                        "color": "#ffffff",
                                        "centerX": -74,
                                        "align": "center"
                                    },
                                    "nodeParent": 199,
                                    "label": "lab_RecoverTime",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 202,
                                    "child": []
                                },
                                {
                                    "type": "Sprite",
                                    "searchKey": "Sprite",
                                    "props": {
                                        "y": 3,
                                        "x": 105,
                                        "texture": "ui/btnGetLive.png",
                                        "mouseThrough": false
                                    },
                                    "nodeParent": 199,
                                    "label": "Sprite",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 203,
                                    "child": []
                                }
                            ]
                        },
                        {
                            "type": "Button",
                            "searchKey": "Button,btnStartGame",
                            "props": {
                                "y": 800,
                                "var": "btnStartGame",
                                "stateNum": 1,
                                "skin": "ui/btn01.png",
                                "labelSize": 48,
                                "labelColors": "#ffffff",
                                "labelBold": true,
                                "label": "START",
                                "centerX": 0,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 208,
                            "label": "btnStartGame",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 206,
                            "child": [],
                            "$HIDDEN": false
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,btnSkin",
                            "props": {
                                "y": 515.5,
                                "var": "btnSkin",
                                "skin": "ui/btnSkin.png",
                                "right": 0
                            },
                            "nodeParent": 208,
                            "label": "btnSkin",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 205,
                            "child": [],
                            "$HIDDEN": false
                        }
                    ],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,distanceProgress",
                    "props": {
                        "var": "distanceProgress",
                        "top": 131,
                        "skin": "ui/ui_game_top_bar_1_3.png",
                        "centerX": 0
                    },
                    "nodeParent": 2,
                    "label": "distanceProgress",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 96,
                    "child": [{
                        "type": "Box",
                        "searchKey": "Box,distanceProgressBox",
                        "props": {
                            "y": -2,
                            "x": 26,
                            "width": 251,
                            "var": "distanceProgressBox",
                            "height": 31
                        },
                        "nodeParent": 96,
                        "label": "distanceProgressBox",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 102,
                        "child": [{
                            "type": "Image",
                            "searchKey": "Image,disProgress",
                            "props": {
                                "y": -0.5,
                                "x": 0,
                                "var": "disProgress",
                                "skin": "ui/ui_game_top_bar_1_4.png"
                            },
                            "nodeParent": 102,
                            "label": "disProgress",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 99,
                            "child": []
                        }]
                    }],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,energy",
                    "props": {
                        "var": "energy",
                        "top": 170,
                        "skin": "ui/ui_game_top_bar_1_2.png",
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 2,
                    "label": "energy",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 95,
                    "child": [{
                            "x": 30,
                            "type": "Panel",
                            "searchKey": "Panel,progEnergy",
                            "props": {
                                "y": 0,
                                "x": 0,
                                "width": 0,
                                "var": "progEnergy",
                                "height": 100
                            },
                            "nodeParent": 95,
                            "label": "progEnergy",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 98,
                            "child": [{
                                "x": 45,
                                "type": "Image",
                                "searchKey": "Image,imgProEnergy",
                                "props": {
                                    "y": 0,
                                    "x": 0,
                                    "width": 255,
                                    "var": "imgProEnergy",
                                    "skin": "ui/ui_game_top_bar_1_1.png",
                                    "height": 92
                                },
                                "nodeParent": 98,
                                "label": "imgProEnergy",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 97,
                                "child": []
                            }]
                        },
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image,item6",
                            "props": {
                                "y": 46,
                                "x": 127,
                                "width": 59,
                                "skin": "ui/watermelon.png",
                                "name": "item6",
                                "height": 63,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 95,
                            "label": "item6",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 120,
                            "child": []
                        },
                        {
                            "x": 30,
                            "type": "Label",
                            "searchKey": "Label,txtLevel",
                            "props": {
                                "var": "txtLevel",
                                "valign": "middle",
                                "top": -97,
                                "text": "LEVEL 20",
                                "fontSize": 45,
                                "color": "#ffffff",
                                "centerX": -1,
                                "bold": true,
                                "align": "center"
                            },
                            "nodeParent": 95,
                            "label": "txtLevel",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 83,
                            "child": []
                        },
                        {
                            "x": 30,
                            "type": "Label",
                            "searchKey": "Label,lab_InvincibleTime",
                            "props": {
                                "var": "lab_InvincibleTime",
                                "valign": "middle",
                                "top": 100,
                                "text": "God Mode 5s",
                                "fontSize": 32,
                                "color": "#f80400",
                                "centerX": -2,
                                "bold": false,
                                "align": "center"
                            },
                            "nodeParent": 95,
                            "label": "lab_InvincibleTime",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 209,
                            "child": []
                        }
                    ],
                    "$HIDDEN": false
                },
                {
                    "x": 15,
                    "type": "Button",
                    "searchKey": "Button,btnRestart",
                    "props": {
                        "x": 23,
                        "var": "btnRestart",
                        "top": 84,
                        "stateNum": 1,
                        "skin": "ui/mainUI_1.png"
                    },
                    "nodeParent": 2,
                    "label": "btnRestart",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 92,
                    "child": [],
                    "$HIDDEN": false
                },
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,boxWaitStart",
                    "props": {
                        "width": 640,
                        "var": "boxWaitStart",
                        "top": -3,
                        "right": 0,
                        "left": -1,
                        "height": 1138,
                        "bottom": 0
                    },
                    "nodeParent": 2,
                    "label": "boxWaitStart",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 85,
                    "child": [{
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "text": " TAP TO START",
                                "name": "",
                                "fontSize": 52,
                                "color": "#ffffff",
                                "centerX": 5,
                                "bottom": 262,
                                "bold": true
                            },
                            "nodeParent": 85,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 105,
                            "child": []
                        },
                        {
                            "type": "Box",
                            "searchKey": "Box",
                            "props": {
                                "width": 334,
                                "scaleY": 0.8,
                                "scaleX": 0.8,
                                "name": "",
                                "height": 358,
                                "centerX": -3,
                                "bottom": 360
                            },
                            "nodeParent": 85,
                            "label": "Box",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 109,
                            "child": [{
                                    "type": "Image",
                                    "searchKey": "Image,shose",
                                    "props": {
                                        "y": 333.5,
                                        "x": 96,
                                        "skin": "ui/mainUI_3.png",
                                        "name": "shose",
                                        "anchorY": 1,
                                        "anchorX": 0.5
                                    },
                                    "nodeParent": 109,
                                    "label": "shose",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 106,
                                    "child": []
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image,hand",
                                    "props": {
                                        "y": 286.5,
                                        "x": 268,
                                        "width": 105,
                                        "skin": "ui/hand.png",
                                        "name": "hand",
                                        "height": 93,
                                        "anchorY": 0.5,
                                        "anchorX": 0.5
                                    },
                                    "nodeParent": 109,
                                    "label": "hand",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 107,
                                    "child": []
                                },
                                {
                                    "type": "Image",
                                    "searchKey": "Image,cirile",
                                    "props": {
                                        "y": 253.5,
                                        "x": 192,
                                        "visible": false,
                                        "skin": "ui/mainUI_2.png",
                                        "name": "cirile"
                                    },
                                    "nodeParent": 109,
                                    "label": "cirile",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 108,
                                    "child": []
                                }
                            ]
                        }
                    ],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,boxWaitContinue",
                    "props": {
                        "var": "boxWaitContinue",
                        "top": -3,
                        "skin": "ui/Mask.png",
                        "sizeGrid": "15,12,17,14",
                        "right": -2,
                        "left": -2,
                        "bottom": -2
                    },
                    "nodeParent": 2,
                    "label": "boxWaitContinue",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 86,
                    "child": [{
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "width": 639,
                            "height": 124,
                            "centerX": 0,
                            "bottom": 200,
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        },
                        "nodeParent": 86,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 104,
                        "child": [{
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "text": "TAP TO CONTINUE",
                                "fontSize": 52,
                                "color": "#ffffff",
                                "centerY": 0,
                                "centerX": 0,
                                "bold": true,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 104,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 103,
                            "child": []
                        }]
                    }],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Box",
                    "searchKey": "Box,boxLevelCompleted",
                    "props": {
                        "x": 0,
                        "width": 640,
                        "var": "boxLevelCompleted",
                        "top": 239,
                        "height": 160
                    },
                    "nodeParent": 2,
                    "label": "boxLevelCompleted",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 87,
                    "child": [{
                        "x": 30,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "x": 0,
                            "wordWrap": true,
                            "width": 467,
                            "valign": "middle",
                            "text": "DONE",
                            "height": 160,
                            "fontSize": 62,
                            "color": "#ffffff",
                            "centerX": 0,
                            "bold": true,
                            "align": "center"
                        },
                        "nodeParent": 87,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 93,
                        "child": []
                    }],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Box",
                    "searchKey": "Box,watermelons",
                    "props": {
                        "width": 316,
                        "var": "watermelons",
                        "height": 316,
                        "centerY": -3,
                        "centerX": -1,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 2,
                    "label": "watermelons",
                    "isOpen": false,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 110,
                    "child": [{
                            "type": "Image",
                            "searchKey": "Image,item0",
                            "props": {
                                "y": 147,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item0",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item0",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 113,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item1",
                            "props": {
                                "y": 150,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item1",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item1",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 114,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item2",
                            "props": {
                                "y": 150,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item2",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item2",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 115,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item3",
                            "props": {
                                "y": 150,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item3",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item3",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 116,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item4",
                            "props": {
                                "y": 150,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item4",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item4",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 117,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item5",
                            "props": {
                                "y": 151,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item5",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item5",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 118,
                            "child": []
                        },
                        {
                            "type": "Image",
                            "searchKey": "Image,item6",
                            "props": {
                                "y": 151,
                                "x": 150,
                                "width": 40,
                                "skin": "ui/watermelon.png",
                                "name": "item6",
                                "height": 42,
                                "anchorY": 0.5,
                                "anchorX": 0.5
                            },
                            "nodeParent": 110,
                            "label": "item6",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 119,
                            "child": []
                        }
                    ],
                    "$HIDDEN": true
                },
                {
                    "x": 15,
                    "type": "Label",
                    "searchKey": "Label,energyTips",
                    "props": {
                        "var": "energyTips",
                        "top": 287,
                        "text": "Fill the energy bar, you'll enter god mode.",
                        "fontSize": 28,
                        "color": "#ffffff",
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 2,
                    "label": "energyTips",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 121,
                    "child": [],
                    "$HIDDEN": false
                },
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image,imgLogo",
                    "props": {
                        "width": 564,
                        "var": "imgLogo",
                        "top": 122,
                        "skin": "ui/logo.png",
                        "height": 259,
                        "centerX": 0,
                        "anchorY": 0.5,
                        "anchorX": 0.5
                    },
                    "nodeParent": 2,
                    "label": "imgLogo",
                    "isDirectory": false,
                    "isAniNode": true,
                    "hasChild": false,
                    "compId": 122,
                    "child": [],
                    "$HIDDEN": true
                }
            ],
            "animations": [{
                    "nodes": [{
                        "target": 104,
                        "keyframes": {
                            "scaleY": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 0
                                },
                                {
                                    "value": 1.15,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 10
                                },
                                {
                                    "value": 0.9,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 20
                                },
                                {
                                    "value": 1.1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 30
                                },
                                {
                                    "value": 0.9,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 40
                                },
                                {
                                    "value": 1.1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 50
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleY",
                                    "index": 60
                                }
                            ],
                            "scaleX": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 0
                                },
                                {
                                    "value": 1.15,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 10
                                },
                                {
                                    "value": 0.9,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 20
                                },
                                {
                                    "value": 1.1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 30
                                },
                                {
                                    "value": 0.9,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 40
                                },
                                {
                                    "value": 1.1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 50
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "scaleX",
                                    "index": 60
                                }
                            ],
                            "alpha": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "alpha",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 104,
                                    "key": "alpha",
                                    "index": 10
                                }
                            ]
                        }
                    }],
                    "name": "waitContinueAni",
                    "id": 1,
                    "frameRate": 60,
                    "action": 0
                },
                {
                    "nodes": [{
                            "target": 107,
                            "keyframes": {
                                "rotation": [{
                                        "value": 0,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 107,
                                        "key": "rotation",
                                        "index": 0
                                    },
                                    {
                                        "value": -28,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 107,
                                        "key": "rotation",
                                        "index": 20
                                    },
                                    {
                                        "value": -28,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 107,
                                        "key": "rotation",
                                        "index": 40
                                    },
                                    {
                                        "value": 0,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 107,
                                        "key": "rotation",
                                        "index": 50
                                    }
                                ]
                            }
                        },
                        {
                            "target": 108,
                            "keyframes": {
                                "visible": [{
                                        "value": false,
                                        "tweenMethod": "linearNone",
                                        "tween": false,
                                        "target": 108,
                                        "key": "visible",
                                        "index": 0
                                    },
                                    {
                                        "value": true,
                                        "tweenMethod": "linearNone",
                                        "tween": false,
                                        "target": 108,
                                        "key": "visible",
                                        "index": 20
                                    },
                                    {
                                        "value": false,
                                        "tweenMethod": "linearNone",
                                        "tween": false,
                                        "target": 108,
                                        "key": "visible",
                                        "index": 40
                                    }
                                ]
                            }
                        },
                        {
                            "target": 106,
                            "keyframes": {
                                "y": [{
                                        "value": 333.5,
                                        "tweenMethod": "cubicOut",
                                        "tween": true,
                                        "target": 106,
                                        "key": "y",
                                        "index": 0
                                    },
                                    {
                                        "value": 100,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "y",
                                        "index": 20
                                    },
                                    {
                                        "value": 333.5,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "y",
                                        "index": 40
                                    },
                                    {
                                        "value": 333.5,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "y",
                                        "index": 50
                                    }
                                ],
                                "scaleY": [{
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 0
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 20
                                    },
                                    {
                                        "value": 1.3,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 40
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 50
                                    },
                                    {
                                        "value": 1.3,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 55
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleY",
                                        "index": 60
                                    }
                                ],
                                "scaleX": [{
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 0
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 20
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 40
                                    },
                                    {
                                        "value": 1.2,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 50
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 55
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 106,
                                        "key": "scaleX",
                                        "index": 60
                                    }
                                ]
                            }
                        }
                    ],
                    "name": "ani2",
                    "id": 2,
                    "frameRate": 60,
                    "action": 2
                },
                {
                    "nodes": [{
                        "target": 112,
                        "keyframes": {
                            "y": [{
                                    "value": 300,
                                    "tweenMethod": "backOut",
                                    "tween": true,
                                    "target": 112,
                                    "key": "y",
                                    "index": 0
                                },
                                {
                                    "value": 125,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "y",
                                    "index": 20
                                }
                            ],
                            "scaleY": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "scaleY",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "scaleY",
                                    "index": 20
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "backOut",
                                    "tween": true,
                                    "target": 112,
                                    "key": "scaleY",
                                    "index": 25
                                }
                            ],
                            "scaleX": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "scaleX",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "scaleX",
                                    "index": 20
                                }
                            ],
                            "alpha": [{
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "alpha",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "alpha",
                                    "index": 10
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "alpha",
                                    "index": 20
                                },
                                {
                                    "value": 0,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 112,
                                    "key": "alpha",
                                    "index": 25
                                }
                            ]
                        }
                    }],
                    "name": "faceAni",
                    "id": 3,
                    "frameRate": 60,
                    "action": 0
                },
                {
                    "nodes": [],
                    "name": "Tonimigame",
                    "id": 4,
                    "frameRate": 24,
                    "action": 0
                }
            ],
            "$HIDDEN": false
        }, e.GameUI = t, o("ui.GameUI", t);
        class i extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(i.uiView);
            }
        }
        i.uiView = {
            type: "Dialog",
            props: {
                y: 0,
                width: 640,
                top: 0,
                height: 1136
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    x: -248,
                    width: 1114,
                    top: -200,
                    skin: "ui/bg1.png",
                    height: 1600
                },
                compId: 29
            }, {
                type: "Image",
                props: {
                    y: 223,
                    x: -140,
                    width: 1067,
                    skin: "ui/black.png",
                    sizeGrid: "9,10,10,9",
                    height: 102
                },
                compId: 28
            }, {
                type: "Button",
                props: {
                    y: 120,
                    x: 254,
                    var: "btn_close",
                    stateNum: 1,
                    skin: "ui/btn_fh.png",
                    scaleY: 1.3,
                    scaleX: 1.3,
                    labelSize: 32,
                    labelColors: "#fff,#fff,#fff,#fff"
                },
                compId: 24
            }, {
                type: "Image",
                props: {
                    y: 184,
                    x: 254,
                    var: "img_play",
                    skin: "ui/hyzw.png"
                },
                compId: 21
            }, {
                type: "Image",
                props: {
                    y: 335,
                    x: 254,
                    var: "img_recm",
                    skin: "ui/rmtj.png"
                },
                compId: 22
            }, {
                type: "Box",
                props: {
                    y: 229,
                    x: -9,
                    width: 726,
                    height: 88
                },
                compId: 3,
                child: [{
                    type: "List",
                    props: {
                        y: 5,
                        x: 0,
                        width: 640,
                        var: "list_dev_pick",
                        spaceX: 16,
                        repeatY: 1,
                        repeatX: 10,
                        height: 83
                    },
                    compId: 18,
                    child: [{
                        type: "Box",
                        props: {
                            renderType: "render"
                        },
                        compId: 19,
                        child: [{
                            type: "Image",
                            props: {
                                width: 80,
                                skin: "ui/ui_jgg.png",
                                name: "icon",
                                height: 80
                            },
                            compId: 20
                        }]
                    }]
                }]
            }, {
                type: "Box",
                props: {
                    y: 387,
                    x: 96,
                    width: 429,
                    var: "box_dev_box",
                    height: 642
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        y: 0,
                        x: 6,
                        width: 418,
                        var: "list_dev_box",
                        spaceY: 4,
                        spaceX: 2,
                        repeatY: 50,
                        repeatX: 2,
                        name: "list",
                        height: 632
                    },
                    compId: 8,
                    child: [{
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            width: 208,
                            renderType: "render",
                            height: 140
                        },
                        compId: 9,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 207,
                                skin: "ui/ui_tj_01.png",
                                name: "icon",
                                height: 112
                            },
                            compId: 11
                        }, {
                            type: "Image",
                            props: {
                                y: 113,
                                x: 0,
                                width: 207,
                                skin: "ui/ui_tj_02.png",
                                height: 26
                            },
                            compId: 25
                        }, {
                            type: "Label",
                            props: {
                                y: 114,
                                x: 5,
                                width: 141,
                                text: "xxxxx",
                                strokeColor: "#000000",
                                stroke: 1,
                                name: "label",
                                height: 22,
                                fontSize: 22,
                                color: "#ffffff"
                            },
                            compId: 26
                        }]
                    }]
                }]
            }, {
                type: "Button",
                props: {
                    y: 789,
                    x: 182,
                    width: 250,
                    var: "btn_continueGame",
                    stateNum: 1,
                    skin: "ui/btn_continue.png",
                    labelSize: 32,
                    labelColors: "#fff,#fff,#fff,#fff",
                    height: 94
                },
                compId: 30
            }],
            loadList: ["ui/bg1.png", "ui/black.png", "ui/btn_fh.png", "ui/hyzw.png", "ui/rmtj.png", "ui/ui_jgg.png", "ui/ui_tj_01.png", "ui/ui_tj_02.png", "ui/btn_continue.png"],
            loadList3D: []
        }, e.GameShareDialogUI = i, o("ui.GameShareDialogUI", i);
        class a extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(a.uiView);
            }
        }
        a.uiView = {
                "x": 0,
                "type": "Dialog",
                "selectedBox": 15,
                "selecteID": 13,
                "searchKey": "Dialog",
                "props": {
                    "x": 0,
                    "width": 640,
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "height": 1136,
                    "bottom": 0
                },
                "nodeParent": -1,
                "maxID": 155,
                "loadList3D": [],
                "loadList": [
                    "ui/Mask.png",
                    "ui/btn01.png",
                    "ui/btn02.png",
                    "ui/Watch_ad2.png",
                    "ui/c4cbcbd2f280944efa1e97bc8f55d7c.png",
                    "ui/ui_2.png",
                    "ui/ui_lan.png"
                ],
                "label": "Dialog",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [{
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "top": 0,
                            "skin": "ui/Mask.png",
                            "sizeGrid": "15,12,17,14",
                            "right": 0,
                            "left": 0,
                            "bottom": 0,
                            "alpha": 0.7
                        },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 10,
                        "child": []
                    },
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "y": 156,
                            "x": 136,
                            "width": 373,
                            "height": 900
                        },
                        "nodeParent": 2,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 15,
                        "child": [{
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label",
                                "props": {
                                    "y": -75,
                                    "text": "WIN",
                                    "fontSize": 90,
                                    "color": "#ffffff",
                                    "centerX": -3,
                                    "bold": true
                                },
                                "nodeParent": 15,
                                "label": "Label",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 3,
                                "child": []
                            },
                            {
                                "x": 30,
                                "type": "Button",
                                "searchKey": "Button,btnContinueGame",
                                "props": {
                                    "y": 721.5,
                                    "width": 237,
                                    "var": "btnContinueGame",
                                    "stateNum": 1,
                                    "skin": "ui/btn01.png",
                                    "labelSize": 36,
                                    "labelColors": "#ffffff",
                                    "labelBold": true,
                                    "label": "CONTINUE",
                                    "height": 75,
                                    "centerX": -10
                                },
                                "nodeParent": 15,
                                "label": "btnContinueGame",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 6,
                                "child": []
                            },
                            {
                                "x": 30,
                                "type": "Button",
                                "searchKey": "Button,btnGetInvincibleState",
                                "props": {
                                    "y": 652,
                                    "var": "btnGetInvincibleState",
                                    "stateNum": 1,
                                    "skin": "ui/btn02.png",
                                    "scaleY": 0.85,
                                    "scaleX": 0.85,
                                    "labelSize": 26,
                                    "labelColors": "#ffffff",
                                    "labelBold": true,
                                    "label": "           God Mode Start",
                                    "centerX": -10,
                                    "anchorY": 0.5,
                                    "anchorX": 0.5
                                },
                                "nodeParent": 15,
                                "label": "btnGetInvincibleState",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 13,
                                "child": [{
                                    "type": "Sprite",
                                    "searchKey": "Sprite",
                                    "props": {
                                        "y": 19,
                                        "x": 26,
                                        "texture": "ui/Watch_ad2.png"
                                    },
                                    "nodeParent": 13,
                                    "label": "Sprite",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 14,
                                    "child": []
                                }]
                            }
                        ]
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,homeList",
                        "props": {
                            "y": 267,
                            "x": 34,
                            "width": 572,
                            "var": "homeList",
                            "spaceY": 5,
                            "spaceX": 5,
                            "repeatY": 2,
                            "repeatX": 2,
                            "height": 428
                        },
                        "nodeParent": 2,
                        "label": "homeList",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 152,
                        "child": [{
                            "x": 30,
                            "type": "Box",
                            "searchKey": "Box",
                            "props": {
                                "width": 280,
                                "renderType": "render",
                                "height": 210
                            },
                            "nodeParent": 152,
                            "label": "Box",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": false,
                            "hasChild": true,
                            "compId": 153,
                            "child": [{
                                "x": 45,
                                "type": "Image",
                                "searchKey": "Image,thumb",
                                "props": {
                                    "top": 0,
                                    "skin": "ui/ui_2.png",
                                    "right": 0,
                                    "name": "thumb",
                                    "left": 0,
                                    "bottom": 0
                                },
                                "nodeParent": 153,
                                "label": "thumb",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 154,
                                "child": []
                            }]
                        }]
                    }
                ],
                "animations": [{
                    "nodes": [{
                        "target": 13,
                        "keyframes": {
                            "scaleY": [{
                                    "value": 0.7,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleY",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleY",
                                    "index": 20
                                },
                                {
                                    "value": 0.7,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleY",
                                    "index": 40
                                }
                            ],
                            "scaleX": [{
                                    "value": 0.7,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleX",
                                    "index": 0
                                },
                                {
                                    "value": 1,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleX",
                                    "index": 20
                                },
                                {
                                    "value": 0.7,
                                    "tweenMethod": "linearNone",
                                    "tween": true,
                                    "target": 13,
                                    "key": "scaleX",
                                    "index": 40
                                }
                            ]
                        }
                    }],
                    "name": "ani1",
                    "id": 1,
                    "frameRate": 60,
                    "action": 2
                }]
            },

            e.GameWinUI = a, o("ui.GameWinUI", a);

        class n extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(n.uiView);
            }
        }
        n.uiView = {
            type: "Dialog",
            props: {
                width: 640,
                top: 0,
                right: 0,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "ui/Mask.png",
                    right: 0,
                    left: 0,
                    bottom: 0,
                    alpha: .7,
                    sizeGrid: "15,12,17,14"
                },
                compId: 10
            }, {
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 640,
                    height: 1136
                },
                compId: 12,
                child: [{
                    type: "Label",
                    props: {
                        y: 200,
                        text: "恭喜解锁新皮肤",
                        fontSize: 60,
                        color: "#ffffff",
                        centerX: 0,
                        bold: !0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 377,
                        skin: "ui/mainUi_8.png",
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 365,
                        width: 181,
                        var: "skinIcon",
                        skin: "ui/mainUI_3.png",
                        height: 108,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 11
                }, {
                    type: "Button",
                    props: {
                        y: 589,
                        var: "btnConfirm",
                        stateNum: 1,
                        skin: "ui/btn01.png",
                        labelSize: 48,
                        labelColors: "#ffffff",
                        labelBold: !0,
                        label: "前往替换",
                        centerX: 0
                    },
                    compId: 6
                }, {
                    type: "Label",
                    props: {
                        y: 857,
                        visible: !1,
                        var: "lab_btnNot",
                        text: "不了",
                        fontSize: 36,
                        color: "#c8c8c8",
                        centerX: 155
                    },
                    compId: 13
                }, {
                    type: "Button",
                    props: {
                        y: 845,
                        var: "btnMoreGame",
                        stateNum: 1,
                        skin: "ui/btnMore.png",
                        centerX: 0
                    },
                    compId: 14
                }]
            }],
            loadList: ["ui/Mask.png", "ui/mainUi_8.png", "ui/mainUI_3.png", "ui/btn01.png", "ui/btnMore.png"],
            loadList3D: []
        }, e.GetNewSkinUI = n, o("ui.GetNewSkinUI", n);


        class s extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(s.uiView);
            }
        }
        s.uiView = {
                "x": 0,
                "type": "Dialog",
                "selectedBox": 9,
                "selecteID": 8,
                "searchKey": "Dialog",
                "props": {
                    "width": 640,
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "height": 1136,
                    "bottom": 0
                },
                "nodeParent": -1,
                "maxID": 11,
                "loadList3D": [],
                "loadList": [
                    "ui/Mask.png",
                    "ui/mainUi_7.png",
                    "ui/btn01.png",
                    "ui/Watch_ad2.png"
                ],
                "label": "Dialog",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [{
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "top": 0,
                            "skin": "ui/Mask.png",
                            "sizeGrid": "15,12,17,14",
                            "right": 0,
                            "left": 0,
                            "bottom": 0,
                            "alpha": 0.7
                        },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 10,
                        "child": []
                    },
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": {
                            "y": 325,
                            "x": 136,
                            "width": 371,
                            "height": 510
                        },
                        "nodeParent": 2,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 9,
                        "child": [{
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label",
                                "props": {
                                    "var": "ttt",
                                    "y": -3,
                                    "text": "POWER IS NOT ENOUGH",
                                    "fontSize": 45,
                                    "color": "#f6e794",
                                    "centerX": 0,
                                    "bold": true
                                },
                                "nodeParent": 9,
                                "label": "Label",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 3,
                                "child": []
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": {
                                    "y": 171,
                                    "x": 69,
                                    "texture": "ui/mainUi_7.png"
                                },
                                "nodeParent": 9,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 4,
                                "child": []
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lab_addPhysicPower",
                                "props": {
                                    "y": 168,
                                    "x": -136,
                                    "var": "lab_addPhysicPower",
                                    "text": "+3",
                                    "fontSize": 90,
                                    "color": "#ffffff",
                                    "centerX": 58
                                },
                                "nodeParent": 9,
                                "label": "lab_addPhysicPower",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 5,
                                "child": []
                            },
                            {
                                "x": 30,
                                "type": "Button",
                                "searchKey": "Button,btnGet",
                                "props": {
                                    "y": 333,
                                    "x": -136,
                                    "var": "btnGet",
                                    "stateNum": 1,
                                    "skin": "ui/btn01.png",
                                    "labelSize": 62,
                                    "labelColors": "#ffffff",
                                    "labelBold": true,
                                    "label": "     CLAIM",
                                    "centerX": 0
                                },
                                "nodeParent": 9,
                                "label": "btnGet",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 6,
                                "child": [{
                                    "type": "Sprite",
                                    "searchKey": "Sprite",
                                    "props": {
                                        "y": 20.5,
                                        "x": 30,
                                        "texture": "ui/Watch_ad2.png"
                                    },
                                    "nodeParent": 6,
                                    "label": "Sprite",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 7,
                                    "child": []
                                }]
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lab_btnNot",
                                "props": {
                                    "y": 480,
                                    "var": "lab_btnNot",
                                    "text": "NO,THANKS",
                                    "fontSize": 40,
                                    "color": "#ffffff",
                                    "centerX": 0
                                },
                                "nodeParent": 9,
                                "label": "lab_btnNot",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 8,
                                "child": []
                            }
                        ]
                    }
                ],
                "animations": [{
                    "nodes": [],
                    "name": "ani1",
                    "id": 1,
                    "frameRate": 24,
                    "action": 0
                }]
            },
            e.GetPhysicPowerUI = s, o("ui.GetPhysicPowerUI", s);

        class r extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(r.uiView);
            }
        }
        r.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    top: 0,
                    skin: "ui/Mask.png",
                    right: 0,
                    left: 0,
                    bottom: 0,
                    sizeGrid: "15,12,17,14"
                },
                compId: 3
            }, {
                type: "Box",
                props: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 4,
                child: [{
                    type: "Label",
                    props: {
                        y: 156,
                        text: "恭喜获得宝箱奖励",
                        fontSize: 60,
                        color: "#f8e793",
                        centerX: 0,
                        bold: !0
                    },
                    compId: 5
                }, {
                    type: "Label",
                    props: {
                        y: 233,
                        text: "手速越快，赚得越多",
                        fontSize: 42,
                        color: "#ffffff",
                        centerX: 0,
                        bold: !0
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 378,
                        skin: "ui/Treasure chest_1.png",
                        centerX: 0
                    },
                    compId: 7
                }, {
                    type: "Button",
                    props: {
                        var: "btnClick",
                        stateNum: 1,
                        skin: "ui/btn03.png",
                        labelSize: 48,
                        labelColors: "#ffffff",
                        labelBold: !0,
                        label: "点我",
                        centerX: 0,
                        bottom: 100
                    },
                    compId: 8
                }, {
                    type: "ProgressBar",
                    props: {
                        y: 802,
                        var: "progress",
                        skin: "ui/progress_game_top.png",
                        centerX: 0
                    },
                    compId: 9
                }]
            }],
            loadList: ["ui/Mask.png", "ui/Treasure chest_1.png", "ui/btn03.png", "ui/progress_game_top.png"],
            loadList3D: []
        }, e.GetRewardBoxUI = r, o("ui.GetRewardBoxUI", r);
        class l extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(l.uiView);
            }
        }
        l.uiView = {
            type: "Dialog",
            props: {
                width: 480,
                height: 375
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    width: 480,
                    skin: "ui/ui_cheng.png",
                    height: 320,
                    centerX: 0,
                    bottom: 0
                },
                compId: 5,
                child: [{
                    type: "Image",
                    props: {
                        width: 480,
                        top: -55,
                        skin: "ui/ui_lan.png",
                        left: 0,
                        height: 55
                    },
                    compId: 6,
                    child: [{
                        type: "Label",
                        props: {
                            width: 270,
                            valign: "middle",
                            top: 0,
                            text: "你的好友邀请你玩：",
                            overflow: "hidden",
                            left: 5,
                            fontSize: 30,
                            font: "Microsoft YaHei",
                            color: "#eaff00",
                            bottom: 0,
                            bold: !0,
                            align: "left"
                        },
                        compId: 10
                    }, {
                        type: "Label",
                        props: {
                            var: "Name",
                            valign: "middle",
                            top: 0,
                            text: "天天撸玉米",
                            right: 40,
                            overflow: "hidden",
                            left: 270,
                            fontSize: 30,
                            font: "Microsoft YaHei",
                            color: "#fdfdfd",
                            bottom: 0,
                            bold: !0,
                            align: "left"
                        },
                        compId: 11
                    }]
                }]
            }, {
                type: "Image",
                props: {
                    var: "begin",
                    skin: "ui/Line_btn01.png",
                    scaleY: .8,
                    scaleX: .8,
                    centerX: 0,
                    bottom: 50
                },
                compId: 8,
                child: [{
                    type: "Label",
                    props: {
                        valign: "middle",
                        text: "开始游戏",
                        strokeColor: "#ffd706",
                        stroke: 1,
                        overflow: "hidden",
                        fontSize: 50,
                        font: "Microsoft YaHei",
                        color: "#eaff00",
                        centerY: 0,
                        centerX: 0,
                        bold: !0,
                        align: "center"
                    },
                    compId: 9
                }]
            }, {
                type: "Image",
                props: {
                    var: "exit",
                    top: 0,
                    skin: "ui/btn_closs.png",
                    right: 0
                },
                compId: 13
            }],
            loadList: ["ui/ui_cheng.png", "ui/ui_lan.png", "ui/Line_btn01.png", "ui/btn_closs.png"],
            loadList3D: []
        }, e.InterstitialUI = l, o("ui.InterstitialUI", l);
        class h extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(h.uiView);
            }
        }
        h.uiView = {
            type: "View",
            props: {
                width: 640,
                top: 0,
                right: 0,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            animations: [{
                nodes: [{
                    target: 75,
                    keyframes: {
                        alpha: [{
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 75,
                            key: "alpha",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 75,
                            key: "alpha",
                            index: 15
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 75,
                            key: "alpha",
                            index: 30
                        }]
                    }
                }],
                name: "ani1",
                id: 1,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 88,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleY",
                            index: 30
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleY",
                            index: 45
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleX",
                            index: 30
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "scaleX",
                            index: 45
                        }],
                        alpha: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "alpha",
                            index: 0
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "alpha",
                            index: 30
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 88,
                            key: "alpha",
                            index: 45
                        }]
                    }
                }, {
                    target: 89,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleY",
                            index: 5
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleY",
                            index: 30
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleY",
                            index: 45
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleX",
                            index: 5
                        }, {
                            value: .9,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleX",
                            index: 30
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "scaleX",
                            index: 45
                        }],
                        alpha: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 5
                        }, {
                            value: .7,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 30
                        }, {
                            value: .5,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 45
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 89,
                            key: "alpha",
                            index: 50
                        }]
                    }
                }, {
                    target: 90,
                    keyframes: {
                        scaleY: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleY",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleY",
                            index: 15
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleY",
                            index: 30
                        }, {
                            value: .7,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleY",
                            index: 45
                        }],
                        scaleX: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleX",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleX",
                            index: 15
                        }, {
                            value: .8,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleX",
                            index: 30
                        }, {
                            value: .7,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "scaleX",
                            index: 45
                        }],
                        alpha: [{
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "alpha",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "alpha",
                            index: 15
                        }, {
                            value: .6,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "alpha",
                            index: 30
                        }, {
                            value: .6,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "alpha",
                            index: 45
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 90,
                            key: "alpha",
                            index: 55
                        }]
                    }
                }],
                name: "ani2",
                id: 2,
                frameRate: 24,
                action: 2
            }, {
                nodes: [{
                    target: 80,
                    keyframes: {
                        rotation: [{
                            value: 7,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 0
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 1
                        }, {
                            value: -6,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 2
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 3
                        }, {
                            value: 5,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 4
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 5
                        }, {
                            value: -5,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 6
                        }, {
                            value: 1,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 7
                        }, {
                            value: 6,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 8
                        }, {
                            value: 0,
                            tweenMethod: "linearNone",
                            tween: !0,
                            target: 80,
                            key: "rotation",
                            index: 9
                        }]
                    }
                }],
                name: "achCanGetAni",
                id: 3,
                frameRate: 60,
                action: 0
            }],
            loadList: [],
            loadList3D: []
        }, e.MainUI = h, o("ui.MainUI", h);

        class c extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(c.uiView);
            }
        }
        c.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 28,
                "searchKey": "View",
                "props": {
                    "y": 0,
                    "x": 0,
                    "width": 640,
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "height": 1136,
                    "bottom": 0
                },
                "nodeParent": -1,
                "maxID": 29,
                "loadList3D": [],
                "loadList": [
                    "ui/mainUi_4.png",
                    "ui/3.png",
                    "ui/btn01.png",
                    "ui/Watch_ad2.png",
                    "ui/ui_2.png",
                    "ui/black.png",
                    "ui/ui_lan.png"
                ],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [{
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box,bg",
                        "props": {
                            "y": 0,
                            "x": 0,
                            "var": "bg",
                            "top": 0,
                            "right": 0,
                            "left": 0,
                            "bottom": 0,
                            "bgColor": "#000000",
                            "alpha": 0.7
                        },
                        "nodeParent": 2,
                        "label": "bg",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 14,
                        "child": []
                    },
                    {
                        "x": 15,
                        "type": "Button",
                        "searchKey": "Button,btn_resurgence",
                        "props": {
                            "width": 329,
                            "var": "btn_resurgence",
                            "stateNum": 1,
                            "skin": "ui/btn01.png",
                            "scaleY": 0.91,
                            "scaleX": 0.91,
                            "pivotY": -17,
                            "pivotX": 165,
                            "labelSize": 42,
                            "labelPadding": "0",
                            "labelColors": "#ffffff",
                            "labelAlign": "center",
                            "label": "        REVIVE",
                            "height": 107,
                            "centerY": 269,
                            "centerX": -4
                        },
                        "nodeParent": 2,
                        "label": "btn_resurgence",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 8,
                        "child": [{
                            "x": 30,
                            "type": "Sprite",
                            "searchKey": "Sprite",
                            "props": {
                                "y": 20,
                                "x": 35,
                                "texture": "ui/Watch_ad2.png"
                            },
                            "nodeParent": 8,
                            "label": "Sprite",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 9,
                            "child": []
                        }]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,lab_notRecover",
                        "props": {
                            "width": 175,
                            "var": "lab_notRecover",
                            "valign": "middle",
                            "text": "NO,THANKS",
                            "scaleY": 0.88,
                            "scaleX": 0.88,
                            "height": 50,
                            "fontSize": 32,
                            "color": "#ffffff",
                            "centerY": 369,
                            "centerX": 0,
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        },
                        "nodeParent": 2,
                        "label": "lab_notRecover",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 6,
                        "child": []
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,homeList",
                        "props": {
                            "y": 267,
                            "x": 34,
                            "width": 572,
                            "var": "homeList",
                            "spaceY": 5,
                            "spaceX": 5,
                            "repeatY": 2,
                            "repeatX": 2,
                            "height": 428
                        },
                        "nodeParent": 2,
                        "label": "homeList",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 17,
                        "child": [{
                            "x": 30,
                            "type": "Box",
                            "searchKey": "Box",
                            "props": {
                                "width": 280,
                                "renderType": "render",
                                "height": 210
                            },
                            "nodeParent": 17,
                            "label": "Box",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": false,
                            "hasChild": true,
                            "compId": 23,
                            "child": [{
                                "x": 45,
                                "type": "Image",
                                "searchKey": "Image,thumb",
                                "props": {
                                    "top": 0,
                                    "skin": "ui/ui_2.png",
                                    "right": 0,
                                    "name": "thumb",
                                    "left": 0,
                                    "bottom": 0
                                },
                                "nodeParent": 23,
                                "label": "thumb",
                                "isDirectory": false,
                                "isAniNode": false,
                                "hasChild": false,
                                "compId": 24,
                                "child": []
                            }]
                        }]
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label",
                        "props": {
                            "width": 500,
                            "valign": "middle",
                            "text": "LOSE",
                            "scaleY": 0.88,
                            "scaleX": 0.88,
                            "height": 100,
                            "fontSize": 62,
                            "color": "#ffffff",
                            "centerY": -373,
                            "centerX": -3,
                            "bold": true,
                            "anchorY": 0.5,
                            "anchorX": 0.5,
                            "align": "center"
                        },
                        "nodeParent": 2,
                        "label": "Label",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 15,
                        "child": []
                    }
                ],
                "animations": [{
                        "nodes": [{
                            "target": 6,
                            "keyframes": {
                                "scaleY": [{
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "key": "scaleY",
                                        "index": 0
                                    },
                                    {
                                        "value": 1.2,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleY",
                                        "index": 30
                                    },
                                    {
                                        "value": 1.2,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleY",
                                        "index": 35
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "key": "scaleY",
                                        "index": 60
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleY",
                                        "index": 63
                                    }
                                ],
                                "scaleX": [{
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "key": "scaleX",
                                        "index": 0
                                    },
                                    {
                                        "value": 1.2,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleX",
                                        "index": 30
                                    },
                                    {
                                        "value": 1.2,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleX",
                                        "index": 35
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "key": "scaleX",
                                        "index": 60
                                    },
                                    {
                                        "value": 0.8,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 6,
                                        "label": null,
                                        "key": "scaleX",
                                        "index": 63
                                    }
                                ]
                            }
                        }],
                        "name": "notRecover",
                        "id": 1,
                        "frameRate": 60,
                        "action": 0
                    },
                    {
                        "nodes": [{
                            "target": 8,
                            "keyframes": {
                                "scaleY": [{
                                        "value": 0.7,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleY",
                                        "index": 0
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleY",
                                        "index": 20
                                    },
                                    {
                                        "value": 0.7,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleY",
                                        "index": 40
                                    }
                                ],
                                "scaleX": [{
                                        "value": 0.7,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleX",
                                        "index": 0
                                    },
                                    {
                                        "value": 1,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleX",
                                        "index": 20
                                    },
                                    {
                                        "value": 0.7,
                                        "tweenMethod": "linearNone",
                                        "tween": true,
                                        "target": 8,
                                        "key": "scaleX",
                                        "index": 40
                                    }
                                ]
                            }
                        }],
                        "name": "lookVideoRecover",
                        "id": 2,
                        "frameRate": 60,
                        "action": 2
                    }
                ]
            },
            e.ResurgenceUI = c, o("ui.ResurgenceUI", c);
        class m extends Laya.View {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(m.uiView);
            }
        }
        m.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 15,
                "selecteID": 11,
                "searchKey": "View",
                "props": {
                    "x": 0,
                    "width": 640,
                    "top": 0,
                    "right": 0,
                    "left": 0,
                    "height": 1136,
                    "bottom": 0
                },
                "nodeParent": -1,
                "maxID": 18,
                "loadList3D": [],
                "loadList": [
                    "ui/Mask.png",
                    "ui/mainUi_6.png",
                    "ui/sbg.png",
                    "ui/mainUI_3.png",
                    "ui/sselect.png",
                    "ui/btn01.png",
                    "ui/Watch_ad2.png",
                    "ui/schange.png",
                    "ui/btnReturn.png"
                ],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [{
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": {
                            "top": 0,
                            "skin": "ui/Mask.png",
                            "sizeGrid": "15,12,17,14",
                            "right": 0,
                            "left": 0,
                            "bottom": 0
                        },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": []
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Title",
                        "props": {
                            "var": "Title",
                            "top": 80,
                            "skin": "ui/mainUi_6.png",
                            "centerX": 0
                        },
                        "nodeParent": 2,
                        "label": "Title",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 4,
                        "child": [{
                            "type": "Label",
                            "searchKey": "Label",
                            "props": {
                                "x": -136,
                                "text": "SHOES",
                                "fontSize": 60,
                                "color": "#ffffff",
                                "centerY": 0,
                                "centerX": 0
                            },
                            "nodeParent": 4,
                            "label": "Label",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 5,
                            "child": []
                        }]
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,shoesList",
                        "props": {
                            "width": 532,
                            "var": "shoesList",
                            "top": 250,
                            "spaceY": 20,
                            "spaceX": 50,
                            "repeatX": 2,
                            "height": 742,
                            "centerX": 0
                        },
                        "nodeParent": 2,
                        "label": "shoesList",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 16,
                        "child": [{
                            "x": 30,
                            "type": "Box",
                            "searchKey": "Box,render",
                            "props": {
                                "width": 237,
                                "name": "render",
                                "height": 325
                            },
                            "nodeParent": 16,
                            "label": "render",
                            "isOpen": true,
                            "isDirectory": true,
                            "isAniNode": false,
                            "hasChild": true,
                            "compId": 15,
                            "child": [{
                                    "x": 45,
                                    "type": "Image",
                                    "searchKey": "Image,bg",
                                    "props": {
                                        "y": 7,
                                        "x": 10,
                                        "skin": "ui/sbg.png",
                                        "name": "bg"
                                    },
                                    "nodeParent": 15,
                                    "label": "bg",
                                    "isDirectory": false,
                                    "isAniNode": false,
                                    "hasChild": false,
                                    "compId": 6,
                                    "child": []
                                },
                                {
                                    "x": 45,
                                    "type": "Image",
                                    "searchKey": "Image,icon",
                                    "props": {
                                        "y": 82,
                                        "x": 61,
                                        "skin": "ui/mainUI_3.png",
                                        "name": "icon"
                                    },
                                    "nodeParent": 15,
                                    "label": "icon",
                                    "isDirectory": false,
                                    "isAniNode": false,
                                    "hasChild": false,
                                    "compId": 7,
                                    "child": []
                                },
                                {
                                    "x": 45,
                                    "type": "Image",
                                    "searchKey": "Image,select",
                                    "props": {
                                        "x": 3,
                                        "skin": "ui/sselect.png",
                                        "name": "select"
                                    },
                                    "nodeParent": 15,
                                    "label": "select",
                                    "isDirectory": false,
                                    "isAniNode": false,
                                    "hasChild": false,
                                    "compId": 8,
                                    "child": []
                                },
                                {
                                    "x": 45,
                                    "type": "Button",
                                    "searchKey": "Button,btnFreeGet",
                                    "props": {
                                        "y": 250,
                                        "width": 237,
                                        "stateNum": 1,
                                        "skin": "ui/btn01.png",
                                        "name": "btnFreeGet",
                                        "labelSize": 28,
                                        "labelColors": "#ffffff",
                                        "labelBold": true,
                                        "label": "    FREE",
                                        "height": 75,
                                        "centerX": 0
                                    },
                                    "nodeParent": 15,
                                    "label": "btnFreeGet",
                                    "isOpen": true,
                                    "isDirectory": true,
                                    "isAniNode": false,
                                    "hasChild": true,
                                    "compId": 9,
                                    "child": [{
                                        "x": 60,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": {
                                            "y": 19,
                                            "x": 26,
                                            "width": 50,
                                            "texture": "ui/Watch_ad2.png",
                                            "height": 37
                                        },
                                        "nodeParent": 9,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 10,
                                        "child": []
                                    }]
                                },
                                {
                                    "x": 45,
                                    "type": "Image",
                                    "searchKey": "Image,change",
                                    "props": {
                                        "y": 181,
                                        "x": 10,
                                        "width": 216,
                                        "skin": "ui/schange.png",
                                        "sizeGrid": "0,15,0,14",
                                        "name": "change",
                                        "height": 42
                                    },
                                    "nodeParent": 15,
                                    "label": "change",
                                    "isOpen": null,
                                    "isDirectory": true,
                                    "isAniNode": false,
                                    "hasChild": true,
                                    "compId": 13,
                                    "child": [{
                                        "type": "Label",
                                        "searchKey": "Label",
                                        "props": {
                                            "text": "USE",
                                            "fontSize": 30,
                                            "color": "#ffffff",
                                            "centerY": 0,
                                            "centerX": 0
                                        },
                                        "nodeParent": 13,
                                        "label": "Label",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 14,
                                        "child": []
                                    }]
                                }
                            ]
                        }]
                    },
                    {
                        "x": 15,
                        "type": "Button",
                        "searchKey": "Button,btnReturn",
                        "props": {
                            "var": "btnReturn",
                            "top": 80,
                            "stateNum": 1,
                            "skin": "ui/btnReturn.png",
                            "left": 10
                        },
                        "nodeParent": 2,
                        "label": "btnReturn",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 17,
                        "child": []
                    }
                ],
                "animations": [{
                    "nodes": [],
                    "name": "ani1",
                    "id": 1,
                    "frameRate": 24,
                    "action": 0
                }]
            },

            e.ShoesSkinUI = m, o("ui.ShoesSkinUI", m);
        class p extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(p.uiView);
            }
        }
        p.uiView = {
            type: "Dialog",
            props: {
                width: 640,
                height: 960
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    y: 301,
                    x: 137,
                    width: 370,
                    var: "img_nav",
                    skin: "ui/ui_lan.png",
                    height: 45
                },
                compId: 5,
                child: [{
                    type: "Text",
                    props: {
                        y: 13,
                        x: 11,
                        width: 196,
                        text: "你的好友邀请你玩：",
                        height: 26,
                        fontSize: 20,
                        color: "#f4e109",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 6
                }, {
                    type: "Text",
                    props: {
                        y: 15,
                        x: 177,
                        width: 150,
                        var: "txt_gameName",
                        text: "开心消消消",
                        height: 26,
                        fontSize: 20,
                        color: "#f3f2ee",
                        bold: !0,
                        align: "center",
                        runtime: "laya.display.Text"
                    },
                    compId: 7
                }]
            }, {
                type: "Image",
                props: {
                    y: 345,
                    x: 136,
                    width: 367,
                    var: "img_icon",
                    skin: "ui/rmtj_big.png",
                    height: 254
                },
                compId: 2
            }, {
                type: "Image",
                props: {
                    y: 297,
                    x: 132,
                    width: 375,
                    skin: "ui/ui_jgg.png",
                    sizeGrid: "13,11,15,11",
                    height: 302
                },
                compId: 4
            }, {
                type: "Button",
                props: {
                    y: 278,
                    x: 480,
                    var: "btn_close",
                    stateNum: 1,
                    skin: "ui/close.png"
                },
                compId: 3
            }],
            loadList: ["ui/ui_lan.png", "ui/rmtj_big.png", "ui/ui_jgg.png", "ui/close.png"],
            loadList3D: []
        }, e.SingleShareDialogUI = p, o("ui.SingleShareDialogUI", p);
        class u extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(u.uiView);
            }
        }
        u.uiView = {
            type: "Dialog",
            props: {
                width: 640,
                scaleY: 1,
                scaleX: 1,
                mouseThrough: !1,
                height: 1136
            },
            compId: 1,
            child: [{
                type: "Image",
                props: {
                    y: 420,
                    x: 319,
                    width: 314,
                    skin: "ui/ui_2.png",
                    scaleY: 1.5,
                    scaleX: 1.5,
                    height: 415,
                    anchorY: .5,
                    anchorX: .5
                },
                compId: 16,
                child: [{
                    type: "List",
                    props: {
                        y: 34,
                        x: 9,
                        width: 295,
                        var: "list_dev_box",
                        spaceY: 10,
                        spaceX: 10,
                        repeatY: 3,
                        repeatX: 3,
                        name: "list",
                        height: 375
                    },
                    compId: 8,
                    child: [{
                        type: "Box",
                        props: {
                            y: 0,
                            x: 0,
                            width: 92,
                            renderType: "render",
                            height: 116
                        },
                        compId: 9,
                        child: [{
                            type: "Image",
                            props: {
                                y: 10,
                                x: 0,
                                width: 90,
                                skin: "ui/ui_jgg.png",
                                sizeGrid: "13,11,14,12",
                                height: 94
                            },
                            compId: 10
                        }, {
                            type: "Image",
                            props: {
                                y: 8,
                                x: 0,
                                width: 90,
                                skin: "ui/ui_xiaokuang.png",
                                name: "icon",
                                height: 95
                            },
                            compId: 11
                        }, {
                            type: "Image",
                            props: {
                                y: 103,
                                x: 0,
                                width: 150,
                                skin: "ui/ui_lan.png",
                                scaleY: .6,
                                scaleX: .6,
                                height: 32
                            },
                            compId: 15
                        }, {
                            type: "Label",
                            props: {
                                y: 105,
                                x: 12,
                                width: 70,
                                text: "label",
                                name: "label",
                                height: 16,
                                fontSize: 14,
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 13
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: -1,
                        x: -1,
                        width: 315,
                        skin: "ui/ui_lan.png",
                        height: 34
                    },
                    compId: 18,
                    child: [{
                        type: "Label",
                        props: {
                            y: 23,
                            x: 170,
                            width: 225,
                            text: "好友都在玩的爆款游戏",
                            height: 33,
                            fontSize: 20,
                            color: "#f4e210",
                            bold: !0,
                            anchorY: .5,
                            anchorX: .5,
                            align: "center"
                        },
                        compId: 19
                    }]
                }, {
                    type: "Button",
                    props: {
                        y: 2,
                        x: 8,
                        var: "btn_close",
                        stateNum: 1,
                        skin: "ui/btn_fh.png",
                        scaleY: .8,
                        scaleX: .8
                    },
                    compId: 25
                }]
            }],
            loadList: ["ui/ui_2.png", "ui/ui_jgg.png", "ui/ui_xiaokuang.png", "ui/ui_lan.png", "ui/btn_fh.png"],
            loadList3D: []
        }, e.SplashUI = u, o("ui.SplashUI", u);
        class g extends Laya.Dialog {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(g.uiView);
            }
        }
        g.uiView = {
            type: "Dialog",
            props: {
                width: 640,
                top: 0,
                right: 0,
                left: 0,
                height: 1136,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Image",
                props: {
                    top: 0,
                    skin: "ui/Mask.png",
                    right: 0,
                    left: 0,
                    bottom: 0,
                    alpha: .7,
                    sizeGrid: "15,12,17,14"
                },
                compId: 10
            }, {
                type: "Box",
                props: {
                    y: 272,
                    x: 143,
                    width: 353,
                    height: 583
                },
                compId: 12,
                child: [{
                    type: "Label",
                    props: {
                        y: 285,
                        text: "试用5分钟",
                        fontSize: 48,
                        color: "#ff0400",
                        centerX: 0,
                        bold: !1
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 83,
                        width: 353,
                        skin: "ui/mainUi_8.png",
                        rotation: 0,
                        height: 172,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        y: 71,
                        width: 181,
                        var: "skinIcon",
                        skin: "ui/mainUI_3.png",
                        height: 108,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 11
                }, {
                    type: "Button",
                    props: {
                        y: 389,
                        x: 0,
                        var: "btnTry",
                        stateNum: 1,
                        skin: "ui/btn01.png",
                        labelSize: 48,
                        labelColors: "#ffffff",
                        labelBold: !0,
                        label: "  替换"
                    },
                    compId: 6,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 20.5,
                            x: 40,
                            texture: "ui/Watch_ad2.png"
                        },
                        compId: 14
                    }]
                }, {
                    type: "Label",
                    props: {
                        y: 526,
                        visible: !1,
                        var: "lab_btnNot",
                        text: "不了",
                        fontSize: 36,
                        color: "#c8c8c8",
                        centerX: 119
                    },
                    compId: 8
                }, {
                    type: "Button",
                    props: {
                        y: 514,
                        x: 100,
                        var: "btnMoreGame",
                        stateNum: 1,
                        skin: "ui/btnMore.png"
                    },
                    compId: 13
                }]
            }],
            loadList: ["ui/Mask.png", "ui/mainUi_8.png", "ui/mainUI_3.png", "ui/btn01.png", "ui/Watch_ad2.png", "ui/btnMore.png"],
            loadList3D: []
        }, e.TryNewSkinUI = g, o("ui.TryNewSkinUI", g);
    }(a || (a = {}));
    class s {
        constructor() {
            this.mTipsUI = new a.core.TipsUI(), this.mTipsUI.visible = !1;
        }
        static get Instance() {
            return s.GInstance;
        }
        static CreateInstance() {
            return null == s.GInstance && (s.GInstance = new s()), s.GInstance;
        }
        Update() {
            if (this.mTipsUI.visible) {
                var e = Date.now(),
                    t = Math.sin(Remap(e, this.mTextTipsTime - s.TextTipsAnimLength, this.mTextTipsTime, 0, Math.PI));
                this.mTipsUI.alpha = Remap01Unclamped(Clamp(t, i = 0, a = .5), i, a), e >= this.mTextTipsTime && (this.mTipsUI.visible = !1,
                    this.mTipsUI.removeSelf());
            }
            var i, a;
        }
        ShowTips(e) {
            this.mTipsUI.visible = !0, this.mTipsUI.txtTips.text = e;
            var t = this.mTipsUI.txtTips.getBounds();
            this.mTipsUI.width = t.width, this.mTipsUI.height = t.height, this.mTextTipsTime = Date.now() + s.TextTipsAnimLength,
                this.mTipsUI.parent ? (this.mTipsUI.removeSelf(), Laya.stage.addChild(this.mTipsUI)) : Laya.stage.addChild(this.mTipsUI),
                this.mTipsUI.zOrder = 10086;
        }
    }

    function __decorate(e, t, i, a) {
        var n, o = arguments.length,
            s = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, i) : a;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, a);
        else
            for (var r = e.length - 1; r >= 0; r--)(n = e[r]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, i, s) : n(t, i)) || s);
        return o > 3 && s && Object.defineProperty(t, i, s), s;
    }
    s.GInstance = null, s.TextTipsAnimLength = 1500,
        function(e) {
            e[e.Method = 0] = "Method", e[e.GetSet = 1] = "GetSet", e[e.Get = 2] = "Get";
        }(n || (n = {}));
    class r {
        constructor() {}
    }

    function BuildRemapingTarget(e, t, i) {
        t.Type == n.Method ? t.TargetMemberName ? Object.defineProperty(e, t.PropertyName, {
            value: function() {
                i[t.TargetMemberName].apply(i, arguments);
            }
        }) : Object.defineProperty(e, t.PropertyName, {
            value: function() {
                i[t.PropertyName].apply(i, arguments);
            }
        }) : t.Type == n.GetSet ? t.TargetMemberName ? Object.defineProperty(e, t.PropertyName, {
            set: function(e) {
                i[t.TargetMemberName] = e;
            },
            get: function() {
                return i[t.TargetMemberName];
            }
        }) : Object.defineProperty(e, t.PropertyName, {
            set: function(e) {
                i[t.PropertyName] = e;
            },
            get: function() {
                return i[t.PropertyName];
            }
        }) : t.Type == n.Get && (t.TargetMemberName ? Object.defineProperty(e, t.PropertyName, {
            get: function() {
                return i[t.TargetMemberName];
            }
        }) : Object.defineProperty(e, t.PropertyName, {
            get: function() {
                return i[t.PropertyName];
            }
        }));
    }

    function GeneratorRemapingData(e, t, i, a) {
        var n = new r();
        n.Type = e, n.TargetMemberName = t, n.PropertyName = a, i.RemapingData || (i.RemapingData = []),
            i.RemapingData.push(n);
    }

    function RemapingTargetMethod(e) {
        return function(t, i, a) {
            GeneratorRemapingData(n.Method, e, t, i);
        };
    }

    function RemapingTargetGet(e) {
        return function(t, i) {
            GeneratorRemapingData(n.Get, e, t, i);
        };
    }
    let l = class {
        constructor() {}
        play() {}
        onCanplay(e) {}
        pause() {}
        stop() {}
        seek(e) {}
        destroy() {}
        offCanplay(e) {}
        onPlay(e) {}
        onPause(e) {}
        onStop(e) {}
        offStop(e) {}
        RemapingTarget(e) {}
    };
    __decorate([RemapingTargetGet()], l.prototype, "duration", void 0), __decorate([RemapingTargetGet()], l.prototype, "Canplay", void 0),
        __decorate([RemapingTargetGet()], l.prototype, "currentTime", void 0), __decorate([RemapingTargetGet()], l.prototype, "src", void 0),
        __decorate([RemapingTargetGet()], l.prototype, "volume", void 0), __decorate([RemapingTargetGet()], l.prototype, "paused", void 0),
        __decorate([RemapingTargetMethod()], l.prototype, "play", null), __decorate([RemapingTargetMethod()], l.prototype, "onCanplay", null),
        __decorate([RemapingTargetMethod()], l.prototype, "pause", null), __decorate([RemapingTargetMethod()], l.prototype, "stop", null),
        __decorate([RemapingTargetMethod()], l.prototype, "seek", null), __decorate([RemapingTargetMethod()], l.prototype, "destroy", null),
        __decorate([RemapingTargetMethod()], l.prototype, "offCanplay", null), __decorate([RemapingTargetMethod()], l.prototype, "onPlay", null),
        __decorate([RemapingTargetMethod()], l.prototype, "onPause", null), __decorate([RemapingTargetMethod()], l.prototype, "onStop", null),
        __decorate([RemapingTargetMethod()], l.prototype, "offStop", null);
    var h = l = __decorate([function(e) {
        return e.prototype.RemapingTarget = function(e) {
            for (var t of this.RemapingData) BuildRemapingTarget(this, t, e);
        }, e;
    }], l);
    class d {
        constructor() {
            this.Version = {};
        }
        get Setting() {
            return null == this.Version ? d.kDefaultPolicySetting : null == this.Version[i.kVersion] ? d.kDefaultPolicySetting : this.Version[i.kVersion];
        }
        get AllowBanner() {
            var e = this.Setting;
            return null == e || (null == e.AllowBanner || e.AllowBanner);
        }
        get OtherInserAdRate() {
            var e = this.Setting;
            return null == e ? d.kDefaultPolicySetting.OtherInserAdRate : null != e.OtherInserAdRate ? e.OtherInserAdRate : d.kDefaultPolicySetting.OtherInserAdRate;
        }
        get RoundEndInsertAdRate() {
            var e = this.Setting;
            return null == e ? d.kDefaultPolicySetting.RoundEndInsertAdRate : null != e.RoundEndInsertAdRate ? e.RoundEndInsertAdRate : d.kDefaultPolicySetting.RoundEndInsertAdRate;
        }
        get BannerAdHideTime() {
            var e = this.Setting;
            return null == e ? d.kDefaultPolicySetting.BannerAdHideTime : null != e.BannerAdHideTime ? e.BannerAdHideTime : d.kDefaultPolicySetting.BannerAdHideTime;
        }
        get BannerAdResurgenceShowTime() {
            var e = this.Setting;
            return null == e ? d.kDefaultPolicySetting.BannerAdResurgenceShowTime : null != e.BannerAdResurgenceShowTime ? e.BannerAdResurgenceShowTime : d.kDefaultPolicySetting.BannerAdResurgenceShowTime;
        }
        Initialize(e) {
            this.mCompleted = e;
            var t = new Laya.HttpRequest();
            t.once(Laya.Event.COMPLETE, this, this.OnCompleted), t.once(Laya.Event.ERROR, this, this.OnError),
                t.send(i.GetAdRuleUrl(), "", "get", "json");
        }
        OnCompleted(e) {
            console.log(`Completed => ${JSON.stringify(e)}`), this.Version = e, this.mCompleted && (this.mCompleted(!1),
                this.mCompleted = null);
        }
        OnError() {
            this.mCompleted && (this.mCompleted(!0), this.mCompleted = null);
        }
        static get Instance() {
            return null == d.GInstance && (d.GInstance = new d()), d.GInstance;
        }
    }
    d.kDefaultPolicySetting = {
        AllowBanner: !0,
        RoundEndInsertAdRate: 1,
        OtherInserAdRate: 1,
        BannerAdHideTime: 2e4,
        BannerAdResurgenceShowTime: 600
    }, d.GInstance = null;
    class c {
        GetType() {
            return e.DummySDK;
        }
        AutoMainSize() {
            return !0;
        }
        InitializeAdapter() {}
        Initialize() {}
        Update() {}
        Login() {}
        ShowBannerAd(e, t) {}
        ShowBannerAdRewardBox() {}
        HideBannerAd() {}
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            t && t(!0);
        }
        ShowInterstitialAd(e, t) {}
        showGridAd(e) {}
        IsSupportShare() {
            return !1;
        }
        ShareGame(e, t, i) {
            t && t(!0);
        }
        Track(e, t) {
            D.Log(`Track ${e}[${JSON.stringify(t)}]`);
        }
        VibrateLong() {
            D.Log("VibrateLong...");
        }
        VibrateShort() {
            D.Log("VibrateShort...");
        }
        GetStorage(e) {
            return Laya.LocalStorage.getItem(e);
        }
        SetStorage(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        DelStorage(e) {
            Laya.LocalStorage.removeItem(e);
        }
        IsSupportRecord() {
            return !1;
        }
        IsRecord() {
            return !1;
        }
        RecordLength() {
            return 0;
        }
        StartRecord() {}
        StopRecord() {}
        PauseRecord() {}
        ResumeRecord() {}
        ShareRecord(e, t, i) {
            t && t(!0);
        }
        DownloadFile(e, t, i, a) {}
        GetUserFile(e) {
            return e;
        }
        CreateAudio(e, t) {
            t(new h());
        }
        GetBannerAdHigh() {
            return 90;
        }
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
        IsSupportToMiniGameHTS() {
            return !1;
        }
        loadSubpackage(e) {
            e();
        }
    }
    class m extends h {
        constructor(e) {
            super(), this.Context = e;
        }
        get duration() {
            return this.Context.duration;
        }
        get currentTime() {
            return this.Context.currentTime;
        }
        get src() {
            return this.Context.src;
        }
        set src(e) {
            this.Context.src = e;
        }
        get volume() {
            return this.Context.volume;
        }
        set volume(e) {
            this.Context.volume = e;
        }
        play() {
            this.Context.play();
        }
        pause() {
            this.Context.pause();
        }
        stop() {
            this.Context.stop();
        }
        seek(e) {
            this.Context.seek(e);
        }
        get autoplay() {
            return this.Context.autoplay;
        }
        set autoplay(e) {
            this.Context.autoplay;
        }
        get loop() {
            return this.Context.loop;
        }
        set loop(e) {
            this.Context.loop;
        }
        onCanplay(e) {
            this.Context.onCanplay(e);
        }
        offCanplay(e) {
            this.Context.offCanplay(e);
        }
        destroy() {
            this.Context.destroy();
        }
        onStop(e) {
            this.Context.onStop(e);
        }
        offStop(e) {
            this.Context.offStop(e);
        }
        BuildTarget() {}
    }
    class p extends c {
        constructor() {
            super(...arguments), this.mRewardedVideoAdCountLow = !1, this.showVideo = null,
                this.videoPath = null, this.GameRecorderManager = null, this.mIsRecord = !1, this.mRecordStartTime = 0,
                this.mRecordLength = 0;
        }
        GetType() {
            return e.BaiduSDK;
        }
        AutoMainSize() {
            return !0;
        }
        InitializeAdapter() {}
        Initialize() {
            if (swan.getUpdateManager) {
                let e = swan.getUpdateManager();
                e.onCheckForUpdate(e => console.log(e)), e.onUpdateReady(() => {
                    e.applyUpdate();
                }), e.onUpdateFailed(() => {});
            }
            swan.setInnerAudioOption && swan.setInnerAudioOption({
                mixWithOther: !0,
                obeyMuteSwitch: !0,
                success: e => console.log("播放 设置成功"),
                fail: e => console.log("播放 设置失败", e)
            }), swan.getVideoRecorderManager && (this.GameRecorderManager = swan.getVideoRecorderManager(),
                this.GameRecorderManager.onStart(e => {
                    console.error("录屏开始", e), this.mRecordStartTime = Date.now(), this.mRecordLength = 0,
                        this.mIsRecord = !0;
                }), this.GameRecorderManager.onResume(e => {
                    console.error("继续录屏", e), this.mRecordStartTime = Date.now(), this.mIsRecord = !0;
                }), this.GameRecorderManager.onPause(e => {
                    console.error("录屏暂停", e), this.IsRecord() && (this.mRecordLength += Date.now() - this.mRecordStartTime),
                        this.mIsRecord = !1;
                }), this.GameRecorderManager.onStop(e => {
                    console.error("录屏结束", e), this.IsRecord && (this.mRecordLength += Date.now() - this.mRecordStartTime),
                        this.mIsRecord = !1, this.videoPath = e.videoPath, this.stopFun && (this.stopFun(),
                            delete this.stopFun, this.stopFun = null);
                }), this.GameRecorderManager.onError(e => {
                    console.error("录屏错误", e), this.mIsRecord = !1, this.videoPath = null, this.mRecordStartTime = 0,
                        this.mRecordLength = 0;
                })), this.Log("Baidu.Initialize..."), swan.setKeepScreenOn && swan.setKeepScreenOn({
                keepScreenOn: !0
            });
        }
        Update() {}
        Login() {
            swan.login({
                success: e => {
                    console.log("login成功获取到code-- ", e);
                },
                fail: e => {
                    console.log("login调用失败", e);
                }
            });
        }
        ShowBannerAd(e) {
            if (!(d.Instance.AllowBanner && p.swanBannerAdid && p.swanAdSid && swan.createBannerAd)) return;
            this.bannerAd && this.HideBannerAd(), this.setTimeout = null, this.IsResize = !1;
            const t = swan.getSystemInfoSync();
            this.bannerAd = swan.createBannerAd({
                adUnitId: p.swanBannerAdid,
                appSid: p.swanAdSid,
                style: {
                    top: t.windowHeight - 86,
                    left: .5 * t.windowWidth - 120,
                    width: 240
                }
            }), this.bannerAd.onLoad(this.show.bind(this)), this.bannerAd.onError(this.err.bind(this));
        }
        show(e) {
            this.showVideo ? this.Close() : this.bannerAd.show().then(e => {
                console.log("广告显示成功"), this.Close();
            }).catch(e => {
                console.log("广告显示失败", e), this.Close();
            });
        }
        err(e) {
            console.error("图片广告错误:", e), this.Close();
        }
        Close() {
            this.setTimeout || (this.setTimeout = setTimeout(() => {
                this.ShowBannerAd(null);
            }, d.Instance.BannerAdHideTime), console.error("setTimeout", this.setTimeout));
        }
        HideBannerAd() {
            if (this.bannerAd) {
                try {
                    this.bannerAd.offLoad(this.show.bind(this)), this.bannerAd.offError(this.err.bind(this)),
                        this.bannerAd.hide(), this.bannerAd.destroy();
                } catch (e) {
                    console.error("delete_Banner---err"), console.error(e);
                }
                delete this.bannerAd, this.bannerAd = null;
            }
        }
        RewardedVideoAdIsReady() {
            return !this.mRewardedVideoAdCountLow;
        }
        ShowRewardedVideoAd(e, t, i) {
            this.showVideo = !1, p.swanVideoid && p.swanAdSid && swan.createRewardedVideoAd ? (p.mRewardedVideoAdRewardedName = i,
                this.RewardedVideoAd || (this.RewardedVideoAd = swan.createRewardedVideoAd({
                    adUnitId: p.swanVideoid,
                    appSid: p.swanAdSid
                }), this.RewardedVideoAd.onError(e => {
                    console.log("广告错误:", e), ShowTips("当前没有可用得激励广告请稍后再试."), this.audio_over_fun && (this.audio_over_fun(!1),
                        delete this.audio_over_fun, this.audio_over_fun = null);
                })), this.audio_over_fun && (delete this.audio_over_fun, this.audio_over_fun = null),
                this.audio_over_fun = t, this.RewardedVideoAd.load().then(() => {
                    console.log("拉取广告成功"), this.RewardedVideoAd.show().then(() => {
                        this.showVideo = !0, console.log("播放成功"), null != this.over_fun && (this.RewardedVideoAd.offClose(this.over_fun),
                                delete this.over_fun, this.over_fun = null), this.over_fun = this.OnRewardedVideoAd.bind(this),
                            this.RewardedVideoAd.onClose(this.over_fun);
                    }).catch(e => {
                        console.log("播放广告失败", e);
                    });
                }).catch(e => {
                    console.log("拉取广告失败", e);
                })) : t(!0);
        }
        OnRewardedVideoAd(e) {
            this.showVideo = !1;
            var t = e && e.isEnded || null == e;
            t || (p.mRewardedVideoAdRewardedName ? ShowTips(`只有观看了完整的广告，才能${p.mRewardedVideoAdRewardedName}`) : ShowTips("只有观看了完整的广告，才能获得奖励")),
                null != this.audio_over_fun && (this.audio_over_fun(t), delete this.audio_over_fun,
                    this.audio_over_fun = null);
        }
        ShowInterstitialAd(e, t) {}
        IsSupportShare() {
            return !0;
        }
        ShareGame(e, t, i) {}
        Track(e, t) {
            swan.reportAnalytics(e, t);
        }
        VibrateLong() {
            swan.vibrateLong({});
        }
        VibrateShort() {
            swan.vibrateShort({});
        }
        GetStorage(e) {
            return swan.getStorageSync(e);
        }
        SetStorage(e, t) {
            swan.setStorageSync(e, t);
        }
        DelStorage(e) {
            swan.removeStorageSync(e);
        }
        IsSupportRecord() {
            return !!swan.getVideoRecorderManager;
        }
        IsRecord() {
            return this.mIsRecord;
        }
        RecordLength() {
            var e = this.mRecordLength;
            return this.mIsRecord && (e += Date.now() - this.mRecordStartTime), e;
        }
        StartRecord() {
            this.GameRecorderManager.start({
                duration: 120
            });
        }
        StopRecord() {
            this.GameRecorderManager.stop();
        }
        PauseRecord() {
            this.GameRecorderManager.pause();
        }
        ResumeRecord() {
            this.GameRecorderManager.resume();
        }
        ShareRecord(e, t, i) {
            swan.shareVideo({
                videoPath: this.videoPath,
                success: () => {
                    t(!0), ShowTips("分享视频成功!");
                },
                fail: e => {
                    t(!1), D.Log(`分享视频失败 ${e}`), ShowTips(i ? `只有成功分享了录屏才能${i}` : "只有成功分享了录屏才能获得奖励");
                }
            });
        }
        DownloadFile(e, t, i, a) {
            swan.getFileSystemManager().access({
                path: swan.env.USER_DATA_PATH + "/" + t,
                success: e => {
                    console.error("本地资源存在", swan.env.USER_DATA_PATH + "/" + t), a(null);
                },
                fail: n => {
                    console.error("本地资源不存在", swan.env.USER_DATA_PATH + "/" + t), swan.downloadFile({
                        url: e,
                        header: null,
                        filePath: swan.env.USER_DATA_PATH + "/" + t,
                        success: e => {
                            a(null);
                        },
                        fail: e => {
                            a(e);
                        }
                    }).onProgressUpdate(e => {
                        i(e.progress);
                    });
                }
            });
        }
        GetUserFile(e) {
            return swan.env.USER_DATA_PATH + "/" + e;
        }
        CreateAudio(e, t) {
            let i = new m(swan.createInnerAudioContext());
            for (var a in console.log("Audio Context: "), i.Context) console.log(`    ${a}`);
            i.loop = !1, i.autoplay = !1, i.onCanplay(function Canplay(e) {
                console.error("onCanplay", JSON.stringify(e)), t(i), i.offCanplay(Canplay);
            }), e.includes("https://") || e.includes("http://") ? i.src = e : i.src = swan.env.USER_DATA_PATH + "/" + e;
        }
        Log(e) {
            console.log(e);
        }
        Error(e) {
            console.error(e);
        }
        GetBannerAdHigh() {
            return 90;
        }
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
    }
    p.mRewardedVideoAdRewardedName = "", p.swanVideoid = "6619481", p.swanBannerAdid = "6619480",
        p.swanAdSid = "b72bce80";
    class u extends h {
        constructor(e) {
            super(), this.mChannel = e, this.mCompletedCallback = [], e.pause(), e.on(Laya.Event.COMPLETE, this, this.OnCompleted);
        }
        get paused() {
            return this.mChannel.isStopped;
        }
        get duration() {
            return this.mChannel.duration;
        }
        get currentTime() {
            return this.mChannel.position;
        }
        play() {
            this.mChannel.position > 0 ? this.mChannel && this.mChannel.resume && this.mChannel.resume() : this.mChannel && this.mChannel.play && this.mChannel.play();
        }
        pause() {
            this.mChannel && this.mChannel.pause && this.mChannel.pause();
        }
        stop() {
            this.mChannel && this.mChannel.stop && this.mChannel.stop();
        }
        seek(e) {
            this.mChannel.startTime = e;
        }
        onStop(e) {
            for (var t = 0; t < this.mCompletedCallback.length; t++)
                if (this.mCompletedCallback[t] == e) return;
            this.mCompletedCallback.push(e);
        }
        offStop(e) {
            for (var t = 0; t < this.mCompletedCallback.length; t++)
                if (this.mCompletedCallback[t] == e) return void this.mCompletedCallback.splice(t, 1);
        }
        OnCompleted() {
            for (var e = 0; e < this.mCompletedCallback.length; e++) this.mCompletedCallback[e]();
            this.mCompletedCallback = [];
        }
        destroy() {}
    }
    class g extends c {
        constructor() {
            super(...arguments), this.mIsRecord = !1, this.mRecordStartTime = 0, this.mRecordLength = 0;
        }
        GetType() {
            return e.DummySDK;
        }
        AutoMainSize() {
            return !0;
        }
        InitializeAdapter() {}
        Initialize() {}
        Update() {
            this.mAdUI && this.mAdUI.visible && this.mAdUI.Update();
        }
        Login() {}
        ShowBannerAd(e) {}
        HideBannerAd() {}
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            t(!0);
        }
        ShowInterstitialAd(e, t) {
            this.mAdUI, this.mAdUI.Show(5, !1, Laya.Handler.create(this, this.OnAdCompleted)),
                this.mAdCompleted = null, D.Log(`Show Interstitial Ad ${e}`);
        }
        IsSupportShare() {
            return !0;
        }
        ShareGame(e, t, i) {
            t(!0);
        }
        Track(e, t) {
            D.Log(`Track ${e}[${JSON.stringify(t)}]`);
        }
        VibrateLong() {
            D.Log("VibrateLong..."), navigator.vibrate && navigator.vibrate(400);
        }
        VibrateShort() {
            D.Log("VibrateShort..."), navigator.vibrate && navigator.vibrate(20);
        }
        GetStorage(e) {
            return Laya.LocalStorage.getItem(e);
        }
        SetStorage(e, t) {
            Laya.LocalStorage.setItem(e, t);
        }
        DelStorage(e) {
            Laya.LocalStorage.setItem(e, null);
        }
        IsSupportRecord() {
            return !0;
        }
        IsRecord() {
            return this.mIsRecord;
        }
        RecordLength() {
            var e = this.mRecordLength;
            return this.IsRecord() && (e += Date.now() - this.mRecordStartTime), e;
        }
        StartRecord() {
            this.mRecordStartTime = Date.now(), this.mRecordLength = 0, this.mIsRecord = !0;
        }
        StopRecord() {
            (this.mIsRecord || 0 != this.mRecordStartTime) && (this.mRecordLength += Date.now() - this.mRecordStartTime,
                this.mIsRecord = !1, this.mRecordStartTime = 0);
        }
        PauseRecord() {
            this.mIsRecord && (this.mRecordLength += Date.now() - this.mRecordStartTime, this.mIsRecord = !1,
                this.mRecordStartTime = 0);
        }
        ResumeRecord() {
            0 != this.mRecordStartTime || this.mIsRecord || (this.mRecordStartTime = Date.now(),
                this.mIsRecord = !0);
        }
        playMusic(e) {
            Laya.SoundManager.playMusic(e);
        }
        playSound(e) {
            Laya.SoundManager.playSound(e);
        }
        stopMusic(e) {}
        ShareRecord(e, t, i) {
            t(!0);
        }
        DownloadFile(e, t, i, a) {
            e.includes(".mp3") && (Laya.loader.getRes(e) ? a(null) : Laya.loader.create(e, Laya.Handler.create(this, () => {
                a(null);
            })));
        }
        GetUserFile(e) {
            return e;
        }
        CreateAudio(e, t) {
            Laya.loader.getRes(e) ? Laya.loader.create(e, Laya.Handler.create(this, () => {
                t(new u(Laya.SoundManager.playMusic(e, 1)));
            })) : t(new u(Laya.SoundManager.playMusic(e, 1)));
        }
        OnAdCompleted(e) {
            this.mAdCompleted && this.mAdCompleted(e);
        }
        GetBannerAdHigh() {
            return 90;
        }
    }
    class y extends c {
        constructor() {
            super(...arguments), this.mRewardedVideoAdLoad = !1;
        }
        GetType() {
            return e.MeizuSDK;
        }
        AutoMainSize() {
            return !1;
        }
        InitializeAdapter() {
            Laya.Config.useRetinalCanvas = !0;
        }
        Initialize() {
            this.mRewardedVideoAd = null, this.mRewardedVideoAdName = "", this.mRewardedVideoAdLoadCount = 0,
                this.mRewardedVideoAdCompleted = null, this.mRewardedVideoAdLoad = !1, this.mRewardedVideoAdRequireShow = !1,
                this.mBanner = null, this.mInsertAd = null, this.mInsertAdRequireShow = !1, this.CreateBannerAd("907515530372"),
                this.CreateRewardedVideoAd("521297494657");
        }
        CreateBannerAd(e) {
            var t = this;
            this.mBanner = mz.createBannerAd({
                posId: `${e}`
            }), this.mBanner.onError(i => {
                D.Error(`Banner => ${JSON.stringify(i)}`), t.mBanner.offShow(), t.mBanner.offHide(),
                    t.mBanner.offError(), t.CreateBannerAd(e);
            }), this.mBanner.onLoad(() => {
                t.mBanner.show();
            });
        }
        CreateRewardedVideoAd(e) {
            var t = this;
            this.mRewardedVideoAd && (this.mRewardedVideoAd.destroy(), this.mRewardedVideoAd = null),
                this.mRewardedVideoAd = mz.createRewardedVideoAd({
                    posId: `${e}`
                }), console.log(this.mRewardedVideoAd, "-----"), this.mRewardedVideoAd.onLoad(() => {
                    t.mRewardedVideoAdLoad = !0, t.mRewardedVideoAdRequireShow && t.mRewardedVideoAd.show();
                }), this.mRewardedVideoAd.onVideoStart(() => {
                    D.Log("激励视频 开始播放");
                }), this.mRewardedVideoAd.onRewarded(e => {
                    D.Log("设置视频奖励发放回调"), t.RunVideoAdCompleted(!0, !1), t.mRewardedVideoAdLoad = !1,
                        t.mRewardedVideoAdRequireShow = !1;
                }), this.mRewardedVideoAd.onError(i => (D.Error("视频错误:" + i.errMsg + ",code:" + i.errCode),
                    t.mRewardedVideoAdLoad = !1, t.mRewardedVideoAdRequireShow = !1, t.mRewardedVideoAdLoadCount < 3 ? (t.mRewardedVideoAdLoadCount++,
                        void t.CreateRewardedVideoAd(e)) : void t.RunVideoAdCompleted(!1, !0)));
        }
        RunVideoAdCompleted(e, t) {
            t ? ShowTips("当前没有可用得激励广告请稍后再试.") : e || (this.mRewardedVideoAdName ? ShowTips(`只有观看了完整的广告，才能${this.mRewardedVideoAdName}`) : ShowTips("只有观看了完整的广告，才能获得奖励")),
                this.mRewardedVideoAdCompleted(e);
        }
        CreateInsertAd(e) {
            var t = this;
            this.mInsertAd && (this.mInsertAd.destroy(), this.mInsertAd = null), this.mInsertAd = mz.createInsertAd({
                posId: `${e}`
            }), this.mInsertAd.onShow(() => {
                D.Log("请求插屏广告展示.show回调..."), t.mInsertAdRequireShow = !1;
            }), this.mInsertAd.onError(e => {
                D.Error(`插屏广告error ${JSON.stringify(e)}`);
            });
        }
        Update() {}
        Login() {
            mz.login({
                success: e => {
                    D.Log(`mz login success => ${JSON.stringify(e)}`);
                },
                fail: e => {
                    D.Log(`mz login fail => ${JSON.stringify(e)}`);
                }
            });
        }
        ShowBannerAd(e) {
            this.mBanner && this.mBanner.load();
        }
        HideBannerAd() {
            this.mBanner && this.mBanner.hide();
        }
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            this.mRewardedVideoAdCompleted = t, this.mRewardedVideoAdName = i, this.mRewardedVideoAdLoadCount = 0,
                this.mRewardedVideoAdRequireShow = !0, this.mRewardedVideoAdLoad ? this.mRewardedVideoAd.show() : this.mRewardedVideoAd.load();
        }
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
    }
    class w extends h {
        constructor(e) {
            super(), this.Context = e;
        }
        get duration() {
            return this.Context.duration;
        }
        get currentTime() {
            return this.Context.currentTime;
        }
        get src() {
            return this.Context.src;
        }
        set src(e) {
            this.Context.src = e;
        }
        get volume() {
            return this.Context.volume;
        }
        set volume(e) {
            this.Context.volume = e;
        }
        play() {
            this.Context.play();
        }
        pause() {
            this.Context.pause();
        }
        stop() {
            this.Context.stop();
        }
        seek(e) {
            this.Context.seek(e);
        }
        get autoplay() {
            return this.Context.autoplay;
        }
        set autoplay(e) {
            this.Context.autoplay;
        }
        get loop() {
            return this.Context.loop;
        }
        set loop(e) {
            this.Context.loop;
        }
        onCanplay(e) {
            this.Context.onCanplay(e);
        }
        offCanplay(e) {
            this.Context.offCanplay(e);
        }
        onPlay(e) {
            this.Context.onPlay(e);
        }
        onPause(e) {
            this.Context.onPause(e);
        }
        destroy() {
            this.Context.destroy();
        }
        onStop(e) {
            this.Context.onStop(e);
        }
        offStop(e) {
            this.Context.offStop(e);
        }
        BuildTarget() {}
    }
    class f {
        static AddRef(e) {
            null != e && -1 != e.indexOf("https://") && (null == f.UrlRefs[e] && (f.UrlRefs[e] = 0),
                f.UrlRefs[e] = f.UrlRefs[e] + 1);
        }
        static RemoveRef(e) {
            null != e && -1 != e.indexOf("https://") && (null != f.UrlRefs[e] && (f.UrlRefs[e] = f.UrlRefs[e] - 1,
                f.UrlRefs[e] <= 0 && (f.UrlRefs[e] = 0, Laya.loader.clearRes(e), D.Log(`Unload ${e}`))));
        }
    }
    f.UrlRefs = {};
    class I {
        constructor(e, t) {
            this.mAdIndex = 0, this.mAdShowTime = 0, this.mViewUI = new a.core.NativeInsertAdUI(),
                Laya.stage.addChild(this.mViewUI), this.mViewUI.zOrder = 2e3, this.mViewUI.visible = !1,
                this.mBtnClick = e, this.mOnShow = t, this.mViewUI.btnBannerAdClick.on(Laya.Event.CLICK, this, this.OnBtnClick),
                this.mViewUI.btnBannerClose.on(Laya.Event.CLICK, this, this.Hide), this.mViewUI.imgBannerAd.on(Laya.Event.CLICK, this, this.OnBtnClick);
        }
        Show() {
            this.mViewUI.visible = !0, null != this.mOnShow && this.mOnShow(this.mAdList[this.mAdIndex].adId);
        }
        Hide() {
            this.mViewUI.visible = !1;
        }
        OnLoadAdData(e) {
            this.mAdList = e, this.mAdIndex = 0, this.mAdShowTime = Date.now(), this.UpdateDisplay();
        }
        Update() {}
        UpdateDisplay() {
            var e = this.mAdList[this.mAdIndex];
            this.mViewUI.btnBannerAdClick.label = e.clickBtnTxt, this.UpdateSkin(this.mViewUI.imgBannerAd, e.imgUrlList.length > 0 ? e.imgUrlList[0] : "ui/Board.png"),
                this.UpdateSkin(this.mViewUI.imgBannerAdFlags, e.logoUrl), this.mViewUI.textBannerTitle.text = e.title,
                this.mViewUI.textBannerDesc.text = e.desc, this.UpdateSkin(this.mViewUI.imgBannerIcon, e.iconUrlList.length > 0 ? e.iconUrlList[0] : "");
        }
        UpdateSkin(e, t) {
            t != e.skin && (f.RemoveRef(e.skin), e.skin = t, f.AddRef(e.skin));
        }
        OnBtnClick() {
            null != this.mBtnClick && this.mBtnClick(this.mAdList[this.mAdIndex].adId);
        }
    }
    class v {
        constructor(e, t) {
            this.mAdIndex = 0, this.mAdShowTime = 0, this.mViewUI = new a.core.NativeBannerAdUI(),
                Laya.stage.addChild(this.mViewUI), this.mViewUI.visible = !1, this.mViewUI.zOrder = 2e3,
                this.mBtnClick = e, this.mOnShow = t, this.mViewUI.btnBannerAdClick.on(Laya.Event.CLICK, this, this.OnBtnClick),
                this.mViewUI.btnBannerClose.on(Laya.Event.CLICK, this, this.Hide), this.mViewUI.imgBannerAd.on(Laya.Event.CLICK, this, this.OnBtnClick);
        }
        Show() {
            this.mViewUI.visible = !0, null != this.mOnShow && this.mOnShow(this.mAdList[this.mAdIndex].adId);
        }
        Hide() {
            S.mNativeAdReplaceBannerAd && S.mNativeAdReplaceBannerAd.destroy(), S.mNativeAdReplaceBannerAd = null,
                this.mViewUI.visible = !1, setTimeout(() => {
                    GetSDK().ShowBannerAd(null, null);
                }, d.Instance.BannerAdHideTime);
        }
        OnLoadAdData(e) {
            this.mAdList = e, this.mAdIndex = 0, this.mAdShowTime = Date.now(), this.UpdateDisplay();
        }
        Update() {}
        UpdateDisplay() {
            var e = this.mAdList[this.mAdIndex];
            this.mViewUI.btnBannerAdClick.label = e.clickBtnTxt, this.mViewUI.imgBannerAd.skin = "ui/Board.png",
                this.UpdateSkin(this.mViewUI.imgBannerAdFlags, e.logoUrl), this.mViewUI.textBannerTitle.text = e.title,
                this.mViewUI.textBannerDesc.text = e.desc, this.UpdateSkin(this.mViewUI.imgBannerIcon, e.iconUrlList.length > 0 ? e.iconUrlList[0] : "");
        }
        UpdateSkin(e, t) {
            t != e.skin && (f.RemoveRef(e.skin), e.skin = t, f.AddRef(e.skin));
        }
        OnBtnClick() {
            null != this.mBtnClick && this.mBtnClick(this.mAdList[this.mAdIndex].adId);
        }
    }
    class S extends c {
        constructor() {
            super(...arguments), this.mNativeAdReplaceBannerAdIdIndex = null, this.mNativeAdReplaceInsertAdIdIndex = null,
                this.mRewardedVideoAd = null;
        }
        NextNativeAdReplaceBannerAdId() {
            return null == this.mNativeAdReplaceBannerAdIdIndex ? this.mNativeAdReplaceBannerAdIdIndex = 0 : this.mNativeAdReplaceBannerAdIdIndex += 1,
                this.mNativeAdReplaceBannerAdIdIndex >= S.kBannerAdIDs.length ? null : S.kBannerAdIDs[this.mNativeAdReplaceBannerAdIdIndex];
        }
        NextNativeAdReplaceInsertAdId() {
            return null == this.mNativeAdReplaceInsertAdIdIndex ? this.mNativeAdReplaceInsertAdIdIndex = 0 : this.mNativeAdReplaceInsertAdIdIndex += 1,
                this.mNativeAdReplaceInsertAdIdIndex >= S.kNativeAdIDs.length ? null : S.kNativeAdIDs[this.mNativeAdReplaceInsertAdIdIndex];
        }
        GetType() {
            return e.OPPOSDK;
        }
        AutoMainSize() {
            return !1;
        }
        InitializeAdapter() {}
        Initialize() {
            var e = this;
            qg.initAdService({
                appId: S.kAppID,
                isDebug: !0,
                success(t) {
                    D.Log(`initAdService => success ${JSON.stringify(t)}`), e.InitializeAd();
                },
                fail(e) {
                    D.Error(`initAdService => fail ${JSON.stringify(e)}`);
                },
                complete(e) {
                    D.Log(`initAdService => complete ${JSON.stringify(e)}`);
                }
            }), this.mNativeAdReplaceBannerAdUI = new v(t => {
                S.mNativeAdReplaceBannerAd && S.mNativeAdReplaceBannerAd.reportAdClick({
                    adId: t
                }), e.ShowBannerAd("");
            }, e => {
                S.mNativeAdReplaceBannerAd && S.mNativeAdReplaceBannerAd.reportAdShow({
                    adId: e
                });
            }), this.mNativeAdReplaceInsertAdUI = new I(t => {
                e.mNativeAdReplaceInsertAd && e.mNativeAdReplaceInsertAd.reportAdClick({
                    adId: t
                });
            }, t => {
                e.mNativeAdReplaceInsertAd && e.mNativeAdReplaceInsertAd.reportAdShow({
                    adId: t
                });
            }), qg.setKeepScreenOn({
                keepScreenOn: !0
            });
        }
        InitializeAd() {
            this.mNativeAdReplaceBannerAdFailCount = 0, this.mInsertAdReady = !1, this.mInsertAdRequireShow = !1,
                this.mRewardedVideoAdName = "", this.mRewardedVideoAdReady = !1, this.mRewardedVideoAdRequireShow = !1,
                this.mRewardedVideoAdLoadCount = 0;
        }
        CreateBannerAd() {}
        CreateNativeAdReplaceBannerAd() {
            S.mNativeAdReplaceBannerAd && (S.mNativeAdReplaceBannerAd.destroy(), S.mNativeAdReplaceBannerAd = null);
            var e = this,
                t = this.NextNativeAdReplaceBannerAdId();
            D.Log(`NativeAdReplaceBannerAd ${t}(${this.mNativeAdReplaceBannerAdIdIndex})`),
                t ? (S.mNativeAdReplaceBannerAd = qg.createNativeAd({
                    posId: t
                }), S.mNativeAdReplaceBannerAd.onLoad(t => {
                    D.Log(`NativeAdReplaceBannerAd OnLoad => ${JSON.stringify(t)}`), e.mNativeAdReplaceBannerAdUI.OnLoadAdData(t.adList),
                        e.mNativeAdReplaceBannerAdUI.Show();
                }), S.mNativeAdReplaceBannerAd.onError(t => {
                    D.Error(`NativeAdReplaceBannerAd ${JSON.stringify(t)}`), e.mNativeAdReplaceBannerAdFailCount += 1,
                        e.mNativeAdReplaceBannerAdFailCount < S.kBannerAdIDs.length && e.CreateNativeAdReplaceBannerAd();
                }), S.mNativeAdReplaceBannerAd.load()) : this.mNativeAdReplaceBannerAdUI.mViewUI.visible || setTimeout(() => {
                    this.ShowBannerAd(null);
                }, d.Instance.BannerAdHideTime);
        }
        CreateRewardedVideoAd() {}
        DoVideoAdCompleted(e, t) {
            t ? ShowTips("当前没有可用得激励广告请稍后再试.") : e || (this.mRewardedVideoAdName ? ShowTips(`只有观看了完整的广告，才能${this.mRewardedVideoAdName}`) : ShowTips("只有观看了完整的广告，才能获得奖励")),
                this.mRewardedVideoAdCompleted(e);
        }
        CreateInsertAd() {}
        CreateNativeAdReplaceInsertAd() {}
        Update() {}
        Login() {
            qg.login({
                success: e => {
                    console.error("OPPO登录成功...", JSON.stringify(e));
                },
                fail: e => {
                    console.error("OPPO登录失败...", JSON.stringify(e));
                },
                complete() {}
            });
        }
        ShowBannerAd(e) {
            d.Instance.AllowBanner && (this.mNativeAdReplaceBannerAdFailCount = 0, this.mNativeAdReplaceBannerAdIdIndex = null,
                this.CreateNativeAdReplaceBannerAd());
        }
        HideBannerAd() {
            this.mNativeAdReplaceBannerAdUI && this.mNativeAdReplaceBannerAdUI.Hide();
        }
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            this.mRewardedVideoAdCompleted = t, this.mRewardedVideoAdName = i, this.mRewardedVideoAdLoadCount = 0,
                this.mRewardedVideoAd && this.mRewardedVideoAd.destroy(), this.mRewardedVideoAd = null,
                S.kRewardedVideoAdID && qg.createRewardedVideoAd ? (this.mRewardedVideoAd = qg.createRewardedVideoAd({
                    posId: S.kRewardedVideoAdID
                }), this.mRewardedVideoAd.onLoad(() => {
                    this.mRewardedVideoAd.show();
                }), this.mRewardedVideoAd.onClose(e => {
                    this.DoVideoAdCompleted(e.isEnded, !1);
                }), this.mRewardedVideoAd.onError(e => {
                    D.Error(`RewardedVideoAd => ${JSON.stringify(e)}`), this.DoVideoAdCompleted(!1, !0);
                }), this.mRewardedVideoAd.onVideoStart(() => {
                    D.Log("RewardedVideoAd => 开始播放视频你！");
                }), this.mRewardedVideoAd.load()) : this.DoVideoAdCompleted(!0, !1);
        }
        ShowInterstitialAd(e, t) {
            if (this.mInsertAd && (this.mInsertAd.destroy(), this.mInsertAd = null), !S.kInsertAdID) return;
            let i = Date.now();
            this.mInsertAd = qg.createInsertAd({
                posId: S.kInsertAdID
            }), this.mInsertAd.onLoad(() => {
                this.mInsertAdReady = !0, D.Log("InsertAd.load..."), (i = Date.now() - i) >= 800 ? this.mInsertAd.show() : setTimeout(() => {
                    this.mInsertAd.show();
                }, i);
            }), this.mInsertAd.onShow(() => {
                D.Log("InsertAd.show..."), this.mNativeAdReplaceInsertAdUI && this.mNativeAdReplaceInsertAdUI.Hide();
            }), this.mInsertAd.onError(e => {
                D.Error(`InsertAd ${JSON.stringify(e)}`), this.mInsertAdReady = !1;
            }), this.mInsertAd.load();
        }
        VibrateLong() {
            qg.vibrateLong({});
        }
        VibrateShort() {
            qg.vibrateShort({});
        }
        GetStorage(e) {
            return localStorage.getItem(e);
        }
        SetStorage(e, t) {
            localStorage.setItem(e, t);
        }
        DelStorage(e) {
            localStorage.removeItem(e);
        }
        DownloadFile(e, t, i, a) {
            qg.getFileSystemManager().access({
                path: this.GetUserFile(t),
                success: e => {
                    console.error("本地资源存在", this.GetUserFile(t)), a(null);
                },
                fail: n => {
                    console.error("本地资源不存在", this.GetUserFile(t)), qg.downloadFile({
                        url: e,
                        header: null,
                        filePath: this.GetUserFile(t),
                        success: e => {
                            a(null);
                        },
                        fail: e => {
                            a(e);
                        }
                    }).onProgressUpdate(e => {
                        i(e.progress);
                    });
                }
            });
        }
        GetUserFile(e) {
            return qg.env.USER_DATA_PATH + "/" + e;
        }
        CreateAudio(e, t) {
            var i = new w(qg.createInnerAudioContext());
            for (var a in console.log("Audio Context: "), i.Context) console.log(`    ${a}`);
            i.BuildTarget(), i.loop = !1, i.autoplay = !1, i.onCanplay(function Canplay(e) {
                console.error("onCanplay", e), t(i), i.offCanplay(Canplay);
            }), e.includes("https://") || e.includes("http://") ? i.src = e : i.src = qg.env.USER_DATA_PATH + "/" + e;
        }
        onShow(e) {}
        onHide(e) {}
        offShow(e) {}
        offHide(e) {}
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
    }
    S.kNativeAdIDs = ["124490", "124491"], S.kBannerAdIDs = ["130407"], S.kBannerAdID = null,
        S.kRewardedVideoAdID = "122229", S.kInsertAdID = "124252", S.kAppID = "30176103";
    class L extends Laya.Script {
        onAwake() {
            this.mImage = this.owner;
        }
        onUpdate() {
            if (this.mImage && this.mImage.source) {
                var e = this.mImage.source.width / this.mImage.source.height,
                    t = this.mImage.source.height / this.mImage.source.width,
                    i = this.mImage.parent,
                    a = i.displayWidth,
                    n = i.displayHeight,
                    o = n / a;
                e < a / n ? (this.mImage.width = a, this.mImage.height = this.mImage.width / this.mImage.source.width * this.mImage.source.height) : t < o && (this.mImage.height = n,
                    this.mImage.width = this.mImage.height / this.mImage.source.height * this.mImage.source.width);
            }
        }
    }
    class b {
        constructor() {}
        static init() {
            (0, Laya.ClassUtils.regClass)("Core/AutoImageSize.ts", L);
        }
    }
    b.width = 640, b.height = 1136, b.scaleMode = "fixedwidth", b.screenMode = "vertical",
        b.alignV = "middle", b.alignH = "center", b.startScene = "Main.scene", b.sceneRoot = "",
        b.debug = !1, b.stat = !1, b.physicsDebug = !1, b.exportSceneToJson = !0, b.init();
    class A extends c {
        constructor() {
            super(...arguments), this.rewardedVideoid = "f02cc99bc2e8142ac9fc8539a4d8feed",
                this.rewardedVideoAd = null, this.GridAdid = "676fdaba2994173dc3c4da084e4d2fda",
                this.GridAd = null, this.GridAdLoad = !1, this.bannerAdid = "5ef9f56fcb01b868bb9b309190c7fa54",
                this.bannerAdRewardBoxid = "7dd51db0d51f6cf89ee0cf22846d45e8", this.bannerAd = null,
                this.showBanner = null, this.Err = null, this.showBannertime = null, this.bannerheight = 90,
                this.fromName = null, this.IsRewardBox = null, this.ShowRewardedVideoAdtime = 0,
                this.showGridAdtime = 0, this.IsShowGridAd = !1, this.showGridAdfromName = null,
                this.BGM = null;
        }
        GetType() {
            return e.QQSDK;
        }
        InitializeAdapter() {}
        Initialize() {
            if (qq.showShareMenu({
                    showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
                }), qq.onShareAppMessage(() => ({
                    imageUrl: "icon.png"
                })), qq.getUpdateManager) {
                let e = qq.getUpdateManager();
                e.onCheckForUpdate(e => {}), e.onUpdateReady(() => {
                    e.applyUpdate();
                }), e.onUpdateFailed(() => {});
            }
            qq.showShareMenu({
                showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
            }), qq.onShareAppMessage(() => ({
                imageUrl: "Icon.png"
            })), qq.setKeepScreenOn({
                keepScreenOn: !0
            }), this.systemInfo = qq.getSystemInfoSync(), this.LoadGridAd();
        }
        Update() {}
        Login() {}
        ShowBannerAdRewardBox() {
            d.Instance.AllowBanner && qq.createBannerAd && this.bannerAdRewardBoxid && (this.IsRewardBox = Date.now() + 3e3,
                this.bannerAd && this.HideBannerAd(), console.error("显示Banner广告  幸运宝箱"), this.showBanner = !0,
                this.IsResize = !1, this.Err = !1, this.bannerAd = qq.createBannerAd({
                    adUnitId: this.bannerAdid,
                    style: {
                        top: 60,
                        left: 0,
                        width: Laya.Browser.clientWidth
                    }
                }), this.bannerAd.onResize(this.Resize.bind(this)), this.bannerAd.onLoad(this.onLoad.bind(this)),
                this.bannerAd.onError(this.err.bind(this)));
        }
        ShowBannerAd(e, t) {
            d.Instance.AllowBanner && qq.createBannerAd && this.bannerAdid && (this.bannerAd && this.HideBannerAd(),
                console.error("显示Banner广告"), this.showBanner = !0, this.IsResize = !1, this.Err = !1,
                this.IsRewardBox = null, this.bannerAd = qq.createBannerAd({
                    adUnitId: this.bannerAdid,
                    style: {
                        top: 60,
                        left: 0,
                        width: Laya.Browser.clientWidth
                    }
                }), this.bannerAd.onResize(this.Resize.bind(this)), this.bannerAd.onLoad(this.onLoad.bind(this)),
                this.bannerAd.onError(this.err.bind(this)), this.setTimeout = setTimeout(() => {
                    GetSDK().ShowBannerAd(null, null);
                }, 1e4));
        }
        onLoad(e) {
            if (this.bannerAd && this.showBanner)
                if (this.showBanner = !1, console.error("onLoad"),
                    this.IsRewardBox) {
                    let e = this.IsRewardBox - Date.now();
                    e < 0 ? (this.bannerAd.show(), setTimeout(() => {
                        this.HideBannerAd(), this.setTimeout = setTimeout(() => {
                            GetSDK().ShowBannerAd(null, null);
                        }, 1e4);
                    }, 2e3)) : setTimeout(() => {
                        this.bannerAd.show(), setTimeout(() => {
                            this.HideBannerAd(), this.setTimeout = setTimeout(() => {
                                GetSDK().ShowBannerAd(null, null);
                            }, 1e4);
                        }, 2e3);
                    }, e);
                } else this.bannerAd.show();
        }
        err(e) {
            this.Err || (this.Err = !0, console.log("广告错误", e));
        }
        Resize(e) {
            !this.IsResize && this.bannerAd && (this.IsResize = !0, console.error("onResize", e),
                this.bannerAd.style.top = this.systemInfo.windowHeight - e.height, this.bannerAd.style.left = .5 * (this.systemInfo.windowWidth - e.width),
                this.bannerheight = e.height * b.height / this.systemInfo.windowHeight, this.bannerAd.offResize(this.Resize.bind(this)));
        }
        HideBannerAd() {
            if (this.setTimeout && clearTimeout(this.setTimeout), this.setTimeout = null, this.bannerAd) {
                try {
                    this.bannerAd.offLoad(this.onLoad.bind(this)), this.bannerAd.offResize(this.Resize.bind(this)),
                        this.bannerAd.offError(this.err.bind(this)), this.bannerAd.hide(), this.bannerAd.destroy();
                } catch (e) {
                    console.error("del_BannerAd err", e);
                }
                delete this.bannerAd, this.bannerAd = null;
            }
        }
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            let a = Date.now();
            this.ShowRewardedVideoAdtime > a || (this.ShowRewardedVideoAdtime = a + 3e3, this.rewardedVideoid && qq.createRewardedVideoAd ? (delete this.video_over,
                this.video_over = null, this.video_over = t, this.rewardedVideoAd || (this.rewardedVideoAd = qq.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoid
                }), this.rewardedVideoAd.onError(e => {
                    console.error("广告错误", JSON.stringify(e)), this.VideoClose(!0, !1);
                })), this.rewardedVideoAd.load().then(() => {
                    this.rewardedVideoAd.show().then(() => {
                        console.error("播放成功"), this.audio_close_fun && (this.rewardedVideoAd.offClose(this.audio_close_fun),
                                delete this.audio_close_fun, this.audio_close_fun = null), this.audio_close_fun = this.AudioClose.bind(this),
                            this.rewardedVideoAd.onClose(this.audio_close_fun);
                    });
                })) : t(!0));
        }
        AudioClose(e) {
            this.playMusic(this.Musicurl);
            let t = !1;
            e && e.isEnded && (t = !0), this.VideoClose(!1, t);
        }
        VideoClose(e, t) {
            e ? (this.video_over && this.video_over(!1), ShowTips("暂无广告!")) : (this.video_over && this.video_over(t),
                t || ShowTips("视频未看完!")), delete this.video_over, this.video_over = null;
        }
        LoadGridAd() {
            this.GridAd && (this.GridAd.offClose(this.GridAdonClose.bind(this)), this.GridAd.destroy()),
                this.GridAd = null, this.GridAd = qq.createAppBox({
                    adUnitId: this.GridAdid
                }), this.GridAd.onClose(this.GridAdonClose.bind(this)), this.GridAd.load().then(() => {
                    console.log("格子load成功"), this.GridAdLoad = !0, this.IsShowGridAd && this.GridAd.show();
                }).catch(e => {
                    console.log("格子load失败", e), this.GridAdLoad = !1, this.IsShowGridAd && this.showGridAdfromName && ShowTips("请稍后再试");
                });
        }
        GridAdonClose() {
            console.log("关闭盒子广告"), this.IsShowGridAd = !1, this.GridAdLoad = !1, this.LoadGridAd();
        }
        showGridAd(e) {
            let t = Date.now();
            this.showGridAdfromName = e, this.showGridAdtime > t ? this.showGridAdfromName && ShowTips("请稍后再试") : (this.showGridAdtime = t + 3e3,
                this.GridAdLoad ? this.GridAd.show().catch(e => {
                    console.log("格子show失败", e), this.IsShowGridAd = !1, this.LoadGridAd();
                }) : (this.IsShowGridAd = !0, this.LoadGridAd()));
        }
        ShowInterstitialAd(e, t) {}
        IsSupportShare() {
            return !0;
        }
        ShareGame(e, t, i) {}
        playMusic(e) {
            e && (this.Musicurl = e, this.BGM || (this.BGM = qq.createInnerAudioContext(), this.BGM.src = e,
                this.BGM.loop = !0), this.BGM.play());
        }
        playSound(e) {
            let t = qq.createInnerAudioContext();
            t.src = e, t.play();
        }
        stopMusic(e) {
            this.Musicurl = e, this.BGM && this.BGM.stop(), this.BGM && this.BGM.destroy(),
                delete this.BGM, this.BGM = null;
        }
        VibrateLong() {
            qq.vibrateLong && qq.vibrateLong();
        }
        VibrateShort() {
            qq.vibrateShort && qq.vibrateShort();
        }
        GetStorage(e) {
            let t = null;
            try {
                t = qq.getStorageSync(e);
            } catch (i) {
                D.Error(`getStorageSync调用失败 - ${e} error:${i}`), t = null;
            }
            return "" == t && (t = null), t;
        }
        SetStorage(e, t) {
            qq.setStorageSync(e, t);
        }
        DelStorage(e) {
            qq.removeStorageSync(e);
        }
        loadSubpackage(e) {
            let t = 0,
                i = () => {
                    qq.loadSubpackage({
                        name: "Sounds",
                        success: i => {
                            ++t >= 2 && e();
                        },
                        fail: e => {
                            i();
                        }
                    });
                },
                a = () => {
                    qq.loadSubpackage({
                        name: "Main",
                        success: i => {
                            ++t >= 2 && e();
                        },
                        fail: e => a()
                    });
                };
            i(), a();
        }
    }
    class C extends h {
        constructor(e) {
            super(), this.Context = e;
        }
        get duration() {
            return this.Context.duration;
        }
        get currentTime() {
            return this.Context.currentTime;
        }
        get src() {
            return this.Context.src;
        }
        set src(e) {
            this.Context.src = e;
        }
        get volume() {
            return this.Context.volume;
        }
        set volume(e) {
            this.Context.volume = e;
        }
        play() {
            this.Context.play();
        }
        pause() {
            this.Context.pause();
        }
        stop() {
            this.Context.stop();
        }
        seek(e) {
            this.Context.seek(e);
        }
        get autoplay() {
            return this.Context.autoplay;
        }
        set autoplay(e) {
            this.Context.autoplay = e;
        }
        get loop() {
            return this.Context.loop;
        }
        set loop(e) {
            this.Context.loop = e;
        }
        onCanplay(e) {
            this.Context.onCanplay(e);
        }
        offCanplay(e) {
            this.Context.offCanplay(e);
        }
        onPlay(e) {
            this.Context.onPlay(e);
        }
        onPause(e) {
            this.Context.onPause(e);
        }
        destroy() {
            this.Context.destroy();
        }
        onStop(e) {
            this.Context.onStop(e);
        }
        offStop(e) {
            this.Context.offStop(e);
        }
        BuildTarget() {}
    }
    class k extends c {
        constructor() {
            super(...arguments), this.mRewardedVideoAdCountLow = !1, this.mRewardedVideoAdRewardedName = "",
                this.videoPath = null, this.GameRecorderManager = null, this.mIsRecord = !1, this.mRecordStartTime = 0,
                this.mRecordLength = 0;
        }
        GetType() {
            return e.ToutiaoSDK;
        }
        AutoMainSize() {
            return !0;
        }
        InitializeAdapter() {}
        Initialize() {
            if (tt.getUpdateManager) {
                let e = tt.getUpdateManager();
                e.onCheckForUpdate(e => {
                    console.log(e.hasUpdate);
                }), e.onUpdateReady(() => {
                    e.applyUpdate();
                }), e.onUpdateFailed(() => {});
            }
            tt.getGameRecorderManager && (this.GameRecorderManager = tt.getGameRecorderManager(),
                this.GameRecorderManager.onStart(e => {
                    console.error("录屏开始", e), this.mRecordStartTime = Date.now(), this.mRecordLength = 0,
                        this.mIsRecord = !0;
                }), this.GameRecorderManager.onResume(e => {
                    console.error("继续录屏", e), this.mRecordStartTime = Date.now(), this.mIsRecord = !0;
                }), this.GameRecorderManager.onPause(e => {
                    console.error("录屏暂停", e), this.IsRecord() && (this.mRecordLength += Date.now() - this.mRecordStartTime),
                        this.mIsRecord = !1;
                }), this.GameRecorderManager.onStop(e => {
                    console.error("录屏结束", e), this.IsRecord && (this.mRecordLength += Date.now() - this.mRecordStartTime),
                        this.mIsRecord = !1, this.videoPath = e.videoPath, this.stopFun && (this.stopFun(),
                            delete this.stopFun, this.stopFun = null);
                }), this.GameRecorderManager.onError(e => {
                    console.error("录屏错误", e), this.mIsRecord = !1, this.videoPath = null, this.mRecordStartTime = 0,
                        this.mRecordLength = 0;
                })), tt.setKeepScreenOn({
                keepScreenOn: !0
            }), this.Log("Toutiao.Initialize...");
        }
        Update() {}
        Login() {
            tt.login({
                force: !1,
                success: e => {
                    console.log("login成功获取到code--", e);
                },
                fail: e => {
                    console.log("login调用失败", e);
                }
            });
        }
        ShowBannerAd(e) {
            d.Instance.AllowBanner && k.ttBannerAdid && tt.createBannerAd && (this.bannerAd && this.HideBannerAd(),
                this.setTimeout = null, this.IsResize = !1, this.bannerAd = tt.createBannerAd({
                    adUnitId: k.ttBannerAdid,
                    style: {
                        top: Laya.Browser.clientHeight - 90,
                        left: Laya.Browser.clientWidth / 2 - 80,
                        width: 160
                    }
                }), this.bannerAd.onResize(this.Resize.bind(this)), this.bannerAd.onLoad(this.show.bind(this)),
                this.bannerAd.onError(this.err.bind(this)));
        }
        show(e) {
            this.bannerAd.show().then(e => {
                console.log("广告显示成功"), this.Close();
            }).catch(e => {
                console.log("广告显示失败", e), this.Close();
            });
        }
        err(e) {
            console.error("图片广告错误:", e), this.Close();
        }
        Close() {
            this.setTimeout || (this.setTimeout = setTimeout(() => {
                clearTimeout(this.setTimeout), this.ShowBannerAd(null);
            }, d.Instance.BannerAdHideTime), console.error("setTimeout", this.setTimeout));
        }
        Resize(e) {
            if (!this.IsResize) {
                console.error("onResize", e), this.IsResize = !0;
                const t = tt.getSystemInfoSync(),
                    i = t.windowWidth,
                    a = t.windowHeight;
                this.bannerAd.style.top = a - e.height, this.bannerAd.style.left = .5 * (i - e.width),
                    this.bannerAd.offResize(this.Resize.bind(this));
            }
        }
        HideBannerAd() {
            if (this.bannerAd) {
                try {
                    this.bannerAd.offLoad(this.show.bind(this)), this.bannerAd.offError(this.err.bind(this)),
                        this.bannerAd.onResize(this.Resize.bind(this)), this.bannerAd.hide(), this.bannerAd.destroy();
                } catch (e) {
                    console.error("delete_Banner---err"), console.error(e);
                }
                delete this.bannerAd, this.bannerAd = null;
            }
        }
        RewardedVideoAdIsReady() {
            return !this.mRewardedVideoAdCountLow;
        }
        ShowRewardedVideoAd(e, t, i) {
            k.ttVideoid && tt.createRewardedVideoAd ? (this.mRewardedVideoAdRewardedName = i,
                this.RewardedVideoAd || (this.RewardedVideoAd = tt.createRewardedVideoAd({
                    adUnitId: k.ttVideoid
                }), this.RewardedVideoAd.onError(e => {
                    console.log("广告错误:", e), ShowTips("当前没有可用得激励广告请稍后再试."), this.audio_over_fun && (this.audio_over_fun(!1),
                        delete this.audio_over_fun, this.audio_over_fun = null);
                })), this.audio_over_fun && (delete this.audio_over_fun, this.audio_over_fun = null),
                this.audio_over_fun = t, this.RewardedVideoAd.load().then(() => {
                    console.log("拉取广告成功"), this.RewardedVideoAd.show().then(() => {
                        console.log("播放成功"), null != this.over_fun && (this.RewardedVideoAd.offClose(this.over_fun),
                                delete this.over_fun, this.over_fun = null), this.over_fun = this.OnRewardedVideoAd.bind(this),
                            this.RewardedVideoAd.onClose(this.over_fun);
                    }).catch(e => {
                        console.log("播放广告失败", e);
                    });
                }).catch(e => {
                    console.log("拉取广告失败", e);
                })) : t(!0);
        }
        OnRewardedVideoAd(e) {
            var t = e && e.isEnded || null == e;
            t || (this.mRewardedVideoAdRewardedName ? ShowTips(`只有观看了完整的广告，才能${this.mRewardedVideoAdRewardedName}`) : ShowTips("只有观看了完整的广告，才能获得奖励")),
                null != this.audio_over_fun && (this.audio_over_fun(t), delete this.audio_over_fun,
                    this.audio_over_fun = null);
        }
        ShowInterstitialAd(e, t) {}
        IsSupportShare() {
            return !0;
        }
        ShareGame(e, t, i) {
            tt.shareAppMessage({
                success() {
                    D.Log("分享游戏成功"), t(!0);
                },
                fail(e) {
                    D.Log(`分享游戏失败 ${e}`), ShowTips(i ? `只有成功分享了游戏才能${i}` : "只有成功分享了游戏才能获得奖励"), t(!1);
                }
            });
        }
        Track(e, t) {
            tt.reportAnalytics(e, t);
        }
        VibrateLong() {
            tt.vibrateLong({});
        }
        VibrateShort() {
            tt.vibrateShort({});
        }
        GetStorage(e) {
            var t = null;
            try {
                t = tt.getStorageSync(e);
            } catch (t) {
                D.Error(`getStorageSync调用失败 - ${e} error:${t}`);
            }
            if ("" != t) return t;
        }
        SetStorage(e, t) {
            try {
                tt.setStorageSync(e, t);
            } catch (i) {
                D.Error(`setStorageSync调用失败 - key:${e} value:${t} error:${i}`);
            }
        }
        DelStorage(e) {
            try {
                tt.removeStorageSync(e);
            } catch (t) {
                D.Error(`removeStorageSync调用失败 - key:${e}  error:${t}`);
            }
        }
        IsSupportRecord() {
            return !!tt.getGameRecorderManager;
        }
        IsRecord() {
            return this.mIsRecord;
        }
        RecordLength() {
            var e = this.mRecordLength;
            return this.mIsRecord && (e += Date.now() - this.mRecordStartTime), e;
        }
        StartRecord() {
            this.GameRecorderManager && this.GameRecorderManager.start({
                duration: 300
            });
        }
        StopRecord() {
            this.GameRecorderManager && this.GameRecorderManager.stop();
        }
        PauseRecord() {
            this.GameRecorderManager && this.GameRecorderManager.pause();
        }
        ResumeRecord() {
            this.GameRecorderManager && this.GameRecorderManager.resume();
        }
        ShareRecord(e, t, i) {
            tt.shareAppMessage && tt.shareAppMessage({
                channel: "video",
                extra: {
                    videoPath: this.videoPath
                },
                success: () => {
                    t(!0), ShowTips("分享视频成功!");
                },
                fail: e => {
                    t(!1), D.Log(`分享视频失败 ${e}`), ShowTips(i ? `只有成功分享了录屏才能${i}` : "只有成功分享了录屏才能获得奖励");
                }
            });
        }
        DownloadFile(e, t, i, a) {
            tt.getFileSystemManager().access({
                path: tt.env.USER_DATA_PATH + "/" + t,
                success: e => {
                    console.error("本地资源存在", tt.env.USER_DATA_PATH + "/" + t), a(null);
                },
                fail: n => {
                    console.error("本地资源不存在", tt.env.USER_DATA_PATH + "/" + t), tt.downloadFile({
                        url: e,
                        header: null,
                        filePath: tt.env.USER_DATA_PATH + "/" + t,
                        success: e => {
                            a(null);
                        },
                        fail: e => {
                            a(e);
                        }
                    }).onProgressUpdate(e => {
                        i(e.progress);
                    });
                }
            });
        }
        GetUserFile(e) {
            return tt.env.USER_DATA_PATH + "/" + e;
        }
        CreateAudio(e, t) {
            var i = new C(tt.createInnerAudioContext());
            for (var a in console.log("Audio Context: "), i.Context) console.log(`    ${a}`);
            i.BuildTarget(), i.loop = !1, i.autoplay = !1, i.onCanplay(function Canplay(e) {
                console.error("onCanplay", e), t(i), i.offCanplay(Canplay);
            }), e.includes("https://") || e.includes("http://") ? i.src = e : i.src = tt.env.USER_DATA_PATH + "/" + e;
        }
        GetBannerAdHigh() {
            return 90;
        }
        Log(e) {
            console.log(e);
        }
        Error(e) {
            console.error(e);
        }
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
    }
    k.ttVideoid = "14218hb3ee271a3ae1", k.ttBannerAdid = "93kh9lp99ch4ujhrmc";
    class x extends h {
        constructor(e) {
            super(), this.Context = e;
        }
        get duration() {
            return this.Context.duration;
        }
        get currentTime() {
            return this.Context.currentTime;
        }
        get src() {
            return this.Context.src;
        }
        set src(e) {
            this.Context.src = e;
        }
        get volume() {
            return this.Context.volume;
        }
        set volume(e) {
            this.Context.volume = e;
        }
        play() {
            this.Context.play();
        }
        pause() {
            this.Context.pause();
        }
        stop() {
            this.Context.stop();
        }
        seek(e) {
            this.Context.seek(e);
        }
        get loop() {
            return this.Context.loop;
        }
        set loop(e) {
            this.Context.loop = e;
        }
        onCanplay(e) {
            this.Context.onCanplay && this.Context.onCanplay(e);
        }
        offCanplay(e) {
            this.Context.offCanplay && this.Context.offCanplay(e);
        }
        destroy() {
            this.Context.destroy && this.Context.destroy();
        }
        onStop(e) {
            this.Context.onStop && this.Context.onStop(e);
        }
        offStop(e) {
            this.Context.offStop && this.Context.offStop(e);
        }
        BuildTarget() {}
    }
    class _ {
        static AddRef(e) {
            null != e && -1 != e.indexOf("https://") && (null == _.UrlRefs[e] && (_.UrlRefs[e] = 0),
                _.UrlRefs[e] = _.UrlRefs[e] + 1);
        }
        static RemoveRef(e) {
            null != e && -1 != e.indexOf("https://") && (null != _.UrlRefs[e] && (_.UrlRefs[e] = _.UrlRefs[e] - 1,
                _.UrlRefs[e] <= 0 && (_.UrlRefs[e] = 0, Laya.loader.clearRes(e), D.Log(`Unload ${e}`))));
        }
    }
    _.UrlRefs = {};
    class R {
        constructor(e, t) {
            this.mAdShowTime = 0, this.mViewUI = new a.core.NativeInsertAdUI(), Laya.stage.addChild(this.mViewUI),
                this.mViewUI.zOrder = 2e3, this.mViewUI.visible = !1, this.mBtnClick = e, this.mOnShow = t,
                this.mViewUI.btnBannerAdClick.on(Laya.Event.CLICK, this, this.OnBtnClick), this.mViewUI.btnBannerClose.on(Laya.Event.CLICK, this, this.Hide),
                this.mViewUI.imgBannerAd.on(Laya.Event.CLICK, this, this.OnBtnClick);
        }
        Show() {
            this.mViewUI.visible = !0, this.mOnShow && this.mOnShow(this.mAdList[0].adId);
        }
        Hide() {
            this.mViewUI.visible = !1;
        }
        OnLoadAdData(e) {
            this.mAdList = e, this.mAdShowTime = Date.now(), this.UpdateDisplay();
        }
        Update() {}
        UpdateDisplay() {
            this.mViewUI.btnBannerAdClick.label = this.mAdList[0].clickBtnTxt ? this.mAdList[0].clickBtnTxt : "查看详情",
                this.UpdateSkin(this.mViewUI.imgBannerAd, this.mAdList[0].imgUrlList.length > 0 ? this.mAdList[0].imgUrlList[0] : "ui/Board.png"),
                this.UpdateSkin(this.mViewUI.imgBannerAdFlags, this.mAdList[0].logoUrl ? this.mAdList[0].logoUrl : ""),
                this.mViewUI.textBannerTitle.text = this.mAdList[0].title, this.mViewUI.textBannerDesc.text = this.mAdList[0].desc,
                this.UpdateSkin(this.mViewUI.imgBannerIcon, this.mAdList[0].icon ? this.mAdList[0].icon : "");
        }
        UpdateSkin(e, t) {
            t != e.skin && (_.RemoveRef(e.skin), e.skin = t, _.AddRef(e.skin));
        }
        OnBtnClick() {
            this.mBtnClick && this.mBtnClick(this.mAdList[0].adId);
        }
    }
    class T extends c {
        constructor() {
            super(...arguments), this.RewardedVideoAd = null, this.bannerAd = null, this.NativeAd = null;
        }
        GetType() {
            return e.VivoSDK;
        }
        InitializeAdapter() {}
        Initialize() {
            qg.onUpdateReady && qg.onUpdateReady(e => {
                console.log("onUpdateReady"), 1 == e && (qg.showToast && qg.showToast({
                    message: "发现新版本,即将重启更新!"
                }), qg.applyUpdate && qg.applyUpdate());
            }), this.SystemInfo = qg.getSystemInfoSync(), qg.setKeepScreenOn({
                keepScreenOn: !0
            }), this.mNativeAdInsertAdUI = new R(e => {
                T.mNativeAdInsertAd && T.mNativeAdInsertAd.reportAdClick({
                    adId: e
                });
            }, e => {
                T.mNativeAdInsertAd && T.mNativeAdInsertAd.reportAdShow({
                    adId: e
                });
            });
        }
        Update() {}
        Login() {}
        ShowBannerAd(e) {
            d.Instance.AllowBanner && T.bannerid && qg.createBannerAd && (this.setTimeout = null,
                this.bannerAd && this.HideBannerAd(), this.CreateAd());
        }
        CreateAd() {
            this.bannerAd = qg.createBannerAd({
                posId: T.bannerid,
                style: {}
            }), this.bannerAd.onClose(() => {
                console.error("玩家关闭广告"), this.Close();
            }), this.bannerAd.onError(e => {
                console.error("Banner广告错误", JSON.stringify(e)), this.Close();
            }), this.SystemInfo.platformVersionCode >= 1052 ? this.show() : this.bannerAd.onLoad(() => {
                console.error("广告加载完成"), this.show();
            });
        }
        show() {
            this.bannerAd.show().catch(e => {
                console.error("banner广告展示 失败", JSON.stringify(e)), this.Close();
            }).then(e => {
                console.error("banner广告展示 成功", JSON.stringify(e)), this.Close();
            });
        }
        Close() {
            this.setTimeout || (this.setTimeout = setTimeout(() => {
                this.ShowBannerAd(null);
            }, d.Instance.BannerAdHideTime), console.error("setTimeout", this.setTimeout));
        }
        HideBannerAd() {
            if (this.bannerAd) {
                try {
                    this.bannerAd.hide(), this.bannerAd.offClose(), this.bannerAd.offError(), this.SystemInfo.platformVersionCode < 1052 && this.bannerAd.offLoad(),
                        this.bannerAd.destroy();
                } catch (e) {
                    console.error("delete_Banner---err"), console.error(JSON.stringify(e));
                }
                delete this.bannerAd, this.bannerAd = null;
            }
        }
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            this.audio_over_fun && (delete this.audio_over_fun, this.audio_over_fun = null),
                this.audio_over_fun = t, T.RewardedVideoAdid && qg.createRewardedVideoAd ? this.RewardedVideoAd ? this.RewardedVideoAd.load().catch(e => {
                    console.error("拉取视频广告失败", JSON.stringify(e)), this.DoVideoAdCompleted(!1, !0);
                }) : (this.RewardedVideoAd = qg.createRewardedVideoAd({
                    posId: T.RewardedVideoAdid
                }), this.RewardedVideoAd.onLoad(e => {
                    console.error("拉取视频广告成功"), this.RewardedVideoAd.show().then(() => {
                        console.error("视频广告播放成功"), this.RewardedVideoAd.offClose(), this.RewardedVideoAd.onClose(e => {
                            this.DoVideoAdCompleted(e.isEnded, !1);
                        });
                    }).catch(e => {
                        console.error("视频广告播放失败", JSON.stringify(e)), this.DoVideoAdCompleted(!1, !0);
                    });
                }), this.RewardedVideoAd.onError(e => {
                    console.error("视频广告错误", JSON.stringify(e)), this.DoVideoAdCompleted(!1, !0);
                })) : this.DoVideoAdCompleted(!0, !1);
        }
        DoVideoAdCompleted(e, t, i = null) {
            t ? ShowTips("当前没有可用得激励广告请稍后再试.") : e || ShowTips(i ? `只有观看了完整的广告，才能${i}` : "只有观看了完整的广告，才能获得奖励"),
                this.audio_over_fun && (this.audio_over_fun(e), delete this.audio_over_fun, this.audio_over_fun = null);
        }
        ShowInterstitialAd(e, t) {
            this.SystemInfo.platformVersionCode >= 1053 ? (T.mNativeAdInsertAd && T.mNativeAdInsertAd.destroy && T.mNativeAdInsertAd.destroy(),
                delete T.mNativeAdInsertAd, T.mNativeAdInsertAd = null, T.mNativeAdInsertAd = qg.createNativeAd({
                    posId: T.NativeAdid
                }), this.Interstitialtime = Date.now(), T.mNativeAdInsertAd.onLoad(e => {
                    D.Log(`NativeAdReplaceBannerAd OnLoad => ${JSON.stringify(e)}`), this.mNativeAdInsertAdUI.OnLoadAdData(e.adList),
                        this.Interstitialtime = Date.now() - this.Interstitialtime, this.Interstitialtime >= 1e3 ? this.mNativeAdInsertAdUI.Show() : setTimeout(() => {
                            this.mNativeAdInsertAdUI.Show();
                        }, this.Interstitialtime);
                }), T.mNativeAdInsertAd.onError && T.mNativeAdInsertAd.onError(e => {
                    D.Error(`NativeAdReplaceBannerAd ${JSON.stringify(e)}`), this.Interstitial(!1);
                }), T.mNativeAdInsertAd.load()) : this.Interstitial();
        }
        Interstitial(e = !0) {
            qg.createInterstitialAd && T.InsertAdid && (this.InterstitialAd && (this.InterstitialAd.offLoad(this.showInterstitialAd.bind(this)),
                delete this.InterstitialAd, this.InterstitialAd = null), this.InterstitialAd = qg.createInterstitialAd({
                posId: T.InsertAdid
            }), e && (this.Interstitialtime = Date.now()), this.SystemInfo.platformVersionCode >= 1052 ? this.showInterstitialAd() : this.InterstitialAd.onLoad(this.showInterstitialAd.bind(this)));
        }
        showInterstitialAd() {
            this.InterstitialAd && (this.Interstitialtime = Date.now() - this.Interstitialtime,
                this.Interstitialtime >= 1e3 ? this.InterstitialAd.show() : setTimeout(() => {
                    this.InterstitialAd.show();
                }, this.Interstitialtime));
        }
        ShowNativeAd() {}
        VibrateLong() {
            qg.vibrateLong && qg.vibrateLong({});
        }
        VibrateShort() {
            qg.vibrateShort && qg.vibrateShort({});
        }
        GetStorage(e) {
            return qg.getStorageSync({
                key: e
            });
        }
        SetStorage(e, t) {
            qg.setStorageSync({
                key: e,
                value: t
            });
        }
        DelStorage(e) {
            qg.deleteStorageSync({
                key: e
            });
        }
        DownloadFile(e, t, i, a) {
            if ("true" == qg.accessFile({
                    uri: this.GetUserFile(t)
                })) console.error("本地资源存在", this.GetUserFile(t)), a(null);
            else {
                console.error("本地资源不存在", this.GetUserFile(t)), qg.download({
                    url: e,
                    success: e => {
                        qg.moveFile({
                            srcUri: e.tempFilePath,
                            dstUri: this.GetUserFile(t),
                            success: function(e) {
                                console.log(`move success: ${e}`), a(null);
                            },
                            fail: function(e) {
                                console.log(`handling fail, err = ${JSON.stringify(e)}`), a(e);
                            }
                        });
                    },
                    fail: e => {
                        a(e);
                    }
                }).onProgressUpdate(e => {
                    i(e.progress);
                });
            }
        }
        GetUserFile(e) {
            return qg.env.USER_DATA_PATH + "/" + e;
        }
        CreateAudio(e, t) {
            let i = qg.createInnerAudioContext();
            for (var a in i.src = qg.env.USER_DATA_PATH + "/" + e, i.loop = !1, console.log("Audio: "),
                    i) console.log(`    ${a}`);
            var n = new x(i);
            n.BuildTarget(), t(n);
        }
        playMusic(e) {}
        playSound(e) {}
        stopMusic(e) {}
    }
    T.RewardedVideoAdid = "b45a99c51f9646e39e5b760c2d336bd5", T.bannerid = "a7ab30cf1ddf41d395bc071202c74cf9",
        T.InsertAdid = "e1beb8e17da8499a8ab01ad80adacffc", T.NativeAdid = "880144038fc14758a8a2dd943cca1d60";
    class V {
        static Log(e) {}
        static log(e) {}
    }
    class M extends c {
        constructor() {
            super(...arguments), this.rewardedVideoid = "adunit-2503e1c5ea661c8a", this.rewardedVideoAd = null,
                this.bannerAd = null, this.bannerAdid = "adunit-fa97041ec2623424", this.InsertAdid = "adunit-bffdfa4ee818239c",
                this.InterstitialAd = null, this.Err = null, this.IsToMiniGameHTS = !1, this.BGM = null;
        }
        GetType() {
            return e.WxSDK;
        }
        InitializeAdapter() {}
        Initialize() {}
        Update() {}
        Login() {}
        ShowBannerAd(e, t) {}
        onLoad(e) {
            this.bannerAd.show();
        }
        err(e) {
            this.Err || (this.Err = !0, console.error("广告错误", e));
        }
        Resize(e) {}
        HideBannerAd() {}
        RewardedVideoAdIsReady() {
            return !0;
        }
        ShowRewardedVideoAd(e, t, i) {
            this.rewardedVideoid && wx.createRewardedVideoAd ? (delete this.audio_over_fun,
                this.audio_over_fun = null, this.audio_over_fun = t, this.rewardedVideoAd || (this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: this.rewardedVideoid
                }), this.rewardedVideoAd.onError(e => {
                    console.log("广告错误:", e), this.VideoClose(!0, !1);
                })), this.rewardedVideoAd.load().then(() => {
                    this.rewardedVideoAd.show().then(() => {
                        this.stopMusic(this.Musicurl), console.error("播放成功"), this.audio_close_fun && (this.rewardedVideoAd.offClose(this.audio_close_fun),
                                delete this.audio_close_fun, this.audio_close_fun = null), this.audio_close_fun = this.AudioClose.bind(this),
                            this.rewardedVideoAd.onClose(this.audio_close_fun);
                    });
                })) : t(!0);
        }
        AudioClose(e) {
            this.playMusic(this.Musicurl);
            let t = !1;
            e && e.isEnded && (t = !0), this.VideoClose(!1, t);
        }
        VideoClose(e, t) {
            e ? (this.audio_over_fun && this.audio_over_fun(!1), ShowTips("暂无广告!")) : (this.audio_over_fun && this.audio_over_fun(t),
                t || ShowTips("视频未看完!")), delete this.audio_over_fun, this.audio_over_fun = null;
        }
        ShowInterstitialAd(e, t) {
            wx.createInterstitialAd && this.InsertAdid && (this.InterstitialAd && (this.InterstitialAd.offLoad(this.showInterstitialAd.bind(this)),
                delete this.InterstitialAd, this.InterstitialAd = null), this.InterstitialAd = wx.createInterstitialAd({
                adUnitId: this.InsertAdid
            }), this.InterstitialAd.onError(e => {
                console.error("插屏错误", JSON.stringify(e));
            }), this.InterstitialAd.onLoad(this.showInterstitialAd.bind(this)));
        }
        showInterstitialAd() {
            this.InterstitialAd && this.InterstitialAd.show();
        }
        IsSupportShare() {
            return !0;
        }
        ShareGame(e, t, i) {}
        playMusic(e) {

            Laya.SoundManager.playMusic(e);
            // e && (this.Musicurl = e, this.BGM || (this.BGM = wx.createInnerAudioContext(), this.BGM.src = e, 
            // this.BGM.loop = !0), this.BGM.play());
        }
        playSound(e) {
            // let t = wx.createInnerAudioContext();
            // t.src = e, t.play();
            Laya.SoundManager.playSound(e);
        }
        stopMusic(e) {
            Laya.SoundManager.stopMusic();
            // this.Musicurl = e, this.BGM && this.BGM.stop(), this.BGM && this.BGM.destroy(), 
            // delete this.BGM, this.BGM = null;
        }
        Track(e, t) {
            D.Log(`Track ${e}[${JSON.stringify(t)}]`), wx.reportAnalytics(e, t);
        }
        VibrateLong() {}
        VibrateShort() {}
        GetStorage(e) {
            var t = null;
            try {
                t = platform.getInstance().getStorageSync(e);
            } catch (t) {
                console.error(`getStorageSync调用失败 - ${e} error:${t}`);
            }
            return t;
        }
        SetStorage(e, t) {
            try {
                platform.getInstance().setStorageSync(e, t);
                // wx.setStorageSync(e, t);
            } catch (i) {
                console.error(`setStorageSync调用失败 - key:${e} value:${t} error:${i}`);
            }
        }
        DelStorage(e) {
            platform.getInstance().setStorageSync(e, null);
            // wx.removeStorageSync(e);
        }
        IsSupportToMiniGameHTS() {
            return this.IsToMiniGameHTS;
        }
        loadSubpackage(e) {
            e();
        }
    }
    class D {
        static Log(e) {
            console.log(`[SDK] ${e}`);
        }
        static Error(e) {
            console.error(`[SDK] error: ${e}`);
        }
    }
    var U, P, B, G, F, E = null;

    function GetSDK() {
        return E || function() {
            if (E) return;
            switch (i.kPlatformSDK) {
                case e.ToutiaoSDK:
                    E = new k(), console.log("ToutiaoSDK...");
                    break;

                case e.BaiduSDK:
                    E = new p(), console.log("BaiduSDK....");
                    break;

                case e.OPPOSDK:
                    E = new S(), console.log("OPPOSDK...");
                    break;

                case e.MeizuSDK:
                    E = new y(), console.log("MeizuSDK...");
                    break;

                case e.VivoSDK:
                    E = new T(), console.log("VivoSDK...");
                    break;

                case e.QQSDK:
                    E = new A(), console.log("QQSDK...");
                    break;

                case e.WxSDK:
                    E = new M();
                    break;

                default:
                    E = new g(), console.log("DummySDK....");
            }
        }(), E;
    }
    class N {
        static Save() {
            N.CheckDailyRefresh();
            for (var e = {
                    FirstRunDate: N.FirstRunDate,
                    Version: i.kVersion,
                    DailyRefreshDate: N.DailyRefreshDate
                }, t = N.StroageSetting.length, a = 0; a < t; a++) {
                var n = N.StroageSetting[a];
                e[n.FeildName] = n.ClassType[n.FeildName];
            }
            GetSDK().SetStorage(N.kStorageName, JSON.stringify(e)), N.Dirty = !1;
        }
        static Load() {
            var e = GetSDK().GetStorage(N.kStorageName);
            if (e) {
                var a = JSON.parse(e);
                if (null == a) return console.log(`GameSave "${N.kStorageName}" JSON.parse error`),
                    void N.ApplyDefaultValue(!1);
                if (i.kProductType == t.Public && a.Version != i.kVersion) return GetSDK().DelStorage(N.kStorageName),
                    N.ApplyDefaultValue(!1), void console.log("Public 自己删除非该版本存档文件 ");
                for (var n = N.StroageSetting.length, o = 0; o < n; o++) {
                    var s = N.StroageSetting[o];
                    null != a[s.FeildName] ? s.ClassType["$" + s.FeildName] = a[s.FeildName] : null != s.DefaultValue && (s.ClassType["$" + s.FeildName] = s.DefaultValue);
                }
                N.FirstRunDate = a.FirstRunDate, N.DailyRefreshDate = a.DailyRefreshDate;
            } else N.ApplyDefaultValue(!1);
        }
        static ClearStorage() {
            GetSDK().DelStorage(N.kStorageName);
        }
        static LastUpdate() {
            N.ImmediateMode || N.Dirty && N.Save();
        }
        static DefineProperty(e) {
            Object.defineProperty(e.ClassType, e.FeildName, {
                set: function(t) {
                    N.PropertyChangedPrev();
                    var i = t;
                    if ("number" == typeof i && (e.Min || e.Max)) {
                        var a = Number.MIN_VALUE;
                        null != e.Min && (a = "number" == typeof e.Min ? e.Min : e.Min());
                        var n = Number.MAX_VALUE;
                        null != e.Max && (n = "number" == typeof e.Max ? e.Max : e.Max()), i = Clamp(i, a, n);
                    }
                    e.ClassType["$" + e.FeildName] = i, N.PropertyChanged();
                },
                get: function() {
                    return N.PropertyRecieve(), e.ClassType["$" + e.FeildName];
                }
            });
        }
        static PropertyChanged() {
            N.ImmediateMode ? N.Save() : N.Dirty = !0;
        }
        static PropertyChangedPrev() {
            N.IsInitialize || (N.Load(), N.IsInitialize = !0), N.CheckDailyRefresh();
        }
        static PropertyRecieve() {
            N.IsInitialize || (N.IsInitialize = !0, N.Load()), N.CheckDailyRefresh();
        }
        static ApplyDefaultValue(e) {
            for (var t = N.StroageSetting.length, i = 0; i < t; i++) {
                var a = N.StroageSetting[i];
                e && !a.DailyRefresh || null != a.DefaultValue && ("function" == typeof a.DefaultValue ? a.ClassType["$" + a.FeildName] = a.DefaultValue() : a.ClassType["$" + a.FeildName] = a.DefaultValue);
            }
            N.DailyRefreshDate = Date.now(), N.Dirty = !0;
        }
        static CheckDailyRefresh() {
            N.FirstRunDate || (N.FirstRunDate = Date.now(), N.DailyRefreshDate = Date.now()),
                (Date.now() - N.DailyRefreshDate) / 1e3 / 60 / 60 / 24 >= 1 && (N.ApplyDefaultValue(!0),
                    N.PropertyChanged());
        }
    }

    function GSave(e, t, i, a) {
        return function(e, t, i, a) {
            return function(n, o) {
                var s = {
                    ClassType: n,
                    FeildName: o,
                    DefaultValue: e,
                    DailyRefresh: t,
                    Min: i,
                    Max: a
                };
                N.StroageSetting.push(s), N.DefineProperty(s);
            };
        }(e, t, i, a);
    }
    N.ImmediateMode = !1, N.StroageSetting = [], N.IsInitialize = !1, N.kStorageName = "GameSave_" + i.kShootName,
        N.Dirty = !1;
    class O extends Laya.EventDispatcher {
        static get Instance() {
            return this.mInstance;
        }
        static CreateInstance() {
            return this.mInstance || (this.mInstance = new O()), this.mInstance;
        }
    }
    class H {
        static resetCanResultSuccessVideo() {
            this.canResultSuccessVideo = !0;
        }
        static resetIsFinishSuccessVideo() {
            this.isFinishSuccessVideo = !1;
        }
    }
    H.isFisrtEnterGame = !0, H.canStartGame = !1, H.scaleSmallPara = 1.2, H.scaleBigPara = 1.5,
        H.isonDataReceived = !1, H.isCanPopUpVideo = !1, H.canResultSuccessVideo = !0, H.isFinishSuccessVideo = !1;
    class z {
        constructor() {
            this.eventer = new Laya.EventDispatcher();
        }
        static GetInst() {
            return null == this._instance && (this._instance = new z()), this._instance;
        }
        addEventListener(e, t, i) {
            this.eventer.off(e, t, i), this.eventer.on(e, t, i);
        }
        removeEventListener(e, t, i) {
            this.eventer.off(e, t, i);
        }
        dispatchEvent(e, t) {
            this.eventer.event(e, t);
        }
        EventManager() {
            this.eventer = new laya.events.EventDispatcher();
        }
    }
    class X {
        static get Inst() {
            return null == this._instance && (this._instance = new X()), this._instance;
        }
        init(e, t) {
            this.width = e;
            var i = 640 * this.height / this.width;
            this.height = i;
        }
    }
    X._instance = null;
    class Y {
        constructor() {
            this.wx = null, this.adUnitId = "adunit-fa97041ec2623424", this.video_UnitId = "adunit-2503e1c5ea661c8a",
                this.interstitialAd_UnitID = "adunit-bffdfa4ee818239c", this.videoTodayEnd = !1,
                this.rewardedVideoAd = null, this.VideoAdOk = !1, this.ad_heidht = 220, this.ad_hi = 200,
                this.ad_width = 300, this.resetEnd = !1, this.ad_load_ok = !1, this.bannerAd = null,
                this.interstitialAd = null, this.isShow = !1;
        }
        static get Inst() {
            return null == this._instance && (this._instance = new Y()), this._instance;
        }
        init(e) {
            this.wx = e, this.ad_hi = Laya.Browser.clientHeight / X.Inst.height * this.ad_hi,
                this.ad_width = .05 * Laya.Browser.clientWidth, this.CreateAd(), this.CreateVideo(),
                this.create_interstitialAd();
        }
        CreateAd() {}
        ChangeAd() {}
        ShowBannerAd() {}
        HideAd() {}
        CreateVideo() {}
        ShowVideo(e) {}
        JumpGame(e, t, i, a, n, o) {
            console.log("推荐游戏进入 " + a + " " + n + "placement::" + t + "eventid:::" + i);
            var s = {
                label: e,
                pushappid: n,
                placement: t,
                eventid: i
            };
            Laya.Browser.window.dnsdk && Laya.Browser.window.dnsdk.tjSendClickEvent(s), console.log("发送统计" + JSON.stringify(s)),
                null != this.wx && this.wx.navigateToMiniProgram({
                    appId: n,
                    path: o,
                    success: function() {
                        console.log("小程序跳转成功" + a + " " + n);
                    },
                    fail: function() {
                        console.log("小程序跳转失败" + a + " " + n), z.GetInst().dispatchEvent("PopupGameshareDialogEvent", !1);
                    }
                });
        }
        create_interstitialAd() {
            Laya.Browser.window.wx && Laya.Browser.window.wx.createInterstitialAd && (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                adUnitId: this.interstitialAd_UnitID
            }), console.log("创建插屏广告"));
        }
        show_interstitialAd(e = null) {
            console.log("oooooooooooo"), this.interstitialAd && (console.log("显示插屏广告"), this.interstitialAd.show().catch(t => {
                console.log("显示插屏广告错误"), e && e("error"), console.error(t);
            }));
        }
    }
    Y._instance = null;
    class K {
        constructor(e, t) {
            this.mPreloadCompletedCount = 0, this.mPreloadCompletedTotal = 0, this.mPreload = [],
                this.mUpdateDelay = 1, this.LastPlaySound = 0,
                //  GetSDK().InitializeAdapter(),
                //   GetSDK().Login(),


                window.Laya3D ? Laya3D.init(b.width, b.height) : Laya.init(b.width, b.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = "showall",
                // Laya.stage.screenMode = b.screenMode, 
                Laya.stage.alignV = b.alignV,
                Laya.stage.alignH = b.alignH, Laya.stage.frameRate = Laya.Stage.FRAME_FAST, Laya.URL.exportSceneToJson = b.exportSceneToJson,
                (b.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                b.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), b.stat && Laya.Stat.show(),
                Laya.alertGlobalError = !0, Laya.Loader.maxTimeOut = 3e3, Y.Inst.init(Laya.Browser.window.wx),
                X.Inst.init(Laya.stage.width, Laya.stage.height), this.mUpdateDelay = t || 1, this.mPreload = e,
                this.OnVersionCompleted(), s.CreateInstance(), O.CreateInstance(), Laya.Browser.window.wx && this.ShowShareMenu();


            // var _classMap =  Laya.ClassUtils._classMap;
            // for (const key in _classMap) {
            //     const ui = _classMap[key];
            //     if(ui && ui.uiView){
            //         let nams = key.split(".");
            //         htmlfs.save(JSON.stringify(ui.uiView),nams.pop());
            //     }
            // }

        }
        ShowShareMenu() {
            V.log("ShowShareMenu"), Laya.Browser.window.wx && (V.log("onShareAppMessage"), Laya.Browser.window.wx.onShareAppMessage(() => ({
                title: "看看谁走的更远?",
                imageUrl: "res/QYQ.jpg"
            })));
        }
        OnVersionCompleted() {
            if (this.mPreload) {
                this.mPreloadCompletedTotal = this.mPreload.length, this.mPreloadCompletedCount = 0;
                for (var e = 0; e < this.mPreload.length; ++e) Laya.loader.create(this.mPreload[e], Laya.Handler.create(this, this.HandlePreloadCompleted));
            } else this.HandlePreloadCompleted();
        }
        OnPreloadCompleted() {}
        OnUpdate() {
            s.Instance.Update();
        }
        OnLowUpdate() {
            N.LastUpdate();
        }
        HandlePreloadCompleted() {
            this.mPreloadCompletedCount++, this.mPreloadCompletedCount >= this.mPreloadCompletedTotal && (this.OnPreloadCompleted(),
                Laya.timer.frameLoop(1, this, this.OnUpdate), Laya.timer.loop(1e3, this, this.OnLowUpdate));
        }
        static playSound(e) {
            if (e) {
                GetSDK().playSound("Sounds/" + e + ".mp3");
            }
        }
        PlayRandomSound(e, t) {
            var i = Math.floor(Math.random() * e.length - 1);
            K.playSound(e[i]), this.LastPlaySound = Laya.timer.currTimer;
        }
        static playBGM(e) {
            if (e) {
                GetSDK().playMusic("Sounds/" + e + ".mp3");
            }
        }
        static Log(e) {
            "object" == typeof e ? console.log(`[Game] ${JSON.stringify(e)}`) : console.log(`[Game] ${e}`);
        }
        static Error(e) {
            "object" == typeof e ? console.log(`[Game] ${JSON.stringify(e)}`) : console.log(`[Game] ${e}`);
        }
        static Debug(e) {
            i.kProductType != t.Shipping && ("object" == typeof e ? console.debug(`[Game] ${JSON.stringify(e)}`) : console.debug(`[Game] ${e}`));
        }
    }
    class q {
        constructor() {
            this.mViewUI = new a.core.LoadingUI(), this.mPreloading = [], this.mPreloadCompletedNum = 0,
                this.mStartTime = 0, this.mKeepTime = 0, this.mLastUpdateTime = 0, this.mAutoCompleted = !0;
        }
        IsShow() {
            return null != this.mViewUI.parent;
        }
        Start(e, t, i) {
            for (var a of (Laya.SoundManager.soundVolume = .001, e))
                if (-1 == this.mPreloading.indexOf(a)) {
                    var n = null;
                    a.includes(".mp3") ? n = Laya.Loader.SOUND : a.includes(".csv") ? n = Laya.Loader.TEXT : a.includes(".json") && (n = Laya.Loader.JSON),
                        Laya.loader.getRes(a) ? this.mPreloadCompletedNum++ : Laya.loader.create(a, Laya.Handler.create(this, this.OnLoadComplted, [a]), null, n),
                        this.mPreloading.push(a);
                }
            this.mKeepTime = 867,
                this.mComplted = t, this.mViewUI.textProgress.text = "0%", Laya.timer.loop(1, this, this.OnUpdate),
                this.mCompleted = !0, this.mAutoCompleted = !i, this.Show(q.kLoadingText);
        }
        DisplayProcess(e) {
            this.mKeepTime = e, Laya.timer.loop(100, this, this.OnUpdate), this.mCompleted = !0,
                this.Show(q.kLoadingText);
        }
        Show(e) {
            this.mViewUI.parent && this.mViewUI.removeSelf(), Laya.stage.addChild(this.mViewUI),
                this.mViewUI.visible = !0, this.mStartTime = Laya.timer.currTimer,
                this.mViewUI.textProgressText.text = e,
                this.mWaitText = e;
        }
        Hide() {
            Laya.timer.clear(this, this.OnUpdate)
            this.mKeepTime = 0;
            this.mViewUI.removeSelf();

        }
        OnUpdate() {
            if (this.mViewUI.visible && this.mKeepTime) {
                var e = Math.min(Date.now().valueOf() - this.mStartTime, this.mKeepTime) / this.mKeepTime;
                this.mViewUI.textProgressText.text = this.mWaitText + Math.floor(100 * e).toString() + "%";
            }
        }
        OnLoadComplted(e) {
            this.mPreloadCompletedNum++;
            // this.mViewUI.textProgressText.text = "LOADING " + Math.floor(this.mPreloadCompletedNum / this.mPreloading.length * 100) + "%", 
            this.mPreloadCompletedNum >= this.mPreloading.length && (this.DoLoadCompleted(),
                Laya.SoundManager.soundVolume = 1);
        }
        DoLoadCompleted() {
            this.mAutoCompleted && this.DoCompleted();
        }
        DoCompleted() {
            Laya.timer.clear(this, this.OnUpdate),
                this.mPreloadCompletedNum = 0;
            this.mPreloading = [];
            this.mComplted && this.mComplted.run(),
                this.mComplted = null;
        }
    }
    q.kLoadingText = "LOADING ", q.kDownloadText = "";
    class W {
        static GetLevelPartFromLevel(e) {
            return ["ScenePart1"];
        }
        static GetLevelPartLength(e) {
            return e <= 15 ? 2 * W.kLevelPartCountMax : (t = 1, i = 10, a ? a(Math.random() * (i - t) + t) : Math.random() * (i - t) + t);
            var t, i, a;
        }
        static GetFecesCNumFromLevel(e) {
            return e <= 15 ? 1 : 3;
        }
        static get LevelPartHighMin() {
            if (null == this.GLevelPartHighMin)
                for (var e of (this.GLevelPartHighMin = 0, this.LevelPartHighTable)) this.GLevelPartHighMin = Math.min(e, this.GLevelPartHighMin);
            return this.GLevelPartHighMin;
        }
        static GetShoesItem(e) {
            for (let t = 0; t < this.ShoesConfig.length; t++) {
                const i = this.ShoesConfig[t];
                if (e == i.Id) return i;
            }
            return null;
        }
    }
    W.kLevelPartCountMax = 45, W.kTryUseShoesSkinTime = 3e5, W.kInvincibleStateTime = 5e3,
        W.LevelPartHighTable = [0, 0, 0, 1, 1, 2, 2, 3, -1, -1, -2, -2, 1, 0, 0], W.LevelPartCount = (U = 25,
            P = W.kLevelPartCountMax, B ? function() {
                return B(Math.random() * (P - U) + U);
            } : function() {
                return Math.random() * (P - U) + U;
            }), W.ShoesConfig = [{
            Id: 0,
            Icon: "ui/mainUI_3.png",
            Name: "板鞋",
            Model: "Skin1"
        }, {
            Id: 1,
            Icon: "ui/aj.png",
            Name: "AJ",
            Model: "Skin2"
        }, {
            Id: 2,
            Icon: "ui/muji.png",
            Name: "不知道",
            Model: "Skin3"
        }, {
            Id: 3,
            Icon: "ui/jian.png",
            Name: "不知道",
            Model: "Skin4"
        }, {
            Id: 4,
            Icon: "ui/shirenyu.png",
            Name: "不知道",
            Model: "Skin5"
        }, {
            Id: 5,
            Icon: "ui/yuxue.png",
            Name: "不知道",
            Model: "Skin6"
        }, {
            Id: 6,
            Icon: "ui/zhandan.png",
            Name: "不知道",
            Model: "Skin7"
        }];
    class $ {}
    $.kLevelReady = "LevelReady", $.kBannerAdShowed = "BannerShowed", $.kGameStateChanged = "GameStateChanged",
        $.kEnergyChanged = "EnergyChanged", $.kEnergyFull = "EnergyFull", $.kEnergyEmpty = "EnergyEmpty",
        $.kDisableWaitState = "DisableWaitState", $.KPlayWatermelonEffect = "PlayWatermelonEffect",
        $.kShowResurgence = "ShowResurgence", $.kRestartLevel = "RestartLevel", $.onDataReceived = "onDataReceived",
        $.kOpenGameRewardBox = "OpenGameRewardBox", $.kOnOpenGameWin = "OnOpenGameWin",
        $.kRefreshLive = "RefreshLive";
    class j {
        static set PLive(e) {
            j.Live += e, N.Dirty = !0, j.Live >= 5 && (j.IfRecoverLive = !1, j.RecoverLiveStartTime = 0),
                O.Instance.event($.kRefreshLive);
        }
        static DecrementLive() {
            V.log("DecrementLive"), j.Live > 0 && (j.Live -= 1, N.Dirty = !0, O.Instance.event($.kRefreshLive));
        }
        static get LiveText() {
            return j.Live < 5 ? (j.IfRecoverLive || (j.IfRecoverLive = !0), j.RecoverLiveStartTime = Date.now()) : j.IfRecoverLive = !1,
                `${j.Live}`;
        }
        static LookVideoGetLive() {
            V.log("LookVideoGetLive11111111");
            let e = j.Live + 3;
            j.Live < 99 && (j.PLive = e > 99 ? 99 : 3, O.Instance.event($.kRefreshLive));
        }
        static UnlockShoes(e) {
            for (let t = 0; t < this.ShoesInfoList.length; t++) {
                if (this.ShoesInfoList[t].Id == e) {
                    this.ShoesInfoList[t].IsUnlock = !0;
                    break;
                }
            }
            N.Dirty = !0;
        }
        static GetSaveShoes(e) {
            for (let t = 0; t < this.ShoesInfoList.length; t++) {
                if (this.ShoesInfoList[t].Id == e) {
                    this.ShoesInfoList[t].IsHave = !0;
                    break;
                }
            }
            N.Dirty = !0;
        }
        static GetShoesInfo(e) {
            for (let t = 0; t < this.ShoesInfoList.length; t++) {
                const i = this.ShoesInfoList[t];
                if (i.Id == e) return i;
            }
            return null;
        }
        static RandomGetLockSkin() {
            let e = [];
            for (let t = 0; t < this.ShoesInfoList.length; t++) {
                const i = this.ShoesInfoList[t];
                i.IsUnlock || i.Id == this.TryUseShoesSkinId || e.push(i);
            }
            return this.ShoesInfoList.length > 0 ? RandomArray(e) : null;
        }
        static StartTryShoesSkin(e) {
            this.OverTryShoesSkin(), this.TryUseShoesSkinId = e, this.TryUseShoesSkinStartTime = Date.now();
        }
        static OverTryShoesSkin() {
            this.TryUseShoesSkinId = -1, this.TryUseShoesSkinStartTime = 0;
        }
    }
    j.IfLookVideo = !1, j.IfOpenInvincibleState = !1, j.TryUseShoesSkinId = -1, j.TryUseShoesSkinStartTime = 0,
        j.Energy = 0, __decorate([GSave(0)], j, "SaveVersion", void 0), __decorate([GSave(0)], j, "Gold", void 0),
        __decorate([GSave(1)], j, "CurrentLevel", void 0), __decorate([GSave(0)], j, "CurUseShoesId", void 0),
        __decorate([GSave(5)], j, "Live", void 0), __decorate([GSave(!1)], j, "IfRecoverLive", void 0),
        __decorate([GSave(0)], j, "RecoverLiveStartTime", void 0), __decorate([GSave(function() {
            let t = [];
            for (let i = 0; i < W.ShoesConfig.length; i++) {
                const a = W.ShoesConfig[i];
                let n = new J();
                n.Id = a.Id, 0 == a.Id ? (n.IsHave = !0, n.IsUnlock = !0) : GetSDK().GetType() == e.WxSDK ? (n.IsUnlock = !0,
                    n.IsHave = !1) : (n.IsUnlock = !1, n.IsHave = !1), t.push(n);
            }
            return t;
        })], j, "ShoesInfoList", void 0), __decorate([GSave(-1, !0)], j, "TryUseShoesSkinId", void 0),
        __decorate([GSave(0)], j, "TryUseShoesSkinStartTime", void 0);
    class J {}
    class Q {
        static get Zero() {
            return new Laya.Vector3(0, 0, 0);
        }
        static get One() {
            return new Laya.Vector3(1, 1, 1);
        }
        static get UnitX() {
            return new Laya.Vector3(1, 0, 0);
        }
        static get UnitY() {
            return new Laya.Vector3(0, 1, 0);
        }
        static get UnitZ() {
            return new Laya.Vector3(0, 0, 1);
        }
        static get Up() {
            return new Laya.Vector3(0, 1, 0);
        }
        static Add(e, t) {
            return new Laya.Vector3(e.x + t.x, e.y + t.y, e.z + t.z);
        }
        static Sub(e, t) {
            return new Laya.Vector3(e.x - t.x, e.y - t.y, e.z - t.z);
        }
        static MulValue(e, t) {
            return new Laya.Vector3(e.x * t, e.y * t, e.z * t);
        }
        static Mul(e, t) {
            return new Laya.Vector3(e.x * t.x, e.y * t.y, e.z * t.z);
        }
        static DivValue(e, t) {
            return new Laya.Vector3(e.x / t, e.y / t, e.z / t);
        }
        static Distance(e, t) {
            return Laya.Vector3.distance(e, t);
        }
        static DistanceValue(e, t, i, a, n, o) {
            var s = e - a,
                r = t - n,
                l = i - o;
            return Math.sqrt(s * s + r * r + l * l);
        }
        static ScalarLength(e) {
            return Laya.Vector3.scalarLength(e);
        }
        static ScalarLengthSqrt(e) {
            return Laya.Vector3.scalarLengthSquared(e);
        }
        static Reversal(e) {
            return new Laya.Vector3(-e.x, -e.y, -e.z);
        }
        static Cross(e, t) {
            var i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.cross(e, t, i), i;
        }
        static Dot(e, t) {
            return Laya.Vector3.dot(e, t);
        }
        static Normalize(e) {
            var t = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.normalize(e, t), t;
        }
        static GreaterThan(e, t) {
            return e.x > t.x && e.y > t.y && e.z > t.z;
        }
        static GreaterThanOrEqual(e, t) {
            return e.x >= t.x && e.y >= t.y && e.z >= t.z;
        }
        static LessThan(e, t) {
            return e.x < t.x && e.y < t.y && e.z < t.z;
        }
        static LessThanOrEqual(e, t) {
            return e.x <= t.x && e.y <= t.y && e.z <= t.z;
        }
        static Angle(e, t) {
            var i = Math.sqrt(Q.ScalarLength(e) * Q.ScalarLength(t));
            return i < 1e-15 ? 0 : 57.29578 * Math.acos(Clamp(Q.Dot(e, t) / i, -1, 1));
        }
    }

    function RGBA(e, t, i, a = 255) {
        return new Laya.Vector4(e / 255, t / 255, i / 255, a / 255);
    }
    Q.kZero = new Laya.Vector3(0, 0, 0), Q.kOne = new Laya.Vector3(1, 1, 1), Q.kUnitX = new Laya.Vector3(1, 0, 0),
        Q.kUnitY = new Laya.Vector3(0, 1, 0), Q.kUnitZ = new Laya.Vector3(0, 0, 1), Q.kForwardLH = new Laya.Vector3(0, 0, 1),
        Q.kForwardRH = new Laya.Vector3(0, 0, -1), Q.kUp = new Laya.Vector3(0, 1, 0);
    class Z {
        static FromAxisAngle(e, t) {
            var i = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.createFromAxisAngle(e, t * Math.PI / 180, i), i;
        }
        static Normalize(e) {
            var t = Laya.Quaternion.DEFAULT.clone();
            return e.normalize(t), t;
        }
        static Mul(e, t) {
            var i = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.multiply(e, t, i), i;
        }
        static MulVector3(e, t) {
            var i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.transformQuat(t, e, i), i;
        }
        static Lerp(e, t, i) {
            var a = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.lerp(e, t, i, a), a;
        }
        static Invert(e) {
            var t = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.invert(e, t), t;
        }
        static Scaling(e, t) {
            var i = Laya.Quaternion.DEFAULT.clone();
            return e.scaling(t, i), i;
        }
        static LookAt(e, t) {
            var i = new Laya.Matrix3x3();
            Laya.Matrix3x3.lookAt(e, t, new Laya.Vector3(0, 1, 0), i);
            var a = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.rotationMatrix(i, a), a;
        }
        static RotationLookAt(e, t) {
            var i = Laya.Quaternion.DEFAULT.clone();
            return Laya.Quaternion.lookAt(new Laya.Vector3(0, 0), e, t, i), i;
        }
    }! function(e) {
        e[e.Normal = 0] = "Normal", e[e.Spring = 1] = "Spring";
    }(G || (G = {}));
    class ee {
        constructor(e) {
            this.Distance = 68, this.AngleX = -60, this.AngleY = 180, this.TrackType = G.Spring,
                this.SpringConst = 20, this.Target = null, this.TargetOffset = null, this.ShakeTime = 0,
                this.ShakeStartTime = 0, this.ControlCamera = e;
        }
        StartShake() {
            this.ShakeTime = ee.kShakeTimeLength;
        }
        InitializeState() {
            if (this.ControlCamera) {
                var e = this.GetTrackTarget();
                this.ControlCamera.transform.position = e.Position, this.ControlCamera.transform.rotation = e.Rotation;
            }
        }
        OnUpdate() {
            if (this.Target && this.ControlCamera) {
                var e = this.GetTrackTarget();
                if (this.TrackType == G.Spring) {
                    var t = Q.Add(this.ControlCamera.transform.position, this.SpringCameraPosition(e.Position));
                    isNaN(t.x) || isNaN(t.y) || isNaN(t.z) ? this.ControlCamera.transform.position = e.Position : this.ControlCamera.transform.position = t,
                        this.ControlCamera.transform.rotation = Z.Lerp(this.ControlCamera.transform.rotation, e.Rotation, Math.min(1, Laya.timer.delta / 1e3 * this.SpringConst));
                } else this.TrackType == G.Normal && (this.ControlCamera.transform.position = e.Position,
                    this.ControlCamera.transform.rotation = e.Rotation);
                this.ShakeTime > 0 && (Laya.timer.currTimer > this.ShakeStartTime + ee.kShakePartLength && (this.ShakeOffset = Q.MulValue(Z.MulVector3(Z.FromAxisAngle(Q.Reversal(Q.kUnitZ), Math.floor(360 * Math.random())), Q.kUnitY), ee.kShakeDistance),
                        this.ShakeStartTime = Laya.timer.currTimer), this.ControlCamera.transform.position = Q.Add(this.ControlCamera.transform.position, Z.MulVector3(this.ControlCamera.transform.rotation, this.ShakeOffset)),
                    this.ShakeTime -= Laya.timer.delta);
            }
        }
        GetTrackTarget() {
            var e = Z.Mul(this.Target.transform.rotation, Z.Mul(Z.FromAxisAngle(Q.kUnitY, this.AngleY), Z.FromAxisAngle(Q.kUnitX, this.AngleX))),
                t = Z.MulVector3(e, Q.kForwardLH),
                i = Q.Add(Q.MulValue(t, this.Distance), this.Target.transform.position);
            return this.TargetOffset && (i = Q.Add(i, this.TargetOffset)), {
                Rotation: e,
                Position: i
            };
        }
        SpringCameraPosition(e) {
            if (isNaN(Laya.timer.delta)) return e;
            var t = this.SpringConst * (Laya.timer.delta / 1e3),
                i = Q.Sub(e, this.ControlCamera.transform.position),
                a = Q.ScalarLength(i);
            return a > 0 ? Q.MulValue(Q.DivValue(i, a), t * a) : Q.Zero;
        }
    }
    ee.kShakeTimeLength = 300, ee.kShakePartLength = 20, ee.kShakeDistance = .35;
    class te extends Laya.Script3D {
        onTriggerEnter(e) {
            this.OnTriggerEnterCallback && this.OnTriggerEnterCallback(this.owner, e.owner);
        }
        onTriggerStay(e) {
            this.OnTriggerStayCallback && this.OnTriggerStayCallback(this.owner, e.owner);
        }
        onTriggerExit(e) {
            this.OnTriggerExitCallback && this.OnTriggerExitCallback(this.owner, e.owner);
        }
    }

    function DeepAddTriggerEntery(e, t) {
        if (e) {
            var i = e.getComponent(Laya.PhysicsTriggerComponent);
            if (i) {
                i.isTrigger = !0;
                var a = e.getComponent(te);
                a || (a = e.addComponent(te)) && (a.OnTriggerEnterCallback = t);
            }
            for (var n = 0; n < e.numChildren; n++) DeepAddTriggerEntery(e.getChildAt(n), t);
        }
    }
    class ie {
        static ApplyShadowSetting(e, t, i) {
            if (e instanceof Laya.MeshSprite3D) {
                var a = e.meshRenderer;
                a.castShadow = t, a.receiveShadow = i;
            } else if (e instanceof Laya.SkinnedMeshSprite3D) {
                var n = e.skinnedMeshRenderer;
                n.castShadow = t, n.receiveShadow = i;
            }
            for (var o = 0; o < e.numChildren; o++) this.ApplyShadowSetting(e.getChildAt(o), t, i);
        }
        static ForceEnabledDirectionLightShadow(e) {
            if (!e) return null;
            var t = e.parent.addChild(new Laya.DirectionLight());
            return e.active = !1, t && (t.transform.localPosition = e.transform.localPosition,
                t.transform.localRotation = e.transform.localRotation, t.shadow = !0, t.shadowDistance = 20,
                t.shadowPCFType = 3, t.shadowResolution = 1024, t.shadowPSSMCount = 1), t;
        }
        static DeepReplaceMaterials(e, t) {
            e instanceof Laya.MeshSprite3D && (e.meshRenderer.sharedMaterial = t);
            for (var i = 0; i < e.numChildren; i++) this.DeepReplaceMaterials(e.getChildAt(i), t);
        }
        static SearchMaterials(e, t) {
            if (e instanceof Laya.MeshSprite3D) {
                var i = e.meshRenderer,
                    a = [];
                for (let e of i.sharedMaterials) a.push(e);
                t.push({
                    Mesh: e,
                    Material: a
                });
            }
            for (var n = 0; n < e.numChildren; n++) this.SearchMaterials(e.getChildAt(n), t);
        }
        static RestorageMaterials(e) {
            for (let t of e) t.Mesh && (t.Mesh.meshRenderer.sharedMaterials = t.Material);
        }
    }
    class ae {
        constructor() {
            this.mFrees = [];
        }
        get AllocNum() {
            return this.mAllocNum;
        }
        Prealloc(e) {
            for (var t = [], i = 0; i < e; i++) {
                var a = this.Alloc();
                if (null == a) break;
                t.push(a);
            }
            for (i = 0; i < t.length; i++) this.Free(t[i]);
        }
        Alloc() {
            return null;
        }
        Free(e) {
            e && (e.removeSelf(), this.mFrees.push(e), this.mAllocNum--);
        }
        Shrink(e = 8) {
            for (; this.mFrees.length > e;) {
                var t = this.mFrees.pop();
                t && t.destroy();
            }
        }
        DestroyAll() {
            for (var e = 0; e < this.mFrees.length; e++) {
                var t = this.mFrees[e];
                t && t.destroy(), this.mFrees[e] = null;
            }
            this.mFrees = [];
        }
    }
    class ne extends ae {
        constructor(e) {
            super(), this.Prefab = e;
        }
        Alloc() {
            if (this.mFrees.length > 0) return this.mAllocNum++, this.mFrees.pop();
            if (null == this.Prefab) return console.error("TSprite3DPool.Alloc Prefab is null!"),
                null;
            this.mAllocNum++;
            var e = Laya.Sprite3D.instantiate(this.Prefab);
            return e.name = this.Prefab.name, e;
        }
    }
    class oe {}
    oe.CameraDistance = 9, oe.CameraAngleY = -10, oe.CameraAngleX = -30, oe.CameraYOffset = 1.8,
        oe.FootGravity = -40, oe.EnergyMax = 10, oe.FootMoveMaxHigh = 3.9, oe.FootForwardMoveSpeed = new Laya.Vector3(5.5, 9, 0),
        oe.FecesDestroyTime = 500, oe.WatermelonDestroyTime = 500, oe.MaxFootDistance = 8,
        oe.FootFullEnergyAnimSpeed = 30, oe.FootFullEnergyFrameKeepTime = 100, oe.FootColorTable = [RGBA(0, 208, 255, 255), RGBA(255, 255, 76, 255), RGBA(0, 255, 107, 255)],
        oe.AttackRange = .7, oe.FullEnergyAttackRange = 1.2, oe.FootPryHigh = 4, oe.FootMaxDistance = 4,
        oe.FootDropMoveSpeed = .001;
    class se extends a.GetPhysicPowerUI {
        constructor(isshow) {
            super(),
                this.isshow = isshow;
            if (this.isshow) {
                this.ttt.visible = true;
            } else {
                this.ttt.visible = false;
            }
            this.btnGet.on(Laya.Event.CLICK, this, this.OnGetLive), this.lab_btnNot.on(Laya.Event.CLICK, this, this.close);
        }
        OnGetLive() {
            platform.getInstance().showReward(() => {
                j.LookVideoGetLive(), this.close();
            })
        }
        onClosed(e) {
            this.destroy();
        }
    }
    class re extends a.TryNewSkinUI {
        constructor(e) {
            super();
            let t = W.GetShoesItem(e);
            this.skinIcon.skin = t.Icon, this.btnTry.on(Laya.Event.CLICK, this, this.OnConfirm, [e]),
                this.lab_btnNot.on(Laya.Event.CLICK, this, () => {
                    GetSDK().showGridAd(null), this.CloseSelf();
                }), this.btnMoreGame.on(Laya.Event.CLICK, this, () => GetSDK().showGridAd("更多游戏"));
            setTimeout(() => {
                this.lab_btnNot.visible = !0;
            }, 3e3);
            Laya.Browser.window.wx && (this.btnMoreGame.visible = !1);
        }
        OnConfirm(e) {
            let t = this;
            GetSDK().ShowRewardedVideoAd("trySkin", i => {
                i && (j.StartTryShoesSkin(e), j.IfLookVideo = !0, Ve.Instance.Restart(), t.CloseSelf());
            });
        }
        CloseSelf() {
            this.close(), Ve.Instance.Level.GameUI.DoGameStart();
        }
        onClosed(e) {
            this.destroy();
        }
    }
    class le extends a.ShoesSkinUI {
        constructor() {
            super(), this.btnReturn.on(Laya.Event.CLICK, this, this.OnClose), this.shoesList.renderHandler = new Laya.Handler(this, this.OnUpdateShoes),
                this.shoesList.vScrollBarSkin = "", this.shoesList.elasticEnabled = !0, this.shoesList.scrollBar.elasticBackTime = 200,
                this.shoesList.scrollBar.elasticDistance = 50, this.shoesList.dataSource = W.ShoesConfig;
            platform.getInstance().canNavigate = false;
        }
        OnUpdateShoes(e, t) {
            e.getChildByName("bg");
            let i = e.getChildByName("icon"),
                a = e.getChildByName("select"),
                n = e.getChildByName("btnFreeGet"),
                s = e.getChildByName("change"),
                r = e.dataSource,
                l = j.GetShoesInfo(r.Id);
            i.skin = r.Icon, a.visible = j.CurUseShoesId == r.Id, n.visible = !l.IsHave,
                s.visible = l.IsHave && j.CurUseShoesId != r.Id, n.visible && (n.offAll(), n.on(Laya.Event.CLICK, this, this.OnFreeGetSkin, [r.Id])),
                s.visible && (e.offAll(), e.on(Laya.Event.CLICK, this, this.OnChangeSkin, [r.Id]));
        }
        OnFreeGetSkin(e) {
            platform.getInstance().showReward(() => {
                j.GetSaveShoes(e), this.OnChangeSkin(e)
            })
        }
        OnChangeSkin(e) {
            j.CurUseShoesId = e, j.TryUseShoesSkinId = -1, Ve.Instance.Restart(), this.shoesList.refresh();
        }
        OnClose() {
            platform.getInstance().canNavigate = true;
            this.destroy();
        }
    }
    class he {
        constructor(e, t = !0) {
            this.last_time = 0, this.interval = e, t && this.reset();
        }
        reset() {
            this.last_time = Laya.timer.currTimer;
        }
        check() {
            let e = Laya.timer.currTimer;
            return e - this.last_time > this.interval && (this.last_time = e, !0);
        }
        elapse() {
            let e = Laya.timer.currTimer - this.last_time;
            return (e = Math.min(e, this.interval)) / this.interval;
        }
    }
    class de {
        static GetInst() {
            return null == this._instance && (this._instance = new de()), this._instance;
        }
        delayOnDataReceivedCall(e, t, i) {
            H.isonDataReceived && (console.log("delayOnDataReceivedCall"), Laya.timer.once(e, t, i));
        }
    }
    class ce extends Laya.Sprite {
        constructor(e, t, i, a, n) {
            if (super(), this.index = 0, this.change_timer = null, this.placement = "", this.placement = e,
                this.name = "XJumpButton", this.change_timer = new he(t), this.back_sprite = new Laya.Image(),
                this.back_sprite.loadImage("ui/ui_jgg.png"), this.back_sprite.x = -2, this.back_sprite.y = -2,
                this.back_sprite.scale(1.05, 1.05), this.last_sprite = new Laya.Sprite(), this.cur_spirte = new Laya.Sprite(),
                this.addChild(this.back_sprite), this.addChild(this.last_sprite), this.addChild(this.cur_spirte),
                this.width = i, this.height = a, n) {
                let e = new Laya.Sprite();
                e.loadImage(n), e.pivot(e.width / 2, e.height / 2), e.x = this.width, e.y = -e.y / 2,
                    this.addChild(e);
            }
            H.isonDataReceived ? this.random() : new de().delayOnDataReceivedCall(5e3, this, this.random),
                this.on("click", this, this.onClick), Laya.timer.frameLoop(100, this, this.update);
        }
        onClick() {
            console.log("点击跳转" + this.index);
            let e = Laya.Browser.window.dnsdk.data.pushData.iconList[this.index];
            Y.Inst.JumpGame(e.id, this.placement, "icon", e.gameName, e.pushAppID, e.openPath);
        }
        random() {
            if (!Laya.Browser.window.dnsdk) return;
            let e = Laya.Browser.window.dnsdk.data.pushData.iconList,
                t = e.length;
            this.index = Math.round(Math.random() * t) % t;
            let i = e[this.index].icon,
                a = this;
            this.last_sprite.alpha = 1;
            var n = this.cur_spirte.loadImage(i, null);
            n.width = 100, n.height = 100, this.cur_spirte.alpha = 0, Laya.Tween.to(this.cur_spirte, {
                alpha: 1
            }, 1e3, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                a.cur_spirte.alpha = 0;
                var e = a.last_sprite.loadImage(i, null);
                e.width = 100, e.height = 100;
            }), 0, !0, !0);
        }
        update() {
            this.change_timer.check() && (H.isonDataReceived ? this.random() : new de().delayOnDataReceivedCall(5e3, this, this.random));
        }
    }
    class me {
        constructor() {
            this.listRepeatCount = 1e3, this.isMouseDown = !1, this.isMoveRight = !0;
        }
        init(e, t = null) {
            this.listRepeatCount = e, this.listArr = t, Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }
        onMouseDown() {
            this.isMouseDown = !0;
        }
        onMouseUp() {
            this.isMouseDown = !1;
        }
        checkListMove() {}
        getDataSource(e, t, i) {
            return [];
        }
    }
    class ue extends a.SingleShareDialogUI {
        constructor(e = null) {
            super(), this.callback = null, this.index = 0, this.count = 10, this.callback = e,
                this.img_icon.on("click", this, this.onClickHandler), this.btn_close.on("click", this, this.onClickClose);
        }
        onOpened() {
            let e = Laya.Browser.window.dnsdk.data.pushData.plaqueList,
                t = e.length;
            if (t) {
                this.index = Math.round(Math.random() * t) % t;
                let a = e[this.index],
                    n = a.icon,
                    o = a.gameName;
                if (this.img_icon.skin = n, this.txt_gameName.text = o, Laya.Browser.window.dnsdk) {
                    var i = {
                        label: a.id,
                        pushappid: a.pushAppID,
                        placement: "plaque",
                        eventid: "plaque"
                    };
                    Laya.Browser.window.dnsdk.tjSendShowEvent(i);
                }
            }
        }
        onClickHandler() {
            let e = Laya.Browser.window.dnsdk.data.pushData.plaqueList;
            if (e.length) {
                let t = e[this.index];
                Y.Inst.JumpGame(t.id, "home", "plaque", t.gameName, t.pushAppID, t.openPath);
            }
        }
        onClickClose() {
            this.callback && this.callback("close");
        }
    }
    class ge extends a.GameShareDialogUI {
        constructor(e = null) {
            super(), this.callback = null, this.scroll_timer = null, this.close_timer = null,
                this.listManager = new me(), this.listManager.init(1e3, [this.list_dev_box, this.list_dev_pick]),
                this.callback = e, this.btn_close.on("click", this, this.onClickClose), this.btn_continueGame.on("click", this, this.onClickClose),
                this.isShowCom(this.btn_continueGame, !1), this.list_dev_box.vScrollBarSkin = "",
                this.list_dev_box.renderHandler = new Laya.Handler(this, this.list_dev_box_itemRenderHandler),
                this.list_dev_box_fill_list(), this.list_dev_pick.hScrollBarSkin = "", this.list_dev_pick.scrollBar.elasticDistance = 10,
                this.list_dev_pick.scrollBar.elasticBackTime = 200, this.list_dev_pick.width = X.Inst.width,
                this.list_dev_pick.renderHandler = new Laya.Handler(this, this.list_dev_pick_itemRenderHandler),
                this.list_dev_pick_fill_list(), this.scroll_timer = new he(500, !1), this.close_timer = new he(8e3, !1),
                this.btn_close.visible = !1;
        }
        isShowCom(e, t) {
            e.visible = t;
        }
        showContinueGameDelay() {
            let e = this;
            Laya.timer.once(2e3, this, function() {
                e.isShowCom(this.btn_continueGame, !0);
            });
        }
        list_dev_box_fill_list() {
            if (!Laya.Browser.window.dnsdk) return;
            let e = this.listManager.getDataSource("hotgameList", "moregame", "hotgame");
            this.list_dev_box.dataSource = e;
        }
        list_dev_pick_fill_list() {
            if (!Laya.Browser.window.dnsdk) return;
            let e = this.listManager.getDataSource("bottomList", "moregame", "bottom");
            this.list_dev_pick.dataSource = e;
        }
        list_dev_pick_itemRenderHandler(e, t) {
            let i = e.dataSource;
            e.offAll(), e.on("click", this, this.list_dev_pick_itemClickHandler, [i]);
        }
        list_dev_box_itemRenderHandler(e, t) {
            let i = e.dataSource;
            e.offAll(), e.on("click", this, this.list_dev_box_itemClickHandler, [i]);
            let a = e.getChildByName("icon"),
                n = new Laya.Sprite();
            n.loadImage("ui/ui_tj_01.png"), a.mask = n;
        }
        list_dev_box_itemClickHandler(e) {
            Y.Inst.JumpGame(e.dnsdkid, "moregame", "hotgame", e.sharename, e.shareid, e.openPath);
        }
        list_dev_pick_itemClickHandler(e) {
            Y.Inst.JumpGame(e.dnsdkid, "FenFaYe", "bottom", e.sharename, e.shareid, e.openPath);
        }
        onOpened() {
            this.btn_close.x = this.width / 2 - X.Inst.width / 2 + 4, this.img_play.x = this.width / 2 - X.Inst.width / 2 + 4,
                this.img_recm.x = this.width / 2 - X.Inst.width / 2 + 4, this.list_dev_pick.x = -this.x,
                this.list_dev_pick.width = X.Inst.width - this.x;
            let e = Math.min(Laya.Browser.clientWidth, Laya.Browser.clientHeight),
                t = Math.max(Laya.Browser.clientWidth, Laya.Browser.clientHeight),
                i = e / t < .5 ? 1 * H.scaleBigPara : 1.2 * H.scaleSmallPara,
                a = e / t < .5 ? 1 : .82;
            this.box_dev_box.scale(i, i), this.box_dev_box.x = this.width / 2 - this.box_dev_box.width * i / 2,
                this.list_dev_box.height *= a, Y.Inst.HideAd(), Laya.timer.frameLoop(50, this, this.update);
        }
        onClosed() {
            Laya.timer.clear(this, this.update);
        }
        onClickClose() {
            console.log("onClickClose"), this.callback && this.callback("close");
        }
        update() {
            Y.Inst.HideAd(), this.close_timer.check() && (this.btn_close.visible = !0), this.scroll_timer.check() && this.listManager.checkListMove();
        }
    }
    class ye {
        static GetInst() {
            return null == this._instance && (this._instance = new ye()), this._instance;
        }
        setTime() {
            this.curTime = new Date().getTime(), Laya.LocalStorage.setItem("time", this.curTime);
        }
        getCurTime() {
            return this.curTime = new Date().getTime(), this.curTime;
        }
        deltaTime() {
            let e = parseInt(Laya.LocalStorage.getItem("time"));
            e || (e = 0), V.log("lastTime" + e);
            let t = new Date().getTime() - e;
            return V.log(t), t;
        }
    }
    ye.strengthNum = 0;
    class we {
        constructor(e) {
            this.wmList = [], this.homeListdirection1 = 1, this.pushView = null, this.splashSingleDialog = null,
                this.gameshare_dialog = null, this.InvincibleStateTime = 0, this.sumRecoverTime = 600,
                this.filterMat3 = [1, 0, 0, 0, 0, 0, .46, 0, 0, 0, 0, 0, .156, 0, 0, 0, 0, 0, 1, 0],
                this.changColorDistanceTime = 100, this.startChangeColorTime = 0, this.isCanChangeColor = !1,
                this.kgName = "", this.mid = "", this.name = "",
                this.mViewUI = new a.GameUI(),

                Laya.stage.addChild(this.mViewUI),

                this.mViewUI.btnSkin.on(Laya.Event.CLICK, this, this.OnOpenShoesSkin),
                this.mViewUI.btnStartGame.on(Laya.Event.CLICK, this, this.OnGameStart),
                this.mViewUI.btnRestart.on(Laya.Event.CLICK, this, () => {
                    this.OnGameRestart();
                }),
                this.mViewUI.boxLevelCompleted.width = Laya.stage.width, this.mViewUI.boxLevelCompleted.visible = !1,
                this.mViewUI.boxLevelCompleted.x = -this.mViewUI.boxLevelCompleted.width, this.mViewUI.boxWaitContinue.visible = !1,
                this.mViewUI.boxWaitStart.visible = !1, this.mViewUI.lab_RecoverTime.visible = !1,
                this.mViewUI.physicPower.on(Laya.Event.CLICK, this, this.OnGetLive, [false]),

                O.Instance.on($.kGameStateChanged, this, this.OnGameStateChanged),
                O.Instance.on($.kEnergyChanged, this, this.OnEnergyUpdate),
                O.Instance.on($.kEnergyFull, this, this.OnEnergyFull),
                O.Instance.on($.kDisableWaitState, this, this.OnDisableWaitState),
                O.Instance.on($.KPlayWatermelonEffect, this, this.WatermelonAni),
                O.Instance.on($.kRefreshLive, this, this.RefreshLive),
                this.mViewUI.lab_InvincibleTime.visible = !1,
                this.mViewUI.txtLevel.text = `LEVEL ${j.CurrentLevel}`;
            let t = ye.GetInst().deltaTime();
            if (ye.GetInst().setTime(), V.log("GameInfo.LiveText" + j.LiveText), t >= 6e5 && parseInt(j.LiveText) < 5) {
                let e = Math.floor(t / 6e5);
                V.log("addStrength" + e);
                let i = j.Live + e;
                V.log("temp" + i), j.Live = i >= 5 ? 5 : i;
            }
            this.mViewUI.lab_physicPower.text = j.LiveText;
            let i = new Laya.ColorFilter(this.filterMat3);
            this.mViewUI.imgProEnergy.filters = [i], this.OnEnergyUpdate(), this.mViewUI.progEnergy.width = 4;
            for (let e = 0; e < this.mViewUI.watermelons.numChildren; e++) {
                const t = this.mViewUI.watermelons.getChildByName(`item${e}`);
                t.visible = !1, this.wmList.push(t);
            }
            this.mColorFilter = [e.x, 0, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 0, 1, 0],
                UIConfig.closeDialogOnSide = !1, Ve.IsOpenShoesUI && (Ve.IsOpenShoesUI = !1,
                    this.OnOpenShoesSkin());
        }
        get View() {
            return this.mViewUI;
        }
        PopupGameshareDialogEvent(e) {
            this.PopupGameshareDialog(e);
        }
        PopupGameshareDialog(t) {}
        OnOpenShoesSkin() {
            let e = new le();
            Laya.stage.addChild(e);
        }
        OnGetLive(isShow) {
            new se(isShow).popup();
        }
        Destroy() {
            this.mViewUI && (this.mViewUI.removeSelf(), this.mViewUI.destroy(), this.mViewUI = null),
                O.Instance.off($.kGameStateChanged, this, this.OnGameStateChanged), O.Instance.off($.kEnergyChanged, this, this.OnEnergyUpdate),
                O.Instance.off($.kDisableWaitState, this, this.OnDisableWaitState), O.Instance.off($.KPlayWatermelonEffect, this, this.WatermelonAni),
                O.Instance.off($.kRefreshLive, this, this.RefreshLive);
        }
        ShowBattleEnd() {
            this.mViewUI;
        }
        OnUpdate() {
            this.mViewUI && (Ve.Instance.Level && (this.ShowDistanceProgress(), this.ProgressFicker()),
                this.OnRecoverLive(), this.mViewUI.txtLevel.text = `LEVEL ${j.CurrentLevel}`, Ve.Instance.Level.GameState == F.Playing && this.InvincibleStatedShow());
        }
        InvincibleStatedShow() {
            this.mViewUI.lab_InvincibleTime.visible = j.IfOpenInvincibleState, j.IfOpenInvincibleState && (this.InvincibleStateTime += Laya.timer.delta,
                this.InvincibleStateTime < W.kInvincibleStateTime ? this.mViewUI.lab_InvincibleTime.text = `God Mode ${Math.ceil((W.kInvincibleStateTime - this.InvincibleStateTime) / 1e3)} S` : j.IfOpenInvincibleState = !1);
        }
        RefreshLive() {
            this.mViewUI.lab_physicPower.text = j.LiveText;
        }
        OnRecoverLive() {
            if (j.IfRecoverLive) {
                this.mViewUI.lab_RecoverTime.visible || (this.mViewUI.lab_RecoverTime.visible = !0);
                var e = Date.now() - j.RecoverLiveStartTime,
                    t = Math.floor(e / (1e3 * this.sumRecoverTime));
                if (t > 0) {
                    if (t + j.Live >= 5) return j.PLive = 5 - j.Live, void(this.mViewUI.lab_RecoverTime.text = "00:00");
                    if (t + j.Live < 5) return j.PLive = t, void(this.mViewUI.lab_RecoverTime.text = "00:00");
                }
                var i = 1e3 * this.sumRecoverTime - e;
                if (i > 0) {
                    var a = new Date(i);
                    this.mViewUI.lab_RecoverTime.text = `${addZero(a.getMinutes())}:${addZero(a.getSeconds())}`;
                } else j.PLive = 1, this.mViewUI.lab_RecoverTime.text = "00:00";
            } else this.mViewUI.lab_RecoverTime.visible && (this.mViewUI.lab_RecoverTime.visible = !1);
        }
        WatermelonAni(e, t) {
            this.mViewUI.watermelons.pos(e, t);
            for (let e = 0; e < this.wmList.length; e++) {
                const t = this.wmList[e];
                this.MoveAni(t);
            }
        }
        MoveAni(e) {
            e.visible = !0;
            let t = this.mViewUI.energy,
                i = {
                    x: e.x,
                    y: e.y
                },
                a = t.x - this.mViewUI.watermelons.x + this.mViewUI.watermelons.width / 2,
                n = -(this.mViewUI.watermelons.y - t.y) + this.mViewUI.watermelons.height / 2,
                o = this.GetXY();
            e.x = 150, e.y = 150, Laya.Tween.to(e, {
                x: o.nX,
                y: o.nY
            }, 300, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    x: a,
                    y: n,
                    alpha: .3,
                    scaleX: .3,
                    scaleY: .3
                }, 300, null, Laya.Handler.create(this, () => {
                    e.visible = !1, e.scale(1, 1), e.alpha = 1, e.pos(i.x, i.y);
                }), 200);
            }));
        }
        GetXY() {
            return {
                nX: 300 * Math.random(),
                nY: 300 * Math.random()
            };
        }
        ShowDistanceProgress() {
            Ve.Instance.Level.CurrentDistance > 0 && Ve.Instance.Level.CurrentDistance < Ve.Instance.Level.LevelInfo.Distance ? (this.mViewUI.disProgress.visible = !0,
                this.mViewUI.disProgress.x = Ve.Instance.Level.CurrentDistance / Ve.Instance.Level.LevelInfo.Distance * this.mViewUI.distanceProgressBox.width) : this.mViewUI.disProgress.visible = !1;
            var e = Ve.Instance.Level.LevelInfo;
            this.mViewUI.energyTips.visible = e.Energy / oe.EnergyMax >= .8 && !e.FullEnergy;
        }
        OnGameRestart() {
            Ve.Instance.Level.LevelInfo.Successed ? Ve.Instance.NextLevel() : Ve.Instance.Restart();
        }
        onClickSplashSingleDialog() {
            Laya.Browser.window.dnsdk.data.pushData.plaqueList.length && this.PopupSplashSingleDialog();
        }
        PopupSplashSingleDialog() {
            if (null == this.splashSingleDialog) {
                let e = this;
                this.splashSingleDialog = new ue(function() {
                    this.close(!1), e.splashSingleDialog = null;
                }), this.splashSingleDialog.popup(!0, !1);
            }
        }
        resetPushView() {
            null != this.pushView && (this.pushView.onClosed(), Laya.stage.removeChild(this.pushView));
        }
        DoGameStart() {
            Ve.Instance.Level.DoGameStart(), this.mViewUI.visible = !0, this.mViewUI.boxMain.visible = !1,
                this.OnEnergyUpdate();
        }
        OnGameStart() {
            platform.getInstance().showInterstitial(() => {
                platform.getInstance().canNavigate = false;
                if (j.Live > 0 && this.resetPushView(), j.Live <= 0) this.OnGetLive(true);
                else if (j.IfLookVideo ? j.IfLookVideo = !1 : j.DecrementLive(),
                    j.CurrentLevel % 3 != 0 || Ve.Instance.Level.LevelInfo.Successed || -1 != j.TryUseShoesSkinId) this.DoGameStart();
                else {
                    let e = j.RandomGetLockSkin();
                    if (e) {
                        this.mViewUI.visible = !1, new re(e.Id).popup();
                    } else this.DoGameStart();
                }
            })

        }
        OnGameStateChanged(e) {
            switch (this.mViewUI.txtLevel.text = `LEVEL ${j.CurrentLevel}`, e) {
                case F.WaitStart:
                    this.isCanChangeColor = !1, this.mViewUI.boxWaitStart.visible = !1, this.mViewUI.btnRestart.visible = !1,
                        this.mViewUI.txtLevel.visible = !0, this.mViewUI.distanceProgress.visible = !1,
                        this.mViewUI.energy.visible = !1, this.mViewUI.boxWaitStart.visible = !1, this.mViewUI.imgLogo.visible = !0,
                        this.mViewUI.boxMain.visible = !0;
                    platform.getInstance().canNavigate = true;
                    break;

                case F.Playing:
                    this.isCanChangeColor = !0, this.mViewUI.boxWaitStart.visible = !0, this.mViewUI.btnRestart.visible = !0,
                        this.mViewUI.txtLevel.visible = !0, this.mViewUI.distanceProgress.visible = !0,
                        this.mViewUI.energy.visible = !0, this.mViewUI.boxWaitStart.visible = !1, this.mViewUI.imgLogo.visible = !1,
                        this.mViewUI.boxMain.visible = !1;
                    break;

                case F.End:
                    this.mViewUI.energyTips.visible = false;
                    this.isCanChangeColor = !1, this.mViewUI.txtLevel.visible = !0, this.mViewUI.waitContinueAni.play(0, !1),
                        this.mViewUI.boxLevelCompleted.visible = Ve.Instance.Level.LevelInfo.Successed,
                        this.mViewUI.btnRestart.visible = !1, this.mViewUI.imgLogo.visible = !1, this.mViewUI.boxMain.visible = !1,
                        Ve.Instance.Level.LevelInfo.Successed || (this.mViewUI.boxMain.visible = !0, setTimeout(() => {
                            //Ve.Instance.Level.GameUI.DoGameStart();
                            console.log("gameEnd");
                        }, 10));
            }
        }
        PlayLevelComAni() {
            let e = Laya.Tween.to(this.mViewUI.boxLevelCompleted, {
                x: 0
            }, 300, null, Laya.Handler.create(this, () => {
                Laya.Tween.clear(e);
            }));
        }
        OnEnergyUpdate() {
            let e = Ve.Instance.Level.LevelInfo.Energy / oe.EnergyMax,
                t = e > 1 ? e % 1 : e;
            this.mViewUI.progEnergy.width = Math.max(1, this.mViewUI.imgProEnergy.width * t);
        }
        ProgressFicker() {
            if (this.isCanChangeColor && Date.now() - this.startChangeColorTime > this.changColorDistanceTime) {
                Ve.Instance.Level.LevelInfo.FullEnergy;
                if (Ve.Instance.Level.LevelInfo.FullEnergy) {
                    let e = [Math.random(), 0, 0, 0, 0, 0, Math.random(), 0, 0, 0, 0, 0, Math.random(), 0, 0, 0, 0, 0, Math.random(), 0],
                        t = new Laya.ColorFilter(e);
                    this.mViewUI.imgProEnergy.filters = [t];
                } else this.mViewUI.imgProEnergy.filters && (this.mViewUI.imgProEnergy.filters = [new Laya.ColorFilter(this.mColorFilter)]);
                this.startChangeColorTime = Date.now();
            }
        }
        OnEnergyFull() {}
        OnDisableWaitState() {
            this.mViewUI.boxWaitStart.visible = !1;
        }
    }

    function addZero(e) {
        return parseInt(e) < 10 && (e = "0" + e), e;
    }
    class fe {
        constructor(e) {
            this.callback = null, this.scroll_timer = null, this.list_dev_box = e, this.listManager = new me(),
                this.listManager.init(1e3, [this.list_dev_box]), this.list_dev_box.vScrollBarSkin = "",
                this.list_dev_box.renderHandler = new Laya.Handler(this, this.list_dev_box_itemRenderHandler),
                this.list_dev_box_fill_list(), Laya.timer.frameLoop(50, this, this.update), this.scroll_timer = new he(500, !1);
        }
        list_dev_box_fill_list() {
            if (!Laya.Browser.window.dnsdk) return;
            let e = this.listManager.getDataSource("grouppageList", "splash", "grouppage");
            this.list_dev_box.dataSource = e;
        }
        list_dev_box_itemRenderHandler(e, t) {
            let i = e.dataSource;
            e.offAll(), e.on("click", this, this.list_dev_box_itemClickHandler, [i]);
        }
        list_dev_box_itemClickHandler(e) {
            Y.Inst.JumpGame(e.dnsdkid, "splash", "splash", e.sharename, e.shareid, e.openPath);
        }
        clickVideoHandler() {
            this.callback && this.callback("video"), this.callback = null;
        }
        clickNormalHandler() {
            this.callback && this.callback("normal"), this.callback = null;
        }
        onOpened() {
            Laya.timer.frameLoop(50, this, this.update);
        }
        onClosed() {
            Laya.timer.clear(this, this.update);
        }
        update() {
            this.scroll_timer.check() && this.listManager.checkListMove();
        }
    }
    class Ie extends a.ResurgenceUI {
        constructor() {
            super(),
                this.zOrder = 1001;
            this.btn_resurgence.on(Laya.Event.CLICK, this, this.on_resurgence);
            this.lab_notRecover.on(Laya.Event.CLICK, this, this.on_settle);

        }
        on_resurgence() {
            var e = this;
            platform.getInstance().showReward(() => {
                e.on_close();
                e.Callback && (e.Callback(!0), j.IfOpenInvincibleState = !0);
            });

        }
        on_settle() {
            this.Callback && this.Callback(!1), this.on_close();
        }
        DoShow() {
            this.visible = !0;
            platform.getInstance().initList(this.homeList)
        }


        onDisable() {}
        on_close() {
            this.notRecover.stop(), this.visible = !1;
        }
    }
    class ve extends a.SplashUI {
        constructor(e = null) {
            super(), this.callback = null, this.scroll_timer = null, V.log("SplashDialog"),
                this.listManager = new me(), this.listManager.init(1e3, [this.list_dev_box]),
                this.callback = e, this.btn_close.on(Laya.Event.CLICK, this, this.clickNormalHandler),
                this.list_dev_box.vScrollBarSkin = "", this.list_dev_box.renderHandler = new Laya.Handler(this, this.list_dev_box_itemRenderHandler),
                this.list_dev_box_fill_list(), this.scroll_timer = new he(500, !1), console.log(!0);
        }
        list_dev_box_fill_list() {
            if (!Laya.Browser.window.dnsdk) return;
            let e = this.listManager.getDataSource("grouppageList", "splash", "grouppage");
            this.list_dev_box.dataSource = e;
        }
        list_dev_box_itemRenderHandler(e, t) {
            let i = e.dataSource;
            e.offAll(), e.on("click", this, this.list_dev_box_itemClickHandler, [i]);
        }
        list_dev_box_itemClickHandler(e) {
            Y.Inst.JumpGame(e.dnsdkid, "splash", "splash", e.sharename, e.shareid, e.openPath);
        }
        clickVideoHandler() {
            this.callback && this.callback("video"), this.callback = null;
        }
        clickNormalHandler() {
            this.callback && this.callback("normal"), this.callback = null;
        }
        onOpened() {
            Laya.timer.frameLoop(50, this, this.update);
        }
        onClosed() {
            Laya.timer.clear(this, this.update);
        }
        update() {
            this.scroll_timer.check() && this.listManager.checkListMove();
        }
    }
    class Se extends Laya.Script3D {
        onUpdate() {
            this.Script && this.Script.OnUpdate();
        }
    }

    function ApplyColliderGroup(e, t) {
        if (e) {
            var i = e.getComponent(Laya.PhysicsComponent);
            i && (i.collisionGroup = t);
            for (var a = 0; a < e.numChildren; a++) ApplyColliderGroup(e.getChildAt(a), t);
        }
    }! function(e) {
        e[e.WaitStart = 0] = "WaitStart", e[e.Playing = 1] = "Playing", e[e.Pause = 2] = "Pause",
            e[e.End = 3] = "End";
    }(F || (F = {}));
    class Le {
        constructor() {
            this.LevelCompletd = !1, this.Successed = !1, this.Distance = 0, this.FullEnergy = !1,
                this.FullEnergyTime = 0;
        }
        get Energy() {
            return j.Energy;
        }
        set Energy(e) {
            j.Energy = e;
        }
        GetFullEnergyStateKeepSecondsTimeReal() {
            return this.FullEnergy ? 0 : W.kInvincibleStateTime - (Laya.timer.currTimer - this.FullEnergyTime);
        }
        HitWatermelon() {
            return this.FullEnergy || (this.Energy += 1, O.Instance.event($.kEnergyChanged),
                    GetSDK().VibrateShort(), !this.FullEnergy && this.Energy >= oe.EnergyMax && this.DoFullEnergy()),
                K.playSound("hit_watermelon"), this.Energy >= oe.EnergyMax;
        }
        DoFullEnergy() {
            this.FullEnergy = !0, this.FullEnergyTime = Laya.timer.currTimer, O.Instance.event($.kEnergyFull);
        }
        HitFeces() {
            K.playSound("hit_feces"), GetSDK().VibrateShort();
        }
        DoSuccessed() {
            this.LevelCompletd = !0, this.Successed = !0;
        }
        DoFail() {
            this.LevelCompletd = !0, this.Successed = !1;
        }
        Update() {
            this.FullEnergy && (this.Energy = oe.EnergyMax * (1 - (Laya.timer.currTimer - this.FullEnergyTime) / W.kInvincibleStateTime),
                O.Instance.event($.kEnergyChanged), Laya.timer.currTimer - this.FullEnergyTime >= W.kInvincibleStateTime && (this.FullEnergy = !1,
                    O.Instance.event($.kEnergyEmpty)));
        }
    }
    class be {
        constructor(e) {
            this.mFootPrefab = e, this.mFootInstance = Laya.Sprite3D.instantiate(this.mFootPrefab),
                this.mFootInstance.active = !0, this.mFootInstance.name = "Foot", this.mFootAnimator = this.mFootInstance.getComponent(Laya.Animator),
                this.mRigidbody = this.mFootInstance.getComponent(Laya.Rigidbody3D), this.mController = this.mFootInstance.addComponent(Laya.CharacterController),
                this.mController.colliderShape = this.mRigidbody.colliderShape.clone(), this.mGravity = this.mController.gravity = new Laya.Vector3(0, oe.FootGravity, 0),
                this.mRigidbody.destroy(), this.mFootPoint = this.mFootInstance.getChildByName("Point"),
                this.mMaterials = [], ie.SearchMaterials(this.mFootInstance, this.mMaterials), ie.ApplyShadowSetting(this.mFootInstance, !0, !1),
                this.mTargetColor = new Laya.Vector4(1, 1, 1, 1), this.mMaterialColor = new Laya.Vector4(1, 1, 1, 1),
                this.ToIdle();
        }
        get Position() {
            return this.mFootInstance.transform.localPosition;
        }
        set Position(e) {
            this.mFootInstance.transform.localPosition = e;
        }
        get Sprite() {
            return this.mFootInstance;
        }
        get PointPosition() {
            return Q.Add(this.mFootInstance.transform.localPosition, this.mFootPoint.transform.localPosition);
        }
        get Rigidbody() {
            return this.mRigidbody;
        }
        get EnabledGravity() {
            var e = this.mController.gravity.clone();
            return 0 != e.x || 0 != e.y || 0 != e.z;
        }
        set EnabledGravity(e) {
            this.mController.gravity = e ? this.mGravity : new Laya.Vector3(0, 0, 0), this.mController.move(new Laya.Vector3(0, 0, 0));
        }
        get TargetColor() {
            return this.mTargetColor;
        }
        set TargetColor(e) {
            this.mTargetColor.setValue(e.x, e.y, e.z, e.w);
        }
        ReplaceMaterial(e) {
            ie.DeepReplaceMaterials(this.mFootInstance, e);
        }
        RestorageMaterial() {
            ie.RestorageMaterials(this.mMaterials);
        }
        get IsIdle() {
            return "Idle" == this.mAnimName;
        }
        get IsGround() {
            return this.mController.isGrounded && ("Idle" == this.mAnimName || "Finish" == this.mAnimName);
        }
        Move(e) {
            this.mController.move(e);
        }
        ToIdle() {
            this.mAnimName = "Idle", this.mFootAnimator.play(this.mAnimName);
        }
        ToMove() {
            this.mAnimName = "Move", this.mFootAnimator.play(this.mAnimName);
        }
        ToMoveDown() {
            this.mAnimName = "MoveDown", this.mFootAnimator.play(this.mAnimName);
        }
        ToFinish() {
            this.mAnimName = "Finish", this.mFootAnimator.play(this.mAnimName);
            var e = this;
            setTimeout(() => {
                "Finish" == e.mAnimName && e.ToIdle();
            }, 500);
        }
        Update() {
            this.UpdateAnim();
        }
        ShapeCast(e) {
            var t = new Laya.HitResult(),
                i = this.Position.clone(),
                a = Q.Add(i, new Laya.Vector3(0, 1, 0));
            if (e && (i = Q.Add(e, i)), this.mFootInstance.scene.physicsSimulation.shapeCast(this.mController.colliderShape, a, i, t, null, null, ke.kPartCollisionGroup, ke.kPartCollisionGroup)) {
                var n = Q.Sub(t.point, a);
                if (Q.ScalarLength(n) - 1 <= .08) return !0;
            }
            return !1;
        }
        UpdateAnim() {
            "MoveDown" == this.mAnimName && this.mFootInstance.scene && this.mFootAnimator.getCurrentAnimatorPlayState(0)._finish && (this.EnabledGravity || (this.EnabledGravity = !0),
                this.ShapeCast() && this.ToFinish());
        }
    }
    class Ae {
        constructor(e) {
            this.mScene = e;
            var t = j.CurUseShoesId; -
            1 != j.TryUseShoesSkinId && (t = j.TryUseShoesSkinId);
            var i = W.GetShoesItem(t);
            i || console.error(`皮肤ID错误   Id:${t} 试用:${j.TryUseShoesSkinId} 皮肤界面选择:${j.CurUseShoesId}`);
            var a = this.mScene.getChildByName(i.Model);
            this.mFootLeftPrefab = a.getChildByName("FootLeft"), this.mFootLeftPrefab.active = !1,
                this.mFootRightPrefab = a.getChildByName("FootRight"), this.mFootRightPrefab.active = !1,
                this.mEFootEnd = this.mScene.getChildByName("EFootEnd"), this.mEFootEnd.active = !1,
                this.mLeftFoot = new be(this.mFootLeftPrefab), this.mRightFoot = new be(this.mFootRightPrefab),
                this.mPlayerLookAtSprite = new Laya.Sprite3D("PlayerLockAt"), this.mScene.addChild(this.mPlayerLookAtSprite),
                this.mScene.addChild(this.mLeftFoot.Sprite), this.mScene.addChild(this.mRightFoot.Sprite),
                this.mHighPryPrefab = this.mScene.getChildByName("HighPry"), this.mHighPryLeft = Laya.Sprite3D.instantiate(this.mHighPryPrefab, this.mScene),
                this.mHighPryRight = Laya.Sprite3D.instantiate(this.mHighPryPrefab, this.mScene),
                this.mHighPryPrefab.active = !1, this.mCurrentFootMoveSpeed = new Laya.Vector3(0, 0, 0),
                this.mFullEnergy = !1, this.mFullEnergyChangedColorTime = 0, this.mTriggerAttackFoot = null;
        }
        get LockAtSprite() {
            return this.mPlayerLookAtSprite;
        }
        get LeftFoot() {
            return this.mLeftFoot;
        }
        get RightFoot() {
            return this.mRightFoot;
        }
        get FullEnergy() {
            return this.mFullEnergy;
        }
        get CurrentFoot() {
            return this.mCurrentFoot;
        }
        get CurrentDistance() {
            return Math.min(this.mLeftFoot.Position.x, this.mRightFoot.Position.x);
        }
        AllFootIsGround() {
            return this.mLeftFoot.IsGround && this.mRightFoot.IsGround;
        }
        Back() {
            this.mLeftFoot && (this.mLeftFoot.Position = this.mTouchStartLeftPosition, this.mLeftFoot.Move(new Laya.Vector3(0, 0, 0))),
                this.mRightFoot && (this.mRightFoot.Position = this.mTouchStartRightPosition, this.mRightFoot.Move(new Laya.Vector3(0, 0, 0)));
        }
        TouchStart(e) {
            if (!this.mLeftFoot.IsGround || !this.mRightFoot.IsGround || this.mTriggerAttackFoot) return !1;
            if (!this.mCurrentFoot) {
                Q.ScalarLength(this.mLeftFoot.Position) > Q.ScalarLength(this.mRightFoot.Position) ? this.mCurrentFoot = this.mRightFoot : this.mCurrentFoot = this.mLeftFoot;
                for (let t of e)
                    if (t == this.mCurrentFoot.Sprite) return this.mCurrentFoot = null, !1;
                return this.mFullEnergy ? (this.mLeftFoot.ToMove(), this.mLeftFoot.EnabledGravity = !1,
                        this.mRightFoot.ToMove(), this.mRightFoot.EnabledGravity = !1) : (this.mCurrentFoot.EnabledGravity = !1,
                        this.mCurrentFoot.ToMove()), this.mFootStartY = this.mCurrentFoot.Position.y, this.mCurrentFootMoveSpeed.setValue(oe.FootForwardMoveSpeed.x, oe.FootForwardMoveSpeed.y, 0),
                    this.mTriggerAttackFoot = this.mCurrentFoot, this.mTouchStartPosition = this.mCurrentFoot.Position.clone(),
                    this.mTouchStartLeftPosition = this.mLeftFoot.Position.clone(), this.mTouchStartRightPosition = this.mRightFoot.Position.clone(), !0;
            }
            return !1;
        }
        TouchEnd() {
            this.mCurrentFoot && (this.mFullEnergy ? (this.mLeftFoot.ToMoveDown(), this.mRightFoot.ToMoveDown()) : this.mCurrentFoot.ToMoveDown(),
                this.mEFootEnd.active = !1), this.mCurrentFoot = null, this.mFootStartY = 0;
        }
        MoveFoot(e, t, i, a) {
            var n = new Laya.Vector3(Laya.timer.delta / 1e3 * i, Laya.timer.delta / 1e3 * a);
            e.Position.y >= t + oe.FootMoveMaxHigh && (n.y = 0), e.Move(n);
        }
        Update(e) {
            new Laya.Vector3(0, 0, 0);
            if (this.mCurrentFoot) {
                this.mFullEnergy ? (this.MoveFoot(this.mLeftFoot, this.mFootStartY, this.mCurrentFootMoveSpeed.x, this.mCurrentFootMoveSpeed.y),
                        this.MoveFoot(this.mRightFoot, this.mFootStartY, this.mCurrentFootMoveSpeed.x, this.mCurrentFootMoveSpeed.y)) : this.MoveFoot(this.mCurrentFoot, this.mFootStartY, this.mCurrentFootMoveSpeed.x, this.mCurrentFootMoveSpeed.y),
                    this.mCurrentFootMoveSpeed.y -= Laya.timer.delta / 1e3 * 5;
                var t = new Laya.HitResult(),
                    i = Q.Add(this.mCurrentFoot.Position, new Laya.Vector3(0, 1, 0));
                if (this.mScene.physicsSimulation.rayCast(new Laya.Ray(i, new Laya.Vector3(0, -1, 0)), t, 10, ke.kPartCollisionGroup, ke.kPartCollisionGroup) ? (this.mEFootEnd.active = !0,
                        this.mEFootEnd.transform.position = t.point) : this.mEFootEnd.active = !1, !this.mFullEnergy && Math.abs(this.mTouchStartPosition.x - this.mCurrentFoot.Position.x) > .8 * oe.FootMaxDistance) {
                    var a = this.mLeftFoot;
                    this.mCurrentFoot == this.mLeftFoot && (a = this.mRightFoot), a.Position.x < this.mCurrentFoot.Position.x && this.MoveFoot(a, a.Position.y, oe.FootDropMoveSpeed, 0);
                }
                Math.abs(this.mTouchStartPosition.x - this.mCurrentFoot.Position.x) > oe.FootMaxDistance && this.TouchEnd();
            } else {
                t = new Laya.HitResult();
                var n = null,
                    o = (a = null, this.mLeftFoot.ShapeCast(new Laya.Vector3(0, -10, 0))),
                    s = this.mRightFoot.ShapeCast(new Laya.Vector3(0, -10, 0));
                if (o && !s ? (n = this.mLeftFoot, a = this.mRightFoot) : !o && s && (n = this.mRightFoot,
                        a = this.mLeftFoot), n)(l = Q.Distance(n.Position, a.Position)) > 1.5 * oe.FootMaxDistance && (n.Position.x > a.Position.x ? this.MoveFoot(n, n.Position.y, -l, 0) : this.MoveFoot(n, n.Position.y, l, 0));
            }
            if (this.mFullEnergy && this.UpdateFullEnergyColor(), this.mLeftFoot && this.mLeftFoot.Update(),
                this.mRightFoot && this.mRightFoot.Update(), this.mTriggerAttackFoot && this.mTriggerAttackFoot.IsGround && (this.OnFootAttackCallback && this.OnFootAttackCallback(this.mTriggerAttackFoot.Position),
                    this.mTriggerAttackFoot = null), e) {
                var r = Q.Sub(this.mLeftFoot.Position, this.mRightFoot.Position),
                    l = Q.ScalarLength(r) / 2;
                Laya.Vector3.normalize(r, r);
                var h = this.mRightFoot.Position;
                this.mPlayerLookAtSprite.transform.localPosition = new Laya.Vector3(h.x + r.x * l, oe.CameraYOffset, h.z + r.z * l);
            }
            if (this.mRightFoot && this.mLeftFoot) {
                this.mHighPryRight.transform.localPosition = this.mRightFoot.PointPosition, this.mHighPryLeft.transform.localPosition = this.mLeftFoot.PointPosition;
                var d = Q.Sub(this.mHighPryRight.transform.localPosition, this.mHighPryLeft.transform.localPosition),
                    c = Q.ScalarLength(d) / 2;
                Laya.Vector3.normalize(d, d);
                var m = new Laya.Vector3(this.mHighPryLeft.transform.localPosition.x + d.x * c, this.mHighPryLeft.transform.localPosition.y + d.y * c + oe.FootPryHigh, this.mHighPryLeft.transform.localPosition.z + d.z * c);
                this.mHighPryRight.transform.lookAt(m, new Laya.Vector3(0, 1, 0), !0), this.mHighPryLeft.transform.lookAt(m, new Laya.Vector3(0, 1, 0), !0);
            }
        }
        DoFullEnergy() {
            this.TouchEnd(), this.mFullEnergy = !0;
            var e = Math.max(this.mLeftFoot.Position.x, this.mRightFoot.Position.x),
                t = this.mRightFoot.Position.y;
            this.mLeftFoot.Position.x > this.mRightFoot.Position.x && (t = this.mLeftFoot.Position.y),
                this.mLeftFoot.Position = new Laya.Vector3(e, t, this.mLeftFoot.Position.z), this.mRightFoot.Position = new Laya.Vector3(e, t, this.mRightFoot.Position.z),
                O.Instance.event($.kEnergyFull);
        }
        DoNormal() {
            this.TouchEnd(), this.mFullEnergy = !1, this.mLeftFoot.RestorageMaterial(), this.mRightFoot.RestorageMaterial();
        }
        DoUpdateFoot(e) {
            if (e) {
                var t = Laya.timer.delta / 1e3 * 12,
                    i = new Laya.HitResult(),
                    a = e.Position.clone(),
                    n = Q.Add(a, new Laya.Vector3(0, 1, 0));
                if (this.mScene.physicsSimulation.rayCast(new Laya.Ray(n, new Laya.Vector3(0, -1, 0)), i, 10, ke.kPartCollisionGroup, ke.kPartCollisionGroup)) {
                    var o = Q.Sub(i.point, n);
                    Q.ScalarLength(o) - 1 >= t ? a.y -= t : a.y = i.point.y;
                } else a.y -= t;
                e.Position = a;
            }
        }
        Initialize(e, t) {
            this.mLeftFoot.Position = new Laya.Vector3(e.x + 2, 0, -.4), this.mRightFoot.Position = new Laya.Vector3(e.x, 0, .4),
                this.mColorMaterials = t;
        }
        UpdateFullEnergyColor() {
            if (!(Laya.timer.currTimer - this.mFullEnergyChangedColorTime < oe.FootFullEnergyFrameKeepTime)) {
                this.mFullEnergyChangedColorTime = Laya.timer.currTimer;
                var e = RandomArray(this.mColorMaterials);
                this.mLeftFoot.ReplaceMaterial(e), this.mRightFoot.ReplaceMaterial(e);
            }
        }
    }
    class Ce {
        constructor(e) {
            this.mItemSprite3D = e, this.mItemSprite3D.active = !0, this.mDestructionEffect = this.mItemSprite3D.getChildByName("DestructionEffect"),
                this.mDestructionEffect.active = !1, this.mDestructionEffectIcon = this.mDestructionEffect.getChildByName("icon"),
                this.mDestructionEffectIcon && (this.mDestructionEffectIcon.active = !0), this.mAnimator = this.mItemSprite3D.getComponent(Laya.Animator);
        }
        get Sprite3D() {
            return this.mItemSprite3D;
        }
        Destroy() {
            this.mItemSprite3D && (this.mItemSprite3D.destroy(), this.mItemSprite3D = null);
        }
        DoHit(e) {
            this.mDestructionEffect.active = !0, this.mDestructionEffectIcon && e && (this.mDestructionEffectIcon.active = !1),
                this.mAnimator && this.mAnimator.play("Hit");
        }
    }
    class ke {
        constructor(e, t) {
            this.mPart = e, this.mPart.active = !0, this.Position = t, ApplyColliderGroup(this.mPart.getChildByName("Root"), ke.kPartCollisionGroup),
                this.mItemSpawnPoints = [];
            for (var i = this.mPart.getChildByName("ItemSpawnPoints"), a = 0; a < i.numChildren; a++) this.mItemSpawnPoints.push(i.getChildAt(a));
        }
        get Position() {
            return this.mPart.transform.localPosition;
        }
        set Position(e) {
            this.mPart.transform.localPosition = e;
        }
        get PartSprite() {
            return this.mPart;
        }
        get ItemSpawnPoints() {
            return this.mItemSpawnPoints;
        }
    }
    ke.kPartCollisionGroup = 2;
    class xe {
        constructor() {
            this.WaitEnd = !1, this.mTouchEnabled = !1;
        }
        get LevelInfo() {
            return this.mLevelInfo;
        }
        get GameState() {
            return this.mGameState;
        }
        get GameUI() {
            return this.mGameUI;
        }
        get CurrentDistance() {
            return this.mPlayer.CurrentDistance;
        }
        Initialize() {
            this.mPreloadResources = [], this.mPreloadResources.push("Main/Conventional/Main.ls"),
                Ve.Instance.PreloadResource(this.mPreloadResources, Laya.Handler.create(this, this.OnInitializeCompleted));
        }
        Uninitialize() {
            this.mScriptUpdate && (this.mScriptUpdate.destroy(), this.mScriptUpdate = null),
                this.mScene && (this.mScene.removeSelf(), this.mScene.destroy(), this.mScene = null),
                this.mGameUI && (this.mGameUI.Destroy(), this.mGameUI = null);
            for (var e = 0; e < this.mPreloadResources.length; e++) Laya.loader.clearRes(this.mPreloadResources[e]);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.OnMouseUp), Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.OnMouseUp),
                Laya.stage.off(Laya.Event.MOUSE_OVER, this, this.OnMouseUp), Laya.stage.off(Laya.Event.MOUSE_WHEEL, this, this.OnMouseWheel);
        }
        OnUpdate() {
            this.mScene && (this.mGameUI && this.mGameUI.OnUpdate(), this.mTouchBegin && !this.mPlayer.CurrentFoot && this.mPlayer.AllFootIsGround() && this.mPlayer.TouchStart(this.mSceneEndFootEnds) && (this.mTouchBegin = !1),
                this.mLevelInfo && this.mLevelInfo.Update(), this.mCameraController && this.mCameraController.OnUpdate(),
                this.mPlayer && (this.mPlayer.Update(this.mGameState != F.End), this.mGameState == F.Playing && (this.mPlayer.LeftFoot.Position.y < -2 && this.DoEnd(!0),
                    this.mPlayer.RightFoot.Position.y < -2 && this.DoEnd(!0), this.mBroadcastDisableHoldToReleaseTips || this.mPlayer.LeftFoot.Position.x > 4 && this.mPlayer.RightFoot.Position.x > 4 && (this.mBroadcastDisableHoldToReleaseTips = !0,
                        O.Instance.event($.kDisableWaitState))), !this.mLevelInfo.FullEnergy && this.mPlayer.FullEnergy && this.mPlayer.DoNormal()));
        }
        DoGameStart() {
            this.mGameState == F.WaitStart && (this.mTouchEnabled = !0, GetSDK().IsSupportRecord() && GetSDK().StartRecord());
        }
        DoGameEnd(e) {
            if (this.mGameState != F.End) {
                this.mTouchEnabled = !1
                if (e) {
                    this.mLevelInfo.DoSuccessed(),
                        this.mGameState = F.End,
                        O.Instance.event($.kGameStateChanged, this.mGameState),
                        K.playSound("win"), O.Instance.event($.kOnOpenGameWin);
                } else {
                    var t = this;
                    this.mGameState = F.Pause,
                        O.Instance.event($.kGameStateChanged, this.mGameState),

                        console.log("OnOpenResurgence")
                    this.OnOpenResurgence(e => {
                            e ? (t.mPlayer.Back(), t.mTouchEnabled = !0, t.mGameState = F.Playing, t.WaitEnd = !1,
                                t.DoFullEnergy(), O.Instance.event($.kGameStateChanged, this.mGameState)) : (t.mLevelInfo.DoFail(),
                                t.mGameState = F.End, j.Energy = 0, O.Instance.event($.kGameStateChanged, this.mGameState),
                                Ve.Instance.Restart());
                        }),
                        K.playSound("lose");
                }
            }

        }
        popupSplashDialogDelay() {
            H.isonDataReceived && this.popupSplashDialog();
        }
        popupSplashDialog() {
            new ve(function(e) {
                let t = this;
                console.log("result" + e), "normal" == e && (t.close(!1), H.isFisrtEnterGame = !1);
            }).popup(!0, !1);
        }
        OnInitializeCompleted() {
            this.mScene = Laya.loader.getRes("Main/Conventional/Main.ls"), Laya.stage.addChild(this.mScene),
                this.mScriptUpdate = new Se(), this.mScriptUpdate.Script = this, this.mScene.addComponentIntance(this.mScriptUpdate),
                K.playBGM("bgm"), this.mWatermelonPool = new ne(this.mScene.getChildByName("Watermelon")),
                this.mWatermelonPool.Prefab.active = !1, this.mFecesPool = new ne(this.mScene.getChildByName("Feces")),
                this.mFecesPool.Prefab.active = !1, this.mSceneEndPart = this.mScene.getChildByName("SceneEndPart"),
                this.mSceneEndPartEffect = this.mSceneEndPart.getChildByName("FinishEffect"), this.mSceneEndPartEffect.active = !1,
                this.mFullEnergyEffect = this.mScene.getChildByName("FullEnergy"), this.mFullEnergyEffect.active = !1,
                DeepAddTriggerEntery(this.mSceneEndPart.getChildByName("Trigger"), this.OnTriggerEnterSceneEndPart.bind(this)),
                DeepAddTriggerEntery(this.mSceneEndPart.getChildByName("ControlTrigger"), this.OnFootEnterEnd.bind(this)),
                this.mShoesMaterials = [];
            var e = this.mScene.getChildByName("ShoesColorTable");
            this.SearchMaterial(e, this.mShoesMaterials), e.active = !1, this.mSkyboxMaterials = [];
            var t = this.mScene.getChildByName("SkyboxColorTable");
            this.SearchMaterial(t, this.mSkyboxMaterials), t.active = !1, this.mSceneMaterials = [];
            var i = this.mScene.getChildByName("SceneColorTable");
            this.SearchMaterial(i, this.mSceneMaterials), i.active = !1, this.mSceneLowerMaterials = [];
            var a = this.mScene.getChildByName("SceneLowerColorTable");
            this.SearchMaterial(a, this.mSceneLowerMaterials), a.active = !1, this.mScene.skyRenderer.material = RandomArray(this.mSkyboxMaterials);
            var n = RandomIndex(this.mSceneMaterials.length),
                o = this.mSceneMaterials[n],
                s = this.mSceneLowerMaterials[n];
            this.mScenePartPoolMap = {};
            for (var r = 0; r < this.mScene.numChildren; r++) {
                var l = this.mScene.getChildAt(r);
                l && l.name.includes("ScenePart") && (this.mScenePartPoolMap[l.name] = new ne(l),
                    l.active = !1, l.name.includes("Lower") ? this.ApplyAllMaterial(l, s) : this.ApplyAllMaterial(l, o));
            }
            ApplyColliderGroup(this.mSceneEndPart, ke.kPartCollisionGroup), ie.ApplyShadowSetting(this.mSceneEndPart, !1, !0),
                this.mPlayer = new Ae(this.mScene), this.mPlayer.Initialize(new Laya.Vector3(0, 0, 0), this.mShoesMaterials),
                this.mPlayer.OnFootAttackCallback = this.OnCallbacFootAttack.bind(this), this.mCamera = this.mScene.addChild(new Laya.Camera()),
                this.mCamera.clearFlag = Laya.Camera.CLEARFLAG_SKY, this.mCameraController = new ee(this.mCamera),
                this.mCameraController.Distance = oe.CameraDistance, this.mCameraController.AngleY = oe.CameraAngleY,
                this.mCameraController.AngleX = oe.CameraAngleX, this.mCameraController.Target = this.mPlayer.LockAtSprite,
                this.mLevelInfo = new Le(), this.DoGeneratorLevel(), this.mGameUI = new we(o.albedoColor),
                H.isFisrtEnterGame && (V.log("DataManager.isFisrtEnterGame"), H.isonDataReceived ? this.popupSplashDialog() : Laya.timer.once(2e3, this, this.popupSplashDialogDelay)),
                this.mGameState = F.WaitStart, O.Instance.event($.kLevelReady), O.Instance.event($.kGameStateChanged, this.mGameState),
                this.mSceneEndEnterCount = 0, this.mTouchBegin = !1, this.mSceneEndFootEnds = [],
                this.mGameUI.View.TouchArea.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp),
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.OnMouseUp), Laya.stage.on(Laya.Event.MOUSE_OVER, this, this.OnMouseUp),
                Laya.stage.on(Laya.Event.MOUSE_WHEEL, this, this.OnMouseWheel);
        }
        OnMouseDown(e) {
            this.mTouchEnabled && this.mGameState != F.End && (this.mPlayer && this.mPlayer.TouchStart(this.mSceneEndFootEnds),
                this.mTouchBegin = !0, this.mGameState == F.WaitStart && (this.mGameState = F.Playing,
                    O.Instance.event($.kGameStateChanged, this.mGameState), j.IfOpenInvincibleState && this.DoFullEnergy()));
        }
        DoFullEnergy() {
            this.mLevelInfo && this.mLevelInfo.DoFullEnergy(), this.mPlayer && this.mPlayer.DoFullEnergy();
        }
        OnMouseUp(e) {
            this.mTouchEnabled && (this.mPlayer && this.mPlayer.TouchEnd(), this.mTouchBegin = !1);
        }
        OnMouseWheel(e) {
            this.mCameraController && (this.mCameraController.AngleY += e.delta);
        }
        DoGeneratorLevel() {
            this.mLevelParts = [], this.mOtherLevelParts = [], this.mLevelItems = [];
            for (var e = W.GetLevelPartFromLevel(j.CurrentLevel), t = W.GetFecesCNumFromLevel(j.CurrentLevel), i = W.LevelPartCount(), a = new Laya.Vector3(0, 0, 0), n = 0; n < 4; n++) this.AddLevelPart(RandomArray(e), a),
                a.x += 1;
            var o = W.GetLevelPartLength(j.CurrentLevel),
                s = 0;
            for (n = 0; n < i; n++) {
                for (var r = RandomArray(W.LevelPartHighTable); Math.abs(r - 0) > 1;) r = RandomArray(W.LevelPartHighTable);
                var l = this.AddLevelPart(RandomArray(e), Q.Add(a, new Laya.Vector3(0, r, 0)));
                a.x += 1, o <= 0 ? (o = W.GetLevelPartLength(j.CurrentLevel), a.x += 1) : o -= 1;
                var h = RandomArray([this.mWatermelonPool, this.mWatermelonPool, this.mWatermelonPool, this.mWatermelonPool, this.mFecesPool]);
                for (var d of (this.mFecesPool == h && (s >= t ? (h = this.mWatermelonPool, s = 0) : s++),
                        l.ItemSpawnPoints)) {
                    var c = h.Alloc();
                    this.mScene.addChild(c);
                    var m = c.getComponent(Laya.PhysicsTriggerComponent);
                    m && (m.isTrigger = !0);
                    var p = c.addComponent(te);
                    p ? (h == this.mWatermelonPool ? p.OnTriggerEnterCallback = this.OnTriggerEnterItemWatermelon.bind(this) : p.OnTriggerEnterCallback = this.OnTriggerEnterItemFeces.bind(this),
                        ie.ApplyShadowSetting(c, !0, !1), c.transform.localPosition = d.transform.position.clone(),
                        this.mLevelItems.push(new Ce(c))) : console.error("Script3DTrigger 添加失败");
                }
            }
            this.mSceneEndPart.transform.localPosition = a, this.mLevelInfo.Distance = a.x;
        }
        AddLevelPart(e, t) {
            var i = this.mScenePartPoolMap[e];
            if (i) {
                var a = new ke(i.Alloc(), t);
                this.mScene.addChild(a.PartSprite), this.mLevelParts.push(a), ie.ApplyShadowSetting(a.PartSprite, !1, !0);
                for (var n = t.y - 1; n > W.LevelPartHighMin; n--) {
                    var o = t.clone();
                    o.y = n;
                    var s = new ke(i.Alloc(), o);
                    this.mScene.addChild(s.PartSprite), this.mOtherLevelParts.push(s);
                }
                var r = t.clone();
                r.y = W.LevelPartHighMin;
                s = new ke(this.mScenePartPoolMap.ScenePartLower.Alloc(), r);
                return this.mScene.addChild(s.PartSprite), this.mOtherLevelParts.push(s), a;
            }
            console.error(`没有找到 ${e} [ScenePartXXX]`);
        }
        OnTriggerEnterSceneEndPart(e, t) {
            t == this.mPlayer.LeftFoot.Sprite && this.mSceneEndEnterCount++, t == this.mPlayer.RightFoot.Sprite && this.mSceneEndEnterCount++,
                this.mSceneEndEnterCount >= 2 && (this.DoGameEnd(!0), this.mSceneEndPartEffect.active = !0);
        }
        OnFootEnterEnd(e, t) {
            for (var i = 0; i < this.mSceneEndFootEnds.length; i++)
                if (this.mSceneEndFootEnds[i] == t) return;
            this.mSceneEndFootEnds.push(t), this.mPlayer.TouchEnd();
        }
        OnTriggerEnterItemWatermelon(e, t) {
            if (t.name.includes("Foot") && !this.mTouchBegin)
                for (var i = 0; i < this.mLevelItems.length; i++) {
                    var a = this.mLevelItems[i];
                    if (a.Sprite3D == e) {
                        a.DoHit(), setTimeout(() => {
                            a.Destroy();
                        }, oe.WatermelonDestroyTime), this.mLevelItems.splice(i, 1), this.mLevelInfo.HitWatermelon() && this.mPlayer.DoFullEnergy();
                        break;
                    }
                }
        }
        OnTriggerEnterItemFeces(e, t) {
            if (t.name.includes("Foot") && !this.mTouchBegin)
                for (var i = 0; i < this.mLevelItems.length; i++) {
                    var a = this.mLevelItems[i];
                    if (a.Sprite3D == e) {
                        a.DoHit(), setTimeout(() => {
                            a.Destroy();
                        }, oe.FecesDestroyTime), this.mLevelItems.splice(i, 1), this.DoEnd();
                        break;
                    }
                }
        }
        OnCallbacFootAttack(e) {
            var t = oe.AttackRange;
            this.mLevelInfo.FullEnergy && (t = oe.FullEnergyAttackRange);
            for (var i = 0; i < this.mLevelItems.length;) {
                var a = this.mLevelItems[i];
                if (Q.Distance(a.Sprite3D.transform.localPosition, e) <= t)
                    if (this.mLevelItems.splice(i, 1),
                        "Watermelon" == a.Sprite3D.name) {
                        this.mLevelInfo.HitWatermelon() && this.mPlayer.DoFullEnergy(), a.DoHit(), this.DestroyItem(a, oe.WatermelonDestroyTime);
                        var n = new Laya.Vector3(0, 0, 0);
                        this.mCamera.worldToViewportPoint(a.Sprite3D.transform.localPosition, n), O.Instance.event($.KPlayWatermelonEffect, [n.x, n.y]);
                    } else a.DoHit(this.mLevelInfo.FullEnergy), this.DestroyItem(a, oe.FecesDestroyTime),
                        this.DoEnd();
                else i++;
            }
            if (this.mLevelInfo.FullEnergy) {
                this.mFullEnergyEffect.active = !0, this.mFullEnergyEffect.transform.localPosition = e;
                var o = this;
                setTimeout(() => {
                    o.mFullEnergyEffect.active = !1;
                }, 1e3);
            }
        }
        DoEnd(e) {
            if (e || this.mLevelInfo.HitFeces(), !this.WaitEnd && (!this.mLevelInfo.FullEnergy || e)) {
                console.log("DoEnd")
                this.DoGameEnd(!1);
                // if (this.mTouchEnabled = !1, this.CurrentDistance / this.mLevelInfo.Distance <= .3) setTimeout(() => {
                //     K.playSound("lose"), O.Instance.event($.kRestartLevel);
                // }, 1e3); else {
                //     var t = this;
                //     setTimeout(() => {
                //         t.DoGameEnd(!1);
                //     }, 1500);
                // }
                this.WaitEnd = !0;
            }
        }
        DestroyItem(e, t) {
            setTimeout(() => {
                e.Destroy();
            }, t);
        }
        SearchMaterial(e, t) {
            if (e instanceof Laya.MeshSprite3D) {
                var i = e.meshRenderer;
                t.push(i.sharedMaterial);
            }
            for (var a = 0; a < e.numChildren; a++) this.SearchMaterial(e.getChildAt(a), t);
        }
        ApplyAllMaterial(e, t) {
            e instanceof Laya.MeshSprite3D && (e.meshRenderer.sharedMaterial = t);
            for (var i = 0; i < e.numChildren; i++) this.ApplyAllMaterial(e.getChildAt(i), t);
        }
        OnOpenResurgence(e) {
            this.mResurgence || (this.mResurgence = new Ie(),
                    Laya.stage.addChild(this.mResurgence)),
                this.mResurgence.Callback = e,
                this.mResurgence.DoShow();
        }
    }
    class _e extends a.GetNewSkinUI {
        constructor(e) {
            super();
            let t = W.GetShoesItem(e);
            this.skinIcon.skin = t.Icon, this.btnConfirm.on(Laya.Event.CLICK, this, this.OnConfirm, [e]),
                this.lab_btnNot.on(Laya.Event.CLICK, this, () => {
                    GetSDK().showGridAd(null), this.CloseSelf();
                }), this.btnMoreGame.on(Laya.Event.CLICK, this, () => GetSDK().showGridAd("更多游戏")),
                this.btnMoreGame.visible = !1;
            setTimeout(() => {
                this.lab_btnNot.visible = !0;
            }, 3e3);
        }
        OnConfirm(e) {
            j.UnlockShoes(e), Ve.IsOpenShoesUI = !0, this.CloseSelf();
        }
        CloseSelf() {
            Ve.Instance.Level.GameUI.OnGameRestart(), this.close();
        }
        onClosed(e) {
            this.destroy();
        }
    }
    class Re extends a.GetRewardBoxUI {
        constructor() {
            super(), this.ClickAddNum = 1 / 8, this.SecondReduce = .2, this.RewardTime = 1e4,
                this.ClickDistanceTime = 0, this.btnClick.on(Laya.Event.CLICK, this, this.OnBtnClick),
                Laya.timer.frameLoop(1, this, this.OnUpdate), this.progress.value = 0, GetSDK().ShowBannerAdRewardBox();
        }
        OnUpdate() {
            this.ClickDistanceTime += this.timer.delta, this.ClickDistanceTime >= 1e3 && (this.ClickDistanceTime = 0,
                this.progress.value > 0 && (this.progress.value -= this.SecondReduce));
        }
        OnBtnClick() {
            if (this.progress.value += this.ClickAddNum, this.progress.value >= 1) {
                let e = j.RandomGetLockSkin();
                if (e) {
                    new _e(e.Id).popup(), this.CloseSelf();
                }
            }
            this.ClickDistanceTime = 0;
        }
        CloseSelf() {
            this.timer.clearAll(this), this.destroy();
        }
    }
    class Te extends a.GameWinUI {
        constructor() {
            super(), this.btnGetInvincibleState.on(Laya.Event.CLICK, this, this.OnGetInvincibleState),
                this.btnContinueGame.on(Laya.Event.CLICK, this, this.OnContinueGame);
            platform.getInstance().initList(this.homeList);
        }
        OnGetInvincibleState() {
            platform.getInstance().showReward(() => {
                j.IfOpenInvincibleState = !0, j.IfLookVideo = !0, this.OnContinueGameNoEvt()
            })
        }
        OnContinueGameNoEvt() {
            this.OnContinueGame();
        }
        OnContinueGame() {
            let e = null != j.RandomGetLockSkin();
            j.CurrentLevel % 4 == 0 && e ? O.Instance.event($.kOpenGameRewardBox) : Ve.Instance.Level.GameUI.OnGameRestart(),
                this.close();
        }
        onClosed(e) {
            Ve.GInstance.onResetResultHT(), V.log("onClosed"), this.destroy();
        }
    }
    class Ve extends K {
        constructor() {
            super(["res/atlas/loading_ui.atlas"]), this.resultHT = null, this.mLoadingUI = null,
                UIConfig.closeDialogOnSide = !1, j.SaveVersion < i.kSaveVersion && (N.ClearStorage(),
                    N.Load(), j.SaveVersion = i.kSaveVersion), UIConfig.popupBgAlpha = .74, O.Instance.on($.kShowResurgence, this, this.OnOpenResurgence),
                O.Instance.on($.kRestartLevel, this, this.OnEventRestartLevel), O.Instance.on($.kOpenGameRewardBox, this, this.OnOpenGameRewardBox),
                O.Instance.on($.kOnOpenGameWin, this, this.OnOpenGameWin);
        }
        static get Instance() {
            return Ve.GInstance;
        }
        static CreateInstance() {
            null == Ve.GInstance && (Ve.GInstance = new Ve());
        }
        get Level() {
            return this.mLevel;
        }
        OnPreloadCompleted() {
            this.mLoadingUI = new q(),
                this.mLoadingUI.Show(q.kLoadingText),
                this.mLoadingUI.Start(Ve.PreloadRes, Laya.Handler.create(this, this.OnLoadingCompleted));
        }
        OnUpdate() {
            super.OnUpdate(),
                this.TryUseSkinTime();
        }
        OnLowUpdate() {
            super.OnLowUpdate();
        }
        PreloadResource(e, t) {
            this.mLoadingUI.Start(e, t);
        }
        EnterLevel() {
            this.mLevel && (this.mLevel.Uninitialize(), this.mLevel = null), this.mLevel = new xe(),
                this.mLevel.Initialize();
        }
        TryUseSkinTime() {
            -1 != j.TryUseShoesSkinId && Date.now() - j.TryUseShoesSkinStartTime >= W.kTryUseShoesSkinTime && j.OverTryShoesSkin();
        }
        OnOpenResurgence(e) {
            this.mResurgence || (this.mResurgence = new Ie(), Laya.stage.addChild(this.mResurgence)),
                this.mResurgence.Callback = e, this.mResurgence.DoShow();
        }
        BackToHome() {
            this.mLevel.Uninitialize(), this.mLevel = null, this.mLoadingUI.Hide();
        }
        Restart() {
            this.EnterLevel();
        }
        NextLevel() {
            j.CurrentLevel += 1, this.EnterLevel();
        }
        OnOpenGameWin() {
            let e = new Te();
            e.popup();
        }
        initResultHT(e, t) {}
        onResetResultHT() {
            null != this.resultHT && (this.resultHT.onClosed(),
                this.resultHT = null);
        }
        OnOpenGameRewardBox() {
            let e = new Re();
            Laya.stage.addChild(e);
        }
        OnLoadingCompleted() {
            platform.getInstance().startup("Walk-Master", () => {
                let yad = new Laya.Image();
                yad.scale(0.8, 0.8);
                yad.skin = "common/yad.png";
                yad.centerX = 0;
                yad.bottom = 10;
                yad.zOrder = 2e3;
                yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                    platform.getInstance().navigate("GAME", "LOGO")
                })
                Laya.stage.addChild(yad);
                window.yad = yad;

                this.DoFirstLoadingCompleted();
            })
        }
        DoFirstLoadingCompleted() {
            Laya.stage.on(Laya.Event.CLICK, this, this.onStageClickSound);
            var e = this;
            setTimeout(() => {
                e.EnterLevel();
            }, 100);
        }
        onStageClickSound(e) {
            e.target instanceof Laya.Button && K.playSound("click");
        }
        getGameLevel() {
            return this.mLevel;
        }
        OnEventRestartLevel() {
            this.Restart();
        }
    }
    Ve.GInstance = null, Ve.PreloadRes = ["res/atlas/ui.atlas"],
        Ve.IsOpenShoesUI = !1, Ve.CreateInstance();
}();