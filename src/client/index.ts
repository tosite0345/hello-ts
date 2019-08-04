import {axiosInterface} from './api'

const elm = document.getElementById('ping')
if (elm) {
    elm.addEventListener('click', () => {
        axiosInterface.get('/')
            .then(({data}) => {
                console.log(data)
            })
    })
}