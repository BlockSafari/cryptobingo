"use strict";

// Import third party dependencies.
import * as _ from "lodash";

/**
 * Master list of all phrases in string format, or [string, number] format.
 */
export const phrases =
[
	// Brand exposure.
	"Invested in Bitcoin.",
	"Invested in Bitcoin Cash.",
	"Invested in Dash.",
	"Invested in DogeCoin.",
	"Invested in Ethereum.",
	"Invested in Ethereum Classic.",
	"Invested in Litecoin.",
	// "Invested in NEM.",
	"Invested in Monero.",
	// "Invested in IOTA.",
	"Invested in Ripple.",
	// "Invested in Steem.",
	"Invested in Zcash.",
	"Invested in ZenCash.",
	"Opened a Bittrex account.",
	"Opened a Poloniex account.",
	"Opened a Coinbase / GDAX account.",
	"Opened a Kracken account.",
	"Opened a Bitfinex account.",
	"Opened a Bitfinex account.",
	"Opened a Cryptopia account.",

	// Investment timeline.
	"Bought Bitcoin under $1.",
	"Bought Bitcoin under $10.",
	"Bought Bitcoin under $100.",
	"Bought Bitcoin under $1000.",
	"Bought Ethereum under $1.",
	"Bought Ethereum under $10.",
	"Bought Ethereum under $100.",
	"Bought Ethereum under $200.",
	"Participated in the 2014 Ethereum crowdsale.",
	"HODLing since 2009.",
	"HODLing since 2010.",
	"HODLing since 2011.",
	"HODLing since 2012.",
	"HODLing since 2013.",
	"HODLing since 2014.",
	"HODLing since 2015.",
	"HODLing since 2016.",
	"HODLing since 2017.",

	// Investment performance.
	"Have a total portfolio return of more than 50%. 💰",
	"Have a total portfolio return of more than 100%. 💰",
	"Have a total portfolio return of more than 200%. 💰",
	"Have a total portfolio return of more than 300%. 💰",
	"Have a total portfolio return of more than 500%. 💰",
	"Have a total portfolio return of more than 1000%. 🤑",
	"Have a total portfolio return of more than 2000%. 🤑",
	"Have a total portfolio return of more than 3000%. 🤑",
	"Have a total portfolio return of more than 5000%. 🤑",
	"Profited over $100 USD.",
	"Profited over $1,000 USD.",
	"Profited over $10,000 USD.",
	"Profited over $100,000 USD.",
	"Profited over $1,000,000 USD.",

	// Investment strategy.
	"Invested in a cryptocurrency with a marketcap of less than $1m USD.",
	"Invested in a cryptocurrency with a marketcap of less than $10m USD.",
	"Invested in a cryptocurrency with a marketcap of less than $100m USD.",
	"Invested in a cryptocurrency repeatedly as it was falling in price.",

	// Investment advice (received).
	"Received investment advice and made money.",
	"Received investment advice and lost money.",
	"Ignored investment advice and then regretted it.",

	// Investment misc.
	"Invested in an ICO.",
	"Invested blindly in an ICO without knowing anything about it.",
	"Invested purely on FOMO.",
	"Invested in a shitcoin.",
	"Invested in a shitcoin and somehow made money.",
	"Correctly called the bottom on a major market movement.",
	"Incorrectly called bottom on a major market movement.",
	"Bought low and sold high.",
	"Bought high and sold low.",
	"Day traded cryptocurrency.",
	"Short sold a cryptocurrency.",
	"Day traded cryptocurrency on margin.",
	"HODLed, but wished you had sold.",
	"Sold, but wished you had HODLed.",

	// Historic events.
	"HODLed through the Bitcoin Cash fork from Bitcoin in 2017.",
	"HODLed through the Ethereum Classic fork from Ethereum in 2016.",
	"HODLed through the ZenCash fork from Zclassic in 2017.",
	"Lost money in the 2013 PicoStocks hack.",
	"Lost money in the 2013 BIPS hack.",
	"Lost money in the 2013 Inputs.io hack.",
	// "Lost money in the 2013 Blockchain.info hack.",
	"Lost money in the 2014 Mt. Gox. hack.",
	// "Lost money in the 2014 CryptoRush hack.",
	// "Lost money in the 2014 Flexcoin hack.",
	"Lost money in the 2014 Cryptsy hack.",
	"Lost money in the 2014 Mintpal hack.",
	// "Lost money in the 2014 Blockchain.info hack.",
	// "Lost money in the 2015 Cavirtex hack.",
	"Lost money in the 2015 Bitstamp hack.",
	"Lost money in the 2015 796 hack.",
	// "Lost money in the 2015 Kipcoin hack.",
	// "Lost money in the 2015 Exco.in hack.",
	"Lost money in the 2015 Bter hack.",
	"Lost money in the 2016 Bitstamp hack.",
	// "Lost money in the 2016 Cointrader hack.",
	// "Lost money in the 2016 ShapeShift hack.",
	"Lost money in the 2016 Gatecoin hack.",
	"Lost money in the 2016 Bitfinex hack.",

	// Lost money.
	"Lost money in an offline wallet hack.",
	"Lost money to a phisher.",
	"Lost money to a phisher pretending to be Vitalik Buterin.",
	"Lost your private keys.",
	"Lost money in a scam.",
	"Lost money and cried about it.",

	// Security.
	"Use a hardware wallet.",
	"Use an offline paper wallet.",
	"Use a metal wallet.",
	"Use 2 factor authentication on your exchange account.",

	// Mining.
	"Mined using CPUs. ⛏",
	"Mined using GPUs. ⛏",
	"Mined using ASICs. ⛏",
	"Mined Bitcoin. ⛏",
	"Mined Ethereum. ⛏",
	"Mined ZenCash. ⛏",

	// Fake news.
	"Believed that Vitalik Buterin died in a car accident.",

	// Media.
	"Read a newspaper article about blockchain or cryptocurrency.",
	"Watched a TV news report about blockchain or cryptocurrency.",
	"Read a blog post about blockchain or cryptocurrency.",

	// Knowledge.
	"Know how a blockchain works.",
	"Know the difference between a soft fork and a hard fork.",
	"Read a blockchain or cryptocurrency whitepaper.",
	"Know the difference between a centralized and decentralized blockchain.",

	// Stance.
	"Believe that Bitcoin is the only true cryptocurrency.",
	"Believe that Bitcoin is obsolete.",
	"Supported Segregated Witness.",
	"Supported Bitcoin Unlimited.",
	"Supported the 2016 DAO hard fork.",
	"Support a Bitcoin mining algorithm change.",
	"Believe that governments should regulate cryptocurrency.",

	// Common behaviors.
	"Found cryptocurrency in a forgotten wallet.",
	"Bragged about how much money you made to someone.",
	"Paid taxes on your investment gains.",
	"Listed cryptocurrency assets in your will.",
	"Used an exchange as a private wallet.",
	"Sent cryptocurrency to the wrong address.",
	"Waited over 6 hours for a Bitcoin transaction to confirm.",
	"Argued with someone over which cryptocurrency was better.",
	"Spread FUD about competing cryptocurrency.",
	"Checked the price of your investments more than 10 times in one day.",

	// Uncommon actions.
	"Viewed porn involving cryptocurrency. 🍑",
	"Created art involving cryptocurrency. 🎨",
	"Had a dream about cryptocurrency. 🛏️",
	"Took out a loan to purchase cryptocurrency.",
	"Borrowed money from a family member to purchase cryptocurrency.",
	"Purchased cryptocurrency using a credit card.",
	"Participated in a cryptocurrency ponzi.",
	"Purchased porn using cryptocurrency.",
	"Referred to Bitcoin as \"Buttcoin\".",

	// Outreach.
	"Explained to someone what cryptocurrency is.",
	"Recommended cryptocurrency to a friend.",
	"Recommended cryptocurrency to family.",
	"Recommended a shitcoin to someone.",
	"Written a social media post about blockchain or cryptocurrency.",
	"Written a blog post about blockchain or cryptocurrency.",
	"Worn a blockchain / cryptocurrency logo in public.",
	"Purchased cryptocurrency on someone else's behalf.",

	// Community.
	"Attended a blockchain meetup group (IRL).",
	"Joined a blockchain / cryptocurrency chat room.",
	"Attended a blockchain / cryptocurrency conference.",
	"Subscribe to a blockchain / cryptocurrency newsletter.",
	"Followed a blockchain or cryptocurrency related Twitter account.",
	"Joined a blockchain or cryptocurrency related Facebook group.",

	// Usage.
	"Purchased something online using cryptocurrency. 💸",
	"Purchased something IRL using cryptocurrency. 💸",
	"Purchased something illegal using cryptocurrency. 👮",
	"Purchased something from a dark market using cryptocurrency. 👮",
	"Purchased something using a cryptocurrency backed debit card.",
	"Visited a dark market that accepts cryptocurrency. 👮",
	"Visited a store IRL that accepts cryptocurrency.",
	"Used a cryptocurrency ATM to withdrawal cash.",
	"Made a donation using cryptocurrency.",
	"Worked for payment in cryptocurrency.",
	"Played a video game that uses cryptocurrency.",
	"Sent a payment to someone in a different country in cryptocurrency.",

	// Predictions.
	"Believe that Vitalik Buterin will die of malnutrition.",
	"Believe that the market cap on Ethereum will exceed Bitcoin.",
	"Believe that cryptocurrency will become mainstream within the next 5 years.",
	"Believe that cryptocurrency will become mainstream within the next 10 years.",
	"Believe a decentralized internet based on blockchain will become mainstream.",

	// Misc.
	"Know the real identity of Satoshi Nakamoto.",
	"Know who hacked the DAO.",
	"Believe that Bitcoin should be reimplemented as an Ethereum ERC20 token.",
	"Believe that an \"editable blockchain\" is the future.",
	"Thought that cryptocurrency would disappear or was a fad.",
	"Own some blockchain or cryptocurrency swag.",
];

/**
 * Calculate the highest ID number for a phrase array.
 * @param {array} phraseArray An array of phrases.
 * @returns {number} The highest calculated ID number.
 */
export const phraseIdMax = function(phraseArray)
{
	let count = 0;
	for(let i = 0; i < phraseArray.length; ++i)
	{
		if(_.isString(phraseArray[i]))
			count += 1;
		else if(_.isArray(phraseArray[i]) && phraseArray[i].length === 2)
			count += phraseArray[i][1];
		else
			throw new Error(`Invalid phrase constant value at ${i} during phraseIdMax calculation.`);
	}
	return count;
};

/**
 * Returns a {string} phrase for the specified ID number.
 * @param {number} id The ID of the phrase.
 * @returns {string|null} Returns a string or null if the id was not available.
 */
export const getPhrase = function(id)
{
	let rangeMin = 0;
	let rangeMax = 0;
	let select = id % phraseIdMax(phrases);

	for(let i = 0; i < phrases.length; ++i)
	{
		let phrase = null;

		if(_.isString(phrases[i]))
		{
			phrase = phrases[i];
			rangeMax += 1;
		}
		else if(_.isArray(phrases[i]) && phrases[i].length === 2)
		{
			phrase = phrases[i][0];
			rangeMax += phrases[i][1];
		}

		if(select >= rangeMin && select < rangeMax)
			return phrase;
		else
			rangeMin = rangeMax;
	}

	return null;
};

/**
 * An array of available unused phrases. This array changes as phrases are selected.
 */
const phrasesAvailable = _.cloneDeep(phrases);

/* eslint-disable no-consistent-return */
/**
 * Returns a {string} phrase for the specified ID number, then removes that phrase from the phrasesAvailable array.
 * @param {number} id The ID of the phrase.
 * @returns {string} Returns a string.
 */
export const getUniquePhrase = function(id)
{
	const phrases = phrasesAvailable;
	const select = id % phraseIdMax(phrases);

	let rangeMin = 0;
	let rangeMax = 0;

	for(let i = 0; i < phrases.length; ++i)
	{
		let phrase = null;

		if(_.isString(phrases[i]))
		{
			phrase = phrases[i];
			rangeMax += 1;
		}
		else if(_.isArray(phrases[i]) && phrases[i].length === 2)
		{
			phrase = phrases[i][0];
			rangeMax += phrases[i][1];
		}

		if(select >= rangeMin && select < rangeMax)
		{
			phrasesAvailable.splice(i, 1);
			return phrase;
		}
		else
			rangeMin = rangeMax;
	}
};
/* eslint-enable no-consistent-return */
