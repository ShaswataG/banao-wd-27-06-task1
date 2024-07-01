import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/header.css';
import './styles/group/group-cover.css';
import './styles/group/group-content/posts-header.css';
import './styles/group/group-content/posts.css';
import './styles/group/group-content/group-content-inner-container.css';
import './styles/group/group-content/side-panel.css';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
