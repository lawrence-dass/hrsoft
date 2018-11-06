import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sytles.scss';

import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));

// consider removing normalize css and adding customer css resets.
// integrate bundle-analyzer (npm)

// Learning
// // In parcelJS you dont need to config router setup for routing
