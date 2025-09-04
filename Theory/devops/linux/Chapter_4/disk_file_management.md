



# 4.2 Filesystems

## 4.2.1 Filesystem types

## 4.2.2 Creating a Filesystem 
```shell
# mkfs -t <filetype> <partition>
mkfs -t ext4 /dev/nvme0n1p1
```
- filesystem creation is task should only need to perform after adding a new disk or repartitioning an old one. You should create a filesystem just once for
each new partition that has no preexisting data (or that has data that you want to
remove). Creating a new filesystem on top of an existing filesystem will effectively
destroy the old data.
## 4.2.3 Mounting file system

- The process of attaching filesystem is called `mounting`
- must know:
  - The filesystem Device (such as dick partitions)
  - file system type
  - `mount point` the current system's directory hierarchy where the filesystem will be attach

- To mount a filesystem using `mount`
```shell
# mount -t <type > <device> <mount_point>
mount -t ext4 /dev/sdf2 /home/extra
# dont actually need '-t type' because mount can usually figure it out for you
```

- To unmount (detach) filesystem
```shell
# unmount <mount_point> or unmount /dev/sdf2
unmount /home/extra
unmount /dev/sdf2
```

## 4.2.4 filesystem UUID
- device name can be change because depends on the order in which the kernal finds the devices. -> to solve problem -> can identify and mount file system using UUID.

```shell
blkid
/dev/nvme0n1p5: UUID="bd22ba4d-8cc2-47e4-b3cc-e95b3a492245" BLOCK_SIZE="4096" TYPE="ext4" PARTUUID="372e2672-2e35-4d05-8afb-961a06ae67db"

```

- mount using uuid

```shell
mount uuid="bd22ba4d-8cc2-47e4-b3cc-e95b3a492245" /home/extra
```

## 4.2.6 Filesystem mount options
- Short options

  - `-r` readonly mode
  - `-n` ensure that mount doesn't try to update the system runtime mount database, /etc/mtab.
  - `-t` specifies file system type
- Long options, start with `-o` and apply some keyword
  - `exec`, `noexec` Enables or disables execution of programs on the filesystem
  - `suid`, `nosuid` Enables or disables setuid programs
  - `ro` mount filesystem in readonly mode = `-r` short options
  - `rw` read-write mode
  - `conv=rule` (FAT-based filesystems) Converts the newline characters in files based on rule (can be `binary`, `text`, `auto`)

## 4.2.7 Remounting a filesystem
```shell
mount -n -o remount /
```
- This command assumes that the correct device listing for / is in /etc/fstab (as discussed in the next section). If it is not, you must specify the device.

## 4.2.8 The /etc/fstab  filesystem table.

## 4.2.10 Filesystem capacity
- using `df` command to view the size and utilization of your current mount filesystem.

```shell
df 
Filesystem     1K-blocks     Used Available Use% Mounted on
tmpfs            1611584     2196   1609388   1% /run
/dev/nvme0n1p5 154953088 34317012 112692092  24% /
tmpfs            8057900   106288   7951612   2% /dev/shm
tmpfs               5120        8      5112   1% /run/lock
efivarfs             384      100       280  27% /sys/firmware/efi/efivars
/dev/nvme0n1p1     98304    37787     60517  39% /boot/efi
tmpfs            1611580      160   1611420   1% /run/user/1000
```