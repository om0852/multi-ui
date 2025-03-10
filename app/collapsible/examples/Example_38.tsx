"use client"

import React, { useState } from 'react';
import Collapsible_38 from '../_components/Collapsible_38';
import { FaTerminal, FaCode, FaDatabase, FaServer } from 'react-icons/fa6';

const Example_38: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const codeSnippets = [
    {
      title: "javascript-functions.js",
      content: (
        <div className="font-mono text-sm">
          <pre className="whitespace-pre-wrap">
            <span className="text-blue-400">function</span> <span className="text-green-400">fetchData</span><span className="text-gray-400">(</span><span className="text-orange-400">url</span><span className="text-gray-400">)</span> <span className="text-gray-400">{'{'}</span>
            {'  '}<span className="text-blue-400">return</span> <span className="text-blue-400">new</span> <span className="text-yellow-400">Promise</span><span className="text-gray-400">((</span><span className="text-orange-400">resolve</span>, <span className="text-orange-400">reject</span><span className="text-gray-400">) {'=> {'}</span>
            {'    '}<span className="text-yellow-400">fetch</span><span className="text-gray-400">(</span><span className="text-orange-400">url</span><span className="text-gray-400">)</span>
            {'      '}<span className="text-gray-400">.</span><span className="text-yellow-400">then</span><span className="text-gray-400">(</span><span className="text-orange-400">response</span> <span className="text-gray-400">{'=> '}</span><span className="text-orange-400">response</span><span className="text-gray-400">.</span><span className="text-yellow-400">json</span><span className="text-gray-400">())</span>
            {'      '}<span className="text-gray-400">.</span><span className="text-yellow-400">then</span><span className="text-gray-400">(</span><span className="text-orange-400">data</span> <span className="text-gray-400">{'=> '}</span><span className="text-yellow-400">resolve</span><span className="text-gray-400">(</span><span className="text-orange-400">data</span><span className="text-gray-400">))</span>
            {'      '}<span className="text-gray-400">.</span><span className="text-yellow-400">catch</span><span className="text-gray-400">(</span><span className="text-orange-400">error</span> <span className="text-gray-400">{'=> '}</span><span className="text-yellow-400">reject</span><span className="text-gray-400">(</span><span className="text-orange-400">error</span><span className="text-gray-400">));</span>
            {'  '}<span className="text-gray-400">{'}'});</span>
            <span className="text-gray-400">{'}'}</span>
            
            <span className="text-blue-400">async function</span> <span className="text-green-400">processUserData</span><span className="text-gray-400">(</span><span className="text-orange-400">userId</span><span className="text-gray-400">)</span> <span className="text-gray-400">{'{'}</span>
            {'  '}<span className="text-blue-400">try</span> <span className="text-gray-400">{'{'}</span>
            {'    '}<span className="text-blue-400">const</span> <span className="text-orange-400">userData</span> <span className="text-gray-400">=</span> <span className="text-blue-400">await</span> <span className="text-yellow-400">fetchData</span><span className="text-gray-400">(</span><span className="text-green-400">`/api/users/${'{'}userId{'}'}`</span><span className="text-gray-400">);</span>
            {'    '}<span className="text-blue-400">const</span> <span className="text-orange-400">processedData</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">transformData</span><span className="text-gray-400">(</span><span className="text-orange-400">userData</span><span className="text-gray-400">);</span>
            {'    '}<span className="text-blue-400">return</span> <span className="text-orange-400">processedData</span><span className="text-gray-400">;</span>
            {'  '}<span className="text-gray-400">{'}'}</span> <span className="text-blue-400">catch</span> <span className="text-gray-400">(</span><span className="text-orange-400">error</span><span className="text-gray-400">) {'{'}</span>
            {'    '}<span className="text-yellow-400">console</span><span className="text-gray-400">.</span><span className="text-yellow-400">error</span><span className="text-gray-400">(</span><span className="text-green-400">&apos;Error processing user data:&apos;</span><span className="text-gray-400">,</span> <span className="text-orange-400">error</span><span className="text-gray-400">);</span>
            {'    '}<span className="text-blue-400">throw new</span> <span className="text-yellow-400">Error</span><span className="text-gray-400">(</span><span className="text-green-400">&apos;Failed to process user data&apos;</span><span className="text-gray-400">);</span>
            {'  '}<span className="text-gray-400">{'}'}</span>
            <span className="text-gray-400">{'}'}</span>
          </pre>
        </div>
      )
    },
    {
      title: "database-queries.sql",
      content: (
        <div className="font-mono text-sm">
          <pre className="whitespace-pre-wrap">
            <span className="text-pink-400">-- Query to fetch user information with related orders</span>
            <span className="text-blue-400">SELECT</span> u.user_id, u.username, u.email, u.created_at,
            {'       '}COUNT(o.order_id) <span className="text-blue-400">AS</span> total_orders,
            {'       '}SUM(o.total_amount) <span className="text-blue-400">AS</span> total_spent
            <span className="text-blue-400">FROM</span> users u
            <span className="text-blue-400">LEFT JOIN</span> orders o <span className="text-blue-400">ON</span> u.user_id = o.user_id
            <span className="text-blue-400">WHERE</span> u.status = <span className="text-green-400">&apos;active&apos;</span>
            <span className="text-blue-400">GROUP BY</span> u.user_id, u.username, u.email, u.created_at
            <span className="text-blue-400">HAVING</span> COUNT(o.order_id) <span className="text-blue-400">&gt;</span> 0
            <span className="text-blue-400">ORDER BY</span> total_spent <span className="text-blue-400">DESC</span>;
            
            <span className="text-pink-400">-- Index for optimizing user lookup</span>
            <span className="text-blue-400">CREATE INDEX</span> idx_users_email <span className="text-blue-400">ON</span> users(email);
            
            <span className="text-pink-400">-- Transaction for updating inventory after order</span>
            <span className="text-blue-400">BEGIN TRANSACTION</span>;
            
            <span className="text-blue-400">UPDATE</span> products
            <span className="text-blue-400">SET</span> stock_quantity = stock_quantity - (
              <span className="text-blue-400">SELECT</span> quantity
              <span className="text-blue-400">FROM</span> order_items
              <span className="text-blue-400">WHERE</span> product_id = products.product_id
              <span className="text-blue-400">AND</span> order_id = 12345
            )
            <span className="text-blue-400">WHERE</span> product_id <span className="text-blue-400">IN</span> (
              <span className="text-blue-400">SELECT</span> product_id
              <span className="text-blue-400">FROM</span> order_items
              <span className="text-blue-400">WHERE</span> order_id = 12345
            );
            
            <span className="text-blue-400">COMMIT</span>;
          </pre>
        </div>
      )
    },
    {
      title: "docker-compose.yml",
      content: (
        <div className="font-mono text-sm">
          <pre className="whitespace-pre-wrap">
            <span className="text-blue-400">version:</span> <span className="text-green-400">&apos;3.8&apos;</span>
            
            <span className="text-blue-400">services:</span>
            {'  '}<span className="text-blue-400">app:</span>
            {'    '}<span className="text-blue-400">build:</span>
            {'      '}<span className="text-blue-400">context:</span> <span className="text-green-400">./</span>
            {'      '}<span className="text-blue-400">dockerfile:</span> <span className="text-green-400">Dockerfile</span>
            {'    '}<span className="text-blue-400">ports:</span>
            {'      '}- <span className="text-green-400">&apos;3000:3000&apos;</span>
            {'    '}<span className="text-blue-400">environment:</span>
            {'      '}<span className="text-blue-400">NODE_ENV:</span> <span className="text-green-400">production</span>
            {'      '}<span className="text-blue-400">DATABASE_URL:</span> <span className="text-green-400">postgres://user:password@db:5432/mydb</span>
            {'    '}<span className="text-blue-400">depends_on:</span>
            {'      '}- <span className="text-green-400">db</span>
            {'      '}- <span className="text-green-400">redis</span>
            {'    '}<span className="text-blue-400">volumes:</span>
            {'      '}- <span className="text-green-400">./app:/app</span>
            {'      '}- <span className="text-green-400">/app/node_modules</span>
            
            {'  '}<span className="text-blue-400">db:</span>
            {'    '}<span className="text-blue-400">image:</span> <span className="text-green-400">postgres:13</span>
            {'    '}<span className="text-blue-400">environment:</span>
            {'      '}<span className="text-blue-400">POSTGRES_USER:</span> <span className="text-green-400">user</span>
            {'      '}<span className="text-blue-400">POSTGRES_PASSWORD:</span> <span className="text-green-400">password</span>
            {'      '}<span className="text-blue-400">POSTGRES_DB:</span> <span className="text-green-400">mydb</span>
            {'    '}<span className="text-blue-400">volumes:</span>
            {'      '}- <span className="text-green-400">postgres_data:/var/lib/postgresql/data</span>
            
            {'  '}<span className="text-blue-400">redis:</span>
            {'    '}<span className="text-blue-400">image:</span> <span className="text-green-400">redis:6-alpine</span>
            {'    '}<span className="text-blue-400">ports:</span>
            {'      '}- <span className="text-green-400">&apos;6379:6379&apos;</span>
            
            <span className="text-blue-400">volumes:</span>
            {'  '}<span className="text-blue-400">postgres_data:</span>
          </pre>
        </div>
      )
    },
    {
      title: "server-config.sh",
      content: (
        <div className="font-mono text-sm">
          <pre className="whitespace-pre-wrap">
            <span className="text-pink-400">#!/bin/bash</span>
            
            <span className="text-pink-400"># Update system packages</span>
            <span className="text-green-400">apt-get</span> update
            <span className="text-green-400">apt-get</span> upgrade -y
            
            <span className="text-pink-400"># Install required dependencies</span>
            <span className="text-green-400">apt-get</span> install -y nginx nodejs npm postgresql redis-server
            
            <span className="text-pink-400"># Configure firewall</span>
            <span className="text-green-400">ufw</span> allow ssh
            <span className="text-green-400">ufw</span> allow http
            <span className="text-green-400">ufw</span> allow https
            <span className="text-green-400">ufw</span> enable
            
            <span className="text-pink-400"># Set up Nginx</span>
            <span className="text-green-400">cat</span> <span className="text-gray-400">{">"}</span> /etc/nginx/sites-available/default <span className="text-gray-400">{"<<"}</span> <span className="text-blue-400">EOF</span>
            server {'{'}
                listen 80;
                server_name example.com;
                
                location / {'{'}
                    proxy_pass http://localhost:3000;
                    proxy_http_version 1.1;
                    proxy_set_header Upgrade \$http_upgrade;
                    proxy_set_header Connection &apos;upgrade&apos;;
                    proxy_set_header Host \$host;
                    proxy_cache_bypass \$http_upgrade;
                {'}'}
            {'}'}
            <span className="text-blue-400">EOF</span>
            
            <span className="text-pink-400"># Restart Nginx</span>
            <span className="text-green-400">systemctl</span> restart nginx
            
            <span className="text-pink-400"># Clone application repository</span>
            <span className="text-green-400">git</span> clone https://github.com/example/app.git /var/www/app
            
            <span className="text-pink-400"># Install dependencies and build</span>
            <span className="text-green-400">cd</span> /var/www/app
            <span className="text-green-400">npm</span> install
            <span className="text-green-400">npm</span> run build
            
            <span className="text-pink-400"># Set up PM2 for process management</span>
            <span className="text-green-400">npm</span> install -g pm2
            <span className="text-green-400">pm2</span> start npm --name &quot;app&quot; -- start
            <span className="text-green-400">pm2</span> startup
            <span className="text-green-400">pm2</span> save
            
            <span className="text-pink-400"># Print completion message</span>
            <span className="text-green-400">echo</span> &quot;Server setup complete!&quot;
          </pre>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-mono flex items-center gap-3">
            <FaTerminal className="text-green-500" />
            <span className="text-green-500">~/</span>code-snippets
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 py-1 rounded ${
                darkMode ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-white text-gray-700 border border-gray-300'
              } font-mono text-xs`}
            >
              {darkMode ? '$ theme=light' : '$ theme=dark'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {codeSnippets.map((snippet, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaCode className="text-yellow-500" />}
                {index === 1 && <FaDatabase className="text-blue-500" />}
                {index === 2 && <FaServer className="text-purple-500" />}
                {index === 3 && <FaTerminal className="text-green-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_38
                  title={snippet.title}
                  defaultOpen={index === 0}
                >
                  {snippet.content}
                </Collapsible_38>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_38; 