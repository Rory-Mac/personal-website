---
layout: narrow
title: Computer Networks
---
<h4>Computer Networks</h4>
<p>The lowest level of abstraction in computer networking is the physical layer, that is, the physical medium by which bits of data are transferred. Ethernet, Wi-Fi,
USB, Bluetooth and Fiber Optics, are all examples of physical layer standards. Network protocols exist as abstractions atop this physical layer, defining how raw data is 
formatted and sequenced into network packets before transmission. Transmission and reception of network packets is referred to as packet switching, and allows computers
on a computer network to maintain multiple simultaneous connections with one another. Network packets consist of a header, describing the data to be transferred, and a
payload, storing the data itself.</p>
<p><img src="/Assets/images/OSI_TCP_IP.png" width="100%" height="100%"></p>
<p>The OSI model and TCP/IP model are models used to categorise network protocols seated atop the physical layer. Each layer
corresponds to an instance of encapsulation, whereby the packets of the more abstract network protocol when combined with an additional header become the payload of the
less abstract network protocol. Packets may fragment into numerous network packets at less abstract network layers. Physical frames, such as an ethernet frame, format
packet data to enable transmission over a specific physical medium, such as ethernet. The payload of such a physical frame will be a frame belonging to a protocol
that deals with transmission control, error management, and interoperability between protocols. This is defined in the OSI stack by the MAC and Logic-Link sublayers of
the Data-Link layer.</p>
<p><img src="/Assets/images/MAC_frame_bitfields.png" width="100%" height="100%"></p>
<p>MAC (Medium Access Control), is a data-link protocol managing the exchange of data through a physical medium between nodes in a computer network. This is not to be
confused with MAC addresses, also known as physical or hardware addresses, which are unique identifiers stored in the firmware or read-only memory of a network interface
controller belonging to a host device. The payload of a MAC frame is the packet of a more abstract network protocol. Local network routers maintain a forwarding table
used to map MAC addresses to authenticated socket connections. This gives an efficient means of routing network traffic within local networks. To efficiently route 
packet data between networks, IP (Internet Protocol) addressing is introduced as an abstract layer atop the data-link/network-interface layers.</p>
<p>IP addresses are hierarchical in nature, 32-bits are subdivided into four octets in IPv4 (e.g. 192.168.0.1) and 128-bits are subdivided into eight 16-bit groupings
in IPv6 (e.g. 2001:0DB8:AC10:FE01:0000:0000:1a2f:1a2b). Network addresses can be subnetted to create subnetworks. For instance subnetting the network address
192.168.100.10 with the subnet mask 255.255.255.0 creates a subnetwork for which 255 devices can be connected. Local area networks are assigned private addresses,
which can not be assigned to public-facing devices. Within a private network, these addresses are mapped at the router edge to a public-facing IP address to allow for
communication between local network devices and publicly routable devices. Protocols such as the Network Address Translation protocol store port and address connections
in memory to map inbound traffic directed to the router back to the private address of the local device.</p>
<p><img src="/Assets/images/IP_packet_bitfields.png" width="100%" height="100%"></p>
<p>Just as physical and data-link layer switches maintain forwarding tables, internet routers maintain routing tables that map IP addresses to socket connections 
with neighbouring devices. Thus, inbound traffic can be directed based on IP address network prefixes. For instance the network address 192.9.200.15 directed to
the network address 192.9.202.10, may contain a routing table that maps 192.9.201.0 to an active connection that exists as a default route. In another case, where no
default route is known, the network address 192.9.0.0 may route to 192.9.201.0 and then 192.9.200.15 as such a network hop moves down the internet backbone towards
the target device.</p>
<p><img src="/Assets/images/internet_overview.png" width="100%" height="100%"></p>
<!--
Diagram of the internet, BGP, OSPF
TCP handshake, DNS and HTTP
-->
<p>Before looking further into application-layer protocols, it is important to understand the TCP/IP protocol and the client-server model. The 
client-server model makes up a significant portion of internet traffic, that is simply, client devices requesting resources from server devices. There 
does not necessarily exist a distinction between a client and server device, any device may run a client or server program designed to send or retrieve 
data resources over a computer network based on a given protocol. A server could be as simple as a home Desktop port-forwarding a web application through 
the home router, or as complex as a large server farm. Transmission Control Protocol (TCP) Handshakes instantiate the client-server model. Any 
communication protocol exists within a stack of communication protocols, unless the communication protocol itself is the base physical layer. Data frames
from more abstract protocol layers are encapsulated by less abstract protocol layers. Communication of data over an abstract protocol layer requires 
encapsulation of that data by all other underlying protocols. Consider the following:
<img src="/Assets/images/encapsulation.png" width="100%" height="100%"></p>  
<p>Lets now look to DNS. DNS (Domain Name System) is a fundamental component of the internet that is responsible for the translation of human-readable 
domain names (www.example.com) to corresponding IP addresses. ICANN plays a key role in the coordination and oversight of global DNS, including 
the delegation of such maintenance to individual domain registrars and TLD authorities. Here is an overview of DNS resolution:
<ol>
    <li>A DNS resolution request is made: A web browser or web application makes a request to a DNS resolver to resolve a given domain name. The DNS 
        resolver acts as a cache so that frequently requested domain names are quickly resolved. It is typically a part of
        the ISP network. 
    </li>
    <li>The DNS resolution request flows through a hierarchy of DNS servers (root-level DNS servers, top-level-domain servers, authoritative DNS servers,
    etc.)</li>
    <li>An authoritative DNS server is queried if the result has not already been cached in a DNS resolver and the result is sent back to the DNS client
    (managed by the web browser or network application).</li>
    <li>A TCP handshake is initiated and if successful, application-layer data is exchanged.</li>
</ol></p>
<p>The TCP handshake itself is relatively simple. Having been completed, a client and server can begin exchanging data with principles of reliable data
transfer (RDT) in mind: <img src="/Assets/images/TCP_Handshake.png" width="100%" height="100%"></p>