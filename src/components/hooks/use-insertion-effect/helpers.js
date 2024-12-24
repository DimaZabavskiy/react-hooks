export const getStyleRule = (theme) => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    main {
      background: ${theme === 'light' ? 'white' : 'black'};
      color: ${theme === 'light' ? 'black' : 'white'};
    }
  `;

  return styleTag;
}