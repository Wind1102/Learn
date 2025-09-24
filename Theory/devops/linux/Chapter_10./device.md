- [Device file](#device-file)

# Device file

```shell
ls -l
#device file

brw-rw---- 1 root disk 8, 1 Sep 6 08:37 sda1
crw-rw-rw- 1 root root 1, 3 Sep 6 08:37 null
prw-r--r-- 1 root root 0 Mar 3 19:17 fdata
srw-rw-rw- 1 root root 0 Dec 18 07:43 log
```
- `b` is block
- `c` is character
- `p` i pipe
- `s` is socket

- Block device
  - Programs access data from a block device in fixed chunk
- Character device
  -  Character devices work with data streams.
  -  You can only read character from or write characters to character devices
- Pipe device
  - Named pipe(also call FIFO) is like vitural file in system, but instead storing data on disk, it connects the output of one process to the input of another ( with another process at the other end of the I/O stream instead of a kernel driver.)

```rust
# in character device 
your process  <---->  kernel driver  <----> hardware

# in named pipe
your process  <---->  pipe buffer  <----> another process
```

