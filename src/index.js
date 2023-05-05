import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app.component';
import { QueryProvider } from './domain/query-provider/query-provider.component';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <QueryProvider>
            <App />
        </QueryProvider>
    </React.StrictMode>
);
