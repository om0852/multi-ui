"use client"

import React, { useState } from 'react';
import Collapsible_33 from '../_components/Collapsible_33';
import { FaTerminal, FaCode, FaShieldHalved, FaNetworkWired } from 'react-icons/fa6';

const Example_33: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const commandSections = [
    {
      title: "System Commands",
      content: (
        <div className="space-y-4 font-mono text-sm">
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ ls -la</div>
            <div className="text-gray-300">List all files in the current directory with detailed information</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`total 32
drwxr-xr-x  5 user  staff   160 Feb 10 09:23 .
drwxr-xr-x  3 user  staff    96 Feb 10 09:23 ..
-rw-r--r--  1 user  staff  1420 Feb 10 09:23 .gitignore
-rw-r--r--  1 user  staff  2481 Feb 10 09:23 README.md
drwxr-xr-x 12 user  staff   384 Feb 10 09:23 src`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ ps aux | grep node</div>
            <div className="text-gray-300">List all running Node.js processes</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`user 12345  0.5  0.8 4408636 135172 s001  S+   9:24AM  0:02.43 node server.js
user 12346  0.0  0.0 4299264   828 s002  S+   9:25AM  0:00.00 grep node`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ df -h</div>
            <div className="text-gray-300">Display disk space usage in human-readable format</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       234G   67G  156G  31% /
tmpfs            32G     0   32G   0% /dev/shm
/dev/sda2       550G  234G  289G  45% /home`}
            </pre>
          </div>
        </div>
      )
    },
    {
      title: "Network Commands",
      content: (
        <div className="space-y-4 font-mono text-sm">
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ ping -c 4 google.com</div>
            <div className="text-gray-300">Send 4 ICMP echo requests to google.com</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`PING google.com (142.250.190.78): 56 data bytes
64 bytes from 142.250.190.78: icmp_seq=0 ttl=116 time=14.465 ms
64 bytes from 142.250.190.78: icmp_seq=1 ttl=116 time=13.991 ms
64 bytes from 142.250.190.78: icmp_seq=2 ttl=116 time=14.244 ms
64 bytes from 142.250.190.78: icmp_seq=3 ttl=116 time=13.857 ms

--- google.com ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 13.857/14.139/14.465/0.233 ms`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ netstat -tuln</div>
            <div className="text-gray-300">Display active TCP/UDP connections and listening ports</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:3000          0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:27017         0.0.0.0:*               LISTEN     
udp        0      0 0.0.0.0:68              0.0.0.0:*`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ curl -I https://example.com</div>
            <div className="text-gray-300">Get HTTP headers from example.com</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`HTTP/2 200 
content-encoding: gzip
accept-ranges: bytes
age: 548066
cache-control: max-age=604800
content-type: text/html; charset=UTF-8
date: Mon, 10 Feb 2023 09:26:14 GMT
etag: "3147526947+gzip"
expires: Mon, 17 Feb 2023 09:26:14 GMT
last-modified: Thu, 17 Oct 2019 07:18:26 GMT
server: ECS (dcb/7F83)
x-cache: HIT
content-length: 648`}
            </pre>
          </div>
        </div>
      )
    },
    {
      title: "Git Commands",
      content: (
        <div className="space-y-4 font-mono text-sm">
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ git status</div>
            <div className="text-gray-300">Show the working tree status</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/components/App.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/NewFeature.js

no changes added to commit (use "git add" and/or "git commit -a")`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ git log --oneline -5</div>
            <div className="text-gray-300">Show the last 5 commits in one line each</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`a1b2c3d Fix navigation bug in mobile view
e5f6g7h Add user profile page
i9j0k1l Update dependencies to latest versions
m2n3o4p Implement dark mode toggle
q7r8s9t Initial commit`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ git branch -a</div>
            <div className="text-gray-300">List all branches (local and remote)</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`* main
  feature/user-auth
  feature/payment-integration
  remotes/origin/main
  remotes/origin/feature/user-auth
  remotes/origin/feature/payment-integration
  remotes/origin/staging`}
            </pre>
          </div>
        </div>
      )
    },
    {
      title: "Security Commands",
      content: (
        <div className="space-y-4 font-mono text-sm">
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ ssh-keygen -t rsa -b 4096</div>
            <div className="text-gray-300">Generate a new RSA SSH key pair with 4096 bits</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/user/.ssh/id_rsa
Your public key has been saved in /home/user/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:ZmL0xRra9PRHbKZp8u7zKZt7zQ6GhNuVQh4ZnmGpXkY user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|        .        |
|       + .       |
|      . B .      |
|     . = *       |
|      = S .      |
|     + = = +     |
|    . * * * +    |
|     o = = o .   |
|    ..o.=.E.     |
+----[SHA256]-----+`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ sudo iptables -L</div>
            <div className="text-gray-300">List all firewall rules</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:https
DROP       all  --  anywhere             anywhere            

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination`}
            </pre>
          </div>
          
          <div className="border border-gray-700 rounded bg-black p-3">
            <div className="text-green-400 mb-1">$ openssl enc -aes-256-cbc -salt -in file.txt -out file.enc</div>
            <div className="text-gray-300">Encrypt a file using AES-256-CBC</div>
            <div className="text-gray-500 text-xs mt-2">Example output:</div>
            <pre className="text-gray-400 text-xs mt-1 overflow-x-auto">
              {`enter aes-256-cbc encryption password:
Verifying - enter aes-256-cbc encryption password:`}
            </pre>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-mono flex items-center gap-3">
            <FaTerminal className="text-green-500" />
            <span className="text-green-500">~/</span>command-line-reference
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md font-mono text-sm`}
          >
            {darkMode ? '$ set-theme light' : '$ set-theme dark'}
          </button>
        </div>

        <div className="space-y-4">
          {commandSections.map((section, index) => (
            <div key={index} className="flex">
              <div className="mt-4 mr-2">
                {index === 0 && <FaTerminal className="text-green-500" />}
                {index === 1 && <FaNetworkWired className="text-blue-500" />}
                {index === 2 && <FaCode className="text-purple-500" />}
                {index === 3 && <FaShieldHalved className="text-red-500" />}
              </div>
              <div className="flex-1">
                <Collapsible_33
                  title={section.title}
                  defaultOpen={index === 0}
                >
                  {section.content}
                </Collapsible_33>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example_33; 