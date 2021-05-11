function waitAsync(e, t) {
    return new Promise(function(o, r) {
        setTimeout(function() {
                t && t(),
                    o()
            },
            e)
    })
}

function closure(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    return function() {
        for (var o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
        return e.apply(null, t.concat(o))
    }
}
var __reflect = this && this.__reflect ||
    function(e, t, o) {
        e.__class__ = t,
            o ? o.push(t) : o = [t],
            e.__types__ = e.__types__ ? o.concat(e.__types__) : o
    },
    __extends = this && this.__extends ||
    function(e, t) {
        function o() {
            this.constructor = e
        }
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        o.prototype = t.prototype,
            e.prototype = new o
    },
    __awaiter = this && this.__awaiter ||
    function(e, t, o, r) {
        return new(o || (o = Promise))(function(i, a) {
            function s(e) {
                try {
                    h(r.next(e))
                } catch (t) {
                    a(t)
                }
            }

            function n(e) {
                try {
                    h(r["throw"](e))
                } catch (t) {
                    a(t)
                }
            }

            function h(e) {
                e.done ? i(e.value) : new o(function(t) {
                    t(e.value)
                }).then(s, n)
            }
            h((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator ||
    function(e, t) {
        function o(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(o) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (i = 1, a && (s = a[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(s = s.call(a, o[1])).done) return s;
                switch (a = 0, s && (o = [0, s.value]), o[0]) {
                    case 0:
                    case 1:
                        s = o;
                        break;
                    case 4:
                        return h.label++, {
                            value: o[1],
                            done: !1
                        };
                    case 5:
                        h.label++,
                            a = o[1],
                            o = [0];
                        continue;
                    case 7:
                        o = h.ops.pop(),
                            h.trys.pop();
                        continue;
                    default:
                        if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                            h.label = o[1];
                            break
                        }
                        if (6 === o[0] && h.label < s[1]) {
                            h.label = s[1],
                                s = o;
                            break
                        }
                        if (s && h.label < s[2]) {
                            h.label = s[2],
                                h.ops.push(o);
                            break
                        }
                        s[2] && h.ops.pop(),
                            h.trys.pop();
                        continue
                }
                o = t.call(e, h)
            } catch (r) {
                o = [6, r],
                    a = 0
            } finally {
                i = s = 0
            }
            if (5 & o[0]) throw o[1];
            return {
                value: o[0] ? o[1] : void 0,
                done: !0
            }
        }
        var i, a, s, n, h = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return n = {
                next: o(0),
                "throw": o(1),
                "return": o(2)
            },
            "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }),
            n
    },
    Emiter = function() {
        function e() {
            this.maps = {},
                this.uid = 0,
                this._duringEmit = !1
        }
        return e.prototype.add = function(e, t, o, r, i) {
                o = o || null,
                    r = r || 0;
                var a = this.uid++,
                    s = this.maps[e] || [];
                return s.push([a, t, o, r, i]),
                    this.maps[e] = s,
                    s.sort(function(e, t) {
                        return e[3] < t[3]
                    }),
                    a
            },
            e.prototype.on = function(e, t, o, r) {
                return this.add(e, t, o, r, !1)
            },
            e.prototype.once = function(e, t, o, r) {
                return this.add(e, t, o, r, !0)
            },
            e.prototype.race = function(e, t, o, r) {
                for (var i = this,
                        a = [], s = !1, n = function(e) {
                            for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                            s = !0,
                                a.forEach(function(e) {
                                    return i.rm(e[0], e[1])
                                }),
                                t.apply(o, [e].concat(r))
                        },
                        h = 0, l = e; h < l.length; h++) {
                    var c = l[h];
                    if (s) break;
                    a.push([this.once(c, closure(n, c), o, r), c])
                }
            },
            e.prototype.rm = function(e, t) {
                for (var o = t ? [t] : Object.keys(this.maps), r = 0, i = o; r < i.length; r++) {
                    var a = i[r],
                        s = this.maps[a];
                    if (s) {
                        this._duringEmit && (this.maps[a] = s = s.concat());
                        for (var n = 0; n < s.length;) {
                            var h = s[n],
                                l = h[0];
                            h[1],
                                h[2],
                                h[3],
                                h[4];
                            if (l == e) return s.splice(n, 1), !0;
                            n++
                        }
                    }
                }
                return !1
            },
            e.prototype.rmall = function(e) {
                void 0 == e ? this.maps = {} : delete this.maps[e]
            },
            e.prototype.emit = function(t, o) {
                var r = this.maps[t];
                if (r && r.length > 0) {
                    for (var i = 0; i < r.length;) {
                        var a = r[i],
                            s = (a[0], a[1]),
                            n = a[2],
                            h = (a[3], a[4]);
                        h ? r.splice(i, 1) : i++,
                            this._duringEmit = !0;
                        var l = s.call(n, o);
                        if (this._duringEmit = !1, l == e.CONST["break"]) break
                    }
                    return !0
                }
                return !1
            },
            e.CONST = {
                "break": {}
            },
            e
    }();
__reflect(Emiter.prototype, "Emiter"),
    egret.Bitmap.prototype.pos = function(e, t, o, r) {
        this.x = e,
            this.y = t,
            this.width = o,
            this.height = r,
            this.anchorOffsetX = o / 2,
            this.anchorOffsetY = r / 2
    };
var GameScene = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.TryState = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            t.RankArr = [],
            t.ArrLoad = [],
            t.GuaiState = [],
            t.StoneState = [],
            t.CarPositionY = [],
            t.CarMoveState = [],
            t.HeroState = [],
            t.HeroNumState = [],
            t.HeroJumpState = [],
            t.HeroContactNum = [],
            t.HeroPointX1 = [100, 85, 95, 80, 85, 90, 80, 90, 120, 84, 144],
            t.HeroPointX2 = [110, 100, 110, 90, 93, 90, 95, 95, 154, 102, 154],
            t.HeroPositionX = [44, 70, 10, 140, 20, 64, 80, 130, 20, 135, 170],
            t.HeroPositionY = [10, 14, 14, 18, 6, 10, 14, 26, 8, 26, 22],
            t.RoleMoney = [0, 1e4, 3e4, 5e4, 1e5, 15e4, 2e5, 0, 0, 5e5, 1e6],
            t.NumLockTT = [],
            t.NumLockTT_S = [],
            t.HeroLayer = [],
            t.HeroFirst = [],
            t.PrizeImage = [],
            t.GuaiImage = [],
            t.LineImage = [],
            t.LoadImage = [],
            t.TreeImage = [],
            t.RoleImage = [],
            t.HeroImage = [],
            t.HeroImage2 = [],
            t.HeroImage3 = [],
            t.HeroImage4 = [],
            t.InterImage = [],
            t.FloorImage = [],
            t.ChooseImage = [],
            t.Trailing = [],
            t.NumLabel = [],
            t.UILabel = [],
            t.HeroName = [],
            t.RankNum = [],
            t.RankScore = [],
            t.HeroBody = [],
            t.HeroShape = [],
            t.StoneBody = [],
            t.StoneShape = [],
            t.ice = [],
            t.SlotState = [],
            t.SlotRole = [18, 0],
            t.SlotCoin = [0, 500, 1e3, 2e3, 3e3, 5e3],
            t.SlotImage = [],
            t.SlotItemImage = [
                [],
                [],
                []
            ],
            t.RankImage = [],
            t.RankImage2 = [],
            t.RankLabel = [],
            t.UserPlayerID = [],
            t.UserName = [],
            t.UserID = [],
            t.UserImage = [],
            t.UserScore = [],
            t.UserRole = [],
            t.UserLoadState = [],
            t.UserTexture = [],
            t.Connect = new GameConnect,
            t.LoadGameScore(),
            t.iPhoneW = t.Connect.GetiPhoneW(),
            t.PlatForm = t.Connect.GetPlatForm(),
            t.choose = 0,
            t.NewGame = 0,
            t.GameState = -1,
            t.UserRankNum = 0,
            t.NumStyleAD = 0,
            t.MoveCanNot = 0,
            t.NumShowShare = 0,
            t.VideoForPlay = 0,
            t.VideoState = 0,
            t.touchEnabled = !0,
            t.StageHeight = egret.MainContext.instance.stage.stageHeight,
            t.StageWidth = egret.MainContext.instance.stage.stageWidth,
            console.log("宽度" + t.StageWidth);
        var o = new egret.Timer(10);
        o.addEventListener(egret.TimerEvent.TIMER, t.TimerTick, t),
            o.start();
        var r = new egret.Timer(1e3);
        return r.addEventListener(egret.TimerEvent.TIMER, t.DrawAction, t),
            r.start(),
            t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.TouchBegin, t),
            t.addEventListener(egret.TouchEvent.TOUCH_MOVE, t.TouchMoved, t),
            t.addEventListener(egret.TouchEvent.TOUCH_END, t.TouchEnded, t),
            0 != t.iPhoneW && (t.x = t.iPhoneW),
            t.CreateWorld(),
            t.InitGame(),
            t
    }
    return __extends(t, e),
        t.prototype.InitGame = function() {
            if (this.PutThePicture(), 0 == this.choose) {
                this.RankPage = 0,
                    this.ShopNum = 0,
                    this.PlayState = 0,
                    this.ShopNumState = 0,
                    this.NumLoad = 0,
                    this.RankNow = 0,
                    this.DaoDa = -1,
                    this.NumFriends = this.Connect.getInviteCount(),
                    this.Connect.RequestUserData(),
                    this.InterImage[0].pos(568, 320, 1400, 640),
                    this.InterImage[1].pos(568, 130, 792, 166),
                    this.InterImage[2].pos(230, 570, 120, 110),
                    this.InterImage[3].pos(433, 570, 256, 110),
                    this.InterImage[4].pos(703, 570, 256, 110),
                    this.InterImage[5].alpha = 0,
                    this.InterImage[5].pos(790, 570, 120, 110),
                    this.InterImage[6].pos(906, 570, 120, 110),
                    this.InterImage[7].pos(906, 557, 75, 60),
                    this.InterImage[8].pos(906 - this.HeroPointX1[0] / 4, 573, 30, 30),
                    this.InterImage[9].pos(906 + this.HeroPointX2[0] / 4, 573, 30, 30),
                    this.InterImage[10].alpha = 0,
                    this.InterImage[10].pos(485, 214, 114, 65),
                    1 == this.PlatForm && (this.InterImage[11].visible = !1);
                this.InterImage[4].visible = !1;
                var e = 0,
                    t = 0;
                this.StageWidth < 1e3 ? (e = 400, t = 1050) : (t = 1050, e = 120),
                    this.InterImage[11].pos(t + this.iPhoneW, e, 120, 154),
                    0 == this.PlatForm && egret.Tween.get(this.InterImage[11], {
                        loop: !0
                    }).to({
                            scaleX: .95,
                            scaleY: .95
                        },
                        600).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        600),
                    egret.Tween.get(this.InterImage[1], {
                        loop: !0
                    }).to({
                            scaleX: .95,
                            scaleY: .95
                        },
                        450).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        80),
                    egret.Tween.get(this.InterImage[10], {
                        loop: !0
                    }).to({
                            alpha: 1
                        },
                        0).to({},
                        450).to({
                            alpha: 0
                        },
                        0).to({},
                        610);
                var o = this.Connect.getLoginDays();
                o >= 2 && 0 == this.NumLockTT[7] && (this.NumLockTT[7] = 1, this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Car Now !")),
                    o >= 3 && 0 == this.NumLockTT[8] && (this.NumLockTT[8] = 1, this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 500, "Unlock New Car Now !"))
            } else if (1 == this.choose) {
                this.ShopNum = 0,
                    this.NowMoney = 0,
                    this.BeginState = 0,
                    this.MapNum = 1,
                    this.worldStep = 35,
                    this.GameState = -1,
                    this.factor = 50,
                    this.DaoDa = -1,
                    this.CountDownStart = 1,
                    this.CountDownNum = 3,
                    this.MoveCanNot = 0,
                    this.MapAngle = 0,
                    this.NumScore = 0,
                    this.RankNow = 0,
                    this.NumLoad = 0,
                    this.PropNum = -1,
                    this.PropState = 0,
                    this.PropNumState = 0,
                    this.ShopNumState = 0,
                    this.world.gravity = [0, 0],
                    this.ice[0] = new p2.Material(1),
                    this.ice[1] = new p2.Material(2);
                var r = new p2.ContactMaterial(this.ice[0], this.ice[0]);
                r.friction = 0,
                    r.restitution = .5,
                    this.world.addContactMaterial(r);
                var i = new p2.ContactMaterial(this.ice[0], this.ice[1]);
                i.friction = 0,
                    i.restitution = 0,
                    this.world.addContactMaterial(i);
                for (var a = 0; 6 > a; a++) this.HeroState[a] = 0,
                    this.GuaiState[a] = 0,
                    this.StoneState[a] = 0,
                    this.HeroNumState[a] = -1,
                    this.HeroJumpState[a] = 0,
                    this.HeroContactNum[a] = 0;
                this.InterImage[0].pos(568, 320, this.StageWidth + 60, 640),
                    this.InterImage[1].pos(568, 37, 342, 14),
                    this.InterImage[2].pos(399, 36, 1, 8),
                    this.InterImage[2].anchorOffsetX = 0,
                    this.CreateRect(0, 640, 3200, 460, 1, 0, "herocheck_png");
                var s = [this.StageWidth / 2 + 750, this.StageWidth / 2 + 500, this.StageWidth / 2 + 250, this.StageWidth / 2, this.StageWidth / 2 - 250, this.StageWidth / 2 - 500],
                    n = 0;
                if (0 == this.UserRankNum) n = Math.floor(2 * Math.random() + 2);
                else {
                    n = this.UserRankNum - 1;
                    var h = new egret.Bitmap(RES.getRes("gametips_png"));
                    this.addChild(h),
                        h.pos(568, 130, 330, 88),
                        h.scaleX = .3,
                        h.scaleY = .3,
                        h.alpha = 0,
                        egret.Tween.get(h).to({
                                scaleX: 1,
                                scaleY: 1
                            },
                            500, egret.Ease.getBackOut(1)),
                        egret.Tween.get(h).to({
                                alpha: .9
                            },
                            400).to({},
                            2e3).to({
                                y: h.y - 60,
                                alpha: 0
                            },
                            500)
                }
                var l = [140, 140, 140, 140, 140, 140, 140, 140, 195, 140, 190],
                    c = [100, 105, 105, 90, 105, 90, 105, 95, 95, 95, 90];
                this.CreateHero(s[n], 410 - c[this.UserRole[0] - 1] / 2, l[this.UserRole[0] - 1], c[this.UserRole[0] - 1], 1, 0, "herocheck_png");
                for (var a = 0; 4 > a; a++) this.FloorImage[a].pos(this.HeroImage[0].x - this.StageWidth / 2 + 510 * a, 635, 512, 480);
                for (var a = 0; 2 > a; a++) this.TreeImage[a].pos(1e3 * a, 290 + 173 * a, 1060, 500);
                this.HeroLayer[0].x = s[n],
                    this.HeroLayer[0].y = this.HeroImage[0].y,
                    this.HeroLayer[0].width = l[this.UserRole[0] - 1],
                    this.HeroLayer[0].height = c[this.UserRole[0] - 1],
                    this.HeroLayer[0].anchorOffsetX = this.HeroLayer[0].width / 2,
                    this.HeroLayer[0].anchorOffsetY = this.HeroLayer[0].height / 2,
                    s.splice(n, 1),
                    s.sort(this.randomSort);
                for (var a = 1; 6 > a; a++) this.CreateHero(s[a - 1], 410 - c[this.UserRole[a] - 1] / 2, l[this.UserRole[a] - 1], c[this.UserRole[a] - 1], 1, a, "herocheck_png"),
                    this.HeroLayer[a].x = s[a - 1],
                    this.HeroLayer[a].y = this.HeroImage[a].y,
                    this.HeroLayer[a].width = l[this.UserRole[a] - 1],
                    this.HeroLayer[a].height = c[this.UserRole[a] - 1],
                    this.HeroLayer[a].anchorOffsetX = this.HeroLayer[a].width / 2,
                    this.HeroLayer[a].anchorOffsetY = this.HeroLayer[a].height / 2;
                for (var a = 6; 12 > a; a++) 8 == this.UserRole[a - 6] ? (this.HeroImage3[a - 6].pos(l[this.UserRole[a - 6] - 1] / 2 - this.HeroPointX1[this.UserRole[a - 6] - 1] / 2, this.HeroLayer[a - 6].height - 35, 70, 70), this.HeroImage4[a - 6].pos(l[this.UserRole[a - 6] - 1] / 2 + this.HeroPointX2[this.UserRole[a - 6] - 1] / 2, this.HeroLayer[a - 6].height - 25, 50, 50)) : (this.HeroImage3[a - 6].pos(l[this.UserRole[a - 6] - 1] / 2 - this.HeroPointX1[this.UserRole[a - 6] - 1] / 2, this.HeroLayer[a - 6].height - 30, 60, 60), this.HeroImage4[a - 6].pos(l[this.UserRole[a - 6] - 1] / 2 + this.HeroPointX2[this.UserRole[a - 6] - 1] / 2, this.HeroLayer[a - 6].height - 30, 60, 60)),
                    9 == this.UserRole[a - 6] || 11 == this.UserRole[a - 6] ? this.HeroImage[a].pos(l[this.UserRole[a - 6] - 1] / 2, this.HeroImage3[a - 6].y - 30, 210, 120) : 8 == this.UserRole[-5] ? this.HeroImage[a].pos(l[this.UserRole[a - 6] - 1] / 2, this.HeroImage3[a - 6].y - 35, 150, 120) : this.HeroImage[a].pos(l[this.UserRole[a - 6] - 1] / 2, this.HeroImage3[a - 6].y - 30, 150, 120),
                    this.CarPositionY[a - 6] = this.HeroImage[a].y;
                for (var a = 0; 6 > a; a++) 9 == this.UserRole[a] || 11 == this.UserRole[a] ? this.LoadImage[a].pos(this.HeroLayer[a].x, 410, 220, 30) : this.LoadImage[a].pos(this.HeroLayer[a].x, 410, 164, 30);
                for (var a = 0; 6 > a; a++) this.HeroFirst[a].visible = !1,
                    this.HeroFirst[a].pos(-22 + this.HeroPositionX[this.UserRole[a] - 1], -28 + this.HeroPositionY[this.UserRole[a] - 1], 44, 57);
                for (var a = 1; 6 > a; a++) this.HeroName[a].size = 20,
                    this.HeroName[a].textColor = 0,
                    this.HeroName[a].bold = !0,
                    this.HeroName[a].text = this.UserName[a].nickName.substring(0, 9),
                    this.HeroName[a].x = this.HeroImage[a].x + 10,
                    this.HeroName[a].y = this.HeroImage[a].y - this.HeroImage[a].height - 9,
                    this.HeroName[a].anchorOffsetX = this.HeroName[a].width / 2,
                    this.HeroName[a].anchorOffsetY = this.HeroName[a].height / 2;
                for (var a = 1; 6 > a; a++) this.HeroImage2[a].pos(this.HeroName[a].x - this.HeroName[a].width / 2 - 33, this.HeroImage[a].y - this.HeroImage[a].height - 9, 36, 36);
                this.MapGroup.x = 568,
                    this.MapGroup.y = 320,
                    this.MapGroup.anchorOffsetX = 568,
                    this.MapGroup.anchorOffsetY = 320;
                for (var a = 0; 6 > a; a++) this.RankImage[a].pos(1030 + this.iPhoneW, 25 + 33 * a, 192, 30);
                for (var a = 0; 6 > a; a++) this.RankScore[a].text = this.UserName[a].nickName.substring(0, 13),
                    this.RankScore[a].size = 20,
                    this.RankScore[a].textColor = 0,
                    this.RankScore[a].x = 970 + this.iPhoneW,
                    this.RankScore[a].y = 25 + 33 * a,
                    this.RankScore[a].anchorOffsetX = 0,
                    this.RankScore[a].anchorOffsetY = this.RankScore[a].height / 2;
                for (var a = 1; 6 > a; a++) this.RankNum[a].text = a + 1 + "",
                    this.RankNum[a].size = 20,
                    this.RankNum[a].textColor = 0,
                    this.RankNum[a].x = 950 + this.iPhoneW,
                    this.RankNum[a].y = 25 + 33 * a,
                    this.RankNum[a].anchorOffsetX = this.RankNum[a].width / 2,
                    this.RankNum[a].anchorOffsetY = this.RankNum[a].height / 2;
                this.CountLabel.font = RES.getRes("numimage_fnt"),
                    this.CountLabel.x = 568,
                    this.CountLabel.y = 220,
                    this.CountLabel.scaleX = 1.3,
                    this.CountLabel.scaleY = 1.3,
                    this.TheFirst.pos(954 + this.iPhoneW, 23, 16, 19),
                    this.SelfImage.pos(920 + this.iPhoneW, this.RankScore[0].y, 20, 20),
                    this.PropImage.pos(-568, 160, 120, 48),
                    this.PropImage.visible = !1,
                    this.RankArr = [{
                            id: 0,
                            x: this.HeroBody[0].position[0]
                        },
                        {
                            id: 1,
                            x: this.HeroBody[1].position[0]
                        },
                        {
                            id: 2,
                            x: this.HeroBody[2].position[0]
                        },
                        {
                            id: 3,
                            x: this.HeroBody[3].position[0]
                        },
                        {
                            id: 4,
                            x: this.HeroBody[4].position[0]
                        },
                        {
                            id: 5,
                            x: this.HeroBody[5].position[0]
                        }
                    ];
                for (var a = 0; 6 > a; a++) this.Trailing[a].x = this.HeroImage[a].x - this.HeroImage[a + 6].width / 2,
                    this.Trailing[a].emitterY = this.HeroImage[a].y,
                    this.Trailing[a + 6].x = this.HeroImage[a].x - this.HeroImage[a].width / 2 + 10,
                    this.Trailing[a + 6].y = this.HeroImage[a].y + this.HeroImage[a].height / 2 + 5;
                this.MapLayer.x = 568 - this.HeroImage[0].x,
                    this.MapLayer.y = 360 - this.HeroImage[0].y,
                    this.RankIng(),
                    egret.Tween.get(this.MapGroup).to({
                            rotation: 8
                        },
                        600);
                var g = RES.getRes("soundjump2_mp3");
                g.play(0, 1)
            }
        },
        t.prototype.LoadResource = function() {
            if (0 == this.choose) this.InterImage[0] = new egret.Bitmap(RES.getRes("loading_png")),
                this.InterImage[1] = new egret.Bitmap(RES.getRes("title_png")),
                this.InterImage[2] = new egret.Bitmap(RES.getRes("titlebtn4_png")),
                this.InterImage[3] = new egret.Bitmap(RES.getRes("titlebtn3_png")),
                this.InterImage[4] = new egret.Bitmap(RES.getRes("titlebtn1_png")),
                this.InterImage[5] = new egret.Bitmap(RES.getRes("titlebtn4_png")),
                this.InterImage[6] = new egret.Bitmap(RES.getRes("titlebtn2_png")),
                this.InterImage[7] = new egret.Bitmap(RES.getRes("hero1_png")),
                this.InterImage[8] = new egret.Bitmap(RES.getRes("wheel1_png")),
                this.InterImage[9] = new egret.Bitmap(RES.getRes("wheel1_png")),
                this.InterImage[10] = new egret.Bitmap(RES.getRes("titlelight_png")),
                this.InterImage[11] = new egret.Bitmap(RES.getRes("moregame" + (this.NewGame % 3 + 1) + "_png")),
                this.Trailing[6] = new particle.GravityParticleSystem(RES.getRes("texiao1_png"), RES.getRes("texiao1_json"));
            else if (100 == this.choose);
            else if (1 == this.choose) {
                this.MapGroup = new egret.DisplayObjectContainer,
                    this.MapLayer = new egret.DisplayObjectContainer,
                    this.InterImage[0] = new egret.Bitmap(RES.getRes("gamebg_png")),
                    this.InterImage[1] = new egret.Bitmap(RES.getRes("progress1_png")),
                    this.InterImage[2] = new egret.Bitmap(RES.getRes("progress2_png"));
                for (var e = 0; 2 > e; e++) this.TreeImage[e] = new egret.Bitmap(RES.getRes("stone_png"));
                for (var e = 0; 6 > e; e++) this.RankImage[e] = new egret.Bitmap(RES.getRes("rankbg" + this.UserRole[e] + "_png"));
                this.TheFirst = new egret.Bitmap(RES.getRes("first_png")),
                    this.SelfImage = new egret.Bitmap(RES.getRes("firstmark_png"));
                for (var e = 0; 4 > e; e++) this.FloorImage[e] = new egret.Bitmap(RES.getRes("gamefloor_png"));
                for (var e = 0; 6 > e; e++) this.RankScore[e] = new egret.TextField,
                    this.RankNum[e] = new egret.TextField;
                for (var e = 1; 6 > e; e++) this.HeroImage2[e] = new egret.Bitmap(RES.getRes("flag" + this.UserName[e].Country + "_png")),
                    this.HeroName[e] = new egret.TextField;
                for (var e = 0; 6 > e; e++) this.HeroFirst[e] = new egret.Bitmap(RES.getRes("firstflag1_png"));
                0 == this.PlayState ? this.HeroImage[6] = new egret.Bitmap(RES.getRes("hero" + this.NowHeroTT + "_png")) : this.HeroImage[6] = new egret.Bitmap(RES.getRes("hero" + this.PlayState + "_png")),
                    this.Trailing[0] = new particle.GravityParticleSystem(RES.getRes("trailing_png"), RES.getRes("trailing_json"));
                for (var e = 7; 12 > e; e++) this.HeroImage[e] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[e - 6] + "_png")),
                    this.Trailing[e - 6] = new particle.GravityParticleSystem(RES.getRes("trailing_png"), RES.getRes("trailing_json"));
                for (var e = 6; 12 > e; e++) this.Trailing[e] = new particle.GravityParticleSystem(RES.getRes("dust_png"), RES.getRes("dust_json"));
                for (var e = 0; 6 > e; e++) this.HeroLayer[e] = new egret.DisplayObjectContainer,
                    this.HeroImage3[e] = new egret.Bitmap(RES.getRes("wheel" + this.UserRole[e] + "_png")),
                    this.HeroImage4[e] = new egret.Bitmap(RES.getRes("wheel" + this.UserRole[e] + "_png")),
                    this.LoadImage[e] = new egret.Bitmap(RES.getRes("shadow_png"));
                this.PropImage = new egret.Bitmap(RES.getRes("gameitem_png")),
                    this.System = new particle.GravityParticleSystem(RES.getRes("speedup_png"), RES.getRes("speedup_json")),
                    this.CountLabel = new egret.BitmapText
            }
        },
        t.prototype.PutThePicture = function() {
            if (this.LoadResource(), 0 == this.choose) {
                for (var e = 0; 12 > e; e++) this.addChild(this.InterImage[e]);
                this.addChild(this.Trailing[6])
            } else if (100 == this.choose);
            else if (1 == this.choose) {
                this.addChild(this.InterImage[0]);
                for (var e = 0; 2 > e; e++) this.addChild(this.TreeImage[e]);
                this.addChild(this.MapGroup),
                    this.MapGroup.addChild(this.MapLayer);
                for (var e = 1; 3 > e; e++) this.addChild(this.InterImage[e]);
                this.addChild(this.CountLabel),
                    this.MapLayer.addChild(this.PropImage);
                for (var e = 0; 6 > e; e++) this.addChild(this.RankImage[e]);
                this.addChild(this.TheFirst),
                    this.addChild(this.SelfImage);
                for (var e = 0; 6 > e; e++) this.addChild(this.RankScore[e]);
                for (var e = 0; 6 > e; e++) this.addChild(this.RankNum[e]);
                for (var e = 1; 6 > e; e++) this.MapLayer.addChild(this.HeroImage2[e]);
                for (var e = 1; 6 > e; e++) this.MapLayer.addChild(this.HeroName[e]);
                for (var e = 0; 4 > e; e++) this.MapLayer.addChild(this.FloorImage[e]);
                for (var e = 0; 6 > e; e++) this.MapLayer.addChild(this.Trailing[e]);
                this.MapLayer.addChild(this.System);
                for (var e = 0; 6 > e; e++) this.MapLayer.addChild(this.LoadImage[e]),
                    this.MapLayer.addChild(this.HeroLayer[e]);
                for (var e = 0; 6 > e; e++) this.HeroLayer[e].addChild(this.HeroFirst[e]);
                for (var e = 6; 12 > e; e++) this.MapLayer.addChild(this.Trailing[e]);
                for (var e = 6; 12 > e; e++) this.HeroLayer[e - 6].addChild(this.HeroImage[e]);
                for (var e = 0; 6 > e; e++) this.HeroLayer[e].addChild(this.HeroImage3[e]),
                    this.HeroLayer[e].addChild(this.HeroImage4[e])
            }
        },
        t.prototype.ReleaseGame = function() {
            0 == this.choose || 1 == this.choose && (this.Soundbg&&this.Soundbg.stop(), this.world.clear()),
                egret.Tween.removeAllTweens(),
                this.removeChildren()
        },
        t.prototype.ShowHero = function() {
            this.RankNow = 1,
                this.BuyHero = this.NowHeroTT,
                console.log(this.NowHeroTT),
                8 == this.BuyHero ? this.ShopNum = 2 : 9 == this.BuyHero ? this.ShopNum = 3 : this.BuyHero >= 3 && this.BuyHero < 10 ? this.ShopNum = this.BuyHero + 2 : (1 == this.BuyHero || 10 == this.BuyHero || 11 == this.BuyHero) && (this.ShopNum = this.BuyHero),
                console.log(this.ShopNum),
                this.RankLayer = new egret.DisplayObjectContainer,
                this.Scroller = new egret.ScrollView;
            var e = 0;
            this.StageWidth < 950 && (e = 1),
                this.ChooseImage[0] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.ChooseImage[1] = new egret.Bitmap(RES.getRes("shopbg1_png")),
                this.ChooseImage[2] = new egret.Bitmap(RES.getRes("shopbtn1_png")),
                this.ChooseImage[3] = new egret.Bitmap(RES.getRes("shopbtn2_png")),
                this.ChooseImage[4] = new egret.Bitmap(RES.getRes("overbtn_png")),
                this.ChooseImage[5] = new egret.Bitmap(RES.getRes("titlebtn5_png")),
                this.ChooseImage[6] = new egret.Bitmap(RES.getRes("shopbg2_png")),
                this.ChooseImage[7] = new egret.Bitmap(RES.getRes("shopbg2_png")),
                this.ChooseImage[8] = new egret.Bitmap(RES.getRes("shoptap_png")),
                this.ChooseImage[9] = new egret.Bitmap(RES.getRes("titlebtn6_png")),
                1 == e ? this.ChooseImage[10] = new egret.Bitmap(RES.getRes("shopbtn6_png")) : this.ChooseImage[10] = new egret.Bitmap(RES.getRes("shopbtn5_png")),
                this.ChooseImage[11] = new egret.Bitmap(RES.getRes("shopfree_png")),
                this.ChooseImage[12] = new egret.Bitmap(RES.getRes("logintitle1_png"));
            for (var t = 0; 11 > t; t++) this.RoleImage[t] = new egret.Bitmap(RES.getRes("role" + (t + 1) + "_png")),
                this.HeroImage4[t] = new egret.Bitmap(RES.getRes("shadow_png")),
                this.HeroImage2[t] = new egret.Bitmap(RES.getRes("rolewheel" + (t + 1) + "_png")),
                this.HeroImage3[t] = new egret.Bitmap(RES.getRes("rolewheel" + (t + 1) + "_png"));
            for (var t = 0; 13 > t; t++) this.addChild(this.ChooseImage[t]);
            this.addChildAt(this.ChooseImage[6], this.getChildIndex(this.ChooseImage[2])),
                this.addChildAt(this.ChooseImage[7], this.getChildIndex(this.ChooseImage[2])),
                this.addChildAt(this.Scroller, this.getChildIndex(this.ChooseImage[2]));
            for (var t = 0; 11 > t; t++) this.RankLayer.addChild(this.RoleImage[t]),
                this.RankLayer.addChild(this.HeroImage4[t]),
                this.RankLayer.addChild(this.HeroImage2[t]),
                this.RankLayer.addChild(this.HeroImage3[t]);
            this.ChooseImage[0].pos(568, 320, this.StageWidth + 40, 660),
                this.ChooseImage[1].pos(568, 320, 622, 520),
                this.ChooseImage[2].pos(310, 280, 45, 70),
                this.ChooseImage[3].pos(826, 280, 45, 70),
                this.ChooseImage[4].pos(363, 510, 120, 110),
                this.ChooseImage[5].pos(568, 510, 286, 110),
                this.ChooseImage[6].pos(272, 320, 30, 520),
                this.ChooseImage[7].scaleX = -1,
                this.ChooseImage[7].pos(864, 320, 30, 520),
                this.ChooseImage[8].pos(828, 173, 100, 46),
                this.ChooseImage[9].pos(773, 510, 120, 110),
                1 == e ? this.ChooseImage[10].pos(1080 + this.iPhoneW, 105, 90, 90) : this.ChooseImage[10].pos(1030 + this.iPhoneW, 170, 166, 90),
                this.ChooseImage[11].scaleX = 0,
                this.ChooseImage[11].scaleY = 0,
                this.ChooseImage[11].pos(350, 130, 95, 98),
                this.ChooseImage[12].visible = !1,
                this.ChooseImage[12].pos(568, 495, 250, 50);
            for (var t = 0; 11 > t; t++) this.RoleImage[t].rotation = -.5,
                0 == t ? this.RoleImage[t].pos(308, 140, 300, 240) : 7 == t ? this.RoleImage[t].pos(908, 140, 300, 240) : 8 == t ? this.RoleImage[t].pos(1508, 140, 420, 240) : 10 == t ? this.RoleImage[t].pos(308 + 600 * t, 140, 420, 240) : 9 == t ? this.RoleImage[t].pos(308 + 600 * t, 140, 300, 240) : this.RoleImage[t].pos(308 + 600 * (t + 2), 140, 300, 240),
                8 == t || 10 == t ? this.HeroImage4[t].pos(this.RoleImage[t].x + 2, 256, 420, 30) : 7 == t ? this.HeroImage4[t].pos(this.RoleImage[t].x, 266, 300, 30) : this.HeroImage4[t].pos(this.RoleImage[t].x, 256, 300, 30),
                7 == t ? (this.HeroImage2[t].pos(this.RoleImage[t].x - this.HeroPointX1[t], 205, 130, 130), this.HeroImage3[t].pos(this.RoleImage[t].x + this.HeroPointX2[t], 225, 90, 90)) : (this.HeroImage2[t].pos(this.RoleImage[t].x - this.HeroPointX1[t], 205, 110, 110), this.HeroImage3[t].pos(this.RoleImage[t].x + this.HeroPointX2[t], 205, 110, 110));
            egret.Tween.get(this.ChooseImage[10], {
                    loop: !0
                }).to({
                        scaleX: 1.1,
                        scaleY: 1.1
                    },
                    80).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    450),
                this.ScoreLabel = new egret.BitmapText,
                this.addChild(this.ScoreLabel),
                this.ScoreLabel.font = RES.getRes("numimage_fnt"),
                this.ScoreLabel.text = "x" + this.NumMoneyTT,
                1 == e ? (this.ScoreLabel.x = 568, this.ScoreLabel.y = 30, this.ScoreLabel.scaleX = .6, this.ScoreLabel.scaleY = .6) : (this.ScoreLabel.x = 1030 + this.iPhoneW, this.ScoreLabel.y = 90, this.ScoreLabel.scaleX = .6, this.ScoreLabel.scaleY = .6),
                this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2,
                this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2,
                this.FriendsLabel = new egret.BitmapText,
                this.addChild(this.FriendsLabel),
                this.FriendsLabel.font = RES.getRes("numimage_fnt"),
                this.FriendsLabel.text = "12",
                this.FriendsLabel.x = 568,
                this.FriendsLabel.y = 500,
                this.FriendsLabel.scaleX = .65,
                this.FriendsLabel.scaleY = .65,
                this.FriendsLabel.visible = !1,
                this.FriendsLabel.anchorOffsetY = this.FriendsLabel.height / 2,
                this.NumLabel[3] = new egret.BitmapText,
                this.addChild(this.NumLabel[3]),
                this.NumLabel[3].font = RES.getRes("numimage_fnt"),
                this.NumLabel[3].text = this.ShopNum + "l11",
                this.NumLabel[3].x = 872,
                this.NumLabel[3].y = 172,
                this.NumLabel[3].scaleX = .5,
                this.NumLabel[3].scaleY = .5,
                this.NumLabel[3].anchorOffsetX = this.NumLabel[3].width,
                this.NumLabel[3].anchorOffsetY = this.NumLabel[3].height / 2,
                this.UILabel[0] = new egret.TextField,
                this.UILabel[0].x = 568,
                this.UILabel[0].y = 85,
                this.UILabel[0].text = "Choose Your Car",
                this.UILabel[0].stroke = 2,
                this.UILabel[0].strokeColor = 0,
                this.UILabel[0].bold = !0,
                this.UILabel[0].size = 30,
                this.UILabel[0].textColor = 16777215,
                this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2,
                this.addChild(this.UILabel[0]),
                this.UILabel[1] = new egret.TextField,
                this.UILabel[1].x = 568,
                this.UILabel[1].y = 420,
                this.UILabel[1].text = "00",
                this.UILabel[1].stroke = 2,
                this.UILabel[1].strokeColor = 0,
                this.UILabel[1].bold = !0,
                this.UILabel[1].size = 26,
                this.UILabel[1].textColor = 2490318,
                this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2,
                this.UILabel[1].anchorOffsetY = this.UILabel[1].height / 2,
                this.UILabel[1].visible = !1,
                this.addChild(this.UILabel[1]),
                this.RankLayer.width = 6800,
                this.RankLayer.height = 295,
                this.Scroller.setContent(this.RankLayer),
                this.Scroller.x = 261,
                this.Scroller.y = 130,
                this.Scroller.width = 616,
                this.Scroller.height = 295,
                this.Scroller.horizontalScrollPolicy = "off",
                this.Scroller.setScrollLeft(600 * (this.ShopNum - 1));
            for (var t = 0; 11 > t; t++) this.ShowAnimation(t)
        },
        t.prototype.ShowAnimation = function(e) {
            egret.Tween.get(this.RoleImage[e], {
                    loop: !0
                }).to({
                        y: 146,
                        rotation: .2
                    },
                    400).to({
                        y: 140,
                        rotation: -.5
                    },
                    200),
                egret.Tween.get(this.HeroImage2[e], {
                    loop: !0
                }).to({
                        rotation: 360
                    },
                    2e3),
                7 == e ? egret.Tween.get(this.HeroImage3[e], {
                    loop: !0
                }).to({
                        rotation: 360
                    },
                    1400) : egret.Tween.get(this.HeroImage3[e], {
                    loop: !0
                }).to({
                        rotation: 360
                    },
                    2e3),
                egret.Tween.get(this.HeroImage4[e], {
                    loop: !0
                }).to({
                        scaleX: 1.03,
                        scaleY: 1.05
                    },
                    400).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    200)
        },
        t.prototype.StopAnimation = function(e) {
            egret.Tween.removeTweens(this.RoleImage[e]),
                egret.Tween.removeTweens(this.HeroImage2[e]),
                egret.Tween.removeTweens(this.HeroImage3[e]),
                egret.Tween.removeTweens(this.HeroImage4[e])
        },
        t.prototype.EndHero = function() {
            this.RankNow = 0;
            for (var e = 0; 11 > e; e++) this.StopAnimation(e);
            for (var e = 0; 13 > e; e++) this.removeChild(this.ChooseImage[e]);
            this.removeChild(this.NumLabel[3]),
                this.removeChild(this.FriendsLabel),
                this.removeChild(this.ScoreLabel),
                this.removeChild(this.UILabel[0]),
                this.removeChild(this.UILabel[1]),
                this.RankLayer.removeChildren(),
                this.removeChild(this.Scroller)
        },
        t.prototype.ShowADNow = function(e) {
            0 == e ? 1 == platform.hasRAD() ? (this.Connect.ShowADVideo(), this.VideoState = -1) : this.ShowTipView("Ads is not ready") : 1 == e ? (this.NumStyleAD++, 1 == platform.hasIAD() ? (this.NumTimeAD = 0, this.Connect.ShowADChaping()) : console.log("无插屏广告")) : this.Connect.ShowADChaping()
        },
        t.prototype.CheckADVideo = function() {
            if (-1 == this.VideoState)
                if (this.VideoState = this.Connect.GetADVideoState(), console.log(this.VideoState + "LALA"), 0 == this.VideoState);
                else if (1 == this.VideoState)
                if (1 == this.RankNow)
                    if (1 == this.VideoForPlay) {
                        if (0 == this.choose)
                            for (var e = 1; 10 > e; e++) this.InterImage[e].visible = !1;
                        else this.EndResult();
                        this.TryState[this.BuyHero - 1] = 1,
                            this.PlayState = this.BuyHero,
                            this.EndHero(),
                            this.ShowLoading()
                    } else this.NumMoneyTT += 5e3,
                        1 == this.choose && (this.CountLabel.text = "x " + this.NumMoneyTT, this.CountLabel.anchorOffsetX = 0, this.CountLabel.anchorOffsetY = this.CountLabel.height / 2),
                        this.ScoreLabel.text = "x" + this.NumMoneyTT,
                        this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2,
                        this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2,
                        egret.setTimeout(this.ShowTipView, this, 800, "You get $5000"),
                        this.SaveGameScore();
            else 2 == this.GameState ? egret.setTimeout(this.TapSlot, this, 100) : (this.NumMoneyTT += 5e3, this.SaveGameScore())
        },
        t.prototype.ShowRank = function() {
            var e = this;
            this.RankNow = 2,
                this.RankLayer = new egret.DisplayObjectContainer,
                this.Scroller = new egret.ScrollView,
                this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.RankImage[1] = new egret.Bitmap(RES.getRes("overbtn_png")),
                this.RankImage[2] = new egret.Bitmap(RES.getRes("ranklist2_png")),
                this.RankImage[3] = new egret.Bitmap(RES.getRes("rankbtn1_png")),
                this.RankImage[4] = new egret.Bitmap(RES.getRes("ranklist1_png")),
                this.RankImage[5] = new egret.Bitmap(RES.getRes("ranklist1_png")),
                this.RankImage[5].scaleX = -1;
            for (var t = 0; 6 > t; t++) this.addChild(this.RankImage[t]);
            this.RankImage[0].visible = !1,
                this.RankImage[0].pos(568, 320, this.StageWidth + 20, this.StageHeight + 20),
                this.RankImage[1].pos(80 - this.iPhoneW, 570, 120, 110),
                this.RankImage[2].pos(602, 330, 550, 590),
                this.RankImage[3].pos(280, 198, 70, 326),
                this.RankImage[4].pos(327, 330, 30, 590),
                this.RankImage[5].pos(877, 330, 30, 590),
                1 == this.RankPage && (this.RankImage[3].texture = RES.getRes("rankbtn2_png")),
                this.ScoreLabel = new egret.BitmapText,
                this.addChild(this.ScoreLabel),
                this.ScoreLabel.font = RES.getRes("numimage_fnt"),
                this.ScoreLabel.text = "e" + this.NumScoreTT,
                this.ScoreLabel.x = 1120 + this.iPhoneW,
                this.ScoreLabel.y = 60,
                this.ScoreLabel.scaleX = .7,
                this.ScoreLabel.scaleY = .7,
                this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width,
                this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
            var o = this.Connect.GetMyID();
            if (0 == this.RankPage) var r = this.Connect.GetUserName(1),
                i = this.Connect.GetUserImage(1),
                a = this.Connect.GetUserScore(1),
                s = this.Connect.GetUserID(1);
            else var r = this.Connect.GetUserName(2),
                i = this.Connect.GetUserImage(2),
                a = this.Connect.GetUserScore(2),
                s = this.Connect.GetUserID(2);
            this.UserPlayerID = s;
            for (var n, h, l, c, g, u = function(t) {
                        n = new egret.Bitmap(RES.getRes("rankitembg1_png")),
                            p.RankLayer.addChild(n),
                            n.pos(320, 90 * t, 500, 90),
                            3 > t ? (h = new egret.Bitmap(RES.getRes("rankview" + (t + 1) + "_png")), p.RankLayer.addChild(h), h.pos(105, 90 * t, 50, 50)) : (l = new egret.BitmapText, p.RankLayer.addChild(l), l.font = RES.getRes("numimage_fnt"), l.x = 105, l.y = 90 * t, l.text = t + 1 + "", l.scaleX = .6, l.scaleY = .6, l.anchorOffsetX = l.width / 2, l.anchorOffsetY = l.height / 2);
                        var u = new egret.Bitmap;
                        p.RankLayer.addChild(u),
                            u.pos(180, 90 * t, 66, 66);
                        var m = new egret.Bitmap(RES.getRes("rankmask1_png"));
                        p.RankLayer.addChild(m),
                            m.pos(180, 90 * t, 68, 68),
                            RES.getResByUrl(i[t],
                                function(o) {
                                    var r = new egret.Shape;
                                    e.RankLayer.addChild(r),
                                        r.graphics.beginFill(16777215),
                                        r.graphics.drawCircle(180, 90 * t, 34),
                                        r.graphics.endFill(),
                                        u.texture = o,
                                        u.mask = r
                                },
                                p, RES.ResourceItem.TYPE_IMAGE),
                            c = new egret.TextField,
                            p.RankLayer.addChild(c),
                            c.x = 230,
                            c.y = 90 * t,
                            c.size = 22,
                            c.textColor = 16777215,
                            c.text = "" + r[t],
                            c.width > 180 && (c.width = 180),
                            c.wordWrap = !0,
                            c.anchorOffsetY = c.height / 2,
                            g = new egret.BitmapText,
                            p.RankLayer.addChild(g),
                            g.font = RES.getRes("numimage_fnt"),
                            g.x = 470,
                            g.y = 90 * t,
                            g.scaleX = .5,
                            g.scaleY = .5,
                            g.text = "e" + a[t],
                            g.anchorOffsetX = g.width,
                            g.anchorOffsetY = g.height / 2,
                            p.RankImage2[t] = new egret.Bitmap(RES.getRes("rankbtn3_png")),
                            p.RankLayer.addChild(p.RankImage2[t]),
                            p.RankImage2[t].pos(520, 90 * t, 80, 80),
                            p.RankImage2[t].name = t + "",
                            p.RankImage2[t].touchEnabled = !0,
                            p.RankImage2[t].addEventListener(egret.TouchEvent.TOUCH_BEGIN, p.EndRankBegin, p),
                            p.RankImage2[t].addEventListener(egret.TouchEvent.TOUCH_END, p.EndRankEnd, p),
                            (void 0 != s || null != s) && s[t] == o && (p.RankImage2[t].texture = RES.getRes("rankbtn4_png"))
                    },
                    p = this, t = 0; t < r.length; t++) u(t);
            var m = new egret.Bitmap(RES.getRes("rankitembg2_png"));
            this.RankLayer.addChild(m),
                m.pos(320, 90 * r.length, 500, 90),
                m.name = "rankshare",
                m.touchEnabled = !0,
                m.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.EndRankBegin, this),
                m.addEventListener(egret.TouchEvent.TOUCH_END, this.EndRankEnd, this),
                this.RankLayer.x = 0,
                this.RankLayer.y = 50,
                this.RankLayer.width = 600,
                this.RankLayer.height = 90 * (r.length + 1),
                this.Scroller.x = 283,
                this.Scroller.y = 62,
                this.Scroller.width = 640,
                this.Scroller.height = 530,
                this.Scroller.setContent(this.RankLayer),
                this.addChild(this.Scroller)
        },
        t.prototype.CloseRank = function() {
            for (var e = 0; 6 > e; e++) this.removeChild(this.RankImage[e]);
            this.removeChild(this.Scroller),
                this.removeChild(this.ScoreLabel),
                this.RankLayer.removeChildren()
        },
        t.prototype.EndRankBegin = function(e) {
            var t = this;
            if (5 != this.SlotNow) {
                var o = e.target;
                this.SetColor(o, 2),
                    egret.setTimeout(function() {
                            t.SetColor(o, 1)
                        },
                        this, 200),
                    e.stopPropagation();
                var r = RES.getRes("soundpress_mp3");
                r.play(0, 1)
            }
        },
        t.prototype.EndRankEnd = function(e) {
            if (5 != this.SlotNow) {
                var t = e.target;
                if ("rankshare" == t.name) this.Connect.showChoose();
                else {
                    var o = +t.name,
                        r = this.Connect.GetMyID();
                    this.UserPlayerID[o] == r ? this.Connect.showChoose() : this.Connect.ChallengeGame(this.UserPlayerID[o])
                }
            }
        },
        t.prototype.ShowTipView = function(e) {
            var t = new egret.Bitmap(RES.getRes("showtips_png"));
            this.addChild(t),
                t.alpha = 0,
                t.scaleX = .3,
                t.scaleY = .3,
                t.pos(568, 300, 540, 80);
            var o = new egret.TextField;
            this.addChild(o),
                o.size = 32,
                o.x = 568,
                o.y = 295,
                o.text = e,
                o.bold = !0,
                o.textColor = 0,
                o.alpha = 0,
                o.scaleX = .3,
                o.scaleY = .3,
                o.anchorOffsetX = o.width / 2,
                o.anchorOffsetY = o.height / 2,
                egret.Tween.get(t).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    400, egret.Ease.getBackOut(1)),
                egret.Tween.get(o).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    400, egret.Ease.getBackOut(1)),
                egret.Tween.get(t).to({
                        alpha: 1
                    },
                    300).to({},
                    800).to({
                        y: t.y - 120,
                        alpha: 0
                    },
                    500),
                egret.Tween.get(o).to({
                        alpha: 1
                    },
                    300).to({},
                    800).to({
                        y: o.y - 120,
                        alpha: 0
                    },
                    500);
            var r = RES.getRes("soundwarn_mp3");
            r.play(0, 1)
        },
        t.prototype.CreateWorld = function() {
            this.world = new p2.World({
                    gravity: [0, 0]
                }),
                this.world.on("beginContact", this.BeginContact, this),
                this.world.on("endContact", this.EndContact, this),
                egret.Ticker.getInstance().register(function(e) {
                        this.world.step(this.worldStep / 1e3);
                        for (var t = this.world.bodies.length,
                                o = 0; t > o; o++) {
                            var r = this.world.bodies[o],
                                i = r.displays[0];
                            i && (i.x = r.position[0] * this.factor, i.y = this.StageHeight - r.position[1] * this.factor, i.rotation = 360 - 180 * r.angle / Math.PI)
                        }
                        if (1 == this.choose && 0 == this.GameState) {
                            this.DrawProp(),
                                this.DaoDa < 2 && this.RankIng(),
                                1 == this.MapAngle && this.MapGroup.rotation < 15 && (15 != this.MapGroup.rotation ? this.MapGroup.rotation += .2 : (this.MapAngle = 0, this.MapGroup.rotation = 15)),
                                2 == this.MapAngle && (this.MapGroup.rotation < 22 ? this.MapGroup.rotation += .2 : (this.MapAngle = 4, this.MapGroup.rotation = 22)),
                                3 == this.MapAngle && (this.MapGroup.rotation > 0 ? this.MapGroup.rotation -= .2 : (this.MapGroup.rotation = 0, this.MapAngle = 4));
                            for (var a = 0; 6 > a; a++) 8 == this.UserRole[a] ? -1 == this.HeroJumpState[a] ? (this.Trailing[a].x = this.HeroImage[a].x - this.HeroImage[a].width / 2 - 20, this.Trailing[a].emitterY = this.HeroImage[a].y - 40) : (this.Trailing[a].x = this.HeroImage[a].x - this.HeroImage[a].width / 2 + 20, this.Trailing[a].emitterY = this.HeroImage[a].y - 70) : (this.Trailing[a].x = this.HeroImage[a].x - this.HeroImage[a].width / 2, this.Trailing[a].emitterY = this.HeroImage[a].y),
                                this.Trailing[a + 6].x = this.HeroImage[a].x - this.HeroImage[a].width / 2 + 15,
                                this.HeroLayer[a].x = this.HeroImage[a].x,
                                this.HeroLayer[a].y = this.HeroImage[a].y, -1 == this.HeroJumpState[a] ? this.HeroImage3[a].rotation += 3 * this.HeroBody[0].velocity[0] : (this.HeroImage3[a].rotation += .6 * this.HeroBody[0].velocity[0], this.HeroImage4[a].rotation += .6 * this.HeroBody[0].velocity[0]),
                                this.LoadImage[a].x = this.HeroImage[a].x;
                            for (var s = 1; 6 > s; s++) this.HeroName[s].x = this.HeroImage[s].x + 10,
                                this.HeroName[s].y = this.HeroImage[s].y - this.HeroImage[s].height - 10,
                                this.HeroImage2[s].x = this.HeroName[s].x - this.HeroName[s].width / 2 - 33,
                                this.HeroImage2[s].y = this.HeroImage[s].y - this.HeroImage[s].height - 10;
                            this.MapLayer.x = 568 - this.HeroImage[0].x,
                                this.MapLayer.y = .5 * (360 - this.HeroImage[0].y),
                                this.FloorBody.position[0] = this.HeroBody[0].position[0],
                                this.FloorBody.updateAABB()
                        }
                    },
                    this)
        },
        t.prototype.BeginContact = function(e) {
            var t = this;
            if (0 == this.GameState) {
                var o = e.bodyA,
                    r = e.bodyB;
                if (o.id >= 101 && r.id < 10 && (this.Trailing[r.id + 6].visible = !1), 100 == r.id && o.id < 10) {
                    if (this.HeroState[o.id] = 0, this.Trailing[o.id + 6].visible = !0, -1 != this.HeroJumpState[o.id] && (0 == o.id && (this.HeroJumpState[0] = 0), egret.Tween.removeTweens(this.HeroLayer[o.id]), egret.Tween.removeTweens(this.HeroImage[o.id + 6]), egret.Tween.get(this.HeroLayer[o.id]).to({
                                rotation: 0
                            },
                            100), 0 == o.id)) {
                        var i = RES.getRes("soundland_mp3");
                        i.play(0, 1)
                    }
                    this.CarMoveState[o.id] = 0;
                    var a = this.CarPositionY[o.id];
                    egret.Tween.get(this.HeroImage[o.id + 6]).to({
                            y: a + 10
                        },
                        120).to({
                            y: a
                        },
                        200).call(function() {
                            t.CarMoveState[o.id] = 1
                        },
                        this)
                }
                if (!(o.id >= 100 || r.id >= 100 || 1 == this.DaoDa)) {
                    if (0 == o.id || 0 == r.id) {
                        var i = RES.getRes("soundcollision_mp3");
                        i.play(0, 1)
                    }
                    Math.abs(this.HeroImage[o.id].y - this.HeroImage[r.id].y) <= 40 ? this.HeroImage[o.id].x > this.HeroImage[r.id].x ? 0 == o.id ? this.HeroNumState[r.id] = 0 : 0 == r.id ? this.HeroNumState[o.id] = 1 : (this.HeroNumState[o.id] = 1, this.HeroNumState[r.id] = 0) : 0 == o.id ? this.HeroNumState[r.id] = 1 : 0 == r.id ? this.HeroNumState[o.id] = 0 : (this.HeroNumState[o.id] = 0, this.HeroNumState[r.id] = 1) : this.StageHeight - o.position[1] * this.factor > 352 ? (this.HeroBody[r.id].velocity[1] = 0, this.HeroNumState[o.id] = 0, egret.Tween.removeTweens(this.HeroLayer[r.id]), egret.Tween.get(this.HeroLayer[r.id]).to({
                            rotation: 0
                        },
                        100)) : this.StageHeight - r.position[1] * this.factor > 352 ? (this.HeroBody[o.id].velocity[1] = 0, this.HeroNumState[r.id] = 0, egret.Tween.removeTweens(this.HeroLayer[o.id]), egret.Tween.get(this.HeroLayer[o.id]).to({
                            rotation: 0
                        },
                        100)) : o.position[1] > r.position[1] ? this.HeroBody[o.id].velocity[1] = 3 : r.position[1] > o.position[1] && (this.HeroBody[r.id].velocity[1] = 3)
                }
            }
        },
        t.prototype.EndContact = function(e) {
            var t = e.bodyA,
                o = e.bodyB;
            100 == t.id && o.id < 10 && egret.Tween.removeTweens(this.HeroImage[o.id + 6]),
                t.id >= 100 || o.id >= 100 || 1 == this.DaoDa || (3 == this.HeroState[t.id] ? this.HeroState[t.id] = 0 : 3 == this.HeroState[o.id] && (this.HeroState[o.id] = 0))
        },
        t.prototype.CreateTriangle = function(e, t, o, r, i, a, s) {
            var n = new egret.Bitmap(RES.getRes(s));
            n.pos(e, t, o, r),
                n.anchorOffsetY = r / 2 + 8,
                this.MapLayer.addChildAt(n, this.MapLayer.getChildIndex(this.HeroLayer[0]));
            var h = [
                    [o / 2 * .45 / this.factor, r / 2 / this.factor],
                    [-(o / 2) / this.factor, -(r / 2) / this.factor],
                    [o / 2 / this.factor, -(r / 2) / this.factor]
                ],
                l = new p2.Convex(h, []);
            this.StoneBody[a - 101] = new p2.Body({
                    mass: i,
                    position: [e / this.factor, (this.StageHeight - t) / this.factor]
                }),
                this.StoneBody[a - 101].addShape(l),
                this.StoneBody[a - 101].displays = [n],
                this.StoneBody[a - 101].id = a,
                this.world.addBody(this.StoneBody[a - 101])
        },
        t.prototype.CreateHero = function(e, t, o, r, i, a, s) {
            this.HeroImage[a] = new egret.Bitmap(RES.getRes(s)),
                this.HeroImage[a].pos(e, t, o, r),
                this.MapLayer.addChild(this.HeroImage[a]),
                this.HeroImage[a].visible = !1,
                this.HeroShape[a] = new p2.Rectangle(o / this.factor, r / this.factor),
                this.HeroBody[a] = new p2.Body({
                    mass: i,
                    position: [e / this.factor, (this.StageHeight - t) / this.factor]
                }),
                this.HeroBody[a].damping = 0,
                this.HeroBody[a].fixedRotation = !0,
                this.HeroShape[a].material = this.ice[0],
                this.HeroBody[a].addShape(this.HeroShape[a]),
                this.HeroBody[a].displays = [this.HeroImage[a]],
                this.HeroBody[a].id = a,
                this.world.addBody(this.HeroBody[a])
        },
        t.prototype.CreateRect = function(e, t, o, r, i, a, s) {
            var n = new egret.Bitmap(RES.getRes(s));
            n.pos(e, t, o, r),
                this.MapLayer.addChildAt(n, 0),
                this.FloorShape = new p2.Rectangle(o / this.factor, r / this.factor),
                this.FloorBody = new p2.Body({
                    mass: 0,
                    position: [e / this.factor, (this.StageHeight - t) / this.factor]
                }),
                this.FloorBody.damping = 0,
                this.FloorShape.material = this.ice[i],
                this.FloorBody.addShape(this.FloorShape),
                this.FloorBody.displays = [n],
                this.FloorBody.id = 100 + a,
                this.world.addBody(this.FloorBody)
        },
        t.prototype.TimerTick = function() {
            if ((0 == this.choose || 4 == this.DaoDa) && (this.ShopNumState++, 125 == this.ShopNumState ? this.ShopNumState = 150 : 175 == this.ShopNumState ? this.ShopNumState = 200 : this.ShopNumState >= 225 && (this.ShopNumState = 0), this.ShopNumState % 25 == 0)) {
                if (this.InterImage[7].texture = RES.getRes("hero" + (this.ShopNumState / 25 + 1) + "_png"), this.InterImage[8].texture = RES.getRes("wheel" + (this.ShopNumState / 25 + 1) + "_png"), this.InterImage[9].texture = RES.getRes("wheel" + (this.ShopNumState / 25 + 1) + "_png"), this.ShopNumState / 25 + 1 == 9 || this.ShopNumState / 25 + 1 == 11) var e = 5.6;
                else var e = 4;
                this.InterImage[8].x = this.InterImage[7].x - this.HeroPointX1[this.ShopNumState / 25] / e,
                    this.InterImage[9].x = this.InterImage[7].x + this.HeroPointX2[this.ShopNumState / 25] / e
            }
            if (1 == this.choose) {
                if (0 == this.GameState) this.DrawMap(),
                    this.DrawBg(),
                    this.DrawStone(),
                    this.DrawHero(),
                    this.DrawGuai();
                else if (1 == this.GameState && (0 == this.CountDownStart && (this.PropState++, this.PropState % 5 == 1 && (this.NumMoney += this.CountDownNum, this.NumScore += this.PropNum, this.NumMoney >= this.NumMoneyTT && (this.NumMoney = this.NumMoneyTT), this.NumScore >= this.NumScoreTT && (this.CountDownStart = 1, this.PropState = 0, this.NumScore = this.NumScoreTT), this.CountLabel.text = "x " + Math.floor(this.NumMoney), this.NumLabel[0].text = "e " + Math.floor(this.NumScore), this.NumLabel[0].anchorOffsetX = 0)), 1 == this.BeginState)) {
                    for (var t = 6; 12 > t; t++) egret.Tween.get(this.InterImage[t]).to({
                            y: this.InterImage[t].y - 300
                        },
                        600);
                    0 == this.PlatForm && (this.InterImage[14].visible = !0);
                    var o = RES.getRes("soundmoney_mp3");
                    o.play(0, 1),
                        this.BeginState = 2
                }
            } else 100 == this.choose
        },
        t.prototype.RankIng = function() {
            this.DaoDa < 2 && (this.RankArr = [{
                    id: 0,
                    x: this.HeroBody[0].position[0]
                },
                {
                    id: 1,
                    x: this.HeroBody[1].position[0]
                },
                {
                    id: 2,
                    x: this.HeroBody[2].position[0]
                },
                {
                    id: 3,
                    x: this.HeroBody[3].position[0]
                },
                {
                    id: 4,
                    x: this.HeroBody[4].position[0]
                },
                {
                    id: 5,
                    x: this.HeroBody[5].position[0]
                }
            ]);
            for (var e, t = 0; 6 > t; t++)
                for (var o = t + 1; 6 > o; o++) this.RankArr[t].x < this.RankArr[o].x && (e = this.RankArr[t], this.RankArr[t] = this.RankArr[o], this.RankArr[o] = e);
            for (var t = 0; 6 > t; t++)
                for (var r = 0; 6 > r; r++) this.RankArr[r].id === t && (this.RankScore[t].y = 25 + 33 * r, this.RankImage[t].y = 25 + 33 * r, this.SelfImage.y = this.RankScore[0].y)
        },
        t.prototype.DrawAction = function() {
            if (0 == this.choose) {
                var e = [426, 556, 712],
                    t = [399, 283, 412],
                    o = Math.randInt(0, 2);
                this.Trailing[6].start(),
                    this.Trailing[6].emitterX = e[o],
                    this.Trailing[6].emitterY = t[o],
                    this.Trailing[6].emissionTime = 200
            } else if (1 == this.choose && -1 == this.GameState && 1 == this.CountDownStart) {
                var r = "";
                if (this.CountDownNum < 0) this.PlayGame();
                else if (0 == this.CountDownNum) r = "g";
                else if (1 == this.CountDownNum) {
                    r = this.CountDownNum + "";
                    var i = RES.getRes("soundstart_mp3");
                    i.play(0, 1),
                        egret.setTimeout(function() {
                                var e = RES.getRes("soundstart3_mp3");
                                e.play(0, 1)
                            },
                            this, 550)
                } else {
                    r = this.CountDownNum + "";
                    var i = RES.getRes("soundstart_mp3");
                    i.play(0, 1)
                }
                this.CountLabel.text = r,
                    this.CountLabel.anchorOffsetX = this.CountLabel.width / 2,
                    this.CountLabel.anchorOffsetY = this.CountLabel.height / 2,
                    this.CountDownNum--
            }
            this.CheckADVideo()
        },
        t.prototype.PlayGame = function() {
            for (var e = this,
                    t = 0; 6 > t; t++) this.CarMoveState[t] = 1;
            this.CountDownStart = 2,
                this.world.gravity = [1, -6.2],
                this.removeChild(this.CountLabel);
            for (var t = 0; 6 > t; t++) this.HeroBody[this.RankArr[t].id].velocity[0] = 1;
            egret.setTimeout(function() {
                        var t = RES.getRes("soundcar_mp3");
                        t&&t.play&&(e.Soundbg = t.play(0));
                    },
                    this, 2e3),
                this.GameState = 0,
                this.TimerBg();
            for (var t = 0; 12 > t; t++) this.Trailing[t].start();
            for (var o = function(t) {
                        r.HeroJumpState[t] = -1,
                            egret.Tween.get(r.HeroLayer[t]).to({
                                    rotation: -25
                                },
                                200).to({},
                                1200).to({
                                    rotation: 0
                                },
                                300).call(function() {
                                e.HeroJumpState[t] = 0
                            })
                    },
                    r = this, t = 0; 6 > t; t++) o(t);
            egret.setTimeout(this.TimerStone, this, 2e3);
            var i = RES.getRes("soundjump3_mp3");
            i.play(0, 1)
        },
        t.prototype.TimerStone = function() {
            if (!(1 != this.choose || 0 != this.GameState || this.DaoDa >= 2)) {
                for (var e = -1,
                        t = 0; 6 > t; t++)
                    if (0 == this.StoneState[t]) {
                        e = t;
                        break
                    }
                if (-1 != e) {
                    var o = Math.randInt(150, 300);
                    this.CreateTriangle(this.HeroImage[0].x + 1e3, 411 - .15 * o / 2, o, .15 * o, 0, 101 + e, "stone1_png"),
                        this.StoneState[e] = 1
                }
                egret.setTimeout(this.TimerStone, this, Math.randInt(1, 4e3) + 400)
            }
        },
        t.prototype.DrawStone = function() {
            for (var e = 0; 6 > e; e++) 1 == this.StoneState[e] && (this.StoneBody[e].position[0] -= this.MapNum * this.HeroBody[0].velocity[0] / this.factor, this.StoneBody[e].updateAABB(), this.StoneBody[e].position[0] * this.factor < this.HeroImage[0].x - 1e3 && (this.world.removeBody(this.StoneBody[e]), this.StoneState[e] = 0))
        },
        t.prototype.TimerBg = function() {
            if (1 == this.choose && 0 == this.GameState) {
                for (var e = -1,
                        t = 0; 6 > t; t++)
                    if (0 == this.GuaiState[t]) {
                        e = t;
                        break
                    } - 1 != e && (this.GuaiImage[e] = new egret.Bitmap(RES.getRes("tree" + Math.randInt(1, 2) + "_png")), this.GuaiImage[e].pos(this.HeroImage[0].x + 1e3, 355, 70, 120), this.MapLayer.addChildAt(this.GuaiImage[e], 0), this.GuaiState[e] = 1),
                    egret.setTimeout(this.TimerBg, this, Math.floor(500 * Math.random() + 200))
            }
        },
        t.prototype.DrawBg = function() {
            for (var e = 0; 6 > e; e++) 1 == this.GuaiState[e] && (this.GuaiImage[e].x -= this.MapNum * this.HeroBody[0].velocity[0], this.GuaiImage[e].x < this.HeroImage[0].x - 1e3 && (this.MapLayer.removeChild(this.GuaiImage[e]), this.GuaiState[e] = 0))
        },
        t.prototype.TimerProp = function() {
            (1 == this.choose || 0 != this.GameState) && 0 == this.PropState && (this.PropState = 1, this.System.alpha = 1, this.PropImage.x = this.HeroImage[0].x - 850 + 30 * this.PropNumState, this.PropImage.y = 90 + 20 * this.PropNumState, this.PropImage.visible = !0)
        },
        t.prototype.DrawProp = function() {
            var e = this;
            if (1 == this.PropState) {
                this.PropImage.x >= this.HeroImage[0].x + 800 ? (this.PropState = 0, this.PropImage.visible = !1) : this.PropImage.x += 2.1 * this.HeroBody[0].velocity[0];
                for (var t = 0; 6 > t; t++)
                    if (this.ImageInImage(this.HeroImage[t], this.PropImage)) {
                        if (this.PropState = 0, this.PropImage.visible = !1, 0 == t) {
                            this.HeroBody[t].velocity[0] += 13;
                            var o = RES.getRes("soundprop_mp3");
                            o.play(0, 1);
                            var o = RES.getRes("soundspeed_mp3");
                            o.play(0, 1)
                        } else this.HeroBody[t].velocity[0] += 10;
                        this.PropNum = t,
                            this.System.start(),
                            this.System.x = this.HeroImage[t].x + 25,
                            this.System.emitterY = this.HeroImage[t].y,
                            this.System.emissionTime = 3e3;
                        break
                    }
            } - 1 != this.PropNum && (this.System.x = this.HeroImage[this.PropNum].x + 25, this.System.emitterY = this.HeroImage[this.PropNum].y, 1 == this.System.alpha && (this.System.alpha = .9, egret.setTimeout(function() {
                    0 == e.PropState && (e.PropNum = -1, egret.Tween.get(e.System).to({
                            alpha: 0
                        },
                        100))
                },
                this, 3e3)))
        },
        t.prototype.DrawMap = function() {
            this.InterImage[2].width = (-this.MapLayer.x + this.StageWidth / 2) / 6e3 * 34,
                this.InterImage[2].width > 339 ? this.InterImage[2].width = 339 : this.InterImage[2].width > 100 && 0 == this.MapAngle ? this.MapAngle = 1 : this.InterImage[2].width > 250 && 1 == this.MapAngle && (this.MapAngle = 2),
                this.MapLayer.x - this.StageWidth / 2 < -59e3 && -1 == this.DaoDa && (this.DaoDa = 0, this.LineImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), this.LineImage[1] = new egret.Bitmap(RES.getRes("overline_png")), this.LineImage[2] = new egret.Bitmap(RES.getRes("overline_png")), this.LineImage[3] = new egret.Bitmap(RES.getRes("overprop_png")), this.LineImage[4] = new egret.Bitmap(RES.getRes("overprop_png")), this.MapLayer.addChildAt(this.LineImage[0], 0), this.MapLayer.addChildAt(this.LineImage[1], this.MapLayer.getChildIndex(this.HeroLayer[0])), this.MapLayer.addChild(this.LineImage[2]), this.MapLayer.addChildAt(this.LineImage[3], this.MapLayer.getChildIndex(this.HeroLayer[0])), this.MapLayer.addChild(this.LineImage[4]), this.LineImage[0].visible = !1, this.LineImage[0].pos(6e4, 320, 16, 1500), this.LineImage[1].pos(59900, 310, 66, 171), this.LineImage[2].pos(6e4, 325, 74, 190), this.LineImage[3].pos(59800, 395, 26, 31), this.LineImage[4].pos(59900, 415, 26, 31), this.Trailing[12] = new particle.GravityParticleSystem(RES.getRes("texiao2_png"), RES.getRes("texiao2_json")), this.MapLayer.addChildAt(this.Trailing[12], this.getChildIndex(this.HeroLayer[0])), this.Trailing[12].x = 59800, this.Trailing[12].y = 385, this.Trailing[12].start(), this.Trailing[13] = new particle.GravityParticleSystem(RES.getRes("texiao2_png"), RES.getRes("texiao2_json")), this.MapLayer.addChild(this.Trailing[13]), this.Trailing[13].x = 59900, this.Trailing[13].y = 405, this.Trailing[13].start()),
                this.MapLayer.x < -8e3 && 0 == this.PropNumState ? (this.PropNumState = 1, this.TimerProp()) : this.MapLayer.x < -25e3 && 1 == this.PropNumState ? (this.PropNumState = 2, this.TimerProp()) : this.MapLayer.x < -48e3 && 2 == this.PropNumState && (this.PropNumState = 3, this.TimerProp());
            for (var e = 0; 4 > e; e++) this.FloorImage[e].x -= this.MapNum * this.HeroBody[0].velocity[0],
                this.FloorImage[e].x + this.MapLayer.x / Math.cos(this.MapLayer.rotation * Math.PI / 180) < -400 && (this.FloorImage[e].x += 4 * this.FloorImage[e].width - 8);
            for (var e = 0; 2 > e; e++) this.TreeImage[e].x -= .2 * this.HeroBody[0].velocity[0],
                this.TreeImage[e].y = 290 + .173 * this.TreeImage[e].x + .5 * (360 - this.HeroImage[0].y),
                this.TreeImage[e].x < -568 && (this.TreeImage[e].x += 2 * this.TreeImage[e].width + 500)
        },
        t.prototype.DrawGuai = function() {
            if (this.HeroBody[0].velocity[0] <= 0 && (this.HeroBody[0].velocity[0] = 10, this.HeroBody[0].velocity[1] = 5), 2 != this.DaoDa) {
                this.HeroBody[0].velocity[0] < 5 ? this.world.gravity[0] = 2 : this.HeroBody[0].velocity[0] >= 5 && this.HeroBody[0].velocity[0] < 8 ? this.world.gravity[0] = 1 : this.HeroBody[0].velocity[0] >= 8 && this.HeroBody[0].velocity[0] < 10 ? this.world.gravity[0] = .8 : this.HeroBody[0].velocity[0] >= 10 && this.HeroBody[0].velocity[0] < 12 ? this.world.gravity[0] = .5 : this.HeroBody[0].velocity[0] >= 15 && (this.world.gravity[0] = -.5);
                for (var e = 0; 6 > e; e++) {
                    0 != e && this.DaoDa < 3 && (this.HeroBody[e].position[0] * this.factor - this.HeroBody[0].position[0] * this.factor > 1400 && (this.HeroNumState[e] = 0, this.HeroBody[e].position[0] = this.HeroBody[0].position[0] + 1400 / this.factor), this.HeroBody[e].position[0] * this.factor - this.HeroBody[0].position[0] * this.factor < -1400 && (this.HeroNumState[e] = 1, this.HeroBody[e].position[0] = this.HeroBody[0].position[0] - 1400 / this.factor), 0 != this.PropNum && (0 == this.HeroNumState[e] && (this.HeroBody[e].velocity[0] -= .03, this.HeroBody[e].velocity[0] < this.HeroBody[0].velocity[0] - 3 && (this.HeroNumState[e] = 2)), 1 == this.HeroNumState[e] && (this.HeroBody[e].velocity[0] += .02, this.HeroBody[e].velocity[0] > this.HeroBody[0].velocity[0] + 3 && (this.HeroNumState[e] = 2)))),
                        0 == this.RankArr[0].id && this.HeroBody[this.RankArr[0].id].velocity[0] - this.HeroBody[this.RankArr[1].id].velocity[0] >= 3 && (this.HeroBody[0].velocity[0] -= .02),
                        this.HeroBody[e].velocity[1] < 0 && 1 == this.HeroState[e] && (this.HeroState[e] = 2, 0 == e && 1 == this.HeroJumpState[0] ? egret.Tween.get(this.HeroLayer[e]).to({
                                rotation: 12
                            },
                            700) : 0 != e && egret.Tween.get(this.HeroLayer[e]).to({
                                rotation: 12
                            },
                            700));
                    for (var t = 0,
                            o = 0,
                            r = 0; 6 > r; r++)
                        if (e != r) {
                            if (0 == this.HeroJumpState[e]) {
                                var i = Math.abs(this.HeroImage[e].x - this.HeroImage[r].x);
                                if (i >= 300 && 330 >= i || i >= 220 && 240 >= i && this.MapLayer.x < 2e4) {
                                    var a = 0;
                                    a = 0 == r && this.HeroImage[e].x > this.HeroImage[r].x ? Math.floor(200 * Math.random()) : Math.floor(100 * Math.random()),
                                        35 > a ? 0 != e && (this.HeroBody[e].position[0] < this.HeroBody[r].position[0] && (this.HeroBody[e].velocity[0] - this.HeroBody[r].velocity[0] < 3 ? this.HeroBody[e].velocity[0] += 1 : this.HeroBody[e].velocity[0] - this.HeroBody[r].velocity[0] > 4 && (this.HeroBody[e].velocity[0] -= 1)), this.HeroBody[e].velocity[1] = 7, this.HeroJumpState[e] = 1, this.HeroState[e] = 1, egret.Tween.get(this.HeroLayer[e]).to({
                                                rotation: -10
                                            },
                                            100), this.Trailing[e + 6].visible = !1) : 0 != e && (this.HeroJumpState[e] = 1)
                                }
                            }
                            Math.abs(this.HeroImage[e].x - this.HeroImage[r].x) > 280 && t++,
                                Math.abs(this.HeroBody[e].velocity[0] - this.HeroBody[r].velocity[0]) < .05 && this.ImageInImage(this.HeroImage[e], this.HeroImage[r]) ? (this.HeroContactNum[e]++, this.HeroContactNum[e] > 100 && (this.HeroImage[e].y < this.HeroImage[r].y ? this.HeroBody[e].velocity[0] += 2 : this.HeroImage[e].x > this.HeroImage[r].x && (this.HeroBody[e].velocity[0] += 2), this.HeroContactNum[e] = 0)) : o++
                        }
                    o >= 5 && (this.HeroContactNum[e] = 0),
                        t >= 5 && this.HeroImage[e].y > 352 && 3 != this.DaoDa && 0 != e && (this.HeroJumpState[e] = 0)
                }
            }
        },
        t.prototype.DrawHero = function() {
            var e = this;
            this.ShopNumState++;
            for (var t = 0; 6 > t; t++) this.CarMoveState[t] >= 1 && (this.CarMoveState[t]++, this.CarMoveState[t] < 13 ? this.HeroImage[t + 6].y += .3 : this.CarMoveState[t] < 18 ? this.HeroImage[t + 6].y -= .6 : (this.CarMoveState[t] = 1, this.HeroImage[t + 6].y = this.CarPositionY[t]));
            for (var t = 0; 6 > t; t++) this.HeroFirst[t].visible = !1,
                this.RankArr[0].id == t && (this.HeroFirst[t].visible = !0, this.HeroFirst[t].texture = RES.getRes("firstflag" + (Math.floor(this.ShopNumState / 5) % 2 + 1) + "_png"));
            if (0 == this.DaoDa && this.LineImage[0].x - this.HeroImage[0].x < 1e3 && (this.MapNum = 1, this.DaoDa = 1), this.DaoDa > 0) {
                for (var t = 0; 6 > t; t++)
                    if (this.ImageInImage(this.HeroImage[t], this.LineImage[0]) && "2" != this.HeroImage[t].name) {
                        this.HeroImage[t].name = "2";
                        var o = new egret.BitmapText;
                        this.HeroLayer[t].addChild(o),
                            o.font = RES.getRes("numimage_fnt");
                        for (var r = 0; 6 > r; r++) this.RankArr[r].id == t && (o.text = r + 1 + "");
                        o.x = this.HeroImage[t + 6].x + 80,
                            o.y = this.HeroImage[t + 6].y - 40,
                            o.scaleX = 0,
                            o.scaleY = 0,
                            o.anchorOffsetX = o.width / 2,
                            o.anchorOffsetY = o.height,
                            egret.Tween.get(o).to({
                                    scaleX: 1,
                                    scaleY: 1
                                },
                                500).to({},
                                1300).to({
                                    scaleX: 0,
                                    scaleY: 0
                                },
                                500)
                    }
                if (2 == this.DaoDa) {
                    for (var t = 1; 5 > t; t++) this.LineImage[t].x -= this.MapNum * this.HeroBody[0].velocity[0];
                    this.Trailing[13].x -= this.MapNum * this.HeroBody[0].velocity[0],
                        this.Trailing[12].x -= this.MapNum * this.HeroBody[0].velocity[0]
                }
            }
            if (1 == this.DaoDa && this.HeroImage[0].x > this.LineImage[0].x) {
                this.MapAngle = 3,
                    this.worldStep = 2,
                    this.DaoDa = 2,
                    this.world.gravity[1] = -100;
                for (var t = 0; 6 > t; t++) this.HeroJumpState[t] = 1;
                var i = RES.getRes("soundover_mp3");
                i.play(0, 1),
                    this.LineImage[0].visible = !1,
                    egret.setTimeout(function() {
                            e.worldStep = 10,
                                e.world.gravity[1] = -20
                        },
                        this, 1e3),
                    this.NumShowShare++,
                    this.Soundbg&&this.Soundbg.stop(),
                    egret.setTimeout(this.ShowResult, this, 3e3)
            }
        },
        t.prototype.ShowAgain = function() {
            this.DaoDa = 3,
                this.InterImage[3] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.InterImage[4] = new egret.Bitmap(RES.getRes("sharebg_png")),
                this.InterImage[5] = new egret.Bitmap(RES.getRes("sharetitle_png")),
                this.InterImage[6] = new egret.Bitmap(RES.getRes("shareclose_png")),
                this.InterImage[7] = new egret.Bitmap(RES.getRes("sharebtn_png")),
                this.InterImage[8] = new egret.Bitmap(RES.getRes("shareview_png")),
                this.addChild(this.InterImage[3]),
                this.Challenge = new egret.DisplayObjectContainer,
                this.addChild(this.Challenge);
            for (var e = 4; 9 > e; e++) this.Challenge.addChild(this.InterImage[e]);
            this.InterImage[3].pos(568, 320, this.StageWidth + 40, 660),
                this.InterImage[4].pos(568, 320, 440, 380),
                this.InterImage[5].pos(556, 172, 331, 32),
                this.InterImage[6].pos(753, 172, 36, 36),
                this.InterImage[7].pos(568, 430, 286, 110),
                this.InterImage[8].pos(568, 290, 263, 90),
                this.Challenge.y = -640,
                egret.Tween.get(this.Challenge).to({
                        y: 0
                    },
                    500, egret.Ease.getBackOut(1))
        },
        t.prototype.EndAgain = function() {
            this.removeChild(this.InterImage[3]),
                this.Challenge.removeChildren(),
                egret.Tween.removeTweens(this.Challenge),
                this.removeChild(this.Challenge)
        },
        t.prototype.ShowLoading = function() {
            this.MoveCanNot = 1,
                this.UserName = this.Connect.GetUserInfo();
            var e = [];
            0 == this.PlayState ? e[0] = this.NowHeroTT : e[0] = this.PlayState;
            for (var t = [1, 2, 3, 4, 5, 6, 7], o = 0; 7 > o; o++) e[0] == t[o] && t.splice(o, 1);
            t.sort(this.randomSort);
            for (var o = 1; 6 > o; o++) e[o] = t[o];
            this.UserRole = e;
            for (var r = [], o = 0; 5 > o; o++) this.LoadImage[o] = new egret.Bitmap(RES.getRes("inter3_png")),
                r[o] = new egret.Bitmap(RES.getRes("inter4_png"));
            this.LoadImage[5] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.LoadImage[6] = new egret.Bitmap(RES.getRes("matchbg1_png")),
                this.LoadImage[7] = new egret.Bitmap(RES.getRes("inter1_png")),
                this.LoadImage[8] = new egret.Bitmap(RES.getRes("inter2_png")),
                this.LoadImage[9] = new egret.Bitmap(RES.getRes("matchtitle_png")),
                this.LoadImage[10] = new egret.Bitmap(RES.getRes("matchbg2_png")),
                this.LoadImage[11] = new egret.Bitmap(RES.getRes("matchbg2_png")),
                this.addChild(this.LoadImage[5]),
                this.addChild(this.LoadImage[6]);
            for (var o = 0; 5 > o; o++) this.addChild(this.LoadImage[o]),
                this.addChild(r[o]);
            for (var o = 7; 12 > o; o++) this.addChild(this.LoadImage[o]);
            this.LoadImage[5].pos(568, 320, this.StageWidth + 40, 660),
                this.LoadImage[6].pos(568, 320, 440, 380),
                this.LoadImage[7].pos(568, 203, 304, 18),
                this.LoadImage[8].anchorOffsetX = 0,
                this.LoadImage[8].pos(418, 203, 0, 14),
                this.LoadImage[9].pos(568, 165, 333, 39),
                this.LoadImage[10].pos(353, 320, 30, 380),
                this.LoadImage[11].scaleX = -1,
                this.LoadImage[11].pos(773, 320, 30, 380);
            for (var o = 0; 5 > o; o++) this.LoadImage[o].pos(427 + 72 * Math.floor(o / 3) + o % 3 * 136, 300 + 120 * Math.floor(o / 3), 80, 80),
                r[o].pos(this.LoadImage[o].x, this.LoadImage[o].y, 84, 84);
            for (var o = 1; 6 > o; o++) this.UILabel[o] = new egret.TextField,
                this.addChild(this.UILabel[o]),
                this.UILabel[o].visible = !1,
                this.UILabel[o].textColor = 0,
                this.UILabel[o].size = 18,
                this.UILabel[o].bold = !0,
                this.UILabel[o].text = this.UserName[o].nickName.substring(0, 10),
                this.UILabel[o].x = this.LoadImage[o].x,
                this.UILabel[o].y = this.LoadImage[o].y + 60,
                this.UILabel[o].anchorOffsetX = this.UILabel[o].width / 2,
                this.UILabel[o].anchorOffsetY = this.UILabel[o].height / 2;
            this.ArrLoad = [0, 1, 2, 3, 4],
                this.ArrLoad.sort(this.randomSort);
            for (var o = 0; 5 > o; o++) egret.setTimeout(this.LoadAvatar, this, o * (300 + 100 * Math.floor(4 * Math.random() + 1)), o)
        },
        t.prototype.randomSort = function(e, t) {
            return Math.random() > .5 ? -1 : 1
        },
        t.prototype.LoadAvatar = function(e) {
            var t = this;
            this.UserName[e + 1].Country = this.UserName[e + 1].Country > 50 ? Math.randInt(1, 50) : this.UserName[e + 1].Country,
                this.LoadImage[this.ArrLoad[this.NumLoad]].texture = RES.getRes("flag" + this.UserName[e + 1].Country + "_png"),
                this.UILabel[e + 1].x = this.LoadImage[this.ArrLoad[this.NumLoad]].x,
                this.UILabel[e + 1].y = this.LoadImage[this.ArrLoad[this.NumLoad]].y + 60,
                this.UILabel[e + 1].visible = !0,
                this.NumLoad++,
                egret.Tween.get(this.LoadImage[8]).to({
                        width: 60 * this.NumLoad
                    },
                    200),
                this.NumLoad >= 5 && egret.setTimeout(function() {
                        t.ReleaseGame(),
                            t.choose = 1,
                            t.InitGame()
                    },
                    this, 1e3)
        },
        t.prototype.EndLoading = function(e, t) {
            var o = this;
            e = this.NumLoad,
                this.LoadImage[this.ArrLoad[e]].texture = t;
            var r = new egret.Bitmap(RES.getRes("inter3_png"));
            this.addChild(r),
                r.pos(this.LoadImage[this.ArrLoad[e]].x, this.LoadImage[this.ArrLoad[e]].y, 90, 90),
                this.LoadImage[this.ArrLoad[e]].mask = r,
                this.NumLoad++,
                egret.Tween.get(this.LoadImage[9]).to({
                        width: 50 * this.NumLoad
                    },
                    200),
                this.NumLoad >= 6 && egret.setTimeout(function() {
                        o.ReleaseGame(),
                            o.choose = 1,
                            o.InitGame()
                    },
                    this, 1e3)
        },
        t.prototype.EndSlot = function() {
            for (var e = 0; 4 > e; e++) this.removeChild(this.SlotImage[e]);
            this.SlotScroller.removeChildren(),
                this.removeChild(this.SlotScroller)
        },
        t.prototype.ShowSlot = function(e, t) {
            if (this.SlotNow = 0, this.SlotState = [], this.SlotLayer = new egret.DisplayObjectContainer, this.SlotScroller = new egret.ScrollView, this.SlotImage[0] = new egret.Bitmap(RES.getRes("slotview_png")), this.SlotImage[1] = new egret.Bitmap(RES.getRes("slotbtn1_png")), this.SlotImage[2] = new egret.Bitmap(RES.getRes("slotbtn2_png")), this.SlotImage[3] = new egret.Bitmap(RES.getRes("slotcover_png")), 100 == this.choose) {
                for (var o = 0; 4 > o; o++) this.RankLayer.addChild(this.SlotImage[o]);
                this.RankLayer.addChild(this.SlotScroller)
            } else {
                for (var o = 0; 4 > o; o++) this.addChild(this.SlotImage[o]);
                this.addChildAt(this.SlotScroller, this.getChildIndex(this.SlotImage[3]))
            }
            this.SlotImage[2].visible = !1,
                this.SlotImage[0].pos(e, t, 320, 100),
                this.SlotImage[1].pos(e + 152, t - 30, 30, 48),
                this.SlotImage[2].pos(e + 152, t + 14, 30, 48),
                this.SlotImage[3].pos(e, t, 240, 80),
                this.SlotLayer.x = 0,
                this.SlotLayer.y = 0,
                this.SlotLayer.width = 240,
                this.SlotLayer.height = 76,
                this.SlotScroller.x = e - 120,
                this.SlotScroller.y = t - 38,
                this.SlotScroller.width = 240,
                this.SlotScroller.height = 76,
                this.SlotScroller.setContent(this.SlotLayer),
                this.SlotScroller.touchEnabled = !1,
                this.SlotImage[3].touchEnabled = !0,
                this.SlotImage[3].name = "slotbtn1",
                this.SlotImage[3].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.SlotTouchBegin, this),
                this.SlotImage[3].addEventListener(egret.TouchEvent.TOUCH_TAP, this.SlotTouchEnd, this),
                this.InitSlot()
        },
        t.prototype.InitSlot = function() {
            for (var e = 0,
                    t = 0; t < this.SlotRole[1]; t++) 0 == this.NumLockTT[t + this.SlotRole[0]] && e++;
            var o = Math.floor(Math.random() * (10 - e)) + 1;
            if (e == this.SlotRole[1] ? o = 1 : 0 == e && o++, e > 0)
                for (var r = Math.floor(Math.random() * e + 1), i = 0, t = 0; t < this.SlotRole[1]; t++)
                    if (0 == this.NumLockTT[t + this.SlotRole[0]] && (i++, i == r)) {
                        this.SlotCoin[0] = t + 1;
                        break
                    }
            e == this.SlotRole[1] && this.SlotCoin[0] == this.SlotRole[1] && (this.SlotCoin[0] = 2);
            for (var t = 0; 3 > t; t++)
                for (var a = 0; 50 > a; a++) 0 == Math.floor(3 * Math.random()) && e > 0 ? this.SlotItemImage[t][a] = new egret.Bitmap(RES.getRes("slotitem" + this.SlotCoin[0] + "_png")) : this.SlotItemImage[t][a] = new egret.Bitmap(RES.getRes("slotcoin" + Math.floor(4 * Math.random() + 1) + "_png")),
                    this.SlotLayer.addChild(this.SlotItemImage[t][a]),
                    this.SlotItemImage[t][a].pos(40 + 80 * t, 38 - 80 * a, 60, 60);
            this.SlotItemImage[0][0].texture = RES.getRes("slotcoin4_png"),
                this.SlotItemImage[2][0].texture = RES.getRes("slotitem0_png"),
                this.SlotItemImage[2][0].pos(200, 38, 68, 68),
                e > 0 ? this.SlotItemImage[1][0].texture = RES.getRes("slotitem" + this.SlotCoin[0] + "_png") : this.SlotItemImage[1][0].texture = RES.getRes("slotcoin4_png"),
                o = 0,
                1 == o ? (this.SlotState = [0, 0, 0], this.SlotItemImage[0][19].texture = RES.getRes("slotitem" + this.SlotCoin[0] + "_png"), this.SlotItemImage[1][34].texture = RES.getRes("slotitem" + this.SlotCoin[0] + "_png"), this.SlotItemImage[2][49].texture = RES.getRes("slotitem" + this.SlotCoin[0] + "_png")) : (this.SlotState = [Math.floor(4 * Math.random() + 1), Math.floor(4 * Math.random() + 1), Math.floor(4 * Math.random() + 1)], this.SlotItemImage[0][19].texture = RES.getRes("slotcoin" + this.SlotState[0] + "_png"), this.SlotItemImage[1][34].texture = RES.getRes("slotcoin" + this.SlotState[1] + "_png"), this.SlotItemImage[2][49].texture = RES.getRes("slotcoin" + this.SlotState[2] + "_png"))
        },
        t.prototype.SlotTouchBegin = function(e) {
            var t = this,
                o = e.target;
            "slotbtn1" == o.name || "slotbtn2" == o.name && (this.SetColor(o, 2), egret.setTimeout(function() {
                    t.SetColor(o, 1)
                },
                this, 400));
            var r = RES.getRes("soundpress_mp3");
            r.play(0, 1)
        },
        t.prototype.SlotTouchEnd = function(e) {
            var t = e.target;
            "slotbtn1" == t.name ? 0 == this.SlotNow && (1 == platform.hasRAD() ? (self = this, HUHU_showRewardedVideoAd(function() {
                self.SlotNow = 1, self.ShowADNow(0), self.Connect.UploadEvent("press_slot", {
                    score: 1
                })
            }, function() {
                self.ShowTipView("Ads is not ready")
            })) : this.ShowTipView("Please try again later")) : "slotbtn2" == t.name && this.CloseSlot()
        },
        t.prototype.TapSlot = function() {
            var e = this;
            this.MoveCanNot = 1,
                this.SlotNow = 2,
                this.SlotImage[1].visible = !1,
                this.SlotImage[2].visible = !0;
            for (var t = 0; 3 > t; t++)
                for (var o = 0; 50 > o; o++) egret.Tween.get(this.SlotItemImage[t][o]).to({
                        y: this.SlotItemImage[t][o].y + 480
                    },
                    900, egret.Ease.getBackIn(0)).to({
                        y: this.SlotItemImage[t][o].y + 80 * (19 + 15 * t)
                    },
                    150 * (14 + 15 * t), egret.Ease.getBackOut(0));
            var r = RES.getRes("slotstart_mp3");
            r.play(0, 1),
                egret.setTimeout(function() {
                        var e = RES.getRes("slotstop_mp3");
                        e.play(0, 1)
                    },
                    this, 2800),
                egret.setTimeout(function() {
                        var e = RES.getRes("slotstop_mp3");
                        e.play(0, 1)
                    },
                    this, 5e3),
                egret.setTimeout(function() {
                        e.SlotImage[1].visible = !0,
                            e.SlotImage[2].visible = !1;
                        var t = RES.getRes("slotstop_mp3");
                        t.play(0, 1)
                    },
                    this, 7200),
                egret.setTimeout(function() {
                        e.SlotResult()
                    },
                    this, 7500)
        },
        t.prototype.SlotResult = function() {
            var e = this;
            if (this.MoveCanNot = 0, 0 == this.SlotState[0]) {
                this.SlotNow = 3,
                    this.SlotImage[5] = new egret.Bitmap(RES.getRes("slotbg1_png")),
                    this.SlotImage[6] = new egret.Bitmap(RES.getRes("slottitle_png")),
                    this.SlotImage[7] = new egret.Bitmap(RES.getRes("shoplight_png")),
                    this.SlotImage[8] = new egret.Bitmap(RES.getRes("slotbg2_png")),
                    this.SlotImage[9] = new egret.Bitmap(RES.getRes("hero" + (this.SlotCoin[0] + this.SlotRole[0]) + "_png")),
                    this.SlotImage[10] = new egret.Bitmap(RES.getRes("slotbtn3_png"));
                for (var t = 5; 11 > t; t++) this.addChild(this.SlotImage[t]);
                this.SlotImage[5].alpha = 0,
                    this.SlotImage[10].alpha = 0,
                    this.SlotImage[5].pos(320, 568, this.StageWidth + 40, 1200),
                    this.SlotImage[6].pos(320, 200, 460, 60),
                    this.SlotImage[7].pos(320, 350, 400, 400),
                    this.SlotImage[8].pos(320, 500, 340, 350),
                    this.SlotImage[9].pos(320, 500, this.SlotImage[9].width, this.SlotImage[9].height),
                    this.SlotImage[10].pos(320, 900, 240, 80);
                for (var t = 6; 10 > t; t++) this.SlotImage[t].scaleX = 0,
                    this.SlotImage[t].scaleY = 0,
                    9 == t ? egret.Tween.get(this.SlotImage[t]).to({},
                        800).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        600, egret.Ease.getBackOut(3)) : egret.Tween.get(this.SlotImage[t]).to({},
                        300).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        700, egret.Ease.getBackOut(2));
                egret.Tween.get(this.SlotImage[5]).to({
                            alpha: 1
                        },
                        800),
                    egret.Tween.get(this.SlotImage[7], {
                        loop: !0
                    }).to({
                            rotation: 360
                        },
                        4e3),
                    egret.Tween.get(this.SlotImage[9], {
                        loop: !0
                    }).to({
                            y: 495
                        },
                        500).to({
                            y: 500
                        },
                        500),
                    egret.Tween.get(this.SlotImage[10]).to({},
                        2200).to({
                            alpha: 1
                        },
                        100),
                    this.NowHeroTT = this.SlotCoin[0] + this.SlotRole[0],
                    this.NumLockTT[this.SlotCoin[0] + this.SlotRole[0] - 1] = 1,
                    this.SaveGameScore(),
                    this.SlotImage[10].touchEnabled = !0,
                    this.SlotImage[10].name = "slotbtn2",
                    this.SlotImage[10].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.SlotTouchBegin, this),
                    this.SlotImage[10].addEventListener(egret.TouchEvent.TOUCH_END, this.SlotTouchEnd, this);
                var o = RES.getRes("slotwin1_mp3");
                o.play(0, 1)
            } else {
                this.SlotNow = 4;
                var r = this.SlotCoin[this.SlotState[0]] + this.SlotCoin[this.SlotState[1]] + this.SlotCoin[this.SlotState[2]],
                    i = new egret.BitmapText;
                this.Challenge.addChild(i),
                    i.font = RES.getRes("numimage_fnt"),
                    i.x = 568,
                    i.y = this.SlotImage[0].y - 70,
                    i.scaleX = .3,
                    i.scaleY = .3,
                    i.text = "x" + r,
                    i.anchorOffsetX = i.width / 2,
                    i.anchorOffsetY = i.height / 2,
                    egret.Tween.get(i).to({
                            scaleX: .8,
                            scaleY: .8
                        },
                        500, egret.Ease.getBackOut(1)).to({
                            y: this.ScoreLabel.y
                        },
                        500).to({
                            alpha: 0
                        },
                        0),
                    egret.setTimeout(function() {
                            e.NowMoney += r,
                                e.ScoreLabel.text = "x +" + e.NowMoney,
                                e.ScoreLabel.anchorOffsetX = 0,
                                e.SaveGameScore()
                        },
                        this, 1500);
                var o = RES.getRes("slotwin2_mp3");
                o.play(0, 1),
                    egret.setTimeout(function() {
                            for (var t = 0; 3 > t; t++)
                                for (var o = 0; 50 > o; o++) e.SlotLayer.removeChild(e.SlotItemImage[t][o]);
                            e.InitSlot(),
                                e.SlotNow = 0
                        },
                        this, 2e3)
            }
        },
        t.prototype.CloseSlot = function() {
            for (var e = 5; 11 > e; e++) this.removeChild(this.SlotImage[e]);
            for (var e = 0; 3 > e; e++)
                for (var t = 0; 50 > t; t++) this.SlotLayer.removeChild(this.SlotItemImage[e][t]);
            this.InitSlot(),
                this.SlotNow = 0
        },
        t.prototype.SureSlot = function() {
            this.SlotNow = 5,
                this.SlotImage[6] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.SlotImage[7] = new egret.Bitmap(RES.getRes("overadd1_png")),
                this.SlotImage[8] = new egret.Bitmap(RES.getRes("overadd2_png")),
                this.SlotImage[9] = new egret.Bitmap(RES.getRes("overadd3_png"));
            for (var e = 0; 4 > e; e++) this.addChild(this.SlotImage[e + 6]);
            this.SlotImage[6].pos(320, 568, this.StageWidth + 40, 1200),
                this.SlotImage[7].pos(320, 490, 440, 280),
                this.SlotImage[8].pos(320, 560, 280, 104),
                this.SlotImage[9].pos(536, 360, 53, 53)
        },
        t.prototype.EndSureSlot = function() {
            for (var e = 0; 4 > e; e++) this.removeChild(this.SlotImage[e + 6])
        },
        t.prototype.ShowPrize = function() {
            this.GameState = 2,
                this.Challenge = new egret.DisplayObjectContainer,
                this.PrizeImage[0] = new egret.Bitmap(RES.getRes("interbg_png")),
                this.PrizeImage[1] = new egret.Bitmap(RES.getRes("prizebg1_png")),
                this.PrizeImage[2] = new egret.Bitmap(RES.getRes("prizebg2_png")),
                this.PrizeImage[3] = new egret.Bitmap(RES.getRes("prizebg2_png")),
                this.PrizeImage[4] = new egret.Bitmap(RES.getRes("prizetitle" + this.HeroRank + "_png")),
                this.PrizeImage[5] = new egret.Bitmap(RES.getRes("overlight_png")),
                this.PrizeImage[6] = new egret.Bitmap(RES.getRes("shareclose_png")),
                this.addChild(this.PrizeImage[0]),
                this.addChild(this.Challenge);
            for (var e = 1; 7 > e; e++) this.Challenge.addChild(this.PrizeImage[e]);
            this.Challenge.width = 1136,
                this.Challenge.height = 640,
                this.Challenge.x = 568,
                this.Challenge.y = 365,
                this.Challenge.anchorOffsetX = 568,
                this.Challenge.anchorOffsetY = 320,
                this.PrizeImage[0].visible = !1,
                this.PrizeImage[0].pos(568, 320, this.StageWidth + 40, 660),
                this.PrizeImage[1].pos(568, 330, 560, 390),
                this.PrizeImage[2].pos(293, 330, 30, 390),
                this.PrizeImage[3].scaleX = -1,
                this.PrizeImage[3].pos(843, 330, 30, 390),
                this.PrizeImage[4].pos(568, 162, 80, 54),
                this.PrizeImage[6].pos(830, 162, 35, 35),
                this.NowMoney = 1700 - 200 * this.HeroRank;
            var t = 17 - 2 * this.HeroRank;
            this.ScoreLabel = new egret.BitmapText,
                this.Challenge.addChild(this.ScoreLabel),
                this.ScoreLabel.font = RES.getRes("numimage_fnt"),
                this.ScoreLabel.text = "x +" + this.NowMoney,
                this.ScoreLabel.x = 478,
                this.ScoreLabel.y = 240,
                this.ScoreLabel.scaleX = .7,
                this.ScoreLabel.scaleY = .7,
                this.ScoreLabel.anchorOffsetX = 0,
                this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2,
                this.PrizeImage[5].pos(492, 240, 100, 100);
            var o = new egret.BitmapText;
            this.Challenge.addChild(o),
                o.font = RES.getRes("numimage_fnt"),
                o.text = "e +" + t,
                o.x = 478,
                o.y = 300,
                o.scaleX = .7,
                o.scaleY = .7,
                o.anchorOffsetX = 0,
                o.anchorOffsetY = o.height / 2,
                egret.Tween.get(this.PrizeImage[5], {
                    loop: !0
                }).to({
                        rotation: 360
                    },
                    3e3),
                this.ShowSlot(568, 450),
                this.Challenge.scaleX = 0,
                this.Challenge.scaleY = 0,
                egret.Tween.get(this.Challenge).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    500, egret.Ease.getBackOut(1))
        },
        t.prototype.EndPrize = function() {
            this.GameState = 1,
                this.removeChild(this.PrizeImage[0]),
                this.Challenge.removeChildren()
        },
        t.prototype.ShowResult = function() {
            var e = this;
            this.MoveCanNot = 0,
                this.ShopNumState = 0,
                this.DaoDa = 4,
                this.GameState = 1,
                this.NewGame++,
                0 != this.PlayState && (this.PlayState = 0),
                this.world.clear();
            for (var t = 0; 6 > t; t++) 1 == this.GuaiState[t] && this.MapLayer.removeChild(this.GuaiImage[t]),
                1 == this.StoneState[t] && this.world.removeBody(this.StoneBody[t]),
                this.HeroLayer[t].removeChildren(),
                this.MapLayer.removeChild(this.HeroLayer[t]),
                this.MapLayer.removeChild(this.LoadImage[t]);
            for (var t = 0; 14 > t; t++) this.MapLayer.removeChild(this.Trailing[t]);
            for (var t = 1; 3 > t; t++) this.removeChild(this.InterImage[t]);
            this.MapLayer.y = 0,
                this.MapLayer.rotation = 0;
            for (var t = 0; 2 > t; t++) this.TreeImage[t].y = 290 + 172 * t;
            this.InterImage[2] = new egret.Bitmap(RES.getRes("overlight_png")),
                this.InterImage[3] = new egret.Bitmap(RES.getRes("overcup_png")),
                this.InterImage[4] = new egret.Bitmap(RES.getRes("overtable_png")),
                this.InterImage[5] = new egret.Bitmap(RES.getRes("overtable_png")),
                this.InterImage[6] = new egret.Bitmap(RES.getRes("titlebtn2_png")),
                this.InterImage[7] = new egret.Bitmap(RES.getRes("hero1_png")),
                this.InterImage[8] = new egret.Bitmap(RES.getRes("wheel1_png")),
                this.InterImage[9] = new egret.Bitmap(RES.getRes("wheel1_png")),
                this.InterImage[10] = new egret.Bitmap(RES.getRes("overbtn_png")),
                this.InterImage[11] = new egret.Bitmap(RES.getRes("titlebtn5_png")),
                this.InterImage[12] = new egret.Bitmap(RES.getRes("overprop_png")),
                this.InterImage[13] = new egret.Bitmap(RES.getRes("overprop_png")),
                this.InterImage[14] = new egret.Bitmap(RES.getRes("moregame" + (this.NewGame % 3 + 1) + "_png"));
            for (var t = 1; 6 > t; t++) this.MapLayer.removeChild(this.HeroImage2[t]),
                this.MapLayer.removeChild(this.HeroName[t]);
            for (var t = 0; 3 > t; t++) this.HeroImage[t] = new egret.Bitmap(RES.getRes("hero" + this.UserRole[this.RankArr[t].id] + "_png")),
                this.HeroImage2[t] = new egret.Bitmap(RES.getRes("wheel" + this.UserRole[this.RankArr[t].id] + "_png")),
                this.HeroImage3[t] = new egret.Bitmap(RES.getRes("wheel" + this.UserRole[this.RankArr[t].id] + "_png"));
            for (var t = 2; 15 > t; t++) this.addChild(this.InterImage[t]);
            for (var t = 0; 3 > t; t++) this.HeroLayer[t] = new egret.DisplayObjectContainer,
                this.addChild(this.HeroLayer[t]),
                this.HeroLayer[t].y = -115 - 15 * t,
                this.HeroLayer[t].width = 150,
                this.HeroLayer[t].height = 120,
                this.HeroLayer[t].anchorOffsetX = this.HeroLayer[t].width / 2,
                this.HeroLayer[t].anchorOffsetY = this.HeroLayer[t].height / 2;
            this.HeroLayer[0].x = 568,
                this.HeroLayer[1].x = 378,
                this.HeroLayer[2].x = 758;
            for (var t = 0; 3 > t; t++) this.HeroLayer[t].addChild(this.HeroImage[t]),
                this.HeroLayer[t].addChild(this.HeroImage2[t]),
                this.HeroLayer[t].addChild(this.HeroImage3[t]);
            this.InterImage[2].scaleX = 0,
                this.InterImage[2].scaleY = 0,
                this.InterImage[2].alpha = 0,
                this.InterImage[3].alpha = 0,
                this.InterImage[3].scaleX = 0,
                this.InterImage[3].scaleY = 0,
                this.InterImage[2].pos(568, 100, 260, 260),
                this.InterImage[3].pos(568, 100, 191, 157),
                this.InterImage[4].pos(568, 400, 580, 133),
                this.InterImage[5].pos(568, 400, 580, 133),
                this.InterImage[6].pos(773, 842, 120, 110),
                this.InterImage[7].pos(773, 833, 75, 60),
                this.InterImage[8].pos(753, 849, 30, 30),
                this.InterImage[9].pos(796, 849, 30, 30),
                this.InterImage[10].pos(363, 842, 120, 110),
                this.InterImage[11].pos(568, 842, 286, 110),
                this.InterImage[12].pos(200, 420, 26, 31),
                this.InterImage[13].pos(936, 420, 26, 31),
                this.InterImage[14].visible = !1,
                this.InterImage[14].pos(1033 + this.iPhoneW, 540, 120, 150);
            for (var t = 0; 3 > t; t++) {
                if (9 == this.UserRole[this.RankArr[t].id] || 11 == this.UserRole[this.RankArr[t].id]) {
                    this.HeroImage[t].pos(75, 60, 190, 108);
                    var o = .9
                } else if (8 == this.UserRole[this.RankArr[t].id]) this.HeroImage[t].pos(75, 50, 150, 120);
                else {
                    this.HeroImage[t].pos(75, 60, 150, 120);
                    var o = 1
                }
                8 == this.UserRole[this.RankArr[t].id] ? (this.HeroImage2[t].pos(75 - this.HeroPointX1[this.UserRole[this.RankArr[t].id] - 1] / 2, this.HeroImage[t].y + 35, 70, 70), this.HeroImage3[t].pos(75 + this.HeroPointX2[this.UserRole[this.RankArr[t].id] - 1] / 2, this.HeroImage[t].y + 45, 50, 50)) : (this.HeroImage2[t].pos(75 - this.HeroPointX1[this.UserRole[this.RankArr[t].id] - 1] / 2 * o, this.HeroImage[t].y + 30, 60 * o, 60 * o), this.HeroImage3[t].pos(75 + this.HeroPointX2[this.UserRole[this.RankArr[t].id] - 1] / 2 * o, this.HeroImage[t].y + 30, 60 * o, 60 * o))
            }
            for (var t = 0; 6 > t; t++) 0 == this.RankArr[t].id && (this.HeroRank = t + 1, this.UserRankNum = t + 1);
            var r = RES.getRes("soundwin_mp3");
            r.play(0, 1),
                this.NumMoney = this.NumMoneyTT,
                this.CountLabel = new egret.BitmapText,
                this.addChild(this.CountLabel),
                this.CountLabel.font = RES.getRes("numimage_fnt"),
                this.CountLabel.text = "x " + this.NumMoney,
                this.CountLabel.x = 75 - this.iPhoneW,
                this.CountLabel.y = 70,
                this.CountLabel.scaleX = .6,
                this.CountLabel.scaleY = .6,
                this.CountLabel.anchorOffsetX = 0,
                this.CountLabel.anchorOffsetY = this.CountLabel.height / 2,
                this.NumScore = this.NumScoreTT;
            for (var t = 0; 1 > t; t++) this.NumLabel[t] = new egret.BitmapText,
                this.addChild(this.NumLabel[t]),
                this.NumLabel[t].font = RES.getRes("numimage_fnt"),
                this.NumLabel[t].x = 75 - this.iPhoneW,
                this.NumLabel[t].scaleX = .6,
                this.NumLabel[t].scaleY = .6,
                this.NumLabel[t].text = "123",
                this.NumLabel[t].anchorOffsetX = 0,
                this.NumLabel[t].anchorOffsetY = this.NumLabel[0].height / 2;
            this.NumLabel[0].y = 30,
                this.NumLabel[0].text = "e " + this.NumScore;
            for (var i, a, s = [], n = function(e) {
                        i = new egret.TextField,
                            h.HeroLayer[e].addChildAt(i, 2),
                            i.size = 26,
                            i.x = 75,
                            i.y = -20,
                            i.textColor = 0,
                            i.text = h.UserName[h.RankArr[e].id].nickName.substring(0, 9),
                            0 == h.RankArr[e].id && (i.textColor = 9905700),
                            i.anchorOffsetX = (i.width - 40) / 2,
                            i.anchorOffsetY = i.height / 2,
                            s[e] = new egret.Bitmap,
                            s[e].pos(60 - i.width / 2, -20, 40, 40),
                            h.HeroLayer[e].addChildAt(s[e], 2),
                            h.UserName[h.RankArr[e].id].nickName == h.Connect.GetMyName() ? (console.log(h.UserName[h.RankArr[e].id]), RES.getResByUrl(h.UserName[h.RankArr[e].id].Country,
                                function(t) {
                                    s[e].texture = t
                                },
                                h, RES.ResourceItem.TYPE_IMAGE)) : (console.log(h.UserName[h.RankArr[e].id].Country), s[e].texture = RES.getRes("flag" + h.UserName[h.RankArr[e].id].Country + "_png")),
                            a = new egret.Shape,
                            h.HeroLayer[e].addChildAt(a, 2),
                            a.graphics.beginFill(255),
                            a.graphics.drawCircle(s[e].x, -20, 20),
                            a.graphics.endFill(),
                            s[e].mask = a
                    },
                    h = this, t = 0; 3 > t; t++) n(t);
            for (var t = 0; 3 > t; t++) {
                this.HeroImage[t].rotation = .5;
                var l = Math.floor(500 * Math.random() + 400),
                    c = 0;
                c = 1 == t ? 8 : 0,
                    egret.Tween.get(this.HeroLayer[t]).to({
                            y: 280 + 30 * t + c
                        },
                        l),
                    egret.Tween.get(this.HeroImage[t], {
                        loop: !0
                    }).to({
                            y: this.HeroImage[t].y + 5,
                            rotation: .2
                        },
                        400 + 100 * t).to({
                            y: this.HeroImage[t].y,
                            rotation: -.5
                        },
                        200 + 100 * t),
                    egret.Tween.get(this.HeroImage[t]).to({},
                        l).to({
                            y: this.HeroImage[t].y + 8
                        },
                        100).to({
                            y: this.HeroImage[t].y
                        },
                        100).to({
                            y: this.HeroImage[t].y + 4
                        },
                        60).to({
                            y: this.HeroImage[t].y
                        },
                        60)
            }
            0 == this.PlatForm && egret.Tween.get(this.InterImage[14], {
                    loop: !0
                }).to({
                        scaleX: .95,
                        scaleY: .95
                    },
                    600).to({
                        scaleX: 1,
                        scaleY: 1
                    },
                    600),
                egret.Tween.get(this.InterImage[3]).to({},
                    1e3).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    },
                    800, egret.Ease.getBackOut(1)),
                egret.Tween.get(this.InterImage[2]).to({},
                    1e3).to({
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    },
                    800, egret.Ease.getBackOut(1)),
                egret.setTimeout(function() {
                        1 == e.choose && egret.Tween.get(e.InterImage[2], {
                            loop: !0
                        }).to({
                                rotation: 360
                            },
                            3e3)
                    },
                    this, 1800);
            var g = new particle.GravityParticleSystem(RES.getRes("texiao2_png"), RES.getRes("texiao2_json"));
            this.addChild(g),
                g.x = 200,
                g.y = 410,
                g.start(),
                g.emissionTime = 2e3;
            var u = new particle.GravityParticleSystem(RES.getRes("texiao2_png"), RES.getRes("texiao2_json"));
            this.addChild(u),
                u.x = 936,
                u.y = 410,
                u.start(),
                u.emissionTime = 2e3,
                1 == platform.hasRAD() ? (this.ShowADNow(1), egret.setTimeout(this.ShowPrize, this, 1700)) : (this.BeginState = 1, this.PropState = 0, this.CountDownStart = 0, this.NumMoneyTT = this.NumMoneyTT + (1700 - 200 * this.HeroRank), this.CountDownNum = (1700 - 200 * this.HeroRank) / 20, this.NumScoreTT = this.NumScoreTT + (17 - 2 * this.HeroRank), this.PropNum = (17 - 2 * this.HeroRank) / 20, this.SaveGameScore(), this.Connect.UpLoadScore(this.NumScoreTT), this.ShowADNow(1)),
                this.Connect.RequestUserData()
        },
        t.prototype.EndResult = function() {
            this.MoveCanNot = 0;
            for (var e = 2; 15 > e; e++) this.removeChild(this.InterImage[e]);
            for (var e = 0; 6 > e; e++) this.removeChild(this.RankImage[e]),
                this.removeChild(this.RankScore[e]);
            for (var e = 0; 3 > e; e++) this.removeChild(this.HeroLayer[e]);
            for (var e = 1; 6 > e; e++) this.removeChild(this.RankNum[e]);
            this.removeChild(this.SelfImage),
                this.removeChild(this.TheFirst)
        },
        t.prototype.PointInImage = function(e, t, o) {
            return e > o.x - o.width / 2 && e < o.x + o.width / 2 && t > o.y - o.height / 2 && t < o.y + o.height / 2 ? !0 : !1
        },
        t.prototype.ImageInImage = function(e, t) {
            return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
        },
        t.prototype.PointInRect = function(e, t, o, r, i) {
            return i.x > e && i.x < e + o && i.y > t && i.y < t + r ? !0 : !1
        },
        t.prototype.SetColor = function(e, t) {
            var o = [];
            1 == t ? o = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] : 2 == t ? o = [1, 0, 0, 0, -60, 0, 1, 0, 0, -60, 0, 0, 1, 0, -60, 0, 0, 0, 1, 0] : 3 == t && (o = [1, 0, 0, 0, 80, 0, 1, 0, 0, 80, 0, 0, 1, 0, 80, 0, 0, 0, 1, 0]);
            var r = new egret.ColorMatrixFilter(o);
            e.filters = [r]
        },
        t.prototype.SaveGameScore = function() {
            var e = {
                NowHeros: this.NowHeroTT,
                NumScores: this.NumScoreTT,
                NumMoneys: this.NumMoneyTT,
                NumVideos: this.NumVideoTT,
                NumLocks: this.NumLockTT
            };
            this.Connect.setData(e)
        },
        t.prototype.LoadGameScore = function() {
            var e = this.Connect.readData();
            if (console.log(e), 0 == e.NowHeros || void 0 == e.NowHeros) {
                this.NumScoreTT = 0,
                    this.NowHeroTT = 1,
                    this.NumMoneyTT = 1e3,
                    this.NumVideoTT = 0,
                    this.NumLockTT[0] = 1;
                for (var t = 1; 11 > t; t++) this.NumLockTT[t] = 0;
                this.SaveGameScore(),
                    this.Connect.UpLoadScore(this.NumScoreTT)
            } else this.NowHeroTT = e.NowHeros,
                this.NumScoreTT = e.NumScores,
                this.NumMoneyTT = e.NumMoneys,
                this.NumVideoTT = e.NumVideos,
                this.NumLockTT = e.NumLocks
        },
        t.prototype.TouchBegin = function(e) {
            if (0 == this.MoveCanNot) {
                var t = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2);
                if (1 != this.RankNow) {
                    if (0 == this.choose) {
                        if (0 == this.RankNow) {
                            var o = 0;
                            if (o = this.StageWidth < 1e3 ? 155 : 30, this.PointInRect(85, 257, 60, 55, t)) {
                                this.SetColor(this.InterImage[2], 2);
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(151, 257, 128, 55, t)) {
                                this.SetColor(this.InterImage[3], 2);
                                var r = RES.getRes("soundplay_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(289, 257, 128, 55, t)) {
                                this.SetColor(this.InterImage[4], 2);
                                var r = RES.getRes("soundplay_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(423, 257, 60, 55, t)) {
                                this.SetColor(this.InterImage[6], 2),
                                    this.SetColor(this.InterImage[7], 2),
                                    this.SetColor(this.InterImage[8], 2),
                                    this.SetColor(this.InterImage[9], 2);
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(478 + this.iPhoneW / 2, o, 70, 90, t) && 0 == this.PlatForm) {
                                this.InterImage[11].alpha = .7;
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            }
                        } else if (2 == this.RankNow)
                            if (this.PointInRect(15 - this.iPhoneW / 2, 262, 60, 55, t)) {
                                this.SetColor(this.RankImage[1], 2);
                                var r = RES.getRes("soundpress_mp3");
                                r.play(0, 1)
                            } else if (this.PointInRect(122, 17, 35, 81, t) && 1 == this.RankPage) {
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(122, 99, 35, 81, t) && 0 == this.RankPage) {
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        }
                    } else if (100 == this.choose) this.PointInRect(762, 7, 194, 91, t) && this.SetColor(this.InterImage[1], 2);
                    else if (1 == this.choose)
                        if (0 == this.GameState) {
                            if (3 == this.DaoDa) {
                                if (this.PointInRect(353, 63, 40, 40, t)) {
                                    this.SetColor(this.InterImage[6], 2);
                                    var r = RES.getRes("soundpress_mp3");
                                    r.play(0, 1)
                                } else if (this.PointInRect(212, 187, 143, 55, t)) {
                                    this.SetColor(this.InterImage[7], 2);
                                    var r = RES.getRes("soundpress_mp3");
                                    r.play(0, 1)
                                }
                            } else if (this.HeroJumpState[0] < 2) {
                                egret.Tween.removeTweens(this.HeroLayer[0]),
                                    this.HeroJumpState[0]++,
                                    2 == this.HeroJumpState[0] ? (this.HeroBody[0].velocity[1] < 0 && this.HeroImage[0].y > 280 ? egret.Tween.get(this.HeroLayer[0]).to({
                                            rotation: -10
                                        },
                                        100) : egret.Tween.get(this.HeroLayer[0]).to({
                                            rotation: -360
                                        },
                                        800), this.HeroBody[0].velocity[1] = 6.5) : (this.HeroState[0] = 1, this.HeroBody[0].velocity[1] = 8 + .15 * this.UserRole[0], egret.Tween.get(this.HeroLayer[0]).to({
                                            rotation: -10
                                        },
                                        100)),
                                    this.HeroImage[6].y = this.CarPositionY[0],
                                    this.CarMoveState[0] = 0,
                                    this.Trailing[6].visible = !1;
                                var r = RES.getRes("soundjump1_mp3");
                                r.play(0, 1)
                            }
                        } else if (1 == this.GameState) {
                        if (0 == this.BeginState) return;
                        if (this.PointInRect(151, 243, 60, 55, t)) {
                            this.SetColor(this.InterImage[10], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(212, 243, 143, 55, t)) {
                            this.SetColor(this.InterImage[11], 2);
                            var r = RES.getRes("soundplay_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(356, 243, 60, 55, t)) {
                            this.SetColor(this.InterImage[6], 2),
                                this.SetColor(this.InterImage[7], 2),
                                this.SetColor(this.InterImage[8], 2),
                                this.SetColor(this.InterImage[9], 2);
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (this.PointInRect(481 + this.iPhoneW / 2, 235, 70, 90, t) && 0 == this.PlatForm) {
                            this.InterImage[14].alpha = .7;
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        }
                    } else if (2 == this.GameState && this.PointInRect(408, 96, 20, 20, t)) {
                        this.SetColor(this.PrizeImage[6], 2);
                        var r = RES.getRes("soundmoney1_mp3");
                        r.play(0, 1)
                    }
                } else if (this.PointInRect(130, 115, 50, 50, t)) {
                    this.SetColor(this.ChooseImage[2], 2);
                    var r = RES.getRes("soundshop_mp3");
                    r.play(0, 1)
                } else if (this.PointInRect(388, 115, 50, 50, t)) {
                    this.SetColor(this.ChooseImage[3], 2);
                    var r = RES.getRes("soundshop_mp3");
                    r.play(0, 1)
                } else if (this.PointInRect(151, 227, 60, 55, t)) {
                    this.SetColor(this.ChooseImage[4], 2);
                    var r = RES.getRes("soundpress_mp3");
                    r.play(0, 1)
                } else if (this.PointInRect(221, 227, 143, 55, t))
                    if (this.SetColor(this.ChooseImage[5], 2), 0 == this.NumLockTT[this.BuyHero - 1]) {
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    } else {
                        var r = RES.getRes("soundplay_mp3");
                        r.play(0, 1)
                    }
                else if (this.PointInRect(356, 227, 60, 55, t)) {
                    this.SetColor(this.ChooseImage[9], 2);
                    var r = RES.getRes("soundpress_mp3");
                    r.play(0, 1)
                } else {
                    if (this.StageWidth < 950) var i = 512,
                        a = 20,
                        s = 60,
                        n = 60;
                    else var i = 460,
                        a = 50,
                        s = 90,
                        n = 60;
                    if (this.PointInRect(i + this.iPhoneW / 2, a, s, n, t)) {
                        this.SetColor(this.ChooseImage[10], 2);
                        var r = RES.getRes("soundpress_mp3");
                        r.play(0, 1)
                    }
                }
            }
        },
        t.prototype.TouchMoved = function(e) {
            0 != this.MoveCanNot
        },
        t.prototype.TouchEnded = function(e) {
            var t = this;
            if (0 == this.MoveCanNot) {
                var o = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2);
                if (1 != this.RankNow) {
                    if (0 == this.choose) {
                        if (0 == this.RankNow) {
                            for (var r = 2; 10 > r; r++) this.SetColor(this.InterImage[r], 1);
                            this.InterImage[11].alpha = 1;
                            var i = 0;
                            if (i = this.StageWidth < 1e3 ? 155 : 30, this.PointInRect(85, 257, 60, 55, o)) {
                                console.log("showRank");
                            } else if (this.PointInRect(151, 257, 128, 55, o)) {
                                for (var r = 1; 12 > r; r++) this.InterImage[r].visible = !1;
                                this.ShowLoading()
                            } else if (this.PointInRect(289, 257, 128, 55, o)) this.Connect.showChoose().then(function() {
                                //for (var e = 1; 12 > e; e++) t.InterImage[e].visible = !1;
                                //t.ShowLoading()
                            });
                            else if (this.PointInRect(423, 257, 60, 55, o)) {
                                for (var r = 1; 12 > r; r++) this.InterImage[r].visible = !1;
                                this.ShowHero()
                            } else this.PointInRect(478 + this.iPhoneW / 2, i, 70, 90, o) && 0 == this.PlatForm && this.Connect.OpenMoreGame(this.NewGame % 3 + 1)
                        } else if (2 == this.RankNow)
                            if (this.SetColor(this.RankImage[1], 1), this.PointInRect(15 - this.iPhoneW / 2, 262, 60, 55, o)) {
                                this.RankNow = 0;
                                for (var r = 1; 11 > r; r++) this.InterImage[r].visible = !0;
                                0 == this.PlatForm && (this.InterImage[11].visible = !0),
                                    this.CloseRank()
                            } else this.PointInRect(122, 17, 35, 81, o) && 1 == this.RankPage ? (this.CloseRank(), this.RankPage = 0, this.ShowRank()) : this.PointInRect(122, 99, 35, 81, o) && 0 == this.RankPage && (this.CloseRank(), this.RankPage = 1, this.ShowRank())
                    } else if (100 == this.choose);
                    else if (1 == this.choose)
                        if (0 == this.GameState) 3 == this.DaoDa && (this.SetColor(this.InterImage[6], 1), this.SetColor(this.InterImage[7], 1), this.PointInRect(353, 63, 40, 40, o) ? (this.EndAgain(), this.ShowResult()) : this.PointInRect(212, 187, 143, 55, o) && this.Connect.ShareGame().then(function() {
                            t.EndAgain(),
                                t.ShowResult()
                        }));
                        else if (1 == this.GameState) {
                        if (0 == this.BeginState) return;
                        for (var r = 6; 12 > r; r++) this.SetColor(this.InterImage[r], 1);
                        if (this.InterImage[14].alpha = 1, this.PointInRect(151, 243, 60, 55, o)) this.NewGame++,
                            this.ReleaseGame(),
                            this.choose = 0,
                            this.InitGame();
                        else if (this.PointInRect(212, 243, 143, 55, o)) this.EndResult(),
                            this.ShowLoading();
                        else if (this.PointInRect(356, 243, 60, 55, o)) {
                            for (var r = 0; 6 > r; r++) this.RankImage[r].visible = !1,
                                this.RankScore[r].visible = !1;
                            for (var r = 1; 6 > r; r++) this.RankNum[r].visible = !1;
                            this.TheFirst.visible = !1,
                                this.SelfImage.visible = !1,
                                this.ShowHero()
                        } else this.PointInRect(481 + this.iPhoneW / 2, 235, 70, 90, o) && 0 == this.PlatForm && this.Connect.OpenMoreGame(this.NewGame % 3 + 1)
                    } else if (2 == this.GameState) {
                        for (var r = 5; 7 > r; r++) this.SetColor(this.PrizeImage[r], 1);
                        this.PointInRect(408, 96, 20, 20, o) && (this.BeginState = 1, this.PropState = 0, this.CountDownStart = 0, this.NumMoneyTT = this.NumMoneyTT + this.NowMoney, this.CountDownNum = this.NowMoney / 20, this.NumScoreTT = this.NumScoreTT + (17 - 2 * this.HeroRank), this.PropNum = (17 - 2 * this.HeroRank) / 20, egret.setTimeout(this.ShowTipView, this, 400, "You get $" + this.NowMoney), this.SaveGameScore(), this.Connect.UpLoadScore(this.NumScoreTT), this.EndPrize(), this.EndSlot())
                    }
                } else {
                    for (var r = 2; 6 > r; r++) this.SetColor(this.ChooseImage[r], 1);
                    if (this.SetColor(this.ChooseImage[9], 1), this.SetColor(this.ChooseImage[10], 1), this.StageWidth < 950) var a = 512,
                        s = 20,
                        n = 60,
                        h = 60;
                    else var a = 460,
                        s = 50,
                        n = 90,
                        h = 60;
                    if (this.PointInRect(130, 115, 50, 50, o)) this.ShopNum > 1 && (this.ShopNum--, 2 == this.ShopNum ? this.BuyHero = 8 : 3 == this.ShopNum ? this.BuyHero = 9 : this.ShopNum >= 10 ? this.BuyHero = this.ShopNum : 1 == this.ShopNum ? this.BuyHero = 1 : this.BuyHero = this.ShopNum - 2, egret.Tween.get(this.Scroller).to({
                            scrollLeft: 600 * (this.ShopNum - 1)
                        },
                        400), 8 == this.BuyHero && 0 == this.NumLockTT[this.BuyHero - 1] || 9 == this.BuyHero && 0 == this.NumLockTT[this.BuyHero - 1] ? egret.Tween.get(this.ChooseImage[11]).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        600, egret.Ease.getBackOut(2)) : 1 == this.ChooseImage[11].scaleX && (egret.Tween.removeTweens(this.ChooseImage[11]), egret.Tween.get(this.ChooseImage[11]).to({
                            scaleX: 0,
                            scaleY: 0
                        },
                        200)), this.NumLabel[3].text = this.ShopNum + "l11", this.NumLabel[3].anchorOffsetX = this.NumLabel[3].width, 0 == this.NumLockTT[this.BuyHero - 1] ? this.ChooseImage[9].texture = RES.getRes("shopbtn4_png") : this.ChooseImage[9].texture = RES.getRes("titlebtn6_png"));
                    else if (this.PointInRect(388, 115, 50, 50, o)) this.ShopNum < 11 && (this.ShopNum++, 2 == this.ShopNum ? this.BuyHero = 8 : 3 == this.ShopNum ? this.BuyHero = 9 : this.ShopNum >= 10 ? this.BuyHero = this.ShopNum : 1 == this.ShopNum ? this.BuyHero = 1 : this.BuyHero = this.ShopNum - 2, egret.Tween.get(this.Scroller).to({
                            scrollLeft: 600 * (this.ShopNum - 1)
                        },
                        400), 8 == this.BuyHero && 0 == this.NumLockTT[this.BuyHero - 1] || 9 == this.BuyHero && 0 == this.NumLockTT[this.BuyHero - 1] ? egret.Tween.get(this.ChooseImage[11]).to({
                            scaleX: 1,
                            scaleY: 1
                        },
                        600, egret.Ease.getBackOut(2)) : 1 == this.ChooseImage[11].scaleX && (egret.Tween.removeTweens(this.ChooseImage[11]), egret.Tween.get(this.ChooseImage[11]).to({
                            scaleX: 0,
                            scaleY: 0
                        },
                        200)), this.NumLabel[3].text = this.ShopNum + "l11", this.NumLabel[3].anchorOffsetX = this.NumLabel[3].width, 0 == this.NumLockTT[this.BuyHero - 1] ? this.ChooseImage[9].texture = RES.getRes("shopbtn4_png") : this.ChooseImage[9].texture = RES.getRes("titlebtn6_png"));
                    else if (this.PointInRect(151, 227, 60, 55, o)) {
                        if (1 == this.choose)
                            for (var r = 0; 12 > r; r++) this.InterImage[r].visible = !0;
                        else {
                            for (var r = 0; 11 > r; r++) this.InterImage[r].visible = !0;
                            1 == this.PlatForm && (this.InterImage[11].visible = !1)
                        }
                        if (1 == this.choose) {
                            for (var r = 0; 6 > r; r++) this.RankImage[r].visible = !0,
                                this.RankScore[r].visible = !0;
                            for (var r = 1; 6 > r; r++) this.RankNum[r].visible = !0;
                            this.TheFirst.visible = !0,
                                this.SelfImage.visible = !0
                        }
                        this.EndHero()
                    } else if (this.PointInRect(356, 227, 60, 55, o)) this.BuyHero >= 8 ? 1 == this.NumLockTT[this.BuyHero - 1] && this.Connect.showChoose().then(function() {
                        if (0 == t.choose)
                            for (var e = 1; 10 > e; e++) t.InterImage[e].visible = !1;
                        else t.EndResult();
                        t.PlayState = t.BuyHero,
                            t.EndHero(),
                            t.ShowLoading()
                    }) : 0 == this.NumLockTT[this.BuyHero - 1] && 0 == this.TryState[this.BuyHero - 1] ? (self = this, HUHU_showRewardedVideoAd(function() {
                        self.VideoForPlay = 1, self.ShowADNow(0)
                    }, function() {
                        self.ShowTipView("Ads is not ready")
                    })) : 1 == this.NumLockTT[this.BuyHero - 1] && this.Connect.showChoose().then(function() {
                        if (0 == t.choose)
                            for (var e = 1; 10 > e; e++) t.InterImage[e].visible = !1;
                        else t.EndResult();
                        t.PlayState = t.BuyHero,
                            t.EndHero(),
                            t.ShowLoading()
                    });
                    else if (this.PointInRect(a + this.iPhoneW / 2, s, n, h, o)) this.VideoForPlay = 0,
                        self = this, HUHU_showRewardedVideoAd(function() {
                            self.ShowADNow(0)
                        }, function() {
                            self.ShowTipView("Ads is not ready")
                        });
                    else if (this.PointInRect(212, 227, 143, 55, o))
                        if (1 == this.NumLockTT[this.BuyHero - 1]) {
                            if (0 == this.choose)
                                for (var r = 1; 10 > r; r++) this.InterImage[r].visible = !1;
                            else this.EndResult();
                            this.NowHeroTT = this.BuyHero,
                                this.SaveGameScore(),
                                this.EndHero(),
                                this.ShowLoading()
                        } else this.BuyHero < 8 || this.BuyHero >= 10 ? this.NumMoneyTT < this.RoleMoney[this.BuyHero - 1] ? this.ShowTipView("Your money is not enough") : 0 == this.NumLockTT[this.BuyHero - 1] && (this.NumMoneyTT -= this.RoleMoney[this.BuyHero - 1], this.NumLockTT[this.BuyHero - 1] = 1, this.ScoreLabel.text = "x" + this.NumMoneyTT, this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2, 1 == this.choose && (this.CountLabel.text = "x " + this.NumMoneyTT, this.CountLabel.anchorOffsetX = 0, this.CountLabel.anchorOffsetY = this.CountLabel.height / 2), this.FriendsLabel.visible = !1, this.NowHeroTT = this.BuyHero, this.ChooseImage[5].texture = RES.getRes("titlebtn5_png"), this.ChooseImage[9].texture = RES.getRes("titlebtn6_png"), this.ShowTipView("Unlock Now!"), this.SaveGameScore()) : this.ShowTipView("Please Play Tomorrow.");
                    if (1 == this.NumLockTT[this.BuyHero - 1]) this.ChooseImage[12].visible = !1,
                        this.ChooseImage[5].texture = RES.getRes("titlebtn5_png"),
                        this.UILabel[1].visible = !1,
                        this.FriendsLabel.visible = !1,
                        this.UILabel[0].text = "Choose Your Car",
                        this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2;
                    else if (this.BuyHero < 8 || this.BuyHero >= 10) this.UILabel[1].visible = !1,
                        this.ChooseImage[12].visible = !1,
                        this.UILabel[0].text = "Buy Your Dream Car",
                        this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2,
                        this.ChooseImage[5].texture = RES.getRes("shopbtn3_png"),
                        this.BuyHero <= 4 ? 1 == this.TryState[this.BuyHero - 1] ? this.ChooseImage[9].texture = RES.getRes("shopbtn7_png") : this.ChooseImage[9].texture = RES.getRes("shopbtn4_png") : this.BuyHero >= 10 || 1 == this.TryState[this.BuyHero - 1] ? this.ChooseImage[9].texture = RES.getRes("shopbtn7_png") : this.ChooseImage[9].texture = RES.getRes("shopbtn4_png"),
                        this.FriendsLabel.visible = !0,
                        this.FriendsLabel.text = "x" + this.RoleMoney[this.BuyHero - 1],
                        this.FriendsLabel.anchorOffsetX = this.FriendsLabel.width / 2;
                    else {
                        if (this.FriendsLabel.visible = !1, this.ChooseImage[12].visible = !0, 8 == this.BuyHero) {
                            this.ChooseImage[12].texture = RES.getRes("logintitle1_png");
                            var l = 2
                        } else {
                            this.ChooseImage[12].texture = RES.getRes("logintitle2_png");
                            var l = 3
                        }
                        this.ChooseImage[9].texture = RES.getRes("shopbtn7_png"),
                            this.UILabel[0].text = "Get Your Dream Car",
                            this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2,
                            this.UILabel[1].visible = !0,
                            this.UILabel[1].text = "Login for " + l + " days you can get it",
                            this.UILabel[1].anchorOffsetX = this.UILabel[1].width / 2,
                            this.ChooseImage[5].texture = RES.getRes("shopbtn3_png")
                    }
                }
            }
        },
        t
}(egret.Sprite);
__reflect(GameScene.prototype, "GameScene");
var Facade = function() {
    function e() {
        this._responders = [],
            this._commands = {},
            e.inst = this,
            this.emiter = new Emiter
    }
    return e.prototype.registResponser = function(e) {
            if (this._responders.some(function(t) {
                    return t.res == e
                })) throw "this responser has been registed already!";
            for (var t = e.listResponse(), o = [], r = function(t) {
                        var r = i.emiter.on(t,
                            function(o) {
                                e.doResponse(t, o)
                            });
                        o.push({
                            name: t,
                            id: r
                        })
                    },
                    i = this, a = 0, s = t; a < s.length; a++) {
                var n = s[a];
                r(n)
            }
            this._responders.push({
                res: e,
                ids: o
            })
        },
        e.prototype.unregistResponser = function(e) {
            for (var t = 0,
                    o = this._responders; t < o.length; t++) {
                var r = o[t];
                if (r.res == e) {
                    for (var i = r.ids,
                            a = 0,
                            s = i; a < s.length; a++) {
                        var n = s[a];
                        this.emiter.rm(n.id, n.name)
                    }
                    this._responders.splice(this._responders.indexOf(r), 1);
                    break
                }
            }
        },
        e.prototype.registCommand = function(e, t) {
            if (this._commands[e]) throw "cmd has been registed already!!!";
            var o = this.emiter.on(e,
                function(o) {
                    (new t).excute(o, e)
                });
            this._commands[e] = o
        },
        e.prototype.unregistCommand = function(e) {
            var t = this._commands[e];
            t && this.emiter.rm(t, e)
        },
        e.prototype.notify = function(e, t) {
            return this.emiter.emit(e, t)
        },
        e.prototype.dispose = function() {
            this.emiter.rmall(),
                this._responders.length = 0
        },
        e
}();
__reflect(Facade.prototype, "Facade");
var BasePlatform = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.challenge_info = null,
            t.isNewPlayer = !1,
            t.playerType = "old",
            t.appId = GameConfig.APPID,
            t.appName = GameConfig.APPNAME,
            t.switchGameInfo = null,
            t.invite_skin_data = null,
            t.entry = "normal",
            t.$remoteData = null,
            t
    }
    return __extends(t, e),
        t.prototype.needAccount = function() {
            return !1
        },
        t.prototype.initSDK = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.initRemoteData()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                })
        },
        t.prototype.setLoadingProgress = function(e) {},
        t.prototype.startGame = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2]
                        })
                })
        },
        t.prototype.getToken = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, null]
                        })
                })
        },
        Object.defineProperty(t.prototype, "userInfo", {
            get: function() {
                return {
                    name: "terran",
                    id: "122",
                    photo: "profile_pic.jpg?igpid=2803559339766752&height=256&width=256&ext=1599716471&hash=AeSd1kHp7EITlsC_",
                    friends: [],
                    lang: "en_US"
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getContextId = function() {
            return ""
        },
        t.prototype.getPlayerId = function() {
            return "terran"
        },
        t.prototype.hasIAD = function() {
            return !0
        },
        t.prototype.showIAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2]
                        })
                })
        },
        t.prototype.hasRAD = function() {
            return !0
        },
        t.prototype.showRAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2]
                        })
                })
        },
        t.prototype.suportAD = function() {
            return !0
        },
        t.prototype.getFriends = function() {
            return []
        },
        t.prototype.invite = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2]
                        })
                })
        },
        t.prototype.share = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, !0]
                        })
                })
        },
        t.prototype.choose = function(e, t, o) {
            return void 0 === t && (t = !1),
                void 0 === o && (o = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(e) {
                                return [2, !1]
                            })
                    })
        },
        t.prototype.switchCtx = function(e, t) {
            return void 0 === t && (t = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(e) {
                                return [2, !0]
                            })
                    })
        },
        t.prototype.createCtx = function(e, t) {
            return void 0 === t && (t = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(e) {
                                return [2, !0]
                            })
                    })
        },
        t.prototype.getContextPlayers = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, []]
                        })
                })
        },
        t.prototype.matchPlayerAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, !0]
                        })
                })
        },
        t.prototype.isTournament = function() {
            return !1
        },
        t.prototype.getTournament = function() {
            return !0
        },
        t.prototype.switchGame = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, !0]
                        })
                })
        },
        t.prototype.updateStatues = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2]
                        })
                })
        },
        t.prototype.listResponse = function() {
            return []
        },
        t.prototype.doResponse = function(e, t) {},
        t.prototype.log = function(e, t, o) {
            void 0 === o && (o = 1),
                console.log("name", e, "data", JSON.stringify(t))
        },
        t.prototype.getPlatFormiOS = function() {
            return !1
        },
        t.prototype.getAllTimeEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, []]
                        })
                })
        },
        t.prototype.getAllTimeEntries = function() {
            return []
        },
        t.prototype.getWeeklyEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, []]
                        })
                })
        },
        t.prototype.getWeeklyEntries = function() {
            return []
        },
        t.prototype.getHighScore = function() {
            return +localStorage.getItem("hight_score1") || 0
        },
        t.prototype.setHighScore = function(e, t) {
            localStorage.setItem("hight_score1", e + "")
        },
        t.prototype.postSessionScore = function(e, t) {
            void 0 === t && (t = !1)
        },
        t.prototype.initRemoteData = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.getData(["user_info1"])];
                                case 1:
                                    e = a.sent(),
                                        t = {};
                                    try {
                                        t = JSON.parse(e.user_info1)
                                    } catch (s) {}
                                    o = null;
                                    try {
                                        o = JSON.parse(localStorage.getItem("local_user_info_" + this.getPlayerId()))
                                    } catch (s) {}
                                    return r = o && +o.w__tsp || -1,
                                        i = t && +t.w__tsp || 0,
                                        r > i && (t = o, console.log("use local user_info", r, i)),
                                        this.$remoteData = t || {}, [2]
                            }
                        })
                })
        },
        t.prototype.syncRemoteData = function(e) {
            return void 0 === e && (e = !1),
                __awaiter(this, void 0, void 0,
                    function() {
                        var t;
                        return __generator(this,
                            function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.$remoteData.w__tsp = Date.now(),
                                            t = JSON.stringify(this.$remoteData), [4, this.setData({
                                                    user_info1: t
                                                },
                                                e)];
                                    case 1:
                                        return o.sent(),
                                            localStorage.setItem("local_user_info_" + this.getPlayerId(), t), [2]
                                }
                            })
                    })
        },
        t.prototype.cr = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.$remoteData = {}, [4, this.syncRemoteData(!0)];
                                case 1:
                                    return e.sent(),
                                        this.emit("cr_data"), [2]
                            }
                        })
                })
        },
        Object.defineProperty(t.prototype, "remoteData", {
            get: function() {
                return this.$remoteData
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getData = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t, o, r, i;
                    return __generator(this,
                        function(a) {
                            for (t = {},
                                o = 0, r = e; o < r.length; o++) i = r[o],
                                t[i] = egret.localStorage.getItem(i);
                            return [2, t]
                        })
                })
        },
        t.prototype.setData = function(e, t) {
            return void 0 === t && (t = !1),
                __awaiter(this, void 0, void 0,
                    function() {
                        var t;
                        return __generator(this,
                            function(o) {
                                for (t in e) egret.localStorage.setItem(t, e[t]);
                                return [2]
                            })
                    })
        },
        t.prototype.canAdd2HomeScreen = function() {
            return !0
        },
        t.prototype.add2HomeScreen = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, {
                                res: !0,
                                code: ""
                            }]
                        })
                })
        },
        t.prototype.checkBotSubscribe = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            return [2, {
                                result: !0
                            }]
                        })
                })
        },
        t.prototype.suportIAP = function() {
            return !1
        },
        t.prototype.purchaseAsync = function(e, t) {
            return void 0 === t && (t = ""),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(e) {
                                return [2, !1]
                            })
                    })
        },
        t.prototype.hasPurchased = function(e) {
            return !1
        },
        t
}(Emiter);
__reflect(BasePlatform.prototype, "BasePlatform", ["IResponder"]);
var Http = function() {
    function e() {}
    return e.prototype.encodeValue = function(e, t) {
            return t instanceof Array ? this.encodeArray(e, t) : encodeURIComponent(e) + "=" + encodeURIComponent(t)
        },
        e.prototype.encodeArray = function(e, t) {
            return e ? 0 == t.length ? encodeURIComponent(e) + "=" : t.map(function(t) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t)
            }).join("&") : ""
        },
        e.prototype.toString = function(e) {
            if (!e) return "";
            var t = [];
            for (var o in e) t.push(this.encodeValue(o, e[o]));
            return t.join("&")
        },
        e.prototype.request = function(e) {
            var t = new XMLHttpRequest;
            t.responseType = "arraybuffer" !== e.responseType ? "text" : "arraybuffer",
                t.timeout = e.timeout || 0,
                t.onerror = function(o) {
                    console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url),
                        e.onerror && e.onerror(o)
                },
                t.onabort = function(t) {
                    console.log("[http][" + e.method + "][abort] " + e.url),
                        e.onabort && e.onabort()
                },
                t.onprogress = function(t) {
                    t && t.lengthComputable && e.onprogress && e.onprogress(t.loaded / t.total)
                },
                t.onload = function(o) {
                    var r = void 0 !== t.status ? t.status : 200;
                    if (200 === r || 204 === r || 0 === r) {
                        var i = t.response || t.responseText;
                        console.log("[http][" + e.method + "][loaded] " + e.url + ":" + i),
                            e.onload(i)
                    } else console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url),
                        e.onerror && e.onerror(o)
                };
            var o = this.toString(e.data),
                r = e.url;
            if ("GET" == e.method && o && (r = e.url + "?" + o, o = null), t.open(e.method, r, !0), "POST" == e.method && (e.rawData ? (t.setRequestHeader("Content-Type", "application/json"), o = JSON.stringify(e.rawData)) : t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), e.headers)
                for (var i = 0; i < e.headers.length; i++) t.setRequestHeader(e.headers[i++], e.headers[i]);
            return t.send(o),
                console.log("[http][" + e.method + "] " + e.url + ":" + JSON.stringify(e.data)),
                t
        },
        e.prototype.post = function(e, t) {
            var o = this;
            return new Promise(function(r, i) {
                o.request({
                    url: e,
                    data: t,
                    method: "POST",
                    onload: r,
                    onerror: i,
                    ontimeout: i
                })
            })
        },
        e.prototype.get = function(e, t) {
            var o = this;
            return new Promise(function(r, i) {
                o.request({
                    url: e,
                    data: t,
                    method: "GET",
                    onload: r,
                    onerror: i,
                    ontimeout: i
                })
            })
        },
        e
}();
__reflect(Http.prototype, "Http");
var App = function(e) {
    function t(t) {
        var o = e.call(this) || this;
        return o.stage = t,
            o._busyCount = 0,
            o._busy_timer = 0,
            o.event = new Emiter,
            o
    }
    return __extends(t, e),
        t.prototype.init = function() {
            this.http = new HttpService,
                this.storager = new Storager,
                this.model = new GameModel,
                this.connect = new GameConnect
        },
        t.startup = function(e) {
            var o = new t(e);
            return Object.defineProperty(window, "app", {
                    get: function() {
                        return o
                    },
                    configurable: !0
                }),
                o.init(),
                o.registCommand(Constant.Notify.startup, StartupCmd),
                o.notify(Constant.Notify.startup),
                o
        },
        t.prototype.busy = function() {
            egret.clearTimeout(this._busy_timer),
                egret.setTimeout(this.busyTimerOut, this, 2e4),
                0 == this._busyCount++ && (this._busyInst = new BusyIndicator, this.stage.addChild(this._busyInst), this._busyInst.x = this.stage.stageWidth >> 1, this._busyInst.y = this.stage.stageHeight >> 1)
        },
        t.prototype.rmBusy = function() {
            --this._busyCount <= 0 && this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
        },
        t.prototype.busyTimerOut = function() {
            this._busyCount = 0,
                this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
        },
        t.prototype.toast = function(e, t, o) {
            void 0 === t && (t = 1e3),
                void 0 === o && (o = 200)
        },
        t
}(Facade);
__reflect(App.prototype, "App");
var Constant;
!
function(e) {
    var t;
    !
    function(e) {
        e[e.startup = 0] = "startup",
            e[e.game_ready = 1] = "game_ready",
            e[e.game_over = 2] = "game_over"
    }(t = e.Notify || (e.Notify = {})),
    e.context_template = {
            heart: "heart",
            challenge: "challenge",
            challenge_result: "challenge_result",
            auto_choose: "auto_choose",
            skin_invite: "skin_invite",
            home_share: "home_share"
        },
        e.LogEvent = {
            add_home_screen: "add_home_screen",
            game_loading: "game_loading",
            play_times: "play_times",
            level: "level",
            dead: "dead"
        },
        e.SAME_CONTEXT = "SAME_CONTEXT",
        e.USER_INPUT = "USER_INPUT"
}(Constant || (Constant = {}));
var GameModel = function() {
    function e() {
        this.lastContextualScore = 1,
            this.play_times = 0,
            this.isSuper = !1,
            this.invite_skin_share_count = 0
    }
    return e
}();
__reflect(GameModel.prototype, "GameModel");
var GameOverCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
            var o = +e;
            console.log("enter GameOverCmd"),
                app.model.play_times++;
            var r = platform.isNewPlayer ? "New_Play_Times" : "Old_Play_Times";
            if (platform.log(Constant.LogEvent.play_times, {
                    result: app.model.play_times,
                    type: r
                }), platform.log(Constant.LogEvent.level, {
                    result: o
                }), app.model.lastContextualScore = e, platform instanceof PlatformFB) {
                if (FBInstant.context.getID()) {
                    var i = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1;
                    i || ShareHelper.sendLeadboardUpdate(e)["catch"](function(e) {
                        console.log("challenge failed:", e)
                    })
                }
                FBInstant.setSessionData({
                    nickname: platform.userInfo.name,
                    playerInfo: {
                        head: platform.userInfo.photo,
                        lang: platform.userInfo.lang,
                        score: platform.getHighScore()
                    }
                })
            }
        },
        e
}();
__reflect(GameOverCmd.prototype, "GameOverCmd", ["ICommand"]);
var GameReadyCmd = function() {
    function e() {
        this._lastContextId = null,
            this._contextLeaderBoard = null
    }
    return e.prototype.excute = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            return console.log("enter GameReadyCmd"),
                                platform instanceof PlatformFB && (console.log("platform.entry", platform.entry), e = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1, e || this.watchContextIfChanged()),
                                platform.getContextId() && 0 == platform.entry.indexOf("bot_") && (app.connect.pendingChallengePost = !0), !platform.getContextId() || platform.entry != Constant.context_template.auto_choose && platform.entry != Constant.context_template.skin_invite && platform.entry != Constant.context_template.home_share || (app.connect.pendingChallengePost = !0),
                                platform.getContextId() && "group_rank" == platform.entry && (app.connect.pendingChallengePost = !0),
                                app.http.reportFriends()["catch"](function(e) {
                                    return console.log("report friends failed:", e)
                                }),
                                app.http.reportSwitchGame()["catch"](function(e) {}),
                                app.http.getRecommendGames()["catch"](function(e) {}),
                                app.http.reportIfFromSkinShare()["catch"](function(e) {}),
                                app.http.getSkinShareCount()["catch"](function(e) {}),
                                console.log("isSuper: " + app.model.isSuper),
                                app.model.isSuper, [2]
                        })
                })
        },
        e.prototype.showChoose = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!(platform instanceof PlatformFB) || FBInstant.context.getID()) return [3, 5];
                                    app.busy(),
                                        o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                                case 2:
                                    return e = o.sent(),
                                        ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                                case 3:
                                    return t = o.sent(), [3, 4];
                                case 4:
                                    app.rmBusy(),
                                        o.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.watchContextIfChanged = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i, a, s, n;
                    return __generator(this,
                        function(h) {
                            switch (h.label) {
                                case 0:
                                    e = FBInstant.player.getName(),
                                        t = app.model,
                                        h.label = 1;
                                case 1:
                                    if (o = FBInstant.context.getID(), !o) return [3, 13];
                                    if (r = "context." + o, o == this._lastContextId) return [3, 8];
                                    console.log("context changes detected"),
                                        h.label = 2;
                                case 2:
                                    return h.trys.push([2, 6, , 7]),
                                        this._lastContextId = o,
                                        i = this, [4, FBInstant.getLeaderboardAsync(r)];
                                case 3:
                                    return i._contextLeaderBoard = h.sent(),
                                        t.lastContextualScore = 1,
                                        console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                                case 4:
                                    return h.sent(),
                                        console.log("sending update ..."), [4, FBInstant.updateAsync({
                                            action: "LEADERBOARD",
                                            name: r,
                                            text: e + " joined this game"
                                        })];
                                case 5:
                                    return h.sent(), [3, 7];
                                case 6:
                                    return a = h.sent(),
                                        console.log("rank msg failed:", a), [3, 7];
                                case 7:
                                    console.log("all done!"),
                                        h.label = 8;
                                case 8:
                                    if (s = app.connect.getCurentScore() || 0, !(s > t.lastContextualScore)) return [3, 13];
                                    h.label = 9;
                                case 9:
                                    return h.trys.push([9, 12, , 13]),
                                        console.log("score changed!"),
                                        t.lastContextualScore = s,
                                        console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                                case 10:
                                    return h.sent(),
                                        console.log("sending update ..."), [4, FBInstant.updateAsync({
                                            action: "LEADERBOARD",
                                            name: r,
                                            text: e + " scored " + s,
                                            data: {
                                                ss: "hhh"
                                            }
                                        })];
                                case 11:
                                    return h.sent(),
                                        console.log("all done!"), [3, 13];
                                case 12:
                                    return n = h.sent(),
                                        console.log("score changed update failed:", n), [3, 13];
                                case 13:
                                    return [4, waitAsync(3e3)];
                                case 14:
                                    return h.sent(), [3, 1];
                                case 15:
                                    return [2]
                            }
                        })
                })
        },
        e
}();
__reflect(GameReadyCmd.prototype, "GameReadyCmd", ["ICommand"]);
var StartupCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
            app.registCommand(Constant.Notify.game_over, GameOverCmd),
                app.registCommand(Constant.Notify.game_ready, GameReadyCmd)
        },
        e
}();
__reflect(StartupCmd.prototype, "StartupCmd", ["ICommand"]);
var BusyIndicator = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.autoClose = !1;
        var o = RES.getRes("loading_indicator_png");
        return t._bmp = new egret.Bitmap(o),
            t._bmp.anchorOffsetX = o.textureWidth >> 1,
            t._bmp.anchorOffsetY = o.textureHeight >> 1,
            t.addChild(t._bmp),
            t.width = t.height = 0,
            t
    }
    return __extends(t, e),
        t.prototype.$onAddToStage = function(t, o) {
            e.prototype.$onAddToStage.call(this, t, o),
                egret.Tween.get(this._bmp, {
                    loop: !0
                }).to({
                        rotation: 180
                    },
                    1e3).to({
                        rotation: 360
                    },
                    1e3)
        },
        t.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
                egret.Tween.removeTweens(this._bmp)
        },
        t
}(egret.Sprite);
__reflect(BusyIndicator.prototype, "BusyIndicator");
var GameConfig;
!
function(e) {
    e.APPID = "143095279886626",
        e.APPNAME = "Road Race",
        e.BOT_ID = "100",
        e.PL_HOST = "",
        e.BOT_HOST = "https://bot.hotbloodgame.com",
        e.LarGame_ID = "13",
        e.FB_ADCheck = 86626,
        e.FB_ADChaping = ["143095279886626_498527424343408"],
        e.FB_ADVideo = ["143095279886626_499890280873789"]
}(GameConfig || (GameConfig = {})),
Date.prototype.format = function(e) {
        var t = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var o in t) new RegExp("(" + o + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[o] : ("00" + t[o]).substr(("" + t[o]).length)));
        return e
    },
    Date.week = function(e) {
        void 0 === e && (e = 2521);
        var t = -252e5,
            o = ~~((Date.now() + t + 864e5) / 6048e5) - e - 1;
        return o
    },
    Date.days = function(e) {
        void 0 === e && (e = 0);
        var t = -252e5,
            o = ~~((Date.now() + t + 864e5) / 864e5) - e - 1;
        return o
    },
    egret.DisplayObject.prototype.removeFromParent = function() {
        this.parent && this.parent.removeChild(this)
    },
    String.prototype.substitute = function(e) {
        return this.replace(/\{(.+?)\}/gi,
            function(t, o) {
                return e[o]
            })
    },
    Array.prototype.random = function(e) {
        if (void 0 === e && (e = !1), 0 == this.length) return null;
        var t = Math.floor(this.length * Math.random());
        this[t];
        return e && this.splice(t, 1),
            this[t]
    },
    Array.prototype.choice = function(e) {
        if (0 == this.length) return null;
        void 0 == e && (e = function(e) {
            return e
        });
        for (var t = this.reduce(function(t, o) {
                    return t + e(o)
                },
                0) * Math.random(), o = this.length, r = 0; o > r; r++) {
            var i = e(this[r]);
            if (i > t) return this[r];
            t -= i
        }
        return this[o - 1]
    },
    Array.prototype.unique = function() {
        for (var e = [], t = 0; t < this.length;) {
            this[t];
            e.indexOf(this[t]) >= 0 ? this.splice(t, 1) : e.push(this[t++])
        }
        return this
    },
    Array.prototype.sorton = function(e, t) {
        return void 0 === t && (t = !0),
            this.sort(function(o, r) {
                var i = o[e] || 0,
                    a = r[e] || 0,
                    s = i > a ? 1 : a > i ? -1 : 0;
                return t || (s *= -1),
                    s
            })
    },
    Array.prototype.shuffle = function() {
        for (var e = this.length - 1; e > 0; e--) {
            var t = Math.floor(Math.random() * (e + 1));
            o = [this[t], this[e]],
                this[e] = o[0],
                this[t] = o[1]
        }
        return this;
        var o
    }, Array.prototype.rm = function(e) {
        for (var t = "function" == typeof e ? e : function(t) {
                    return t == e
                },
                o = 0; o < this.length;) {
            var r = this[o];
            if (t(r)) return this.splice(o, 1), !0;
            o++
        }
        return !1
    },
    Array.prototype.next = function() {
        return (void 0 == this._iter_index || this._iter_index >= this.length) && (this._iter_index = 0),
            this[this._iter_index++]
    },
    Math.randInt = function(e, t) {
        return void 0 === e && (e = 0),
            void 0 === t && (t = 10),
            Math.floor(Math.random() * (t - e + 1)) + e
    },
    Math.clamp = function(e, t, o) {
        return Math.max(t, Math.min(e, o))
    };
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(),
            t
    }
    return __extends(t, e),
        t.prototype.createView = function() {
            this.LoadImage = new egret.Bitmap(RES.getRes("loading_png")),
                this.addChild(this.LoadImage),
                this.StageWidth = egret.MainContext.instance.stage.stageWidth,
                this.LoadImage.x = (this.StageWidth - 1400) / 2,
                this.LoadImage.y = 0,
                this.LoadImage.width = 1400,
                this.LoadImage.height = 640;
            var e = new egret.Bitmap(RES.getRes("loading2_png"));
            this.addChild(e),
                e.x = this.StageWidth / 2,
                e.y = 320,
                e.width = 96,
                e.height = 96,
                e.anchorOffsetX = 48,
                e.anchorOffsetY = 48,
                e.rotation = 0,
                egret.Tween.get(e, {
                    loop: !0
                }).to({
                        rotation: 360
                    },
                    2e3)
        },
        t.prototype.onProgress = function(e, t) {},
        t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var GameConnect = function() {
    function e() {
        this.gameinfo = [{
                    id: "1",
                    name: "Flip Bottle",
                    gameid: "631070910729163",
                    person: "6500"
                },
                {
                    id: "2",
                    name: "Road Turn",
                    gameid: "2291347300982909",
                    person: "6000"
                },
                {
                    id: "3",
                    name: "Traffic Go",
                    gameid: "433407643886357",
                    person: "5000"
                },
                {
                    id: "4",
                    name: "Train Snake",
                    gameid: "2395498987440880",
                    person: "3000"
                },
                {
                    id: "5",
                    name: "Dig It",
                    gameid: "2723386147774745",
                    person: "3000"
                },
                {
                    id: "6",
                    name: "Bomb Balls 3D",
                    gameid: "2382175652015239",
                    person: "3000"
                },
                {
                    id: "7",
                    name: "Cheese Up",
                    gameid: "1823980364406142",
                    person: "2500"
                },
                {
                    id: "8",
                    name: "Slap King",
                    gameid: "217972749313878",
                    person: "2000"
                },
                {
                    id: "9",
                    name: "Pick Me Home",
                    gameid: "2217370948579234",
                    person: "2000"
                },
                {
                    id: "10",
                    name: "Jumpz",
                    gameid: "1930765820368347",
                    person: "1000"
                },
                {
                    id: "11",
                    name: "Rope Help",
                    gameid: "531290454104019",
                    person: "1000"
                },
                {
                    id: "12",
                    name: "Water Flow",
                    gameid: "2688978951321971",
                    person: "800"
                },
                {
                    id: "13",
                    name: "Road Race.io",
                    gameid: "143095279886626",
                    person: "600"
                },
                {
                    id: "14",
                    name: "Shooter Rush",
                    gameid: "921605818349939",
                    person: "1000"
                },
                {
                    id: "15",
                    name: "Killer Assassin",
                    gameid: "563320470930209",
                    person: "1000"
                }
            ],
            this._deadCount = 0,
            this.pendingChallengePost = !1,
            this.InitConnect()
    }
    return e.prototype.InitConnect = function() {
            e.iPhoneH = 0,
                e.iPhoneW = 0,
                e.NowGate = 1,
                e.ADVideoState = 0,
                this.RequestUserData()
        },
        e.prototype.RequestUserData = function() {
            var e = new egret.URLLoader,
                t = new egret.URLRequest;
            t.url = "resource/assets/image/userinfo.json",
                e.load(t),
                e.addEventListener(egret.Event.COMPLETE, this.RequestUserEnd, this)
        },
        e.prototype.RequestUserEnd = function(t) {
            var o = JSON.parse(t.currentTarget.data),
                r = {
                    id: 1111,
                    nickName: this.GetMyName(),
                    Country: this.GetMyImage()
                };
            e.UserData[0] = r,
                e.UserData[1] = o[Math.floor(100 * Math.random())],
                e.UserData[2] = o[Math.floor(100 * Math.random() + 100)],
                e.UserData[3] = o[Math.floor(100 * Math.random() + 200)],
                e.UserData[4] = o[Math.floor(100 * Math.random() + 300)],
                e.UserData[5] = o[Math.floor(100 * Math.random() + 400)]
        },
        e.prototype.GetUserInfo = function() {
            return e.UserData
        },
        e.prototype.onGetIOError = function(e) {
            console.log("get error : " + e)
        },
        e.prototype.GetiPhoneH = function() {
            var e = egret.MainContext.instance.stage.stageWidth;
            return (e - 640) / 2
        },
        e.prototype.GetiPhoneW = function() {
            var e = egret.MainContext.instance.stage.stageWidth;
            return (e - 1136) / 2
        },
        e.prototype.GetPlatForm = function() {
            return 1 == platform.getPlatFormiOS() ? 1 : 0
        },
        e.prototype.OpenMyBot = function() {
            platform.checkBotSubscribe()
        },
        e.prototype.AutoEnterGame = function() {
            return !platform.isNewPlayer && !!platform.getContextId()
        },
        e.prototype.OpenMyGame = function(e, t) {
            platform.switchGame(this.gameinfo[e].gameid)
        },
        e.prototype.OpenMoreGame = function(e) {
            1 == e ? platform.switchGame("2688978951321971") : 2 == e ? platform.switchGame("217972749313878") : platform.switchGame("1930765820368347")
        },
        e.prototype.GetMyGameLength = function() {
            return this.gameinfo.length
        },
        e.prototype.GetMyGameName = function(e) {
            return this.gameinfo[e].name
        },
        e.prototype.GetMyGameNum = function(e) {
            return this.gameinfo[e].person
        },
        e.prototype.GetMyGameId = function(e) {
            return this.gameinfo[e].id
        },
        e.prototype.TournamentPoint = function() {
            return platform.getTournament()
        },
        e.prototype.IsTournament = function() {
            return platform.isTournament()
        },
        e.prototype.CreateGame = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t, o;
                    return __generator(this,
                        function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = platform.getContextId(),
                                        console.log("contextID: " + t), [4, platform.switchCtx(e)];
                                case 1:
                                    return o = r.sent(), [2, o]
                            }
                        })
                })
        },
        e.prototype.UpSessionScore = function(e, t) {
            return void 0 === t && (t = !1),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(o) {
                                switch (o.label) {
                                    case 0:
                                        return console.log("上传会话分数"), [4, platform.postSessionScore(e, t)];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                    })
        },
        e.prototype.MatchPlayer = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return platform instanceof PlatformFB ? [4, platform.matchPlayerAsync()] : [3, 2];
                                case 1:
                                    return e = t.sent(),
                                        console.log(e), [2, e];
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.ShareMyRank = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, ShareHelper.sendMyPhotoUpdate(Constant.context_template.home_share, null, !0)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.ShareMyPhoto = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, ShareHelper.sendMyPhoto(e, Constant.context_template.home_share, null, !0)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.ShareGame = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, ShareHelper.sendGenericUpdate(Constant.context_template.home_share, null, !0)];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.ChallengeGame = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, platform.createCtx(e)];
                                case 1:
                                    return t = o.sent(),
                                        this.pendingChallengePost = !0, [2, t]
                            }
                        })
                })
        },
        e.prototype.showChoose = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!(platform instanceof PlatformFB)) return [3, 5];
                                    app.busy(),
                                        o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                                case 2:
                                    return e = o.sent(),
                                        ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                                case 3:
                                    return t = o.sent(), [3, 4];
                                case 4:
                                    app.rmBusy(),
                                        o.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.ShowADChaping = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return console.log("开启插屏广告"), HUHU_showInterstitialAd(), [4, platform.showIAD()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.ShowADVideo = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(t) {
                            return console.log("开启视频广告"),
                                e.ADVideoState = -1,
                                platform.hasRAD() ? platform.showRAD().then(function() {
                                    e.ADVideoState = 1
                                })["catch"](function() {
                                    e.ADVideoState = 0
                                }) : e.ADVideoState = 0, [2]
                        })
                })
        },
        e.prototype.GetADVideoState = function() {
            return e.ADVideoState
        },
        e.prototype.SignInGameCenter = function() {
            console.log("登录排行榜")
        },
        e.prototype.UpLoadScore = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return console.log("上传分数" + e), [4, platform.setHighScore(e, t)];
                                case 1:
                                    return o.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.GetMyID = function() {
            return platform.userInfo.id
        },
        e.prototype.GetMyName = function() {
            return platform.userInfo.name
        },
        e.prototype.GetMyImage = function() {
            return platform.userInfo.photo
        },
        e.prototype.GetWeeklyRankList = function() {
            return platform.getWeeklyEntries()
        },
        e.prototype.GetAllTimeRankList = function() {
            return platform.getAllTimeEntries()
        },
        e.prototype.GetUserName = function(e) {
            return 1 == e ? this.GetWeeklyRankList().map(function(e) {
                return e.name
            }) : this.GetAllTimeRankList().map(function(e) {
                return e.name
            })
        },
        e.prototype.GetUserID = function(e) {
            return 1 == e ? this.GetWeeklyRankList().map(function(e) {
                return e.id
            }) : this.GetAllTimeRankList().map(function(e) {
                return e.id
            })
        },
        e.prototype.GetUserImage = function(e) {
            return 1 == e ? this.GetWeeklyRankList().map(function(e) {
                return e.photo
            }) : this.GetAllTimeRankList().map(function(e) {
                return e.photo
            })
        },
        e.prototype.GetUserScore = function(e) {
            return 1 == e ? this.GetWeeklyRankList().map(function(e) {
                return e.score
            }) : this.GetAllTimeRankList().map(function(e) {
                return e.score
            })
        },
        e.prototype.GetUserSkin = function(e) {
            return 1 == e ? this.GetWeeklyRankList().map(function(e) {
                return e.skin
            }) : this.GetAllTimeRankList().map(function(e) {
                return e.skin
            })
        },
        e.prototype.UploadEvent = function(e, t, o) {
            void 0 === o && (o = 1),
                platform.log(e, t, o)
        },
        e.prototype.GetNewDays = function() {
            return Date.days() != platform.remoteData.loginTime ? (platform.remoteData.loginTime = Date.days(), platform.syncRemoteData(), !0) : !1
        },
        e.prototype.onGameStart = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, this.addShortcut()];
                                case 1:
                                    return t.sent(), [3, 3];
                                case 2:
                                    return e = t.sent(),
                                        console.log("shortcut error:", e), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.readData = function() {
            var e = platform.remoteData.game_db || {};
            return e
        },
        e.prototype.setData = function(e) {
            platform.remoteData.game_db = e,
                platform.syncRemoteData()
        },
        e.prototype.onGameOver = function(e) {
            app.notify(Constant.Notify.game_over, e)
        },
        e.prototype.onDead = function(e) {
            platform.log(Constant.LogEvent.dead, {
                result: ++this._deadCount
            })
        },
        e.prototype.setCurentScore = function(t) {
            e.NowGate = t
        },
        e.prototype.getCurentScore = function() {
            var t = e.NowGate;
            return t
        },
        e.prototype.getInviteCount = function() {
            return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []),
                platform.remoteData.skin_invites.length
        },
        e.prototype.pullInviteCount = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, app.http.getSkinShareCount()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.inviteForSkin = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), [4, platform.choose(["NEW_CONTEXT_ONLY"], !0, Constant.context_template.skin_invite)];
                                case 1:
                                    if (e = o.sent()) {
                                        if (t = platform.getContextId(), -1 != platform.remoteData.skin_invites.indexOf(t)) return app.toast("Duplicated, try another person"), [2, !1];
                                        platform.remoteData.skin_invites.push(t),
                                            platform.syncRemoteData(),
                                            ShareHelper.sendGenericUpdate(Constant.context_template.skin_invite)
                                    }
                                    return [2, !0]
                            }
                        })
                })
        },
        e.prototype.suportIAP = function() {
            return !1
        },
        e.prototype.purchaseRemoveAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, platform.purchaseAsync("1")];
                                case 1:
                                    return e = t.sent(), [2, e]
                            }
                        })
                })
        },
        e.prototype.hasPurchasedRemoveAD = function() {
            return platform.hasPurchased("1")
        },
        e.prototype.getLeaderboardByLevel = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    this.leaderBoad && this.leaderBoad.name == "level_l_" + e || (this.leaderBoad = new LeaderBoard("level_l_" + e, "LOWER_IS_BETTER", 999), this.leaderBoad.setFriends(platform.getFriends())),
                                        o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.leaderBoad.initializeAsync(!1, !0)];
                                case 2:
                                    return o.sent(), [3, 4];
                                case 3:
                                    return t = o.sent(),
                                        console.log("fuck", t), [3, 4];
                                case 4:
                                    return [2, this.leaderBoad]
                            }
                        })
                })
        },
        e.prototype.onLevelStart = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return console.log("请求" + e + "关数据"),
                                        platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : [2];
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.getVersion = function() {
            return $T_GAME_VERSION
        },
        e.prototype.challengePost = function(e, t) {
            ShareHelper.challengePost(e, t)
        },
        e.prototype.challengeShare = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, ShareHelper.challengeShare(e, t)];
                                case 1:
                                    return o.sent(), [2]
                            }
                        })
                })
        },
        e.prototype.getChallengeLevel = function() {
            return platform.challenge_info && platform.challenge_info.level || -1
        },
        e.prototype.hasContext = function() {
            return !!platform.getContextId()
        },
        e.prototype.canAutoChallengePost = function() {
            var e = this.pendingChallengePost;
            return console.log("canAutoChallengePost", e),
                this.pendingChallengePost = !1,
                e
        },
        e.prototype.getRecommendGamesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e = this;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return app.model.recommendGames ? [3, 2] : [4, new Promise(function(t) {
                                        app.event.on("game_recommend_ready",
                                            function() {
                                                t()
                                            },
                                            e)
                                    })];
                                case 1:
                                    t.sent(),
                                        t.label = 2;
                                case 2:
                                    return [2, app.model.recommendGames]
                            }
                        })
                })
        },
        e.prototype.onRecommendGameTapped = function(e) {
            platform.switchGame(e)
        },
        e.prototype.getLoginDays = function() {
            var e = platform.remoteData.login_day_count;
            return e ? e : 0
        },
        e.prototype.addShortcut = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o;
                    return __generator(this,
                        function(r) {
                            switch (r.label) {
                                case 0:
                                    return console.log("addShortcut...."),
                                        console.log(platform.remoteData.add_hs_refuse_count),
                                        console.log(platform.remoteData.add_hs),
                                        console.log(platform.canAdd2HomeScreen()),
                                        platform.remoteData.add_hs_refuse_count >= 2 ? [2] : 0 != platform.remoteData.add_hs ? [2] : (e = platform.canAdd2HomeScreen()) ? (t = platform.playerType, platform.log(Constant.LogEvent.add_home_screen, {
                                            user_type: t,
                                            result: -1
                                        }), [4, platform.add2HomeScreen()]) : [2];
                                case 1:
                                    return o = r.sent(),
                                        o.res ? (platform.remoteData.add_hs = 1, platform.log(Constant.LogEvent.add_home_screen, {
                                            user_type: t,
                                            result: 1
                                        })) : (o.code == Constant.USER_INPUT ? platform.remoteData.add_hs_refuse_count++ : platform.remoteData.add_hs = 2, platform.log(Constant.LogEvent.add_home_screen, {
                                            user_type: t,
                                            result: 0,
                                            code: o.code
                                        })),
                                        platform.syncRemoteData(), [2]
                            }
                        })
                })
        },
        e.UserData = [],
        e
}();
__reflect(GameConnect.prototype, "GameConnect");
var Storager = function() {
    function e(e) {
        void 0 === e && (e = "global"),
            this.id = e
    }
    return e.prototype.set = function(e, t) {
            "object" == typeof t && (t = JSON.stringify(t)),
                egret.localStorage.setItem(this.id + "_" + e, t)
        },
        e.prototype.get = function(e, t) {
            return egret.localStorage.getItem(this.id + "_" + e) || t || null
        },
        e.prototype.rm = function(e) {
            egret.localStorage.removeItem(this.id + "_" + e)
        },
        e.prototype.json = function(e, t) {
            void 0 === t && (t = null);
            var o, r = egret.localStorage.getItem(this.id + "_" + e);
            try {
                o = JSON.parse(r)
            } catch (i) {
                $dev && console.log("json failed")
            }
            return o || t || null
        },
        e.clear = function() {
            egret.localStorage.clear()
        },
        e
}();
__reflect(Storager.prototype, "Storager");
var ad;
!
function(e) {
    var t = function(e) {
        function t(t, o) {
            void 0 === o && (o = !0);
            var r = e.call(this) || this;
            return r.ids = t,
                r._adInstance = null,
                r._isStart = !1,
                r._watch_count = 0,
                r.suportAD() && o && r.preloadAD(),
                r
        }
        return __extends(t, e),
            t.prototype.suportAD = function() {
                throw "should be implemented in subclass!"
            },
            t.prototype.getName = function() {
                throw "should be implemented in subclass!"
            },
            t.prototype.getADInstanceAsync = function(e) {
                return __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(e) {
                                return [2, null]
                            })
                    })
            },
            t.prototype.hasAD = function() {
                return !!this._adInstance
            },
            t.prototype.preloadAD = function() {
                return __awaiter(this, void 0, void 0,
                    function() {
                        var e, t, o, r, i, a, s, n, h, l = this;
                        return __generator(this,
                            function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (this._isStart) return [2];
                                        this._isStart = !0,
                                            e = "",
                                            t = this.ids.concat(),
                                            o = 0,
                                            r = null,
                                            c.label = 1;
                                    case 1:
                                        if (r) return [3, 24];
                                        i = o++ % t.length,
                                            c.label = 2;
                                    case 2:
                                        return c.trys.push([2, 22, , 23]), [4, this.getADInstanceAsync(t[i])];
                                    case 3:
                                        r = c.sent(),
                                            e = "",
                                            console.log(this.getName() + " create suc:" + i),
                                            a = 0,
                                            c.label = 4;
                                    case 4:
                                        if (this._adInstance || !r) return [3, 21];
                                        c.label = 5;
                                    case 5:
                                        return c.trys.push([5, 14, , 20]), [4, r.loadAsync()];
                                    case 6:
                                        c.sent(),
                                            e = "",
                                            this._adInstance = r,
                                            this.emit("ad_ready"),
                                            console.log(this.getName() + " load suc"),
                                            c.label = 7;
                                    case 7:
                                        return [4, new Promise(function(e, t) {
                                            return l.once("show_ad", e)
                                        })];
                                    case 8:
                                        c.sent(),
                                            c.label = 9;
                                    case 9:
                                        return c.trys.push([9, 11, , 12]), [4, this._adInstance.showAsync()];
                                    case 10:
                                        return c.sent(),
                                            e = "",
                                            console.log(this.getName() + " show suc"),
                                            this.emit("show_result", {
                                                result: !0,
                                                level: i
                                            }),
                                            o = 0,
                                            this._adInstance = null,
                                            r = null, [3, 13];
                                    case 11:
                                        return s = c.sent(),
                                            console.log(this.getName() + " show failed," + s.code + "," + s.message),
                                            this.emit("ad_failed", {
                                                type: this.getName(),
                                                phase: 2,
                                                code: s.code,
                                                msg: s.message,
                                                lastError: e
                                            }),
                                            e = s.code + ":2",
                                            this.emit("show_result", {
                                                result: !1,
                                                err: s,
                                                level: i
                                            }),
                                            "ADS_NOT_LOADED" == s.code ? (this._adInstance = null, a = 0, [3, 13]) : "PENDING_REQUEST" != s.code && "UNKNOWN" != s.code && "RATE_LIMITED" != s.code ? (this._adInstance = null, r = null, [3, 13]) : [3, 12];
                                    case 12:
                                        return [3, 7];
                                    case 13:
                                        return [3, 20];
                                    case 14:
                                        return n = c.sent(),
                                            console.log(this.getName() + " load failed," + n.code + "," + n.message),
                                            this.emit("ad_failed", {
                                                type: this.getName(),
                                                phase: 1,
                                                code: n.code,
                                                msg: n.message,
                                                lastError: e
                                            }),
                                            e = n.code + ":1",
                                            "ADS_FREQUENT_LOAD" != n.code ? [3, 16] : [4, new Promise(function(e) {
                                                return setTimeout(e, 18e5)
                                            })];
                                    case 15:
                                        return c.sent(), [3, 21];
                                    case 16:
                                        return "INVALID_PARAM" != n.code ? [3, 17] : (r = null, [3, 21]);
                                    case 17:
                                        return [4, new Promise(function(e) {
                                            return setTimeout(e, 31e3)
                                        })];
                                    case 18:
                                        c.sent(),
                                            c.label = 19;
                                    case 19:
                                        return [3, 20];
                                    case 20:
                                        return [3, 4];
                                    case 21:
                                        return [3, 23];
                                    case 22:
                                        return h = c.sent(),
                                            console.log(this.getName() + " create failed," + h.code + "," + i),
                                            this.emit("ad_failed", {
                                                type: this.getName(),
                                                phase: 0,
                                                code: h.code,
                                                msg: h.message,
                                                lastError: e
                                            }),
                                            e = h.code + ":0",
                                            "CLIENT_UNSUPPORTED_OPERATION" == h.code || "ADS_TOO_MANY_INSTANCES" == h.code ? [2] : [3, 23];
                                    case 23:
                                        return [3, 1];
                                    case 24:
                                        return [2]
                                }
                            })
                    })
            },
            t.prototype.showAD = function() {
                return __awaiter(this, void 0, void 0,
                    function() {
                        var e, t = this;
                        return __generator(this,
                            function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.hasAD()) throw "no ad ready";
                                        return e = this.emit("show_ad"),
                                            e ? [4, new Promise(function(e, o) {
                                                t.once("show_result",
                                                    function(r) {
                                                        t.emit("ad_show", {
                                                                type: t.getName(),
                                                                result: ++t._watch_count,
                                                                level: r.level
                                                            }),
                                                            r.result ? e() : o(r.err)
                                                    })
                                            })] : [2];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                    })
            },
            t
    }(Emiter);
    __reflect(t.prototype, "Advertise");
    var o = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
            t.prototype.getName = function() {
                return "iad"
            },
            t.prototype.suportAD = function() {
                var e = FBInstant.getSupportedAPIs();
                return e.indexOf("getInterstitialAdAsync") > -1
            },
            t.prototype.getADInstanceAsync = function(e) {
                return __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, FBInstant.getInterstitialAdAsync(e)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            })
                    })
            },
            t
    }(t);
    e.InterstitialAD = o,
        __reflect(o.prototype, "ad.InterstitialAD");
    var r = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e),
            t.prototype.getName = function() {
                return "rad"
            },
            t.prototype.suportAD = function() {
                var e = FBInstant.getSupportedAPIs();
                return e.indexOf("getRewardedVideoAsync") > -1
            },
            t.prototype.getADInstanceAsync = function(e) {
                return __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, FBInstant.getRewardedVideoAsync(e)];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            })
                    })
            },
            t
    }(t);
    e.RewardedVideoAD = r,
        __reflect(r.prototype, "ad.RewardedVideoAD")
}(ad || (ad = {}));
var Main = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t),
            egret.ImageLoader.crossOrigin = "anonymous",
            t
    }
    return __extends(t, e),
        t.prototype.onAddToStage = function(e) {
            this.applyConsole(),
                egret.lifecycle.addLifecycleListener(function(e) {
                    e.onUpdate = function() {}
                }),
                egret.lifecycle.onPause = function() {
                    egret.ticker.pause()
                },
                egret.lifecycle.onResume = function() {
                    egret.ticker.resume()
                },
                this.runGame()["catch"](function(e) {
                    console.log(e)
                })
        },
        t.prototype.runGame = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    return App.startup(this.stage),
                                        platform = PlatformFactory.create(),
                                        platform.log(Constant.LogEvent.game_loading, {
                                            type: "initialized"
                                        }), [4, this.loadResource()];
                                case 1:
                                    return a.sent(), [4, RES.getResAsync("description_json")];
                                case 2:
                                    return a.sent(),
                                        platform.setLoadingProgress(1), [4, platform.initSDK()];
                                case 3:
                                    return a.sent(), [4, platform.startGame(GameConfig.FB_ADChaping, GameConfig.FB_ADVideo)];
                                case 4:
                                    return a.sent(),
                                        app.http.checkSuper()["catch"](function(e) {
                                            return console.log("check super error")
                                        }), [4, platform.checkBotSubscribe()];
                                case 5:
                                    return a.sent(), [4, app.connect.addShortcut()];
                                case 6:
                                    return a.sent(),
                                        e = GameConfig.FB_ADChaping[0].substring(0, GameConfig.FB_ADChaping[0].indexOf("_")),
                                        t = GameConfig.FB_ADChaping[0].substring(0, GameConfig.FB_ADChaping[0].indexOf("_")),
                                        o = GameConfig.FB_ADVideo[0].substring(0, GameConfig.FB_ADVideo[0].indexOf("_")),
                                        r = GameConfig.FB_ADVideo[0].substring(0, GameConfig.FB_ADVideo[0].indexOf("_")),
                                        i = GameConfig.FB_ADCheck,
                                        parseInt(e) % 1e5 == i && parseInt(t) % 1e5 == i && parseInt(o) % 1e5 == i && parseInt(r) % 1e5 == i && this.PlayGame(),
                                        platform.log(Constant.LogEvent.game_loading, {
                                            type: "ready"
                                        }),
                                        app.notify(Constant.Notify.game_ready), [2]
                            }
                        })
                })
        },
        t.prototype.PlayGame = function() {
            var e = new GameScene;
            this.addChild(e),
                this.stage.removeChild(this.LoadView);
            var t = new egret.TextField;
            this.addChild(t),
                t.x = egret.MainContext.instance.stage.stageWidth / 2,
                t.y = egret.MainContext.instance.stage.stageHeight - 25,
                t.size = 16,
                t.textColor = 7633807,
                t.text = $T_GAME_VERSION,
                t.anchorOffsetX = t.width / 2,
                t.anchorOffsetY = t.height / 2
        },
        t.prototype.loadResource = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 4, , 5]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                                case 1:
                                    return t.sent(), [4, RES.loadGroup("loading")];
                                case 2:
                                    return t.sent(),
                                        platform.setLoadingProgress(.1),
                                        this.LoadView = new LoadingUI,
                                        this.stage.addChild(this.LoadView), [4, RES.loadGroup("preload", 0, this.LoadView)];
                                case 3:
                                    return t.sent(),
                                        platform.setLoadingProgress(.8), [3, 5];
                                case 4:
                                    return e = t.sent(),
                                        console.error(e), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.applyConsole = function() {
            var e = this,
                t = (console.log, "e3sdsfs3eee"),
                o = "true" == egret.localStorage.getItem(t),
                r = null,
                i = function(e) {
                    egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile && (e ? r ? r.showSwitch() : r = new window.VConsole : r && r.hideSwitch())
                };
            i(o),
                Object.defineProperty(window, "$dev", {
                    get: function() {
                        return o
                    },
                    set: function(e) {
                        egret.localStorage.setItem(t, e),
                            o = e,
                            i(e)
                    },
                    configurable: !0
                });
            var a = 0,
                s = 0;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,
                function(t) {
                    50 == Math.abs(Math.clamp(t.stageX - e.stage.stageWidth / 2, -50, 50)) || t.stageY >= 50 || (s++, clearTimeout(a), a = setTimeout(function() {
                            s >= 5 && ($dev = !$dev),
                                s = 0
                        },
                        200))
                },
                this)
        },
        t
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var FriendLeaderboard = function() {
    function e(e, t) {
        this.pl_host = e,
            this.game_id = t,
            this.platform = "instant",
            this.game = "web",
            this._initialized = !1,
            this.localDB = new Storager("selfrank_" + FBInstant.player.getID()),
            this.localData = this.localDB.json("data")
    }
    return e.prototype.setFriends = function(e) {
            this.friends = e
        },
        e.prototype.initializeAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i, a;
                    return __generator(this,
                        function(s) {
                            switch (s.label) {
                                case 0:
                                    if (this._initialized) return [2];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 7, , 8]),
                                        this.friends ? [3, 3] : (e = this, [4, FBInstant.player.getConnectedPlayersAsync()]);
                                case 2:
                                    e.friends = s.sent(),
                                        s.label = 3;
                                case 3:
                                    t = 2,
                                        o = function() {
                                            var e, t, o;
                                            return __generator(this,
                                                function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return i.trys.push([0, 2, , 3]), [4, r.fetchRank()];
                                                        case 1:
                                                            return e = i.sent(),
                                                                r._weeklyEntries = e.frindEntries,
                                                                r._allTimeEntries = e.worldEntries,
                                                                r._weeklyEntries.forEach(function(e, t) {
                                                                    return e.rank = t + 1
                                                                }),
                                                                r._allTimeEntries.forEach(function(e, t) {
                                                                    return e.rank = t + 1
                                                                }),
                                                                t = FBInstant.player.getID(),
                                                                r._weeklyEntry = r._weeklyEntries.find(function(e) {
                                                                    return e.id == t
                                                                }),
                                                                r._allTimeEntry = r._allTimeEntries.find(function(e) {
                                                                    return e.id == t
                                                                }), [2, "break"];
                                                        case 2:
                                                            return o = i.sent(),
                                                                console.log("fetch rank error", o), [3, 3];
                                                        case 3:
                                                            return [2]
                                                    }
                                                })
                                        },
                                        r = this,
                                        s.label = 4;
                                case 4:
                                    return t-- > 0 ? [5, o()] : [3, 6];
                                case 5:
                                    return i = s.sent(),
                                        "break" === i ? [3, 6] : [3, 4];
                                case 6:
                                    return this._initialized = !0, [3, 8];
                                case 7:
                                    return a = s.sent(),
                                        console.log("leaderboad initlialize failed:", a), [3, 8];
                                case 8:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.fetchRank = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i, a, s, n, h, l, c, g, u, p, m, d, p, m;
                    return __generator(this,
                        function(f) {
                            switch (f.label) {
                                case 0:
                                    return t = 18e5,
                                        this.localData && Date.now() - this.localData.timestamp < t ? (console.log("use cache"), console.log(this.localData), e = this.localData.result, [3, 5]) : [3, 1];
                                case 1:
                                    o = this.pl_host + "/fbapi/v0/get_rankInfo_" + this.game_id,
                                        r = this.friends.map(function(e) {
                                            return e.getID()
                                        }),
                                        i = FBInstant.player.getID(),
                                        r.push(i),
                                        a = {
                                            game_id: this.game_id,
                                            platform: this.platform,
                                            game: this.game,
                                            playerId: i,
                                            token: this._token,
                                            type: ["Instant_games_rankInfo_all", "Instant_games_rankInfo_week"],
                                            players: r
                                        },
                                        f.label = 2;
                                case 2:
                                    return f.trys.push([2, 4, , 5]),
                                        n = (s = JSON).parse, [4, (new Http).post(o, a)];
                                case 3:
                                    if (e = n.apply(s, [f.sent()]), 0 != e.error) throw "getRankInfo failed";
                                    return this.localData = {
                                            timestamp: Date.now(),
                                            result: e
                                        },
                                        this.localDB.set("data", this.localData), [3, 5];
                                case 4:
                                    return h = f.sent(),
                                        console.log("rank load failed"),
                                        e = this.localData ? this.localData.result : {
                                            data: {}
                                        }, [3, 5];
                                case 5:
                                    l = e.data.Instant_games_rankInfo_week || {},
                                        c = e.data.Instant_games_rankInfo_all || {},
                                        g = {},
                                        this.friends.forEach(function(e) {
                                            return g[e.getID()] = e
                                        }),
                                        g[FBInstant.player.getID()] = FBInstant.player,
                                        u = Object.keys(l).map(function(e) {
                                            var t = JSON.parse(l[e]);
                                            t.id = e;
                                            var o = RankPlayerVO.fromJSONObj(t),
                                                r = g[t.id];
                                            return r && (o.name = r.getName(), o.photo = r.getPhoto(), delete g[t.id]),
                                                o
                                        }).sorton("score", !1);
                                    for (p in g) m = g[p],
                                        u.push(RankPlayerVO.createFromContextPlayer(m));
                                    g = {},
                                        this.friends.forEach(function(e) {
                                            return g[e.getID()] = e
                                        }),
                                        g[FBInstant.player.getID()] = FBInstant.player,
                                        d = Object.keys(c).map(function(e) {
                                            var t = JSON.parse(c[e]);
                                            t.id = e;
                                            var o = RankPlayerVO.fromJSONObj(t),
                                                r = g[t.id];
                                            return r && (o.name = r.getName(), o.photo = r.getPhoto(), delete g[t.id]),
                                                o
                                        }).sorton("score", !1);
                                    for (p in g) m = g[p],
                                        d.push(RankPlayerVO.createFromContextPlayer(m));
                                    return [2, {
                                        frindEntries: u,
                                        worldEntries: d
                                    }]
                            }
                        })
                })
        },
        e.prototype.setScoreAsync = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var o, r, i, a, s, n, h, l, c, g;
                    return __generator(this,
                        function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]),
                                        o = !1,
                                        r = [],
                                        e > this.getAllTimeHighScore() && (r.push("Instant_games_rankInfo_all"), this._allTimeEntry || (this._allTimeEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._allTimeEntry.score = e, this._allTimeEntry.extraData = t, this._allTimeEntries && this._allTimeEntries.sorton("score", !1), this.localData && (i = this.localData.result.data.Instant_games_rankInfo_all || {},
                                            i[this._allTimeEntry.id] = JSON.stringify(this._allTimeEntry.toJSONObj()), this.localData.result.data.Instant_games_rankInfo_all = i, o = !0)),
                                        e > this.getWeeklyHighScore() && (r.push("Instant_games_rankInfo_week"), this._weeklyEntry || (this._weeklyEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._weeklyEntry.score = e, this._weeklyEntry.extraData = t, this._weeklyEntries && this._weeklyEntries.sorton("score", !1), this.localData && (a = this.localData.result.data.Instant_games_rankInfo_week || {},
                                            a[this._weeklyEntry.id] = JSON.stringify(this._weeklyEntry.toJSONObj()), this.localData.result.data.Instant_games_rankInfo_week = a, o = !0)),
                                        o && this.localDB.set("data", JSON.stringify(this.localData)),
                                        0 == r.length ? [2] : (s = this.pl_host + "/fbapi/v0/update_rankInfo_" + this.game_id, n = {
                                                game_id: this.game_id,
                                                platform: this.platform,
                                                game: this.game,
                                                token: this._token,
                                                playerId: FBInstant.player.getID(),
                                                type: r,
                                                rankInfo: JSON.stringify({
                                                    score: e,
                                                    extraData: t
                                                })
                                            },
                                            c = (l = JSON).parse, [4, (new Http).post(s, n)]);
                                case 1:
                                    if (h = c.apply(l, [u.sent()]), 0 != h.error) throw "update_rankInfo error";
                                    return [3, 3];
                                case 2:
                                    return g = u.sent(),
                                        console.log("set core error"), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.getAllTimeEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.initializeAsync()];
                                case 1:
                                    return e.sent(), [2, this._allTimeEntries || this.friends.concat([FBInstant.player]).map(function(e) {
                                        return RankPlayerVO.createFromContextPlayer(e)
                                    })]
                            }
                        })
                })
        },
        e.prototype.getAllTimeEntries = function() {
            return this._allTimeEntries || []
        },
        e.prototype.getWeeklyEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.initializeAsync()];
                                case 1:
                                    return e.sent(), [2, this._weeklyEntries || this.friends.concat([FBInstant.player]).map(function(e) {
                                        return RankPlayerVO.createFromContextPlayer(e)
                                    })]
                            }
                        })
                })
        },
        e.prototype.getWeeklyEntries = function() {
            return this._weeklyEntries || []
        },
        e.prototype.getAllTimeHighScore = function() {
            return this._allTimeEntry ? this._allTimeEntry.score : 0
        },
        e.prototype.getWeeklyHighScore = function() {
            return this._weeklyEntry ? this._weeklyEntry.score : 0
        },
        e
}();
__reflect(FriendLeaderboard.prototype, "FriendLeaderboard");
var HttpService = function() {
    function e() {
        this.game_id = GameConfig.BOT_ID,
            this.host = GameConfig.PL_HOST,
            this.host2 = GameConfig.BOT_HOST,
            this._server = new Http
    }
    return Object.defineProperty(e.prototype, "server", {
            get: function() {
                return this._server
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.reportFriends = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return platform instanceof PlatformFB && platform.getFriends().length > 0 ? (e = {
                                        action: "friends",
                                        playerId: platform.getPlayerId(),
                                        payload: platform.getFriends().map(function(e) {
                                            return e.getID()
                                        })
                                    }, [4, this._server.post(this.host2 + "/api/v0/upload_" + this.game_id, {
                                        data: JSON.stringify(e)
                                    })]) : [3, 2];
                                case 1:
                                    t.sent(),
                                        t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.reportSwitchGame = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return platform.switchGameInfo && platform.isNewPlayer ? [4, this._server.post(this.host + "/fbapi/v0/ads/report/" + platform.switchGameInfo.appId + "/" + platform.appId + "/" + platform.getPlayerId(), {
                                        v: $T_GAME_VERSION
                                    })["catch"](function(e) {
                                        return console.log(e)
                                    })] : [3, 2];
                                case 1:
                                    e.sent(),
                                        e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.checkSuper = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    e = this.host + "testCase_" + this.game_id,
                                        a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]),
                                        r = (o = JSON).parse, [4, this._server.get(e, {
                                            nickname: platform.userInfo.name,
                                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                                            timezoneOffset: (new Date).getTimezoneOffset(),
                                            playerId: platform.getPlayerId(),
                                            appId: platform.appId
                                        })];
                                case 2:
                                    return t = r.apply(o, [a.sent()]),
                                        0 == t.error && (app.model.isSuper = 1 == +t.data), [3, 4];
                                case 3:
                                    return i = a.sent(),
                                        console.log("check super failed"), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.getRecommendGames = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    return e = this.host + "getRecommendGames",
                                        t = {
                                            playerId: platform.userInfo.id,
                                            nickname: platform.userInfo.name,
                                            appId: platform.appId,
                                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                                            deviceOS: platform instanceof PlatformFB ? FBInstant.getPlatform() : "IOS",
                                            timezoneOffset: (new Date).getTimezoneOffset()
                                        },
                                        i = (r = JSON).parse, [4, this._server.get(e, t)];
                                case 1:
                                    return o = i.apply(r, [a.sent()]),
                                        0 == o.error ? (app.model.recommendGames = o.data && o.data.ads || null, app.event.emit("game_recommend_ready")) : console.log("getRecommendGames  error:", o.msg), [2]
                            }
                        })
                })
        },
        e.prototype.reportIfFromSkinShare = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return platform.invite_skin_data && platform.isNewPlayer ? (e = this.host + "/api/game/v0/shareUpdate_" + this.game_id, [4, this._server.post(e, {
                                        v: $T_GAME_VERSION,
                                        playerId: platform.getPlayerId(),
                                        sharePlayerId: platform.invite_skin_data.playerId,
                                        type: "share"
                                    })["catch"](function(e) {
                                        return console.log(e)
                                    })]) : [3, 2];
                                case 1:
                                    t.sent(),
                                        t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        e.prototype.getSkinShareCount = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    e = 0,
                                        a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]),
                                        t = this.host + "shareGet_" + this.game_id, [4, this._server.get(t, {
                                            v: $T_GAME_VERSION,
                                            playerId: platform.getPlayerId(),
                                            type: "share"
                                        })];
                                case 2:
                                    return o = a.sent(),
                                        r = JSON.parse(o),
                                        e = +r.data.count || 0, [3, 4];
                                case 3:
                                    return i = a.sent(),
                                        console.log(i), [3, 4];
                                case 4:
                                    return app.model.invite_skin_share_count = e, [2]
                            }
                        })
                })
        },
        e
}();
__reflect(HttpService.prototype, "HttpService");
var LeaderBoard = function(e) {
    function t(t, o, r) {
        void 0 === o && (o = "HIGHER_IS_BETTER"),
            void 0 === r && (r = 0);
        var i = e.call(this) || this;
        return i.name = t,
            i.sortType = o,
            i.defaultScore = r,
            i._selfEntry = null,
            i._entries = null,
            i._friendEntries = null,
            i._preInitialized = !1,
            i._preInitializing = !1,
            i._initialized = !1,
            i._initializing = !1,
            i._friends = null,
            i
    }
    return __extends(t, e),
        t.prototype.preInitializeAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o = this;
                    return __generator(this,
                        function(r) {
                            switch (r.label) {
                                case 0:
                                    return this._preInitialized ? [2] : this._preInitializing ? [4, new Promise(function(e) {
                                        o.once("preInitialized", e)
                                    })] : [3, 2];
                                case 1:
                                    return r.sent(), [2];
                                case 2:
                                    return this._preInitializing = !0,
                                        e = this, [4, FBInstant.getLeaderboardAsync(this.name)];
                                case 3:
                                    return e._leaderboard = r.sent(), [4, this._leaderboard.getPlayerEntryAsync()];
                                case 4:
                                    return t = r.sent(),
                                        t ? this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(t) : this._selfEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player),
                                        this._preInitialized = !0,
                                        this._preInitializing = !1,
                                        this.emit("preInitialized"),
                                        console.log("leaderboard preInitialized", this.name), [2]
                            }
                        })
                })
        },
        Object.defineProperty(t.prototype, "initialized", {
            get: function() {
                return this.initialized
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.initializeAsync = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var o, r, i, a = this;
                    return __generator(this,
                        function(s) {
                            switch (s.label) {
                                case 0:
                                    return this._initialized ? [2] : this._initializing ? [4, new Promise(function(e) {
                                        a.once("initialized", e)
                                    })] : [3, 2];
                                case 1:
                                    return s.sent(), [2];
                                case 2:
                                    return this._initializing = !0, [4, this.preInitializeAsync()];
                                case 3:
                                    s.sent(),
                                        s.label = 4;
                                case 4:
                                    return s.trys.push([4, 9, , 10]),
                                        o = e,
                                        o ? [4, this.getEntriesAsync()] : [3, 6];
                                case 5:
                                    o = s.sent(),
                                        s.label = 6;
                                case 6:
                                    return r = t,
                                        r ? [4, this.getConnectedPlayerEntriesAsync()] : [3, 8];
                                case 7:
                                    r = s.sent(),
                                        s.label = 8;
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return i = s.sent(),
                                        console.log("排行榜数据错误"), [3, 10];
                                case 10:
                                    return this._initialized = !0,
                                        this._initializing = !1,
                                        this.emit("initialized"),
                                        console.log("leaderboard initialized", this.name), [2]
                            }
                        })
                })
        },
        t.prototype.getEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.preInitializeAsync()];
                                case 1:
                                    return o.sent(),
                                        this._entries ? [3, 3] : (e = this._leaderboard, [4, e.getEntriesAsync(100, 0)]);
                                case 2:
                                    t = o.sent(),
                                        this._entries = t.map(function(e) {
                                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                                        }),
                                        o.label = 3;
                                case 3:
                                    return [2, this._entries || []]
                            }
                        })
                })
        },
        t.prototype.getEntries = function() {
            return this._entries || []
        },
        t.prototype.getConnectedPlayerEntriesAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r;
                    return __generator(this,
                        function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.preInitializeAsync()];
                                case 1:
                                    return i.sent(),
                                        this._friendEntries ? [3, 3] : (e = this._leaderboard, [4, e.getConnectedPlayerEntriesAsync(100, 0)]);
                                case 2:
                                    t = i.sent(),
                                        this._friendEntries = t.map(function(e) {
                                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                                        }),
                                        o = FBInstant.player.getID(),
                                        r = this._friendEntries.findIndex(function(e) {
                                            return e.id == o
                                        }), -1 == r && (this._friendEntries.push(RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._friendEntries.forEach(function(e, t) {
                                            return e.rank = t + 1
                                        })),
                                        this.bindFriends(),
                                        i.label = 3;
                                case 3:
                                    return [2, this._friendEntries || []]
                            }
                        })
                })
        },
        t.prototype.getConnectedPlayerEntries = function() {
            return this._friendEntries || []
        },
        t.prototype.refreshRankList = function(e, t, o) {
            var r = FBInstant.player.getID(),
                i = e.findIndex(function(e) {
                    return e.id == r
                });
            if (-1 != i) {
                var a = e[i];
                a.score = t,
                    a.extraData = o,
                    e.sorton("score", "LOWER_IS_BETTER" == this.sortType),
                    e.forEach(function(e, t) {
                        return e.rank = t + 1
                    })
            } else if (e.length > 0 && t > e[e.length - 1].score) {
                var a = RankPlayerVO.createFromContextPlayer(FBInstant.player);
                a.score = t,
                    a.extraData = o,
                    e.push(a),
                    e.sorton("score", "LOWER_IS_BETTER" == this.sortType),
                    e.forEach(function(e, t) {
                        return e.rank = t + 1
                    })
            }
        },
        t.prototype.setScore = function(e, t) {
            var o = this;
            if (!this._preInitialized) throw "doesn't preInitialized";
            if (!(e < this._selfEntry.score)) {
                this._selfEntry.score = e,
                    this._selfEntry.extraData = t,
                    this._entries && this.refreshRankList(this._entries, e, t),
                    this._friendEntries && this.refreshRankList(this._friendEntries, e, t);
                var r = function() {
                    return __awaiter(o, void 0, void 0,
                        function() {
                            var o;
                            return __generator(this,
                                function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, this.preInitializeAsync()];
                                        case 1:
                                            return r.sent(),
                                                console.log("setScoreAsync", e), [4, this._leaderboard.setScoreAsync(e, JSON.stringify(t))];
                                        case 2:
                                            return o = r.sent(),
                                                this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(o),
                                                console.log("setScoreAsync suc"), [2]
                                    }
                                })
                        })
                };
                r()
            }
        },
        t.prototype.getScore = function() {
            if (!this._preInitialized) throw "doesn't preInitialized";
            return this._selfEntry.score
        },
        t.prototype.setFriends = function(e) {
            this._friends = e,
                this.bindFriends()
        },
        t.prototype.bindFriends = function() {
            if (this._friends && this._friendEntries) {
                var e = {},
                    t = this._friends;
                t.forEach(function(t) {
                        return e[t.getID()] = RankPlayerVO.createFromContextPlayer(t)
                    }),
                    e[FBInstant.player.getID()] = RankPlayerVO.createFromContextPlayer(FBInstant.player);
                var o = this._friendEntries;
                o.forEach(function(t) {
                    var o = e[t.id];
                    o && (t.name = o.name, t.photo = o.photo, delete e[t.id])
                });
                for (var r in e) o.push(e[r]),
                    e[r].score = this.defaultScore;
                o.sorton("score", "LOWER_IS_BETTER" == this.sortType),
                    o.forEach(function(e, t) {
                        return e.rank = t + 1
                    })
            }
        },
        t.prototype.getSelfEntry = function() {
            return this._selfEntry
        },
        t
}(Emiter);
__reflect(LeaderBoard.prototype, "LeaderBoard");
var PlatformDev = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e),
        t.prototype.needAccount = function() {
            return !0
        },
        t.prototype.getWeeklyEntries = function() {
            for (var e = [], t = 1; e.length < 10;) {
                var o = new RankPlayerVO;
                o.id = "player" + t,
                    o.name = "abc" + t,
                    o.photo = "profile_pic.jpg?igpid=2947565781978901&height=256&width=256&ext=1599291389&hash=AeSDHWV_cRk5cxzm",
                    o.score = 1 + Math.floor(100 * Math.random()),
                    e.push(o),
                    t++
            }
            return e
        },
        t
}(BasePlatform);
__reflect(PlatformDev.prototype, "PlatformDev");
var PlatformFactory = function() {
    function e() {}
    return e.create = function() {
            return window.FBInstant ? new PlatformFB : new PlatformDev
        },
        e
}();
__reflect(PlatformFactory.prototype, "PlatformFactory");
var PlatformFB = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._canAdd2HomeScreen = !1,
            t._contextEntryInfo = null,
            t._cur_contextId = null,
            t._cur_contextType = null,
            t._tournament = !1,
            t._chooseAsync_times = 0,
            t.tounermentID = "",
            t._isDateReady = !1,
            t._isFetching = !1,
            t._userInfo = {
                name: "",
                id: "",
                photo: "",
                friends: [],
                lang: "en_US"
            },
            t._sessionScore = 0,
            t._isPaymentsReady = !1,
            t
    }
    return __extends(t, e),
        t.prototype.getFriends = function() {
            return this._friends || []
        },
        t.prototype.initSDK = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o = this;
                    return __generator(this,
                        function(r) {
                            switch (r.label) {
                                case 0:
                                    return $T_FB_INITIALIZED ? [3, 2] : [4, FBInstant.initializeAsync()];
                                case 1:
                                    r.sent(),
                                        r.label = 2;
                                case 2:
                                    return this._worldRank = new FriendLeaderboard(GameConfig.PL_HOST, GameConfig.BOT_ID),
                                        e = function(e) {
                                            e.code && (e.nick = FBInstant.player.getName(), o.log("platform_error", e))
                                        },
                                        t = function(e) {
                                            o.log("platform_api", e)
                                        },
                                        this.fetchData(), [2]
                            }
                        })
                })
        },
        t.prototype.fetchData = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t = this;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return this._isDateReady ? [2] : this._isFetching ? [4, new Promise(function(e, o) {
                                        t.once("data_ready", e)
                                    })] : [3, 2];
                                case 1:
                                    return o.sent(), [2];
                                case 2:
                                    return o.trys.push([2, 4, , 5]),
                                        this._isFetching = !0, [4, this.initRemoteData()];
                                case 3:
                                    return o.sent(),
                                        this._isDateReady = !0, [3, 5];
                                case 4:
                                    return e = o.sent(),
                                        console.log("fetchData error", e.code || e.msg || e), [3, 5];
                                case 5:
                                    return this._isFetching = !1,
                                        this.emit("data_ready"), [2]
                            }
                        })
                })
        },
        t.prototype.setLoadingProgress = function(e) {
            $T_PROGRESS = Math.max($T_PROGRESS, 100 * e)
        },
        t.prototype.startGame = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var o, r, i, a, s, n, h, l, c, g, u, p, m, d = this;
                    return __generator(this,
                        function(f) {
                            switch (f.label) {
                                case 0:
                                    return [4, FBInstant.startGameAsync()];
                                case 1:
                                    return f.sent(), [4, FBInstant.getEntryPointAsync()];
                                case 2:
                                    return o = f.sent(),
                                        r = FBInstant.context.getType(),
                                        i = FBInstant.context.getID(),
                                        this._contextEntryInfo = {
                                            contextEntry: o,
                                            contextType: r,
                                            contextId: i
                                        },
                                        console.log("contextId: " + i),
                                        console.log("contextEntry: " + o),
                                        console.log("contextType: " + r), [4, this.onContextChange(!0)];
                                case 3:
                                    return f.sent(),
                                        this.watchContext(),
                                        "feed" != o && "facebook_gaming" != o && "in_game_menue/bookmark" != o || "THREAD" != r || (this._tournament = !0, this.log("thread_tournament", {
                                            score: o
                                        })),
                                        this.initPayments(),
                                        console.log("startGameAsync", Date.now()),
                                        a = FBInstant.getEntryPointData(),
                                        console.log("entry_data", JSON.stringify(a)),
                                        this.challenge_info = a && a.challenge_info,
                                        this.challenge_info ? [4, FBInstant.context.getPlayersAsync()] : [3, 5];
                                case 4:
                                    s = f.sent(),
                                        n = {},
                                        h = {},
                                        s.forEach(function(e) {
                                            n[e.getID()] = e.getPhoto(),
                                                h[e.getID()] = e.getName()
                                        }),
                                        this.challenge_info.opponents.forEach(function(e) {
                                            e.name = h[e.playerId] || "unkonw",
                                                e.photo = n[e.playerId] || "default-portrait_png"
                                        }),
                                        f.label = 5;
                                case 5:
                                    this.switchGameInfo = a && a.switchGameInfo || null,
                                        this.invite_skin_data = a && a.invite_skin_data,
                                        this.invite_skin_data && this.invite_skin_data.playerId == FBInstant.player.getID() && (this.invite_skin_data = null),
                                        f.label = 6;
                                case 6:
                                    return f.trys.push([6, 8, , 9]),
                                        l = this, [4, FBInstant.player.getConnectedPlayersAsync()];
                                case 7:
                                    return l._friends = f.sent(), [3, 9];
                                case 8:
                                    return c = f.sent(),
                                        this._friends = [], [3, 9];
                                case 9:
                                    g = this._friends.map(function(e) {
                                            return e.getID()
                                        }),
                                        this._userInfo = {
                                            id: FBInstant.player.getID(),
                                            name: FBInstant.player.getName(),
                                            photo: FBInstant.player.getPhoto(),
                                            friends: g,
                                            lang: FBInstant.getLocale()
                                        },
                                        f.label = 10;
                                case 10:
                                    return f.trys.push([10, 12, , 13]),
                                        u = this, [4, FBInstant.canCreateShortcutAsync()];
                                case 11:
                                    return u._canAdd2HomeScreen = f.sent(), [3, 13];
                                case 12:
                                    return p = f.sent(),
                                        console.log("canCreateShortcutAsync failed"), [3, 13];
                                case 13:
                                    return console.log("can add sc", this._canAdd2HomeScreen), [4, this.fetchData()];
                                case 14:
                                    return f.sent(),
                                        this.isNewPlayer = void 0 == this.$remoteData.gold,
                                        this.playerType = this.isNewPlayer ? "new" : "old",
                                        this.isNewPlayer && (this.$remoteData.gold = 0, this.$remoteData.add_hs = 0, this.$remoteData.add_hs_refuse_count = 0, this.$remoteData.context_ids = [], this.$remoteData.h_score = 0, this.$remoteData.iap_inventory = [], this.$remoteData.game_db = {},
                                            this.$remoteData.skin_invites = [], this.syncRemoteData()),
                                        this.$remoteData.last_login_dayth ? Date.days() != this.$remoteData.last_login_dayth && (this.$remoteData.login_day_count++, this.$remoteData.last_login_dayth = Date.days(), this.syncRemoteData()) : (this.$remoteData.last_login_dayth = Date.days(), this.$remoteData.login_day_count = 1, this.syncRemoteData()),
                                        console.log("login_days"),
                                        this._worldRank.setFriends(this._friends), [4, this._worldRank.initializeAsync()];
                                case 15:
                                    return f.sent(),
                                        FBInstant.setSessionData({
                                            nickname: this._userInfo.name,
                                            playerInfo: {
                                                head: this._userInfo.photo,
                                                lang: this._userInfo.lang,
                                                score: this.$remoteData.h_score
                                            }
                                        }),
                                        this.iad = new ad.InterstitialAD(e, !0),
                                        this.iad.on("ad_failed",
                                            function(e) {
                                                return d.log("ad_failed", e)
                                            }),
                                        this.iad.on("ad_show",
                                            function(e) {
                                                return d.log("iad_times", e)
                                            }),
                                        this.rad = new ad.RewardedVideoAD(t, !0),
                                        this.rad.on("ad_failed",
                                            function(e) {
                                                return d.log("ad_failed", e)
                                            }),
                                        this.rad.on("ad_show",
                                            function(e) {
                                                return d.log("rad_times", e)
                                            }),
                                        m = a ? a.type : "normal",
                                        "normal" == m && FBInstant.context.getID() && (m = "group_rank"),
                                        platform.log("entry_point", {
                                            entry: m,
                                            play_type: this.playerType
                                        }),
                                        this.entry = m,
                                        console.log("entry", m), [2]
                            }
                        })
                })
        },
        t.prototype.getPlatFormiOS = function() {
            return "IOS" == FBInstant.getPlatform() ? !0 : !1
        },
        t.prototype.getAllTimeEntriesAsync = function() {
            return this._worldRank.getAllTimeEntriesAsync()
        },
        t.prototype.getAllTimeEntries = function() {
            return this._worldRank.getAllTimeEntries()
        },
        t.prototype.getWeeklyEntriesAsync = function() {
            return this._worldRank.getWeeklyEntriesAsync()
        },
        t.prototype.getWeeklyEntries = function() {
            return this._worldRank.getWeeklyEntries()
        },
        t.prototype.getHighScore = function() {
            return this._worldRank.getAllTimeHighScore()
        },
        t.prototype.setHighScore = function(e, t) {
            e > this.$remoteData.h_score && (this.$remoteData.h_score = e, this.syncRemoteData()),
                this._worldRank.setScoreAsync(e, t)
        },
        t.prototype.postSessionScore = function(e, t) {
            void 0 === t && (t = !1), !t && e <= this._sessionScore || (this._sessionScore = e, FBInstant.postSessionScore(e), this.log("session_score", {
                score: e
            }), console.log("session: " + platform.getContextId()))
        },
        t.prototype.hasAD = function() {
            return this.hasRAD() || this.hasIAD()
        },
        t.prototype.showAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.hasRAD() ? [4, this.showRAD()] : [3, 2];
                                case 1:
                                    return e.sent(), [3, 4];
                                case 2:
                                    return this.hasIAD() ? [4, this.showIAD()] : [3, 4];
                                case 3:
                                    e.sent(),
                                        e.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.hasRAD = function() {
            return this.rad && this.rad.hasAD()
        },
        t.prototype.showRAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.rad,
                                        e ? [4, this.rad.showAD()] : [3, 2];
                                case 1:
                                    e = t.sent(),
                                        t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.hasIAD = function() {
            return this.iad && this.iad.hasAD()
        },
        t.prototype.showIAD = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = this.iad,
                                        e ? [4, this.iad.showAD()] : [3, 2];
                                case 1:
                                    e = t.sent(),
                                        t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.getToken = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            return e = FBInstant.player.getName() || "unknow",
                                t = {
                                    playerId: this._signedPlayerInfo.getPlayerID(),
                                    signature: this._signedPlayerInfo.getSignature(),
                                    photo: FBInstant.player.getPhoto(),
                                    nickname: e
                                }, [2, t]
                        })
                })
        },
        Object.defineProperty(t.prototype, "userInfo", {
            get: function() {
                return this._userInfo
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.getContextId = function() {
            return FBInstant.context.getID()
        },
        t.prototype.getPlayerId = function() {
            return FBInstant.player.getID()
        },
        t.prototype.getTournament = function() {
            var e = this._contextEntryInfo.contextEntry,
                t = this._contextEntryInfo.contextType,
                o = this._contextEntryInfo.contextId;
            return "feed" != e && "facebook_gaming" != e && "in_game_menue/bookmark" != e || "THREAD" != t ? !1 : o == FBInstant.context.getID()
        },
        t.prototype.matchPlayerAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    console.log("MatchPlayer"),
                                        this.log("create_detail", {
                                            phase: 0
                                        }),
                                        t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 5]), [4, FBInstant.matchPlayerAsync(null, !0, !0)];
                                case 2:
                                    return t.sent(), [4, this.onContextChange(!0)];
                                case 3:
                                    return t.sent(), [2, !0];
                                case 4:
                                    return e = t.sent(),
                                        console.log("choose result", JSON.stringify(e)),
                                        e.code == Constant.SAME_CONTEXT ? [2, !0] : [3, 5];
                                case 5:
                                    return this.log("create_detail", {
                                        phase: 1
                                    }), [2, !1]
                            }
                        })
                })
        },
        t.prototype.choose = function(e, t, o) {
            return void 0 === t && (t = !1),
                void 0 === o && (o = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        var r;
                        return __generator(this,
                            function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.log("create_detail", {
                                                phase: 0,
                                                place: o
                                            }),
                                            void 0 == e && (e = ["NEW_CONTEXT_ONLY"]),
                                            i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 5]), [4, FBInstant.context.chooseAsync({
                                            filters: e,
                                            minSize: t ? 3 : 2
                                        })];
                                    case 2:
                                        return i.sent(), [4, this.onContextChange(!0)];
                                    case 3:
                                        return i.sent(), [3, 5];
                                    case 4:
                                        return r = i.sent(),
                                            console.log("choose result", JSON.stringify(r)),
                                            r.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                                    case 5:
                                        return this.log("create_detail", {
                                                phase: 1,
                                                place: o
                                            }),
                                            this.emit("context_changed"), [2, !0]
                                }
                            })
                    })
        },
        t.prototype.switchCtx = function(e, t) {
            return void 0 === t && (t = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        var o;
                        return __generator(this,
                            function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.log("switch_detail", {
                                                phase: 0,
                                                place: t
                                            }),
                                            r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, , 5]), [4, FBInstant.context.switchAsync(e)];
                                    case 2:
                                        return r.sent(), [4, this.onContextChange(!0)];
                                    case 3:
                                        return r.sent(), [3, 5];
                                    case 4:
                                        return o = r.sent(),
                                            console.log("switchCtx result", JSON.stringify(o)),
                                            o.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                                    case 5:
                                        return this.emit("context_changed"),
                                            this.log("switch_detail", {
                                                phase: 1,
                                                place: t
                                            }), [2, !0]
                                }
                            })
                    })
        },
        t.prototype.createCtx = function(e, t) {
            return void 0 === t && (t = "default"),
                __awaiter(this, void 0, void 0,
                    function() {
                        var o;
                        return __generator(this,
                            function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.log("create_detail", {
                                                phase: 0,
                                                place: t
                                            }),
                                            r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, , 5]), [4, FBInstant.context.createAsync(e)];
                                    case 2:
                                        return r.sent(), [4, this.onContextChange(!0)];
                                    case 3:
                                        return r.sent(), [3, 5];
                                    case 4:
                                        return o = r.sent(),
                                            console.log("createCtx result", JSON.stringify(o)),
                                            o.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                                    case 5:
                                        return this.emit("context_changed"),
                                            this.log("create_detail", {
                                                phase: 1,
                                                place: t
                                            }), [2, !0]
                                }
                            })
                    })
        },
        t.prototype.getContextPlayers = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    e = [],
                                        o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, FBInstant.context.getPlayersAsync()];
                                case 2:
                                    return e = o.sent(), [3, 4];
                                case 3:
                                    return t = o.sent(),
                                        console.log("getContextPlayers error", JSON.stringify(t)), [3, 4];
                                case 4:
                                    return [2, e]
                            }
                        })
                })
        },
        t.prototype.switchGame = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var o, r;
                    return __generator(this,
                        function(i) {
                            switch (i.label) {
                                case 0:
                                    o = {
                                            switchGameInfo: {
                                                appId: this.appId,
                                                appName: this.appName
                                            },
                                            type: this.appName
                                        },
                                        i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, FBInstant.switchGameAsync(e, Object.assign(o, t))];
                                case 2:
                                    return i.sent(), [4, this.onContextChange(!0)];
                                case 3:
                                    return i.sent(), [3, 5];
                                case 4:
                                    return r = i.sent(),
                                        console.log("switchgame error", JSON.stringify(r)), [2, !1];
                                case 5:
                                    return [2, !0]
                            }
                        })
                })
        },
        t.prototype.updateStatues = function(e, t) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var o, r, i;
                    return __generator(this,
                        function(a) {
                            switch (a.label) {
                                case 0:
                                    o = 0,
                                        a.label = 1;
                                case 1:
                                    if (!(3 > o)) return [3, 8];
                                    r = !1,
                                        a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]), [4, FBInstant.updateAsync({
                                        action: t.action || "CUSTOM",
                                        cta: t.cta || "Play now",
                                        image: t.image,
                                        text: t.text || "Play with me!",
                                        template: t.template || "game_result",
                                        data: e,
                                        strategy: t.strategy || "IMMEDIATE",
                                        notification: t.notification || "NO_PUSH"
                                    })];
                                case 3:
                                    return a.sent(), [3, 5];
                                case 4:
                                    return i = a.sent(),
                                        r = !0,
                                        console.log("updateStatues failed", o, JSON.stringify(i)), [3, 5];
                                case 5:
                                    return r ? [4, waitAsync(500)] : [3, 8];
                                case 6:
                                    a.sent(),
                                        a.label = 7;
                                case 7:
                                    return o++, [3, 1];
                                case 8:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.share = function(e) {
            return void 0 === e && (e = {}),
                __awaiter(this, void 0, void 0,
                    function() {
                        var t, o;
                        return __generator(this,
                            function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = !0,
                                            r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]),
                                            console.log("share..."), [4, FBInstant.shareAsync({
                                                intent: "INVITE",
                                                image: e.img || RES.getRes("share_png").toDataURL("image/png"),
                                                text: e.text || "Hey buddy, I found an awesome game. I'm sure you'll love it.",
                                                data: e.data || null
                                            })];
                                    case 2:
                                        return r.sent(), [3, 4];
                                    case 3:
                                        return o = r.sent(),
                                            t = !1, [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                    })
        },
        t.prototype.log = function(t, o, r) {
            void 0 === r && (r = 1),
                e.prototype.log.call(this, t, o, r),
                o = o || {},
                o._appVersion = $T_GAME_VERSION,
                o.playerId = FBInstant.player.getID(),
                o.playerName = FBInstant.player.getName(),
                FBInstant.logEvent(t, r, o)
        },
        t.prototype.getData = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t, o, r;
                    return __generator(this,
                        function(i) {
                            switch (i.label) {
                                case 0:
                                    t = null,
                                        o = 5,
                                        i.label = 1;
                                case 1:
                                    if (t || !(o-- > 0)) return [3, 6];
                                    i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, FBInstant.player.getDataAsync(e)];
                                case 3:
                                    return t = i.sent(), [3, 5];
                                case 4:
                                    return r = i.sent(), [3, 5];
                                case 5:
                                    return [3, 1];
                                case 6:
                                    return [2, t || {}]
                            }
                        })
                })
        },
        t.prototype.setData = function(e, t) {
            return void 0 === t && (t = !1),
                __awaiter(this, void 0, void 0,
                    function() {
                        return __generator(this,
                            function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, FBInstant.player.setDataAsync(e)];
                                    case 1:
                                        return o.sent(),
                                            t ? [4, FBInstant.player.flushDataAsync()] : [3, 3];
                                    case 2:
                                        o.sent(),
                                            o.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                    })
        },
        t.prototype.canAdd2HomeScreen = function() {
            return this._canAdd2HomeScreen
        },
        t.prototype.add2HomeScreen = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e;
                    return __generator(this,
                        function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, FBInstant.createShortcutAsync()];
                                case 1:
                                    return t.sent(), [3, 3];
                                case 2:
                                    return e = t.sent(),
                                        console.log("add 2 Home Screen result", JSON.stringify(e)), [2, {
                                            res: !1,
                                            code: e.code
                                        }];
                                case 3:
                                    return [2, {
                                        res: !0,
                                        code: ""
                                    }]
                            }
                        })
                })
        },
        t.prototype.suportIAP = function() {
            return this._isPaymentsReady
        },
        t.prototype.getCatalogAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    e = null,
                                        o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, FBInstant.payments.getCatalogAsync()];
                                case 2:
                                    return e = o.sent(),
                                        console.log(JSON.stringify(e)), [3, 4];
                                case 3:
                                    return t = o.sent(),
                                        console.log("getCatalogAsync error:" + t.code || t.message || t), [3, 4];
                                case 4:
                                    return [2, e]
                            }
                        })
                })
        },
        t.prototype.purchaseAsync = function(e, t) {
            return void 0 === t && (t = ""),
                __awaiter(this, void 0, void 0,
                    function() {
                        var o, r, i, a, s;
                        return __generator(this,
                            function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this._isPaymentsReady) return [2, !1];
                                        o = !1,
                                            r = FBInstant.getPlatform(),
                                            this.log("buyProduct", {
                                                phase: 0,
                                                productId: e,
                                                platform: r
                                            }),
                                            n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 4, , 5]),
                                            i = {},
                                            i.productID = e,
                                            t && (i.developerPayload = i.developerPayload), [4, FBInstant.payments.purchaseAsync(i)];
                                    case 2:
                                        return a = n.sent(),
                                            this.log("buyProduct", {
                                                phase: 1,
                                                productId: e,
                                                platform: r
                                            }), [4, FBInstant.payments.consumePurchaseAsync(a.purchaseToken)];
                                    case 3:
                                        return n.sent(),
                                            this.addIAPInventroy(a.productID),
                                            this.log("buyProduct", {
                                                phase: 2,
                                                productId: e,
                                                platform: r
                                            }),
                                            o = !0, [3, 5];
                                    case 4:
                                        return s = n.sent(),
                                            console.log("purchaseAsync error:" + s.code || s.message || s),
                                            this.log("buyProduct", {
                                                phase: -1,
                                                productId: e,
                                                platform: r,
                                                code: s.code
                                            }), [3, 5];
                                    case 5:
                                        return [2, o]
                                }
                            })
                    })
        },
        t.prototype.checkPurchaseAsync = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r, i, a, s;
                    return __generator(this,
                        function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this._isPaymentsReady) return [2, null];
                                    e = FBInstant.getPlatform(),
                                        t = null,
                                        n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, FBInstant.payments.getPurchasesAsync()];
                                case 2:
                                    return t = n.sent(), [3, 4];
                                case 3:
                                    return o = n.sent(),
                                        console.log("getPurchasesAsync error:" + o.code || o.message || o), [3, 4];
                                case 4:
                                    r = 0,
                                        i = t,
                                        n.label = 5;
                                case 5:
                                    if (!(r < i.length)) return [3, 10];
                                    a = i[r],
                                        n.label = 6;
                                case 6:
                                    return n.trys.push([6, 8, , 9]), [4, FBInstant.payments.consumePurchaseAsync(a.purchaseToken)];
                                case 7:
                                    return n.sent(),
                                        this.addIAPInventroy(a.productID),
                                        this.log("checkPurchase", {
                                            phase: 1,
                                            productId: a.productID,
                                            platform: e
                                        }), [3, 9];
                                case 8:
                                    return s = n.sent(),
                                        console.log("checkPurchase error:" + s.code || s.message || s),
                                        this.log("checkPurchase", {
                                            phase: -1,
                                            platform: e,
                                            code: s.code
                                        }), [3, 9];
                                case 9:
                                    return r++, [3, 5];
                                case 10:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.initPayments = function() {
            var e = this;
            if (-1 != FBInstant.getSupportedAPIs().indexOf("payments.purchaseAsync") && "IOS" != FBInstant.getPlatform()) {
                var t = FBInstant.getPlatform();
                this.log("paymentsReady", {
                        phase: 0,
                        platform: t
                    }),
                    FBInstant.payments.onReady(function() {
                        e._isPaymentsReady = !0,
                            e.log("paymentsReady", {
                                phase: 1,
                                platform: t
                            }),
                            e.checkPurchaseAsync()
                    })
            }
        },
        t.prototype.addIAPInventroy = function(e) {
            this.remoteData.iap_inventory || (this.remoteData.iap_inventory = []),
                this.remoteData.iap_inventory.push(e),
                this.syncRemoteData()
        },
        t.prototype.hasPurchased = function(e) {
            var t = this.remoteData.iap_inventory;
            return t && -1 != t.indexOf(e)
        },
        t.prototype.checkBotSubscribe = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t, o, r;
                    return __generator(this,
                        function(i) {
                            switch (i.label) {
                                case 0:
                                    e = null,
                                        i.label = 1;
                                case 1:
                                    return i.trys.push([1, 5, , 6]), [4, FBInstant.player.canSubscribeBotAsync()];
                                case 2:
                                    return t = i.sent(),
                                        console.log("can subscribe:", t),
                                        t ? (this.log("bot_subscribe", {
                                            result: -1
                                        }), [4, FBInstant.player.subscribeBotAsync()]) : [3, 4];
                                case 3:
                                    o = i.sent(),
                                        this.log("bot_subscribe", {
                                            result: 1
                                        }),
                                        e = {
                                            result: !0
                                        },
                                        i.label = 4;
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return r = i.sent(),
                                        this.log("bot_subscribe", {
                                            result: 0
                                        }),
                                        e = {
                                            result: !1,
                                            code: r.code,
                                            msg: r.message
                                        }, [3, 6];
                                case 6:
                                    return [2, e]
                            }
                        })
                })
        },
        t.prototype.onContextChange = function(e) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var t, o, r;
                    return __generator(this,
                        function(i) {
                            return t = FBInstant.context.getID(),
                                o = this._cur_contextId,
                                this._cur_contextId = t,
                                this._cur_contextType = FBInstant.context.getType(),
                                this._tournament = !e,
                                this._tournament ? (r = "null", r = null == o ? "SOLO" : o == this.tounermentID ? "overBtn" : "autochoose", console.log("new tournament for " + r), this.log("tournament_create", {
                                    source: r
                                })) : console.log("changed to context"), [2]
                        })
                })
        },
        t.prototype.watchContext = function() {
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, t;
                    return __generator(this,
                        function(o) {
                            switch (o.label) {
                                case 0:
                                    return e = FBInstant.context.getID(),
                                        e == this._cur_contextId ? [3, 2] : (t = this._cur_contextId, [4, this.onContextChange(!1)]);
                                case 1:
                                    o.sent(),
                                        o.label = 2;
                                case 2:
                                    return [4, waitAsync(500)];
                                case 3:
                                    return o.sent(), [3, 0];
                                case 4:
                                    return [2]
                            }
                        })
                })
        },
        t.prototype.isTournament = function() {
            return this._tournament
        },
        t.prototype.setTournament = function() {
            this._tournament = !1
        },
        t
}(BasePlatform);
__reflect(PlatformFB.prototype, "PlatformFB");
var RankPlayerVO = function() {
    function e() {
        this.name = "",
            this.photo = "",
            this.score = 0,
            this.id = "",
            this.tip = "",
            this.rank = 0
    }
    return Object.defineProperty(e.prototype, "skin", {
            get: function() {
                return this.extraData && this.extraData.skin || 1
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "skin1", {
            get: function() {
                return this.extraData && this.extraData.skin || 1
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.toJSON = function() {
            return {
                id: this.id,
                score: this.score,
                extraData: this.extraData
            }
        },
        e.createFromJSON = function(t) {
            var o = new e;
            if (o.id = t.id, o.score = t.score, "string" == typeof t.extraData) try {
                o.extraData = JSON.parse(t.extraData)
            } catch (r) {} else o.extraData = t.extraData;
            return o
        },
        e.createFromLeaderBoardEntry = function(t) {
            var o = t.getPlayer(),
                r = new e;
            r.name = o.getName(),
                r.photo = o.getPhoto(),
                r.id = o.getID(),
                r.score = t.getScore();
            var i = t.getExtraData(),
                a = null;
            try {
                i && (a = JSON.parse(i))
            } catch (s) {
                console.log(s)
            }
            return r.extraData = a,
                r.rank = t.getRank(),
                r
        },
        e.createFromContextPlayer = function(t) {
            var o = new e;
            return o.name = t.getName(),
                o.photo = t.getPhoto(),
                o.id = t.getID(),
                o
        },
        e.prototype.toJSONObj = function() {
            return {
                id: this.id,
                score: this.score,
                extraData: this.extraData
            }
        },
        e.fromJSONObj = function(t) {
            var o = new e;
            if (o.id = t.id, o.score = t.score, "string" == typeof t.extraData) try {
                o.extraData = JSON.parse(t.extraData)
            } catch (r) {} else o.extraData = t.extraData;
            return o
        },
        e
}();
__reflect(RankPlayerVO.prototype, "RankPlayerVO");
var ShareHelper;
!
function(e) {
    function t(e) {
        var t = this;
        return new Promise(function(o, r) {
            e.once("ready_2_draw",
                    function() {
                        console.log("ready_2_draw");
                        var t = new egret.RenderTexture;
                        t.drawToTexture(e, new egret.Rectangle(0, 0, 600, 314)),
                            e.removeFromParent();
                        var r = t.toDataURL("image/png");
                        t.dispose(),
                            o(r)
                    },
                    t),
                app.stage.addChildAt(e, 0),
                e.y = app.stage.stageHeight + 10
        })
    }

    function o(e) {
        var t = this;
        return new Promise(function(o, r) {
            e.once("ready_2_draw",
                    function() {
                        console.log("ready_2_draw");
                        var t = new egret.RenderTexture;
                        t.drawToTexture(e, new egret.Rectangle(0, 0, 640, 900)),
                            e.removeFromParent();
                        var r = t.toDataURL("image/png");
                        t.dispose(),
                            o(r)
                    },
                    t),
                app.stage.addChildAt(e, 0),
                e.y = app.stage.stageHeight + 10
        })
    }

    function r(e, o, r) {
        return __awaiter(this, void 0, void 0,
            function() {
                var i, a, s, n, h, l;
                return __generator(this,
                    function(c) {
                        switch (c.label) {
                            case 0:
                                return i = {
                                        photo: FBInstant.player.getPhoto(),
                                        playerId: FBInstant.player.getID(),
                                        name: FBInstant.player.getName(),
                                        score: o
                                    },
                                    a = {
                                        level: e,
                                        senderId: i.playerId,
                                        opponents: [i]
                                    },
                                    s = r ? "Hey, " + r + ", m" : "M",
                                    n = s + "y score is " + o + "! Can you do better?",
                                    h = new ShareImage, [4, t(h.InitShareImage1(e, i.photo, o))];
                            case 1:
                                return l = c.sent(),
                                    console.log("r done"),
                                    a.opponents.forEach(function(e) {
                                        delete e.photo,
                                            delete e.name
                                    }), [4, platform.updateStatues(Object.assign({
                                        type: "challenge"
                                    }, {
                                        challenge_info: a
                                    }), {
                                        image: l,
                                        text: "[Level " + e + "] " + n,
                                        template: "challenge",
                                        cta: "CHALLENGE"
                                    })];
                            case 2:
                                return c.sent(), [2]
                        }
                    })
            })
    }

    function i(e, o, r, i) {
        return __awaiter(this, void 0, void 0,
            function() {
                var a, s, n, h, l, c, g;
                return __generator(this,
                    function(u) {
                        switch (u.label) {
                            case 0:
                                return a = {
                                        photo: FBInstant.player.getPhoto(),
                                        playerId: FBInstant.player.getID(),
                                        name: FBInstant.player.getName(),
                                        score: o
                                    },
                                    s = r || "you",
                                    n = "you" == s ? "you" : "they",
                                    h = a.name + " has challenged " + s + ", " + n + " are neck and neck!",
                                    a.score > i.score ? h = a.name + " has failed to challenge " + s + ", " + s + " win!" : a.score < i.score && (h = a.name + " has succeeded in passing " + s + ". Come and challenge " + a.name),
                                    console.log("r image"),
                                    l = new ShareImage, [4, t(l.InitShareImage2(e, [a.photo, i.photo], [o, i.score]))];
                            case 1:
                                return c = u.sent(),
                                    console.log("r done"),
                                    g = {
                                        level: e,
                                        senderId: a.playerId,
                                        opponents: [i, a]
                                    },
                                    g.opponents.forEach(function(e) {
                                        delete e.photo,
                                            delete e.name
                                    }), [4, platform.updateStatues(Object.assign({
                                        type: "challenge_result"
                                    }, {
                                        challenge_info: g
                                    }), {
                                        image: c,
                                        text: "[Level " + e + "] " + h,
                                        cta: "Play",
                                        template: "challenge_result"
                                    })];
                            case 2:
                                return u.sent(), [2]
                        }
                    })
            })
    }

    function a(e, o, r) {
        return __awaiter(this, void 0, void 0,
            function() {
                var i, a, s, n, h, l, c;
                return __generator(this,
                    function(g) {
                        switch (g.label) {
                            case 0:
                                return i = {
                                        photo: FBInstant.player.getPhoto(),
                                        playerId: FBInstant.player.getID(),
                                        name: FBInstant.player.getName(),
                                        score: o
                                    },
                                    a = r.find(function(e) {
                                        return e.playerId == i.playerId
                                    }),
                                    a ? i.score < a.score && Object.assign(a, i) : r.push(i),
                                    r.sorton("score", !0),
                                    r.forEach(function(e, t) {
                                        return e.rankIndex = t
                                    }),
                                    s = {
                                        level: e,
                                        senderId: i.playerId,
                                        opponents: r
                                    },
                                    n = r.findIndex(function(e) {
                                        return e.playerId == i.playerId
                                    }),
                                    h = [],
                                    r.length <= 6 ? h = r : 6 > n ? h = r.slice(0, 6) : (h = r.slice(0, 5), h.push(r[n]), n = 5),
                                    l = new ShareImage, [4, t(l.InitShareImage(e, n, h))];
                            case 1:
                                return c = g.sent(),
                                    console.log("r done"),
                                    s.opponents.forEach(function(e) {
                                        delete e.photo,
                                            delete e.name
                                    }), [4, platform.updateStatues(Object.assign({
                                        type: "challenge_leaderboard"
                                    }, {
                                        challenge_info: s
                                    }), {
                                        image: c,
                                        text: "[Level " + e + "] " + platform.userInfo.name + " scored " + i.score + "s",
                                        cta: "Play",
                                        template: "challenge_leaderboard"
                                    })];
                            case 2:
                                return g.sent(), [2]
                        }
                    })
            })
    }

    function s() {
        return __awaiter(this, void 0, void 0,
            function() {
                var e, t;
                return __generator(this,
                    function(o) {
                        return e = [{
                                    playerId: "1838821619562248",
                                    name: "six",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: 1.5
                                },
                                {
                                    playerId: "1999570236824571",
                                    name: "terran",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: 1.8
                                },
                                {
                                    playerId: "1999570236824571",
                                    name: "terran",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: 1.3
                                },
                                {
                                    playerId: "1999570236824571",
                                    name: "terran",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: 2.3
                                },
                                {
                                    playerId: "1999570236824571",
                                    name: "terran",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: 2.6
                                },
                                {
                                    playerId: "1999570236824571",
                                    name: "terran",
                                    photo: "profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                                    score: .3
                                }
                            ],
                            t = new ShareImage,
                            app.stage.addChild(t.InitShareImage(10, 0, e)), [2]
                    })
            })
    }

    function n(e, t) {
        return __awaiter(this, void 0, void 0,
            function() {
                var o, s, n, h, l, c, g, u, c, p, m;
                return __generator(this,
                    function(d) {
                        switch (d.label) {
                            case 0:
                                return platform instanceof PlatformFB ? "SOLO" == FBInstant.context.getType() ? [2] : (o = app.model, s = platform.challenge_info, platform.challenge_info = null, n = FBInstant.context.isSizeBetween(3, null), h = n && n.answer, [4, FBInstant.context.getPlayersAsync()]) : [2];
                            case 1:
                                if (l = d.sent() || [], l = l.filter(function(e) {
                                        return e.getID() != FBInstant.player.getID()
                                    }), s && !(s.senderId == platform.userInfo.id && s.opponents.length <= 2)) return [3, 6];
                                c = "", !h && l.length > 0 && (c = l[0].getName()),
                                    console.log("sending challenge"),
                                    d.label = 2;
                            case 2:
                                return d.trys.push([2, 4, , 5]), [4, r(e, t, c)];
                            case 3:
                                return d.sent(), [3, 5];
                            case 4:
                                return g = d.sent(),
                                    console.log("sending challenge failed", g), [3, 5];
                            case 5:
                                return console.log("sending challenge done"), [3, 16];
                            case 6:
                                if (1 != s.opponents.length) return [3, 11];
                                u = s.opponents[0],
                                    console.log("sending challenge result"),
                                    c = h ? u.name : "",
                                    d.label = 7;
                            case 7:
                                return d.trys.push([7, 9, , 10]), [4, i(e, t, c, u)];
                            case 8:
                                return d.sent(), [3, 10];
                            case 9:
                                return p = d.sent(),
                                    console.log("sending challenge result failed", p), [3, 10];
                            case 10:
                                return console.log("sending challenge result done"), [3, 16];
                            case 11:
                                console.log("sending challenge leaderbooard"),
                                    d.label = 12;
                            case 12:
                                return d.trys.push([12, 14, , 15]), [4, a(e, t, s.opponents)];
                            case 13:
                                return d.sent(), [3, 15];
                            case 14:
                                return m = d.sent(),
                                    console.log("sending challenge leaderbooard failed", m), [3, 15];
                            case 15:
                                console.log("sending challenge leaderbooard done"),
                                    d.label = 16;
                            case 16:
                                return [2]
                        }
                    })
            })
    }

    function h(e, t) {
        return __awaiter(this, void 0, void 0,
            function() {
                var o;
                return __generator(this,
                    function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, Promise.race([Promise.all([new Promise(function(e) {
                                    return setTimeout(e, 3e3)
                                }), n(e, t)]), new Promise(function(e) {
                                    return setTimeout(e, 6e3)
                                })])];
                            case 1:
                                return r.sent(), [3, 3];
                            case 2:
                                return o = r.sent(),
                                    console.log("error", o), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
            })
    }

    function l(e) {
        return __awaiter(this, void 0, void 0,
            function() {
                var t, o, r, i;
                return __generator(this,
                    function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(platform instanceof PlatformFB)) return [2];
                                if ("SOLO" == FBInstant.context.getType()) return [2];
                                t = app.model,
                                    o = "context." + FBInstant.context.getID(),
                                    a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, FBInstant.getLeaderboardAsync(o)];
                            case 2:
                                return r = a.sent(),
                                    r.setScoreAsync(e, ""), [3, 4];
                            case 3:
                                return i = a.sent(), [3, 4];
                            case 4:
                                return [4, FBInstant.updateAsync({
                                    action: "LEADERBOARD",
                                    name: o
                                })];
                            case 5:
                                return a.sent(), [2]
                        }
                    })
            })
    }

    function c(e, t, r) {
        return void 0 === r && (r = !1),
            __awaiter(this, void 0, void 0,
                function() {
                    var i, a, s, n, h;
                    return __generator(this,
                        function(l) {
                            switch (l.label) {
                                case 0:
                                    i = ["Wow, it's real cool."],
                                        l.label = 1;
                                case 1:
                                    return l.trys.push([1, 7, , 8]),
                                        a = new ShareImage,
                                        s = a.InitShareRank(), [4, o(s)];
                                case 2:
                                    return n = l.sent(),
                                        console.log("r img done"),
                                        r ? [3, 4] : [4, platform.updateStatues(Object.assign({
                                                type: e
                                            },
                                            t), {
                                            text: i.random(),
                                            image: n,
                                            cta: "Play",
                                            template: e
                                        })];
                                case 3:
                                    return l.sent(), [3, 6];
                                case 4:
                                    return [4, platform.share({
                                        img: n,
                                        text: i.random(),
                                        cta: "Play",
                                        data: Object.assign({
                                                type: e
                                            },
                                            t)
                                    })];
                                case 5:
                                    l.sent(),
                                        l.label = 6;
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return h = l.sent(),
                                        console.log("update Failed" + JSON.stringify(h)), [3, 8];
                                case 8:
                                    return [2]
                            }
                        })
                })
    }

    function g(e, t, o, r) {
        return void 0 === r && (r = !1),
            __awaiter(this, void 0, void 0,
                function() {
                    var i, a, s;
                    return __generator(this,
                        function(n) {
                            switch (n.label) {
                                case 0:
                                    i = ["Wow, it's real cool."],
                                        n.label = 1;
                                case 1:
                                    return n.trys.push([1, 6, , 7]),
                                        a = e,
                                        console.log("r img done"),
                                        r ? [3, 3] : [4, platform.updateStatues(Object.assign({
                                                type: t
                                            },
                                            o), {
                                            text: i.random(),
                                            image: a,
                                            cta: "Play",
                                            template: t
                                        })];
                                case 2:
                                    return n.sent(), [3, 5];
                                case 3:
                                    return [4, platform.share({
                                        img: a,
                                        text: i.random(),
                                        cta: "Play",
                                        data: Object.assign({
                                                type: t
                                            },
                                            o)
                                    })];
                                case 4:
                                    n.sent(),
                                        n.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return s = n.sent(),
                                        console.log("update Failed" + JSON.stringify(s)), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                })
    }

    function u(e, o, r) {
        return void 0 === r && (r = !1),
            __awaiter(this, void 0, void 0,
                function() {
                    var i, a, s, n, h;
                    return __generator(this,
                        function(l) {
                            switch (l.label) {
                                case 0:
                                    i = ["Wow, it's real cool.", "Are you flipping a master?", "Let me help you!"],
                                        l.label = 1;
                                case 1:
                                    return l.trys.push([1, 7, , 8]),
                                        a = new ShareImage,
                                        s = a.InitShareCommon("share" + Math.randInt(1, 3) + "_jpg", FBInstant.player.getPhoto()), [4, t(s)];
                                case 2:
                                    return n = l.sent(),
                                        console.log("r img done"),
                                        r ? [3, 4] : [4, platform.updateStatues(Object.assign({
                                                type: e
                                            },
                                            o), {
                                            text: i.random(),
                                            image: n,
                                            cta: "Play",
                                            template: e
                                        })];
                                case 3:
                                    return l.sent(), [3, 6];
                                case 4:
                                    return [4, platform.share({
                                        img: n,
                                        text: i.random(),
                                        cta: "Play",
                                        data: Object.assign({
                                                type: e
                                            },
                                            o)
                                    })];
                                case 5:
                                    l.sent(),
                                        l.label = 6;
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return h = l.sent(),
                                        console.log("update Failed" + JSON.stringify(h)), [3, 8];
                                case 8:
                                    return [2]
                            }
                        })
                })
    }

    function p(e, o) {
        return __awaiter(this, void 0, void 0,
            function() {
                var r, i, a, s, n, h;
                return __generator(this,
                    function(l) {
                        switch (l.label) {
                            case 0:
                                return r = {
                                        photo: FBInstant.player.getPhoto(),
                                        playerId: FBInstant.player.getID(),
                                        name: FBInstant.player.getName(),
                                        score: o
                                    },
                                    i = {
                                        level: e,
                                        senderId: r.playerId,
                                        opponents: [r]
                                    },
                                    a = "My score is " + o + "s! Can you do better?",
                                    console.log("r image"),
                                    s = new ShareImage, [4, t(s.InitShareImage1(e, r.photo, o))];
                            case 1:
                                return n = l.sent(),
                                    console.log("r done"),
                                    i.opponents.forEach(function(e) {
                                        delete e.photo,
                                            delete e.name
                                    }), [4, platform.share({
                                        img: n,
                                        text: "[Level " + e + "] " + a,
                                        cta: "CHALLENGE",
                                        data: Object.assign({
                                            type: "challenge"
                                        }, {
                                            challenge_info: i
                                        })
                                    })];
                            case 2:
                                return h = l.sent(), [2, h]
                        }
                    })
            })
    }
    e.testl = s,
        e.challengePost = h,
        e.sendLeadboardUpdate = l,
        e.sendMyPhotoUpdate = c,
        e.sendMyPhoto = g,
        e.sendGenericUpdate = u,
        e.challengeShare = p
}(ShareHelper || (ShareHelper = {})),
egret.Bitmap.prototype.pos = function(e, t, o, r) {
    this.x = e,
        this.y = t,
        this.width = o,
        this.height = r,
        this.anchorOffsetX = o / 2,
        this.anchorOffsetY = r / 2
};
var ShareImage = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.UserName = [],
            t.UserID = [],
            t.UserImage = [],
            t.UserScore = [],
            t.x = 20,
            t.y = 500,
            t
    }
    return __extends(t, e),
        t.prototype.InitShareRank = function() {
            var e = this;
            this.Connect = new GameConnect;
            var t = [],
                o = [],
                r = [],
                i = [],
                a = [],
                s = this.Connect.GetMyID();
            t = this.Connect.GetUserName(1),
                o = this.Connect.GetUserImage(1),
                r = this.Connect.GetUserScore(1),
                a = this.Connect.GetUserSkin(1),
                i = this.Connect.GetUserID(1),
                this.NumReady = t.length,
                this.NumReady > 6 && (this.NumReady = 6),
                this.NumReadyNow = 0;
            var n = new egret.DisplayObjectContainer,
                h = new egret.ScrollView,
                l = [],
                c = [];
            this.Connect = new GameConnect;
            var g = new egret.Bitmap(RES.getRes("gamebg1_png"));
            this.addChild(g),
                g.pos(320, 568, 640, 1136);
            var u = new egret.Bitmap(RES.getRes("interbg_png"));
            this.addChild(u),
                u.pos(320, 568, 640, 1136),
                u.alpha = .5,
                l[0] = new egret.Bitmap(RES.getRes("shoplight_png")),
                l[1] = new egret.Bitmap,
                l[2] = new egret.Bitmap(RES.getRes("rankview_png")),
                l[3] = new egret.Bitmap(RES.getRes("rankbtn1_png"));
            for (var p = 0; 4 > p; p++) this.addChild(l[p]);
            l[0].pos(320, 160, 340, 340),
                l[1].pos(320, 160, 164, 164),
                l[2].pos(320, 160, 270, 270),
                l[3].pos(320, 360, 600, 64);
            var m = new egret.TextField;
            this.addChild(m);
            for (var d, f, f, y, I, _, S, v = function(h) {
                        d = new egret.Bitmap(RES.getRes("rankbg" + (h % 2 + 2) + "_png")),
                            n.addChild(d),
                            d.pos(320, 84 * h, 510, 84),
                            0 == h && (RES.getResByUrl(o[0],
                                function(t) {
                                    var o = new egret.Shape;
                                    e.addChild(o),
                                        o.graphics.beginFill(16777215),
                                        o.graphics.drawCircle(320, 156, 82),
                                        o.graphics.endFill(),
                                        l[1].texture = t,
                                        l[1].mask = o,
                                        e.NumReadyNow++,
                                        e.NumReadyNow - 1 >= e.NumReady && (console.log("准备好绘图了"), e.dispatchEventWith("ready_2_draw"))
                                },
                                R, RES.ResourceItem.TYPE_IMAGE), m.x = 320, m.y = 268, m.text = t[0].substring(0, 8), m.size = 26, m.bold = !0, m.textColor = 16777215, m.anchorOffsetX = m.width / 2, m.anchorOffsetY = m.height / 2);
                        var g = new egret.Bitmap;
                        n.addChild(g),
                            g.pos(110, -2 + 84 * h, 57, 57),
                            RES.getResByUrl(o[h],
                                function(t) {
                                    g.texture = t,
                                        e.NumReadyNow++,
                                        e.NumReadyNow - 1 >= e.NumReady && (console.log("准备好绘图了"), e.dispatchEventWith("ready_2_draw"))
                                },
                                R, RES.ResourceItem.TYPE_IMAGE),
                            3 > h ? (f = new egret.Bitmap(RES.getRes("rankview" + (h + 1) + "_png")), n.addChild(f), f.pos(117, 84 * h, 76, 67)) : (f = new egret.Bitmap(RES.getRes("rankview4_png")), n.addChild(f), f.pos(117, 84 * h, 76, 67), y = new egret.TextField, n.addChild(y), y.x = 139, y.y = 84 * h + 19, y.text = h + 1 + "", y.size = 20, y.textColor = 0, y.anchorOffsetX = y.width / 2, y.anchorOffsetY = y.height / 2),
                            I = a[h],
                            (1 > I || I > 26) && (I = Math.randInt(1, 26)),
                            _ = new egret.Bitmap(RES.getRes("hero" + I + "_png")),
                            n.addChild(_),
                            _.pos(200, 84 * h, .6 * _.width, .6 * _.height),
                            _.rotation = 45,
                            S = new egret.TextField,
                            n.addChild(S),
                            S.x = 240,
                            S.y = 84 * h,
                            S.size = 24,
                            i[h] == s ? S.textColor = 16724071 : S.textColor = 16777215,
                            S.text = "" + t[h],
                            S.width > 160 && (S.width = 160),
                            S.wordWrap = !0,
                            S.anchorOffsetY = S.height / 2,
                            c[h] = new egret.TextField,
                            n.addChild(c[h]),
                            c[h].x = 570,
                            c[h].y = 84 * h,
                            c[h].size = 30,
                            i[h] == s ? c[h].textColor = 16724071 : c[h].textColor = 16777215,
                            c[h].text = r[h] + "",
                            c[h].anchorOffsetX = c[h].width,
                            c[h].anchorOffsetY = c[h].height / 2
                    },
                    R = this, p = 0; p < this.NumReady; p++) v(p);
            return n.x = 0,
                n.y = 40,
                n.width = 640,
                n.height = 84 * t.length,
                n.touchEnabled = !0,
                h.x = 0,
                h.y = 400,
                h.width = 640,
                h.height = 600,
                h.setContent(n),
                this.addChild(h),
                this
        },
        t.prototype.InitShareCommon = function(e, t) {
            this.NumReady = 1,
                this.NumReadyNow = 0;
            var o = new egret.Bitmap(RES.getRes(e));
            return this.addChild(o),
                o.pos(300, 157, 600, 314),
                this.CreateImageHead2(80, 80, t),
                this
        },
        t.prototype.InitShareImage1 = function(e, t, o) {
            return this.NumReady = 1,
                this.NumReadyNow = 0,
                this.CreateImageBg("share_challenge_bg1_png", e, 1),
                this.CreateImageHead(300, 100, t, 1, 0),
                this.CreateLabelScore(25, 150, o, 1),
                this
        },
        t.prototype.InitShareImage2 = function(e, t, o) {
            return this.NumReady = 2,
                this.NumReadyNow = 0,
                console.log("shareimgphoto:" + t),
                console.log("shareimgscore:" + o),
                this.CreateImageBg("share_challenge_bg2_png", e, 2),
                o[0] <= o[1] ? this.CreateImageKing(135, 167, 1) : this.CreateImageKing(465, 167, 2),
                this.CreateLabelScore(135, 280, o[0], 2),
                this.CreateLabelScore(465, 280, o[1], 2),
                this.CreateImageHead(135, 167, t[0], 1, 0),
                this.CreateImageHead(465, 167, t[1], 1, 0),
                this
        },
        t.prototype.InitShareImage = function(e, t, o) {
            var r = o.length;
            r > 6 && (r = 6),
                this.NumIndex = t,
                this.NumReady = r,
                this.NumReadyNow = 0;
            var i = o.map(function(e) {
                    return e.name
                }),
                a = o.map(function(e) {
                    return e.photo
                }),
                s = o.map(function(e) {
                    return e.score
                });
            return this.CreateImageBg("share_challenge_bg3_png", e, 3),
                3 == r ? (this.CreateImageKing(300, 140, 2), this.CreateLabelScore(120, 280, s[1], 3), this.CreateLabelScore(300, 280, s[0], 3), this.CreateLabelScore(480, 280, s[2], 3), this.CreateLabelName(120, 238, i[1], 1), this.CreateLabelName(300, 238, i[0], 0), this.CreateLabelName(480, 238, i[2], 2), this.CreateImageHead(120, 140, a[1], 3, 2), this.CreateImageHead(300, 140, a[0], 2, 1), this.CreateImageHead(480, 140, a[2], 3, 3)) : 4 == r ? (this.CreateImageKing(90, 140, 2), this.CreateLabelScore(90, 280, s[0], 3), this.CreateLabelScore(230, 280, s[1], 3), this.CreateLabelScore(370, 280, s[2], 3), this.CreateLabelScore(510, 280, s[3], 3), this.CreateLabelName(90, 238, i[0], 0), this.CreateLabelName(230, 238, i[1], 1), this.CreateLabelName(370, 238, i[2], 2), this.CreateLabelName(510, 238, i[3], 3), this.CreateImageHead(90, 140, a[0], 2, 1), this.CreateImageHead(230, 140, a[1], 3, 2), this.CreateImageHead(370, 140, a[2], 3, 3), this.CreateImageHead(510, 140, a[3], 3, 4)) : 5 == r ? (this.CreateImageKing(80, 140, 2), this.CreateLabelScore(80, 280, s[0], 3), this.CreateLabelScore(340, 90, s[1], 3), this.CreateLabelScore(540, 90, s[2], 3), this.CreateLabelScore(340, 220, s[3], 3), this.CreateLabelScore(540, 220, s[4], 3), this.CreateLabelName(80, 238, i[0], 0), this.CreateLabelName(260, 155, i[1], 1), this.CreateLabelName(440, 155, i[2], 2), this.CreateLabelName(260, 285, i[3], 3), this.CreateLabelName(440, 285, i[4], 4), this.CreateImageHead(80, 140, a[0], 2, 1), this.CreateImageHead(260, 90, a[1], 3, 2), this.CreateImageHead(440, 90, a[2], 3, 3), this.CreateImageHead(260, 220, a[3], 3, 4), this.CreateImageHead(440, 220, a[4], 3, 5)) : (this.CreateImageKing(260, 90, 3), this.CreateLabelScore(160, 90, s[1], 3), this.CreateLabelScore(340, 90, s[0], 3), this.CreateLabelScore(520, 90, s[2], 3), this.CreateLabelScore(160, 220, s[3], 3), this.CreateLabelScore(340, 220, s[4], 3), this.CreateLabelScore(520, 220, s[5], 3), this.CreateLabelName(80, 150, i[1], 1), this.CreateLabelName(260, 150, i[0], 0), this.CreateLabelName(440, 150, i[2], 2), this.CreateLabelName(80, 280, i[3], 3), this.CreateLabelName(260, 280, i[4], 4), this.CreateLabelName(440, 280, i[5], 5), this.CreateImageHead(80, 90, a[1], 3, 2), this.CreateImageHead(260, 90, a[0], 3, 1), this.CreateImageHead(440, 90, a[2], 3, 3), this.CreateImageHead(80, 220, a[3], 3, 4), this.CreateImageHead(260, 220, a[4], 3, 5), this.CreateImageHead(440, 220, a[5], 3, 6)),
                this
        },
        t.prototype.CreateImageBg = function(e, t, o) {
            var r = new egret.Bitmap(RES.getRes(e));
            this.addChild(r),
                r.pos(300, 157, 600, 314);
            var i = new egret.TextField;
            this.addChild(i),
                i.textColor = 16767243,
                i.size = 35,
                i.bold = !0,
                i.text = "LEVEL " + t,
                1 == o ? (i.x = 25, i.y = 50, i.anchorOffsetX = 0) : 2 == o ? (i.x = 300, i.y = 50, i.size = 40, i.anchorOffsetX = i.width / 2) : 3 == o && (i.x = 580, i.y = 28, i.size = 32, i.anchorOffsetX = i.width),
                i.anchorOffsetY = i.height / 2
        },
        t.prototype.CreateImageKing = function(e, t, o) {
            var r = new egret.Bitmap(RES.getRes("share_crown_png"));
            this.addChild(r),
                t -= 1 == o ? 105 : 2 == o ? 85 : 55,
                r.pos(e, t, 66, 58)
        },
        t.prototype.CreateImageHead = function(e, t, o, r, i) {
            var a = this,
                s = 150;
            2 == r ? s = 104 : 3 == r && (s = 72);
            var n = new egret.Bitmap;
            this.addChild(n),
                n.pos(e, t, s, s),
                RES.getResByUrl(o,
                    function(e) {
                        n.texture = e;
                        var t = new egret.Shape;
                        t.graphics.beginFill(255),
                            t.graphics.drawCircle(n.x, n.y, s / 2),
                            t.graphics.endFill(),
                            a.addChild(t),
                            n.mask = t,
                            a.NumReadyNow++,
                            a.NumReadyNow >= a.NumReady && (console.log("准备好绘图了"), a.dispatchEventWith("ready_2_draw"))
                    },
                    this, RES.ResourceItem.TYPE_IMAGE);
            var h = new egret.Bitmap(RES.getRes("share_challenge_head" + r + "_png"));
            if (this.addChild(h), h.pos(e, t, h.width, h.height), r > 1) {
                var l = new egret.TextField;
                this.addChild(l),
                    l.x = e,
                    2 == r ? l.y = t + 53 : l.y = t + 30,
                    l.bold = !0,
                    l.text = i + "",
                    l.size = 22,
                    l.anchorOffsetX = l.width / 2,
                    l.anchorOffsetY = l.height / 2
            }
        },
        t.prototype.CreateImageHead2 = function(e, t, o) {
            var r = this,
                i = 100,
                a = new egret.Bitmap;
            this.addChild(a),
                a.pos(e, t, i, i),
                RES.getResByUrl(o,
                    function(e) {
                        a.texture = e;
                        var t = new egret.Shape;
                        t.graphics.beginFill(255),
                            t.graphics.drawCircle(a.x, a.y, i / 2),
                            t.graphics.endFill(),
                            r.addChild(t),
                            a.mask = t,
                            r.NumReadyNow++,
                            r.NumReadyNow >= r.NumReady && (console.log("准备好绘图了"), r.dispatchEventWith("ready_2_draw"))
                    },
                    this, RES.ResourceItem.TYPE_IMAGE);
            var s = new egret.Bitmap(RES.getRes("sharehead_png"));
            this.addChild(s),
                s.pos(e, t, 118, 118)
        },
        t.prototype.CreateLabelScore = function(e, t, o, r) {
            var i = new egret.TextField;
            this.addChild(i),
                i.x = e,
                i.y = t,
                i.bold = !0,
                i.text = o + " s",
                1 == r ? (i.size = 40, i.anchorOffsetX = 0) : 2 == r ? (i.size = 36, i.anchorOffsetX = i.width / 2) : (i.size = 24, i.anchorOffsetX = i.width / 2),
                i.anchorOffsetY = i.height / 2
        },
        t.prototype.CreateLabelName = function(e, t, o, r) {
            var i = new egret.TextField;
            this.addChild(i),
                i.x = e,
                i.y = t,
                i.text = o,
                i.size = 17,
                i.width > 130 && (i.width = 130),
                i.wordWrap = !0,
                r == this.NumIndex && (i.textColor = 16767243),
                i.anchorOffsetX = i.width / 2,
                i.anchorOffsetY = i.height / 2
        },
        t
}(egret.Sprite);
__reflect(ShareImage.prototype, "ShareImage");