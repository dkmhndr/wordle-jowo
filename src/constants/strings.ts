export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Ngwerih!', 'Joss!', 'Suangarr!']
export const GAME_COPIED_MESSAGE = 'Hasile wes mlebu clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Aksarane ra cukup'
export const WORD_NOT_FOUND_MESSAGE = 'Ukarane ra ketemu'
export const HARD_MODE_ALERT_MESSAGE = 'Mode ngelu gur iso diuripke ndek awal!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ukarane yaiku ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Kudu nganggo ${guess} ndek ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Bethekane kudu ono ${letter}`
export const ENTER_TEXT = 'Jajal'
export const DELETE_TEXT = 'Busak'
export const STATISTICS_TITLE = 'Statistike'
export const GUESS_DISTRIBUTION_TEXT = 'Sebaraning bethekanmu'
export const NEW_WORD_TEXT = 'Entenana ukara anyar'
export const SHARE_TEXT = 'Pamerke'
export const TOTAL_TRIES_TEXT = 'Totale njajal'
export const SUCCESS_RATE_TEXT = 'Persentase menang'
export const CURRENT_STREAK_TEXT = 'Streak saiki'
export const BEST_STREAK_TEXT = 'Streak paling akeh'
