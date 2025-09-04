- [Networking basic](#networking-basic)
  - [packets](#packets)
- [Network layer (TCP/IP model)](#network-layer-tcpip-model)
- [OSI model](#osi-model)
  - [Network layer](#network-layer)
  - [how to assign ip address](#how-to-assign-ip-address)
  - [IPv4](#ipv4)
  - [Classful Addressing](#classful-addressing)
  - [CIDR: classless Inter Domain Routing](#cidr-classless-inter-domain-routing)
  - [Dynamic NAT](#dynamic-nat)
  - [Port Address Translation (NAT overloading)](#port-address-translation-nat-overloading)
- [IPv6](#ipv6)
- [MAC and ARP](#mac-and-arp)
- [Transport Layer](#transport-layer)
  - [Socket](#socket)
  - [UDP](#udp)
  - [TCP](#tcp)


# Networking basic
- each machine connect to network is called a `host`
- The host connected to a `router`. router connect to Internet
- Each host connect to internet via router


## packets
- Computer transmits data over a network in small chunks called `packet`, consist of two part `header` and `payload`
- `header` contain information such as the origin/destination hosts and basic protocol
- `payload` is actual application data that computer want to send.

# Network layer (TCP/IP model)
- Application layer
- Transport layer
- Network layer 
- Physical layer

# OSI model
- Application layer - Human-computer interaction layer , where application can access the network services
- Presentation layer - Ensure that data is in a usable format and is where data encription occurs
- Session layer - maintain connection and is responsible for controlling port and session 
- Transport layer - Transmit data uing protocol TCP/UDP
- Network layer - Decides which physical path the data will take
- Data link layer - Define format of data on the network
- Physical layer - transmit raw bit stream over physical medium


## Network layer
- The internet's topology decentralize
- The kind of host is called router if if can transmit data from a subnet to another subnet (another term for router is gateway)
- Each enternet host has at least one numeric IP address. it should be unique across the entire Internet
- A host can be attached to more than one subnet, but it has at least one IP address per subnet
- IP address consists of 4 bytes (32 bit) a.b.c.d, a and d are numbers from 1-254, b and c are from 0-255
- Subnet is a connected group of hosts with IP addr,
- Define subnet with two pieces: a network prefix and a subnet mask


## how to assign ip address
- Static:
  - Windows: Control Panel -> Network -> Configuration -> TCP/IP -> Properties
  - Linux: /etc/network/interfaces
- Auto: DHCP - Dynamic Host Configuration Protocal

## IPv4
- Ip address have two part:
  - Network Id: n-bit first
  - Host Id: (32-n) bit last
- Type of address:
  - Network address:
    - identify for netwok (subnet), not assign for any host.
    - all bits of HostID is 0
    - 0.0.0.0 Network-wide address, representing any network
  - Broadcast Address:
    - use to send data for all unicast address (all host in subnet) (example, send data to broadcast, any host in subnet will recive)
    - all bits of HostId is 1
    - 255.255.255.255 Broadcast address in a network
  - Multicast address: identify for group (send data like broadcast address), all multicast IPv4 in range 224.0.0.0 – 239.255.255.255
  - Unicast Address: assign to a network port (assign to a host in network, not network,broadcast)

## Classful Addressing
  
## CIDR: classless Inter Domain Routing
- format: m1.m2.m3.m4/n   (n is Netmask, is the number of bits in the part corresponding to the network address (NetworkID))
  - IP: 192.168.1.0, NetMask: 255.255.255.0 -> 192.168.1.0/24  
- NetMask




## Dynamic NAT
- NAT router automatic map list private address to list public address 
- Router get a Pulbic IP use in pool to create connection from internal IP to public IP
- Dynamic NAT can't use to map from Public IP to local IP

## Port Address Translation (NAT overloading)
- is special Dynamic NAT, to make better use of IPv4 address space
- allow many address map to a register public IP with different port number

# IPv6
- 128 bit, present by hexadecimal, seperate ":" between group of 4 hexa numbers
  - Example 3ffe:501:100c:e320:2e0:18ff:fe98:936d

# MAC and ARP
- ARP: address resolution protocal 
- ARC using MAC in Data Link Layer

# Transport Layer
## Socket
- service object that the transport layer provides to the application process.
- application process use transport layer via socket

## UDP 


## TCP
- Connectionless oriented protocol
- “Best-effort” transmission: send only once, no retransmission
- Why need UDP:
  - not need establish link (reduce latency)
  - not need to keep link state from reciver and sender
- UDP using data unit called `datagram`
- Problem:
  - Reliability not guaranteed
  - No congestion control

   