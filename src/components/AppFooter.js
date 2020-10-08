import React from 'react';
import credits from '../credits';

export default function AppFooter() {
  return (
    <footer className="flex justify-around p-6 mt-8 bg-bgSecondary">
      <div>
        <h3 className="text-xl font-semibold">Resources on This Page</h3>
        <ul>
          {credits.map((credit) => {
            return (
              <li key={credit.user} className="ml-4">
                <span className="text-sm">
                  Photo by{' '}
                  <a className="font-semibold" href={credit.link}>
                    {credit.user}
                  </a>{' '}
                  on{' '}
                  <a className="text-blue-800 font-semibold" href={credit.list}>
                    Unsplash
                  </a>{' '}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Contact Author</h3>
        <ul>
          <li className="ml-4">
            <a className="text-base" href="https://github.com/nagaremono">
              Github
            </a>
          </li>
          <li className="ml-4">
            <a
              className="text-base"
              href="https://github.com/nagaremono/use-my-used-client"
            >
              This Page's Repo
            </a>
          </li>
          <li className="ml-4">
            <a className="text-base" href="mailto:guruhedipurwanto@gmail.com">
              Email the Author
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
