import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Page from '../../containers/page'
import '../pokedex/main.css'
import configureStore from '../../redux/store/configure-store'

const store = configureStore()




const Testredux = () => (
    <Provider store={store}><Page /></Provider>
);

export default AsyncComponent(module, Testredux);
