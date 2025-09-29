export enum Screen {
  mobile = 1,
  tablet,
  desktop
}

export const BREAKPOINTS: Record<Screen, string> = {
  [Screen.mobile]: '(max-width: 599px)',
  [Screen.tablet]: '(min-width: 600px) and (max-width: 899px)',
  [Screen.desktop]: '(min-width: 900px)'
}
