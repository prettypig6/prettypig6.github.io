(function() {
    window.HUHU = {
        gameId: 600778485,
        interstitialId: "809437615",
        videoId: "356704289",
        interstitialAd: {},
        videoAd: {},
        interstitialAdLoaded: false,
        videoAdLoaded: false,
        idRewarded: false,
        orientation: 0,
    };
    window.HUHU_init = function(opt) {
        try {
            console.log("HUHU_init");
            if (typeof(opt) != "undefined" && typeof(opt.orientation) != "undefined") {
                HUHU.orientation = opt.orientation;
            }
            //设置初始化回调函数
            GameSDK.setOnInitCB(HUHU_onInit);
            //设置平台进入前台回调函数
            //GameSDK.setOnResumeCB(this.onResume);
            //设置平台进入后台回调函数
            //GameSDK.setOnPauseCB(this.onPause);
            //设置平台声音控制回调函数
            //GameSDK.setOnAudioCB(this.onAudio);
            //初始化GameSDK
            GameSDK.init(HUHU.gameId);
            //设置平台横竖屏
            GameSDK.setOrientation(HUHU.orientation);
            //初始化AdSDK,依赖GameSDK
            AdSDK.init();
            console.log("init end!");
        } catch (e) {
            console.log(e);
        }
    };

    //平台收到游戏init初始化后，会通过该函数回传用户信息
    //    error,  // int 错误代码：0、成功（见文末）
    //    userId,  // int当前玩家id
    //    nickName,  // string当前玩家名称
    //    headUrl,  // string 当前玩家头像地址
    //    location,  //string当前玩家地址
    //    sex,  // string 玩家性别："f" - 女；"m" - 男；"x" – 未知
    //    age // int 当前玩家年龄
    window.HUHU_onInit = function(param) {
        console.log("onInit:", "userId " + param.userId + " nickName " + param.nickName + " headUrl " + param.headUrl + " age " + param.age);
    };
    window.HUHU_quit = function() {
        GameSDK.quit(1);
    };
    //平台进入前台，通过该函数通知游戏
    window.HUHU_onResume = function() {
        console.log("onResume:");
    };
    //平台进入后台，通过该函数通知游戏
    window.HUHU_onPause = function() {
        console.log("onPause:");
    };
    // 创建插屏广告 展示一次调用一次创建
    // 参数
    //   adId: string 广告序号ID 游戏自定义
    //   interstitialAdId: string 插屏广告ID 需后台申请
    //   style: int 广告类型 1 全屏 2 半屏
    window.HUHU_createInterstitialAd = function() {
        try {
            console.log("HUHU_createInterstitialAd:");
            HUHU.interstitialAd = AdSDK.createInterstitialAd("1", HUHU.interstitialId, 1);
            //注册onLoad函数,游戏调用创建插屏时，AdSDK通知平台创建广告，当创建成功，会执行该回调函数通知游戏
            HUHU.interstitialAd.onLoad(function() {
                HUHU.interstitialAdLoaded = true;
                console.log("interstitialAd 创建插屏成功，可以调用展示");
            });
            //注册onError函数,游戏调用创建插屏时，AdSDK通知平台创建广告，当创建失败，会执行该回调函数通知游戏
            HUHU.interstitialAd.onError(function(param) {
                console.log("interstitialAd 创建插屏失败，错误码 = ", param.errorCode);
                HUHU_destroyInterstitialAd(); //加载广告失败，销毁
                //HUHU_createInterstitialAd();//预加载
            });
            console.log("interstitialAd 游戏创建插屏广告");
        } catch (e) {
            console.log(e);
        }
    };
    window.HUHU_showInterstitialAd = function() {
        console.log("HUHU_showInterstitialAd:");
        if (HUHU.interstitialAdLoaded) {
            HUHU.interstitialAd.show().then(function() {
                console.log("interstitialAd 广告显示成功,可给与奖励")
                HUHU_destroyInterstitialAd(); //展示成功后，销毁
                HUHU_createInterstitialAd(); //预加载
            }, function(err) {
                console.log("interstitialAd 广告显示失败")
                HUHU_createInterstitialAd(); //预加载
            })
            console.log("interstitialAd 游戏展示插屏广告");
        } else {
            console.log("interstitialAd 广告未加载成功");
            HUHU_createInterstitialAd(); //预加载
        }
    };
    window.HUHU_destroyInterstitialAd = function() {
        HUHU.interstitialAdLoaded = false;
        HUHU.interstitialAd.destroy();
        console.log("interstitialAd 游戏销毁插屏广告");
    };
    // 创建激励视频广告 展示一次创建一次
    // 参数
    //   adId: string 广告序号ID 游戏自定义
    //   videoAdId: string 视频广告ID 需后台申请
    //   screenOrientation: int 广告类型 1 横屏 2 竖屏
    window.HUHU_createRewardedVideoAd = function() {
        try {
            console.log("HUHU_createRewardedVideoAd:");
            HUHU.videoAd = AdSDK.createRewardedVideoAd("1", HUHU.videoId, HUHU.orientation);
            //注册onLoad函数,游戏调用创建视频时，AdSDK通知平台创建广告，当创建成功，会执行该回调函数通知游戏
            HUHU.videoAd.onLoad(function() {
                HUHU.videoAdLoaded = true;
                console.log("rewardedvideoAd 创建视频广告成功，可以调用展示")
            });
            //注册onError函数,游戏调用创建视频时，AdSDK通知平台创建广告，当创建失败，会执行该回调函数通知游戏
            HUHU.videoAd.onError(function(param) {
                console.log("rewardedvideoAd 创建视频广告失败，错误码 = ", param.errorCode);
                HUHU_destroyRewardedVideoAd(); //加载广告失败，销毁
                //HUHU_createRewardedVideoAd();
            });
            //注册onClose函数,视频广告播放完整或主动退出观看视频时，展示落地页面，右上方关闭视频按钮触发，该函数执行。
            HUHU.videoAd.onClose(function() {
                console.log("rewardedvideoAd 视频广告关闭,回到游戏页面");
                if (!HUHU.idRewarded) {
                    console.log("需完整观看广告才能获取奖励");
                }
                HUHU_destroyRewardedVideoAd(); //视频广告关闭，销毁
                HUHU_createRewardedVideoAd(); //预加载

            });
            console.log("rewardedvideoAd 游戏创建视频广告");
        } catch (e) {
            console.log(e);
        }
    };
    window.HUHU_showRewardedVideoAd = function(callback, failback) {
        console.log("HUHU_showRewardedVideoAd:");
        if (HUHU.videoAdLoaded) {
            HUHU.videoAd.show().then(function() {
                // 大转盘转  奖励 // 标记  看完
                console.log("rewardedvideoAd 广告显示成功，可以给与奖励")
                HUHU.idRewarded = true;
                if (typeof(callback) == "function") {
                    callback();
                }
            }, function(err) {
                console.log("rewardedvideoAd 广告显示失败")
                HUHU_createRewardedVideoAd(); //预加载
            })
            console.log("rewardedvideoAd 游戏展示视频广告");
        } else {
            // 视频未加载完，下发奖励   这个能屏蔽掉么
            console.log("rewardedvideoAd 视频广告未加载成功");
            HUHU_createRewardedVideoAd(); //预加载
            if (typeof(failback) == "function") {
                failback();
            }
        }
    };
    window.HUHU_destroyRewardedVideoAd = function() {
        HUHU.videoAdLoaded = false;
        HUHU.idRewarded = false;
        HUHU.videoAd.destroy();
        console.log("rewardedvideoAd 游戏销毁视频广告");
    };
    window.HUHU_init();
    window.HUHU_createInterstitialAd();
    window.HUHU_createRewardedVideoAd();
})();