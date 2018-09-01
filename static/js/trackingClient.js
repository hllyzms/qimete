var trackingClient =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var snippet = __webpack_require__(6);


	var settings = {
	  enabled: false,
	  initialized: false
	};

	var cachedProperties = {};

	// TODO: make mandatoryProperties a required argument
	// We're not doing this yet to avoid a breaking change
	var loadAnalytics = function loadAnalytics(apiKey, mandatoryProperties) {
	  var hasLoaded = snippet(apiKey);
	  settings.initialized = true;
	  settings.enabled = true;

	  if (mandatoryProperties) {
	    cachedProperties = mandatoryProperties;
	  }

	  return hasLoaded;
	};

	var trackingService = {
	  init: function init(apiKey, mandatoryProperties) {
	    if (!settings.initialized) {
	      loadAnalytics(apiKey, mandatoryProperties);
	    }
	  },

	  initRenderer: function initRenderer(apiKey) {
	    if (!settings.initialized) {
	      loadAnalytics(apiKey);
	    }
	  },

	  setEnabled: function setEnabled() {
	    if (settings.initialized) settings.enabled = true;
	  },

	  isEnabled: function isEnabled() {
	    return settings.enabled;
	  },

	  identify: function identify(userId, traits, options, callback) {
	    if (settings.enabled) {
	      window.analytics.identify(userId, traits, options, callback);
	    }
	  },

	  reset: function reset() {
	    if (settings.enabled) {
	      window.analytics.reset();
	    }
	  },

	  sendEvent: function sendEvent(eventName, properties, options, callback) {
	    if (settings.enabled) {
	      if ((typeof properties === 'undefined' ? 'undefined' : _typeof(properties)) !== 'object') {
	        console.warn('sendEvent called without properties');
	      }

	      window.analytics.track(eventName, properties, options, callback);
	    } else {
	      console.warn('sendEvent called when trackingService was not initialized', {
	        eventName: eventName,
	        properties: properties,
	        options: options
	      });

	      if (typeof properties === 'function') {
	        callback = properties;
	      }

	      if (typeof options === 'function') {
	        callback = options;
	      }

	      if (callback) {
	        callback();
	      }
	    }
	  },

	  sendPage: function sendPage(pageName, properties) {
	    if (settings.enabled) window.analytics.page(pageName, properties);
	  },

	  setUserProperties: function setUserProperties(userId, properties, callback) {
	    if (settings.enabled) window.analytics.identify(userId, properties, {}, callback);
	  },

	  incrementUserProperty: function incrementUserProperty(userId, properties) {
	    if (settings.enabled) {
	      window.analytics.identify(userId, {}, {
	        integrations: {
	          Intercom: {
	            increments: properties
	          }
	        }
	      });
	    }
	  },

	  updateWidget: function updateWidget() {
	    if (settings.enabled && typeof window.Intercom !== 'undefined') window.Intercom('update');
	  },

	  sendOrder: function sendOrder(data) {
	    if (settings.enabled) {
	      window.analytics.track('Added Product', data.product);
	      window.analytics.track('Completed Order', {
	        orderId: data.transactionId,
	        total: data.total,
	        revenue: data.total,
	        currency: data.currency,
	        label: data.sku,
	        products: [data.product]
	      });
	    }
	  },

	  trackPresentConversation: function trackPresentConversation(_ref, options, callback) {
	    var attribution_uid = _ref.attribution_uid,
	        _ref$distribution_cha = _ref.distribution_channel,
	        distribution_channel = _ref$distribution_cha === undefined ? 'standard' : _ref$distribution_cha,
	        rest = _objectWithoutProperties(_ref, ['attribution_uid', 'distribution_channel']);

	    // eslint-disable-line camelcase
	    if (!attribution_uid) {
	      // eslint-disable-line camelcase
	      return console.warn('The attribution_uid property is mandatory. Cannot call trackPresentConversation. Please send with the attribution_uid property');
	    }
	    this.sendEvent('present_conversation', _extends({
	      attribution_uid: attribution_uid,
	      distribution_channel: distribution_channel,
	      natero_feature_name: 'present_conversation_' + distribution_channel }, rest), options, callback);
	  },

	  trackStartConversation: function trackStartConversation(_ref2, options, callback) {
	    var attribution_uid = _ref2.attribution_uid,
	        _ref2$distribution_ch = _ref2.distribution_channel,
	        distribution_channel = _ref2$distribution_ch === undefined ? 'standard' : _ref2$distribution_ch,
	        rest = _objectWithoutProperties(_ref2, ['attribution_uid', 'distribution_channel']);

	    // eslint-disable-line camelcase
	    if (!attribution_uid) {
	      // eslint-disable-line camelcase
	      return console.warn('The attribution_uid property is mandatory. Cannot call trackStartConversation. Please send with the attribution_uid property');
	    }
	    this.sendEvent('start_conversation', _extends({
	      attribution_uid: attribution_uid,
	      distribution_channel: distribution_channel,
	      natero_feature_name: 'start_conversation' }, rest), options, callback);
	  },

	  trackAbTest: function trackAbTest(_ref3, options, callback) {
	    var account_id = _ref3.account_id,
	        test_id = _ref3.test_id,
	        variant_id = _ref3.variant_id,
	        variant_label = _ref3.variant_label;

	    this.sendEvent('ab_test', {
	      account_id: account_id,
	      test_id: test_id,
	      variant_id: variant_id,
	      variant_label: variant_label,
	      natero_feature_name: test_id + '_' + variant_id // eslint-disable-line camelcase
	    }, options, callback);
	  },

	  trackCreateTypeform: function trackCreateTypeform(_ref4, options, callback) {
	    var _ref4$category = _ref4.category,
	        category = _ref4$category === undefined ? 'admin' : _ref4$category,
	        rest = _objectWithoutProperties(_ref4, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackCreateTypeform. Please call init with the mandatoryProperties.');
	    }
	    var created_from = rest.created_from;


	    this.sendEvent('create_typeform', _extends({
	      category: category
	    }, cachedProperties, rest, {
	      natero_feature_name: 'create_typeform_' + created_from // eslint-disable-line camelcase
	    }), options, callback);
	  },

	  trackTypeformDeleted: function trackTypeformDeleted(_ref5, options, callback) {
	    var _ref5$category = _ref5.category,
	        category = _ref5$category === undefined ? 'admin' : _ref5$category,
	        rest = _objectWithoutProperties(_ref5, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackTypeformDeleted. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('typeform_deleted', _extends({
	      category: category
	    }, cachedProperties, rest, {
	      natero_feature_name: 'typeform_deleted'
	    }), options, callback);
	  },

	  trackPublishTypeform: function trackPublishTypeform(_ref6, options, callback) {
	    var _ref6$category = _ref6.category,
	        category = _ref6$category === undefined ? 'admin' : _ref6$category,
	        rest = _objectWithoutProperties(_ref6, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackPublishTypeform. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('publish_typeform', _extends({
	      category: category
	    }, cachedProperties, rest), options, callback);
	  },

	  trackChangeDesign: function trackChangeDesign(_ref7, options, callback) {
	    var _ref7$category = _ref7.category,
	        category = _ref7$category === undefined ? 'admin' : _ref7$category,
	        rest = _objectWithoutProperties(_ref7, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackChangeDesign. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('change_design', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  trackMembersListModified: function trackMembersListModified(props, options, callback) {
	    var _props$category = props.category,
	        category = _props$category === undefined ? 'admin' : _props$category,
	        rest = _objectWithoutProperties(props, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackMembersListModified. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('members_list_modified', _extends({}, cachedProperties, { category: category }, rest), options, callback);
	  },

	  trackMemberAdded: function trackMemberAdded(props, callback) {
	    this.trackMembersListModified(_extends({}, props, {
	      modification: 'team_member_added',
	      natero_feature_name: 'add_team_member_to_workspace'
	    }), callback);
	  },

	  trackUserInvited: function trackUserInvited(props, callback) {
	    this.trackMembersListModified(_extends({}, props, {
	      modification: 'user_invited',
	      natero_feature_name: 'invite_user_successful'
	    }), callback);
	  },

	  trackTeamMemberRemoved: function trackTeamMemberRemoved(props, callback) {
	    this.trackMembersListModified(_extends({}, props, {
	      modification: 'team_member_removed',
	      natero_feature_name: 'team_member_removed'
	    }), callback);
	  },

	  trackWorkspaceMemberRemoved: function trackWorkspaceMemberRemoved(props, callback) {
	    this.trackMembersListModified(_extends({}, props, {
	      modification: 'uworkspace_member_removed',
	      natero_feature_name: 'workspace_member_removed'
	    }), callback);
	  },

	  trackUseFeature: function trackUseFeature(_ref8, options, callback) {
	    var _ref8$category = _ref8.category,
	        category = _ref8$category === undefined ? 'admin' : _ref8$category,
	        rest = _objectWithoutProperties(_ref8, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackUseFeature. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('use_feature', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  trackIntegrationSetup: function trackIntegrationSetup(_ref9, options, callback) {
	    var _ref9$category = _ref9.category,
	        category = _ref9$category === undefined ? 'admin' : _ref9$category,
	        rest = _objectWithoutProperties(_ref9, ['category']);

	    this.sendEvent('integration_setup', _extends({ category: category }, rest), options, callback);
	  },

	  trackItemClicked: function trackItemClicked(_ref10, options, callback) {
	    var _ref10$category = _ref10.category,
	        category = _ref10$category === undefined ? 'admin' : _ref10$category,
	        rest = _objectWithoutProperties(_ref10, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackItemClicked. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('item_clicked', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  trackViewPageSection: function trackViewPageSection(_ref11, options, callback) {
	    var _ref11$category = _ref11.category,
	        category = _ref11$category === undefined ? 'admin' : _ref11$category,
	        rest = _objectWithoutProperties(_ref11, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackViewPageSection. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('view_page_section', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  trackPopupOpened: function trackPopupOpened(_ref12, options, callback) {
	    var _ref12$category = _ref12.category,
	        category = _ref12$category === undefined ? 'admin' : _ref12$category,
	        rest = _objectWithoutProperties(_ref12, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackPopupOpened. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('popup_opened', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  trackBlockDefined: function trackBlockDefined(_ref13, options, callback) {
	    var _ref13$category = _ref13.category,
	        category = _ref13$category === undefined ? 'admin' : _ref13$category,
	        rest = _objectWithoutProperties(_ref13, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackBlockDefined. Please call init with the mandatoryProperties.');
	    }

	    var definition_method = rest.definition_method,
	        new_block_type = rest.new_block_type;

	    this.sendEvent('block_defined', _extends({
	      category: category
	    }, cachedProperties, rest, {
	      label: new_block_type, // eslint-disable-line camelcase
	      natero_feature_name: definition_method + '_' + new_block_type // eslint-disable-line camelcase
	    }), options, callback);
	  },

	  trackWorkspaceCreated: function trackWorkspaceCreated(_ref14, options, callback) {
	    var _ref14$category = _ref14.category,
	        category = _ref14$category === undefined ? 'admin' : _ref14$category,
	        rest = _objectWithoutProperties(_ref14, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackWorkspaceCreated. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('workspace_created', _extends({
	      category: category
	    }, cachedProperties, rest, {
	      natero_feature_name: 'new_workspace'
	    }), options, callback);
	  },

	  trackPanelOpened: function trackPanelOpened(_ref15, options, callback) {
	    var _ref15$category = _ref15.category,
	        category = _ref15$category === undefined ? 'admin' : _ref15$category,
	        rest = _objectWithoutProperties(_ref15, ['category']);

	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call trackPanelOpened. Please call init with the mandatoryProperties.');
	    }

	    this.sendEvent('panel_opened', _extends({ category: category }, cachedProperties, rest), options, callback);
	  },

	  sendEventWithCache: function sendEventWithCache(eventName, properties, options, callback) {
	    if (!Object.keys(cachedProperties).length) {
	      return console.warn('init was not called with mandatoryProperties. Cannot call sendEventWithCache. Please call init with the mandatoryProperties.');
	    }
	    var category = properties.category || 'admin';

	    this.sendEvent(eventName, _extends({ category: category }, cachedProperties, properties), options, callback);
	  }
	};

	module.exports = trackingService;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	'use strict';

	module.exports = function (apiKey) {
	  // Create a queue, but don't obliterate an existing one!
	  var analytics = window.analytics = window.analytics || [];
	  var hasLoaded = false;

	  // If the real analytics.js is already on the page return.
	  if (analytics.initialize) {
	    return hasLoaded;
	  }

	  // If the snippet was invoked already show an error.
	  if (analytics.invoked) {
	    if (window.console && console.error) {
	      console.error('Segment snippet included twice.');
	    }
	    return hasLoaded;
	  }

	  // Invoked flag, to make sure the snippet
	  // is never invoked twice.
	  analytics.invoked = true;

	  // A list of the methods in Analytics.js to stub.
	  analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'page', 'once', 'off', 'on'];

	  // Define a factory to create stubs. These are placeholders
	  // for methods in Analytics.js so that you never have to wait
	  // for it to load to actually record data. The `method` is
	  // stored as the first argument, so we can replay the data.
	  analytics.factory = function (method) {
	    return function () {
	      var args = Array.prototype.slice.call(arguments);
	      args.unshift(method);
	      analytics.push(args);
	      return analytics;
	    };
	  };

	  // For each of our methods, generate a queueing stub.
	  for (var i = 0; i < analytics.methods.length; i++) {
	    var key = analytics.methods[i];
	    analytics[key] = analytics.factory(key);
	  }

	  // Define a method to load Analytics.js from our CDN,
	  // and that will be sure to only ever load it once.
	  analytics.load = function (key) {
	    // Create an async script element based on your key.
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.async = true;
	    script.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') + 'cdn.segment.com/analytics.js/v1/' + key + '/analytics.min.js';

	    // Insert our script next to the first script element.
	    var first = document.getElementsByTagName('script')[0];
	    first.parentNode.insertBefore(script, first);
	  };

	  // Add a version to keep track of what's in the wild.
	  analytics.SNIPPET_VERSION = '3.1.0';

	  // Modifying the segment snippet...
	  // We're going to call .load and .page ourselves so we
	  // can rewrite this as an npm module

	  // Load Analytics.js with your key, which will automatically
	  // load the tools you've enabled for your account. Boosh!
	  analytics.load(apiKey);

	  hasLoaded = true;

	  return hasLoaded;
	};

/***/ })

/******/ });