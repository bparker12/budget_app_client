import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import BudgetApp from './BudgetApp'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <BudgetApp />
    </Router>
    , document.getElementById('root'))

// serviceWorker.unregister();
