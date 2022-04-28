export * from './components';
export * from './theme';

export function changeTheme(tokens: any) {
  Object.keys(tokens).forEach((token) => {
    document.documentElement.style.setProperty(token, tokens[token]);
  });
}
