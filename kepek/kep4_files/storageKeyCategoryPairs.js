window.getStorageKeyCategoryPairs = function () {
    return {
        'groupSimilarListings': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'm1x_switch': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'residentialParkNewsletter': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'after-login-action': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'arkon_sso': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'seenAdobserverPopup': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'seenNewlyBuiltListingCount': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'seenNewlyBuiltAdCount': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'onboarding.seen': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'onboarding': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'already-seen': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'already_seen': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'bbid': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE, window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'pagevisits': {
            category: window.ConsentManagerHelper.ConsentCategory.STATISTICS,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'phone-reveal-count': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'phone-reveal-ids': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'phoneNumberCount': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'search-history': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'searchHistory': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'new-registration': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'newsletters': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'nsuh': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'userSubscriptionOld': {
            category: window.ConsentManagerHelper.ConsentCategory.STATISTICS,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'last-seen-date-interstitial': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'failed-login-attempts': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'last-chat-open-location': {
            category: window.ConsentManagerHelper.ConsentCategory.STATISTICS,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'closable-info-boxes': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'show-one-tap-newsletter-modal': {
            category: window.ConsentManagerHelper.ConsentCategory.MARKETING,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'is-buy-rent-guide-open': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE]
        },
        'estimate-promo-banner-closed': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'searcher-pro-banner-closed': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        'listings-page-premium-partner-position': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.LOCAL_STORAGE],
        },
        // 8><----- remove after CRO-790 - start -----><8
        'extended_listing_survey_banner': {
            category: window.ConsentManagerHelper.ConsentCategory.PREFERENCES,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        },
        // 8><----- remove after CRO-790 - end -----><8
        'chat-folder--is-additional-folders-open': {
            category: window.ConsentManagerHelper.ConsentCategory.NECESSARY,
            storages: [window.ConsentManagerHelper.StorageName.COOKIE_STORAGE]
        }
    };
};
