const reactElement={
    typr: 'a',
    props:{
        href:'https://google.com',
        terget:'_blank'
    },
    children: 'click me to visit google'

}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)