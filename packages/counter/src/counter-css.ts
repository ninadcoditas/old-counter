import { css } from 'lit-element';
export default css`
.counter_container{
    display: flex;
    width: 120px;
    background-color: var(--counter-background-color);
    opacity: var(--counter-opacity);
    font-family: var(--counter-font-family);
    color:var(--counter-font-color);
    font-size: var(--counter-font-size);
    font-weight: var(--counter-font-weight);
}

.counter_element{
    width: 40px;
    height: 40px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:2em;
}
button{
    width: 100%;
    height: 100%;
    color:var(--counter-enabled-state);
}
button:disabled{
    color:var(--counter-disabled-color);
}   
`;
