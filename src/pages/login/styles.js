import styled from 'styled-components';

const LoginPageStyles = styled.section`
    margin: 4rem auto 0;
    max-width: 480px;
    h2{
        text-align: center;
        font-size: 2rem;
    }
    /** Used to define container behavior: width, position: fixed etc... **/
.Toastify__toast-container {
}

/** Used to define the position of the ToastContainer **/
.Toastify__toast-container--top-left {
}
.Toastify__toast-container--top-center {
}
.Toastify__toast-container--top-right {
}
.Toastify__toast-container--bottom-left {
}
.Toastify__toast-container--bottom-center {
}
.Toastify__toast-container--bottom-right {
}

/** Classes for the displayed toast **/
.Toastify__toast {
    background-color: red;
    color: white;
}
.Toastify__toast--rtl {
}
.Toastify__toast-body {
}

/** Used to position the icon **/
.Toastify__toast-icon {
}

/** handle the notificaiton color and the text color based on the theme **/
.Toastify__toast-theme--dark {
}
.Toastify__toast-theme--light {
}
.Toastify__toast-theme--colored.Toastify__toast--default {
}
.Toastify__toast-theme--colored.Toastify__toast--info {
}
.Toastify__toast-theme--colored.Toastify__toast--success {
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
}
.Toastify__toast-theme--colored.Toastify__toast--error {
    background-color: blue;
}

.Toastify__progress-bar {
}
.Toastify__progress-bar--rtl {
}
.Toastify__progress-bar-theme--light {
}
.Toastify__progress-bar-theme--dark {
}
.Toastify__progress-bar--info {
}
.Toastify__progress-bar--success {
}
.Toastify__progress-bar--warning {
}
.Toastify__progress-bar--error {
}
/** colored notifications share the same progress bar color **/
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning, .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
}

/** Classes for the close button. Better use your own closeButton **/
.Toastify__close-button {
}
.Toastify__close-button--default {
}
.Toastify__close-button > svg {
}
.Toastify__close-button:hover, .Toastify__close-button:focus {
}

`

const FormControl = styled.div`
    margin: 1rem 0;
`



export {LoginPageStyles, FormControl}