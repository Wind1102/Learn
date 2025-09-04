# Tracking process
- `ps` 
- `top`
- `htop`
# Finding open file with lsof
## Reading lsof ouptut
```shell
COMMAND     PID   TID TASKCMD                   USER   FD      TYPE             DEVICE    SIZE/OFF       NODE NAME
systemd       1                                 root  cwd   unknown                                           /proc/1/cwd (readlink: Permission denied)
```
`COMMAND` The command name for the process that holds the file descriptor.
`PID` The process ID.
`USER` The user running the process.
`FD` This field can contain two kinds of elements. In the output above, the FD column shows the purpose of the file. The FD field can also list the file descriptor of the open file—a number that a process uses together with the system libraries and kernel to identify and manipulate a file.
`TYPE` The file type (regular file, directory, socket, and so on).
`DEVICE` The major and minor number of the device that holds the file.
`SIZE` The file’s size.
`NODE` The file’s inode number.
`NAME` The filename.

## Using lsof
- List everythig and pipe the output to a command like `less` then search for what you're looking for.
- Narrow down the list that lsof provides with command-line options.