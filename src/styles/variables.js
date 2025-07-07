import { css } from 'styled-components';

const variables = css`
  :root {
    --bg-dark: #0d0d0d;
    --bg-medium: #161618;
    --bg-medium-alpha: rgba(22, 22, 24, 0.85);
    --bg-light: #1f1a38;
    --bg-lightest: #2d2559;
    --shadow: rgba(0, 0, 0, 0.7);
    --text-dark: #77718b;
    --text-medium: #dad8e4;
    --text-light: #c8c1e8;
    --text-lightest: #eae6ff;
    --white: #ffffff;
    --accent: #7f5af0;
    --accent-tint: rgba(127, 90, 240, 0.1);
    --accent-secondary: #9d80f3;
    --accent-tertiary: #6745d8;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
