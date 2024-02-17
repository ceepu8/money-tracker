import { COLOR_TYPES, STATUS_TYPES } from './types'

// export const FILTER_COLOR = {
//   [COLOR_TYPES.RED]: {
//     100: {
//       RGBA: 'rgb(255, 239, 237, 1)',
//       HEX: '#ffefed',
//     },
//     200: {
//       RGBA: 'rgb(255, 212, 207, 1)',
//       HEX: '#ffd4cf',
//     },
//     300: {
//       RGBA: 'rgb(255, 185, 183, 1)',
//       HEX: '#ffb9b7',
//     },
//     400: {
//       RGBA: 'rgb(255, 157, 155, 1)',
//       HEX: '#ff9d9b',
//     },
//     500: {
//       RGBA: 'rgb(255, 129, 127, 1)',
//       HEX: '#ff817f',
//     },
//   },
//   [COLOR_TYPES.PINK]: {
//     100: {
//       RGBA: 'rgb(255, 241, 247, 1)',
//       HEX: '#fff1f7',
//     },
//     200: {
//       RGBA: 'rgb(255, 227, 241, 1)',
//       HEX: '#ffe3f1',
//     },
//     300: {
//       RGBA: 'rgb(255, 213, 234, 1)',
//       HEX: '#ffd5ea',
//     },
//     400: {
//       RGBA: 'rgb(255, 199, 228, 1)',
//       HEX: '#ffc7e4',
//     },
//     500: {
//       RGBA: 'rgb(255, 185, 221, 1)',
//       HEX: '#ffb9dd',
//     },
//   },
//   [COLOR_TYPES.PURPLE]: {
//     100: {
//       RGBA: 'rgb(243, 237, 246, 1)',
//       HEX: '#f3edf6',
//     },
//     200: {
//       RGBA: 'rgb(223, 206, 235, 1)',
//       HEX: '#dfceeb',
//     },
//     300: {
//       RGBA: 'rgb(203, 175, 224, 1)',
//       HEX: '#cbafe0',
//     },
//     400: {
//       RGBA: 'rgb(183, 145, 213, 1)',
//       HEX: '#b791d5',
//     },
//     500: {
//       RGBA: 'rgb(163, 115, 202, 1)',
//       HEX: '#a373ca',
//     },
//   },
//   [COLOR_TYPES.BLUE]: {
//     100: {
//       RGBA: 'rgb(222, 236, 243, 1)',
//       HEX: '#deecef',
//     },
//     200: {
//       RGBA: 'rgb(194, 221, 235, 1)',
//       HEX: '#c2ddeb',
//     },
//     300: {
//       RGBA: 'rgb(166, 206, 226, 1)',
//       HEX: '#a6cee2',
//     },
//     400: {
//       RGBA: 'rgb(138, 190, 216, 1)',
//       HEX: '#8abed8',
//     },
//     500: {
//       RGBA: 'rgb(110, 175, 207, 1)',
//       HEX: '#6eafc',
//     },
//   },
//   [COLOR_TYPES.GREEN]: {
//     100: {
//       RGBA: 'rgb(219, 237, 219, 1)',
//       HEX: '#dbeddb',
//     },
//     200: {
//       RGBA: 'rgb(196, 227, 196, 1)',
//       HEX: '#c4e3c4',
//     },
//     300: {
//       RGBA: 'rgb(172, 216, 172, 1)',
//       HEX: '#acd8ac',
//     },
//     400: {
//       RGBA: 'rgb(149, 206, 149, 1)',
//       HEX: '#95ce95',
//     },
//     500: {
//       RGBA: 'rgb(125, 195, 125, 1)',
//       HEX: '#7dc37d',
//     },
//   },
//   [COLOR_TYPES.YELLOW]: {
//     100: {
//       RGBA: 'rgb(253, 236, 200, 1)',
//       HEX: '#fdec8c',
//     },
//     200: {
//       RGBA: 'rgb(248, 223, 155, 1)',
//       HEX: '#f8df9b',
//     },
//     300: {
//       RGBA: 'rgb(244, 209, 110, 1)',
//       HEX: '#f4d16e',
//     },
//     400: {
//       RGBA: 'rgb(239, 196, 66, 1)',
//       HEX: '#efc442',
//     },
//     500: {
//       RGBA: 'rgb(234, 183, 22, 1)',
//       HEX: '#eab716',
//     },
//   },
//   [COLOR_TYPES.ORANGE]: {
//     100: {
//       RGBA: 'rgb(250, 222, 201, 1)',
//       HEX: '#fadec9',
//     },
//     200: {
//       RGBA: 'rgb(244, 199, 177, 1)',
//       HEX: '#f4c7b1',
//     },
//     300: {
//       RGBA: 'rgb(238, 175, 153, 1)',
//       HEX: '#eeaf99',
//     },
//     400: {
//       RGBA: 'rgb(232, 151, 129, 1)',
//       HEX: '#e89781',
//     },
//     500: {
//       RGBA: 'rgb(226, 127, 105, 1)',
//       HEX: '#e27f69',
//     },
//   },
//   [COLOR_TYPES.BROWN]: {
//     100: {
//       RGBA: 'rgb(238, 224, 218, 1)',
//       HEX: '#eee0da',
//     },
//     200: {
//       RGBA: 'rgb(227, 203, 195, 1)',
//       HEX: '#e3cbc3',
//     },
//     300: {
//       RGBA: 'rgb(216, 182, 173, 1)',
//       HEX: '#d8b6ad',
//     },
//     400: {
//       RGBA: 'rgb(206, 161, 151, 1)',
//       HEX: '#cea197',
//     },
//     500: {
//       RGBA: 'rgb(195, 140, 129, 1)',
//       HEX: '#c38c81',
//     },
//   },
//   [COLOR_TYPES.GRAY]: {
//     100: {
//       RGBA: 'rgb(227, 226, 224, 1)',
//       HEX: '#e3e2e0',
//     },
//     200: {
//       RGBA: 'rgb(213, 212, 210, 1)',
//       HEX: '#d5d4d2',
//     },
//     300: {
//       RGBA: 'rgb(199, 198, 196, 1)',
//       HEX: '#c7c6c4',
//     },
//     400: {
//       RGBA: 'rgb(185, 184, 182, 1)',
//       HEX: '#b9b8b6',
//     },
//     500: {
//       RGBA: 'rgb(171, 170, 168, 1)',
//       HEX: '#abaaa8',
//     },
//   },
//   [COLOR_TYPES.LIGHT_GRAY]: {
//     100: {
//       RGBA: 'rgba(227, 226, 224, 0.5)',
//       HEX: '#e3e2e080',
//     },
//     200: {
//       RGBA: 'rgba(213, 212, 210, 0.5)',
//       HEX: '#d5d4d280',
//     },
//     300: {
//       RGBA: 'rgba(199, 198, 196, 0.5)',
//       HEX: '#c7c6c480',
//     },
//     400: {
//       RGBA: 'rgba(185, 184, 182, 0.5)',
//       HEX: '#b9b8b680',
//     },
//     500: {
//       RGBA: 'rgba(171, 170, 168, 0.5)',
//       HEX: '#abaaa880',
//     },
//   },
// }

export const FILTER_COLOR = {
  [COLOR_TYPES.RED]: {
    BOX_COLOR: {
      RGBA: 'rgba(255, 239, 237, 1)',
      HEX: '#ffefed',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(93, 23, 21, 1)',
      HEX: '#5d1715',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(255, 226, 221, 1)',
      HEX: '#ffe2dd',
    },
    DOT_COLOR: {
      RGBA: 'rgba(225, 111, 100, 1)',
      HEX: '#e16f64',
    },
  },
  [COLOR_TYPES.PINK]: {
    BOX_COLOR: {
      RGBA: 'rgba(255, 241, 247, 1)',
      HEX: '#fff1f7',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(76, 35, 55, 1)',
      HEX: '#4c2337',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(245, 224, 233, 1)',
      HEX: '#f5e0e9',
    },
    DOT_COLOR: {
      RGBA: 'rgba(205, 116, 159, 1)',
      HEX: '#cd749f',
    },
  },
  [COLOR_TYPES.PURPLE]: {
    BOX_COLOR: {
      RGBA: 'rgb(243, 237, 246, 1)',
      HEX: '#f3edf6',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(65, 36, 84, 1)',
      HEX: '#412454',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(232, 222, 238, 1)',
      HEX: '#e8deee',
    },
    DOT_COLOR: {
      RGBA: 'rgba(167, 130, 195, 1)',
      HEX: '#a782c3',
    },
  },
  [COLOR_TYPES.BLUE]: {
    BOX_COLOR: {
      RGBA: 'rgb(222, 236, 243, 1)',
      HEX: '#deecef',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(24, 51, 71, 1)',
      HEX: '#183347',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(211, 229, 239, 1)',
      HEX: '#d3e5ef',
    },
    DOT_COLOR: {
      RGBA: 'rgba(91, 151, 189, 1)',
      HEX: '#5b97bd',
    },
  },
  [COLOR_TYPES.GREEN]: {
    BOX_COLOR: {
      RGBA: 'rgb(219, 237, 219, 1)',
      HEX: '#dbeddb',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(28, 56, 41, 1)',
      HEX: '#1c3829',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(219, 237, 219, 1)',
      HEX: '#dbeddb',
    },
    DOT_COLOR: {
      RGBA: 'rgba(108, 155, 125, 1)',
      HEX: '#6c9b7d',
    },
  },
  [COLOR_TYPES.YELLOW]: {
    BOX_COLOR: {
      RGBA: 'rgb(253, 236, 200, 1)',
      HEX: '#fdec8c',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(64, 44, 27, 1)',
      HEX: '#402c1b',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(253, 236, 200, 1)',
      HEX: '#fdecc8',
    },
    DOT_COLOR: {
      RGBA: 'rgba(203, 148, 51, 1)',
      HEX: '#cb9433',
    },
  },
  [COLOR_TYPES.ORANGE]: {
    BOX_COLOR: {
      RGBA: 'rgb(250, 222, 201, 1)',
      HEX: '#fadec9',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(73, 41, 14, 1)',
      HEX: '#49290e',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(250, 222, 201, 1)',
      HEX: '#fadec9',
    },
    DOT_COLOR: {
      RGBA: 'rgba(215, 129, 58, 1)',
      HEX: '#d7813a',
    },
  },
  [COLOR_TYPES.BROWN]: {
    BOX_COLOR: {
      RGBA: 'rgb(238, 224, 218, 1)',
      HEX: '#eee0da',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(68, 42, 30, 1)',
      HEX: '#442a1e',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(238, 224, 218, 1)',
      HEX: '#eee0da',
    },
    DOT_COLOR: {
      RGBA: 'rgba(187, 132, 108, 1)',
      HEX: '#bb846c',
    },
  },
  [COLOR_TYPES.GRAY]: {
    BOX_COLOR: {
      RGBA: 'rgb(227, 226, 224, 1)',
      HEX: '#e3e2e0',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(50, 48, 44, 1)',
      HEX: '#32302c',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(227, 226, 224, 1)',
      HEX: '#e3e2e0',
    },
    DOT_COLOR: {
      RGBA: 'rgba(145, 145, 142, 1)',
      HEX: '#91918e',
    },
  },
  [COLOR_TYPES.LIGHT_GRAY]: {
    BOX_COLOR: {
      RGBA: 'rgba(227, 226, 224, 0.5)',
      HEX: '#e3e2e080',
    },
    TEXT_COLOR: {
      RGBA: 'rgba(50, 48, 44, 1)',
      HEX: '#32302c',
    },
    BADGE_COLOR: {
      RGBA: 'rgba(227, 226, 224, 0.5)',
      HEX: '#e3e2e080',
    },
    DOT_COLOR: {
      RGBA: 'rgba(145, 145, 142, 1)',
      HEX: '#91918e',
    },
  },
}

export const STATUS_COLORS = {
  [STATUS_TYPES.TO_DO]: 'rgb(120, 119, 116)',
  [STATUS_TYPES.IN_PROGRESS]: 'rgb(51, 126, 169)',
  [STATUS_TYPES.COMPLETE]: 'rgb(68, 131, 97)',
}
