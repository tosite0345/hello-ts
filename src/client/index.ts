import {axiosInterface} from './api'
import {Ping} from '../types/api'

const elm = document.getElementById('ping')
if (elm) {
    elm.addEventListener('click', () => {
        axiosInterface.get<Ping>('/')
            .then(({data}) => {
                console.log(data)
            })
    })
}