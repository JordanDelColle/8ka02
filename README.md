# React With Styled Components

- Configure Styled Components
- Extension for Styled Components snippets...
- Create a global stylesheet
- Styled component you use createGlobalStyle
```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        background:red;
    }
`
export {GlobalStyles}
```
