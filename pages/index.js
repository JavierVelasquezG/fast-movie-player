// Components
import Player from '../components/Player/Player'

const Play = ({ history }) => {
    const toy_story = [
        {
            id: 1,
            name: 'Ingles',
            parts: [
                'https://movies-pull.b-cdn.net/The.Secret.In.Their.Eyes.2009.1080p.BluRay.x264-%5BYTS.AM%5D.mp4'
            ]
        }
    ]

    const subtitles = [
        {
            id: 1,
            lang: 'english',
            name: 'Inglés',
            data: [
                {
                    id: 1,
                    start: 10.052,
                    end: 12.68,
                    text: 'The Secret in Their Eyes'
                },
                {
                    id: 2,
                    start: 127.294,
                    end: 131.048,
                    text: 'He ran to the end of the train<br />and watched as her figure, once gigantic,'
                },
                {
                    id: 3,
                    start: 131.173,
                    end: 134.635,
                    text: 'now shrank in his eyes, but grew<br />more than ever in his heart.'
                },
                {
                    id: 4,
                    start: 163.539,
                    end: 166.625,
                    text: 'On June 21st, 1974...'
                },
                {
                    id: 5,
                    start: 167.418,
                    end: 171.672,
                    text: 'Ricardo Morales had breakfast<br />with Liliana Colo to for the last time.'
                },
                {
                    id: 6,
                    start: 171.964,
                    end: 176.26,
                    text: "For the rest of his life he'd remember every<br />single detail of that morning."
                },
                {
                    id: 7,
                    start: 176.343,
                    end: 178.095,
                    text: 'Planning their first vacation...'
                },
                {
                    id: 8,
                    start: 178.262,
                    end: 181.515,
                    text: 'Drinking tea with lemon for<br />his nagging cough...'
                },
                {
                    id: 9,
                    start: 182.099,
                    end: 184.769,
                    text: 'with his usual lump and a half of sugar.'
                },
                {
                    id: 10,
                    start: 187.146,
                    end: 191.15,
                    text: 'The fresh berry jam he’d never taste again.'
                },
                {
                    id: 11,
                    start: 191.692,
                    end: 194.403,
                    text: 'The flowers printed on her nightgown...'
                },
                {
                    id: 12,
                    start: 194.987,
                    end: 197.49,
                    text: 'and especially, her smile.'
                },
                {
                    id: 13,
                    start: 198.282,
                    end: 200.493,
                    text: 'That smile like the sunrise...'
                },
                {
                    id: 14,
                    start: 200.951,
                    end: 205.081,
                    text: 'blending in with the<br />sunlight on her left cheek...'
                },
                {
                    id: 15,
                    start: 221.972,
                    end: 224.35,
                    text: "Please, don't..."
                },
                {
                    id: 16,
                    start: 224.809,
                    end: 227.978,
                    text: 'Please, please...'
                },
                { id: 17, start: 287.037, end: 289.081, text: 'I FEAR' },
                {
                    id: 18,
                    start: 310.227,
                    end: 312.48,
                    text: 'The gates of Heaven have opened.<br />An angel got out.'
                },
                {
                    id: 19,
                    start: 312.605,
                    end: 314.482,
                    text: 'Esposito...-Hey, baby.'
                },
                {
                    id: 20,
                    start: 317.026,
                    end: 318.819,
                    text: 'Look what the cat dragged in.'
                },
                {
                    id: 21,
                    start: 319.111,
                    end: 320.446,
                    text: 'How are you, Counselor?'
                },
                {
                    id: 22,
                    start: 320.613,
                    end: 322.531,
                    text: 'And you, Lieutenant? Is the boss here?'
                },
                {
                    id: 23,
                    start: 322.615,
                    end: 325.117,
                    text: 'Go right in, Your Honor.-Thanks, Reverend.'
                },
                {
                    id: 24,
                    start: 325.618,
                    end: 328.078,
                    text: 'You look good and rested.'
                },
                {
                    id: 25,
                    start: 329.246,
                    end: 331.415,
                    text: 'What a fucking asshole!'
                },
                {
                    id: 26,
                    start: 331.582,
                    end: 333.918,
                    text: 'Takes one to know one.'
                },
                {
                    id: 27,
                    start: 336.503,
                    end: 338.589,
                    text: 'The gates have opened.'
                },
                {
                    id: 28,
                    start: 347.264,
                    end: 348.557,
                    text: 'Your Highness.'
                },
                {
                    id: 29,
                    start: 349.808,
                    end: 351.602,
                    text: 'What a surprise!'
                },
                {
                    id: 30,
                    start: 353.437,
                    end: 355.689,
                    text: 'May I?-What brings you here?'
                },
                {
                    id: 31,
                    start: 356.941,
                    end: 360.569,
                    text: 'Just wanted to chat. You busy?'
                },
                {
                    id: 32,
                    start: 360.653,
                    end: 364.406,
                    text: 'Just preparing for a hearing.Coffee?'
                },
                {
                    id: 33,
                    start: 365.783,
                    end: 369.036,
                    text: "I'm asking in case<br />retirement made you healthy."
                },
                { id: 34, start: 369.286, end: 370.287, text: 'Mariano.' },
                {
                    id: 35,
                    start: 371.789,
                    end: 372.915,
                    text: 'Yes, Your Honor.'
                },
                {
                    id: 36,
                    start: 373.123,
                    end: 376.168,
                    text: 'Bring us two of those great<br />coffees from the cafe.'
                },
                {
                    id: 37,
                    start: 376.293,
                    end: 378.212,
                    text: "I'm typing a deposition."
                },
                {
                    id: 38,
                    start: 378.504,
                    end: 381.006,
                    text: 'A deposition? Meet Mr. Benjamin Esposito...'
                },
                {
                    id: 39,
                    start: 381.173,
                    end: 384.176,
                    text: 'Our recently retired royal honor is causa...'
                },
                {
                    id: 40,
                    start: 384.468,
                    end: 385.678,
                    text: 'and an old friend.'
                },
                {
                    id: 41,
                    start: 385.928,
                    end: 388.43,
                    text: 'Mariano, our spring-summer intern.'
                },
                { id: 42, start: 388.931, end: 390.432, text: 'Not bad, huh?' },
                {
                    id: 43,
                    start: 390.724,
                    end: 394.019,
                    text: 'Here, bring some petit four sand<br />get yourself a candy bar.'
                },
                {
                    id: 44,
                    start: 394.52,
                    end: 396.146,
                    text: "I'll take extra cream."
                },
                {
                    id: 45,
                    start: 397.147,
                    end: 398.983,
                    text: "That's right. You're not well."
                },
                {
                    id: 46,
                    start: 399.191,
                    end: 400.526,
                    text: 'What was your problem again?'
                },
                { id: 47, start: 400.651, end: 401.694, text: 'Old age?' },
                {
                    id: 48,
                    start: 402.736,
                    end: 405.322,
                    text: 'Extra cream for the man,<br />he has an age problem.'
                },
                { id: 49, start: 405.406, end: 406.407, text: "Yes, ma'am." },
                {
                    id: 50,
                    start: 406.49,
                    end: 408.701,
                    text: 'Wait. Is it important?'
                },
                { id: 51, start: 409.785, end: 411.662, text: 'No.' },
                {
                    id: 52,
                    start: 413.163,
                    end: 415.708,
                    text: 'Leave the door open, son.Come on, sit down.'
                },
                {
                    id: 53,
                    start: 416.834,
                    end: 419.003,
                    text: 'What do you know about writing novels?'
                },
                {
                    id: 54,
                    start: 419.169,
                    end: 423.799,
                    text: "I've been writing all my life.<br />Take a look in the archive."
                },
                {
                    id: 55,
                    start: 424.383,
                    end: 425.676,
                    text: 'Oh, the case files.'
                },
                {
                    id: 56,
                    start: 427.886,
                    end: 429.972,
                    text: 'How many pages will your file be?'
                },
                {
                    id: 57,
                    start: 430.389,
                    end: 431.849,
                    text: 'Does it have a cover?'
                },
                {
                    id: 58,
                    start: 432.141,
                    end: 434.977,
                    text: 'A little encouragement would be nice.'
                },
                {
                    id: 59,
                    start: 435.978,
                    end: 439.023,
                    text: 'What should I do? Act like<br />some unwanted retiree...'
                },
                {
                    id: 60,
                    start: 439.565,
                    end: 441.525,
                    text: 'Who wants to help out? Serve coffee?'
                },
                {
                    id: 61,
                    start: 443.193,
                    end: 445.195,
                    text: 'I want to write, so what?'
                },
                {
                    id: 62,
                    start: 446.53,
                    end: 448.866,
                    text: 'I want to write about the Morales case.'
                },
                {
                    id: 63,
                    start: 461.712,
                    end: 463.005,
                    text: "I don't know why."
                },
                {
                    id: 64,
                    start: 463.631,
                    end: 464.965,
                    text: "It's been on my mind."
                },
                {
                    id: 65,
                    start: 465.382,
                    end: 469.219,
                    text: 'We actually never talked about it.<br />Why is that?'
                },
                {
                    id: 66,
                    start: 473.682,
                    end: 476.477,
                    text: "With your handwriting, it'll be unreadable."
                },
                { id: 67, start: 478.103, end: 479.313, text: 'Wait, look.' },
                {
                    id: 68,
                    start: 480.564,
                    end: 484.234,
                    text: "My biggest problems<br />I've started 50 times..."
                },
                {
                    id: 69,
                    start: 484.401,
                    end: 486.07,
                    text: 'And never got past the fifth line.'
                },
                {
                    id: 70,
                    start: 486.612,
                    end: 490.032,
                    text: "At this rate, I'll spend<br />my whole pension fund..."
                },
                {
                    id: 71,
                    start: 490.157,
                    end: 492.409,
                    text: 'on spiral notebooks.'
                },
                {
                    id: 72,
                    start: 493.535,
                    end: 494.912,
                    text: 'Come here, give me a hand.'
                },
                { id: 73, start: 495.537, end: 496.705, text: 'Here, let me.' },
                { id: 74, start: 496.997, end: 499.208, text: "I can't..." },
                {
                    id: 75,
                    start: 502.127,
                    end: 503.462,
                    text: 'It weighs a ton.'
                },
                {
                    id: 76,
                    start: 507.424,
                    end: 509.76,
                    text: "I can't believe it. The old Olivetti."
                },
                {
                    id: 77,
                    start: 510.052,
                    end: 513.764,
                    text: "It was in storage.I think<br />it's 100 years old."
                },
                {
                    id: 78,
                    start: 514.264,
                    end: 516.1,
                    text: 'Think they fixed the "A"?'
                },
                {
                    id: 79,
                    start: 516.392,
                    end: 518.268,
                    text: 'The "A" is for pansies.'
                },
                {
                    id: 80,
                    start: 518.727,
                    end: 521.271,
                    text: 'Take it. Dinosaurs have to stick together.'
                },
                {
                    id: 81,
                    start: 524.775,
                    end: 526.61,
                    text: "Now I'm out of excuses."
                },
                {
                    id: 82,
                    start: 528.278,
                    end: 529.78,
                    text: "I'll have to write."
                },
                {
                    id: 83,
                    start: 530.781,
                    end: 532.449,
                    text: 'But where do I start?'
                },
                {
                    id: 84,
                    start: 533.117,
                    end: 534.993,
                    text: 'Wherever you remember the most.'
                },
                {
                    id: 85,
                    start: 535.119,
                    end: 538.956,
                    text: 'It was over 20 years ago.Which<br />part comes back most often?'
                },
                {
                    id: 86,
                    start: 539.79,
                    end: 542.418,
                    text: "That's the image you should start with."
                },
                {
                    id: 87,
                    start: 542.543,
                    end: 544.837,
                    text: 'Okay, boys. Your attention, please.'
                },
                {
                    id: 88,
                    start: 545.546,
                    end: 549.091,
                    text: 'This is your new boss,<br />fresh out of Harvard.'
                },
                {
                    id: 89,
                    start: 549.216,
                    end: 551.969,
                    text: 'Miss Irene Menendez Hastings.'
                },
                { id: 90, start: 552.261, end: 553.804, text: 'Hastings.' },
                {
                    id: 91,
                    start: 554.388,
                    end: 556.849,
                    text: 'It\'s pronounced "Hastings." It\'s Scottish.'
                },
                { id: 92, start: 557.099, end: 558.1, text: 'Sorry.' },
                { id: 93, start: 558.267, end: 559.309, text: 'Hastings.' },
                {
                    id: 94,
                    start: 559.476,
                    end: 561.311,
                    text: 'The new clerk.'
                },
                {
                    id: 95,
                    start: 561.478,
                    end: 563.439,
                    text: 'Your deputy, Benjamin Esposito.'
                },
                {
                    id: 96,
                    start: 565.816,
                    end: 567.776,
                    text: 'Actually I went to Cornellnot Harvard.'
                },
                {
                    id: 97,
                    start: 570.32,
                    end: 573.657,
                    text: 'Pablo Sandoval, deputy clerk...'
                },
                {
                    id: 98,
                    start: 573.824,
                    end: 574.992,
                    text: 'your humblest servant.'
                },
                { id: 99, start: 577.411, end: 578.412, text: 'Hey.' },
                { id: 100, start: 578.787, end: 579.788, text: 'Hey.' },
                {
                    id: 101,
                    start: 580.205,
                    end: 581.665,
                    text: 'Are you here?'
                },
                { id: 102, start: 584.126, end: 585.169, text: 'Yeah.' },
                { id: 103, start: 585.335, end: 586.92, text: 'No, I just...' },
                {
                    id: 104,
                    start: 587.671,
                    end: 590.174,
                    text: 'I remember plenty of beginnings'
                },
                {
                    id: 105,
                    start: 590.34,
                    end: 592.384,
                    text: "but I'm not sure..."
                },
                {
                    id: 106,
                    start: 593.469,
                    end: 595.471,
                    text: 'they have to do with the story.'
                },
                {
                    id: 107,
                    start: 595.929,
                    end: 598.891,
                    text: 'Then start at the beginning and<br />stop dwelling on it.'
                },
                {
                    id: 108,
                    start: 610.027,
                    end: 612.446,
                    text: 'Blood Bank, good morning.-Mr. Esposito.'
                },
                {
                    id: 109,
                    start: 612.571,
                    end: 615.741,
                    text: 'No, wrong number. The 25th called.<br />A homicide.'
                },
                {
                    id: 110,
                    start: 615.991,
                    end: 617.868,
                    text: "Court 18. It's their turn."
                },
                {
                    id: 111,
                    start: 617.993,
                    end: 619.536,
                    text: "They said it's rape and murder."
                },
                { id: 112, start: 619.703, end: 621.663, text: 'Court 18.' },
                {
                    id: 113,
                    start: 621.872,
                    end: 623.081,
                    text: 'Good morning.'
                },
                { id: 114, start: 624.124, end: 625.292, text: 'Hi, fellas.' },
                {
                    id: 115,
                    start: 625.375,
                    end: 626.376,
                    text: 'Good morning.'
                },
                {
                    id: 116,
                    start: 626.502,
                    end: 629.546,
                    text: "Ma'am, did a saint die this morning?"
                },
                { id: 117, start: 629.713, end: 630.714, text: 'Why?' },
                {
                    id: 118,
                    start: 631.048,
                    end: 633.675,
                    text: 'Because an angel in mourning just<br />walked in the door.'
                },
                { id: 119, start: 634.384, end: 635.552, text: 'Oh, no.' },
                {
                    id: 120,
                    start: 635.719,
                    end: 639.556,
                    text: "It's a trick we angels ha veto<br />look five pounds lighter."
                },
                {
                    id: 121,
                    start: 640.516,
                    end: 643.393,
                    text: 'Can you bring in the<br />Chavez file?-Of course.'
                },
                {
                    id: 122,
                    start: 649.566,
                    end: 651.151,
                    text: 'You smooth fucker.'
                },
                { id: 123, start: 652.361, end: 653.403, text: 'Why?' },
                { id: 124, start: 654.988, end: 656.073, text: 'Why?' },
                {
                    id: 125,
                    start: 656.657,
                    end: 660.41,
                    text: 'You have a compliment ready the moment she<br />walks in the door. How do you do it?'
                },
                {
                    id: 126,
                    start: 660.577,
                    end: 665.082,
                    text: "Well, I may dress like a toad, but<br />I'm actually Prince Charming."
                },
                {
                    id: 127,
                    start: 665.165,
                    end: 666.333,
                    text: 'Mr. Esposito.-What?'
                },
                {
                    id: 128,
                    start: 666.75,
                    end: 669.878,
                    text: 'Counselor Romano told them it was our turn.'
                },
                {
                    id: 129,
                    start: 670.045,
                    end: 671.171,
                    text: 'Counselor Romano?'
                },
                {
                    id: 130,
                    start: 671.255,
                    end: 673.882,
                    text: 'Tell him Sheriff Espositois<br />gonna fuck him up.'
                },
                {
                    id: 131,
                    start: 674.091,
                    end: 675.926,
                    text: 'Okay.-Come back here.'
                },
                {
                    id: 132,
                    start: 676.176,
                    end: 679.638,
                    text: 'Three hours thinking of what to<br />say, she opens the door and...'
                },
                { id: 133, start: 679.763, end: 680.931, text: 'I freeze up.' },
                {
                    id: 134,
                    start: 681.932,
                    end: 684.476,
                    text: "It's easier for me, I'm not in love."
                },
                {
                    id: 135,
                    start: 684.643,
                    end: 687.563,
                    text: 'Neither am I, moron.Go on.'
                },
                {
                    id: 136,
                    start: 689.439,
                    end: 693.569,
                    text: 'I want you to put the files on this side.<br />All together.'
                },
                {
                    id: 137,
                    start: 693.694,
                    end: 695.112,
                    text: "It's simple enough."
                },
                {
                    id: 138,
                    start: 695.237,
                    end: 698.115,
                    text: "Romano, what did you tell the Precinct?<br />It's your turn."
                },
                {
                    id: 139,
                    start: 698.782,
                    end: 702.16,
                    text: "We're alternating. We got another case.<br />What's the problem?"
                },
                {
                    id: 140,
                    start: 702.286,
                    end: 705.831,
                    text: 'A mini-mart robbery,<br />smart-ass.Alternating similar cases.'
                },
                {
                    id: 141,
                    start: 705.956,
                    end: 708.292,
                    text: 'Ask Judge Fortuna.'
                },
                {
                    id: 142,
                    start: 709.293,
                    end: 711.295,
                    text: 'I want a solution, not two problems'
                },
                {
                    id: 143,
                    start: 711.461,
                    end: 714.172,
                    text: 'Why is asking me a problem?'
                },
                {
                    id: 144,
                    start: 715.215,
                    end: 718.468,
                    text: "It's not that. It just seemed silly..."
                },
                {
                    id: 145,
                    start: 718.594,
                    end: 723.015,
                    text: 'To bother you with something trivial if<br />we can handle it ourselves.'
                },
                {
                    id: 146,
                    start: 723.181,
                    end: 727.144,
                    text: "Strictly speaking, it's your turn. And<br />hurry up, or you'll find a wake..."
                },
                {
                    id: 147,
                    start: 727.227,
                    end: 729.313,
                    text: 'instead of a crime scene.'
                },
                {
                    id: 148,
                    start: 733.817,
                    end: 734.902,
                    text: "What's up, Baez?"
                },
                {
                    id: 149,
                    start: 735.777,
                    end: 737.237,
                    text: 'Still here. And you?'
                },
                {
                    id: 150,
                    start: 737.362,
                    end: 738.78,
                    text: 'Tired of happiness'
                },
                {
                    id: 151,
                    start: 738.947,
                    end: 741.199,
                    text: 'You look happy.-As a dog with two tails.'
                },
                {
                    id: 152,
                    start: 741.366,
                    end: 745.203,
                    text: 'I just love it when that<br />moron sends me to see a dead girl.'
                },
                {
                    id: 153,
                    start: 745.829,
                    end: 747.414,
                    text: 'Morons are a dime a dozen.'
                },
                {
                    id: 154,
                    start: 747.581,
                    end: 750.918,
                    text: "Quiet, easy going ones who<br />know they're morons."
                },
                {
                    id: 155,
                    start: 751.543,
                    end: 754.171,
                    text: "Live and let live. They're<br />useless but harmless."
                },
                {
                    id: 156,
                    start: 754.338,
                    end: 756.84,
                    text: 'How are you, Inspector?-Just<br />talking about you.'
                },
                {
                    id: 157,
                    start: 757.007,
                    end: 759.009,
                    text: "Then there are morons who<br />think they're geniuses."
                },
                {
                    id: 158,
                    start: 759.259,
                    end: 762.179,
                    text: 'They shit everywhere and someone<br />has to wipe their asses.'
                },
                {
                    id: 159,
                    start: 762.804,
                    end: 765.182,
                    text: 'Of those morons I know not one, but two.'
                },
                {
                    id: 160,
                    start: 765.265,
                    end: 768.06,
                    text: "That judge and my buddy at Court<br />18,who's either a moron..."
                },
                {
                    id: 161,
                    start: 768.185,
                    end: 770.687,
                    text: 'a son of a bitch, or both.'
                },
                {
                    id: 162,
                    start: 771.313,
                    end: 775.275,
                    text: "It was his turn, so I'm<br />asking you to tell the judge."
                },
                {
                    id: 163,
                    start: 775.776,
                    end: 779.071,
                    text: 'Tell him I have nothing to do with...'
                },
                {
                    id: 164,
                    start: 807.391,
                    end: 810.936,
                    text: 'Liliana Colo to... age<br />23, schoolteacher.'
                },
                {
                    id: 165,
                    start: 811.728,
                    end: 813.939,
                    text: 'Recently married to...'
                },
                {
                    id: 166,
                    start: 815.148,
                    end: 817.734,
                    text: 'Ricardo Morales... bank clerk.'
                },
                {
                    id: 167,
                    start: 867.117,
                    end: 868.326,
                    text: 'The old lady mentioned...'
                },
                {
                    id: 168,
                    start: 868.452,
                    end: 872.205,
                    text: 'two builders working on the<br />terrace in number 3...'
                },
                {
                    id: 169,
                    start: 872.622,
                    end: 875.792,
                    text: "but they haven't shown in<br />two days because of rain."
                },
                {
                    id: 170,
                    start: 875.917,
                    end: 877.919,
                    text: "Sure she didn't see them?-She says no."
                },
                {
                    id: 171,
                    start: 878.754,
                    end: 880.255,
                    text: "I'll go see the husband."
                },
                {
                    id: 172,
                    start: 880.338,
                    end: 883.049,
                    text: "See you later, Esposito.-I'll go with you."
                },
                {
                    id: 173,
                    start: 899.649,
                    end: 900.984,
                    text: 'Good afternoon.'
                },
                {
                    id: 174,
                    start: 901.568,
                    end: 903.153,
                    text: 'Ricardo Morales?'
                },
                {
                    id: 175,
                    start: 905.322,
                    end: 907.282,
                    text: "Ricardo Morales?-Yes, that's me."
                },
                {
                    id: 176,
                    start: 907.407,
                    end: 909.826,
                    text: 'Inspector Baez, Federal Police.'
                },
                {
                    id: 177,
                    start: 914.164,
                    end: 916.625,
                    text: 'Anyone else have a key to your home?'
                },
                {
                    id: 178,
                    start: 919.961,
                    end: 923.089,
                    text: 'See any strangers around the last few days?'
                },
                {
                    id: 179,
                    start: 930.388,
                    end: 934.017,
                    text: 'The neighbor said you came<br />home every day at lunchtime.'
                },
                {
                    id: 180,
                    start: 936.269,
                    end: 939.356,
                    text: "Out of the way, isn't it?<br />Any reason in particular?"
                },
                {
                    id: 181,
                    start: 944.444,
                    end: 946.071,
                    text: "Sorry, I didn't get that."
                },
                {
                    id: 182,
                    start: 950.534,
                    end: 954.621,
                    text: 'We had a habit, a routine.'
                },
                {
                    id: 183,
                    start: 956.873,
                    end: 960.085,
                    text: 'We liked watching The<br />Three Stooges together.'
                },
                { id: 184, start: 960.877, end: 962.337, text: "She'd laugh." },
                {
                    id: 185,
                    start: 963.296,
                    end: 965.173,
                    text: 'She thought they were funny.'
                },
                {
                    id: 186,
                    start: 967.884,
                    end: 971.054,
                    text: "You'll have to come with me to the morgue."
                },
                {
                    id: 187,
                    start: 971.179,
                    end: 975.976,
                    text: "We ask you to do the best you<br />can, I know it's an unpleasant..."
                },
                { id: 188, start: 977.06, end: 978.562, text: 'formality.' },
                {
                    id: 189,
                    start: 988.154,
                    end: 992.158,
                    text: 'Morales could start to<br />contemplate his own future.'
                },
                {
                    id: 190,
                    start: 992.284,
                    end: 995.537,
                    text: 'He would find, no doubt, that<br />his future was full of nothing.'
                },
                {
                    id: 191,
                    start: 996.329,
                    end: 998.915,
                    text: "What's wrong with this typewriter?"
                },
                {
                    id: 192,
                    start: 999.291,
                    end: 1002.294,
                    text: "Could you please get rid of it?<br />I can't take it anymore."
                },
                {
                    id: 193,
                    start: 1002.419,
                    end: 1005.13,
                    text: 'Who will want it?-Just<br />get it out of my sight.'
                },
                {
                    id: 194,
                    start: 1005.672,
                    end: 1009.426,
                    text: 'Okay, Benja.See if you like this.'
                },
                {
                    id: 195,
                    start: 1009.926,
                    end: 1011.511,
                    text: '"With this statement...'
                },
                {
                    id: 196,
                    start: 1011.887,
                    end: 1015.182,
                    text: 'I, Criminal Judge Raimundo<br />Fortuna Lacalle...'
                },
                {
                    id: 197,
                    start: 1015.348,
                    end: 1017.475,
                    text: 'hereby declare myself completely insane...'
                },
                {
                    id: 198,
                    start: 1017.601,
                    end: 1019.519,
                    text: 'and incapable of carrying out my functions."'
                },
                {
                    id: 199,
                    start: 1019.811,
                    end: 1021.479,
                    text: "That's wrong."
                },
                {
                    id: 200,
                    start: 1021.605,
                    end: 1023.857,
                    text: "That's not right. Give it here."
                },
                {
                    id: 201,
                    start: 1027.986,
                    end: 1029.029,
                    text: 'No, it goes like this.'
                },
                {
                    id: 202,
                    start: 1029.613,
                    end: 1031.573,
                    text: '"Pursuant to articles 141...'
                },
                {
                    id: 203,
                    start: 1031.781,
                    end: 1034.451,
                    text: '142 and 143 of Civil Law...'
                },
                {
                    id: 204,
                    start: 1034.993,
                    end: 1036.62,
                    text: 'MY RULING - in capital letters'
                },
                {
                    id: 205,
                    start: 1037.287,
                    end: 1039.372,
                    text: 'is that Raimundo Fortuna Lacalle...'
                },
                {
                    id: 206,
                    start: 1039.497,
                    end: 1043.001,
                    text: 'Is mentally ill,<br />legally-speaking, insane...'
                },
                {
                    id: 207,
                    start: 1043.126,
                    end: 1046.922,
                    text: 'suffering from chronic delirium...'
                },
                {
                    id: 208,
                    start: 1047.297,
                    end: 1051.76,
                    text: 'and is therefore unable to carry<br />out his functions as a civil servant."'
                },
                {
                    id: 209,
                    start: 1054.471,
                    end: 1055.552,
                    text: 'How are things, Your Honor?'
                },
                {
                    id: 210,
                    start: 1056.306,
                    end: 1057.474,
                    text: 'Plenty of signatures?'
                },
                {
                    id: 211,
                    start: 1057.849,
                    end: 1059.893,
                    text: 'Yes. We have the Nicolosi case.'
                },
                {
                    id: 212,
                    start: 1060.101,
                    end: 1061.478,
                    text: 'No big deal, Your Honor.'
                },
                {
                    id: 213,
                    start: 1062.145,
                    end: 1064.814,
                    text: 'Witness statements, nothing more.'
                },
                { id: 214, start: 1064.981, end: 1066.149, text: 'Very good.' },
                {
                    id: 215,
                    start: 1066.983,
                    end: 1069.653,
                    text: "Sorry, there's one file left, Your Honor."
                },
                { id: 216, start: 1070.695, end: 1071.863, text: 'Thank you.' },
                {
                    id: 217,
                    start: 1074.574,
                    end: 1075.825,
                    text: 'Hello, Your Honor.'
                },
                {
                    id: 218,
                    start: 1076.117,
                    end: 1077.327,
                    text: 'How are you?-Fine, you?'
                },
                {
                    id: 219,
                    start: 1077.452,
                    end: 1079.079,
                    text: 'Great. Benjamin. Pablo.'
                },
                {
                    id: 220,
                    start: 1079.955,
                    end: 1081.331,
                    text: "Ma'am.-Hello."
                },
                {
                    id: 221,
                    start: 1081.456,
                    end: 1085.377,
                    text: 'Benjamin, just to show you Court<br />18is acting in good faith...'
                },
                {
                    id: 222,
                    start: 1085.669,
                    end: 1088.964,
                    text: 'remember you were upset the<br />other day over getting a case?'
                },
                {
                    id: 223,
                    start: 1090.173,
                    end: 1092.092,
                    text: 'Well, the case has been solved.'
                },
                {
                    id: 224,
                    start: 1093.343,
                    end: 1096.012,
                    text: 'Two builders working in number 3.'
                },
                {
                    id: 225,
                    start: 1096.346,
                    end: 1098.014,
                    text: "They're under arrest in the 25th."
                },
                {
                    id: 226,
                    start: 1098.223,
                    end: 1101.226,
                    text: 'Whenever you have a chance,<br />you can bring them in...'
                },
                {
                    id: 227,
                    start: 1101.393,
                    end: 1102.727,
                    text: 'and question them.-Hold on.'
                },
                {
                    id: 228,
                    start: 1102.852,
                    end: 1105.021,
                    text: 'What builders?-Their names are...'
                },
                {
                    id: 229,
                    start: 1106.272,
                    end: 1108.358,
                    text: 'Jacinto Caceres, Bolivian...'
                },
                {
                    id: 230,
                    start: 1108.483,
                    end: 1111.611,
                    text: '35 years of age.Juan Robles, 34.'
                },
                {
                    id: 231,
                    start: 1111.82,
                    end: 1113.488,
                    text: "At least he's Argentinean."
                },
                {
                    id: 232,
                    start: 1113.655,
                    end: 1115.156,
                    text: "I'm blown away, Romano."
                },
                {
                    id: 233,
                    start: 1115.323,
                    end: 1118.618,
                    text: "Keep this up and I'll give<br />Court 18all the hard cases."
                },
                {
                    id: 234,
                    start: 1118.785,
                    end: 1120.87,
                    text: 'Bad news for you, son.-Please, sir.'
                },
                {
                    id: 235,
                    start: 1121.037,
                    end: 1122.872,
                    text: 'Always happy to help out.'
                },
                {
                    id: 236,
                    start: 1127.794,
                    end: 1129.212,
                    text: 'Esposito, how are you?'
                },
                {
                    id: 237,
                    start: 1129.713,
                    end: 1130.964,
                    text: 'Romano warn you I was coming?'
                },
                {
                    id: 238,
                    start: 1131.089,
                    end: 1133.383,
                    text: 'I was typing the report.'
                },
                {
                    id: 239,
                    start: 1133.55,
                    end: 1134.884,
                    text: "You'll get the guys tomorrow."
                },
                {
                    id: 240,
                    start: 1135.218,
                    end: 1138.304,
                    text: 'It was them, they signed a<br />confession.-Let me see them.'
                },
                {
                    id: 241,
                    start: 1138.513,
                    end: 1140.598,
                    text: 'Monday at the latest.-Let me in.'
                },
                {
                    id: 242,
                    start: 1140.765,
                    end: 1142.434,
                    text: 'Sergeant Sicora has to authorize it.'
                },
                {
                    id: 243,
                    start: 1142.559,
                    end: 1145.228,
                    text: 'Sicora is about to eat a plate full of shit.'
                },
                {
                    id: 244,
                    start: 1145.437,
                    end: 1147.397,
                    text: 'You wanna join him? Go right ahead.'
                },
                {
                    id: 245,
                    start: 1147.605,
                    end: 1149.899,
                    text: 'Two for the price of one.'
                },
                { id: 246, start: 1150.9, end: 1152.11, text: 'Well?' },
                {
                    id: 247,
                    start: 1163.747,
                    end: 1164.956,
                    text: 'Are you Caceres?'
                },
                {
                    id: 248,
                    start: 1167.083,
                    end: 1168.918,
                    text: "No, I'm Robles."
                },
                {
                    id: 249,
                    start: 1169.753,
                    end: 1171.129,
                    text: "He's Caceres."
                },
                { id: 250, start: 1179.971, end: 1181.139, text: 'Caceres.' },
                { id: 251, start: 1184.934, end: 1186.269, text: "It's okay." },
                {
                    id: 252,
                    start: 1197.739,
                    end: 1200.492,
                    text: 'You stupid son of a bitch!'
                },
                {
                    id: 253,
                    start: 1200.784,
                    end: 1202.952,
                    text: 'Are you fucking sick or what?'
                },
                {
                    id: 254,
                    start: 1203.119,
                    end: 1205.455,
                    text: 'You arrested two nobodies! Nobodies!'
                },
                {
                    id: 255,
                    start: 1205.58,
                    end: 1207.791,
                    text: "They weren't even there!-Let them go!"
                },
                {
                    id: 256,
                    start: 1207.957,
                    end: 1209.334,
                    text: 'What do I care?'
                },
                {
                    id: 257,
                    start: 1209.542,
                    end: 1212.67,
                    text: "You ordered it beat out of them!<br />Know where I'm going?"
                },
                {
                    id: 258,
                    start: 1212.837,
                    end: 1214.297,
                    text: "To file a complaint! We'll see..."
                },
                {
                    id: 259,
                    start: 1214.464,
                    end: 1215.757,
                    text: 'who saves your ass this time!'
                },
                {
                    id: 260,
                    start: 1218.093,
                    end: 1220.47,
                    text: "Fuck your complaint!-Don't worry..."
                },
                {
                    id: 261,
                    start: 1220.637,
                    end: 1221.721,
                    text: "you're going to."
                },
                {
                    id: 262,
                    start: 1221.971,
                    end: 1224.599,
                    text: 'All this fuss over two lousy rednecks!'
                },
                {
                    id: 263,
                    start: 1225.683,
                    end: 1228.603,
                    text: "Your face will be red when I'm done with it!"
                },
                {
                    id: 264,
                    start: 1228.77,
                    end: 1231.523,
                    text: 'Knock it off!-You better<br />check the want ads'
                },
                {
                    id: 265,
                    start: 1231.648,
                    end: 1234.609,
                    text: "You'll never set foot in here again!"
                },
                { id: 266, start: 1234.734, end: 1235.777, text: 'Come on.' },
                {
                    id: 267,
                    start: 1235.902,
                    end: 1239.197,
                    text: "You don't know who you're fucking with!<br />You have no idea!"
                },
                { id: 268, start: 1239.656, end: 1240.657, text: 'Benjamin.' },
                {
                    id: 269,
                    start: 1241.032,
                    end: 1243.576,
                    text: "Benjamin.-It's okay."
                },
                {
                    id: 270,
                    start: 1243.993,
                    end: 1247.872,
                    text: "I'm going to file a<br />complaint.I'll be right back."
                },
                {
                    id: 271,
                    start: 1250.041,
                    end: 1252.252,
                    text: "Fine by me.-I'll be right back."
                },
                {
                    id: 272,
                    start: 1252.502,
                    end: 1254.254,
                    text: "Don't worry, I'll be right back."
                },
                {
                    id: 273,
                    start: 1255.171,
                    end: 1256.881,
                    text: 'Did you see Sandoval?-He left.'
                },
                {
                    id: 274,
                    start: 1257.09,
                    end: 1259.676,
                    text: 'Where? Down Talcahuano.'
                },
                {
                    id: 275,
                    start: 1268.768,
                    end: 1272.522,
                    text: 'How can you defend this<br />demagogue president of ours?'
                },
                {
                    id: 276,
                    start: 1273.022,
                    end: 1275.859,
                    text: "Watch what you say,<br />you'll get into trouble."
                },
                {
                    id: 277,
                    start: 1276.276,
                    end: 1278.528,
                    text: 'Attention, everybody, please.'
                },
                {
                    id: 278,
                    start: 1279.028,
                    end: 1282.699,
                    text: 'Chief Justice Benjamin<br />Esposito just walked in the door.'
                },
                {
                    id: 279,
                    start: 1283.283,
                    end: 1285.702,
                    text: 'Hail, Your Honor.'
                },
                {
                    id: 280,
                    start: 1285.869,
                    end: 1287.912,
                    text: 'How much does he owe?-Nothing.'
                },
                {
                    id: 281,
                    start: 1288.037,
                    end: 1290.957,
                    text: 'I pay for my own drinks, you know that.'
                },
                {
                    id: 282,
                    start: 1291.291,
                    end: 1293.71,
                    text: "Besides, it's early.What's the big deal?"
                },
                {
                    id: 283,
                    start: 1295.044,
                    end: 1297.297,
                    text: "I'll pay for it, here I go."
                },
                {
                    id: 284,
                    start: 1299.716,
                    end: 1301.259,
                    text: 'No, no.-Take it.'
                },
                {
                    id: 285,
                    start: 1301.384,
                    end: 1303.386,
                    text: "I have money.-It's paid for."
                },
                {
                    id: 286,
                    start: 1303.553,
                    end: 1304.888,
                    text: 'Fine. In that case...'
                },
                {
                    id: 287,
                    start: 1305.054,
                    end: 1307.974,
                    text: 'Mr. Esposito can buy everybody a round.'
                },
                {
                    id: 288,
                    start: 1308.099,
                    end: 1310.31,
                    text: 'Thanks.-No, no.'
                },
                {
                    id: 289,
                    start: 1311.394,
                    end: 1315.44,
                    text: "Hands off, hands off.You're<br />not my boss in here."
                },
                {
                    id: 290,
                    start: 1315.732,
                    end: 1318.735,
                    text: "Don't embarrass me in front<br />of my friends, got it?"
                },
                {
                    id: 291,
                    start: 1318.902,
                    end: 1322.655,
                    text: "I'll never spot you money again.Why<br />do you keep screwing around?"
                },
                {
                    id: 292,
                    start: 1322.822,
                    end: 1326.159,
                    text: "Okay, okay, let's go.<br />Slowly, everything's fine."
                },
                {
                    id: 293,
                    start: 1326.493,
                    end: 1328.745,
                    text: "We're leaving.-Come on."
                },
                {
                    id: 294,
                    start: 1328.953,
                    end: 1331.08,
                    text: "I'm going.-See you later."
                },
                {
                    id: 295,
                    start: 1331.414,
                    end: 1333.75,
                    text: 'Here we go. Goodbye.'
                },
                {
                    id: 296,
                    start: 1334.042,
                    end: 1335.919,
                    text: "My jacket.-I've got it."
                },
                {
                    id: 297,
                    start: 1339.506,
                    end: 1341.716,
                    text: 'See you, Emilio.-Bye.'
                },
                {
                    id: 298,
                    start: 1341.925,
                    end: 1344.636,
                    text: "You're his wife and this is his home."
                },
                {
                    id: 299,
                    start: 1344.761,
                    end: 1348.223,
                    text: "You bring him at this hour, I<br />don't know where he's been..."
                },
                {
                    id: 300,
                    start: 1348.348,
                    end: 1349.641,
                    text: "It's early.You should thank me."
                },
                {
                    id: 301,
                    start: 1349.766,
                    end: 1353.811,
                    text: "You can't drop him off like this.<br />It's your problem."
                },
                {
                    id: 302,
                    start: 1353.937,
                    end: 1354.938,
                    text: 'My problem?'
                },
                {
                    id: 303,
                    start: 1355.021,
                    end: 1357.982,
                    text: "You brought him like<br />this.-You mean it's my fault?"
                },
                {
                    id: 304,
                    start: 1396.062,
                    end: 1398.815,
                    text: 'Who is it?-Benjamin Esposito.'
                },
                {
                    id: 305,
                    start: 1399.107,
                    end: 1401.943,
                    text: 'Who? From the courts, remember?'
                },
                {
                    id: 306,
                    start: 1409.409,
                    end: 1410.743,
                    text: "Pretty, wasn't she?"
                },
                { id: 307, start: 1410.827, end: 1412.036, text: 'Very.' },
                {
                    id: 308,
                    start: 1412.996,
                    end: 1415.164,
                    text: 'I really am sorry for those guys.'
                },
                {
                    id: 309,
                    start: 1415.498,
                    end: 1417.834,
                    text: 'They should be getting out by now.'
                },
                {
                    id: 310,
                    start: 1418.001,
                    end: 1420.336,
                    text: 'They had to be checked by forensics'
                },
                {
                    id: 311,
                    start: 1420.837,
                    end: 1422.63,
                    text: 'for that lawsuit I mentioned.'
                },
                {
                    id: 312,
                    start: 1422.714,
                    end: 1426.509,
                    text: 'No, keep looking. That way you’ll<br />get to know her better.'
                },
                {
                    id: 313,
                    start: 1427.677,
                    end: 1429.178,
                    text: "Here's another album."
                },
                {
                    id: 314,
                    start: 1430.388,
                    end: 1432.682,
                    text: 'I look at her pictures all day long.'
                },
                {
                    id: 315,
                    start: 1435.268,
                    end: 1437.312,
                    text: "I know I'm in denial, but..."
                },
                {
                    id: 316,
                    start: 1438.021,
                    end: 1440.732,
                    text: 'it helps me go on until we find the guy.'
                },
                {
                    id: 317,
                    start: 1442.025,
                    end: 1443.776,
                    text: "That's when she graduated."
                },
                {
                    id: 318,
                    start: 1444.152,
                    end: 1447.739,
                    text: 'Then she came from Chivilcoy and<br />moved in with her aunt.'
                },
                {
                    id: 319,
                    start: 1448.406,
                    end: 1450.199,
                    text: 'She worked in a school in Almagro...'
                },
                {
                    id: 320,
                    start: 1450.366,
                    end: 1451.492,
                    text: "that's how we met."
                },
                {
                    id: 321,
                    start: 1451.743,
                    end: 1454.37,
                    text: 'She used to pay her bills at the bank.'
                },
                {
                    id: 322,
                    start: 1455.622,
                    end: 1457.79,
                    text: "I still don't know where<br />I got the courage..."
                },
                {
                    id: 323,
                    start: 1457.915,
                    end: 1459.959,
                    text: 'to talk to such a beautiful girl.'
                },
                {
                    id: 324,
                    start: 1465.214,
                    end: 1466.424,
                    text: 'Tell me one thing.'
                },
                {
                    id: 325,
                    start: 1467.05,
                    end: 1469.177,
                    text: 'When we get this guy...'
                },
                {
                    id: 326,
                    start: 1470.094,
                    end: 1471.721,
                    text: 'what will he get?'
                },
                {
                    id: 327,
                    start: 1475.391,
                    end: 1478.227,
                    text: "Rape and homicide. He'll get life."
                },
                {
                    id: 328,
                    start: 1479.52,
                    end: 1482.023,
                    text: "We don't have the death penalty."
                },
                {
                    id: 329,
                    start: 1482.231,
                    end: 1484.15,
                    text: "I don't agree with the death penalty."
                },
                {
                    id: 330,
                    start: 1486.819,
                    end: 1489.405,
                    text: 'Me neither. I thought maybe...'
                },
                {
                    id: 331,
                    start: 1489.572,
                    end: 1492.075,
                    text: 'for you it could serve as retribution.'
                },
                {
                    id: 332,
                    start: 1492.241,
                    end: 1493.409,
                    text: 'Retribution?'
                },
                {
                    id: 333,
                    start: 1493.785,
                    end: 1496.204,
                    text: 'Will they rape him and beat him to death?'
                },
                {
                    id: 334,
                    start: 1496.871,
                    end: 1501.25,
                    text: "No, they'll give him an injection and<br />he'll take a nap. It's not fair."
                },
                {
                    id: 335,
                    start: 1502.71,
                    end: 1504.212,
                    text: "I'd gladly trade places with him."
                },
                {
                    id: 336,
                    start: 1511.761,
                    end: 1514.222,
                    text: 'Those are from when she was 17 or 18.'
                },
                {
                    id: 337,
                    start: 1515.973,
                    end: 1517.225,
                    text: "That's the spring picnic..."
                },
                {
                    id: 338,
                    start: 1517.35,
                    end: 1519.852,
                    text: 'in Chivilcoy. Ever been there?'
                },
                { id: 339, start: 1519.936, end: 1521.02, text: 'No. I have.' },
                {
                    id: 340,
                    start: 1521.771,
                    end: 1524.148,
                    text: 'She took me. We visited her folks.'
                },
                { id: 341, start: 1530.905, end: 1531.948, text: 'No.' },
                {
                    id: 342,
                    start: 1533.157,
                    end: 1534.867,
                    text: 'Let him grow old.'
                },
                {
                    id: 343,
                    start: 1536.452,
                    end: 1539.872,
                    text: 'Live a life full of nothing.'
                },
                {
                    id: 344,
                    start: 1555.346,
                    end: 1556.597,
                    text: 'What is it?'
                },
                {
                    id: 345,
                    start: 1559.475,
                    end: 1561.144,
                    text: 'No, nothing.'
                },
                {
                    id: 346,
                    start: 1575.575,
                    end: 1577.326,
                    text: 'Did she have any brothers?'
                },
                { id: 347, start: 1578.119, end: 1579.537, text: 'No, why?' },
                {
                    id: 348,
                    start: 1588.004,
                    end: 1590.214,
                    text: 'Do you know who this is?-Let me see.'
                },
                {
                    id: 349,
                    start: 1590.339,
                    end: 1593.176,
                    text: "He's in several. Looking at her."
                },
                {
                    id: 350,
                    start: 1593.342,
                    end: 1596.679,
                    text: 'I showed Liliana this system.<br />Otherwise years pass and you forget'
                },
                {
                    id: 351,
                    start: 1596.888,
                    end: 1599.056,
                    text: "who's in the photo.-It's true."
                },
                {
                    id: 352,
                    start: 1600.016,
                    end: 1603.144,
                    text: 'Laporta, Rodriguez, Cardoso, Simoni...'
                },
                {
                    id: 353,
                    start: 1603.728,
                    end: 1606.272,
                    text: 'Here he is. Gomez.'
                },
                {
                    id: 354,
                    start: 1606.856,
                    end: 1608.608,
                    text: 'Isidore-Gomez.'
                },
                { id: 355, start: 1631.714, end: 1632.924, text: 'Well?' },
                {
                    id: 356,
                    start: 1634.217,
                    end: 1636.302,
                    text: 'I always thought the photo thing was crazy.'
                },
                {
                    id: 357,
                    start: 1636.552,
                    end: 1639.055,
                    text: 'Yeah, but I think...'
                },
                {
                    id: 358,
                    start: 1639.222,
                    end: 1640.932,
                    text: "It's the look in their eyes."
                },
                {
                    id: 359,
                    start: 1641.057,
                    end: 1642.558,
                    text: "That's the key."
                },
                {
                    id: 360,
                    start: 1642.725,
                    end: 1645.937,
                    text: 'You see this kid looking at this woman...'
                },
                {
                    id: 361,
                    start: 1646.354,
                    end: 1648.064,
                    text: 'worshiping her.'
                },
                {
                    id: 362,
                    start: 1648.397,
                    end: 1649.732,
                    text: 'The eyes...'
                },
                { id: 363, start: 1651.15, end: 1652.235, text: 'speak.' },
                {
                    id: 364,
                    start: 1659.951,
                    end: 1661.577,
                    text: 'They bullshit too.'
                },
                {
                    id: 365,
                    start: 1661.911,
                    end: 1663.204,
                    text: 'They should keep quiet.'
                },
                {
                    id: 366,
                    start: 1665.206,
                    end: 1666.916,
                    text: "Sometimes it's better not to look."
                },
                {
                    id: 367,
                    start: 1670.92,
                    end: 1673.089,
                    text: 'What?-We never talked about this case.'
                },
                {
                    id: 368,
                    start: 1674.59,
                    end: 1675.8,
                    text: 'When did you come from Jujuy?'
                },
                { id: 369, start: 1675.967, end: 1677.093, text: "In '85." },
                { id: 370, start: 1677.76, end: 1679.095, text: 'Why now?' },
                {
                    id: 371,
                    start: 1679.929,
                    end: 1681.597,
                    text: "It's better than planting begonias"
                },
                { id: 372, start: 1683.015, end: 1684.225, text: 'Why?' },
                {
                    id: 373,
                    start: 1688.271,
                    end: 1690.982,
                    text: "Because I've been<br />sidetracked for over 20 years."
                },
                {
                    id: 374,
                    start: 1691.607,
                    end: 1695.945,
                    text: 'Courts, cases...<br />friends, pranks...'
                },
                {
                    id: 375,
                    start: 1696.112,
                    end: 1698.364,
                    text: 'a marriage, several...'
                },
                { id: 376, start: 1699.115, end: 1700.408, text: 'affairs...' },
                {
                    id: 377,
                    start: 1701.117,
                    end: 1702.493,
                    text: 'I got sidetracked.'
                },
                {
                    id: 378,
                    start: 1702.868,
                    end: 1705.329,
                    text: "And now that I'm retired,<br />nothing sidetracks me."
                },
                {
                    id: 379,
                    start: 1705.496,
                    end: 1707.79,
                    text: 'I was in a bar the other night...'
                },
                {
                    id: 380,
                    start: 1708.624,
                    end: 1710.042,
                    text: 'and I saw myself...'
                },
                {
                    id: 381,
                    start: 1710.293,
                    end: 1711.961,
                    text: 'having dinner alone...'
                },
                {
                    id: 382,
                    start: 1713.796,
                    end: 1715.464,
                    text: "and I didn't like myself."
                },
                {
                    id: 383,
                    start: 1716.632,
                    end: 1718.05,
                    text: "I know it doesn't happen to you."
                },
                {
                    id: 384,
                    start: 1718.175,
                    end: 1720.845,
                    text: "I'm not asking you to<br />understand but believe me."
                },
                {
                    id: 385,
                    start: 1722.597,
                    end: 1724.223,
                    text: 'And in trying to...'
                },
                {
                    id: 386,
                    start: 1724.765,
                    end: 1726.684,
                    text: 'find the reasons...'
                },
                {
                    id: 387,
                    start: 1727.977,
                    end: 1729.478,
                    text: 'the moments...'
                },
                {
                    id: 388,
                    start: 1729.812,
                    end: 1733.316,
                    text: 'Everything, absolutely<br />everything leads me to Morales.'
                },
                {
                    id: 389,
                    start: 1733.9,
                    end: 1736.277,
                    text: "It's as if my life had..."
                },
                {
                    id: 390,
                    start: 1739.322,
                    end: 1741.824,
                    text: "Answer it.-It's Alfonso,<br />I'll call him back."
                },
                {
                    id: 391,
                    start: 1741.991,
                    end: 1743.826,
                    text: "Answer it, I'll wait.-I'll call him back."
                },
                {
                    id: 392,
                    start: 1743.993,
                    end: 1746.037,
                    text: "It's no problem, answer it."
                },
                { id: 393, start: 1748.664, end: 1749.665, text: 'Hi.' },
                {
                    id: 394,
                    start: 1750.166,
                    end: 1753.878,
                    text: "I'm finishing up here, I'll be right there."
                },
                {
                    id: 395,
                    start: 1754.795,
                    end: 1757.798,
                    text: "Start without me, I'll be right there."
                },
                { id: 396, start: 1764.18, end: 1765.181, text: 'Hello?' },
                {
                    id: 397,
                    start: 1765.306,
                    end: 1768.184,
                    text: 'Good evening.Does Isidoro Gomez live there?'
                },
                { id: 398, start: 1768.392, end: 1769.435, text: 'Yes.' },
                { id: 399, start: 1771.02, end: 1772.772, text: 'Is he home?' },
                {
                    id: 400,
                    start: 1772.897,
                    end: 1775.941,
                    text: "No, he doesn't live here anymore."
                },
                {
                    id: 401,
                    start: 1776.067,
                    end: 1777.526,
                    text: "He doesn't?-No."
                },
                {
                    id: 402,
                    start: 1777.777,
                    end: 1780.529,
                    text: 'He moved away, to Buenos Aires.'
                },
                {
                    id: 403,
                    start: 1783.699,
                    end: 1785.368,
                    text: "Buenos Aires?-Who's calling?"
                },
                {
                    id: 404,
                    start: 1788.162,
                    end: 1790.498,
                    text: "I'm calling on behalf of..."
                },
                {
                    id: 405,
                    start: 1791.165,
                    end: 1794.126,
                    text: "Councilman Mendez, it's about a job."
                },
                {
                    id: 406,
                    start: 1794.46,
                    end: 1796.504,
                    text: 'Has he been in Buenos Aires long?'
                },
                {
                    id: 407,
                    start: 1796.671,
                    end: 1800.675,
                    text: 'A month, a little longer.'
                },
                {
                    id: 408,
                    start: 1803.219,
                    end: 1806.347,
                    text: 'Do you know where I can find him?<br />Have you got an address?'
                },
                {
                    id: 409,
                    start: 1806.555,
                    end: 1808.724,
                    text: 'This job is pretty urgent.'
                },
                {
                    id: 410,
                    start: 1809.016,
                    end: 1812.561,
                    text: "He's working on a construction site."
                },
                { id: 411, start: 1813.062, end: 1814.23, text: 'On a site?' },
                {
                    id: 412,
                    start: 1814.355,
                    end: 1818.192,
                    text: 'Yes, he said it was...'
                },
                {
                    id: 413,
                    start: 1819.36,
                    end: 1821.237,
                    text: 'It sounded like...'
                },
                {
                    id: 414,
                    start: 1822.154,
                    end: 1824.907,
                    text: 'Montevideo, near Lands...'
                },
                {
                    id: 415,
                    start: 1825.7,
                    end: 1828.869,
                    text: "/ don't remember very well..."
                },
                { id: 416, start: 1829.495, end: 1830.705, text: 'but...' },
                {
                    id: 417,
                    start: 1831.247,
                    end: 1833.207,
                    text: 'What type of job is it?'
                },
                { id: 418, start: 1833.374, end: 1834.792, text: "It's..." },
                {
                    id: 419,
                    start: 1836.168,
                    end: 1839.213,
                    text: 'a job that will interest him.'
                },
                {
                    id: 420,
                    start: 1839.296,
                    end: 1841.799,
                    text: "It's for Councilman Mendez and..."
                },
                {
                    id: 421,
                    start: 1842.717,
                    end: 1845.011,
                    text: 'Tell me something.-Yes?'
                },
                {
                    id: 422,
                    start: 1845.97,
                    end: 1848.305,
                    text: 'Were he and Liliana Colo to friends?'
                },
                {
                    id: 423,
                    start: 1849.432,
                    end: 1853.102,
                    text: 'Ah, Liliana Colo to...'
                },
                {
                    id: 424,
                    start: 1853.436,
                    end: 1856.605,
                    text: "They used to see each<br />other.She's from here."
                },
                { id: 425, start: 1857.106, end: 1858.149, text: 'Why?' },
                {
                    id: 426,
                    start: 1859.692,
                    end: 1863.279,
                    text: 'She works for the councilman.'
                },
                {
                    id: 427,
                    start: 1863.946,
                    end: 1867.074,
                    text: "She's the one who<br />recommended him for the job."
                },
                {
                    id: 428,
                    start: 1868.617,
                    end: 1870.161,
                    text: 'She did, did she?'
                },
                {
                    id: 429,
                    start: 1871.412,
                    end: 1874.206,
                    text: "He'll be glad to hear that."
                },
                {
                    id: 430,
                    start: 1874.457,
                    end: 1877.001,
                    text: 'Really? Do you think he’ll remember her?'
                },
                { id: 431, start: 1877.96, end: 1879.128, text: 'Oh, yes.' },
                {
                    id: 432,
                    start: 1880.254,
                    end: 1883.132,
                    text: 'He really liked that girl.'
                },
                {
                    id: 433,
                    start: 1884.091,
                    end: 1886.177,
                    text: 'But then she moved away...'
                },
                {
                    id: 434,
                    start: 1886.51,
                    end: 1890.473,
                    text: 'to Buenos Aires, and they<br />never saw each other again.'
                },
                { id: 435, start: 1893.309, end: 1894.31, text: 'Hello?' },
                { id: 436, start: 1894.977, end: 1895.978, text: 'Hello?' },
                { id: 437, start: 1897.146, end: 1898.147, text: 'Hello?' },
                {
                    id: 438,
                    start: 1905.446,
                    end: 1909.033,
                    text: "If he's here... it's a miracle.<br />Schmuck."
                },
                {
                    id: 439,
                    start: 1909.158,
                    end: 1912.703,
                    text: 'Imagine losing the love of<br />your life.-Not him, you.'
                },
                {
                    id: 440,
                    start: 1912.87,
                    end: 1915.831,
                    text: "If you'd kept your mouth<br />shut and called me first..."
                },
                {
                    id: 441,
                    start: 1916.04,
                    end: 1919.168,
                    text: "Morning.We're looking for...<br />Isidore-Gomez."
                },
                {
                    id: 442,
                    start: 1919.502,
                    end: 1921.378,
                    text: 'What is it? Who are you guys?'
                },
                {
                    id: 443,
                    start: 1921.504,
                    end: 1922.546,
                    text: 'Mike Hammer, asshole.'
                },
                {
                    id: 444,
                    start: 1922.755,
                    end: 1925.216,
                    text: "Did he come to work?-No, he didn't."
                },
                {
                    id: 445,
                    start: 1925.299,
                    end: 1926.759,
                    text: 'We know nothing about him.'
                },
                {
                    id: 446,
                    start: 1926.884,
                    end: 1928.219,
                    text: 'Get me his address.'
                },
                {
                    id: 447,
                    start: 1928.344,
                    end: 1929.595,
                    text: 'Right away.'
                },
                {
                    id: 448,
                    start: 1929.845,
                    end: 1931.597,
                    text: 'Fernandez! Fernandez!'
                },
                {
                    id: 449,
                    start: 1938.479,
                    end: 1941.732,
                    text: 'We know Gomez got a phone call last night.'
                },
                {
                    id: 450,
                    start: 1943.567,
                    end: 1945.82,
                    text: 'He went in the bedroom and<br />came out 10 minutes later...'
                },
                {
                    id: 451,
                    start: 1945.986,
                    end: 1948.697,
                    text: 'with his coat and suitcase packed.'
                },
                {
                    id: 452,
                    start: 1948.823,
                    end: 1951.534,
                    text: "The foreman says they<br />owed him a week's pay..."
                },
                {
                    id: 453,
                    start: 1951.909,
                    end: 1954.078,
                    text: 'but that he left without any fuss.'
                },
                {
                    id: 454,
                    start: 1955.704,
                    end: 1958.207,
                    text: 'I can ask around if you want, Inspector.'
                },
                {
                    id: 455,
                    start: 1960.209,
                    end: 1962.837,
                    text: 'I saw the same photographs you did.'
                },
                {
                    id: 456,
                    start: 1965.256,
                    end: 1967.258,
                    text: 'I should have picked him out.'
                },
                {
                    id: 457,
                    start: 1969.385,
                    end: 1973.347,
                    text: 'Forget it, Esposito. That<br />case is nothing but hot air.'
                },
                {
                    id: 458,
                    start: 1973.556,
                    end: 1977.768,
                    text: "If you think I'll do all that paperwork to<br />issue a request in Chivilcoy..."
                },
                {
                    id: 459,
                    start: 1977.977,
                    end: 1979.395,
                    text: "to search some old lady's house..."
                },
                {
                    id: 460,
                    start: 1979.562,
                    end: 1983.19,
                    text: 'to find letters the son may<br />or may not have sent...'
                },
                {
                    id: 461,
                    start: 1983.357,
                    end: 1986.527,
                    text: 'and yadda, yadda, yadda...<br />Please, Esposito.'
                },
                {
                    id: 462,
                    start: 1986.694,
                    end: 1988.237,
                    text: "You're nuts."
                },
                {
                    id: 463,
                    start: 1989.029,
                    end: 1991.907,
                    text: 'We have nowhere else to look, sir.'
                },
                {
                    id: 464,
                    start: 1992.867,
                    end: 1996.12,
                    text: 'Your little game of Don Quixote with<br />Romano was enough. Poor guy...'
                },
                {
                    id: 465,
                    start: 1996.245,
                    end: 1998.414,
                    text: 'got transferred to the middle of nowhere.'
                },
                {
                    id: 466,
                    start: 1999.373,
                    end: 2003.919,
                    text: "Or maybe he's in Chivilcoy, try asking him."
                },
                {
                    id: 467,
                    start: 2014.722,
                    end: 2018.309,
                    text: 'Anyway... the general said what he had to.'
                },
                { id: 468, start: 2018.642, end: 2019.894, text: 'Oh, well.' },
                {
                    id: 469,
                    start: 2028.611,
                    end: 2030.613,
                    text: "I don't know what to do."
                },
                {
                    id: 470,
                    start: 2034.617,
                    end: 2036.827,
                    text: 'Morales is getting worse every day...'
                },
                {
                    id: 471,
                    start: 2037.494,
                    end: 2039.955,
                    text: "the murderer knows we're after him..."
                },
                {
                    id: 472,
                    start: 2040.915,
                    end: 2042.625,
                    text: 'my judge is a moron...'
                },
                {
                    id: 473,
                    start: 2043.167,
                    end: 2044.96,
                    text: 'I want to kill Irene...'
                },
                {
                    id: 474,
                    start: 2046.17,
                    end: 2049.173,
                    text: 'and the only guy I can<br />trust in this world...'
                },
                {
                    id: 475,
                    start: 2049.465,
                    end: 2051.967,
                    text: 'is a drunk, a total fucking imbecile.'
                },
                {
                    id: 476,
                    start: 2056.43,
                    end: 2059.391,
                    text: 'I have an advantage.A small<br />one, but an advantage.'
                },
                {
                    id: 477,
                    start: 2059.934,
                    end: 2061.644,
                    text: "Today's the 28th, right?"
                },
                {
                    id: 478,
                    start: 2062.478,
                    end: 2066.315,
                    text: "The drunk idiot hasn't got<br />paid yet.Last month's..."
                },
                {
                    id: 479,
                    start: 2066.941,
                    end: 2068.359,
                    text: 'he already drank.'
                },
                {
                    id: 480,
                    start: 2068.692,
                    end: 2070.945,
                    text: "So when it's time to pay the bill..."
                },
                {
                    id: 481,
                    start: 2071.278,
                    end: 2073.072,
                    text: "he'll have a dilemma."
                },
                {
                    id: 482,
                    start: 2073.364,
                    end: 2075.991,
                    text: "Either he says he's broke,<br />gets arrested, beat up..."
                },
                {
                    id: 483,
                    start: 2076.2,
                    end: 2079.495,
                    text: 'goes home a mess and his<br />wife kicks him out for good...'
                },
                {
                    id: 484,
                    start: 2079.662,
                    end: 2083.707,
                    text: 'or he turns to his boss the<br />chump, who happens to be me...'
                },
                {
                    id: 485,
                    start: 2084.5,
                    end: 2086.21,
                    text: 'and asks him to pay it.'
                },
                {
                    id: 486,
                    start: 2086.335,
                    end: 2087.836,
                    text: 'But one thing.'
                },
                {
                    id: 487,
                    start: 2088.003,
                    end: 2090.839,
                    text: 'Since his boss is a chump,<br />but not a complete chump...'
                },
                {
                    id: 488,
                    start: 2091.006,
                    end: 2093.258,
                    text: "he'll pay this one last time."
                },
                {
                    id: 489,
                    start: 2095.01,
                    end: 2097.096,
                    text: 'But in exchange for a favor.'
                },
                {
                    id: 490,
                    start: 2098.472,
                    end: 2101.016,
                    text: "And the drunk idiot can't say no."
                },
                {
                    id: 491,
                    start: 2101.809,
                    end: 2103.435,
                    text: "Isn't that right?"
                },
                {
                    id: 492,
                    start: 2116.198,
                    end: 2117.491,
                    text: 'I gotta pee.'
                },
                { id: 493, start: 2118.075, end: 2119.284, text: 'Hold on.' },
                {
                    id: 494,
                    start: 2120.244,
                    end: 2122.371,
                    text: 'The old lady has to come out at some point.'
                },
                {
                    id: 495,
                    start: 2123.664,
                    end: 2127.751,
                    text: "Too much Napoleon Solo and Perry<br />Mason.That's your problem."
                },
                {
                    id: 496,
                    start: 2132.631,
                    end: 2134.883,
                    text: "I'm serious, I gotta take a leak."
                },
                {
                    id: 497,
                    start: 2283.824,
                    end: 2285.325,
                    text: 'Son of a bitch!'
                },
                {
                    id: 498,
                    start: 2285.576,
                    end: 2288.036,
                    text: 'Damn you! Damn you!'
                },
                {
                    id: 499,
                    start: 2288.245,
                    end: 2290.33,
                    text: 'You scared the fucking crap out of me!'
                },
                {
                    id: 500,
                    start: 2290.539,
                    end: 2293.542,
                    text: 'I scared you? What are you doing here?'
                },
                {
                    id: 501,
                    start: 2293.834,
                    end: 2295.586,
                    text: 'I came to help you.'
                },
                {
                    id: 502,
                    start: 2295.752,
                    end: 2298.297,
                    text: "You're supposed to keep watch outside.lf<br />she comes back, we're screwed."
                },
                {
                    id: 503,
                    start: 2298.547,
                    end: 2301.091,
                    text: "She ain't coming back.-How do you know?"
                },
                {
                    id: 504,
                    start: 2301.341,
                    end: 2304.052,
                    text: "She's in the grocery<br />store, she'll be a while."
                },
                {
                    id: 505,
                    start: 2304.178,
                    end: 2306.43,
                    text: "Calm down, for God's sake."
                },
                {
                    id: 506,
                    start: 2307.222,
                    end: 2309.057,
                    text: 'Did you find anything?'
                },
                {
                    id: 507,
                    start: 2309.683,
                    end: 2310.726,
                    text: 'The letters.'
                },
                {
                    id: 508,
                    start: 2310.893,
                    end: 2313.27,
                    text: 'The letters, but no... Come here.'
                },
                {
                    id: 509,
                    start: 2313.562,
                    end: 2314.813,
                    text: "There's no address."
                },
                {
                    id: 510,
                    start: 2314.98,
                    end: 2317.566,
                    text: "The envelopes are gone. There's no address."
                },
                {
                    id: 511,
                    start: 2319.818,
                    end: 2322.696,
                    text: "This one's from the other day.-So?"
                },
                {
                    id: 512,
                    start: 2323.489,
                    end: 2325.449,
                    text: "It's recent."
                },
                {
                    id: 513,
                    start: 2326.074,
                    end: 2329.077,
                    text: 'The trash. The envelopes may<br />still be in the trash.'
                },
                { id: 514, start: 2329.203, end: 2330.245, text: 'Go check.' },
                {
                    id: 515,
                    start: 2336.543,
                    end: 2337.669,
                    text: 'No, nothing here.'
                },
                {
                    id: 516,
                    start: 2346.72,
                    end: 2348.43,
                    text: 'Nothing?-Nothing.'
                },
                {
                    id: 517,
                    start: 2349.431,
                    end: 2350.933,
                    text: 'Did you go through it?'
                },
                {
                    id: 518,
                    start: 2351.099,
                    end: 2353.268,
                    text: 'You wanna try?-Knock it off.'
                },
                { id: 519, start: 2361.944, end: 2363.32, text: 'What is it?' },
                {
                    id: 520,
                    start: 2363.862,
                    end: 2365.03,
                    text: 'Go on, go on.'
                },
                {
                    id: 521,
                    start: 2365.822,
                    end: 2367.449,
                    text: 'What is it? What?'
                },
                {
                    id: 522,
                    start: 2368.033,
                    end: 2372.829,
                    text: "Come here. Calm down, I'll let you out."
                },
                {
                    id: 523,
                    start: 2372.955,
                    end: 2374.122,
                    text: 'Wait, wait.'
                },
                {
                    id: 524,
                    start: 2388.679,
                    end: 2390.138,
                    text: 'Want me to drive?'
                },
                {
                    id: 525,
                    start: 2391.89,
                    end: 2394.977,
                    text: "The dog probably had<br />rabies, you're gonna die."
                },
                {
                    id: 526,
                    start: 2395.185,
                    end: 2398.897,
                    text: "Why didn't you keep watch? If<br />she finds out we broke in..."
                },
                {
                    id: 527,
                    start: 2399.189,
                    end: 2402.317,
                    text: 'Benjamin, as soon as we<br />came for the letters...'
                },
                {
                    id: 528,
                    start: 2402.567,
                    end: 2403.986,
                    text: "sooner or later she'd realize."
                },
                {
                    id: 529,
                    start: 2404.069,
                    end: 2406.154,
                    text: "That's why we didn't take the letters."
                },
                {
                    id: 530,
                    start: 2410.325,
                    end: 2413.495,
                    text: "You weren't stupid enough to<br />bring them, were you?"
                },
                {
                    id: 531,
                    start: 2417.165,
                    end: 2419.793,
                    text: 'And what if I did?'
                },
                {
                    id: 532,
                    start: 2420.252,
                    end: 2422.17,
                    text: 'What if? What if?'
                },
                {
                    id: 533,
                    start: 2422.379,
                    end: 2427.509,
                    text: "If she finds out, she'll tell Gomez and<br />the guy will disappear for good."
                },
                {
                    id: 534,
                    start: 2427.843,
                    end: 2429.052,
                    text: "Don't you see?-No."
                },
                {
                    id: 535,
                    start: 2429.303,
                    end: 2431.513,
                    text: "You don't? You're fucking blind!"
                },
                {
                    id: 536,
                    start: 2431.805,
                    end: 2432.848,
                    text: 'Because you...'
                },
                {
                    id: 537,
                    start: 2432.931,
                    end: 2437.394,
                    text: "You'll see, when I finally figure out the<br />whole thing out about the date..."
                },
                {
                    id: 538,
                    start: 2437.603,
                    end: 2440.23,
                    text: "I'd much rather work alone!"
                },
                { id: 539, start: 2443.191, end: 2444.86, text: 'Dammit...' },
                {
                    id: 540,
                    start: 2447.279,
                    end: 2450.49,
                    text: 'Tactical Revolutionary<br />Command, may I help you?'
                },
                {
                    id: 541,
                    start: 2451.783,
                    end: 2453.452,
                    text: 'Wrong number.'
                },
                {
                    id: 542,
                    start: 2453.66,
                    end: 2455.203,
                    text: "That's quite all right."
                },
                {
                    id: 543,
                    start: 2457.331,
                    end: 2459.249,
                    text: 'Nothing at all?'
                },
                {
                    id: 544,
                    start: 2459.791,
                    end: 2461.543,
                    text: "Or I'm missing something."
                },
                {
                    id: 545,
                    start: 2461.71,
                    end: 2465.589,
                    text: "It's like the guy knew we were<br />going to read the letters."
                },
                {
                    id: 546,
                    start: 2465.797,
                    end: 2467.299,
                    text: "It's just names."
                },
                {
                    id: 547,
                    start: 2467.507,
                    end: 2470.218,
                    text: 'Bullshit, nothing concrete.'
                },
                { id: 548, start: 2471.053, end: 2472.137, text: 'Look.' },
                {
                    id: 549,
                    start: 2473.388,
                    end: 2475.182,
                    text: "Don't worry about me."
                },
                {
                    id: 550,
                    start: 2476.016,
                    end: 2479.144,
                    text: 'I\'m like Manfredini, not Bavastro."'
                },
                {
                    id: 551,
                    start: 2479.936,
                    end: 2481.605,
                    text: 'People from Chivilcoy.'
                },
                {
                    id: 552,
                    start: 2482.939,
                    end: 2485.442,
                    text: 'Here, let me see.Oh, shit...'
                },
                {
                    id: 553,
                    start: 2488.195,
                    end: 2491.114,
                    text: 'Sperm Bank, loan department. Good morning.'
                },
                {
                    id: 554,
                    start: 2491.365,
                    end: 2493.742,
                    text: "No, it's a sperm bank.<br />Deposit or withdrawal?"
                },
                {
                    id: 555,
                    start: 2493.867,
                    end: 2496.161,
                    text: 'Esposito. Sandoval.-Wrong number.'
                },
                { id: 556, start: 2496.411, end: 2497.412, text: 'Sandoval.' },
                {
                    id: 557,
                    start: 2497.996,
                    end: 2500.499,
                    text: 'Judge Fortuna wants to see you.'
                },
                {
                    id: 558,
                    start: 2503.585,
                    end: 2506.838,
                    text: "You hear my voice when I speak<br />to you, don't you, Esposito?"
                },
                { id: 559, start: 2507.089, end: 2508.256, text: 'Yes, sir.' },
                {
                    id: 560,
                    start: 2508.673,
                    end: 2511.551,
                    text: 'Then I have to assume that<br />if I tell you something...'
                },
                {
                    id: 561,
                    start: 2511.718,
                    end: 2514.012,
                    text: 'and you do exactly the opposite...'
                },
                {
                    id: 562,
                    start: 2514.179,
                    end: 2515.806,
                    text: "it's not that you didn't hear me..."
                },
                {
                    id: 563,
                    start: 2516.056,
                    end: 2519.309,
                    text: 'but that you could give a flying<br />fuck about the order I gave you.'
                },
                {
                    id: 564,
                    start: 2519.601,
                    end: 2520.852,
                    text: "Isn't that right, Esposito?"
                },
                {
                    id: 565,
                    start: 2521.603,
                    end: 2523.188,
                    text: 'Not quite like that, sir.'
                },
                {
                    id: 566,
                    start: 2523.522,
                    end: 2526.191,
                    text: 'And if my colleague from<br />Chivilcoy calls me...'
                },
                {
                    id: 567,
                    start: 2526.65,
                    end: 2530.07,
                    text: 'very angry to tell me that<br />two of my employees'
                },
                {
                    id: 568,
                    start: 2530.237,
                    end: 2532.489,
                    text: "broke into some poor old lady's house..."
                },
                {
                    id: 569,
                    start: 2532.697,
                    end: 2536.868,
                    text: "that means what I say isn't<br />worth a bucket of shit."
                },
                {
                    id: 570,
                    start: 2540.08,
                    end: 2543.875,
                    text: "I don't know where your colleague could<br />have heard such a thing."
                },
                {
                    id: 571,
                    start: 2544.042,
                    end: 2546.837,
                    text: "That's exactly what I told him, Esposito."
                },
                {
                    id: 572,
                    start: 2547.212,
                    end: 2550.507,
                    text: 'However, my colleague tells me...'
                },
                {
                    id: 573,
                    start: 2551.425,
                    end: 2553.301,
                    text: 'that the other day...'
                },
                {
                    id: 574,
                    start: 2553.593,
                    end: 2555.72,
                    text: 'in Chivilcoy...'
                },
                {
                    id: 575,
                    start: 2556.555,
                    end: 2559.558,
                    text: 'at the intersection...'
                },
                {
                    id: 576,
                    start: 2559.808,
                    end: 2563.812,
                    text: 'of Francisco Savey and the<br />corner of Schiaffino...'
                },
                {
                    id: 577,
                    start: 2563.937,
                    end: 2568.984,
                    text: 'in the city limits of Chivilcoya<br />black Peugeot was parked...'
                },
                {
                    id: 578,
                    start: 2569.443,
                    end: 2574.489,
                    text: 'With a Buenos Aires license<br />plate number 133-809...'
                },
                {
                    id: 579,
                    start: 2574.948,
                    end: 2577.826,
                    text: 'and my colleague asks the Federal Police...'
                },
                {
                    id: 580,
                    start: 2577.993,
                    end: 2580.954,
                    text: 'to run a background check on the vehicle.'
                },
                {
                    id: 581,
                    start: 2581.538,
                    end: 2584.875,
                    text: 'Guess whose name the car is registered to?'
                },
                {
                    id: 582,
                    start: 2585.25,
                    end: 2587.252,
                    text: 'Tell me, who?'
                },
                {
                    id: 583,
                    start: 2589.129,
                    end: 2591.006,
                    text: 'Someone named Es'
                },
                { id: 584, start: 2593.133, end: 2594.342, text: 'Es-po...' },
                {
                    id: 585,
                    start: 2595.677,
                    end: 2597.179,
                    text: 'Es-po-si...'
                },
                { id: 586, start: 2606.605, end: 2607.647, text: 'to?' },
                {
                    id: 587,
                    start: 2610.358,
                    end: 2612.444,
                    text: 'And the Federal Police...'
                },
                {
                    id: 588,
                    start: 2613.403,
                    end: 2616.239,
                    text: 'tell him where he works.'
                },
                {
                    id: 589,
                    start: 2617.991,
                    end: 2619.784,
                    text: 'And the judge calls me...'
                },
                {
                    id: 590,
                    start: 2620.035,
                    end: 2624.456,
                    text: "to see if I can clear things up. And<br />the truth is, Esposito, I can't."
                },
                {
                    id: 591,
                    start: 2625.081,
                    end: 2627.375,
                    text: "Because I don't look like a judge anymore..."
                },
                {
                    id: 592,
                    start: 2627.626,
                    end: 2630.17,
                    text: 'I look like a first class fucking idiot.'
                },
                {
                    id: 593,
                    start: 2630.378,
                    end: 2634.257,
                    text: 'Because I say I want A and people give me Z.'
                },
                {
                    id: 594,
                    start: 2635.05,
                    end: 2638.512,
                    text: 'Just like this piece of<br />shit typewriter they gave me!'
                },
                {
                    id: 595,
                    start: 2641.64,
                    end: 2643.475,
                    text: 'Excuse me, sir, but...'
                },
                {
                    id: 596,
                    start: 2645.06,
                    end: 2647.854,
                    text: 'I think something weird is going on here.'
                },
                {
                    id: 597,
                    start: 2648.188,
                    end: 2650.148,
                    text: 'Exactly. Wait, wait.'
                },
                {
                    id: 598,
                    start: 2650.524,
                    end: 2652.567,
                    text: 'Wait a minute. The best is yet to come.'
                },
                {
                    id: 599,
                    start: 2652.734,
                    end: 2656.321,
                    text: 'After you can go right back to<br />treating me like a fucking idiot.'
                },
                {
                    id: 600,
                    start: 2656.446,
                    end: 2658.532,
                    text: 'But listen to this.'
                },
                {
                    id: 601,
                    start: 2659.199,
                    end: 2661.91,
                    text: 'Because what stood out<br />most in that little town...'
                },
                {
                    id: 602,
                    start: 2662.369,
                    end: 2665.956,
                    text: "wasn't the two guys from Buenos Aires, no."
                },
                {
                    id: 603,
                    start: 2666.373,
                    end: 2669.042,
                    text: 'Or that one of them was seen...'
                },
                {
                    id: 604,
                    start: 2669.251,
                    end: 2673.63,
                    text: 'tying his shoelaces when<br />he was wearing loafers.'
                },
                {
                    id: 605,
                    start: 2674.381,
                    end: 2678.843,
                    text: 'What stood out most was that one of<br />them walked into the grocery store...'
                },
                {
                    id: 606,
                    start: 2679.177,
                    end: 2681.054,
                    text: 'greeted them pleasantly...'
                },
                {
                    id: 607,
                    start: 2681.346,
                    end: 2686.726,
                    text: 'asked for a bottle of whiskey and<br />left drinking straight from the bottle.'
                },
                {
                    id: 608,
                    start: 2687.269,
                    end: 2689.563,
                    text: 'Shall I describe him for you?'
                },
                {
                    id: 609,
                    start: 2690.021,
                    end: 2691.815,
                    text: 'We have to deny it, Benjamin.'
                },
                {
                    id: 610,
                    start: 2692.148,
                    end: 2695.068,
                    text: '"It wasn\'t me, I don\'t know..."'
                },
                {
                    id: 611,
                    start: 2695.235,
                    end: 2697.946,
                    text: "Don't ever talk to me again.Never again."
                },
                {
                    id: 612,
                    start: 2698.196,
                    end: 2700.407,
                    text: 'Deny everything.-Never again.'
                },
                {
                    id: 613,
                    start: 2703.743,
                    end: 2706.079,
                    text: "Ma'am, honestly...-Get out of my sight."
                },
                {
                    id: 614,
                    start: 2706.246,
                    end: 2708.248,
                    text: 'Are you against us too?'
                },
                {
                    id: 615,
                    start: 2708.456,
                    end: 2710.625,
                    text: "Irene, I'm talking to you.lrene!"
                },
                {
                    id: 616,
                    start: 2711.793,
                    end: 2715.839,
                    text: 'Not only was it a stupid move,<br />but you did it behind my back.'
                },
                {
                    id: 617,
                    start: 2716.298,
                    end: 2718.592,
                    text: "I didn't think...-You think<br />I'm here to joke around."
                },
                {
                    id: 618,
                    start: 2718.758,
                    end: 2719.885,
                    text: "I didn't say that."
                },
                {
                    id: 619,
                    start: 2720.051,
                    end: 2723.138,
                    text: "You didn't need to. I can tell.<br />Let's get this straight."
                },
                {
                    id: 620,
                    start: 2723.346,
                    end: 2726.057,
                    text: "I'm the boss and you're the employee."
                },
                {
                    id: 621,
                    start: 2731.229,
                    end: 2734.441,
                    text: 'Twelve letters.31 pages on thin paper.'
                },
                {
                    id: 622,
                    start: 2734.816,
                    end: 2737.819,
                    text: 'He mentions five jobs, two as a builder...'
                },
                {
                    id: 623,
                    start: 2738.278,
                    end: 2741.323,
                    text: 'one delivering groceries,<br />two without details.'
                },
                {
                    id: 624,
                    start: 2741.448,
                    end: 2745.91,
                    text: 'Three neighborhoods in Buenos Aires Monte<br />Grande, San Justo and Avellaneda.'
                },
                { id: 625, start: 2746.286, end: 2747.829, text: 'Six names:' },
                {
                    id: 626,
                    start: 2748.038,
                    end: 2749.915,
                    text: 'Anido, Mesias, Oleniak...'
                },
                {
                    id: 627,
                    start: 2750.04,
                    end: 2752.792,
                    text: 'Manfredini, Bavastro and Sanchez.'
                },
                {
                    id: 628,
                    start: 2753.251,
                    end: 2757.172,
                    text: 'Only one reference to a woman,<br />Rosa, apparently an aunt.'
                },
                {
                    id: 629,
                    start: 2759.09,
                    end: 2762.01,
                    text: "That's it. That's all I've<br />got.The rest is nothing."
                },
                {
                    id: 630,
                    start: 2762.385,
                    end: 2764.346,
                    text: 'Benjamin.-This is nothing too?'
                },
                { id: 631, start: 2764.554, end: 2765.847, text: 'Please.' },
                {
                    id: 632,
                    start: 2777.108,
                    end: 2779.11,
                    text: "Leave it open, it isn't private."
                },
                {
                    id: 633,
                    start: 2780.32,
                    end: 2781.488,
                    text: 'I talked to Fortuna.'
                },
                {
                    id: 634,
                    start: 2781.613,
                    end: 2784.282,
                    text: "I explained that you're an imbecile."
                },
                {
                    id: 635,
                    start: 2784.491,
                    end: 2786.743,
                    text: 'I used my irresistible smile...'
                },
                {
                    id: 636,
                    start: 2786.868,
                    end: 2791.164,
                    text: 'and convinced him to call the judge in<br />Chivilcoy and forget the whole thing.'
                },
                {
                    id: 637,
                    start: 2791.956,
                    end: 2793.667,
                    text: "I don't know how to thank you."
                },
                {
                    id: 638,
                    start: 2794.709,
                    end: 2798.129,
                    text: 'I ask that you refrain from<br />such actions in the future.'
                },
                {
                    id: 639,
                    start: 2798.922,
                    end: 2800.173,
                    text: "You're free to go."
                },
                {
                    id: 640,
                    start: 2800.715,
                    end: 2802.384,
                    text: 'One question, if I may.'
                },
                {
                    id: 641,
                    start: 2802.509,
                    end: 2805.845,
                    text: "Which irresistible smile? I<br />don't think I've seen it."
                },
                {
                    id: 642,
                    start: 2807.18,
                    end: 2810.392,
                    text: 'Of course not.I save it for<br />my boyfriend, as I should.'
                },
                { id: 643, start: 2811.726, end: 2812.894, text: 'Of course.' },
                { id: 644, start: 2813.812, end: 2814.896, text: 'Right.' },
                {
                    id: 645,
                    start: 2816.022,
                    end: 2817.732,
                    text: "I won't take any more of your time."
                },
                {
                    id: 646,
                    start: 2817.899,
                    end: 2822.487,
                    text: 'And bring me the Liliana Colo to<br />file, to seal it and archive it.'
                },
                {
                    id: 647,
                    start: 2827.742,
                    end: 2829.285,
                    text: 'The case is closed.'
                },
                {
                    id: 648,
                    start: 2838.42,
                    end: 2841.923,
                    text: 'Getting engaged.Kids today laugh at it.'
                },
                {
                    id: 649,
                    start: 2842.09,
                    end: 2843.8,
                    text: 'Who gets engaged anymore?'
                },
                {
                    id: 650,
                    start: 2845.218,
                    end: 2847.929,
                    text: 'And this kid? What was his name?<br />He was here less than a year...'
                },
                {
                    id: 651,
                    start: 2848.096,
                    end: 2849.514,
                    text: 'Godoy.-Godoy.'
                },
                {
                    id: 652,
                    start: 2849.681,
                    end: 2851.307,
                    text: "Larreta got him the job.-That's right."
                },
                {
                    id: 653,
                    start: 2851.474,
                    end: 2852.726,
                    text: 'Remember?-Yes.'
                },
                {
                    id: 654,
                    start: 2853.143,
                    end: 2856.229,
                    text: "Silly me, I didn't put a date on the photo."
                },
                {
                    id: 655,
                    start: 2856.855,
                    end: 2860.066,
                    text: 'When was it? Two or three<br />months after Chivilcoy.'
                },
                {
                    id: 656,
                    start: 2860.191,
                    end: 2862.777,
                    text: 'A week later.I remember perfectly.'
                },
                {
                    id: 657,
                    start: 2863.778,
                    end: 2868.575,
                    text: 'A week after we fought you showed<br />up with Alfonso whatever his name was...'
                },
                {
                    id: 658,
                    start: 2868.783,
                    end: 2870.452,
                    text: 'to announce your engagement.'
                },
                {
                    id: 659,
                    start: 2873.079,
                    end: 2875.29,
                    text: 'Look at Sandoval, trying to look sober.'
                },
                {
                    id: 660,
                    start: 2877.751,
                    end: 2880.086,
                    text: 'Poor Pablo.'
                },
                {
                    id: 661,
                    start: 2880.42,
                    end: 2883.298,
                    text: "It's so weird, I don't<br />even recognize myself."
                },
                {
                    id: 662,
                    start: 2883.84,
                    end: 2885.383,
                    text: 'I look like somebody else.'
                },
                {
                    id: 663,
                    start: 2886.551,
                    end: 2887.969,
                    text: 'Who were you?'
                },
                {
                    id: 664,
                    start: 2888.136,
                    end: 2889.387,
                    text: 'What were you like?'
                },
                {
                    id: 665,
                    start: 2889.637,
                    end: 2890.722,
                    text: "I don't know."
                },
                {
                    id: 666,
                    start: 2892.056,
                    end: 2893.808,
                    text: 'Straight, conservative...'
                },
                { id: 667, start: 2894.267, end: 2895.393, text: 'Stuck-up.' },
                {
                    id: 668,
                    start: 2895.769,
                    end: 2897.979,
                    text: 'Structured.-Inflexible.'
                },
                { id: 669, start: 2898.98, end: 2900.148, text: 'Young.' },
                {
                    id: 670,
                    start: 2900.774,
                    end: 2903.026,
                    text: 'Young, Benjamin. I was young.'
                },
                {
                    id: 671,
                    start: 2904.152,
                    end: 2907.655,
                    text: 'You were young, too.Look, no gray hair.'
                },
                {
                    id: 672,
                    start: 2907.989,
                    end: 2910.95,
                    text: 'And here, looking to the side, all serious.'
                },
                {
                    id: 673,
                    start: 2919.167,
                    end: 2920.627,
                    text: 'I was another person.'
                },
                {
                    id: 674,
                    start: 2935.016,
                    end: 2936.851,
                    text: 'Your novel might be really good.'
                },
                {
                    id: 675,
                    start: 2938.478,
                    end: 2940.146,
                    text: "But it's not for me."
                },
                {
                    id: 676,
                    start: 2942.357,
                    end: 2946.861,
                    text: "You've reached the end of your<br />life and you want to look back."
                },
                {
                    id: 677,
                    start: 2947.695,
                    end: 2949.322,
                    text: "But I can't."
                },
                {
                    id: 678,
                    start: 2950.156,
                    end: 2952.7,
                    text: 'I have to go to work every day.'
                },
                {
                    id: 679,
                    start: 2954.202,
                    end: 2957.789,
                    text: 'And live with this. It may<br />not be true justice...'
                },
                {
                    id: 680,
                    start: 2957.914,
                    end: 2959.707,
                    text: "but it's a kind of justice."
                },
                {
                    id: 681,
                    start: 2961.668,
                    end: 2964.212,
                    text: 'And at the end of the<br />day have to go home...'
                },
                {
                    id: 682,
                    start: 2964.838,
                    end: 2966.506,
                    text: 'and live with my husband...'
                },
                {
                    id: 683,
                    start: 2967.423,
                    end: 2969.342,
                    text: 'and with my children, who I adore.'
                },
                {
                    id: 684,
                    start: 2972.47,
                    end: 2974.806,
                    text: "My whole life I've looked forward."
                },
                {
                    id: 685,
                    start: 2977.35,
                    end: 2979.727,
                    text: 'The past is out of my jurisdiction.'
                },
                {
                    id: 686,
                    start: 2980.103,
                    end: 2981.729,
                    text: 'I declare myself incompetent.'
                },
                {
                    id: 687,
                    start: 2990.738,
                    end: 2992.365,
                    text: 'What a case, Jesus Christ.'
                },
                {
                    id: 688,
                    start: 2993.867,
                    end: 2995.243,
                    text: 'It never dies.'
                },
                { id: 689, start: 3032.405, end: 3033.448, text: 'Morales.' },
                {
                    id: 690,
                    start: 3034.574,
                    end: 3036.659,
                    text: 'Morales.-Hello.'
                },
                {
                    id: 691,
                    start: 3036.91,
                    end: 3038.077,
                    text: 'How are things?-And you?'
                },
                {
                    id: 692,
                    start: 3038.453,
                    end: 3040.496,
                    text: 'Esposito.-Of course. How are you?'
                },
                {
                    id: 693,
                    start: 3040.788,
                    end: 3042.415,
                    text: 'Fine, and you?'
                },
                { id: 694, start: 3042.582, end: 3043.791, text: 'Here I am.' },
                {
                    id: 695,
                    start: 3044.918,
                    end: 3046.461,
                    text: 'Would you like to sit?'
                },
                { id: 696, start: 3046.628, end: 3047.712, text: 'Yes.' },
                {
                    id: 697,
                    start: 3052.884,
                    end: 3054.26,
                    text: 'How are things?'
                },
                {
                    id: 698,
                    start: 3054.802,
                    end: 3057.013,
                    text: "This month I'm here Tuesdays and Thursdays"
                },
                { id: 699, start: 3057.43, end: 3058.681, text: 'What?' },
                {
                    id: 700,
                    start: 3059.224,
                    end: 3060.516,
                    text: 'In this station.'
                },
                {
                    id: 701,
                    start: 3061.184,
                    end: 3064.02,
                    text: 'The other days of the week<br />wait in the other stations.'
                },
                {
                    id: 702,
                    start: 3065.313,
                    end: 3067.148,
                    text: 'I change it every month.'
                },
                {
                    id: 703,
                    start: 3068.358,
                    end: 3070.234,
                    text: "He'll have to come through eventually."
                },
                {
                    id: 704,
                    start: 3070.777,
                    end: 3075.031,
                    text: "He must live out of town, he knows<br />in the city he'd be caught."
                },
                {
                    id: 705,
                    start: 3077.45,
                    end: 3082.121,
                    text: "It's been a year but I imagine you<br />haven't stopped investigating."
                },
                { id: 706, start: 3083.665, end: 3085.375, text: 'No, no.' },
                {
                    id: 707,
                    start: 3090.171,
                    end: 3091.923,
                    text: "You must think I'm crazy."
                },
                { id: 708, start: 3092.59, end: 3093.633, text: 'No.' },
                {
                    id: 709,
                    start: 3094.259,
                    end: 3095.885,
                    text: "Don't worry about me, please."
                },
                {
                    id: 710,
                    start: 3096.052,
                    end: 3097.72,
                    text: "No, I won't."
                },
                {
                    id: 711,
                    start: 3102.642,
                    end: 3105.311,
                    text: 'The worst part is I’m starting to forget.'
                },
                {
                    id: 712,
                    start: 3106.354,
                    end: 3109.565,
                    text: 'I have to constantly<br />make myself remember her.'
                },
                {
                    id: 713,
                    start: 3112.944,
                    end: 3114.404,
                    text: 'The day she was killed...'
                },
                {
                    id: 714,
                    start: 3114.779,
                    end: 3116.864,
                    text: 'Liliana made me tea with lemon.'
                },
                {
                    id: 715,
                    start: 3118.282,
                    end: 3121.452,
                    text: "I'd been coughing all night and<br />she said it would help."
                },
                {
                    id: 716,
                    start: 3123.746,
                    end: 3126.207,
                    text: 'I remember those stupid things.'
                },
                {
                    id: 717,
                    start: 3128.376,
                    end: 3130.003,
                    text: 'Then I start having doubts'
                },
                {
                    id: 718,
                    start: 3130.878,
                    end: 3134.298,
                    text: "and I don't remember if it was<br />lemon or honey in the tea."
                },
                {
                    id: 719,
                    start: 3135.842,
                    end: 3140.43,
                    text: "And I don't know if it's a memory or<br />a memory of a memory I'm left with."
                },
                { id: 720, start: 3154.569, end: 3155.57, text: 'Excuse me.' },
                {
                    id: 721,
                    start: 3156.529,
                    end: 3157.905,
                    text: 'I need to talk to you.'
                },
                { id: 722, start: 3158.823, end: 3160.033, text: 'Come in.' },
                { id: 723, start: 3160.908, end: 3162.035, text: 'Thank you.' },
                {
                    id: 724,
                    start: 3165.121,
                    end: 3167.04,
                    text: 'Something happened to me yesterday.'
                },
                {
                    id: 725,
                    start: 3168.791,
                    end: 3171.169,
                    text: 'I was up all night thinking about it.'
                },
                {
                    id: 726,
                    start: 3172.211,
                    end: 3174.547,
                    text: 'I thought about you... Have you ever...'
                },
                {
                    id: 727,
                    start: 3176.591,
                    end: 3178.384,
                    text: 'Have you ever seen...'
                },
                {
                    id: 728,
                    start: 3179.427,
                    end: 3181.596,
                    text: 'things from a different angle?'
                },
                {
                    id: 729,
                    start: 3182.388,
                    end: 3184.432,
                    text: 'You see someone else...'
                },
                {
                    id: 730,
                    start: 3184.557,
                    end: 3189.604,
                    text: 'and what the other person is going through<br />helps you see your own life.'
                },
                {
                    id: 731,
                    start: 3192.273,
                    end: 3194.567,
                    text: 'Go on.-Yes.'
                },
                {
                    id: 732,
                    start: 3196.277,
                    end: 3197.612,
                    text: 'And I thought...'
                },
                {
                    id: 733,
                    start: 3198.321,
                    end: 3200.031,
                    text: 'I have to talk to Irene."'
                },
                {
                    id: 734,
                    start: 3200.782,
                    end: 3202.95,
                    text: 'You might get pissed at me... Sorry.'
                },
                {
                    id: 735,
                    start: 3203.117,
                    end: 3205.787,
                    text: 'You might want to kill me, but...'
                },
                {
                    id: 736,
                    start: 3206.954,
                    end: 3208.623,
                    text: 'I have to give it a try.'
                },
                {
                    id: 737,
                    start: 3210.875,
                    end: 3213.044,
                    text: 'Wait a moment while I close the door.'
                },
                {
                    id: 738,
                    start: 3217.673,
                    end: 3219.759,
                    text: "Sandoval, I'm busy. I'll<br />call you when I'm done."
                },
                {
                    id: 739,
                    start: 3219.884,
                    end: 3221.511,
                    text: 'Benjamin asked me to come.'
                },
                {
                    id: 740,
                    start: 3221.636,
                    end: 3224.597,
                    text: 'Yes, I was hoping the<br />three of us could talk.'
                },
                {
                    id: 741,
                    start: 3225.223,
                    end: 3226.766,
                    text: "Excuse me, ma'am."
                },
                {
                    id: 742,
                    start: 3236.984,
                    end: 3239.946,
                    text: 'I ran into Morales yesterday at<br />the train station.'
                },
                {
                    id: 743,
                    start: 3240.822,
                    end: 3242.573,
                    text: 'Know what he was doing?'
                },
                {
                    id: 744,
                    start: 3243.157,
                    end: 3244.826,
                    text: 'My crystal ball is broken.'
                },
                {
                    id: 745,
                    start: 3247.411,
                    end: 3251.249,
                    text: 'He goes to the terminals every<br />day looking for the killer.'
                },
                {
                    id: 746,
                    start: 3251.415,
                    end: 3254.502,
                    text: 'Every single day after working at the bank.'
                },
                {
                    id: 747,
                    start: 3255.67,
                    end: 3257.588,
                    text: "You can't imagine his love."
                },
                {
                    id: 748,
                    start: 3258.423,
                    end: 3259.715,
                    text: "It's touching."
                },
                {
                    id: 749,
                    start: 3262.677,
                    end: 3266.472,
                    text: "It's as if his wife's<br />death just left him there..."
                },
                {
                    id: 750,
                    start: 3266.639,
                    end: 3268.766,
                    text: 'stuck in time forever.'
                },
                {
                    id: 751,
                    start: 3270.601,
                    end: 3272.687,
                    text: 'You should see his eyes.'
                },
                {
                    id: 752,
                    start: 3274.522,
                    end: 3277.108,
                    text: "They're in a state of pure love."
                },
                {
                    id: 753,
                    start: 3278.484,
                    end: 3280.653,
                    text: 'Can you imagine a love like that?'
                },
                {
                    id: 754,
                    start: 3280.736,
                    end: 3284.198,
                    text: 'Unaffected by the wear<br />and tear of the routine?'
                },
                {
                    id: 755,
                    start: 3287.66,
                    end: 3289.787,
                    text: "Speak for yourself, I<br />don't know about that."
                },
                {
                    id: 756,
                    start: 3294.5,
                    end: 3296.502,
                    text: 'We think the guy...'
                },
                {
                    id: 757,
                    start: 3296.669,
                    end: 3299.213,
                    text: "deserves another chance, ma'am."
                },
                {
                    id: 758,
                    start: 3301.841,
                    end: 3302.884,
                    text: 'Where do I come in?'
                },
                {
                    id: 759,
                    start: 3303.384,
                    end: 3305.052,
                    text: 'The case is closed.'
                },
                {
                    id: 760,
                    start: 3305.219,
                    end: 3306.846,
                    text: "We'd have to reopen it."
                },
                {
                    id: 761,
                    start: 3308.181,
                    end: 3311.184,
                    text: "You're asking me to destroy an<br />official document..."
                },
                {
                    id: 762,
                    start: 3311.35,
                    end: 3313.728,
                    text: 'with mine and the judge’s signature on it...'
                },
                {
                    id: 763,
                    start: 3314.061,
                    end: 3316.564,
                    text: 'and to falsify statements and dates...'
                },
                {
                    id: 764,
                    start: 3316.689,
                    end: 3319.484,
                    text: 'so it will look like the case is still open?'
                },
                {
                    id: 765,
                    start: 3319.65,
                    end: 3322.57,
                    text: "That's a brilliant idea. We<br />hadn't...-Don't fuck with me."
                },
                { id: 766, start: 3322.595, end: 3325.595, text: '' },
                {
                    id: 767,
                    start: 3351.933,
                    end: 3353.601,
                    text: 'Everything okay, sir?'
                },
                { id: 768, start: 3355.728, end: 3356.771, text: 'Tell me.' },
                {
                    id: 769,
                    start: 3357.063,
                    end: 3360.066,
                    text: 'Did you see a stack of letters on my desk?'
                },
                { id: 770, start: 3360.233, end: 3361.234, text: 'No.' },
                { id: 771, start: 3363.027, end: 3364.195, text: 'Sandoval?' },
                {
                    id: 772,
                    start: 3364.403,
                    end: 3366.405,
                    text: 'He left down Talcahuano.'
                },
                {
                    id: 773,
                    start: 3374.997,
                    end: 3377.959,
                    text: 'Not only do you sneak off to get<br />drunk, you also steal evidence.'
                },
                {
                    id: 774,
                    start: 3378.125,
                    end: 3379.71,
                    text: "Everything's under control."
                },
                {
                    id: 775,
                    start: 3379.835,
                    end: 3381.295,
                    text: 'If Irene reads the file...'
                },
                {
                    id: 776,
                    start: 3381.462,
                    end: 3383.214,
                    text: 'Hands off. Are you nuts?'
                },
                {
                    id: 777,
                    start: 3383.422,
                    end: 3385.758,
                    text: "We're going back.-Sit down for a second."
                },
                {
                    id: 778,
                    start: 3386.175,
                    end: 3388.177,
                    text: 'Sit down and take it easy.'
                },
                {
                    id: 779,
                    start: 3393.766,
                    end: 3396.686,
                    text: "Know why we can't find him...<br />Benjamin?"
                },
                {
                    id: 780,
                    start: 3397.186,
                    end: 3399.021,
                    text: "Because we're stupid."
                },
                {
                    id: 781,
                    start: 3399.939,
                    end: 3402.149,
                    text: 'Look: "Twelve letters.'
                },
                {
                    id: 782,
                    start: 3402.817,
                    end: 3406.153,
                    text: '31 pages. Five jobs..."'
                },
                {
                    id: 783,
                    start: 3406.57,
                    end: 3408.823,
                    text: 'I already read you this part.-Can we go?'
                },
                {
                    id: 784,
                    start: 3409.031,
                    end: 3412.868,
                    text: "Hold on a second. My mind<br />exploded, I couldn't stop."
                },
                {
                    id: 785,
                    start: 3413.077,
                    end: 3416.914,
                    text: 'I kept asking myself, "Why<br />can\'t we find this guy?"'
                },
                {
                    id: 786,
                    start: 3417.29,
                    end: 3419.292,
                    text: 'He always vanishes. Where is he?'
                },
                {
                    id: 787,
                    start: 3421.836,
                    end: 3424.63,
                    text: 'And I started thinking about guys.'
                },
                {
                    id: 788,
                    start: 3425.172,
                    end: 3429.969,
                    text: 'Guys in general.Not just this guy, but...'
                },
                {
                    id: 789,
                    start: 3430.553,
                    end: 3431.804,
                    text: 'Guys in general.'
                },
                { id: 790, start: 3433.681, end: 3435.182, text: 'A guy.' },
                {
                    id: 791,
                    start: 3437.143,
                    end: 3440.146,
                    text: 'A guy can do anything to be different.'
                },
                {
                    id: 792,
                    start: 3440.563,
                    end: 3444.775,
                    text: "But there's one thing he can't change.<br />Not him, not you, not anybody."
                },
                {
                    id: 793,
                    start: 3446.61,
                    end: 3447.82,
                    text: 'Take me, for example.'
                },
                {
                    id: 794,
                    start: 3448.529,
                    end: 3450.197,
                    text: "I'm young..."
                },
                {
                    id: 795,
                    start: 3450.781,
                    end: 3453.284,
                    text: 'I have a good job, a wife who loves me...'
                },
                {
                    id: 796,
                    start: 3453.492,
                    end: 3454.785,
                    text: 'And like you always say...'
                },
                {
                    id: 797,
                    start: 3455.453,
                    end: 3459.123,
                    text: 'I keep throwing my life<br />away in dives like this.'
                },
                {
                    id: 798,
                    start: 3459.332,
                    end: 3463.669,
                    text: 'Many times you\'ve asked,<br />"Why are you here, Pablo?"'
                },
                {
                    id: 799,
                    start: 3464.42,
                    end: 3466.297,
                    text: 'You know why, Benjamin?'
                },
                {
                    id: 800,
                    start: 3468.049,
                    end: 3469.967,
                    text: "Because it's my passion."
                },
                {
                    id: 801,
                    start: 3471.218,
                    end: 3473.22,
                    text: 'I love coming here...'
                },
                {
                    id: 802,
                    start: 3473.721,
                    end: 3475.389,
                    text: 'getting drunk...'
                },
                {
                    id: 803,
                    start: 3476.515,
                    end: 3478.601,
                    text: 'slugging it out with<br />anyone who pisses me off.'
                },
                { id: 804, start: 3478.726, end: 3479.81, text: 'I love it.' },
                {
                    id: 805,
                    start: 3481.562,
                    end: 3483.397,
                    text: 'Just like you, Benjamin.'
                },
                {
                    id: 806,
                    start: 3484.44,
                    end: 3488.944,
                    text: "There's nothing you can do to<br />get Irene out of your head."
                },
                {
                    id: 807,
                    start: 3489.945,
                    end: 3492.99,
                    text: "She's dying to marry someone else..."
                },
                {
                    id: 808,
                    start: 3493.157,
                    end: 3497.62,
                    text: 'her desk drawer is full<br />of wedding dress magazines.'
                },
                {
                    id: 809,
                    start: 3498.371,
                    end: 3500.998,
                    text: 'She got engaged, had a party, everything.'
                },
                { id: 810, start: 3501.248, end: 3502.667, text: 'But you...' },
                {
                    id: 811,
                    start: 3503.167,
                    end: 3506.003,
                    text: 'you keep waiting for the miracle, Benjamin.'
                },
                { id: 812, start: 3507.129, end: 3508.422, text: 'Why?' },
                { id: 813, start: 3509.256, end: 3510.508, text: 'Come here.' },
                {
                    id: 814,
                    start: 3511.092,
                    end: 3512.426,
                    text: "How's it going, notary?"
                },
                {
                    id: 815,
                    start: 3512.593,
                    end: 3514.095,
                    text: 'Hey, there.-How are you?'
                },
                {
                    id: 816,
                    start: 3514.345,
                    end: 3518.015,
                    text: 'This is that friend I mentioned.Esposito,<br />Andretta the notary.'
                },
                {
                    id: 817,
                    start: 3518.224,
                    end: 3520.184,
                    text: 'A real notary, and my expert advisor.'
                },
                {
                    id: 818,
                    start: 3520.393,
                    end: 3521.644,
                    text: "Here's my card."
                },
                {
                    id: 819,
                    start: 3522.103,
                    end: 3524.647,
                    text: "Let's begin with the first<br />letter from our friend Gomez."
                },
                {
                    id: 820,
                    start: 3524.855,
                    end: 3526.44,
                    text: "It's okay, keep it."
                },
                {
                    id: 821,
                    start: 3526.899,
                    end: 3528.442,
                    text: '"I swear it rained so hard...'
                },
                {
                    id: 822,
                    start: 3528.609,
                    end: 3531.278,
                    text: 'I looked worse than Oleniak that night."'
                },
                {
                    id: 823,
                    start: 3531.445,
                    end: 3533.948,
                    text: 'Notary, please.-Juan Carlos Oleniak.'
                },
                {
                    id: 824,
                    start: 3534.115,
                    end: 3536.951,
                    text: "First played for Racing, also<br />known as the Academy, in '60."
                },
                {
                    id: 825,
                    start: 3537.118,
                    end: 3541.08,
                    text: "He went to Argentino Juniors,<br />and back to Racing in '63."
                },
                {
                    id: 826,
                    start: 3541.247,
                    end: 3542.915,
                    text: 'In a classic match with San Lorenzo...'
                },
                {
                    id: 827,
                    start: 3542.998,
                    end: 3546.377,
                    text: 'he got pushed and fell<br />face-first into the ditch.'
                },
                {
                    id: 828,
                    start: 3546.627,
                    end: 3548.003,
                    text: 'He was soaked.'
                },
                {
                    id: 829,
                    start: 3548.212,
                    end: 3552.466,
                    text: 'We call him Plato.The Academy is his life.'
                },
                {
                    id: 830,
                    start: 3552.925,
                    end: 3555.97,
                    text: '"I\'ll send for you.We make a great team.'
                },
                {
                    id: 831,
                    start: 3556.137,
                    end: 3559.807,
                    text: 'Anido by himself isn\'t the<br />same as Anido with Mesias."'
                },
                {
                    id: 832,
                    start: 3560.057,
                    end: 3563.31,
                    text: "Anido and Mesias, backs on the<br />club that won it all in '61."
                },
                {
                    id: 833,
                    start: 3563.477,
                    end: 3564.979,
                    text: 'Negri at goalie, Anido and Mesias.'
                },
                {
                    id: 834,
                    start: 3565.229,
                    end: 3568.315,
                    text: 'Blanco, Peano and Sacchi.<br />Corbatta, Pizzuti...'
                },
                {
                    id: 835,
                    start: 3568.816,
                    end: 3570.192,
                    text: 'Mansilla, Sosa and Belen.'
                },
                {
                    id: 836,
                    start: 3570.985,
                    end: 3574.53,
                    text: "\"Don't worry about me.<br />I'm like Manfredini..."
                },
                {
                    id: 837,
                    start: 3574.738,
                    end: 3576.657,
                    text: 'not Bavastro." Notary?'
                },
                {
                    id: 838,
                    start: 3576.991,
                    end: 3578.993,
                    text: 'Pedro Waldemar Manfredini.'
                },
                {
                    id: 839,
                    start: 3579.16,
                    end: 3583.247,
                    text: 'Racing paid peanuts for<br />him and he ended up being...'
                },
                {
                    id: 840,
                    start: 3583.414,
                    end: 3586.834,
                    text: 'an extraordinary player. Incredible.'
                },
                {
                    id: 841,
                    start: 3587.376,
                    end: 3589.67,
                    text: 'Julio Bavastro, right forward.'
                },
                {
                    id: 842,
                    start: 3589.837,
                    end: 3593.674,
                    text: "Played only two matches between<br />'62 and '63 without scoring."
                },
                {
                    id: 843,
                    start: 3593.883,
                    end: 3596.177,
                    text: 'Quote: "I don\'t want to end up like Sanchez.'
                },
                {
                    id: 844,
                    start: 3596.385,
                    end: 3598.012,
                    text: "Who's he talking about?"
                },
                {
                    id: 845,
                    start: 3598.179,
                    end: 3602.516,
                    text: 'He can only mean the<br />goalie, Ataulfo Sanchez.'
                },
                {
                    id: 846,
                    start: 3602.85,
                    end: 3604.393,
                    text: 'Eternal bench warmer.'
                },
                {
                    id: 847,
                    start: 3604.894,
                    end: 3609.064,
                    text: "He played only 17<br />matches between '57 and '61."
                },
                {
                    id: 848,
                    start: 3609.607,
                    end: 3611.525,
                    text: 'Notary, what is Racing to you?'
                },
                { id: 849, start: 3612.109, end: 3613.402, text: 'A passion.' },
                {
                    id: 850,
                    start: 3613.569,
                    end: 3615.529,
                    text: 'Even after nine years without<br />a championship?'
                },
                {
                    id: 851,
                    start: 3615.738,
                    end: 3617.406,
                    text: 'A passion is a passion.'
                },
                {
                    id: 852,
                    start: 3617.615,
                    end: 3619.2,
                    text: 'You see, Benjamin?'
                },
                {
                    id: 853,
                    start: 3619.533,
                    end: 3624.163,
                    text: 'A guy can change anything. His<br />face, his home, his family...'
                },
                {
                    id: 854,
                    start: 3625.039,
                    end: 3629.043,
                    text: 'his girlfriend, his religion, his God.'
                },
                {
                    id: 855,
                    start: 3629.251,
                    end: 3632.296,
                    text: "But there's one thing he can't change."
                },
                {
                    id: 856,
                    start: 3632.546,
                    end: 3635.299,
                    text: "He can't change... his passion."
                },
                {
                    id: 857,
                    start: 3638.761,
                    end: 3641.43,
                    text: "It's a beautiful night for soccer."
                },
                {
                    id: 858,
                    start: 3641.597,
                    end: 3646.519,
                    text: "Huracan hosts Avellaneda's Racing<br />Club at Tomas Duco Stadium..."
                },
                {
                    id: 859,
                    start: 3646.727,
                    end: 3650.064,
                    text: 'on a splendid night for soccer.'
                },
                {
                    id: 860,
                    start: 3650.231,
                    end: 3653.943,
                    text: 'Racing has slipped in the standings...'
                },
                {
                    id: 861,
                    start: 3654.068,
                    end: 3658.697,
                    text: "and can't waste this final opportunity..."
                },
                {
                    id: 862,
                    start: 3658.906,
                    end: 3661.617,
                    text: 'to stay in the race for the championship.'
                },
                {
                    id: 863,
                    start: 3661.742,
                    end: 3664.912,
                    text: 'Jorge has the ball. He blows by Brindisi.'
                },
                {
                    id: 864,
                    start: 3665.079,
                    end: 3668.916,
                    text: 'Great move. He heads<br />down the left sideline.'
                },
                {
                    id: 865,
                    start: 3669.083,
                    end: 3671.168,
                    text: 'He shakes Houseman perfectly.'
                },
                {
                    id: 866,
                    start: 3671.377,
                    end: 3673.379,
                    text: 'Centers deep to Nestor Escola.'
                },
                {
                    id: 867,
                    start: 3673.546,
                    end: 3676.757,
                    text: 'Over to Roberto Diaz. Diaz<br />kicks with his left...'
                },
                {
                    id: 868,
                    start: 3676.924,
                    end: 3680.97,
                    text: 'He hits the bar! Incredible!<br />Huracan gets away with one!'
                },
                {
                    id: 869,
                    start: 3681.22,
                    end: 3684.89,
                    text: 'A spectacular first possession!<br />Racing almost scored first.'
                },
                {
                    id: 870,
                    start: 3685.057,
                    end: 3691.522,
                    text: 'Academy! Academy! Academy!'
                },
                {
                    id: 871,
                    start: 3716.005,
                    end: 3719.508,
                    text: "This is madness. It's chaos."
                },
                {
                    id: 872,
                    start: 3719.675,
                    end: 3723.846,
                    text: "You just don't know soccer. You<br />have to be a little more patient."
                },
                {
                    id: 873,
                    start: 3723.971,
                    end: 3726.515,
                    text: "There's too many people. It's impossible."
                },
                {
                    id: 874,
                    start: 3727.349,
                    end: 3728.392,
                    text: 'There he is!'
                },
                {
                    id: 875,
                    start: 3729.184,
                    end: 3730.686,
                    text: 'Over there!-Where?'
                },
                {
                    id: 876,
                    start: 3730.978,
                    end: 3733.647,
                    text: "There!-Where? I don't see him."
                },
                {
                    id: 877,
                    start: 3741.322,
                    end: 3743.49,
                    text: 'Excuse me. Pardon me.'
                },
                {
                    id: 878,
                    start: 3754.543,
                    end: 3756.003,
                    text: 'Isidore-Gomez.'
                },
                {
                    id: 879,
                    start: 3758.923,
                    end: 3761.467,
                    text: "Come on, let's go."
                },
                {
                    id: 880,
                    start: 3762.051,
                    end: 3763.844,
                    text: "What's wrong, Benjamin?"
                },
                {
                    id: 881,
                    start: 3763.969,
                    end: 3768.265,
                    text: "I'm sick of this. It's been a<br />month.We've been to four matches!"
                },
                {
                    id: 882,
                    start: 3768.515,
                    end: 3771.185,
                    text: 'I said to be patient.'
                },
                { id: 883, start: 3784.031, end: 3785.199, text: 'Gomez!' },
                { id: 884, start: 3785.532, end: 3787.618, text: 'Goal!' },
                {
                    id: 885,
                    start: 3803.342,
                    end: 3806.053,
                    text: 'Damn it... Gomez! Come back here!'
                },
                {
                    id: 886,
                    start: 3806.387,
                    end: 3809.723,
                    text: "Come back here! Don't run! Come back!"
                },
                { id: 887, start: 3811.225, end: 3812.226, text: 'Come back!' },
                {
                    id: 888,
                    start: 3817.439,
                    end: 3819.191,
                    text: 'You guys, come on!'
                },
                {
                    id: 889,
                    start: 3819.817,
                    end: 3821.819,
                    text: 'Benjamin, hurry up, please!'
                },
                {
                    id: 890,
                    start: 3821.986,
                    end: 3824.029,
                    text: 'I had him and he got away!'
                },
                {
                    id: 891,
                    start: 3824.196,
                    end: 3825.698,
                    text: "Where's Baez?"
                },
                {
                    id: 892,
                    start: 3826.532,
                    end: 3829.535,
                    text: 'Baez! Baez! He ran off, did you see him?'
                },
                {
                    id: 893,
                    start: 3829.66,
                    end: 3830.661,
                    text: "What's he look like?"
                },
                {
                    id: 894,
                    start: 3830.828,
                    end: 3832.629,
                    text: 'I gave you the photo!-I<br />mean how tall is he?'
                },
                {
                    id: 895,
                    start: 3832.746,
                    end: 3834.903,
                    text: 'Medium-height, skinny...<br />What are they doing?'
                },
                {
                    id: 896,
                    start: 3834.916,
                    end: 3837.084,
                    text: "He's getting away!"
                },
                {
                    id: 897,
                    start: 3838.043,
                    end: 3842.131,
                    text: "I can't take it, Benjamin.<br />What's he look like, he asks!"
                },
                {
                    id: 898,
                    start: 3842.464,
                    end: 3845.092,
                    text: "He should have been there, not<br />us!-He doesn't know him, we do!"
                },
                {
                    id: 899,
                    start: 3845.259,
                    end: 3846.844,
                    text: "Why didn't you give him the photo?"
                },
                {
                    id: 900,
                    start: 3847.052,
                    end: 3849.972,
                    text: 'I did give it to him!-Go<br />to hell, you motherfucker!'
                },
                {
                    id: 901,
                    start: 3863.61,
                    end: 3866.655,
                    text: "Can't I take a crap in peace?"
                },
                { id: 902, start: 3871.702, end: 3872.703, text: 'Come out!' },
                {
                    id: 903,
                    start: 3872.953,
                    end: 3874.663,
                    text: "Fuck off! It's occupied!"
                },
                {
                    id: 904,
                    start: 3875.873,
                    end: 3878.792,
                    text: 'Come on out, the cops are here.<br />Nothing will happen to you.'
                },
                {
                    id: 905,
                    start: 3879.001,
                    end: 3881.17,
                    text: 'What police? Quit fucking around.'
                },
                { id: 906, start: 3882.045, end: 3883.172, text: 'Pablo!' },
                {
                    id: 907,
                    start: 3955.536,
                    end: 3957.538,
                    text: "Sorry. How's it going?"
                },
                {
                    id: 908,
                    start: 3957.663,
                    end: 3959.414,
                    text: "I'm waiting for Sandoval.-What for?"
                },
                {
                    id: 909,
                    start: 3959.832,
                    end: 3962,
                    text: 'I play the nice guy, then he comes in...'
                },
                {
                    id: 910,
                    start: 3962.167,
                    end: 3964.127,
                    text: "I'll explain later, it's a routine we have."
                },
                {
                    id: 911,
                    start: 3964.253,
                    end: 3967.631,
                    text: 'Oldest trick in the book. You<br />can’t question him without the judge.'
                },
                {
                    id: 912,
                    start: 3967.84,
                    end: 3971.51,
                    text: 'Actually, we have to pull<br />it off before he gets here.'
                },
                {
                    id: 913,
                    start: 3971.677,
                    end: 3973.887,
                    text: 'Questioning a prisoner with<br />no lawyer or judge?'
                },
                {
                    id: 914,
                    start: 3974.054,
                    end: 3976.139,
                    text: 'Ordonez! You seen Sandoval?'
                },
                {
                    id: 915,
                    start: 3976.849,
                    end: 3979.059,
                    text: 'He left a while ago.-Damn it.'
                },
                {
                    id: 916,
                    start: 3979.184,
                    end: 3981.395,
                    text: "It won't stand up. What<br />will you charge him with?"
                },
                {
                    id: 917,
                    start: 3981.562,
                    end: 3984.398,
                    text: "What do you mean? You think<br />it's little to go on?"
                },
                {
                    id: 918,
                    start: 3984.565,
                    end: 3987.568,
                    text: 'Looking at the victim in a photo?<br />Yes, it is.'
                },
                {
                    id: 919,
                    start: 3987.734,
                    end: 3989.695,
                    text: "That's why we have to soften him up."
                },
                {
                    id: 920,
                    start: 3989.862,
                    end: 3991.029,
                    text: "What if it's not him?"
                },
                {
                    id: 921,
                    start: 3991.196,
                    end: 3993.073,
                    text: "Don't look at me like that.-Eduardo!"
                },
                {
                    id: 922,
                    start: 3993.24,
                    end: 3994.801,
                    text: "What if it's not him?-Of course it is."
                },
                {
                    id: 923,
                    start: 3994.825,
                    end: 3997.786,
                    text: "Yes, Counselor?-Don't call me that.<br />Go get Sandoval."
                },
                {
                    id: 924,
                    start: 3998.245,
                    end: 4000.372,
                    text: 'Should I take a taxi?-Yes. No, no.'
                },
                {
                    id: 925,
                    start: 4000.581,
                    end: 4003.333,
                    text: "He goes to Robertino's in the morning."
                },
                {
                    id: 926,
                    start: 4003.417,
                    end: 4005.419,
                    text: 'No. Wait, Eduardo.'
                },
                {
                    id: 927,
                    start: 4006.42,
                    end: 4007.671,
                    text: 'What are you doing?'
                },
                {
                    id: 928,
                    start: 4007.754,
                    end: 4008.797,
                    text: 'Sorry, sorry.'
                },
                { id: 929, start: 4009.506, end: 4010.757, text: "It's him." },
                {
                    id: 930,
                    start: 4010.924,
                    end: 4012.593,
                    text: "How do you know?-I don't know."
                },
                {
                    id: 931,
                    start: 4012.843,
                    end: 4016.013,
                    text: "See? I don't know how I know, but I know."
                },
                { id: 932, start: 4016.096, end: 4017.139, text: 'How?' },
                {
                    id: 933,
                    start: 4025.397,
                    end: 4026.899,
                    text: 'Gomez, Isidoro Nestor.'
                },
                {
                    id: 934,
                    start: 4030.569,
                    end: 4031.695,
                    text: 'I.D. number.'
                },
                { id: 935, start: 4031.82, end: 4034.239, text: '10,740,925.' },
                {
                    id: 936,
                    start: 4035.282,
                    end: 4036.95,
                    text: 'Marital status?-Single.'
                },
                { id: 937, start: 4038.16, end: 4039.328, text: 'Address?' },
                {
                    id: 938,
                    start: 4039.453,
                    end: 4042.247,
                    text: 'Mocoreta 2428, Isidro Casanova.'
                },
                {
                    id: 939,
                    start: 4045.5,
                    end: 4047.461,
                    text: 'What train do you take into town?'
                },
                {
                    id: 940,
                    start: 4050.088,
                    end: 4052.007,
                    text: 'What train do you take into town?'
                },
                {
                    id: 941,
                    start: 4052.633,
                    end: 4055.26,
                    text: "I don't take the train.I take the bus."
                },
                {
                    id: 942,
                    start: 4061.975,
                    end: 4063.518,
                    text: "What's the problem?"
                },
                { id: 943, start: 4067.773, end: 4068.815, text: 'Mo...' },
                { id: 944, start: 4069.942, end: 4070.943, text: 'core...' },
                {
                    id: 945,
                    start: 4073.362,
                    end: 4074.655,
                    text: 'This typewriter is no good.'
                },
                {
                    id: 946,
                    start: 4077.95,
                    end: 4079.159,
                    text: 'The "A" doesn\'t work.'
                },
                {
                    id: 947,
                    start: 4080.869,
                    end: 4082.12,
                    text: 'Wait, hold on.'
                },
                {
                    id: 948,
                    start: 4083.372,
                    end: 4085.29,
                    text: 'What is this about?'
                },
                {
                    id: 949,
                    start: 4086.708,
                    end: 4088.418,
                    text: 'Please, I beg you.'
                },
                {
                    id: 950,
                    start: 4092.839,
                    end: 4098.136,
                    text: "You're implicated in the Liliana Coloto<br />case, rape and homicide."
                },
                {
                    id: 951,
                    start: 4098.303,
                    end: 4101.807,
                    text: 'It happened on June 21st, 1974.'
                },
                {
                    id: 952,
                    start: 4101.974,
                    end: 4103.976,
                    text: "Actually, you're the accused."
                },
                {
                    id: 953,
                    start: 4104.184,
                    end: 4106.687,
                    text: "I'm going to take your statement."
                },
                {
                    id: 954,
                    start: 4107.562,
                    end: 4111.566,
                    text: "You'll be assigned a public<br />defender.-Wait, wait, wait."
                },
                {
                    id: 955,
                    start: 4112.484,
                    end: 4113.86,
                    text: 'Liliana Colo to?'
                },
                {
                    id: 956,
                    start: 4115.988,
                    end: 4118.282,
                    text: 'I knew her back in Chivilcoy.'
                },
                {
                    id: 957,
                    start: 4119.157,
                    end: 4120.492,
                    text: 'What happened to her?'
                },
                {
                    id: 958,
                    start: 4122.744,
                    end: 4124.204,
                    text: 'Tell me, Gomez.'
                },
                {
                    id: 959,
                    start: 4124.371,
                    end: 4126.623,
                    text: "Why do you think you've spent three days..."
                },
                {
                    id: 960,
                    start: 4126.79,
                    end: 4128.208,
                    text: 'behind bars?'
                },
                {
                    id: 961,
                    start: 4128.667,
                    end: 4130.794,
                    text: 'I have no idea. I was at the match...'
                },
                {
                    id: 962,
                    start: 4130.919,
                    end: 4133.505,
                    text: 'Yeah, and you took off<br />running.-What would you do?'
                },
                {
                    id: 963,
                    start: 4133.588,
                    end: 4137.175,
                    text: 'Two crazy-looking guys suddenly jump you...<br />What happened to Liliana?'
                },
                {
                    id: 964,
                    start: 4137.551,
                    end: 4138.969,
                    text: "Look, Gomez, don't..."
                },
                {
                    id: 965,
                    start: 4140.053,
                    end: 4142.931,
                    text: 'You know as well as I do you<br />raped and killed her.'
                },
                { id: 966, start: 4143.89, end: 4144.975, text: 'Liliana?' },
                {
                    id: 967,
                    start: 4145.392,
                    end: 4147.311,
                    text: 'Are you serious? I would never do that.'
                },
                {
                    id: 968,
                    start: 4147.477,
                    end: 4150.23,
                    text: "I haven't set foot in Chivilcoyin<br />over a year, I can prove it."
                },
                {
                    id: 969,
                    start: 4150.355,
                    end: 4152.566,
                    text: 'We looked for you a week<br />after the homicide...'
                },
                {
                    id: 970,
                    start: 4152.816,
                    end: 4155.068,
                    text: 'and you disappeared,<br />from a hostel and a job.'
                },
                {
                    id: 971,
                    start: 4155.235,
                    end: 4157.821,
                    text: 'What hostel? I never left any hostel.'
                },
                {
                    id: 972,
                    start: 4157.988,
                    end: 4160.657,
                    text: "Gomez, don't play dumb."
                },
                {
                    id: 973,
                    start: 4160.824,
                    end: 4163.66,
                    text: 'The hostel on Piedras.-That<br />was a year ago!'
                },
                {
                    id: 974,
                    start: 4163.869,
                    end: 4166.955,
                    text: "I left because I couldn't afford it."
                },
                {
                    id: 975,
                    start: 4167.08,
                    end: 4170.125,
                    text: 'And your job?-I found<br />one that paid better.'
                },
                {
                    id: 976,
                    start: 4170.751,
                    end: 4172.419,
                    text: "What's that got to do with Liliana?"
                },
                {
                    id: 977,
                    start: 4172.836,
                    end: 4174.463,
                    text: "I've known her my whole life..."
                },
                {
                    id: 978,
                    start: 4174.588,
                    end: 4177.049,
                    text: "she's a friend from my childhood."
                },
                {
                    id: 979,
                    start: 4192.314,
                    end: 4194.066,
                    text: "They can't find Sandoval."
                },
                {
                    id: 980,
                    start: 4195.525,
                    end: 4197.444,
                    text: "What? They can't find Sandoval."
                },
                {
                    id: 981,
                    start: 4200.697,
                    end: 4203.366,
                    text: 'Okay, let me think...'
                },
                { id: 982, start: 4204.951, end: 4206.119, text: 'Listen.' },
                {
                    id: 983,
                    start: 4206.286,
                    end: 4209.998,
                    text: 'Fortuna should be here any minute.<br />Please, wait for him.'
                },
                {
                    id: 984,
                    start: 4210.207,
                    end: 4211.75,
                    text: 'Please, wait for him.'
                },
                {
                    id: 985,
                    start: 4212.918,
                    end: 4219.341,
                    text: 'Yes, you could...<br />You could be right.'
                },
                {
                    id: 986,
                    start: 4219.633,
                    end: 4221.176,
                    text: 'It might be preferable...'
                },
                {
                    id: 987,
                    start: 4221.343,
                    end: 4223.97,
                    text: 'more practical... Let me see, one second.'
                },
                {
                    id: 988,
                    start: 4235.357,
                    end: 4236.483,
                    text: 'Look, Gomez.'
                },
                {
                    id: 989,
                    start: 4238.151,
                    end: 4239.82,
                    text: 'The judge handling your case...'
                },
                {
                    id: 990,
                    start: 4241.613,
                    end: 4244.491,
                    text: "will be here soon, so we're<br />going to wait for him."
                },
                { id: 991, start: 4246.118, end: 4247.244, text: "Ma'am?" },
                {
                    id: 992,
                    start: 4247.536,
                    end: 4250.205,
                    text: 'Sorry to interrupt, deputy,<br />I mean, Counselor.'
                },
                {
                    id: 993,
                    start: 4250.997,
                    end: 4252.582,
                    text: "I know you're handling this case."
                },
                { id: 994, start: 4253.542, end: 4254.543, text: 'But...' },
                {
                    id: 995,
                    start: 4257.003,
                    end: 4259.214,
                    text: "this kid couldn't have done it."
                },
                {
                    id: 996,
                    start: 4262.092,
                    end: 4263.677,
                    text: "We'll talk outside."
                },
                {
                    id: 997,
                    start: 4263.802,
                    end: 4266.513,
                    text: 'Wait, just a minute. Look at him.'
                },
                {
                    id: 998,
                    start: 4269.307,
                    end: 4270.767,
                    text: "This kid couldn't have done it."
                },
                {
                    id: 999,
                    start: 4273.687,
                    end: 4275.021,
                    text: 'Let me see the autopsy.'
                },
                {
                    id: 1000,
                    start: 4278.191,
                    end: 4279.985,
                    text: 'The Colo to girl...'
                },
                {
                    id: 1001,
                    start: 4280.652,
                    end: 4283.155,
                    text: 'Here she is. 5 feet 6...'
                },
                {
                    id: 1002,
                    start: 4283.697,
                    end: 4285.323,
                    text: '128 pounds.'
                },
                {
                    id: 1003,
                    start: 4285.699,
                    end: 4287.325,
                    text: 'Look what he did to her.'
                },
                {
                    id: 1004,
                    start: 4288.827,
                    end: 4290.287,
                    text: "I'm sorry, Gomez."
                },
                {
                    id: 1005,
                    start: 4290.912,
                    end: 4292.664,
                    text: "But I don't buy it."
                },
                {
                    id: 1006,
                    start: 4293.29,
                    end: 4295.041,
                    text: 'The Amazon and the Pygmy?'
                },
                {
                    id: 1007,
                    start: 4298.837,
                    end: 4300.922,
                    text: 'Besides, she was a beautiful woman.'
                },
                { id: 1008, start: 4303.55, end: 4304.801, text: 'Please...' },
                {
                    id: 1009,
                    start: 4305.552,
                    end: 4306.761,
                    text: 'look at this face.'
                },
                {
                    id: 1010,
                    start: 4308.763,
                    end: 4312.058,
                    text: "A beauty like her isn’t<br />within just anyone's reach."
                },
                {
                    id: 1011,
                    start: 4312.184,
                    end: 4314.978,
                    text: 'It takes a real man to<br />hook a woman like that.'
                },
                {
                    id: 1012,
                    start: 4318.106,
                    end: 4319.941,
                    text: 'You think so?'
                },
                { id: 1013, start: 4320.734, end: 4321.86, text: 'I mean...' },
                {
                    id: 1014,
                    start: 4324.029,
                    end: 4326.072,
                    text: "The door wasn't forced."
                },
                {
                    id: 1015,
                    start: 4327.741,
                    end: 4330.494,
                    text: 'That means she knew her assailant.'
                },
                { id: 1016, start: 4331.411, end: 4332.454, text: 'Yes.' },
                {
                    id: 1017,
                    start: 4333.538,
                    end: 4337.667,
                    text: "But there's no way such a woman would<br />ever remember this twinkie."
                },
                {
                    id: 1018,
                    start: 4337.918,
                    end: 4339.92,
                    text: 'Unless she was a hooker.'
                },
                {
                    id: 1019,
                    start: 4340.212,
                    end: 4342.631,
                    text: 'Some guys you only do for money.'
                },
                {
                    id: 1020,
                    start: 4343.298,
                    end: 4344.424,
                    text: 'Who is she?'
                },
                {
                    id: 1021,
                    start: 4344.549,
                    end: 4346.218,
                    text: 'Keep your fucking mouth shut.'
                },
                {
                    id: 1022,
                    start: 4348.803,
                    end: 4352.432,
                    text: 'No, she was a decent girl assure you.'
                },
                {
                    id: 1023,
                    start: 4354.559,
                    end: 4356.686,
                    text: 'I agree with the kid about that.'
                },
                {
                    id: 1024,
                    start: 4356.895,
                    end: 4359.481,
                    text: 'She was two-timing that bank clerk for sure.'
                },
                {
                    id: 1025,
                    start: 4359.648,
                    end: 4364.653,
                    text: "I'll bet his horns were so<br />big he needed a convertible."
                },
                {
                    id: 1026,
                    start: 4365.695,
                    end: 4367.239,
                    text: 'What are you laughing at, retard?'
                },
                {
                    id: 1027,
                    start: 4368.24,
                    end: 4370.7,
                    text: 'That guy who gave testimony last time.'
                },
                {
                    id: 1028,
                    start: 4371.159,
                    end: 4373.954,
                    text: 'Sandoval? Right. I bet it was him.'
                },
                {
                    id: 1029,
                    start: 4374.246,
                    end: 4378.25,
                    text: 'He was her lover.Tall,<br />good-looking, broad shoulders.'
                },
                {
                    id: 1030,
                    start: 4378.375,
                    end: 4381.586,
                    text: 'A man truly capable of warming up a woman.'
                },
                {
                    id: 1031,
                    start: 4382.212,
                    end: 4383.38,
                    text: 'Look at this pussy.'
                },
                {
                    id: 1032,
                    start: 4386.091,
                    end: 4388.176,
                    text: "I'll bet when she saw him she thought..."
                },
                {
                    id: 1033,
                    start: 4388.343,
                    end: 4391.137,
                    text: '"Oh, no, it\'s that<br />schmuck who always makes...'
                },
                {
                    id: 1034,
                    start: 4391.263,
                    end: 4393.306,
                    text: 'mushy faces in all the photos."'
                },
                {
                    id: 1035,
                    start: 4393.765,
                    end: 4395.016,
                    text: "Isn't that right?"
                },
                { id: 1036, start: 4398.77, end: 4400.605, text: 'Yes or no?' },
                {
                    id: 1037,
                    start: 4409.239,
                    end: 4411.324,
                    text: 'Get him out of here.'
                },
                {
                    id: 1038,
                    start: 4412.993,
                    end: 4414.494,
                    text: 'Get him out of here!'
                },
                {
                    id: 1039,
                    start: 4415.078,
                    end: 4416.204,
                    text: 'I caught you!'
                },
                {
                    id: 1040,
                    start: 4416.871,
                    end: 4419.874,
                    text: 'Take him away, please.'
                },
                {
                    id: 1041,
                    start: 4442.022,
                    end: 4443.565,
                    text: 'You people are crazy.'
                },
                {
                    id: 1042,
                    start: 4445.275,
                    end: 4446.526,
                    text: "You're crazy."
                },
                {
                    id: 1043,
                    start: 4450.739,
                    end: 4452.198,
                    text: 'Listen, Benjamin.'
                },
                {
                    id: 1044,
                    start: 4453.783,
                    end: 4456.911,
                    text: '"The damage to the right parietal bone...'
                },
                {
                    id: 1045,
                    start: 4457.12,
                    end: 4461.499,
                    text: 'demonstrates the assailant<br />had extraordinary upper body strength."'
                },
                { id: 1046, start: 4463.209, end: 4464.169, text: 'Look.' },
                {
                    id: 1047,
                    start: 4464.252,
                    end: 4466.338,
                    text: 'Two noodles'
                },
                {
                    id: 1048,
                    start: 4470.216,
                    end: 4473.637,
                    text: '"Likewise, due to the depth of<br />her vaginal injuries...'
                },
                {
                    id: 1049,
                    start: 4473.803,
                    end: 4478.183,
                    text: 'we may deduce that the<br />assailant was very well-endowed."'
                },
                {
                    id: 1050,
                    start: 4478.808,
                    end: 4480.965,
                    text: "Obviously they're not<br />talking about this microbe."
                },
                {
                    id: 1051,
                    start: 4480.978,
                    end: 4483.146,
                    text: 'He must have a peanut.'
                },
                {
                    id: 1052,
                    start: 4500.663,
                    end: 4502.082,
                    text: 'There it is, bitch.'
                },
                {
                    id: 1053,
                    start: 4502.29,
                    end: 4504.125,
                    text: 'How do you like it?'
                },
                {
                    id: 1054,
                    start: 4517.305,
                    end: 4518.306,
                    text: 'Sweetheart...'
                },
                {
                    id: 1055,
                    start: 4518.973,
                    end: 4522.018,
                    text: "you'll never reach the pinata.<br />First, you're too short."
                },
                {
                    id: 1056,
                    start: 4522.977,
                    end: 4525.355,
                    text: "Second, you're not man enough for<br />a real woman like me."
                },
                {
                    id: 1057,
                    start: 4525.98,
                    end: 4527.107,
                    text: 'Not man enough?'
                },
                {
                    id: 1058,
                    start: 4527.19,
                    end: 4528.191,
                    text: 'Fucking bitch!'
                },
                {
                    id: 1059,
                    start: 4528.274,
                    end: 4531.319,
                    text: 'I fucked the shit out of her!<br />I fucked the shit out of her!'
                },
                {
                    id: 1060,
                    start: 4531.528,
                    end: 4532.654,
                    text: 'That bitch!'
                },
                {
                    id: 1061,
                    start: 4533.113,
                    end: 4535.865,
                    text: 'I fucked her brains out!'
                },
                {
                    id: 1062,
                    start: 4535.99,
                    end: 4538.493,
                    text: 'Stop, stop, let him go...'
                },
                {
                    id: 1063,
                    start: 4539.452,
                    end: 4541.788,
                    text: 'Let him go, Benjamin.'
                },
                {
                    id: 1064,
                    start: 4541.871,
                    end: 4543.456,
                    text: 'Let go of me!'
                },
                {
                    id: 1065,
                    start: 4543.623,
                    end: 4545.959,
                    text: "Touch her and I'll kill you.I'll kill you!"
                },
                {
                    id: 1066,
                    start: 4553.717,
                    end: 4554.884,
                    text: 'Let go of me!'
                },
                {
                    id: 1067,
                    start: 4601.89,
                    end: 4603.641,
                    text: 'Are you Esposito?'
                },
                {
                    id: 1068,
                    start: 4606.019,
                    end: 4608.646,
                    text: 'Are you Esposito or not?'
                },
                {
                    id: 1069,
                    start: 4620.575,
                    end: 4623.495,
                    text: "Hello?-Hi, it's me. Did I wake you?"
                },
                {
                    id: 1070,
                    start: 4624.162,
                    end: 4625.747,
                    text: 'No, I was...'
                },
                {
                    id: 1071,
                    start: 4626.247,
                    end: 4629.042,
                    text: 'working a bit.Why are you up so late?'
                },
                {
                    id: 1072,
                    start: 4629.918,
                    end: 4631.419,
                    text: '/ was thinking...'
                },
                {
                    id: 1073,
                    start: 4631.586,
                    end: 4633.963,
                    text: "You don't say.-Yeah, silly."
                },
                {
                    id: 1074,
                    start: 4634.839,
                    end: 4636.508,
                    text: 'No, about the novel.'
                },
                {
                    id: 1075,
                    start: 4636.674,
                    end: 4639.093,
                    text: "/ want to read it when it's finished."
                },
                {
                    id: 1076,
                    start: 4641.221,
                    end: 4642.805,
                    text: "Great, I'd love that."
                },
                {
                    id: 1077,
                    start: 4644.182,
                    end: 4646.601,
                    text: "Sure you don't want to talk a little while?"
                },
                {
                    id: 1078,
                    start: 4646.809,
                    end: 4650.021,
                    text: "No, I'll drink my tea and see<br />if I can get back to sleep."
                },
                { id: 1079, start: 4650.605, end: 4651.773, text: 'Okay.' },
                { id: 1080, start: 4652.065, end: 4653.608, text: 'Bye.Bye.' },
                {
                    id: 1081,
                    start: 4654.901,
                    end: 4658.071,
                    text: 'This morning, at the<br />presidential residence in Olivos...'
                },
                {
                    id: 1082,
                    start: 4658.53,
                    end: 4659.948,
                    text: 'the president of the nation...'
                },
                {
                    id: 1083,
                    start: 4660.114,
                    end: 4661.824,
                    text: 'Isabel Peron...'
                },
                {
                    id: 1084,
                    start: 4662.158,
                    end: 4664.16,
                    text: 'Irene, the dressmaker is here.'
                },
                {
                    id: 1085,
                    start: 4664.327,
                    end: 4666.496,
                    text: 'Look, she made the cape like you wanted.'
                },
                {
                    id: 1086,
                    start: 4666.704,
                    end: 4668.122,
                    text: 'Come and try it on.'
                },
                {
                    id: 1087,
                    start: 4668.706,
                    end: 4669.874,
                    text: "I'll be right in."
                },
                {
                    id: 1088,
                    start: 4670.041,
                    end: 4672.252,
                    text: 'To serve the needs of<br />several provinces...'
                },
                {
                    id: 1089,
                    start: 4672.46,
                    end: 4675.004,
                    text: 'municipalities and public facilities...'
                },
                {
                    id: 1090,
                    start: 4675.213,
                    end: 4678.007,
                    text: 'located across the country.'
                },
                {
                    id: 1091,
                    start: 4678.424,
                    end: 4682.595,
                    text: 'She personally delivered clothing,<br />school supplies and candy...'
                },
                {
                    id: 1092,
                    start: 4682.804,
                    end: 4684.514,
                    text: 'to be distributed...'
                },
                {
                    id: 1093,
                    start: 4684.681,
                    end: 4687.684,
                    text: 'in Lobos, a village in the<br />province of Buenos Aires.'
                },
                {
                    id: 1094,
                    start: 4687.851,
                    end: 4690.853,
                    text: 'Also present at the ceremony were...'
                },
                { id: 1095, start: 4704.701, end: 4705.91, text: 'Hello?' },
                {
                    id: 1096,
                    start: 4706.744,
                    end: 4709.497,
                    text: "Morales, how are you? It's<br />been ages, what a surprise!"
                },
                {
                    id: 1097,
                    start: 4711.708,
                    end: 4714.878,
                    text: "Yeah, I'm watching it,<br />but I turned it down."
                },
                { id: 1098, start: 4716.17, end: 4717.338, text: 'What?' },
                { id: 1099, start: 4719.465, end: 4720.758, text: 'What?' },
                {
                    id: 1100,
                    start: 4727.932,
                    end: 4730.56,
                    text: 'And also, thanks to them, we can achieve...'
                },
                {
                    id: 1101,
                    start: 4730.768,
                    end: 4733.688,
                    text: 'many things, because people can’t<br />do it all on their own.'
                },
                {
                    id: 1102,
                    start: 4745.491,
                    end: 4748.995,
                    text: 'Good morning.Secretary Menendez<br />Hastings from Court 42.'
                },
                {
                    id: 1103,
                    start: 4749.078,
                    end: 4750.914,
                    text: "We're here to see Mr. Romano."
                },
                {
                    id: 1104,
                    start: 4751.08,
                    end: 4753.708,
                    text: "He's very busy. What's it about?"
                },
                {
                    id: 1105,
                    start: 4754.042,
                    end: 4756.836,
                    text: "Sir! Sir! You can't go in there!"
                },
                {
                    id: 1106,
                    start: 4757.295,
                    end: 4759.13,
                    text: "I'll leave my credentials, don't worry."
                },
                {
                    id: 1107,
                    start: 4759.297,
                    end: 4762.3,
                    text: 'These two, raising their<br />hands.I want you to get them.'
                },
                {
                    id: 1108,
                    start: 4762.967,
                    end: 4764.886,
                    text: 'What are you doing here? Are you crazy?'
                },
                {
                    id: 1109,
                    start: 4765.053,
                    end: 4766.638,
                    text: 'No, you are.'
                },
                {
                    id: 1110,
                    start: 4767.305,
                    end: 4769.39,
                    text: "Ma'am.-We need to talk to you."
                },
                {
                    id: 1111,
                    start: 4770.016,
                    end: 4771.476,
                    text: 'Fellas, would you mind?'
                },
                {
                    id: 1112,
                    start: 4777.065,
                    end: 4780.109,
                    text: "If you'd called first, I'd<br />have had coffee ready."
                },
                {
                    id: 1113,
                    start: 4781.527,
                    end: 4785.365,
                    text: 'Isidore-Gomez. Rape and murder,<br />arrested by the court.'
                },
                {
                    id: 1114,
                    start: 4785.615,
                    end: 4787.283,
                    text: 'Penitentiaries informed us...'
                },
                {
                    id: 1115,
                    start: 4787.45,
                    end: 4790.078,
                    text: "he's been freed by Executive<br />Order.We checked..."
                },
                {
                    id: 1116,
                    start: 4790.244,
                    end: 4792.413,
                    text: 'and here we are.Anything to say?'
                },
                {
                    id: 1117,
                    start: 4792.622,
                    end: 4795.041,
                    text: 'Yeah, sure. That you<br />two need to get out more.'
                },
                {
                    id: 1118,
                    start: 4795.583,
                    end: 4799.087,
                    text: 'Justice is nothing but an island.<br />This is the real world.'
                },
                {
                    id: 1119,
                    start: 4799.42,
                    end: 4802.465,
                    text: "While you two are shooting<br />birds, we're in here..."
                },
                {
                    id: 1120,
                    start: 4802.674,
                    end: 4804.884,
                    text: 'fighting in the middle of the jungle.'
                },
                {
                    id: 1121,
                    start: 4806.344,
                    end: 4809.138,
                    text: 'Gomez, Gomez, Gomez... Yes.'
                },
                {
                    id: 1122,
                    start: 4809.263,
                    end: 4812.141,
                    text: 'He started working for<br />us when he was in jail.'
                },
                {
                    id: 1123,
                    start: 4812.225,
                    end: 4815.144,
                    text: "He'd give us information,<br />spy on young guerrillas..."
                },
                {
                    id: 1124,
                    start: 4815.269,
                    end: 4817.355,
                    text: 'He did good work. We like him.'
                },
                {
                    id: 1125,
                    start: 4817.605,
                    end: 4818.94,
                    text: "What's the problem?"
                },
                {
                    id: 1126,
                    start: 4820.441,
                    end: 4822.306,
                    text: "Do you realize what you're saying?<br />He confessed."
                },
                {
                    id: 1127,
                    start: 4822.319,
                    end: 4825.321,
                    text: "He's a convicted... murderer."
                },
                {
                    id: 1128,
                    start: 4825.571,
                    end: 4828.7,
                    text: "Perhaps, but he's<br />also intelligent and brave."
                },
                {
                    id: 1129,
                    start: 4829.033,
                    end: 4831.411,
                    text: 'He can break into a<br />home and get the job done.'
                },
                {
                    id: 1130,
                    start: 4832.161,
                    end: 4834.956,
                    text: 'His personal life is his<br />own business, right?'
                },
                {
                    id: 1131,
                    start: 4835.123,
                    end: 4837.875,
                    text: 'With all the subversives out there...<br />Who cares?'
                },
                {
                    id: 1132,
                    start: 4838.292,
                    end: 4840.086,
                    text: 'If we only used good guys...'
                },
                {
                    id: 1133,
                    start: 4844.465,
                    end: 4847.719,
                    text: "He was arrested under Judge<br />Fortuna's jurisdiction..."
                },
                {
                    id: 1134,
                    start: 4847.885,
                    end: 4851.514,
                    text: "Do you think I don't know you<br />let him go to get back at me?"
                },
                {
                    id: 1135,
                    start: 4851.681,
                    end: 4852.932,
                    text: "You think I'm stupid?"
                },
                {
                    id: 1136,
                    start: 4853.766,
                    end: 4857.145,
                    text: "That's two questions.Which<br />one shall I answer first?"
                },
                {
                    id: 1137,
                    start: 4857.27,
                    end: 4859.605,
                    text: "Is that true?-Ma'am..."
                },
                {
                    id: 1138,
                    start: 4860.106,
                    end: 4862.65,
                    text: 'Would you do me a favor?'
                },
                {
                    id: 1139,
                    start: 4863.067,
                    end: 4864.11,
                    text: 'Stay out of it.'
                },
                {
                    id: 1140,
                    start: 4864.694,
                    end: 4866.988,
                    text: 'What are you gonna do, file an appeal?'
                },
                {
                    id: 1141,
                    start: 4867.113,
                    end: 4869.157,
                    text: "No offense, but there's nothing you can do."
                },
                {
                    id: 1142,
                    start: 4869.365,
                    end: 4873.119,
                    text: 'Except go back to your office,<br />take a seat, and watch and learn.'
                },
                {
                    id: 1143,
                    start: 4873.244,
                    end: 4875.58,
                    text: "They don't teach the new<br />Argentina at Harvard."
                },
                {
                    id: 1144,
                    start: 4879.5,
                    end: 4881.502,
                    text: 'And why do you come with her?'
                },
                {
                    id: 1145,
                    start: 4882.045,
                    end: 4884.172,
                    text: 'You think it gives you immunity?'
                },
                {
                    id: 1146,
                    start: 4884.672,
                    end: 4887.884,
                    text: "Leave her alone, she's out of your league."
                },
                {
                    id: 1147,
                    start: 4888.76,
                    end: 4890.604,
                    text: 'She studied law, you barely<br />finished high school.'
                },
                {
                    id: 1148,
                    start: 4890.617,
                    end: 4892.472,
                    text: "She's young, you're old."
                },
                {
                    id: 1149,
                    start: 4892.555,
                    end: 4894.682,
                    text: "She's rich, you're poor."
                },
                {
                    id: 1150,
                    start: 4895.058,
                    end: 4896.726,
                    text: "She's Menendez Hastings..."
                },
                {
                    id: 1151,
                    start: 4896.851,
                    end: 4898.853,
                    text: "and you're Esposito, a zero."
                },
                {
                    id: 1152,
                    start: 4899.645,
                    end: 4902.273,
                    text: "She's untouchable, you aren't."
                },
                {
                    id: 1153,
                    start: 4903.775,
                    end: 4905.902,
                    text: 'Let her go back to her world.'
                },
                {
                    id: 1154,
                    start: 4906.527,
                    end: 4908.988,
                    text: 'But if you have a problem with me...'
                },
                {
                    id: 1155,
                    start: 4909.614,
                    end: 4912.408,
                    text: "come alone and we'll settle it."
                },
                {
                    id: 1156,
                    start: 4917.663,
                    end: 4919.04,
                    text: 'Come on, Irene.'
                },
                { id: 1157, start: 4920.666, end: 4921.918, text: "Let's go." },
                {
                    id: 1158,
                    start: 4924.837,
                    end: 4926.506,
                    text: 'You do have one thing in common.'
                },
                {
                    id: 1159,
                    start: 4928.091,
                    end: 4930.885,
                    text: 'Neither of you can do a thing about it.'
                },
                {
                    id: 1160,
                    start: 5015.261,
                    end: 5016.804,
                    text: 'You said life.'
                },
                {
                    id: 1161,
                    start: 5018.598,
                    end: 5021.267,
                    text: 'Yes, he should get life.'
                },
                {
                    id: 1162,
                    start: 5021.809,
                    end: 5023.102,
                    text: 'Well, then?'
                },
                {
                    id: 1163,
                    start: 5026.397,
                    end: 5029.066,
                    text: "These people don't give<br />a shit about justice."
                },
                {
                    id: 1164,
                    start: 5030.818,
                    end: 5034.53,
                    text: "And where he is now, we can't<br />get anywhere near him."
                },
                {
                    id: 1165,
                    start: 5039.285,
                    end: 5040.828,
                    text: 'If I could, what for?'
                },
                {
                    id: 1166,
                    start: 5041.454,
                    end: 5044.332,
                    text: 'What would I do? What would<br />four bullets get me?'
                },
                {
                    id: 1167,
                    start: 5045.249,
                    end: 5046.292,
                    text: 'A lifetime in jail.'
                },
                {
                    id: 1168,
                    start: 5047.293,
                    end: 5051.005,
                    text: 'Gomez goes free without ever<br />serving and I spend 50 years...'
                },
                {
                    id: 1169,
                    start: 5051.13,
                    end: 5054.3,
                    text: 'stuck in a cell, envying him.'
                },
                { id: 1170, start: 5056.01, end: 5057.136, text: 'No.' },
                {
                    id: 1171,
                    start: 5058.512,
                    end: 5061.807,
                    text: 'No, life in prison would have been fair.'
                },
                {
                    id: 1172,
                    start: 5066.145,
                    end: 5069.649,
                    text: "I wish I could help, but I<br />honestly don't know how."
                },
                {
                    id: 1173,
                    start: 5073.444,
                    end: 5074.987,
                    text: 'Who knows?'
                },
                {
                    id: 1174,
                    start: 5075.863,
                    end: 5077.657,
                    text: 'Some other time...'
                },
                { id: 1175, start: 5083.079, end: 5084.246, text: 'Anyway.' },
                {
                    id: 1176,
                    start: 5084.997,
                    end: 5086.582,
                    text: "I'll get it.-No, please."
                },
                {
                    id: 1177,
                    start: 5086.707,
                    end: 5087.875,
                    text: "It's just a coffee."
                },
                {
                    id: 1178,
                    start: 5092.546,
                    end: 5095.216,
                    text: "I'm very grateful for<br />everything you’ve done for me."
                },
                {
                    id: 1179,
                    start: 5096.133,
                    end: 5098.719,
                    text: "I wouldn't have made it<br />this far without you."
                },
                {
                    id: 1180,
                    start: 5101.013,
                    end: 5102.264,
                    text: 'I owe you one.'
                },
                {
                    id: 1181,
                    start: 5132.211,
                    end: 5135.339,
                    text: "Counselor, sir.lt's about<br />the Igarzabal file, sir."
                },
                {
                    id: 1182,
                    start: 5135.423,
                    end: 5138.384,
                    text: 'Stop calling me Counselor would you already?'
                },
                {
                    id: 1183,
                    start: 5138.718,
                    end: 5141.304,
                    text: "If you do it in front of the<br />judge l'll get in trouble."
                },
                {
                    id: 1184,
                    start: 5141.387,
                    end: 5142.596,
                    text: 'What about the file?'
                },
                {
                    id: 1185,
                    start: 5142.763,
                    end: 5144.724,
                    text: "Have you made a copy?-I'm on it."
                },
                {
                    id: 1186,
                    start: 5144.807,
                    end: 5145.808,
                    text: "No, you aren't."
                },
                {
                    id: 1187,
                    start: 5145.891,
                    end: 5148.728,
                    text: "You'd have to be there, but you're here."
                },
                { id: 1188, start: 5152.898, end: 5154.066, text: 'Benjamin.' },
                { id: 1189, start: 5157.486, end: 5158.487, text: 'Yes?' },
                {
                    id: 1190,
                    start: 5160.948,
                    end: 5163.409,
                    text: 'How long before you talk to me again?'
                },
                {
                    id: 1191,
                    start: 5164.035,
                    end: 5165.619,
                    text: 'I talk to you every day.'
                },
                {
                    id: 1192,
                    start: 5168.748,
                    end: 5170.082,
                    text: "I'm not untouchable."
                },
                {
                    id: 1193,
                    start: 5171.292,
                    end: 5174.378,
                    text: 'Or from another world.-If only you were...'
                },
                {
                    id: 1194,
                    start: 5175.379,
                    end: 5178.424,
                    text: "Irene, let's drop it.-Drop what?"
                },
                {
                    id: 1195,
                    start: 5178.758,
                    end: 5181.469,
                    text: "You're marrying the engineer, Zapiola..."
                },
                {
                    id: 1196,
                    start: 5181.677,
                    end: 5184.263,
                    text: 'Menendez Urtubiea and so on.'
                },
                {
                    id: 1197,
                    start: 5187.183,
                    end: 5188.309,
                    text: "You're not jealous"
                },
                {
                    id: 1198,
                    start: 5189.81,
                    end: 5193.397,
                    text: "For God's sake. I hope you<br />live happily ever after."
                },
                {
                    id: 1199,
                    start: 5193.606,
                    end: 5195.608,
                    text: 'Any objections?-No, none.'
                },
                {
                    id: 1200,
                    start: 5195.816,
                    end: 5196.859,
                    text: 'Go on, object.'
                },
                { id: 1201, start: 5198.903, end: 5200.112, text: 'Irene...' },
                { id: 1202, start: 5200.613, end: 5201.781, text: 'please.' },
                {
                    id: 1203,
                    start: 5202.907,
                    end: 5205.117,
                    text: 'What are you looking at?<br />What do you want? Go away.'
                },
                { id: 1204, start: 5205.284, end: 5206.452, text: 'Come on.' },
                {
                    id: 1205,
                    start: 5209.33,
                    end: 5211.582,
                    text: 'Where can we meet?-What for?'
                },
                {
                    id: 1206,
                    start: 5211.749,
                    end: 5214.96,
                    text: 'So you can present your<br />objections about my life, my fiance...'
                },
                {
                    id: 1207,
                    start: 5215.127,
                    end: 5217.63,
                    text: 'my marriage and anything<br />else related to the case.'
                },
                {
                    id: 1208,
                    start: 5221.801,
                    end: 5223.469,
                    text: 'We can meet for coffee after work.'
                },
                { id: 1209, start: 5224.637, end: 5225.638, text: 'Time?' },
                {
                    id: 1210,
                    start: 5229.475,
                    end: 5230.935,
                    text: '8:30. Place?'
                },
                {
                    id: 1211,
                    start: 5231.143,
                    end: 5233.145,
                    text: 'The Immortals.-The Richmond.'
                },
                {
                    id: 1212,
                    start: 5233.562,
                    end: 5236.816,
                    text: 'Sorry. My suggestion wasn’t very elegant.'
                },
                {
                    id: 1213,
                    start: 5238.15,
                    end: 5240.569,
                    text: 'No, Benjamin. Somewhere far from here.'
                },
                {
                    id: 1214,
                    start: 5245.825,
                    end: 5247.159,
                    text: 'Who are you spying on?'
                },
                {
                    id: 1215,
                    start: 5247.326,
                    end: 5250.579,
                    text: 'Sorry. Phone call for you, sir.From a bar?'
                },
                {
                    id: 1216,
                    start: 5251.58,
                    end: 5255.751,
                    text: 'Pablo Sandoval. You cock sucking bastard.'
                },
                {
                    id: 1217,
                    start: 5255.96,
                    end: 5257.586,
                    text: 'Wash your fucking mouth!'
                },
                {
                    id: 1218,
                    start: 5259.296,
                    end: 5261.799,
                    text: "No, Benjamin... I can't<br />believe they called you."
                },
                {
                    id: 1219,
                    start: 5261.966,
                    end: 5263.008,
                    text: 'What happened?'
                },
                {
                    id: 1220,
                    start: 5263.134,
                    end: 5265.761,
                    text: 'I told everyone not to bother my friend.'
                },
                {
                    id: 1221,
                    start: 5266.011,
                    end: 5267.513,
                    text: "This is a man's job!"
                },
                {
                    id: 1222,
                    start: 5267.721,
                    end: 5270.099,
                    text: "You're not a man, you stinking drunk."
                },
                {
                    id: 1223,
                    start: 5270.266,
                    end: 5273.185,
                    text: 'What? Me, drunk? Fuck you! Fascist!'
                },
                {
                    id: 1224,
                    start: 5273.352,
                    end: 5275.98,
                    text: "Fascist! He's a Nazi!"
                },
                {
                    id: 1225,
                    start: 5276.147,
                    end: 5277.356,
                    text: "He's a Nazi!"
                },
                {
                    id: 1226,
                    start: 5277.857,
                    end: 5282.111,
                    text: "Listen, officer.We're from<br />Court 42, I'll handle it."
                },
                {
                    id: 1227,
                    start: 5282.278,
                    end: 5283.821,
                    text: 'Come with me.-Arrest them!'
                },
                {
                    id: 1228,
                    start: 5284.196,
                    end: 5288.325,
                    text: 'Arrest the motherfuckers! Show<br />them some fucking justice!'
                },
                {
                    id: 1229,
                    start: 5288.617,
                    end: 5290.202,
                    text: 'Fuck you!-My jacket! My jacket!'
                },
                {
                    id: 1230,
                    start: 5290.369,
                    end: 5291.829,
                    text: "You're wearing it."
                },
                {
                    id: 1231,
                    start: 5305.259,
                    end: 5307.72,
                    text: 'What time does your wife get home?'
                },
                { id: 1232, start: 5308.846, end: 5310.014, text: 'At 8:00.' },
                {
                    id: 1233,
                    start: 5310.848,
                    end: 5312.391,
                    text: "How odd. There's no answer."
                },
                {
                    id: 1234,
                    start: 5312.725,
                    end: 5314.727,
                    text: 'My mouth is dry.'
                },
                {
                    id: 1235,
                    start: 5315.853,
                    end: 5317.73,
                    text: 'Have you got any...?'
                },
                {
                    id: 1236,
                    start: 5318.731,
                    end: 5320.149,
                    text: "There's no answer."
                },
                {
                    id: 1237,
                    start: 5320.733,
                    end: 5321.775,
                    text: 'Leave that alone.'
                },
                {
                    id: 1238,
                    start: 5322.193,
                    end: 5324.195,
                    text: "She's never going to answer."
                },
                { id: 1239, start: 5324.57, end: 5325.779, text: 'Why?' },
                {
                    id: 1240,
                    start: 5325.905,
                    end: 5327.448,
                    text: "Because the phone doesn't work."
                },
                {
                    id: 1241,
                    start: 5327.573,
                    end: 5329.241,
                    text: 'What do you mean? Put that down.'
                },
                {
                    id: 1242,
                    start: 5329.909,
                    end: 5331.952,
                    text: 'I told you a thousand times, Benjamin.'
                },
                {
                    id: 1243,
                    start: 5332.453,
                    end: 5334.58,
                    text: 'I wanted to sue their asses.'
                },
                {
                    id: 1244,
                    start: 5334.914,
                    end: 5337.041,
                    text: "And you didn't help me."
                },
                {
                    id: 1245,
                    start: 5337.208,
                    end: 5339.21,
                    text: 'That was six months ago.'
                },
                {
                    id: 1246,
                    start: 5339.793,
                    end: 5343.589,
                    text: "The phone hasn't worked for a year.<br />They never fixed it."
                },
                {
                    id: 1247,
                    start: 5343.756,
                    end: 5346.091,
                    text: "You can't spend the night here."
                },
                {
                    id: 1248,
                    start: 5346.55,
                    end: 5348.385,
                    text: 'Put that down. Stop touching stuff.'
                },
                {
                    id: 1249,
                    start: 5349.47,
                    end: 5353.682,
                    text: "If you ever called me, you'd<br />know it doesn't work."
                },
                {
                    id: 1250,
                    start: 5353.891,
                    end: 5356.227,
                    text: 'Leave that. What are you looking for?'
                },
                {
                    id: 1251,
                    start: 5356.435,
                    end: 5357.978,
                    text: 'I wanted to sue them.'
                },
                {
                    id: 1252,
                    start: 5360.272,
                    end: 5361.357,
                    text: 'Look at me.'
                },
                {
                    id: 1253,
                    start: 5361.899,
                    end: 5364.276,
                    text: 'You have a date?-No, no.'
                },
                {
                    id: 1254,
                    start: 5364.735,
                    end: 5366.946,
                    text: "You have a date. And I'm leaving."
                },
                {
                    id: 1255,
                    start: 5367.112,
                    end: 5370.282,
                    text: 'The last thing I need is you<br />calling me a party pooper.'
                },
                {
                    id: 1256,
                    start: 5371.158,
                    end: 5373.661,
                    text: 'Too much furniture in here.'
                },
                {
                    id: 1257,
                    start: 5373.827,
                    end: 5376.789,
                    text: 'Sit here.-I always run into shit.'
                },
                {
                    id: 1258,
                    start: 5376.914,
                    end: 5379.583,
                    text: 'Have a seat until you feel better.'
                },
                {
                    id: 1259,
                    start: 5379.75,
                    end: 5381.46,
                    text: 'Have a seat.'
                },
                {
                    id: 1260,
                    start: 5381.835,
                    end: 5382.962,
                    text: 'What time is it?'
                },
                {
                    id: 1261,
                    start: 5383.212,
                    end: 5385.16,
                    text: 'I have a watch in the<br />bedroom.-What bedroom?'
                },
                {
                    id: 1262,
                    start: 5385.173,
                    end: 5387.132,
                    text: 'This is my house.'
                },
                {
                    id: 1263,
                    start: 5387.8,
                    end: 5390.01,
                    text: "We're doing great. Just great."
                },
                {
                    id: 1264,
                    start: 5390.135,
                    end: 5392.638,
                    text: "Take it easy.-We're doing great."
                },
                {
                    id: 1265,
                    start: 5393.013,
                    end: 5396.183,
                    text: "I'll try to convince your<br />wife not to kill you."
                },
                {
                    id: 1266,
                    start: 5396.85,
                    end: 5398.31,
                    text: 'Call her on the phone.'
                },
                {
                    id: 1267,
                    start: 5399.478,
                    end: 5400.98,
                    text: "You said it didn't work."
                },
                {
                    id: 1268,
                    start: 5404.817,
                    end: 5407.027,
                    text: "Mine doesn't work, Benjamin."
                },
                {
                    id: 1269,
                    start: 5407.152,
                    end: 5408.571,
                    text: 'Use yours.'
                },
                {
                    id: 1270,
                    start: 5413.158,
                    end: 5416.829,
                    text: "Just stay here. Don't touch<br />anything, don't do anything."
                },
                {
                    id: 1271,
                    start: 5417.454,
                    end: 5418.998,
                    text: "I'll be right back."
                },
                {
                    id: 1272,
                    start: 5420.249,
                    end: 5422.334,
                    text: 'Turn off the light.-Yes.'
                },
                {
                    id: 1273,
                    start: 5424.336,
                    end: 5427.006,
                    text: "We'll catch that son of a bitch."
                },
                {
                    id: 1274,
                    start: 5427.172,
                    end: 5429.258,
                    text: "We'll catch him."
                },
                {
                    id: 1275,
                    start: 5432.845,
                    end: 5437.224,
                    text: 'We were working all day.-Save<br />it, some other time.'
                },
                {
                    id: 1276,
                    start: 5437.433,
                    end: 5438.559,
                    text: 'Let me explain.'
                },
                {
                    id: 1277,
                    start: 5438.684,
                    end: 5441.186,
                    text: "It's the last time.-Okay, okay."
                },
                {
                    id: 1278,
                    start: 5442.396,
                    end: 5444.857,
                    text: 'You could have remembered as well.'
                },
                {
                    id: 1279,
                    start: 5445.107,
                    end: 5447.192,
                    text: 'Be patient with him, he needs help.'
                },
                {
                    id: 1280,
                    start: 5447.609,
                    end: 5449.611,
                    text: 'He needs help?'
                },
                {
                    id: 1281,
                    start: 5449.695,
                    end: 5452.698,
                    text: "What I mean is if we help him,<br />it's easier for everyone."
                },
                {
                    id: 1282,
                    start: 5453.198,
                    end: 5454.783,
                    text: 'You want to get rid of him.'
                },
                {
                    id: 1283,
                    start: 5454.908,
                    end: 5456.16,
                    text: "Don't say that."
                },
                {
                    id: 1284,
                    start: 5459.413,
                    end: 5460.539,
                    text: "What's this?"
                },
                {
                    id: 1285,
                    start: 5461.081,
                    end: 5463.208,
                    text: 'What happened?-Hold on a second.'
                },
                { id: 1286, start: 5469.84, end: 5470.883, text: 'Pablo?' },
                {
                    id: 1287,
                    start: 5471.05,
                    end: 5473.552,
                    text: "What is it?-I don't know. Pablo?"
                },
                {
                    id: 1288,
                    start: 5473.677,
                    end: 5475.721,
                    text: "Don't scare me.-Wait there."
                },
                { id: 1289, start: 5477.348, end: 5478.515, text: 'Pablo...' },
                {
                    id: 1290,
                    start: 5482.102,
                    end: 5484.48,
                    text: 'No! What is it? What happened?'
                },
                {
                    id: 1291,
                    start: 5487.65,
                    end: 5489.443,
                    text: 'What happened?'
                },
                {
                    id: 1292,
                    start: 5511.34,
                    end: 5512.8,
                    text: 'This is madness.'
                },
                {
                    id: 1293,
                    start: 5512.966,
                    end: 5515.177,
                    text: 'It will be if that bastard finds you.'
                },
                {
                    id: 1294,
                    start: 5515.344,
                    end: 5519.181,
                    text: "He's gonna go after you.-No,<br />my father knows who to talk to."
                },
                {
                    id: 1295,
                    start: 5519.39,
                    end: 5522.851,
                    text: "He works for Romano, Romano won't<br />mess with me. I'll be fine."
                },
                {
                    id: 1296,
                    start: 5522.976,
                    end: 5524.978,
                    text: "But Jujuy? For God's sake, Irene."
                },
                {
                    id: 1297,
                    start: 5525.145,
                    end: 5529.274,
                    text: 'My cousins are like feudal lords<br />there.Nobody will touch you.'
                },
                {
                    id: 1298,
                    start: 5529.441,
                    end: 5530.943,
                    text: 'What will I do in Jujuy?'
                },
                {
                    id: 1299,
                    start: 5531.11,
                    end: 5534.363,
                    text: 'Same as here. Sign and<br />stamp.They have your desk ready.'
                },
                {
                    id: 1300,
                    start: 5534.571,
                    end: 5538.992,
                    text: "I can't. I have my life here,<br />I have my old man here..."
                },
                { id: 1301, start: 5539.243, end: 5540.285, text: 'I have...' },
                {
                    id: 1302,
                    start: 5545.958,
                    end: 5547.292,
                    text: 'I have everything here.'
                },
                {
                    id: 1303,
                    start: 5549.962,
                    end: 5551.463,
                    text: 'What can we do'
                },
                { id: 1304, start: 5551.88, end: 5552.923, text: 'here?' },
                { id: 1305, start: 5554.049, end: 5555.259, text: 'Us.' },
                { id: 1306, start: 5556.76, end: 5557.803, text: 'I mean...' },
                {
                    id: 1307,
                    start: 5558.762,
                    end: 5559.972,
                    text: 'you and me.'
                },
                {
                    id: 1308,
                    start: 5570.482,
                    end: 5572.025,
                    text: "There's nothing we can do."
                },
                { id: 1309, start: 5606.268, end: 5607.311, text: 'Ciao.' },
                {
                    id: 1310,
                    start: 5712.332,
                    end: 5714.001,
                    text: "It's a rough draft."
                },
                {
                    id: 1311,
                    start: 5717.296,
                    end: 5718.505,
                    text: "I'll make more."
                },
                {
                    id: 1312,
                    start: 5723.552,
                    end: 5725.47,
                    text: 'Your house is exactly as I imagined it.'
                },
                {
                    id: 1313,
                    start: 5725.554,
                    end: 5727.681,
                    text: 'How did you imagine it?'
                },
                {
                    id: 1314,
                    start: 5728.348,
                    end: 5731.31,
                    text: 'Exactly like this. Exactly<br />like I imagined it.'
                },
                {
                    id: 1315,
                    start: 5731.643,
                    end: 5735.814,
                    text: 'Sure, I imagined your house would<br />be totally different.'
                },
                {
                    id: 1316,
                    start: 5736.148,
                    end: 5737.899,
                    text: "You've seen my house?"
                },
                {
                    id: 1317,
                    start: 5738.025,
                    end: 5739.985,
                    text: 'No, I mean unlike this.'
                },
                {
                    id: 1318,
                    start: 5740.36,
                    end: 5741.778,
                    text: 'Totally different.'
                },
                {
                    id: 1319,
                    start: 5745.282,
                    end: 5746.658,
                    text: 'What does this mean?'
                },
                {
                    id: 1320,
                    start: 5748.66,
                    end: 5750.996,
                    text: 'This piece of paper says "I FEAR."'
                },
                {
                    id: 1321,
                    start: 5751.496,
                    end: 5755.125,
                    text: "No, it's just something I did..."
                },
                {
                    id: 1322,
                    start: 5755.334,
                    end: 5759.004,
                    text: 'A writing exercise... half asleep...'
                },
                {
                    id: 1323,
                    start: 5759.254,
                    end: 5761.673,
                    text: 'to inspire the imagination... Never mind.'
                },
                {
                    id: 1324,
                    start: 5762.341,
                    end: 5764.009,
                    text: 'Okay, shoot.'
                },
                {
                    id: 1325,
                    start: 5767.346,
                    end: 5768.68,
                    text: "It's a novel."
                },
                {
                    id: 1326,
                    start: 5770.974,
                    end: 5772.559,
                    text: "It doesn't have to be true..."
                },
                {
                    id: 1327,
                    start: 5772.684,
                    end: 5775.187,
                    text: 'or even believable.'
                },
                {
                    id: 1328,
                    start: 5775.354,
                    end: 5777.689,
                    text: "Yes. No. What? It isn't believable?"
                },
                {
                    id: 1329,
                    start: 5778.023,
                    end: 5782.069,
                    text: 'No, Benjamin. That part when...'
                },
                {
                    id: 1330,
                    start: 5783.195,
                    end: 5784.529,
                    text: 'when the guy leaves for Jujuy...'
                },
                {
                    id: 1331,
                    start: 5785.197,
                    end: 5788.033,
                    text: "What's the problem?-Crying<br />like he's all broken up..."
                },
                {
                    id: 1332,
                    start: 5789.409,
                    end: 5792.829,
                    text: 'Her running on the platform after<br />the man of her dreams...'
                },
                {
                    id: 1333,
                    start: 5793.163,
                    end: 5796.166,
                    text: "Touching hands through the<br />glass like they're one."
                },
                {
                    id: 1334,
                    start: 5796.333,
                    end: 5797.894,
                    text: "That's what happened.-And her crying..."
                },
                {
                    id: 1335,
                    start: 5798.251,
                    end: 5800.796,
                    text: 'like she knew her fate was mediocrity...'
                },
                {
                    id: 1336,
                    start: 5800.963,
                    end: 5802.13,
                    text: 'and never loving anyone...'
                },
                {
                    id: 1337,
                    start: 5802.339,
                    end: 5804.549,
                    text: 'practically falling on the tracks...'
                },
                {
                    id: 1338,
                    start: 5804.675,
                    end: 5807.803,
                    text: "proclaiming love she'd never<br />had the courage to confess..."
                },
                {
                    id: 1339,
                    start: 5808.053,
                    end: 5809.721,
                    text: "That's what happened. Isn't it?"
                },
                {
                    id: 1340,
                    start: 5814.184,
                    end: 5815.477,
                    text: "If that's what happened..."
                },
                {
                    id: 1341,
                    start: 5818.73,
                    end: 5820.732,
                    text: "why didn't you take me with you?"
                },
                { id: 1342, start: 5834.496, end: 5835.789, text: 'Dimwit.' },
                {
                    id: 1343,
                    start: 5854.266,
                    end: 5856.601,
                    text: 'How does the case proceed?'
                },
                {
                    id: 1344,
                    start: 5858.854,
                    end: 5860.689,
                    text: "I don't know. I can say..."
                },
                {
                    id: 1345,
                    start: 5860.939,
                    end: 5864.443,
                    text: 'he spent 10 years counting<br />llamas in the Andes.'
                },
                {
                    id: 1346,
                    start: 5865.944,
                    end: 5867.946,
                    text: 'And when I came back you were D.A...'
                },
                {
                    id: 1347,
                    start: 5868.488,
                    end: 5870.991,
                    text: 'married and with two kids Should I put that?'
                },
                {
                    id: 1348,
                    start: 5872.284,
                    end: 5877.164,
                    text: 'Or that he came back married to a<br />rich little Jujuyan princess.'
                },
                {
                    id: 1349,
                    start: 5877.33,
                    end: 5879.082,
                    text: 'She was wonderful.'
                },
                {
                    id: 1350,
                    start: 5879.666,
                    end: 5882.461,
                    text: "It wasn't her fault could never love her."
                },
                {
                    id: 1351,
                    start: 5886.298,
                    end: 5888.759,
                    text: "It's a lousy ending."
                },
                {
                    id: 1352,
                    start: 5888.967,
                    end: 5889.968,
                    text: "It's crap."
                },
                { id: 1353, start: 5891.803, end: 5893.096, text: 'You see?' },
                {
                    id: 1354,
                    start: 5893.305,
                    end: 5897.1,
                    text: "I don't want to miss another chance.<br />How is it possible?"
                },
                {
                    id: 1355,
                    start: 5897.851,
                    end: 5899.352,
                    text: 'How can I do nothing about it?'
                },
                {
                    id: 1356,
                    start: 5899.519,
                    end: 5900.687,
                    text: "I've been asking myself..."
                },
                {
                    id: 1357,
                    start: 5900.812,
                    end: 5904.483,
                    text: "for 25 years and I've only been<br />able to come up with one answer."
                },
                {
                    id: 1358,
                    start: 5904.649,
                    end: 5907.986,
                    text: '"Forget it, it was another lifetime.<br />It\'s over, don\'t ask."'
                },
                {
                    id: 1359,
                    start: 5908.487,
                    end: 5911.156,
                    text: "It wasn't another lifetime.<br />It was this one."
                },
                {
                    id: 1360,
                    start: 5912.657,
                    end: 5914.284,
                    text: 'It is this one.'
                },
                {
                    id: 1361,
                    start: 5914.493,
                    end: 5916.203,
                    text: 'Now I want to understand.'
                },
                {
                    id: 1362,
                    start: 5916.495,
                    end: 5918.58,
                    text: 'How can someone live an empty life?'
                },
                {
                    id: 1363,
                    start: 5918.747,
                    end: 5921.75,
                    text: 'How do you live a life full of nothing?'
                },
                {
                    id: 1364,
                    start: 5922.793,
                    end: 5924.044,
                    text: 'How do you do it?'
                },
                {
                    id: 1365,
                    start: 5928.465,
                    end: 5931.468,
                    text: "This is a waste of time.<br />We'll never find him."
                },
                {
                    id: 1366,
                    start: 5931.718,
                    end: 5933.97,
                    text: 'Trust me, remember how formal he was?'
                },
                {
                    id: 1367,
                    start: 5934.179,
                    end: 5937.219,
                    text: "Nobody notifies a change of address.Mine's<br />from when I danced the pata-pata."
                },
                {
                    id: 1368,
                    start: 5937.933,
                    end: 5938.975,
                    text: 'Excuse me.'
                },
                {
                    id: 1369,
                    start: 5939.267,
                    end: 5941.186,
                    text: 'Gomez, Isidore Espora691...'
                },
                {
                    id: 1370,
                    start: 5941.269,
                    end: 5944.481,
                    text: "province of Chivilcoy.-You see?<br />That's his mother."
                },
                {
                    id: 1371,
                    start: 5945.857,
                    end: 5950.278,
                    text: 'Sir, we are required by law to<br />notify a change of address.'
                },
                {
                    id: 1372,
                    start: 5950.695,
                    end: 5953.49,
                    text: "It's not something we do because we<br />feel like it. Understand?"
                },
                {
                    id: 1373,
                    start: 5953.698,
                    end: 5955.617,
                    text: 'I do now.-Morales, Ricardo.'
                },
                {
                    id: 1374,
                    start: 5955.826,
                    end: 5958.203,
                    text: "There's one, two... Four, ma'am."
                },
                {
                    id: 1375,
                    start: 5958.453,
                    end: 5960.247,
                    text: "Let's search by I.D. number."
                },
                {
                    id: 1376,
                    start: 5960.413,
                    end: 5962.999,
                    text: "What's your first<br />number?-Three, what's yours?"
                },
                {
                    id: 1377,
                    start: 5964.042,
                    end: 5966.503,
                    text: "What do you care?-What? Can't I...?"
                },
                {
                    id: 1378,
                    start: 5967.003,
                    end: 5971.299,
                    text: "Here's a five and a<br />six.Morales, Ricardo Augustin."
                },
                {
                    id: 1379,
                    start: 5972.259,
                    end: 5974.886,
                    text: 'He changed addresses in 1975.'
                },
                {
                    id: 1380,
                    start: 5975.512,
                    end: 5977.514,
                    text: 'Write this down, pata-pata.'
                },
                {
                    id: 1381,
                    start: 6057.469,
                    end: 6058.97,
                    text: 'Who are you looking for?'
                },
                { id: 1382, start: 6060.972, end: 6062.182, text: 'Morales.' },
                {
                    id: 1383,
                    start: 6063.475,
                    end: 6065.393,
                    text: 'How are you? Remember me?'
                },
                { id: 1384, start: 6066.144, end: 6067.354, text: 'Esposito.' },
                {
                    id: 1385,
                    start: 6067.479,
                    end: 6070.398,
                    text: 'From the courts... 25 years ago.'
                },
                {
                    id: 1386,
                    start: 6075.737,
                    end: 6078.615,
                    text: 'Quite a surprise.-I know, sorry.'
                },
                {
                    id: 1387,
                    start: 6089.084,
                    end: 6090.919,
                    text: 'How are you?-Hello.'
                },
                {
                    id: 1388,
                    start: 6093.838,
                    end: 6095.048,
                    text: 'Long time.'
                },
                {
                    id: 1389,
                    start: 6098.176,
                    end: 6099.636,
                    text: 'What a surprise.'
                },
                { id: 1390, start: 6099.761, end: 6100.804, text: 'Yeah.' },
                { id: 1391, start: 6106.309, end: 6108.186, text: 'Come in.' },
                {
                    id: 1392,
                    start: 6109.187,
                    end: 6110.689,
                    text: 'Shall I make coffee?'
                },
                { id: 1393, start: 6111.189, end: 6112.524, text: 'Coffee?' },
                {
                    id: 1394,
                    start: 6112.983,
                    end: 6115.193,
                    text: "You're not drinking mate out here?"
                },
                { id: 1395, start: 6115.86, end: 6117.445, text: 'Out here?' },
                {
                    id: 1396,
                    start: 6117.612,
                    end: 6120.115,
                    text: "I'm at the bank all day long."
                },
                {
                    id: 1397,
                    start: 6120.657,
                    end: 6121.992,
                    text: "You're still at the bank?"
                },
                {
                    id: 1398,
                    start: 6122.617,
                    end: 6124.035,
                    text: "I'll take that coffee."
                },
                {
                    id: 1399,
                    start: 6129.165,
                    end: 6131.084,
                    text: 'You moved out here right after.'
                },
                {
                    id: 1400,
                    start: 6131.543,
                    end: 6135.046,
                    text: 'Yes. I wanted to start over, from scratch.'
                },
                {
                    id: 1401,
                    start: 6137.465,
                    end: 6139.759,
                    text: "That's the good thing about the bank."
                },
                {
                    id: 1402,
                    start: 6140.01,
                    end: 6141.428,
                    text: 'They have branches everywhere.'
                },
                {
                    id: 1403,
                    start: 6142.345,
                    end: 6145.348,
                    text: "There's always a branch<br />nobody wants so here I am..."
                },
                {
                    id: 1404,
                    start: 6145.724,
                    end: 6147.559,
                    text: 'with a promotion and everything.'
                },
                {
                    id: 1405,
                    start: 6148.018,
                    end: 6149.31,
                    text: 'How about that.'
                },
                {
                    id: 1406,
                    start: 6157.319,
                    end: 6158.695,
                    text: 'Remember Liliana?'
                },
                {
                    id: 1407,
                    start: 6161.489,
                    end: 6163.074,
                    text: 'Yes, of course.'
                },
                {
                    id: 1408,
                    start: 6170.498,
                    end: 6171.916,
                    text: 'How are you doing?'
                },
                {
                    id: 1409,
                    start: 6172.834,
                    end: 6174.085,
                    text: 'Still here.'
                },
                {
                    id: 1410,
                    start: 6175.587,
                    end: 6179.549,
                    text: 'No, I mean single...<br />married...-No.'
                },
                {
                    id: 1411,
                    start: 6179.758,
                    end: 6181.051,
                    text: 'No, really.'
                },
                {
                    id: 1412,
                    start: 6181.468,
                    end: 6184.345,
                    text: 'I think I just... At that point...'
                },
                {
                    id: 1413,
                    start: 6185.597,
                    end: 6187.182,
                    text: 'just closed shop.'
                },
                {
                    id: 1414,
                    start: 6187.766,
                    end: 6190.268,
                    text: 'I tried, but you know what?'
                },
                {
                    id: 1415,
                    start: 6192.103,
                    end: 6193.48,
                    text: "It's complicated."
                },
                {
                    id: 1416,
                    start: 6194.773,
                    end: 6196.816,
                    text: "I got married.-You don't say."
                },
                {
                    id: 1417,
                    start: 6197.108,
                    end: 6198.61,
                    text: 'Yeah, for a while.'
                },
                {
                    id: 1418,
                    start: 6199.861,
                    end: 6201.446,
                    text: "But it didn't work."
                },
                {
                    id: 1419,
                    start: 6201.946,
                    end: 6204.532,
                    text: "I don't know if it was me..."
                },
                {
                    id: 1420,
                    start: 6205.909,
                    end: 6207.118,
                    text: "It's complicated."
                },
                {
                    id: 1421,
                    start: 6207.243,
                    end: 6208.578,
                    text: "It's complicated."
                },
                {
                    id: 1422,
                    start: 6217.295,
                    end: 6218.963,
                    text: 'Quite a story.'
                },
                {
                    id: 1423,
                    start: 6219.881,
                    end: 6221.299,
                    text: "I can't believe it."
                },
                {
                    id: 1424,
                    start: 6221.466,
                    end: 6223.593,
                    text: 'Never thought I had a novel in me.'
                },
                {
                    id: 1425,
                    start: 6223.802,
                    end: 6227.514,
                    text: "You should flesh it<br />out.lt's like a long memo."
                },
                { id: 1426, start: 6228.098, end: 6229.307, text: 'Crazy.' },
                {
                    id: 1427,
                    start: 6229.474,
                    end: 6231.392,
                    text: 'I could never forget it.'
                },
                {
                    id: 1428,
                    start: 6231.559,
                    end: 6234.771,
                    text: 'A mistake.You should put it behind you.'
                },
                { id: 1429, start: 6235.396, end: 6236.773, text: 'Trust me.' },
                {
                    id: 1430,
                    start: 6239.818,
                    end: 6241.653,
                    text: 'You came here because of Gomez, right?'
                },
                {
                    id: 1431,
                    start: 6243.113,
                    end: 6244.656,
                    text: 'What do you mean?'
                },
                {
                    id: 1432,
                    start: 6244.823,
                    end: 6247.659,
                    text: 'He was on the loose, he<br />might come looking for you.'
                },
                { id: 1433, start: 6249.702, end: 6250.954, text: 'No, no.' },
                {
                    id: 1434,
                    start: 6252.163,
                    end: 6254.207,
                    text: "I'm not scared of Gomez."
                },
                {
                    id: 1435,
                    start: 6254.833,
                    end: 6257.043,
                    text: "Maybe he's dead."
                },
                { id: 1436, start: 6257.502, end: 6258.753, text: 'Maybe.' },
                {
                    id: 1437,
                    start: 6266.678,
                    end: 6268.513,
                    text: 'They came looking for me.'
                },
                {
                    id: 1438,
                    start: 6269.013,
                    end: 6270.348,
                    text: 'Yes, I know.'
                },
                {
                    id: 1439,
                    start: 6272.35,
                    end: 6274.519,
                    text: 'How do you know?-I just read it.'
                },
                {
                    id: 1440,
                    start: 6274.686,
                    end: 6277.397,
                    text: 'They found your friend.-Oh, right.'
                },
                {
                    id: 1441,
                    start: 6278.565,
                    end: 6280.024,
                    text: 'Poor Sandoval.'
                },
                {
                    id: 1442,
                    start: 6280.233,
                    end: 6281.693,
                    text: 'Do you remember Sandoval?'
                },
                { id: 1443, start: 6281.86, end: 6282.986, text: 'No.' },
                {
                    id: 1444,
                    start: 6283.361,
                    end: 6285.155,
                    text: 'My coworker at the courts'
                },
                {
                    id: 1445,
                    start: 6287.157,
                    end: 6289.576,
                    text: "They came looking for me, didn't find me..."
                },
                {
                    id: 1446,
                    start: 6289.868,
                    end: 6291.369,
                    text: 'and let him have it.'
                },
                { id: 1447, start: 6291.828, end: 6293.246, text: 'Bastards.' },
                {
                    id: 1448,
                    start: 6296.541,
                    end: 6298.001,
                    text: 'Gomez was never found, right?'
                },
                { id: 1449, start: 6298.251, end: 6299.335, text: 'Guess.' },
                {
                    id: 1450,
                    start: 6303.381,
                    end: 6305.8,
                    text: 'Those guys always get away with it.'
                },
                {
                    id: 1451,
                    start: 6310.555,
                    end: 6313.933,
                    text: "You know, there's<br />something need to ask you."
                },
                {
                    id: 1452,
                    start: 6316.269,
                    end: 6318.605,
                    text: 'How did you learn to live without Liliana?'
                },
                {
                    id: 1453,
                    start: 6320.94,
                    end: 6322.775,
                    text: 'It was 25 years ago, Esposito.'
                },
                {
                    id: 1454,
                    start: 6322.942,
                    end: 6324.569,
                    text: "I was sure you wouldn't be able to."
                },
                {
                    id: 1455,
                    start: 6324.694,
                    end: 6327.294,
                    text: 'It was 25 years ago, Esposito.-Especially<br />with him on the loose.'
                },
                {
                    id: 1456,
                    start: 6327.363,
                    end: 6328.99,
                    text: 'How did you start over?'
                },
                {
                    id: 1457,
                    start: 6329.073,
                    end: 6331.367,
                    text: 'It was 25 years ago!'
                },
                {
                    id: 1458,
                    start: 6332.327,
                    end: 6333.494,
                    text: 'Forget it.'
                },
                {
                    id: 1459,
                    start: 6346.591,
                    end: 6349.427,
                    text: "If it weren't for me, you<br />wouldn't have made it this far."
                },
                {
                    id: 1460,
                    start: 6350.803,
                    end: 6352.263,
                    text: 'Remember that?'
                },
                {
                    id: 1461,
                    start: 6352.555,
                    end: 6353.806,
                    text: 'You owe me one.'
                },
                {
                    id: 1462,
                    start: 6355.099,
                    end: 6357.477,
                    text: "I don't know what you want me to say."
                },
                {
                    id: 1463,
                    start: 6357.602,
                    end: 6360.271,
                    text: "You didn't care the guy got a free ride."
                },
                {
                    id: 1464,
                    start: 6360.396,
                    end: 6361.731,
                    text: 'There was nothing I could do.'
                },
                {
                    id: 1465,
                    start: 6363.816,
                    end: 6367.695,
                    text: 'You spent a year looking for the guy,<br />they let him go and you do nothing?'
                },
                {
                    id: 1466,
                    start: 6367.779,
                    end: 6370.49,
                    text: 'I wasted a year looking for<br />him and they let him go!'
                },
                {
                    id: 1467,
                    start: 6370.657,
                    end: 6372.283,
                    text: "What can I do?-That's it?"
                },
                {
                    id: 1468,
                    start: 6372.45,
                    end: 6374.244,
                    text: 'Yes! The rest of your life behind a desk?'
                },
                {
                    id: 1469,
                    start: 6374.452,
                    end: 6376.253,
                    text: "Look who's talking.-You're<br />better than I am."
                },
                {
                    id: 1470,
                    start: 6377.33,
                    end: 6378.957,
                    text: 'What do you care?'
                },
                {
                    id: 1471,
                    start: 6379.874,
                    end: 6382.794,
                    text: "It's my life, not yours.-No, Morales."
                },
                {
                    id: 1472,
                    start: 6382.961,
                    end: 6384.587,
                    text: "It's my life too."
                },
                {
                    id: 1473,
                    start: 6385.505,
                    end: 6388.549,
                    text: 'Your love for that woman...<br />I never saw it again.'
                },
                {
                    id: 1474,
                    start: 6388.675,
                    end: 6389.759,
                    text: 'In anybody.'
                },
                { id: 1475, start: 6391.427, end: 6392.679, text: 'Nobody.' },
                { id: 1476, start: 6393.554, end: 6394.722, text: 'Ever.' },
                {
                    id: 1477,
                    start: 6398.935,
                    end: 6400.478,
                    text: 'Get out of my house.'
                },
                {
                    id: 1478,
                    start: 6404.357,
                    end: 6405.817,
                    text: 'Right now, please.'
                },
                {
                    id: 1479,
                    start: 6407.151,
                    end: 6409.487,
                    text: "It's my life, not yours."
                },
                {
                    id: 1480,
                    start: 6416.494,
                    end: 6417.745,
                    text: "I'm sorry."
                },
                { id: 1481, start: 6417.829, end: 6418.955, text: "I'm..." },
                {
                    id: 1482,
                    start: 6422.792,
                    end: 6424.669,
                    text: "getting old, that's it."
                },
                {
                    id: 1483,
                    start: 6427.63,
                    end: 6428.965,
                    text: 'That might be it.'
                },
                {
                    id: 1484,
                    start: 6434.762,
                    end: 6436.681,
                    text: "I couldn't stop thinking about it."
                },
                {
                    id: 1485,
                    start: 6436.889,
                    end: 6438.85,
                    text: 'Go dwell on it at home.'
                },
                {
                    id: 1486,
                    start: 6456.617,
                    end: 6458.62,
                    text: "Gomez didn't kill Sandoval."
                },
                { id: 1487, start: 6460.246, end: 6461.289, text: 'So?' },
                {
                    id: 1488,
                    start: 6462.04,
                    end: 6463.958,
                    text: 'He knew us both.'
                },
                {
                    id: 1489,
                    start: 6464.208,
                    end: 6467.378,
                    text: "If he'd been there, he'd<br />have waited for me."
                },
                {
                    id: 1490,
                    start: 6471.632,
                    end: 6473.468,
                    text: "There's something..."
                },
                {
                    id: 1491,
                    start: 6473.885,
                    end: 6476.179,
                    text: 'I had a couple of photos<br />at home, of myself.'
                },
                {
                    id: 1492,
                    start: 6476.929,
                    end: 6479.557,
                    text: 'When Sandoval got killed...'
                },
                {
                    id: 1493,
                    start: 6480.725,
                    end: 6482.602,
                    text: 'the photos had been turned over.'
                },
                {
                    id: 1494,
                    start: 6483.561,
                    end: 6485.897,
                    text: 'Nothing else had been touched.'
                },
                {
                    id: 1495,
                    start: 6486.856,
                    end: 6488.149,
                    text: 'I thought...'
                },
                {
                    id: 1496,
                    start: 6490.151,
                    end: 6491.444,
                    text: 'I think...'
                },
                {
                    id: 1497,
                    start: 6509.837,
                    end: 6511.381,
                    text: 'Are you Esposito?'
                },
                {
                    id: 1498,
                    start: 6516.01,
                    end: 6519.43,
                    text: 'Did you hear what I said, asshole?<br />Are you Esposito?'
                },
                {
                    id: 1499,
                    start: 6524.435,
                    end: 6526.646,
                    text: "What's going on?-What are you doing?"
                },
                {
                    id: 1500,
                    start: 6528.606,
                    end: 6529.774,
                    text: 'Answer me.'
                },
                {
                    id: 1501,
                    start: 6532.568,
                    end: 6534.487,
                    text: 'Where are you going?'
                },
                {
                    id: 1502,
                    start: 6535.279,
                    end: 6536.364,
                    text: 'Where are you going?'
                },
                {
                    id: 1503,
                    start: 6536.489,
                    end: 6539.283,
                    text: 'Here.-What are you going to do?'
                },
                {
                    id: 1504,
                    start: 6540.993,
                    end: 6543.705,
                    text: "I'm going to put on a record. It's okay."
                },
                { id: 1505, start: 6545.206, end: 6546.624, text: 'A record?' },
                {
                    id: 1506,
                    start: 6547.208,
                    end: 6548.418,
                    text: 'Listen to me.'
                },
                {
                    id: 1507,
                    start: 6549.627,
                    end: 6551.796,
                    text: 'Are you Esposito or not?'
                },
                { id: 1508, start: 6559.47, end: 6560.513, text: 'Yes, I am.' },
                {
                    id: 1509,
                    start: 6598.176,
                    end: 6602.93,
                    text: "'M so ashamed I can't even bring<br />myself to put flowers on his grave."
                },
                {
                    id: 1510,
                    start: 6608.478,
                    end: 6610.354,
                    text: "Maybe that's not what happened."
                },
                {
                    id: 1511,
                    start: 6612.857,
                    end: 6616.861,
                    text: 'Maybe he fell asleep and they killed<br />him without him even realizing...'
                },
                {
                    id: 1512,
                    start: 6618.279,
                    end: 6620.114,
                    text: 'somebody knocked over the photos...'
                },
                {
                    id: 1513,
                    start: 6620.448,
                    end: 6622.867,
                    text: 'by accident, bumped into them...'
                },
                {
                    id: 1514,
                    start: 6624.243,
                    end: 6625.411,
                    text: "I don't know."
                },
                {
                    id: 1515,
                    start: 6626.329,
                    end: 6628.79,
                    text: "I don't know what to think anymore."
                },
                {
                    id: 1516,
                    start: 6629.79,
                    end: 6631.334,
                    text: 'Choose carefully.'
                },
                {
                    id: 1517,
                    start: 6632.752,
                    end: 6634.796,
                    text: 'Memories are all we end up with.'
                },
                {
                    id: 1518,
                    start: 6635.671,
                    end: 6637.507,
                    text: 'At least pick the nice ones.'
                },
                {
                    id: 1519,
                    start: 6640.635,
                    end: 6642.053,
                    text: "But there's one thing..."
                },
                {
                    id: 1520,
                    start: 6642.22,
                    end: 6644.305,
                    text: "I know I'll never forget."
                },
                {
                    id: 1521,
                    start: 6645.431,
                    end: 6648.559,
                    text: 'The last thing Pablo said to<br />me the night they killed him.'
                },
                {
                    id: 1522,
                    start: 6648.851,
                    end: 6651.02,
                    text: '"Don\'t worry, Benjamin.'
                },
                {
                    id: 1523,
                    start: 6651.312,
                    end: 6653.397,
                    text: 'We\'ll catch that son of a bitch."'
                },
                {
                    id: 1524,
                    start: 6655.233,
                    end: 6656.818,
                    text: 'And I will.'
                },
                {
                    id: 1525,
                    start: 6659.028,
                    end: 6660.905,
                    text: "If he's alive, I will."
                },
                { id: 1526, start: 6668.83, end: 6669.872, text: 'Wait.' },
                {
                    id: 1527,
                    start: 6673.209,
                    end: 6674.919,
                    text: 'Come in, sit down.'
                },
                {
                    id: 1528,
                    start: 6687.098,
                    end: 6688.808,
                    text: 'You can stop looking.'
                },
                {
                    id: 1529,
                    start: 6690.935,
                    end: 6692.603,
                    text: "I couldn't go to the authorities."
                },
                {
                    id: 1530,
                    start: 6693.062,
                    end: 6694.939,
                    text: 'I knew the guy was untouchable.'
                },
                {
                    id: 1531,
                    start: 6696.816,
                    end: 6699.735,
                    text: 'But I also knew sooner or<br />later he’d come looking...'
                },
                { id: 1532, start: 6701.237, end: 6702.613, text: 'for you.' },
                {
                    id: 1533,
                    start: 6741.235,
                    end: 6742.695,
                    text: 'Hey, Gomez!'
                },
                {
                    id: 1534,
                    start: 6788.449,
                    end: 6792.495,
                    text: "I got rid of the body and<br />obviously he wasn't missed."
                },
                {
                    id: 1535,
                    start: 6806.926,
                    end: 6808.302,
                    text: 'Was it worth it?'
                },
                {
                    id: 1536,
                    start: 6810.137,
                    end: 6811.555,
                    text: 'Forget about it.'
                },
                {
                    id: 1537,
                    start: 6812.014,
                    end: 6813.516,
                    text: 'Forget it.'
                },
                {
                    id: 1538,
                    start: 6814.558,
                    end: 6815.976,
                    text: 'Who cares?'
                },
                {
                    id: 1539,
                    start: 6816.978,
                    end: 6818.396,
                    text: 'My wife is dead.'
                },
                {
                    id: 1540,
                    start: 6818.604,
                    end: 6820.106,
                    text: 'Your friend is dead.'
                },
                {
                    id: 1541,
                    start: 6820.189,
                    end: 6822.024,
                    text: "Gomez is dead too.They're all dead."
                },
                {
                    id: 1542,
                    start: 6822.566,
                    end: 6824.151,
                    text: 'Stop dwelling on it.'
                },
                {
                    id: 1543,
                    start: 6824.443,
                    end: 6827.321,
                    text: "You'll start wondering if you<br />could have stopped it..."
                },
                {
                    id: 1544,
                    start: 6827.571,
                    end: 6830.324,
                    text: "You'll have a thousand pasts and no future."
                },
                {
                    id: 1545,
                    start: 6832.368,
                    end: 6834.161,
                    text: 'Forget about it, trust me.'
                },
                {
                    id: 1546,
                    start: 6836.163,
                    end: 6838.374,
                    text: "You'll end up with only memories."
                },
                {
                    id: 1547,
                    start: 6843.087,
                    end: 6844.588,
                    text: 'I owed you one, right?'
                },
                {
                    id: 1548,
                    start: 6847.049,
                    end: 6848.551,
                    text: "Now we're even."
                },
                {
                    id: 1549,
                    start: 6871.073,
                    end: 6872.575,
                    text: 'Forget about it.'
                },
                {
                    id: 1550,
                    start: 6875.244,
                    end: 6876.746,
                    text: 'Forget it.'
                },
                {
                    id: 1551,
                    start: 6877.621,
                    end: 6879.54,
                    text: "/ couldn't stop thinking about it."
                },
                {
                    id: 1552,
                    start: 6879.999,
                    end: 6881.625,
                    text: 'What would four bullets get me?'
                },
                {
                    id: 1553,
                    start: 6887.757,
                    end: 6889.133,
                    text: "It's my life..."
                },
                {
                    id: 1554,
                    start: 6890.092,
                    end: 6891.218,
                    text: 'not yours.'
                },
                {
                    id: 1555,
                    start: 6891.427,
                    end: 6892.803,
                    text: 'Go dwell on it at home.'
                },
                {
                    id: 1556,
                    start: 6894.096,
                    end: 6895.639,
                    text: "We'll catch him."
                },
                {
                    id: 1557,
                    start: 6897.349,
                    end: 6899.977,
                    text: "I've been wondering for 25 years."
                },
                { id: 1558, start: 6901.437, end: 6902.48, text: 'Ciao.' },
                {
                    id: 1559,
                    start: 6905.316,
                    end: 6907.61,
                    text: "It wasn't another lifetime.<br />It was this one."
                },
                {
                    id: 1560,
                    start: 6907.818,
                    end: 6910.571,
                    text: 'A guy can do anything to be different.'
                },
                {
                    id: 1561,
                    start: 6911.447,
                    end: 6913.032,
                    text: 'What would four bullets get me?'
                },
                {
                    id: 1562,
                    start: 6913.24,
                    end: 6917.495,
                    text: "But there's one thing he can't change.<br />Not him, not you, not anybody."
                },
                {
                    id: 1563,
                    start: 6964.166,
                    end: 6965.709,
                    text: 'How can someone live an empty life?'
                },
                {
                    id: 1564,
                    start: 6972.842,
                    end: 6975.553,
                    text: 'How do you live a life full of nothing?'
                },
                {
                    id: 1565,
                    start: 6983.644,
                    end: 6985.271,
                    text: 'How do you do it?'
                },
                {
                    id: 1566,
                    start: 7043.495,
                    end: 7044.655,
                    text: 'I fucked the shit out of her!'
                },
                {
                    id: 1567,
                    start: 7044.705,
                    end: 7045.915,
                    text: 'What retribution?'
                },
                { id: 1568, start: 7047.208, end: 7050.294, text: 'Please...' },
                {
                    id: 1569,
                    start: 7050.711,
                    end: 7052.421,
                    text: "It's as if his wife's death..."
                },
                {
                    id: 1570,
                    start: 7052.588,
                    end: 7054.465,
                    text: 'just left him there, stuck in time forever.'
                },
                {
                    id: 1571,
                    start: 7057.676,
                    end: 7058.886,
                    text: 'My wife is dead.'
                },
                {
                    id: 1572,
                    start: 7059.803,
                    end: 7063.307,
                    text: "Your friend is dead. Gomez is dead too.<br />They're all dead."
                },
                {
                    id: 1573,
                    start: 7065.517,
                    end: 7067.269,
                    text: "They'd give him an injection..."
                },
                {
                    id: 1574,
                    start: 7067.436,
                    end: 7068.646,
                    text: "and he'd take a nap."
                },
                {
                    id: 1575,
                    start: 7069.146,
                    end: 7070.356,
                    text: 'Nobody, Benjamin.'
                },
                {
                    id: 1576,
                    start: 7071.607,
                    end: 7073.734,
                    text: 'Let him grow old.'
                },
                {
                    id: 1577,
                    start: 7074.151,
                    end: 7076.737,
                    text: 'Live a life full of nothing.'
                },
                {
                    id: 1578,
                    start: 7076.987,
                    end: 7078.697,
                    text: 'How did you start over?'
                },
                {
                    id: 1579,
                    start: 7078.906,
                    end: 7080.908,
                    text: 'That was 25 years ago.'
                },
                {
                    id: 1580,
                    start: 7081.909,
                    end: 7084.828,
                    text: '25 years, Esposito.'
                },
                {
                    id: 1581,
                    start: 7085.579,
                    end: 7086.83,
                    text: 'Forget about it.'
                },
                { id: 1582, start: 7201.487, end: 7202.738, text: 'Please.' },
                {
                    id: 1583,
                    start: 7205.783,
                    end: 7206.95,
                    text: 'Tell him...'
                },
                {
                    id: 1584,
                    start: 7207.409,
                    end: 7212.122,
                    text: 'Tell him at least to talk to me.'
                },
                { id: 1585, start: 7230.641, end: 7231.809, text: 'Please.' },
                {
                    id: 1586,
                    start: 7275.018,
                    end: 7276.562,
                    text: 'You said life.'
                },
                { id: 1587, start: 7369.279, end: 7370.948, text: 'I FEAR' },
                { id: 1588, start: 7380.499, end: 7382.96, text: 'I LOVE YOU' },
                {
                    id: 1589,
                    start: 7401.27,
                    end: 7403.814,
                    text: 'Is she in?-Yeah, in her office.'
                },
                {
                    id: 1590,
                    start: 7415.617,
                    end: 7416.952,
                    text: "You're alive."
                },
                { id: 1591, start: 7417.494, end: 7418.579, text: 'Yeah.' },
                {
                    id: 1592,
                    start: 7420.163,
                    end: 7422.124,
                    text: 'I need to talk to you.'
                },
                {
                    id: 1593,
                    start: 7430.173,
                    end: 7432.426,
                    text: "Shall I bring coffee, ma'am?-Go away."
                },
                {
                    id: 1594,
                    start: 7439.683,
                    end: 7441.184,
                    text: "It'll be complicated."
                },
                {
                    id: 1595,
                    start: 7442.936,
                    end: 7444.354,
                    text: "I don't care."
                },
                {
                    id: 1596,
                    start: 7455.991,
                    end: 7457.534,
                    text: 'Shut the door.'
                },
                {
                    id: 1597,
                    start: 7469.713,
                    end: 7473.216,
                    text: 'THE SECRET IN THEIR EYES'
                }
            ]
        }
    ]

    // TODO:
    // Pantalla de carga
    // Subtitulos con posiciones
    // Mostrar tiempo (quiza frame) al hacer hover en el timeline
    // Devolver al ultimo 'currentTime' si el usuario salio
    // Cambiar subtitulos correctamente y audio de idioma
    // Mostrar cambios en grande (al retrodecer, adelantar)

    return (
        <Player
            videos={toy_story}
            subtitles={subtitles}
            name="Toy Story"
            year="1995"
            history={history}
        />
    )
}

export default Play
