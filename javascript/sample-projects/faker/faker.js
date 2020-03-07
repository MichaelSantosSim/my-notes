var faker = require('faker');
faker.locale = "pt_BR";

// args

let args = process.argv.slice(2, process.argv.length);
let nameList = [];

let firstCNPJ = 30;

for(let i = 1; i < 31; i++){
	let company = faker.company.companyName();
	let address = faker.address.streetSuffix() + ' ' + faker.address.state();
	nameList.push(`'${company}', '11.222.333.4444/${firstCNPJ++}', '${address}'`);
}

nameList = nameList.join('\n');

console.log(nameList);




/* help

+address
	-zipCode
	-city
	-cityPrefix
	-citySuffix
	-streetName
	-streetAddress
	-streetSuffix
	-streetPrefix
	-secondaryAddress
	-county
	-country
	-countryCode
	-state
	-stateAbbr
	-latitude
	-longitude
+commerce
	-color
	-department
	-productName
	-price
	-productAdjective
	-productMaterial
	-product
+company
	-suffixes
	-companyName
	-companySuffix
	-catchPhrase
	-bs
	-catchPhraseAdjective
	-catchPhraseDescriptor
	-catchPhraseNoun
	-bsAdjective
	-bsBuzz
	-bsNoun
+database
	-column
	-type
	-collation
	-engine
+date
	-past
	-future
	-between
	-recent
	-month
	-weekday
+fake
+finance
	-account
	-accountName
	-mask
	-amount
	-transactionType
	-currencyCode
	-currencyName
	-currencySymbol
	-bitcoinAddress
	-iban
	-bic
+hacker
	-abbreviation
	-adjective
	-noun
	-verb
	-ingverb
	-phrase
+helpers
	-randomize
	-slugify
	-replaceSymbolWithNumber
	-replaceSymbols
	-shuffle
	-mustache
	-createCard
	-contextualCard
	-userCard
	-createTransaction
	-image
	-image
	-avatar
	-imageUrl
	-abstract
	-animals
	-business
	-cats
	-city
	-food
	-nightlife
	-fashion
	-people
	-nature
	-sports
	-technics
	-transport
	-dataUri
+internet
	-avatar
	-email
	-exampleEmail
	-userName
	-protocol
	-url
	-domainName
	-domainSuffix
	-domainWord
	-ip
	-ipv6
	-userAgent
	-color
	-mac
	-password
+lorem
	-word
	-words
	-sentence
	-slug
	-sentences
	-paragraph
	-paragraphs
	-text
	-lines
+name
	-firstName
	-lastName
	-findName
	-jobTitle
	-prefix
	-suffix
	-title
	-jobDescriptor
	-jobArea
	-jobType
+phone
	-phoneNumber
	-phoneNumberFormat
	-phoneFormats
+random
	-number
	-arrayElement
	-objectElement
	-uuid
	-boolean
	-word
	-words
	-image
	-locale
	-alphaNumeric
+system
	-fileName
	-commonFileName
	-mimeType
	-commonFileType
	-commonFileExt
	-fileType
	-fileExt
	-directoryPath
	-filePath
	-semver
*/