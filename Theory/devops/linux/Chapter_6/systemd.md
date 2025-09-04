

# Introduction to init
- The init program is a user-space program
- `systemd` The emerging standard for init.

# systemd
- The systemd init is one of the newest init implementations on Linux.
- using `systemctl` to interact with systemd

## Units and unit types
- systemd does not just operate processes and services; it can also mount file system, monitor network socket, run timer, and more...
- Each type of capability is called a `unit type`, each specific capability is called unit

## systemd  Dependency
- `Requires` : strict dependencies. when activating unit with requires dependencies unit, systend attempts to activating dependency. If dependency unit fails, systemd deactivates the depentdent unit
- `Wants`: dependency for activation only. it doesn't care if those dependencies fail.
- `Requisite` Unit that must already be active.efore activating a unit
with a Requisite dependency, systemd first checks the status of the
dependency. If the dependency has not been activated, systemd fails
on activation of the unit with the dependency.
- `Conflicts` Negative dependencies. When activating a unit with a
Conflict dependency, systemd automatically deactivates the dependency
if it is active. Simultaneous activation of two conflicting units fails.

- You can view a unit’s dependencies with the systemctl command, as long as you specify a type of dependency, such as Wants or Requires:
  - systemctl show -p <type> <unit> 

- `Ordering`
  - `Before` The current unit will active before listed unit(s) 
    - Example if Before=bar.target appears in foo.target, systemd activates for.target before.target
    - After The current unit activates after the listed unit(s).
- Conditional dependencies
  - `ConditionPathExists=p`: True if the (file) path p exists in the system.
  - `ConditionPathIsDirectory=p`: True if p is a directory.
  - `ConditionFileNotEmpty=p`: True if p is a file and it’s not zero-length.
  - if condition in unit is false,the unit is not-activate, this apply only for the unit condition is appear, therefore, systemd attempts to activate the dependency unit regardless of whether condition is true or false

## systemd Configuration

- To check the current systemd config search path using command:
  - example `systemctl -p UnitPath show`
- using `pkg-config`
  - example `pkg-config systemd --variable=systemdsystemunitdir`

### Unit file
- with sections name in brackets ([])

Example:
```service
[Unit]
Description=OpenSSH server daemon
After=syslog.target network.target auditd.service
[Service]
EnvironmentFile=/etc/sysconfig/sshd
ExecStartPre=/usr/sbin/sshd-keygen
ExecStart=/usr/sbin/sshd -D $OPTIONS
ExecReload=/bin/kill -HUP $MAINPID
[Install]
WantedBy=multi-user.target
```

## systemd operation
- view list of active units
  - `systemctl list-units`
- To activate, deactivate, restart unit 
  - `systemctl start, stop, restart`
- if change configuration, to tell systemd to reload the file
  - `systemctl reload <unit>` Reloads just the configuration for <unit>.
  - `systemctl daemon-reload` reload all unit configuration
- Requests to activate, reactivate, and restart units are known as jobs in systemd, to check current jobs
  - `systemctl list-jobs`

## Adding Units to systemd
```test1.target
[Unit]
Description=test 1
```

```test2.target
[Unit]
Description=test 2
Wants=test1.target
```

- Note:
    - If unit has an [Install] section, "enable" the unit before activating it:
      - `systemctl enable <unit>` -> create dependency symbolic 
      - `systemctl disable <unit>` -> remove any dependent symbolic unit

Try this with the preceding example. Remove the dependency from test2.target and add an [Install] section to test1.target containing WantedBy=test2.target.

## systemd processing tracking and synchronization
- Use `Type` option in your service unit file to indicate its startup behavior.
  - `Type=simple` The process doen't fork
  - `Type=forking` The service forks, and systemd expects the original service process to terminate.Upon termination, systemd assumes that the service is ready.
  - `Type=notify` The service send a notification specific to systemd when it's ready.
  - `Type=dbus` The service register itself on the D-bus when it's ready.
  - `Type=oneshot` The service process actually termunates completely when it's finished. -> will almost certainly need to add a `RemainAfterExit=yes` option  so that systemd will still regard the service as active even after its processes terminate
  - `Type=idle` . This simply instructs systemd not to start the service until there are no active jobs.

## systemd On-Demand and Resource-Parallelized Startup
