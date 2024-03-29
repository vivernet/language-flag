let languageFlags = {
	"ps": "🇵🇰",
	"fa": "🇮🇷",
	"sq": "🇲🇰",
	"ca": "🇪🇸",
	"hy": "🇦🇲",
	"az": "🇦🇿",
	"bn": "🇮🇳",
	"be": "🇧🇾",
	"wa": "🇧🇪",
	"dz": "🇧🇹",
	"qu": "🇵🇪",
	"bs": "🇧🇦",
	"tn": "🇿🇦",
	"bg": "🇧🇬",
	"rn": "🇧🇮",
	"km": "🇰🇭",
	"iu": "🇨🇦",
	"sg": "🇨🇫",
	"zh": "🇨🇳",
	"ii": "🇨🇳",
	"bo": "🇨🇳",
	"ug": "🇨🇳",
	"lu": "🇨🇩",
	"sw": "🇺🇬",
	"hr": "🇭🇷",
	"tr": "🇹🇷",
	"cs": "🇨🇿",
	"da": "🇬🇱",
	"fo": "🇫🇴",
	"et": "🇪🇹",
	"am": "🇪🇹",
	"fi": "🇫🇮",
	"br": "🇫🇷",
	"co": "🇫🇷",
	"fr": "🇫🇷",
	"oc": "🇫🇷",
	"ka": "🇬🇪",
	"os": "🇷🇺",
	"de": "🇩🇪",
	"ak": "🇬🇭",
	"ee": "🇹🇬",
	"el": "🇬🇷",
	"kl": "🇬🇱",
	"hu": "🇭🇺",
	"is": "🇮🇸",
	"in": "🇮🇳",
	"as": "🇮🇳",
	"gu": "🇮🇳",
	"hi": "🇮🇳",
	"kn": "🇮🇳",
	"ks": "🇮🇳",
	"ml": "🇮🇳",
	"mr": "🇮🇳",
	"ne": "🇳🇵",
	"or": "🇮🇳",
	"sa": "🇮🇳",
	"ta": "🇱🇰",
	"te": "🇮🇳",
	"id": "🇮🇩",
	"jv": "🇮🇩",
	"ga": "🇮🇪",
	"gv": "🇮🇲",
	"he": "🇮🇱",
	"it": "🇮🇹",
	"sc": "🇮🇹",
	"ja": "🇯🇵",
	"kk": "🇰🇿",
	"ki": "🇰🇪",
	"ky": "🇰🇬",
	"lo": "🇱🇦",
	"lv": "🇱🇻",
	"lt": "🇱🇹",
	"lb": "🇱🇺",
	"mg": "🇲🇬",
	"ny": "🇲🇼",
	"ms": "🇲🇾",
	"dv": "🇲🇻",
	"bm": "🇲🇱",
	"mt": "🇲🇹",
	"mn": "🇲🇳",
	"my": "🇲🇲",
	"af": "🇿🇦",
	"nl": "🇳🇱",
	"fy": "🇳🇱",
	"mi": "🇳🇿",
	"ig": "🇳🇬",
	"yo": "🇳🇬",
	"ko": "🇰🇷",
	"mk": "🇲🇰",
	"nn": "🇳🇴",
	"pa": "🇵🇰",
	"sd": "🇵🇰",
	"ur": "🇵🇰",
	"gn": "🇵🇾",
	"tl": "🇵🇭",
	"pl": "🇵🇱",
	"pt": "🇵🇹",
	"ro": "🇷🇴",
	"ba": "🇷🇺",
	"ce": "🇷🇺",
	"cv": "🇷🇺",
	"ru": "🇷🇺",
	"tt": "🇷🇺",
	"rw": "🇷🇼",
	"wo": "🇸🇳",
	"sr": "🇷🇸",
	"sk": "🇸🇰",
	"sl": "🇸🇮",
	"so": "🇸🇴",
	"nr": "🇿🇦",
	"st": "🇿🇦",
	"ss": "🇿🇦",
	"ts": "🇿🇦",
	"ve": "🇿🇦",
	"xh": "🇿🇦",
	"zu": "🇿🇦",
	"eu": "🇪🇸",
	"gl": "🇪🇸",
	"es": "🇪🇸",
	"si": "🇱🇰",
	"nb": "🇿🇦",
	"se": "🇸🇪",
	"sv": "🇸🇪",
	"rm": "🇨🇭",
	"tg": "🇹🇯",
	"th": "🇹🇭",
	"to": "🇹🇴",
	"ku": "🇹🇷",
	"tk": "🇹🇲",
	"lg": "🇺🇬",
	"uk": "🇺🇦",
	"kw": "🇬🇧",
	"en": "🇬🇧",
	"gd": "🇬🇧",
	"cy": "🇬🇧",
	"uz": "🇺🇿",
	"vi": "🇻🇳",
	"nd": "🇿🇼",
	"sn": "🇿🇼"
};

export function getLanguageFlag(languageCode) {
	return languageFlags[languageCode] || "🌐";
}