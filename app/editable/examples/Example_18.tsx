"use client";

import React from "react";
import { EditableContainer } from "../_components/Editable_18";

export default function Example_18() {
  const handleSave = (content: string) => {
    console.log("Saved content:", content);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-900">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-500">
          System Administration
        </h2>
        <p className="text-green-400">
          Track server configurations and maintenance tasks
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-green-500">
            Server Configuration
          </label>
          <EditableContainer
            initialContent={`# Production Server Config
hostname: prod-server-01
ip: 192.168.1.100
os: Ubuntu 22.04 LTS

## System Resources
cpu: 16 cores
ram: 64GB
storage: 2TB SSD

## Network Config
port: 443
ssl: enabled
firewall: ufw active
vpn: wireguard

## Security
ssh_access: key-based only
fail2ban: enabled
selinux: enforcing`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-green-500">
            Maintenance Schedule
          </label>
          <EditableContainer
            initialContent={`# Weekly Tasks
- System updates: Sunday 02:00 UTC
- Log rotation: Daily at 00:00
- Backup verification: Monday 03:00
- Security scan: Wednesday 01:00

# Monthly Tasks
- Full system backup: 1st day 00:00
- Performance audit: 5th day 02:00
- SSL cert check: 10th day 01:00
- User access review: 15th day

# Quarterly Tasks
- Hardware diagnostics
- Network optimization
- Security policy review
- Disaster recovery test`}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-green-500">
            Monitoring Setup
          </label>
          <EditableContainer
            initialContent={`# Monitoring Tools
- Prometheus + Grafana
- ELK Stack
- Nagios Core
- Datadog

# Alert Thresholds
CPU Usage > 80%
Memory Usage > 85%
Disk Usage > 90%
Response Time > 2s

# Metrics Collection
- System metrics: 30s interval
- Application logs: real-time
- Network traffic: 1m interval
- Error rates: 15s interval

# Dashboard URLs
Grafana: https://monitor.company.com
Kibana: https://logs.company.com
Status: https://status.company.com`}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
