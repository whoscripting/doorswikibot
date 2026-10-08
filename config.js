// --- WIKI CONFIGURATION ---
const BOT_NAME = "fih"; 

const WIKIS = {
    "en": {
        name: "DOORS Wiki",
        baseUrl: "https://doorsgame.wiki",
        apiEndpoint: "https://doorsgame.wiki/w/api.php",
        articlePath: "https://doorsgame.wiki/",
        prefix: "en",
        emoji: "1557256172782878780"
    },
    "zh": {
        name: "Chinese DOORS Wiki",
        baseUrl: "https://zh.doorsgame.wiki",
        apiEndpoint: "https://zh.doorsgame.wiki/w/api.php",
        articlePath: "https://zh.doorsgame.wiki/",
        prefix: "zh",
        emoji: "1557256172782878780"
    }
};

// Map a channel or category ID to a wiki.
const WIKI_MAP = {
    "1018420502286581815": "en"
};

const DEFAULT_WIKI = "en";

// Enable or disable slash commands. Disabled commands are not registered with Discord.
const COMMANDS = {
    speedrun: false,
    contribs: false,
    wiki: true,
    parse: true,
    user: true,
    random: true,
};

// const SPEEDRUN_EMOJI = "DISCORD_EMOJI_ID";
const CONTRIBSCORES_SCORE_EMOJI = "1557256374881095711";

const STATUS_INTERVAL_MS = 5 * 60 * 1000;
const PAGE_CACHE_MS = 30 * 60 * 1000;

// --- DISCORD STATUSES ---
const STATUS_OPTIONS = [
    { type: 4, text: "just send [[a page]] or {{a page}}!" },
    { type: 4, text: "doorsgame.wiki" },
    { type: 0, text: "DOORS" },
    { type: 5, text: "DOORS" },
    { type: 4, text: "edit your message and my embed will too!" },
    { type: 4, text: "react with :wastebasket: on my messages & i'll delete!" },
];

module.exports = {
    BOT_NAME,
    WIKIS,
    WIKI_MAP,
    DEFAULT_WIKI,
    COMMANDS,
//    SPEEDRUN_EMOJI,
    CONTRIBSCORES_SCORE_EMOJI,
    STATUS_INTERVAL_MS,
    PAGE_CACHE_MS,
    STATUS_OPTIONS
};
