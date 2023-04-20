import React, { useState } from 'react';
import '../styles/NavItem.css'

export function NavItem({ content, onClick, page, currentPage }) {
    const isSelected = page === currentPage

    return (
                 <li className={`header-item ${isSelected ? 'header-item-selected' : ''}`} id='active'>
                     <a
                onClick={onClick}
                href={`#${page}`}
                     >
                         {isSelected ? <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M11.574 3.712c.195-.323.662-.323.857 0l9.37 15.545c.2.333-.039.757-.429.757l-18.668-.006c-.385 0-.629-.422-.428-.758l9.298-15.538zm.429-2.483c-.76 0-1.521.37-1.966 1.111l-9.707 16.18c-.915 1.523.182 3.472 1.965 3.472h19.416c1.783 0 2.879-1.949 1.965-3.472l-9.707-16.18c-.446-.741-1.205-1.111-1.966-1.111z"/></svg>
                            : <svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/></svg>}
                        {content}
                    </a>
            </li>
     );
};