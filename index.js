function createAnimation(chars) {
  let anim = '';
  chars.forEach((char, i) => {
    anim += `
      ${(i / chars.length) * 100}% {
        content: '${char}'
      }`;
  });
  return anim;
}

exports.decorateConfig = (config) => {
  const catConfig = Object.assign({
    fontSize: config.fontSize,
    speed: 1000,
    cats: ['🐱', '😺'],
  }, config.catCursor);

  return Object.assign({}, config, {
    cursorColor: 'transparent',
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node::after {
        content: '${catConfig.cats[0]}';
        font-size: ${catConfig.fontSize}px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        animation: cat ${catConfig.speed}ms linear infinite;
      }

      @keyframes cat {
        ${createAnimation(catConfig.cats)}
      }`,
  });
};
