// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// const defaultTheme = {
//     palette: {
//         "backgroundOne":"black",
//         "background": "black",
//         "primary1Color":"#00bcd4",
//         "primary2Color":"#d9a3ea",
//         "primary3Color":"#bdbdbd",
//         "accent1Color":"#ff4081",
//         "accent2Color":"#f5f5f5",
//         "accent3Color":"#9e9e9e",
//         "textColor":"black",
//         "secondaryTextColor":"rgba(0, 0, 0, 0.54)",
//         "alternateTextColor":"#ffffff",
//         "canvasColor":"#ffffff","borderColor":"#e0e0e0",
//         "disabledColor":"rgba(0, 0, 0, 0.3)",
//         "pickerHeaderColor":"#00bcd4",
//         "shadowColor":"rgba(0, 0, 0, 1)"
//     },
// };
// const propTypes = {
//     setCSS: PropTypes.func,
//     CSSLink: PropTypes.func,
//     themes: PropTypes.object,
//     override: PropTypes.bool,
//     className: PropTypes.string,
// };
// const defaultProps = {
//     themes: defaultTheme,
// }


// export default class ThemeProvider extends Component {
//     constructor(props, ...args) {
//         super(props, ...args);
//         this.setCSS = props.setCSS || setCSS;
//         this.CSSLink = props.CSSLink || CSSLink;
//         this.className = props.className || 'theme';
//     }

//     render() {
//         const currentTheme = this.props.themes;
//         const palette = currentTheme.palette;
//         const CSSstyles = this.setCSS(palette, this.className);

//         return (
//           <div className={this.className}>
//           {this.CSSLink(CSSstyles)}
//             <div>{this.props.children}</div>
//           </div>
//         );
//     }
// }

// ThemeProvider.propTypes = propTypes;
// ThemeProvider.defaultProps = defaultProps;

// function setCSS(palette, className) {
//     const style = `
// ${className} {
//     color: ${palette.textColor};
//     background-color: ${palette.background} || ${palette.canvasColor};
//     border-width: 1px;
//     border-color: ${palette.borderColor};
//     font-family: Roboto, sans-serif;
//     font-size: 12px;
// }
// ${className} a {
//     color: ${palette.primary1Color};
// }
// .${className} span {
//     color: ${palette.accent1Color};
// }
// .${className} ::selection {
//     background: ${palette.primary2Color};
// }
// `;
//     return style;
// }

// function CSSLink(CSSdata) {
//     return (
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href={`data:text/css,${CSSdata}`}
//       />);
// }