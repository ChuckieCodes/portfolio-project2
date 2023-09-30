;/*FB_PKG_DELIM*/

__d("IGDSStandardMegaphone",["IGDSBox.react","IGDSText.react","PolarisIGCoreBox","PolarisIGCoreMegaphoneHelper","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.render=function(){var a,b=d("PolarisIGCoreMegaphoneHelper").getRootBoxProps(this.props.position,this.props.color);return i.jsxs(c("PolarisIGCoreBox"),babelHelpers["extends"]({border:this.props.border},b,{shape:this.props.shape,width:(a=this.props.width)!=null?a:b.width,children:[this.props.onDismiss&&i.jsx(d("PolarisIGCoreMegaphoneHelper").IGCoreMegaphoneDismiss,{onClick:this.props.onDismiss}),i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"column",position:"relative",wrap:!1,children:[this.props.icon!=null&&i.jsx(c("IGDSBox.react"),{height:56,position:"relative",shape:"circle",width:56,children:this.props.icon}),i.jsxs(c("IGDSBox.react"),{direction:"column",marginTop:this.props.icon!=null?3:0,position:"relative",width:this.props.bodyWidth!=null?this.props.bodyWidth:288,children:[i.jsx(c("IGDSBox.react"),{display:"block",marginBottom:3,position:"relative",children:i.jsx(c("IGDSText.react").BodyEmphasized,{color:this.props.color==="dark"?"webAlwaysWhite":"primaryText",textAlign:"center",children:this.props.title})}),i.jsx(c("IGDSText.react").Body,{color:"secondaryText",textAlign:"center",children:this.props.body})]}),i.jsx(c("IGDSBox.react"),{direction:"column",marginStart:0,marginTop:0,position:"relative",width:288,children:this.props.children}),i.jsx(c("IGDSBox.react"),{marginTop:4,width:130,children:this.props.button})]})]}))};return b}(i.Component);a.defaultProps={border:!1,color:"primary",position:"top"};g["default"]=a}),98);
__d("PolarisNavigationDispatchers",["PolarisNavigationActions","PolarisReactRedux","polarisNavigationSelectors","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a,b){var e=d("PolarisReactRedux").useDispatch(),f=d("PolarisReactRedux").useSelector(d("polarisNavigationSelectors").getPageViewCount),g=c("usePolarisViewer")();i(function(){e(d("PolarisNavigationActions").incrementNewPageViewCount(g,a,b,f))},[e,b,a,f,g])}g.useIncrementNewPageViewCount=a}),98);
__d("PolarisHashtagLogger",["PolarisDeviceOrMachineId","PolarisLocales","PolarisLogger","PolarisPigeonLogger","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.clickPoint,e=a.containerModule,f=a.entityId,g=a.eventName,h=a.followStatus;a=a.position;b={click_point:b,containermodule:e,device_model:d("PolarisUA").getBrowserString(),device_os:"Web",deviceid:d("PolarisDeviceOrMachineId").getDeviceOrMachineId(),entity_id:f,entity_type:"hashtag",follow_status:h,hashtag_id:f,position:a,primary_locale:c("PolarisLocales").locale};d("PolarisLogger").logPigeonEvent(d("PolarisPigeonLogger").createEvent(g,d("PolarisLogger").getExtra(b),{module:e}))}g.logHashtagAction=a}),98);
__d("PolarisTagActions",["PolarisHashtagLogger","PolarisIGWebStorage","PolarisPostModel","PolarisSharedAPI","PolarisUserModel","nullthrows","polarisGetHashtagMediaFromNativeHashtag","polarisNormalizeMediaDicts"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return{tagName:a,type:"CONTENT_ADVISORY_ACKNOWLEDGED",userId:b}}function b(a){return function(b,e){var f=c("nullthrows")(a.hashtag);return b({contentAdvisoryIsAcknowledged:d("PolarisIGWebStorage").isContentAdvisoryAcknowledged(c("nullthrows")(f.name),(b=e())==null?void 0:(e=b.users)==null?void 0:e.viewerId),tagData:f,type:"TAG_PAGE_LOADED"})}}function e(a){return function(b,e){var f=a.recent,g=a.top,h=d("polarisNormalizeMediaDicts").normalizeMediaDicts(d("polarisGetHashtagMediaFromNativeHashtag").getMediaFromSections(g.sections)).entities,i=g!=null&&g.sections!=null&&g.sections.length>0?h.mediaDicts:{},j=d("polarisNormalizeMediaDicts").normalizeMediaDicts(d("polarisGetHashtagMediaFromNativeHashtag").getMediaFromSections(f.sections)).entities,k=f!=null&&f.sections!=null&&f.sections.length>0?j.mediaDicts:{};g=[].concat(Object.keys(i).map(function(a){return c("PolarisPostModel").fromNativeResponse(i[a]).toReduxStore()}),Object.keys(k).map(function(a){return c("PolarisPostModel").fromNativeResponse(k[a]).toReduxStore()}));f=[].concat(Object.keys(h.userDicts||{}).map(function(a){return c("PolarisUserModel").fromNativeResponse(h.userDicts[a]).toReduxStore()}),Object.keys(j.userDicts||{}).map(function(a){return c("PolarisUserModel").fromNativeResponse(j.userDicts[a]).toReduxStore()}));return b({contentAdvisoryIsAcknowledged:d("PolarisIGWebStorage").isContentAdvisoryAcknowledged(c("nullthrows")(a.name),(b=e())==null?void 0:(e=b.users)==null?void 0:e.viewerId),posts:g,tagData:a,type:"TAG_PAGE_LOADED_V2",users:f})}}function f(a){return function(b,c){return b({tagName:a,type:"TAG_PAGE_UNLOADED"})}}function h(a,b){return function(c,e){d("PolarisHashtagLogger").logHashtagAction(babelHelpers["extends"]({},b,{eventName:"follow_button_tapped",followStatus:"following"}));c({tagName:a,type:"FOLLOW_HASHTAG"});return d("PolarisSharedAPI").followHashtag(a).then(function(){c({tagName:a,type:"FOLLOW_HASHTAG_SUCCEEDED"})},function(){d("PolarisHashtagLogger").logHashtagAction(babelHelpers["extends"]({},b,{eventName:"follow_button_tap_failure",followStatus:"following"})),c({tagName:a,type:"FOLLOW_HASHTAG_FAILED"})})}}function i(a,b){return function(c,e){d("PolarisHashtagLogger").logHashtagAction(babelHelpers["extends"]({},b,{eventName:"follow_button_tapped",followStatus:"not_following"}));c({tagName:a,type:"UNFOLLOW_HASHTAG"});return d("PolarisSharedAPI").unfollowHashtag(a).then(function(){c({tagName:a,type:"UNFOLLOW_HASHTAG_SUCCEEDED"})},function(){d("PolarisHashtagLogger").logHashtagAction(babelHelpers["extends"]({},b,{eventName:"follow_button_tap_failure",followStatus:"not_following"})),c({tagName:a,type:"UNFOLLOW_HASHTAG_FAILED"})})}}g.acknowledgeContentAdvisory=a;g.loadTagPage=b;g.loadTagPageV2=e;g.unloadTagPage=f;g.followHashtag=h;g.unfollowHashtag=i}),98);
__d("PolarisTagFollowButton.react",["IGRouter","PolarisGenericStrings","PolarisIGCoreButton","PolarisLinkBuilder","PolarisReactRedux","PolarisTagActions","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");e=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b)||this;c.$2=function(){var a=c.props,b=a.id,d=a.isFollowing,e=a.isLoading,f=a.loggingClickPoint,g=a.loggingContainerModule,h=a.tagName;a=a.viewerLoggedIn;if(!a){c.props.history.push(c.$1());return}if(e)return;a={clickPoint:f,containerModule:g,entityId:b};!d?c.props.onFollowHashtag(h,a):c.props.onUnfollowHashtag(h,a)};c.state={initialPath:b.history.location.pathname};return c}var e=b.prototype;e.$1=function(){return d("PolarisLinkBuilder").buildLoginLink(this.state.initialPath,{source:"followHashtag"})};e.render=function(){var a=this.props,b=a.isFollowing,e=a.isLoading;a=a.viewerLoggedIn;return i.jsx(c("PolarisIGCoreButton"),{color:b?"ig-secondary-button":"ig-primary-button",disabled:e,fullWidth:!0,href:a?void 0:this.$1(),loading:e,onClick:a?this.$2:void 0,children:b&&a?d("PolarisGenericStrings").FOLLOWING_TEXT:d("PolarisGenericStrings").FOLLOW_TEXT})};return b}(i.Component);function a(a,b){var c=d("polarisUserSelectors").getViewer__DEPRECATED(a);c=c&&c.id;c=!!c;a=a.tags[b.tagName];return{id:a==null?void 0:a.id,isFollowing:a==null?void 0:a.isFollowing,isLoading:a==null?void 0:a.isLoading,viewerLoggedIn:c}}function b(a){return{onFollowHashtag:function(b,c){return a(d("PolarisTagActions").followHashtag(b,c))},onUnfollowHashtag:function(b,c){return a(d("PolarisTagActions").unfollowHashtag(b,c))}}}f=d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a,b)(e));g["default"]=f}),98);
__d("PolarisTagPageHeader.react",["cx","fbt","IGDSBox.react","IGDSText.react","PolarisAvatarWithStoriesContainer.react","PolarisHashtagLink.react","PolarisTagAvatar.react","PolarisTagFollowButton.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react"),l=7,m=3;function a(a){var b=a.id;a.isFollowing;var e=a.isFollowingEnable,f=a.isSmallScreen,g=a.postCount,h=a.profilePictureUrl,j=a.relatedTags;a=a.tagName;var n=e?f?m:l:0;f=f?77:152;var o=d("PolarisUA").isDesktop()||!e;return k.jsxs(k.Fragment,{children:[k.jsxs("header",{className:"_aaa0"+(e?" _aaa1":"")+(d("PolarisUA").isDesktop()?" _aaa2":""),children:[k.jsx("div",{className:"_aaa3"+(e?" _aaa4":""),children:k.jsx(c("PolarisAvatarWithStoriesContainer.react"),{animateOnLoad:!0,entrypoint:"reel_hashtag",size:f,tagName:a,children:k.jsx(c("PolarisTagAvatar.react"),{isLink:!1,profilePictureUrl:h,size:f,tagName:a})})}),k.jsxs("div",{className:"_aaa5",children:[k.jsxs("div",{className:"_aaa6"+(e?"":" _aaa7")+(e?" _aaa8":""),children:[o&&k.jsx(c("IGDSBox.react"),{marginBottom:3,position:"relative",children:k.jsxs(c("IGDSText.react"),{size:"headline1",children:["#",a]})}),k.jsx(c("IGDSBox.react"),{marginBottom:n,position:"relative",children:g}),e&&k.jsx(c("PolarisTagFollowButton.react"),{id:b,loggingClickPoint:"hashtag_header",loggingContainerModule:"feed_hashtag",tagName:a})]}),j&&j.length>0&&(d("PolarisUA").isMobile()?null:k.jsx(c("IGDSBox.react"),{direction:"row",display:"flex",flex:"grow",marginStart:12,marginTop:4,position:"relative",wrap:!0,children:k.jsxs(c("IGDSText.react"),{breakWord:!0,children:[k.jsx(c("IGDSText.react").Body,{color:"secondaryText",children:i._("__JHASH__3haktmrvW9m__JHASH__")})," ",k.jsx(c("IGDSText.react").Body,{children:j.map(function(a){return k.jsx(c("IGDSBox.react"),{display:"inlineBlock",paddingY:1,position:"relative",wrap:!0,children:k.jsx(c("PolarisHashtagLink.react"),{className:"_aaa9",tag:a})},a)})})]})}))]})]}),d("PolarisUA").isMobile()&&j&&j.length>0&&k.jsx(c("IGDSBox.react"),{direction:"row",display:"flex",flex:"grow",marginBottom:2,marginStart:4,overflow:"scrollX",paddingY:2,position:"relative",wrap:!0,children:k.jsxs(c("IGDSText.react"),{textAlign:"center",children:[k.jsx(c("IGDSText.react").Body,{color:"secondaryText",children:i._("__JHASH__Q0J1umK7HFi__JHASH__")})," ",k.jsx(c("IGDSText.react").Body,{children:j.map(function(a){return k.jsx(c("IGDSBox.react"),{display:"inlineBlock",paddingY:1,position:"relative",wrap:!0,children:k.jsx(c("PolarisHashtagLink.react"),{className:"_aaa9",tag:a})},a)})})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisHashtagAPI",["PolarisInstapi"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){e={include_persistent:"0",max_id:e,next_media_ids:c,page:String(b),surface:"grid",tab:"recent"};return d("PolarisInstapi").apiPost("/api/v1/tags/{tag_name}/sections/",{body:e,path:{tag_name:a}}).then(function(a){return a.data})}g.fetchHashtagMedia=a}),98);
__d("PolarisTagMediaActions",["PolarisGenericStrings","PolarisHashtagAPI","PolarisPaginationUtils","PolarisPostModel","PolarisTagMediaActionConstants","PolarisUserModel","nullthrows","polarisGetHashtagMediaFromNativeHashtag","polarisNormalizeMediaDicts"],(function(a,b,c,d,e,f,g){"use strict";a=0;b="9b498c08113f1e09617a1703c22b2f32";var h=d("PolarisPaginationUtils").generatePaginationActionCreators({getState:function(a,b){a=c("nullthrows")(a.tagMedia.byTagName[b]);return a.pagination},onError:function(a,b,c,e){return{err:a,fetch:b,tagName:c,toast:{actionHandler:e,actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT},type:"TAG_MEDIA_ERRORED"}},onUpdate:function(a,b,d){var e,f,g=[];if(b){e=c("nullthrows")(b.hashtag);b=c("nullthrows")(e.edge_hashtag_to_media||e.edge_hashtag_to_ranked_media);g=(b.edges||[]).map(function(a){return a.node});f=b.page_info}return{fetch:a,media:g,pageInfo:f,tagData:e,tagName:d,type:"TAG_MEDIA_UPDATED"}},pageSize:d("PolarisTagMediaActionConstants").PAGE_SIZE,pagesToPreload:a,queryId:b,queryParams:function(a){return{tag_name:a}}});function i(a){return function(b){var c=function(){return b(i(a))};return b(h.next(a,c))}}function j(a){return function(b){var c=function(){return b(j(a))};return b(k(a,c))}}function k(a,b){return function(e,f){f=f();var g=f.tagMedia;f=f.tags;f=f[a];g=g.byTagName[a];if(f==null||g==null)return;var h=g.pagination,i=d("PolarisPaginationUtils").getVisibleCount(h),j=d("PolarisPaginationUtils").getLoadedCount(h);if(h!=null&&i<j)return e({posts:[],prevPagination:h,tagData:null,tagName:a,type:"TAG_MEDIA_UPDATED_V2",users:[]});i=d("PolarisPaginationUtils").getEndCursor(h);j=d("PolarisPaginationUtils").hasNextPage(h);var k=g.nextMediaIds||[];g=g.nextPage;if(h==null||g==null||j==null||i==null||f.isLoading)return;e({tagName:a,type:"TAG_MEDIA_LOADING_V2"});d("PolarisHashtagAPI").fetchHashtagMedia(a,g,k,i).then(function(b){var f=d("polarisNormalizeMediaDicts").normalizeMediaDicts(d("polarisGetHashtagMediaFromNativeHashtag").getMediaFromSections(b.sections)).entities,g=b!=null&&b.sections!=null&&b.sections.length>0?f.mediaDicts:{},i=(f=f.userDicts)!=null?f:{};return e({posts:[].concat(Object.keys(g).map(function(a){return c("PolarisPostModel").fromNativeResponse(g[a]).toReduxStore()})),prevPagination:h,tagData:{recent:b,top:void 0},tagName:a,type:"TAG_MEDIA_UPDATED_V2",users:[].concat(Object.keys(i).map(function(a){return c("PolarisUserModel").fromNativeResponse(i[a]).toReduxStore()}))})})["catch"](function(c){return e({err:c,tagName:a,toast:{actionHandler:b,actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT},type:"TAG_MEDIA_ERRORED_V2"})})}}g.requestNextTagMedia=i;g.requestNextTagMediaV2=j}),98);
__d("polarisLearnMoreText",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__Y7AwjEh0x72__JHASH__");b=a;g["default"]=b}),98);
__d("PolarisTagPageMediaBrowser.react",["cx","fbt","IGDSBox.react","IGDSSpinner.react","IGRouter","InstagramSEOCrawlBot","PolarisAdvisoryMessage.react","PolarisConfig","PolarisExternalLink.react","PolarisIGCoreButton","PolarisLinkBuilder","PolarisLoggedOutLoginConstants","PolarisMediaBrowser.react","PolarisNavigationActions","PolarisNavigationUtils","PolarisPaginationUtils","PolarisPostsStatistic.react","PolarisReactRedux","PolarisSizing","PolarisTagActions","PolarisTagMediaActionConstants","PolarisTagMediaActions","PolarisUA","gkx","isStringNullOrEmpty","nullthrows","polarisLearnMoreText","polarisTagMediaReducer","polarisUserSelectors","react","usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useMemo;function m(a){var b=a.advisory,d=a.onAcknowledge;a=a.onCancel;var e=null;b.contents&&(e=b.contents.map(function(a,b){return k.jsx("p",{className:"_aao2",children:a},b)}));var f=null,g=b.url;c("isStringNullOrEmpty")(g)||(f=k.jsx("p",{className:"_aao3",children:k.jsx(c("PolarisExternalLink.react"),{href:g,children:b.url_title!=null&&b.url_title!==""?b.url_title:c("polarisLearnMoreText")})}));return k.jsxs(c("PolarisAdvisoryMessage.react"),{className:"_aao4",children:[k.jsx("h2",{className:"_aao5",children:b.title}),e,f,k.jsxs("ul",{className:"_aao6",children:[k.jsx("li",{children:k.jsx(c("PolarisIGCoreButton"),{color:"ig-secondary-button",onClick:d,children:b.show_posts_button_title!=null&&b.show_posts_button_title!==""?b.show_posts_button_title:i._("__JHASH__Yffi-JkuWcr__JHASH__")})}),k.jsx("li",{children:k.jsx(c("PolarisIGCoreButton"),{color:"ig-secondary-button",onClick:a,children:i._("__JHASH__d9NZSaFST2Q__JHASH__")})})]})]})}m.displayName=m.name+" [from "+f.id+"]";h=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b)||this;c.$1=d("PolarisConfig").passesServerChecks(d("PolarisConfig").SERVER_CHECK_KEYS.HASHTAG_FOLLOW_ENABLE);c.$2=function(){c.props.onAcknowledgeContentAdvisory(c.getViewerId())};c.$3=function(){window.history.length>2?c.props.history.goBack():c.props.viewer?c.props.history.replace("/"):d("PolarisNavigationUtils").openURL("/")};c.$4=function(a){c.state.viewedPosts.has(a.id)||c.setState(function(b){var c=b.postImpressionsCount;b=b.viewedPosts;return{postImpressionsCount:c+1,viewedPosts:b.add(a.id)}}),c.props.onPostImpression(c.state.postImpressionsCount,c.props.viewer)};c.$5=function(a){!c.props.isFetching&&!c.props.isLoading&&!c.props.isOldestPostLoaded&&(a>d("PolarisTagMediaActionConstants").PAGE_SIZE&&c.props.onRequestNextPage())};c.state={postImpressionsCount:0,viewedPosts:new Set()};return c}var e=b.prototype;e.isSmallScreen=function(){return this.props.viewportWidth<d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF};e.getPhotosComponentRenderer=function(){var a=this,b=this.props,c=b.contentAdvisory;b=b.contentAdvisoryAcknowledged;return c&&!b?function(){return k.jsx(m,{advisory:c,onAcknowledge:a.$2,onCancel:a.$3})}:null};e.getViewerId=function(){return this.props.viewer?this.props.viewer.id:null};e.renderNoTopPostsExplanation=function(){return k.jsx(c("PolarisAdvisoryMessage.react"),{children:k.jsx("p",{className:"_aao2",children:i._("__JHASH__UhBrhw_zRC6__JHASH__",[i._param("hashtag",this.props.tagName),i._param("link that reads learn more",k.jsx(c("PolarisIGCoreButton"),{borderless:!0,href:"https://help.instagram.com/861508690592298",target:"_blank",children:c("polarisLearnMoreText")}))])})},"advisory_message")};e.render=function(){if(this.props.isInitLoad)return k.jsx(c("IGDSBox.react"),{alignSelf:"center",marginTop:15,position:"relative",children:k.jsx(c("IGDSSpinner.react"),{})});var a=!!this.props.contentAdvisory&&!this.props.contentAdvisoryAcknowledged,b=null;a!==!0&&this.props.postCount!=null&&(b=k.jsx(c("PolarisPostsStatistic.react"),{value:this.props.postCount}));a=null;this.props.postCount!=null&&this.props.postCount>0&&this.props.topPosts.length===0&&(a=this.renderNoTopPostsExplanation());var d=this.isSmallScreen(),e=this.$1&&(this.props.allowFollowing||!this.props.viewer&&!this.props.contentAdvisory);return k.jsx(c("PolarisMediaBrowser.react"),{analyticsContext:"tagPage",className:"_aao7",endCursor:this.props.endCursor,isFetching:this.props.isFetching,isOldestPostLoaded:this.props.isOldestPostLoaded,isSmallScreen:d,isTopMediaOnly:!0,loggingData:{entityPageId:this.props.id,entityPageName:this.props.tagName,hashtagName:this.props.tagName},maxPostsToDisplay:this.props.maxPostsToDisplay,noRecentPostExplanation:null,noTopPostExplanation:a,onImpression:this.$4,onIntentClick:this.props.onLoggedOutIntentClickLoginModal,onPostLoadTargetChange:this.$5,photoComponentRenderer:this.getPhotosComponentRenderer(),postCount:!e&&b,posts:this.props.posts,topPosts:this.props.topPosts,viewportWidth:this.props.viewportWidth})};return b}(k.Component);function a(a,b){b=b.tagName;var e=d("polarisUserSelectors").getViewer__DEPRECATED(a),f=c("nullthrows")(a.tags[b]),g=f.advisory,h=f.isLoading,i=Boolean(g&&g.acknowledged),j=d("polarisTagMediaReducer").getVisibleRecentMediaByTagName(a,b),k=d("polarisTagMediaReducer").getPaginationForTagName(a,b);return{allowFollowing:f.allowFollowing,contentAdvisory:g,contentAdvisoryAcknowledged:i,id:f.id,isFetching:k!=null&&d("PolarisPaginationUtils").isFetching(k),isInitLoad:!k&&j.length===0,isLoading:h,isOldestPostLoaded:k!=null?!d("PolarisPaginationUtils").hasNextPage(k):!1,maxPostsToDisplay:j.length,postCount:f.postCount,posts:j,profilePictureUrl:f.profilePictureUrl,tagName:b,topPosts:d("polarisTagMediaReducer").getAllTopMediaByTagName(a,b),viewer:e}}function b(a,b){var e=b.shouldUseNewPaginationFromAPI,f=b.tagName;return{onAcknowledgeContentAdvisory:function(b){a(d("PolarisTagActions").acknowledgeContentAdvisory(f,b))},onLoggedOutIntentClickLoginModal:function(b,c,e){var f=d("PolarisUA").isDesktop()||d("PolarisConfig").isLoggedOutFRXEligible()?"feature_wall":"content_wall";a(d("PolarisNavigationActions").openLoginModal(f,b,c,null,e))},onPostImpression:function(b,e){if(!e&&!c("gkx")("4815")&&!c("InstagramSEOCrawlBot").is_allowlisted_crawl_bot&&!d("PolarisConfig").isLoggedOutFRXEligible()){e=c("gkx")("4816")?d("PolarisLoggedOutLoginConstants").LOGGED_OUT_JP_POST_IMPRESSION_LIMIT:d("PolarisLoggedOutLoginConstants").LOGGED_OUT_TAG_POST_IMPRESSION_LIMIT;b>e&&a(d("PolarisNavigationActions").openLoginModal("content_wall",d("PolarisLinkBuilder").buildTagLink(f),"hashtag_posts_impression_limit"))}return},onRequestNextPage:function(){e===!0?a(d("PolarisTagMediaActions").requestNextTagMediaV2(f)):a(d("PolarisTagMediaActions").requestNextTagMedia(f))}}}function e(){var a=c("usePolarisDisplayProperties")(),b=a.viewportWidth;return l(function(){return{viewportWidth:b}},[b])}f=d("IGRouter").withIGRouter(d("PolarisReactRedux").connect(a,b)(h));a=d("PolarisReactRedux").connectHooks(e)(f);g["default"]=a}),98);
__d("PolarisTagPageMobileNameSection.react",["IGDSBox.react","IGDSDivider.react","IGDSText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.name;return i.jsxs(i.Fragment,{children:[i.jsx(c("IGDSBox.react"),{alignContent:"center",color:"primaryBackground",padding:4,position:"relative",children:i.jsx(c("IGDSText.react").Section,{textAlign:"center",children:a})}),i.jsx(c("IGDSDivider.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisTagSelectors",["PolarisConfig","PolarisPaginationUtils","nullthrows","polarisUserSelectors"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return function(b){return a.tags[b]}}function a(a){return function(b){b=c("nullthrows")(a.tagMedia.byTagName[b]);return d("PolarisPaginationUtils").hasNextPage(b.pagination)!=null&&b.nextPage!=null}}function b(a){var b=d("polarisUserSelectors").getViewer__DEPRECATED(a);return function(e){e=c("nullthrows")(h(a)(e));var f=e.advisory;e=e.allowFollowing;var g=d("PolarisConfig").passesServerChecks(d("PolarisConfig").SERVER_CHECK_KEYS.HASHTAG_FOLLOW_ENABLE);return g&&(e||!b&&!f)}}g.getTag=h;g.getShouldUseNewPaginationFromAPI=a;g.getShowFollowButton=b}),98);
__d("polarisGetTitleForTag",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return h._("__JHASH__TgbgLecQILG__JHASH__",[h._param("tag_name",a)])}g["default"]=a}),98);
__d("usePolarisOnUnloadTagPage",["PolarisIGWebStorage","PolarisReactRedux","PolarisTagActions","react","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a){var b=d("PolarisReactRedux").useDispatch(),e=c("usePolarisViewer")();i(function(){return function(){d("PolarisIGWebStorage").removeContentAdvisory(a,e==null?void 0:e.id),b(d("PolarisTagActions").unloadTagPage(a))}},[b,a,e])}g.useOnUnloadTagPage=a}),98);
__d("PolarisTagPage.react",["CAAWebClientLoggingEventSource","IGDSBox.react","IGDSDialogBackwardsCompatibilityWrapper.react","IGDSDivider.react","IGDSStandardMegaphone","PolarisAsyncEntityQRModal","PolarisGenericMobileHeader.react","PolarisIGCoreMegaphoneHelper","PolarisNavBackButton.react","PolarisNavigationDispatchers","PolarisNavigationUtils","PolarisPageMetadata.react","PolarisPostsStatistic.react","PolarisReactRedux","PolarisShell.react","PolarisSizing","PolarisTagPageHeader.react","PolarisTagPageMediaBrowser.react","PolarisTagPageMobileNameSection.react","PolarisTagSelectors","PolarisUA","cr:4150","nullthrows","polarisGetTitleForTag","polarisNavigationSelectors","react","usePolarisDisplayProperties","usePolarisOnUnloadTagPage","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useState;function a(a){var e,f=a.showQRModal;a=a.tagName;d("PolarisNavigationDispatchers").useIncrementNewPageViewCount("hashtag",a);d("usePolarisOnUnloadTagPage").useOnUnloadTagPage(a);var g=c("nullthrows")((e=d("PolarisReactRedux")).useSelector(d("PolarisTagSelectors").getTag)(a)),h=g.advisory,k=g.id,l=g.isFollowing,m=g.nullState,n=g.postCount,o=g.profilePictureUrl;g=g.relatedTags;var p=e.useSelector(d("PolarisTagSelectors").getShouldUseNewPaginationFromAPI)(a),q=e.useSelector(d("PolarisTagSelectors").getShowFollowButton)(a);e=e.useSelector(d("polarisNavigationSelectors").getIsLoginModalOpen);var r=c("usePolarisViewer")(),s=c("usePolarisDisplayProperties")();s=s.viewportWidth;f=j(f);var t=f[0],u=f[1];f=s<d("PolarisSizing").LANDSCAPE_SMALL_SCREEN_CUTOFF;s=(s=h==null?void 0:h.acknowledged)!=null?s:!1;h=h&&!s;var v=null;h!==!0&&n!=null&&(v=i.jsx(c("PolarisPostsStatistic.react"),{value:n}));return i.jsxs(c("PolarisShell.react"),{maxWidth:d("PolarisSizing").SITE_WIDTHS.wide,mobileHeader:i.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:i.jsx(c("PolarisNavBackButton.react"),{}),title:"#"+a}),pageIdentifier:"tagPage",children:[i.jsx(c("PolarisPageMetadata.react"),{base:"",id:"tagPage",title:c("polarisGetTitleForTag")(a)}),m!=null&&s&&i.jsxs(c("IGDSBox.react"),{border:!d("PolarisUA").isMobile(),color:d("PolarisUA").isMobile()?"secondaryBackground":"primaryBackground",marginEnd:d("PolarisUA").isMobile()?void 0:"auto",marginStart:d("PolarisUA").isMobile()?void 0:"auto",marginTop:d("PolarisUA").isMobile()?0:8,position:"relative",width:d("PolarisUA").isMobile()?void 0:d("PolarisSizing").SITE_WIDTHS.wide,children:[i.jsx(c("IGDSStandardMegaphone"),{body:m.body,bodyWidth:"auto",color:d("PolarisUA").isMobile()?"secondary":"primary",title:m.title,children:i.jsx(d("PolarisIGCoreMegaphoneHelper").IGCoreMegaphoneAction,{onClick:function(){return d("PolarisNavigationUtils").openExternalURL(m.link)},type:m.emphasized?"primary":"secondary",children:m.action})}),d("PolarisUA").isMobile()&&i.jsx(c("IGDSDivider.react"),{})]}),d("PolarisUA").isMobile()&&!r&&i.jsx(c("PolarisTagPageMobileNameSection.react"),{name:"#"+a}),i.jsx(c("PolarisTagPageHeader.react"),{id:k,isFollowing:l,isFollowingEnable:q,isSmallScreen:f,postCount:v,profilePictureUrl:o,relatedTags:g,tagName:a}),i.jsx(c("PolarisTagPageMediaBrowser.react"),{shouldUseNewPaginationFromAPI:p,tagName:a}),e&&b("cr:4150")!=null&&i.jsx(b("cr:4150"),{dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.HASHTAG,triggeringPageType:"hashtag"}),t&&i.jsx(c("IGDSDialogBackwardsCompatibilityWrapper.react"),{children:i.jsx(c("PolarisAsyncEntityQRModal"),{entityID:a,onClose:function(){return u(!1)},source:"DIRECT_NAVIGATION"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisLocationActions",["PolarisLocationPostsTypes","PolarisUserModel","err","nullthrows","polarisGetLocationMediaFromNativeLocation","polarisNormalizeMediaDicts"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return{location:c("nullthrows")(a.location),type:"LOCATION_PAGE_LOADED"}}function b(a){return function(b){var e,f;if(Object.keys(a.location_info).length===0)throw c("err")("NativeLocation returned empty location_info data");e=(e=(e=a[d("PolarisLocationPostsTypes").LOCATION_TAB_TYPES.RECENT])==null?void 0:e.sections)!=null?e:[];f=(f=(f=a[d("PolarisLocationPostsTypes").LOCATION_TAB_TYPES.RANKED])==null?void 0:f.sections)!=null?f:[];f=[].concat(f,e);e=d("polarisNormalizeMediaDicts").normalizeMediaDicts(d("polarisGetLocationMediaFromNativeLocation").getMediaFromLocationSections(f)).entities;var g=e.mediaDicts,h=e.userDicts;f=Object.keys(h).map(function(a){return c("PolarisUserModel").fromNativeResponse(h[a]).toReduxStore()});b({locationData:a,media:Object.keys(g).map(function(a){return g[a]}),type:"LOCATION_PAGE_LOADED_V2",users:f})}}g.loadLocationPage=a;g.loadLocationPageV2=b}),98);
__d("PolarisExploreActions",["PolarisLocationActions","PolarisTagActions"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return d("PolarisTagActions").loadTagPageV2(a.data)};b=function(a){return d("PolarisTagActions").loadTagPage(a.data)};c=function(a){return d("PolarisLocationActions").loadLocationPageV2(a.native_location_data)};g.setupExploreTagsLoggedInPage=a;g.setupExploreTagsLoggedOutPage=b;g.setupExploreLocationsPage=c}),98);
__d("usePolarisExploreTagNameOrRedirect",["browserHistory","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect;function a(a){var b,c=(b=(b=a.data)==null?void 0:b.name)!=null?b:(b=a.data)==null?void 0:(a=b.hashtag)==null?void 0:a.name;i(function(){c==null&&d("browserHistory").redirect("/")},[c]);return c}g["default"]=a}),98);
__d("usePolarisExploreTagsLoggedInSetup",["PolarisExploreActions","usePolarisExploreTagNameOrRedirect","usePolarisGetQuery","usePolarisGetQueryResponse","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=c("usePolarisGetQuery")("/api/v1/tags/web_info/",{query:{tag_name:a}});c("usePolarisGetQuerySetup")(a,d("PolarisExploreActions").setupExploreTagsLoggedInPage);a=c("usePolarisGetQueryResponse")(a);return c("usePolarisExploreTagNameOrRedirect")(a)}g["default"]=a}),98);
__d("usePolarisExploreTagsLoggedOutSetup",["PolarisExploreActions","usePolarisExploreTagNameOrRedirect","usePolarisGetQuery","usePolarisGetQueryResponse","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=c("usePolarisGetQuery")("/api/v1/tags/logged_out_web_info/",{query:{tag_name:a}});c("usePolarisGetQuerySetup")(a,d("PolarisExploreActions").setupExploreTagsLoggedOutPage);a=c("usePolarisGetQueryResponse")(a);return c("usePolarisExploreTagNameOrRedirect")(a)}g["default"]=a}),98);
__d("PolarisExploreTagsRoot.react",["PolarisTagPage.react","polarisIsUserLoggedIn","react","usePolarisExploreTagsLoggedInSetup","usePolarisExploreTagsLoggedOutSetup"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function j(a){a=a.props;var b=a.routeParams.tag_name;a=a.routeProps.show_qr_modal;b=c("usePolarisExploreTagsLoggedInSetup")(b);return b==null?null:i.jsx(c("PolarisTagPage.react"),{showQRModal:a,tagName:b})}j.displayName=j.name+" [from "+f.id+"]";function k(a){a=a.props;var b=a.routeParams.tag_name;a=a.routeProps.show_qr_modal;b=c("usePolarisExploreTagsLoggedOutSetup")(b);return b==null?null:i.jsx(c("PolarisTagPage.react"),{showQRModal:a,tagName:b})}k.displayName=k.name+" [from "+f.id+"]";function a(a){var b=d("polarisIsUserLoggedIn").isUserLoggedIn();return b?i.jsx(j,babelHelpers["extends"]({},a)):i.jsx(k,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);