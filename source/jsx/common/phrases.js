"use strict";

import * as _ from "lodash";

// In format {string} or {[{string}, {number}]}
export const phrases =
[
	"Invested in Bitcoin.",
	"Invested in Bitcoin Cash.",
	"Invested in Dash.",
	"Invested in DogeCoin.",
	"Invested in Ethereum.",
	"Invested in Ethereum Classic.",
	"Invested in Litecoin.",
	"Invested in NEM.",
	"Invested in Monero.",
	"Invested in IOTA.",
	"Invested in Ripple.",
	"Invested in Steem.",
	"Invested in Zcash.",
	"Invested in ZenCash.",
	"Bought Bitcoin under $1.",
	"Bought Bitcoin under $10.",
	"Bought Bitcoin under $100.",
	"Bought Bitcoin under $1000.",
	"Bought Ethereum under $1.",
	"Bought Ethereum under $10.",
	"Bought Ethereum under $100.",
	"Bought Ethereum under $200.",
	"Participated in the original Ethereum ICO.",
	"Participated in an ICO.",
	"Invested because of FOMO.",
	"Correctly called the bottom.",
	"Incorrectly called the bottom.",
	"Bought low and sold high.",
	"Bought high and sold low.",
	"HODLing since 2009.",
	"HODLing since 2010.",
	"HODLing since 2011.",
	"HODLing since 2012.",
	"HODLing since 2013.",
	"HODLing since 2014.",
	"HODLing since 2015.",
	"HODLing since 2016.",
	"HODLing since 2017.",
	"HODLed through the Bitcoin Cash fork.",
	"HODLed through the Ethereum Classic fork.",
	"Lost money in the 2013 PicoStocks hack.",
	"Lost money in the 2013 BIPS hack.",
	"Lost money in the 2013 Inputs.io hack.",
	"Lost money in the 2013 Blockchain.info hack.",
	"Lost money in the 2014 Mt. Gox. hack.",
	"Lost money in the 2014 CryptoRush hack.",
	"Lost money in the 2014 Flexcoin hack.",
	"Lost money in the 2014 Cryptsy hack.",
	"Lost money in the 2014 Mintpal hack.",
	"Lost money in the 2014 Blockchain.info hack.",
	"Lost money in the 2015 Cavirtex hack.",
	"Lost money in the 2015 Bitstamp hack.",
	"Lost money in the 2015 796 hack.",
	"Lost money in the 2015 Kipcoin hack.",
	"Lost money in the 2015 Exco.in hack.",
	"Lost money in the 2015 Bter hack.",
	"Lost money in the 2016 Bitstamp hack.",
	"Lost money in the 2016 Cointrader hack.",
	"Lost money in the 2016 ShapeShift hack.",
	"Lost money in the 2016 Gatecoin hack.",
	"Lost money in the 2016 Bitfinex hack.",
	"Lost money in an offline wallet hack.",
	"Lost money to a phisher.",
	"Lost money to a phisher pretending to be Vitalik Buterin.",
	"Lost your private keys.",
	"Lost money and cried about it.",
	"Attended a blockchain meetup group (IRL).",
	"Mined using CPUs. ⛏",
	"Mined using GPUs. ⛏",
	"Mined using ASICs. ⛏",
	"Purchased something using cryptocurrency. 💸",
	"Purchased something illegal using cryptocurrency. 👮",
	"Purchased something from a dark market using cryptocurrency. 👮",
	"Visited a dark market that accepts cryptocurrency. 👮",
	"Bragged about ",
	"Have a total portfolio return of more than 50%. 💰",
	"Have a total portfolio return of more than 100%. 💰",
	"Have a total portfolio return of more than 200%. 💰",
	"Have a total portfolio return of more than 300%. 💰",
	"Have a total portfolio return of more than 500%. 💰",
	"Have a total portfolio return of more than 1000%. 🤑",
	"Have a total portfolio return of more than 2000%. 🤑",
	"Have a total portfolio return of more than 3000%. 🤑",
	"Have a total portfolio return of more than 5000%. 🤑",
];

export const phraseIdMax = (function()
{
	let count = 0;
	for(let i = 0; i < phrases.length; ++i)
	{
		if(_.isString(phrases[i]))
			count += 1;
		else if(_.isArray(phrases[i]) && phrases[i].length === 2)
			count += phrases[i][1];
		else
			throw new Error(`Invalid phrase constant value at ${i} during phraseIdMax calculation.`);
	}
	return count;
})();

export const getPhrase = function(id)
{
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

		if(id >= rangeMin && id < rangeMax)
			return phrase;
		else
			rangeMin = rangeMax;
	}

	return null;
};