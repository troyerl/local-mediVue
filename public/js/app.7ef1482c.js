(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0061":function(e,t,s){"use strict";var n=s("404c"),a=s.n(n);a.a},1275:function(e,t,s){},"404c":function(e,t,s){},"55de":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],i={name:"App"},r=i,l=s("2877"),c=Object(l["a"])(r,a,o,!1,null,null,null),u=c.exports,d=(s("f9e3"),s("2dd8"),s("5f5b")),m=s("b1e0"),p=s("e0ec"),f=s.n(p),g=(s("96cf"),s("1da1")),h=s("2f62"),y=s("5530"),v=s("8785"),b=s("9530"),C=s.n(b);function P(){var e=Object(v["a"])(["\n    query($playlistId: ID!) {\n      getPlaylistById(playlistId: $playlistId) {\n        videos {\n          url\n        }\n      }\n    }\n  "]);return P=function(){return e},e}function _(){var e=Object(v["a"])(["\n    query($hospitalId: ID!) {\n      getHospitalById(hospitalId: $hospitalId) {\n        playlists {\n          id\n          name\n          timesPlayed\n        }\n      }\n    }\n  "]);return _=function(){return e},e}var w={getPlaylists:C()(_()),getPlaylistById:C()(P())};function x(){var e=Object(v["a"])(["\n    mutation($mediVueId: ID!, $startTime: Date!, $endTime: Date!, $playlistId: ID!, $procedureNum: Int!, $procedureSelect: String!, $selectedLanugage: String!, $totalProcedures: Int!, $hospitalId: ID!) {\n      createUsageReport(mediVueId: $mediVueId, startTime: $startTime, endTime: $endTime, playlistId: $playlistId, procedureNum: $procedureNum, procedureSelect: $procedureSelect, selectedLanugage: $selectedLanugage, totalProcedures: $totalProcedures, hospitalId: $hospitalId) {\n        id\n      }\n    }\n  "]);return x=function(){return e},e}var S={createUsageReport:C()(x())},E=Object(y["a"])(Object(y["a"])({},w),S),I=s("74ca"),O=s("478e"),T=s("2bf2"),M={PATIENT_PLAYER:"patient",ADMIN_PLAYER:"admin",BOTH_PLAYERS:"both",SERVER_URL:"http://10.247.102.191",HOSPITAL_ID:"5fd258859024ec6c3407e225",MEDIVUE_ID:"5fa05f94bffc8119c82e02bf"},V=Object(O["a"])({uri:M.SERVER_URL+"/graphql"}),j=new T["a"],k=new I["a"]({link:V,cache:j,defaultOptions:{query:{fetchPolicy:"no-cache"}}}),$=k,N=void 0;n["default"].use(h["a"]);var L=new h["a"].Store({state:{userInfo:null,message:null,startTime:null,showVideoPlayer:!0,playing:!1,playlists:null,playNextVideo:!1,playPreviousVideo:!1,userType:null,defaultMessages:[{message:"You are half-way done",icon:"hourglass-split"},{message:"Ten minutes remaining",icon:"hourglass-top"},{message:"Five minutes remaining",icon:"hourglass-bottom"},{message:"About 2 minutes remaining",icon:"hourglass"},{message:"Hold your breath",icon:"emoji-neutral"},{message:"You may breathe normally now",icon:"emoji-laughing"},{message:"You are doing great!",icon:"hand-thumbs-up"},{message:"Your parents are proud of you!",icon:"emoji-smile"},{message:"Please do not move while we come into the room",icon:"exclamation-diamond"}]},mutations:{SOCKET_SEND_MESSAGE:function(e,t){e.message=t},SOCKET_TOGGLE_PLAYER:function(e,t){e.playing=t},togglePlayerView:function(e){e.showVideoPlayer=!e.showVideoPlayer},SOCKET_END_SESSION:function(e){e.playing=!1},SOCKET_UPDATE_USER:function(e,t){e.userInfo=t},SOCKET_PLAY_NEXT_VIDEO:function(e,t){e.playNextVideo=t,e.playing=!0},SOCKET_PLAY_PREVIOUS_VIDEO:function(e,t){e.playPreviousVideo=t,e.playing=!0},updateDefaultMessage:function(e,t){console.log(t),e.defaultMessages.push(t)},UPDATE_PLAYLIST:function(e,t){e.playlists=t.playlists},SET_START_TIME:function(e,t){e.startTime=t.startTime},RESET_PLAY_VIDEOS:function(e){e.playNextVideo=!1,e.playPreviousVideo=!1},SET_USER_TYPE:function(e,t){e.userType=t.userType}},actions:{updateUserInfo:function(e){N.$socket.emit("UPDATE_USER",e)},addCustomMessage:function(e,t){var s=e.commit;s("updateDefaultMessage",t)},getPlaylists:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.next=3,$.query({query:E.getPlaylists,variables:{hospitalId:M.HOSPITAL_ID}});case 3:n=t.sent,a=Object.assign({},n.data.getHospitalById),a[0].playlists.sort((function(e,t){return t.timesPlayed-e.timesPlayed})),s("UPDATE_PLAYLIST",{playlists:a[0].playlists});case 7:case"end":return t.stop()}}),t)})))()},setStartTime:function(e){var t=e.commit;t("SET_START_TIME",{startTime:new Date})},endSession:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.state,n={mediVueId:M.MEDIVUE_ID,startTime:s.startTime.toISOString(),endTime:(new Date).toISOString(),playlistId:s.userInfo.playlist.id,procedureNum:parseInt(s.userInfo.procedureNum),procedureSelect:s.userInfo.procedureSelect,selectedLanugage:s.userInfo.selectedLanugage,totalProcedures:parseInt(s.userInfo.totalProcedures),hospitalId:M.HOSPITAL_ID},t.next=4,$.mutate({mutation:E.createUsageReport,variables:n});case 4:case"end":return t.stop()}}),t)})))()},resetVideoPlaying:function(e){var t=e.commit;t("RESET_PLAY_VIDEOS")},setUserType:function(e,t){var s=e.commit;s("SET_USER_TYPE",t)}}}),A=s("5132"),D=s.n(A),R=s("3048"),U=s("8c4f"),Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"procedure-info-background"},[e.showMainScreen?s("div",{staticClass:"procedure-info"},[s("b-card",{staticClass:"shadow-sm w-75"},[s("p",{staticClass:"mb-2 text-center font-weight-bold mt-n1"},[e._v("Procedure Type")]),s("div",{staticClass:"d-flex mb-2 "},e._l(e.procedureTypes,(function(t,n){return s("div",{key:t.text,class:(n!==e.procedureTypes.length-1?"border-right ":"")+"procedure-div d-flex flex-column justify-content-center align-items-center",on:{click:function(s){e.procedureSelect=t.id}}},[s("div",{class:(e.procedureSelect===t.id?"clicked":"")+" test1"},[s("img",{staticClass:"procedure-icon svg",attrs:{src:"assets/svg/"+(e.procedureSelect===t.id?"clicked-":"")+t.svg}})]),s("p",{staticClass:"mb-0 text-center"},[e._v(e._s(t.text))])])})),0)]),s("div",{staticClass:"w-100 d-flex justify-content-center mt-3"},[s("div",{staticClass:"w-50 text-center border-right d-flex flex-column justify-content-center align-items-center"},[s("b-card",{staticClass:"w-75 shadow-sm"},[s("p",{staticClass:"mb-1 text-center font-weight-bold"},[e._v("Procedure Number")]),s("div",{staticClass:"d-flex justify-content-center align-items-center align-content-center text-center"},[s("div",{staticClass:"procedure-input d-flex flex-column"},[s("div",{staticClass:"d-flex justify-content-around"},[s("button",{staticClass:"testtest mb-1",on:{click:function(t){return e.incrementProdueceNum(1)}}},[e._v("+1")]),s("p",{staticClass:"mb-0"},[e._v("|")]),s("button",{staticClass:"testtest mb-1",on:{click:function(t){return e.incrementProdueceNum(5)}}},[e._v("+5")])]),s("b-form-input",{staticClass:"text-center",attrs:{type:"number",required:"",placeholder:"1",min:"0"},model:{value:e.procedureNum,callback:function(t){e.procedureNum=t},expression:"procedureNum"}}),s("button",{staticClass:"testtest mb-0 mt-1",on:{click:function(t){return e.incrementProdueceNum(-1)}}},[e._v("-1")])],1),s("p",{staticClass:"mx-2 pt-3"},[e._v("out of")]),s("div",{staticClass:"procedure-input d-flex flex-column"},[s("div",{staticClass:"d-flex justify-content-around"},[s("button",{staticClass:"testtest mb-1",on:{click:function(t){return e.incrementTotalNum(1)}}},[e._v("+1")]),s("p",{staticClass:"mb-0"},[e._v("|")]),s("button",{staticClass:"testtest mb-1",on:{click:function(t){return e.incrementTotalNum(5)}}},[e._v("+5")])]),s("b-form-input",{staticClass:"text-center",attrs:{type:"number",required:"",placeholder:"19",min:"0"},model:{value:e.totalProcedures,callback:function(t){e.totalProcedures=t},expression:"totalProcedures"}}),s("button",{staticClass:"testtest mb-0 mt-1",on:{click:function(t){return e.incrementTotalNum(-1)}}},[e._v("-1")])],1)])])],1),s("div",{staticClass:"w-50 d-flex flex-column justify-content-center align-items-center"},[s("b-card",{staticClass:"w-50 shadow-sm"},[s("p",{staticClass:"mb-2 text-center font-weight-bold"},[e._v("Patient Language")]),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("span",{staticClass:"prev",on:{click:function(t){return e.plusSlides(-1)}}},[e._v("❮")]),s("div",{staticClass:"d-flex flex-column align-items-center"},[s("img",{staticClass:"language-icon",attrs:{src:"assets/svg/lang/"+e.languageOptions[e.selectedLanugage].svg,alt:e.languageOptions[e.selectedLanugage].text}}),s("p",{staticClass:"mb-0"},[e._v(e._s(e.languageOptions[e.selectedLanugage].text))])]),s("span",{staticClass:"next",on:{click:function(t){return e.plusSlides(1)}}},[e._v("❯")])])])],1)]),s("b-card",{staticClass:"mt-3 shadow-sm"},[s("p",{staticClass:"mb-2 text-center font-weight-bold"},[e._v("Select Playlist")]),s("b-button-group",{staticClass:"mb-1 mx-3"},[e._l(e.getPlaylists,(function(t){return s("b-button",{key:t.id,attrs:{variant:e.playlistSelect===t.id?"dark":"outline-dark"},on:{click:function(s){e.playlistSelect=t.id}}},[e._v(e._s(t.name))])})),e.showOtherButton?s("b-button",{attrs:{variant:"outline-dark"},on:{click:function(t){e.showMainScreen=!1}}},[e._v("Other")]):e._e()],2)],1)],1):s("div",{staticClass:"other-playlists"},[s("b-icon-arrow-left-circle-fill",{staticClass:"mt-3 ml-3",attrs:{width:"50",height:"50"},on:{click:function(t){e.showMainScreen=!0}}}),s("div",{staticClass:"w-100 d-flex justify-content-center align-items-center"},[s("div",{staticClass:"w-75 d-flex justify-content-center flex-wrap"},e._l(e.playlists,(function(t){return s("b-button",{key:t.id,staticClass:"mx-2 border-dark",attrs:{variant:e.playlistSelect===t.id?"dark":"outline-dark bg-white"},on:{click:function(s){e.playlistSelect=t.id}}},[e._v(e._s(t.name))])})),1)])],1),s("div",{staticClass:"procedure-controls"},[s("div",{staticClass:"control-buttons"}),s("div",{staticClass:"control-buttons center-control"},[s("b-button",{staticClass:"start-session",attrs:{type:"button"},on:{click:e.onSubmit}},[s("b-icon-tv"),e._v(" Start Session")],1)],1),s("div",{staticClass:"control-buttons"})]),s("b-modal",{attrs:{"hide-footer":"","hide-header":"",centered:""},model:{value:e.showError,callback:function(t){e.showError=t},expression:"showError"}},[s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("h2",{staticClass:"text-red"},[e._v("Oops!")]),s("span",[e._v(e._s(e.error))]),s("b-button",{staticClass:"mt-3 mb-2",staticStyle:{background:"#981e32",color:"white",width:"40%"},attrs:{variant:"#981e32"},on:{click:function(t){e.showError=!1}}},[s("b-icon-x"),e._v("Close")],1)],1)])],1)},B=[],q=(s("4de4"),s("7db0"),s("2ef0")),G={name:"ProcedureInfo",data:function(){return{showMainScreen:!0,procedureSelect:null,procedureTypes:[{id:"head",svg:"head.svg",text:"Head"},{id:"chest",svg:"chest.svg",text:"Chest"},{id:"abdomen",svg:"abdomen.svg",text:"Abdomen"},{id:"extremeties",svg:"extremeties.svg",text:"Extremeties"},{id:"other",svg:"other.svg",text:"Other"}],playlistSelect:null,procedureNum:1,totalProcedures:19,languageOptions:[{text:"English",svg:"english.svg",value:"en"},{text:"Spanish",svg:"spanish.svg",value:"es"},{text:"Burmese",svg:"burmese.svg",value:"my"},{text:"Arabic",svg:"arabic.svg",value:"ar"}],selectedLanugage:0,showError:!1,error:null}},computed:Object(y["a"])(Object(y["a"])({},Object(h["b"])(["playlists"])),{},{getPlaylists:function(){return this.playlists?this.playlists.filter((function(e,t){return t<4})):[]},showOtherButton:function(){return!!this.playlists&&this.playlists.length>4}}),mounted:function(){this.$store.dispatch("getPlaylists"),this.$store.dispatch("setUserType",{userType:M.ADMIN_PLAYER})},methods:{incrementTotalNum:function(e){this.totalProcedures+e>0&&(this.totalProcedures+=e)},incrementProdueceNum:function(e){this.procedureNum+e>0&&(this.procedureNum+=e)},onSubmit:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.error=null,!e.procedureSelect||!e.playlistSelect){t.next=12;break}return e.getVideos(e.playlistSelect),s=q.find(e.playlists,{id:e.playlistSelect}),t.next=6,e.getVideos(e.playlistSelect);case 6:s.videos=t.sent,e.$socket.emit("UPDATE_USER",{procedureSelect:e.procedureSelect,procedureNum:e.procedureNum,totalProcedures:e.totalProcedures,selectedLanugage:e.languageOptions[e.selectedLanugage].value,playlist:s}),e.$store.dispatch("setStartTime"),e.$router.push({name:"missionControls"}),t.next=14;break;case 12:e.error="Missing required info to begin",e.showError=!0;case 14:case"end":return t.stop()}}),t)})))()},getVideos:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.query({query:E.getPlaylistById,variables:{playlistId:e}});case 2:return s=t.sent,n=Object.assign({},s.data.getPlaylistById),console.log(n),t.abrupt("return",n.videos);case 6:case"end":return t.stop()}}),t)})))()},plusSlides:function(e){this.selectedLanugage=this.selectedLanugage+e,this.selectedLanugage<0?this.selectedLanugage=this.languageOptions.length-1:this.selectedLanugage>this.languageOptions.length-1&&(this.selectedLanugage=0)}}},H=G,K=(s("8576"),Object(l["a"])(H,Y,B,!1,null,null,null)),z=K.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.showVideoPlayer,expression:"showVideoPlayer"},{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"end-session-button",attrs:{variant:"danger"}},[e._v("End Session")]),s("b-modal",{staticClass:"text-center",attrs:{id:"modal-1","hide-footer":"","hide-header":"",centered:""}},[s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("p",{staticClass:"my-4"},[e._v("Are you sure you want to end the session?")]),s("div",{staticClass:"d-flex justify-content-center w-100"},[s("b-button",{staticClass:"w-25 cancel-button mr-3",on:{click:function(t){return e.$bvModal.hide("modal-1")}}},[e._v("Cancel")]),s("b-button",{staticClass:"w-25",attrs:{variant:"danger"},on:{click:e.endSession}},[e._v("End")])],1)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showVideoPlayer,expression:"showVideoPlayer"}],staticClass:"video-container"},[s("VideoPlayer",{attrs:{mutePlayer:!0}})],1),e.showVideoPlayer?e._e():s("ControlMessages"),e.message?s("div",{staticClass:"d-flex w-100 align-items-center justify-content-center",staticStyle:{position:"fixed",bottom:"5rem"}},[s("div",{staticClass:"message d-flex align-content-center justify-content-center"},[s("p",{staticClass:"text-center"},[e._v(e._s(e.message))])])]):e._e(),s("BottomNavbar",{attrs:{toggleCustomMessageModal:e.toggleCustomMessageModal}}),s("CustomMessage",{attrs:{showCustomMessageModal:e.showCustomMessageModal,toggleCustomMessageModal:e.toggleCustomMessageModal}})],1)},J=[],X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fullscreen"},[s("youtube",{ref:"youtube",attrs:{height:"100%","player-vars":e.playerVars,width:"100%"}})],1)},Q=[],W=(s("d81d"),{name:"videoPlayer",props:["mutePlayer"],data:function(){return{firstTimePlayed:!0,videos:[],playerVars:{modestbranding:1,showinfo:0,autoplay:0,rel:0,constrols:0,disablekb:1,muted:!0}}},computed:Object(y["a"])(Object(y["a"])({},Object(h["b"])(["playNextVideo","playPreviousVideo","playing","userInfo"])),{},{player:function(){return this.$refs.youtube.player}}),watch:{userInfo:function(e){e&&this.initialize(e.playlist.videos)},playNextVideo:function(e){e&&(this.playNext(),this.resetVideoPlayingValues())},playPreviousVideo:function(e){e&&(this.playPrevious(),this.resetVideoPlayingValues())},playing:function(e){e?this.playVideo():this.stopVideo()}},mounted:function(){this.mutePlayer&&this.player.mute()},methods:{resetVideoPlayingValues:function(){this.$store.dispatch("resetVideoPlaying")},playNext:function(){this.player.nextVideo()},playPrevious:function(){this.player.previousVideo()},initialize:function(e){var t=this;this.firstTimePlayed=!0,this.videos=e.map((function(e){return t.getId(e.url)})),this.player.cuePlaylist(this.videos)},playVideo:function(){this.firstTimePlayed&&(this.player.loadPlaylist(this.videos),this.player.setLoop(!0),this.firstTimePlayed=!1),this.player.playVideo()},stopVideo:function(){this.player.pauseVideo()},getId:function(e){return this.$youtube.getIdFromUrl(e)}}}),Z=W,ee=(s("fc4d"),Object(l["a"])(Z,X,Q,!1,null,"f61df920",null)),te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"control-messages"},[s("div",{staticClass:"test"},e._l(e.defaultMessages,(function(t){return s("b-card",{key:t.message,staticClass:"message-container",attrs:{"no-body":""}},[s("button",{staticClass:"button shadow d-flex flex-column justify-content-center align-items-center",on:{click:function(s){return e.setMessage(t.message)}}},[s("b-icon",{staticClass:"h3",attrs:{icon:t.icon}}),e._v(" "+e._s(t.message)+" ")],1)])})),1)])},ne=[],ae={name:"ControlMessages",computed:Object(y["a"])({},Object(h["b"])(["defaultMessages","userInfo"])),methods:{setMessage:function(e){var t=this;this.$socket.emit("SEND_MESSAGE",{text:e,language:this.userInfo.selectedLanugage}),this.$store.commit("togglePlayerView"),setTimeout((function(){t.$socket.emit("SEND_MESSAGE",null)}),15e3)}}},oe=ae,ie=(s("0061"),Object(l["a"])(oe,se,ne,!1,null,null,null)),re=ie.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-modal",{staticClass:"text-center",attrs:{id:"custom-message-modal","hide-footer":"","hide-header":"",centered:""},model:{value:e.showCustomMessageModal,callback:function(t){e.showCustomMessageModal=t},expression:"showCustomMessageModal"}},[s("b-form",{staticClass:"d-flex flex-column justify-content-center align-items-center",on:{submit:e.onAddMessage}},[s("div",{staticClass:"w-75 mb-3"},[s("h3",{staticClass:"text-center mb-3"},[e._v("Custom Message")]),s("b-form-input",{attrs:{id:"custom-message",placeholder:"Enter custom message",trim:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),s("b-form-text",{attrs:{id:"custom-message"}},[e._v("This message will be sent to the patient and added to your messages for this session")])],1),e.error?s("div",{staticClass:"text-center"},[s("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))])],1):e._e(),s("div",{staticClass:"d-flex justify-content-center w-100"},[s("b-button",{staticClass:"w-25 cancel-button mr-3",attrs:{type:"button"},on:{click:e.toggleCustomMessageModal}},[e._v("Cancel")]),s("b-button",{staticClass:"w-25",attrs:{type:"submit",variant:"danger"}},[e._v("Send")])],1)])],1)},ce=[],ue={name:"CustomMessage",props:["showCustomMessageModal","toggleCustomMessageModal"],data:function(){return{message:"",error:null}},computed:Object(y["a"])({},Object(h["b"])(["userInfo"])),methods:{onAddMessage:function(e){var t=this;e.preventDefault(),this.message?(this.$socket.emit("SEND_MESSAGE",{text:this.message,language:this.userInfo.selectedLanugage}),this.$store.commit("togglePlayerView"),this.$store.dispatch("addCustomMessage",{message:this.message,icon:"chat-dots"}),this.toggleCustomMessageModal(),this.message="",setTimeout((function(){t.$socket.emit("SEND_MESSAGE",null)}),15e3)):this.error="Custom message required to send to patient"}}},de=ue,me=Object(l["a"])(de,le,ce,!1,null,null,null),pe=me.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"controls"},[s("div",{staticClass:"control-buttons",on:{click:e.toggleShowPlayer}},[e.showVideoPlayer?e._e():s("b-icon-chevron-double-left",{staticClass:"mr-2 mt-1"}),e._v(e._s(e.showVideoPlayer?"":"Controls"))],1),s("div",{staticClass:"control-buttons center-control"},[e.showVideoPlayer?s("b-icon-skip-start-fill",{staticClass:"h1 mb-0 test-icon",on:{click:e.playPreviousVideo}}):e._e(),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center align-content-center",on:{click:e.centerControl}},[!e.playing&&e.showVideoPlayer?s("b-icon-play-fill",{staticClass:"h1 mb-0 test-icon"}):e.playing&&e.showVideoPlayer?s("b-icon-pause-fill",{staticClass:"h1 mb-0 test-icon"}):s("b-icon-chat-dots-fill",{staticClass:"mt-1"}),e._v(e._s(e.showVideoPlayer?null:"Custom Message")+" ")],1),e.showVideoPlayer?s("b-icon-skip-end-fill",{staticClass:"h1 mb-0 test-icon",on:{click:e.playNextVideo}}):e._e()],1),s("div",{staticClass:"control-buttons",on:{click:e.toggleShowPlayer}},[e._v(e._s(e.showVideoPlayer?"Messages":"")+" "),e.showVideoPlayer?s("b-icon-chevron-double-right",{staticClass:"ml-2 mt-1"}):e._e()],1)])},ge=[],he={name:"BottomNavbar",props:["toggleCustomMessageModal"],computed:Object(y["a"])(Object(y["a"])({},Object(h["b"])(["playing","showVideoPlayer"])),{},{playPauseText:function(){return this.playing?"Pause":"Play"}}),methods:{playNextVideo:function(){this.$socket.emit("PLAY_NEXT_VIDEO",!0)},playPreviousVideo:function(){this.$socket.emit("PLAY_PREVIOUS_VIDEO",!0)},centerControl:function(){this.showVideoPlayer?this.togglePlay():this.toggleCustomMessageModal()},togglePlay:function(){this.$socket.emit("TOGGLE_PLAYER",!this.playing)},toggleShowPlayer:function(){this.$store.commit("togglePlayerView")}}},ye=he,ve=(s("7843"),Object(l["a"])(ye,fe,ge,!1,null,null,null)),be=ve.exports,Ce={name:"MissionControls",components:{VideoPlayer:te,ControlMessages:re,CustomMessage:pe,BottomNavbar:be},data:function(){return{showCustomMessageModal:!1}},computed:Object(y["a"])({},Object(h["b"])(["message","showVideoPlayer"])),methods:{endSession:function(){var e=this;this.$store.dispatch("endSession").then((function(){e.$socket.emit("END_SESSION",null),e.$socket.emit("UPDATE_USER",null)})),this.$router.push({name:"procedureInfo"})},toggleCustomMessageModal:function(){this.showCustomMessageModal=!this.showCustomMessageModal}}},Pe=Ce,_e=(s("7500"),Object(l["a"])(Pe,F,J,!1,null,null,null)),we=_e.exports,xe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"videoPlayer-container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.userInfo,expression:"userInfo"}],staticClass:"w-100 h-100"},[s("videoPlayer",{attrs:{mutePlayer:!1}}),e.message?s("div",{staticClass:"d-flex w-100 align-items-center justify-content-center",staticStyle:{position:"fixed",bottom:"5rem"}},[s("div",{staticClass:"player-message d-flex align-content-center justify-content-center"},[s("p",{staticClass:"text-center"},[e._v(e._s(e.message))])])]):e._e()],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.userInfo,expression:"!userInfo"}],staticClass:"w-100 h-100 black-screen"})])},Se=[],Ee={name:"videoPlayerContainer",props:{mutePlayer:Boolean},components:{videoPlayer:te},mounted:function(){this.$store.dispatch("setUserType",{userType:M.PATIENT_PLAYER})},computed:Object(y["a"])({},Object(h["b"])(["message","userInfo"]))},Ie=Ee,Oe=(s("693c"),Object(l["a"])(Ie,xe,Se,!1,null,null,null)),Te=Oe.exports,Me={procedureInfo:"/",missionControls:"/mission-controls",videoPlayer:"/videoplayer"};n["default"].use(U["a"]);var Ve=[{path:Me.procedureInfo,name:"procedureInfo",component:z},{path:Me.missionControls,name:"missionControls",component:we},{path:Me.videoPlayer,name:"videoPlayerContainer",component:Te}],je=new U["a"]({routes:Ve}),ke=je;n["default"].use(d["a"]),n["default"].use(m["a"]),n["default"].use(f.a),n["default"].use(new D.a({debug:!1,connection:"http://localhost:5000/",vuex:{store:L,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),n["default"].config.productionTip=!1,n["default"].use(R["a"]);var $e=new R["a"]({defaultClient:$});new n["default"]({router:ke,store:L,apolloProvider:$e,render:function(e){return e(u)}}).$mount("#app")},"5f03":function(e,t,s){},"693c":function(e,t,s){"use strict";var n=s("5f03"),a=s.n(n);a.a},"6bae":function(e,t,s){},7500:function(e,t,s){"use strict";var n=s("55de"),a=s.n(n);a.a},7843:function(e,t,s){"use strict";var n=s("1275"),a=s.n(n);a.a},"7c0e":function(e,t,s){},8576:function(e,t,s){"use strict";var n=s("7c0e"),a=s.n(n);a.a},fc4d:function(e,t,s){"use strict";var n=s("6bae"),a=s.n(n);a.a}});
//# sourceMappingURL=app.7ef1482c.js.map