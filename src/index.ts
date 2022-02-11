export * from './components';

export function changeTheme(tokens: any)  {
  Object.keys(tokens).forEach(token => {
    document.documentElement.style.setProperty(token, tokens[token]);
  })
}