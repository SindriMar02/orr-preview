// ORR skartgripir — all copy, is + en.
// Every price, product name and fact below is lifted verbatim from orr.is
// (Shopify products.json + pages, read 2026-08-11) or the cited award source.
// Line quotes are Orr's own product copy. Nothing invented. No em-dashes.
//
// Catalogue snapshot 2026-08-11: 458 products live on orr.is.
// Collections: Rings 262 · Earrings 107 · Necklaces 87 · Men 39 · Engagement 19.
// Line ranges (EUR): Laus 30 frá 87 · Perla 29 frá 190 · Kúla 19 frá 80 ·
// Deliquescent 11 frá 62 · Hraun 6 frá 265 · Kinetic 5 frá 224.
// Award: Njarðarskjöldurinn 2016 (reykjavik.is frétt, 2017).

export const SITE = {
  brand: 'ORR',
  brandFull: 'Orr skartgripir',
  legal: 'Orr ehf',
  address: 'Skólavörðustígur 17b, 101 Reykjavík',
  street: 'Skólavörðustígur 17b',
  postal: '101',
  city: 'Reykjavík',
  phone: '787 6262',
  phoneTel: '+3547876262',
  email: 'orr@orr.is',
  instagram: 'orrbykjartan',
  instagramUrl: 'https://www.instagram.com/orrbykjartan/',
  facebookUrl: 'https://www.facebook.com/orrbyorr',
  designers: ['Kjartan Örn Kjartansson', 'Guðbjörg Bárðardóttir'],
  origin: 'https://orr.is',
  shopUrl: 'https://orr.is',
};

/* The five lines. Counts and from-prices computed from orr.is products.json
   2026-08-11; "quote" strings are Orr's own product copy, verbatim. */
const lines = [
  {
    id: 'laus',
    img: 'line-laus.webp',
    count: '30',
    from: '87',
    piece: 'Laus Yellow Gold & Quartz',
    handle: 'laus-yellow-gold-quartx',
    is: {
      name: 'Laus',
      claim: 'Steinninn er ekki festur',
      body: 'Laus þýðir það sem hann er. Steinninn situr ófestur í umgjörðinni og veltur til með hverri hreyfingu handarinnar. Fjórtán karata gull eða 925 silfur, kvars, rúbínar og zirkon.',
      quote: 'The stones roll around and rotate freely inside their settings and form a kind of a symphony when worn.',
      alt: 'Laus hálsmen úr 14 karata gulli með gulum kvars steini sem hreyfist laus í skálinni',
    },
    en: {
      name: 'Laus',
      claim: 'The stone is never fixed',
      body: 'Laus is Icelandic for loose, and it means exactly that. The stone sits unfixed in its setting and rolls with every movement of the hand. Fourteen carat gold or sterling silver, quartz, rubies and zircon.',
      quote: 'The stones roll around and rotate freely inside their settings and form a kind of a symphony when worn.',
      alt: 'Laus pendant in 14 carat gold, a yellow quartz stone sitting loose in its bowl',
    },
  },
  {
    id: 'hraun',
    img: 'line-hraun.webp',
    count: '6',
    from: '265',
    piece: 'Silver Hraun Ring with a Blue Spinnel',
    handle: 'silver-hraun-ring-with-a-blue-spinnel',
    is: {
      claim: 'Silfrið storknar eins og hraun',
      name: 'Hraun',
      body: 'Bráðið silfur fær að storkna með hrjúfri skorpu utan um steininn, eins og hraun um berg. Spinel, rúbínar og zirkon í handsmíðuðu sterling silfri.',
      quote: 'Handmade sterling silver ring with lab-created rubies in pink and purple.',
      alt: 'Hraun hringur úr sterling silfri, storknuð silfurskorpa heldur dökkbláum spinel',
    },
    en: {
      name: 'Hraun',
      claim: 'Silver sets like lava',
      body: 'Hraun is Icelandic for lava. Molten silver is left to set with a rough crust around the stone, the way lava sets around rock. Spinel, rubies and zircon in hand made sterling silver.',
      quote: 'Handmade sterling silver ring with lab-created rubies in pink and purple.',
      alt: 'Hraun ring in sterling silver, a set silver crust holding a dark blue spinel',
    },
  },
  {
    id: 'kinetic',
    img: 'line-kinetic.webp',
    count: '5',
    from: '224',
    piece: 'Kinetic Multi Coloured Pearl Earrings',
    handle: 'kinetic-multi-coloured-pearl-earrings',
    is: {
      name: 'Kinetic',
      claim: 'Perlurnar titra á fjöðrum',
      body: 'Náttúrulegar ferskvatnsperlur sitja á mjóum silfurörmum og titra við hvert skref. Verkið raðar sér upp á nýtt í hvert sinn sem það er borið.',
      quote: 'The kinetic silver pearl pendants are handmade in silver with high quality natural pearls.',
      alt: 'Kinetic eyrnalokkar, perlur í mörgum litum á mjóum silfurörmum',
    },
    en: {
      name: 'Kinetic',
      claim: 'Pearls quiver on wires',
      body: 'Natural freshwater pearls sit on thin silver arms and quiver with every step. The piece arranges itself anew each time it is worn.',
      quote: 'The kinetic silver pearl pendants are handmade in silver with high quality natural pearls.',
      alt: 'Kinetic earrings, multi coloured pearls on thin silver arms',
    },
  },
  {
    id: 'deliquescent',
    img: 'line-deliq.webp',
    count: '11',
    from: '62',
    piece: 'Deliquescent Silver Ring',
    handle: 'deliquescent-silver-ring',
    is: {
      name: 'Deliquescent',
      claim: 'Silfur á bráðnunarmörkum',
      body: 'Borðar og hlekkir með bráðinni áferð, engir tveir eins. Þunga hálsfestin er úr breiðum hlekkjum og má bera tvöfalda.',
      quote: 'No two links are the same.',
      alt: 'Deliquescent hringur, borðar úr silfri með bráðinni áferð mynda blóm',
    },
    en: {
      name: 'Deliquescent',
      claim: 'Silver at its melting point',
      body: 'Ribbons and links with a melted texture, no two the same. The heavy necklace is made of wide links and can be worn doubled.',
      quote: 'No two links are the same.',
      alt: 'Deliquescent ring, ribbons of melted textured silver forming a flower',
    },
  },
  {
    id: 'perla',
    img: 'line-perla.webp',
    count: '29',
    from: '190',
    piece: 'Perla Mix Braclet',
    handle: 'perla-mix-braclet',
    is: {
      name: 'Perla',
      claim: 'Perlur á sveigðum vír',
      body: 'Ferskvatnsperlur í hvítu, bleiku og gráu á sveigðum silfurvír sem fjaðrar um úlnliðinn. Óreglulegar barokkperlur fá að halda löguninni sinni.',
      quote: 'Handmade silver ring set with a cluster of organic, round and oval fresh-water pearls on top.',
      alt: 'Perla armband, ferskvatnsperlur á sveigðum fjaðrandi silfurvír',
    },
    en: {
      name: 'Perla',
      claim: 'Pearls on sprung wire',
      body: 'Freshwater pearls in white, pink and grey on curved silver wire that springs around the wrist. Irregular baroque pearls keep their own shape.',
      quote: 'Handmade silver ring set with a cluster of organic, round and oval fresh-water pearls on top.',
      alt: 'Perla bracelet, freshwater pearls on curved sprung silver wire',
    },
  },
];

/* The three states journey. */
const steps = [
  {
    key: 'bradid',
    n: '01',
    img: 'j-bradid.webp',
    is: {
      word: 'bráðið',
      title: 'Silfrið gefur eftir',
      body: 'Hraun og Deliquescent línurnar byrja í deiglunni. Silfrið er hitað þar til það rennur, og áferðin sem storknar er aldrei eins tvisvar. Engir tveir hlekkir eru eins, og enginn hringur á sér tvíbura.',
      alt: 'Hraun hringur úr sterling silfri með bleikum og rauðum rúbínum, stórmynd',
    },
    en: {
      word: 'molten',
      title: 'The silver gives',
      body: 'The Hraun and Deliquescent lines begin in the crucible. The silver is heated until it runs, and the texture that sets is never the same twice. No two links are alike, and no ring has a twin.',
      alt: 'Hraun ring in sterling silver with pink and red rubies, macro',
    },
  },
  {
    key: 'laust',
    n: '02',
    img: 'j-laust.webp',
    small: true,
    is: {
      word: 'laust',
      title: 'Steinninn fær að velta',
      body: 'Í Laus línunni er umgjörðin smíðuð utan um steininn án þess að festa hann. Hann veltur og snýst inni í skálinni, og skartgripurinn hljómar öðruvísi á hverri hendi.',
      alt: 'Laus hálsmen úr 14 karata gulli, gulur kvars steinn laus í gullskál',
    },
    en: {
      word: 'loose',
      title: 'The stone is left free',
      body: 'In the Laus line the setting is built around the stone without fixing it. It rolls and turns inside its bowl, and the piece sounds different on every hand.',
      alt: 'Laus pendant in 14 carat gold, a yellow quartz stone loose in a gold bowl',
    },
  },
  {
    key: 'kvikt',
    n: '03',
    img: 'j-kvikt.webp',
    is: {
      word: 'kvikt',
      title: 'Verkið ber sig sjálft',
      body: 'Kinetic og Perla verkin hreyfast með þeim sem ber þau. Perlur á mjóum örmum titra við hvert skref, og verkið raðar sér upp á nýtt í hvert sinn. Kviksilfur, í orðsins fyllstu merkingu.',
      alt: 'Kinetic eyrnalokkar með marglitum perlum á mjóum silfurörmum, stórmynd',
    },
    en: {
      word: 'alive',
      title: 'The piece carries itself',
      body: 'The Kinetic and Perla pieces move with the wearer. Pearls on thin arms quiver at every step, and the piece arranges itself anew each time. Quicksilver, in the word’s fullest sense.',
      alt: 'Kinetic earrings with multi coloured pearls on thin silver arms, macro',
    },
  },
];

/* Verkstæðið facts, all from orr.is or the cited award source. */
const facts = [
  {
    code: 'KÖK + GB',
    is: {
      who: 'Hönnun og handsmíði',
      body: 'Allir skartgripir Orr eru hannaðir og handsmíðaðir af Kjartani Erni Kjartanssyni og Guðbjörgu Bárðardóttur. Verslunin og verkstæðið eru eitt og sama rýmið á Skólavörðustíg 17b.',
    },
    en: {
      who: 'Design and making',
      body: 'All Orr jewellery is designed and hand made by Kjartan Örn Kjartansson and Guðbjörg Bárðardóttir. The shop and the workshop are one and the same room at Skólavörðustígur 17b.',
    },
  },
  {
    code: '2016',
    is: {
      who: 'Njarðarskjöldurinn',
      body: 'Orr hlaut Njarðarskjöldinn 2016, viðurkenningu Reykjavíkurborgar og Samtaka verslunar og þjónustu, sem ferðamannaverslun ársins.',
    },
    en: {
      who: 'The Njörður shield',
      body: 'Orr received the Njarðarskjöldur award for 2016, from the City of Reykjavík and the Icelandic Federation of Trade, as tourist shop of the year.',
    },
  },
  {
    code: '925 / 14K',
    is: {
      who: 'Efnin',
      body: 'Sterling silfur, 14 karata gull, hvítagull og platína. Náttúrulegar ferskvatnsperlur, spinel, kvars, onyx og rúbínar. Sérpantanir í öðrum stærðum og steinum eru alltaf í boði.',
    },
    en: {
      who: 'The materials',
      body: 'Sterling silver, 14 carat gold, white gold and platinum. Natural freshwater pearls, spinel, quartz, onyx and rubies. Custom sizes and stones are always available to order.',
    },
  },
];

/* Catalogue index, snapshot from orr.is products.json 2026-08-11.
   Prices are the store's own, in EUR (the shop's base currency).
   Every row links to the live product page on orr.is. */
const catalogue = [
  { g: true, is: 'Hringar', en: 'Rings' },
  { img: 'line-hraun.webp', handle: 'silver-hraun-ring-with-a-blue-spinnel', is: ['Silver Hraun Ring, blár spinel', '€265'], en: ['Silver Hraun Ring, blue spinel', '€265'], alt: { is: 'Hraun hringur með bláum spinel', en: 'Hraun ring with a blue spinel' } },
  { img: 'ar-klettur.webp', handle: 'klettur-silver-ring', is: ['Klettur Silver Ring', '€205'], en: ['Klettur Silver Ring', '€205'], alt: { is: 'Klettur hringur, höggvið silfur eins og klettur', en: 'Klettur ring, silver faceted like rock' } },
  { img: 'line-deliq.webp', handle: 'deliquescent-silver-ring', is: ['Deliquescent Silver Ring', '€195'], en: ['Deliquescent Silver Ring', '€195'], alt: { is: 'Deliquescent hringur með bráðinni áferð', en: 'Deliquescent ring with melted texture' } },
  { g: true, is: 'Trúlofun og brúðkaup', en: 'Engagement and weddings' },
  { img: 'cat-saga.webp', handle: 'saga', is: ['Saga Round Gold Engagement Rings', '€2.350'], en: ['Saga Round Gold Engagement Rings', '€2,350'], alt: { is: 'Saga trúlofunarhringar úr gulli', en: 'Saga engagement rings in gold' } },
  { img: 'cat-platina.webp', handle: 'platina', is: ['Slétt Platinum Engagement Rings', '€7.450'], en: ['Slétt Platinum Engagement Rings', '€7,450'], alt: { is: 'Sléttir trúlofunarhringar úr platínu', en: 'Smooth platinum engagement rings' } },
  { g: true, is: 'Hálsmen', en: 'Necklaces' },
  { img: 'j-laust.webp', handle: 'laus-yellow-gold-quartx', is: ['Laus Yellow Gold & Quartz', '€994'], en: ['Laus Yellow Gold & Quartz', '€994'], alt: { is: 'Laus hálsmen, gulur kvars í gullskál', en: 'Laus pendant, yellow quartz in a gold bowl' } },
  { img: 'cat-heavydeliq.webp', handle: 'heavy-deliquescent-silver-necklace', is: ['Heavy Deliquescent Silver Necklace', '€1.286'], en: ['Heavy Deliquescent Silver Necklace', '€1,286'], alt: { is: 'Þung Deliquescent hálsfesti úr breiðum silfurhlekkjum', en: 'Heavy Deliquescent necklace of wide silver links' } },
  { g: true, is: 'Eyrnalokkar', en: 'Earrings' },
  { img: 'line-kinetic.webp', handle: 'kinetic-multi-coloured-pearl-earrings', is: ['Kinetic Multi Coloured Pearl Earrings', '€265'], en: ['Kinetic Multi Coloured Pearl Earrings', '€265'], alt: { is: 'Kinetic eyrnalokkar með marglitum perlum', en: 'Kinetic earrings with multi coloured pearls' } },
  { img: 'ar-kula.webp', handle: 'kula-silver-earrings', is: ['Kúla Silver Earrings', '€80'], en: ['Kúla Silver Earrings', '€80'], alt: { is: 'Kúla eyrnalokkar úr silfurkúlum', en: 'Kúla earrings made of silver balls' } },
];

export const COPY = {
  is: {
    lang: 'is',
    dir: '/',
    other: { code: 'en', href: '/en/', label: 'EN' },
    title: 'Orr skartgripir | Skólavörðustígur 17b, Reykjavík',
    description:
      'Handsmíðaðir skartgripir eftir Kjartan Örn Kjartansson og Guðbjörgu Bárðardóttur. Lausir steinar, perlur á fjöðrum og silfur sem storknar eins og hraun. Verslun og verkstæði á Skólavörðustíg 17b.',
    skip: 'Fara beint í efni',
    nav: [
      { href: '#linurnar', label: 'Línurnar' },
      { href: '#hreyfingin', label: 'Hreyfingin' },
      { href: '#verkstaedid', label: 'Verkstæðið' },
      { href: '#urvalid', label: 'Úrvalið' },
    ],
    navCta: 'Heimsókn',
    loader: { top: '925', bottom: '14K', mid: 'skartgripir' },
    hero: {
      wordmark: 'ORR',
      standfirst: 'skart sem hreyfist',
      meta: ['Skólavörðustígur 17b, Reykjavík', 'hönnun og handsmíði'],
      alt: 'Hraun hringur úr sterling silfri, storknuð silfurskorpa um dökkbláan spinel',
    },
    thesis: {
      title: [{ c: 'SILFUR' }, { i: 'sem' }, { c: 'LIFNAR' }],
      body: 'Steinn sem situr laus í skál og veltur með hendinni. Perlur á mjóum örmum sem titra við hvert skref. Silfur sem fær að storkna eins og hraun. Skartgripir Orr eru ekki kyrrir hlutir, og hver einasti er hannaður og handsmíðaður á Skólavörðustíg 17b, þar sem verslunin og verkstæðið eru sama rýmið.',
      pull: 'The stones roll around and rotate freely inside their settings and form a kind of a symphony when worn.',
      pullSource: 'orr.is, um Laus línuna',
      cta: { label: 'Sjá línurnar', href: '#linurnar' },
    },
    heirlooms: {
      title: [{ c: 'FIMM' }, { i: 'línur, ein' }, { c: 'HREYFING' }],
      lead: 'Hver lína leysir sömu þraut á sinn hátt: hvernig heldur maður utan um stein án þess að stöðva hann.',
      items: lines.map((l) => ({
        id: l.id, img: l.img,
        year: `${l.count} verk`,
        moment: l.is.claim,
        title: l.is.name,
        body: l.is.body,
        price: `frá €${l.from}`,
        note: `dæmi: ${l.piece}`,
        alt: l.is.alt,
      })),
    },
    process: {
      title: [{ c: 'BRÁÐIÐ.' }, { i: 'laust.' }, { c: 'KVIKT.' }],
      lead: 'Þrjú ástönd sama málms.',
      steps: steps.map((s) => ({ key: s.key, n: s.n, img: s.img, small: !!s.small, ...s.is })),
      resolve: 'og silfrið er kvikt',
    },
    marks: {
      title: [{ c: 'VERSLUNIN' }, { i: 'er' }, { c: 'VERKSTÆÐIÐ' }],
      lead: 'Eitt rými á Skólavörðustíg 17b: vinnuborðið, deiglan og afgreiðsluborðið. Það sem er til í búðinni var smíðað nokkrum metrum frá hillunni sem það stendur á.',
      plateAlt: 'Perluhringur úr smiðju Orr, barokkperlur á silfurbaug',
      registerLabel: 'Staðreyndir',
      items: facts.map((f) => ({ code: f.code, who: f.is.who, body: f.is.body })),
      link: { label: 'Vefverslunin á orr.is', href: 'https://orr.is' },
    },
    story: {
      title: [{ c: 'ÚRVALIÐ' }, { i: 'í dag,' }, { c: 'Í TÖLUM' }],
      lead: 'Talning úr vefverslun Orr 11. ágúst 2026. Hver einasti gripur er handsmíðaður, og margir eru einstök verk sem koma aldrei aftur.',
      timeline: [
        { y: '458', t: 'skartgripir í vefversluninni í dag' },
        { y: '262', t: 'hringar, þar af 19 trúlofunar- og giftingarhringar' },
        { y: '107', t: 'eyrnalokkar og 87 hálsmen' },
        { y: '9', t: 'línur: Laus, Perla, Kúla, Ringul, Hlekkir, Klettur, Hraun, Deliquescent og Kinetic' },
        { y: '€40', t: 'ódýrasti gripurinn; sá dýrasti er €10.330' },
      ],
      quote: '„Orr is an exclusive collection of handmade designer jewellery by Kjartan Örn Kjartansson and Guðbjörg Bárðardóttir."',
      quoteBy: 'orr.is, um verslunina',
      archive: [
        { img: 'ar-kula.webp', is: 'Kúla eyrnalokkar, hringir úr silfurkúlum.', alt: 'Kúla eyrnalokkar, hringir settir saman úr hreinum silfurkúlum' },
        { img: 'ar-klettur.webp', is: 'Klettur hringur, höggvið silfur.', alt: 'Klettur hringur, silfur höggvið eins og klettur' },
        { img: 'ar-perla.webp', is: 'Perla armband, perlur á fjaðrandi vír.', alt: 'Perla armband, ferskvatnsperlur á sveigðum silfurvír' },
      ],
    },
    prices: {
      title: 'Úr vefversluninni',
      lead: 'Sýnishorn úr vefverslun Orr eins og hún stendur 11. ágúst 2026. Verð eru í evrum, grunngjaldmiðli verslunarinnar. Hver lína opnar gripinn á orr.is.',
      colItem: 'Gripur',
      colPrice: 'Verð',
      items: catalogue.map((p) => (p.g ? { group: p.is } : { img: p.img, name: p.is[0], price: p.is[1], alt: p.alt.is, href: `https://orr.is/products/${p.handle}` })),
      note: 'Úrvalið breytist stöðugt því mörg verk eru einstök. Sérpantanir í öðrum stærðum, litum og steinum: orr@orr.is.',
    },
    contact: {
      title: [{ c: 'KOMDU' }, { i: 'á' }, { c: 'SKÓLAVÖRÐUSTÍG' }],
      lead: 'Verslunin og verkstæðið eru opin alla daga vikunnar, um helgar styttra.',
      noticeLabel: 'Athugið',
      notice: 'Á sunnudögum er opið eftir hentugleika, eins og segir á orr.is.',
      rows: [
        { k: 'Heimilisfang', v: 'Skólavörðustígur 17b, 101 Reykjavík' },
        { k: 'Sími', v: '(+354) 787 6262', href: 'tel:+3547876262' },
        { k: 'Netfang', v: 'orr@orr.is', href: 'mailto:orr@orr.is' },
        { k: 'Opnunartími', v: 'Mán. til fös. 13 til 18, lau. 13 til 16' },
        { k: 'Instagram', v: '@orrbykjartan', href: 'https://www.instagram.com/orrbykjartan/' },
        { k: 'Facebook', v: 'orrbyorr', href: 'https://www.facebook.com/orrbyorr' },
      ],
      cta: { label: 'Senda póst', href: 'mailto:orr@orr.is' },
      cta2: { label: 'Hringja í 787 6262', href: 'tel:+3547876262' },
      shipping: 'Vefverslunin á orr.is sendir um allan heim.',
    },
    footer: {
      lines: ['Orr skartgripir', 'Skólavörðustígur 17b, 101 Reykjavík', 'Sími (+354) 787 6262'],
      years: 'hönnun og handsmíði: Kjartan Örn og Guðbjörg',
      credit: 'Hugmynd að endurhönnun. SNDR Studio.',
      note: 'Óopinber hugmyndavinna, ekki í eigu eða á vegum Orr ehf.',
    },
  },

  en: {
    lang: 'en',
    dir: '/en/',
    other: { code: 'is', href: '/', label: 'ÍS' },
    title: 'Orr jewellery | Skólavörðustígur 17b, Reykjavík',
    description:
      'Handmade designer jewellery by Kjartan Örn Kjartansson and Guðbjörg Bárðardóttir. Loose stones, pearls on sprung wire, and silver that sets like lava. Shop and workshop at Skólavörðustígur 17b, Reykjavík.',
    skip: 'Skip to content',
    nav: [
      { href: '#linurnar', label: 'The lines' },
      { href: '#hreyfingin', label: 'The motion' },
      { href: '#verkstaedid', label: 'The workshop' },
      { href: '#urvalid', label: 'The range' },
    ],
    navCta: 'Visit',
    loader: { top: '925', bottom: '14K', mid: 'jewellery' },
    hero: {
      wordmark: 'ORR',
      standfirst: 'jewellery that moves',
      meta: ['Skólavörðustígur 17b, Reykjavík', 'designed and hand made'],
      alt: 'Hraun ring in sterling silver, a set silver crust around a dark blue spinel',
    },
    thesis: {
      title: [{ c: 'SILVER,' }, { i: 'set in' }, { c: 'MOTION' }],
      body: 'A stone that sits loose in its bowl and rolls with the hand. Pearls on thin arms that quiver at every step. Silver left to set the way lava sets. Orr’s jewellery is not still, and every piece is designed and hand made at Skólavörðustígur 17b, where the shop and the workshop are the same room.',
      pull: 'The stones roll around and rotate freely inside their settings and form a kind of a symphony when worn.',
      pullSource: 'orr.is, on the Laus line',
      cta: { label: 'See the lines', href: '#linurnar' },
    },
    heirlooms: {
      title: [{ c: 'FIVE' }, { i: 'lines, one' }, { c: 'MOTION' }],
      lead: 'Each line solves the same problem its own way: how to hold a stone without stopping it.',
      items: lines.map((l) => ({
        id: l.id, img: l.img,
        year: `${l.count} pieces`,
        moment: l.en.claim,
        title: l.en.name,
        body: l.en.body,
        price: `from €${l.from}`,
        note: `for example: ${l.piece}`,
        alt: l.en.alt,
      })),
    },
    process: {
      title: [{ c: 'MOLTEN.' }, { i: 'loose.' }, { c: 'ALIVE.' }],
      lead: 'Three states of the same metal.',
      steps: steps.map((s) => ({ key: s.key, n: s.n, img: s.img, small: !!s.small, ...s.en })),
      resolve: 'and the silver is alive',
    },
    marks: {
      title: [{ c: 'THE SHOP' }, { i: 'is the' }, { c: 'WORKSHOP' }],
      lead: 'One room at Skólavörðustígur 17b: the bench, the crucible and the counter. What is in the shop was made a few metres from the shelf it stands on.',
      plateAlt: 'A pearl ring from the Orr workshop, baroque pearls on a silver band',
      registerLabel: 'The facts',
      items: facts.map((f) => ({ code: f.code, who: f.en.who, body: f.en.body })),
      link: { label: 'The web shop at orr.is', href: 'https://orr.is' },
    },
    story: {
      title: [{ c: 'THE RANGE' }, { i: 'today, in' }, { c: 'NUMBERS' }],
      lead: 'A count from Orr’s web shop, 11 August 2026. Every piece is hand made, and many are one-off works that never return.',
      timeline: [
        { y: '458', t: 'pieces in the web shop today' },
        { y: '262', t: 'rings, including 19 engagement and wedding rings' },
        { y: '107', t: 'pairs of earrings, and 87 necklaces' },
        { y: '9', t: 'lines: Laus, Perla, Kúla, Ringul, Hlekkir, Klettur, Hraun, Deliquescent and Kinetic' },
        { y: '€40', t: 'the least expensive piece; the most expensive is €10,330' },
      ],
      quote: '“Orr is an exclusive collection of handmade designer jewellery by Kjartan Örn Kjartansson and Guðbjörg Bárðardóttir.”',
      quoteBy: 'orr.is, about the shop',
      archive: [
        { img: 'ar-kula.webp', is: 'Kúla earrings, circles of silver balls.', alt: 'Kúla earrings, circles assembled from pure silver balls' },
        { img: 'ar-klettur.webp', is: 'Klettur ring, silver cut like rock.', alt: 'Klettur ring, silver faceted like rock' },
        { img: 'ar-perla.webp', is: 'Perla bracelet, pearls on sprung wire.', alt: 'Perla bracelet, freshwater pearls on curved silver wire' },
      ],
    },
    prices: {
      title: 'From the web shop',
      lead: 'A sample of Orr’s web shop as it stands on 11 August 2026. Prices are in euros, the shop’s base currency. Each row opens the piece on orr.is.',
      colItem: 'Piece',
      colPrice: 'Price',
      items: catalogue.map((p) => (p.g ? { group: p.en } : { img: p.img, name: p.en[0], price: p.en[1], alt: p.alt.en, href: `https://orr.is/products/${p.handle}` })),
      note: 'The range changes constantly because many works are one-offs. Custom sizes, colours and stones: orr@orr.is.',
    },
    contact: {
      title: [{ c: 'COME' }, { i: 'to' }, { c: 'SKÓLAVÖRÐUSTÍGUR' }],
      lead: 'The shop and workshop are open every day of the week, shorter at weekends.',
      noticeLabel: 'Please note',
      notice: 'On Sundays the shop opens by convenience, as orr.is puts it.',
      rows: [
        { k: 'Address', v: 'Skólavörðustígur 17b, 101 Reykjavík' },
        { k: 'Telephone', v: '(+354) 787 6262', href: 'tel:+3547876262' },
        { k: 'Email', v: 'orr@orr.is', href: 'mailto:orr@orr.is' },
        { k: 'Opening hours', v: 'Mon to Fri 13 to 18, Sat 13 to 16' },
        { k: 'Instagram', v: '@orrbykjartan', href: 'https://www.instagram.com/orrbykjartan/' },
        { k: 'Facebook', v: 'orrbyorr', href: 'https://www.facebook.com/orrbyorr' },
      ],
      cta: { label: 'Send an email', href: 'mailto:orr@orr.is' },
      cta2: { label: 'Call +354 787 6262', href: 'tel:+3547876262' },
      shipping: 'The web shop at orr.is ships worldwide.',
    },
    footer: {
      lines: ['Orr jewellery', 'Skólavörðustígur 17b, 101 Reykjavík', 'Telephone (+354) 787 6262'],
      years: 'designed and hand made by Kjartan Örn and Guðbjörg',
      credit: 'Redesign concept. SNDR Studio.',
      note: 'An unofficial concept, not owned by or affiliated with Orr ehf.',
    },
  },
};
